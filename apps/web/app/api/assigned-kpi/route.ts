import { NextResponse } from 'next/server';
import { prisma, Prisma } from '@repo/db';

/**
 * GET function to fetch all assigned KPIs, with optional filtering by department_id and/or pillar_id.
 */
export async function GET(request: Request): Promise<NextResponse> {
  try {
    const url = new URL(request.url);
    const departmentId = url.searchParams.get('department_id');
    const pillarId = url.searchParams.get('pillar_id');
    
    // Build query conditions
    let where: any = {};
    
    // If pillar_id is provided, filter by it
    if (pillarId) {
      where.pillar_id = Number(pillarId);
    }
    
    // If department_id is provided, we need to filter by pillars in that department
    if (departmentId) {
      // Get all pillars for this department first
      const pillarsInDept = await prisma.pillars.findMany({
        where: { department_id: Number(departmentId) },
        select: { pillar_id: true }
      });
      
      const pillarIds = pillarsInDept.map(p => p.pillar_id);
      
      // If pillar_id was also provided, ensure it's in the department's pillars
      if (pillarId) {
        if (!pillarIds.includes(Number(pillarId))) {
          return NextResponse.json(
            { 
              success: false, 
              error: `Pillar ID ${pillarId} does not belong to Department ID ${departmentId}` 
            },
            { status: 400 }
          );
        }
      } else {
        // If only department_id was provided, filter by all its pillars
        where.pillar_id = { in: pillarIds };
      }
    }
    
    // Fetch assigned KPIs with filtering
    const assignedKpis = await prisma.assigned_kpi.findMany({
      where,
      include: {
        pillar: {
          include: {
            department: true
          }
        }
      }
    });
    
    // Get all unique KPI names from the assigned KPIs
    const kpiNames = [...new Set(assignedKpis.map(kpi => kpi.kpi_name))];
    
    // Fetch all original KPIs that match these names in one query
    const originalKpis = await prisma.kpi.findMany({
      where: {
        kpi_name: {
          in: kpiNames
        }
      },
      select: {
        kpi_id: true,
        kpi_name: true
      }
    });
    
    // Create a map for quick lookup with proper typing
    const kpiNameToIdMap: Record<string, number> = {};
    originalKpis.forEach(kpi => {
      kpiNameToIdMap[kpi.kpi_name] = kpi.kpi_id;
    });
    
    // Transform assigned KPIs to match frontend format
    const transformedKpis = assignedKpis.map(kpi => ({
      assigned_kpi_id: kpi.assigned_kpi_id,
      pillar_id: kpi.pillar_id,
      kpi_name: kpi.kpi_name,
      kpi_status: kpi.kpi_status,
      added_date: kpi.added_date,
      resolved_date: kpi.resolved_date,
      comments: kpi.comments,
      kpi_value: kpi.kpi_value,
      kpi_description: kpi.kpi_description,
      form_input: kpi.form_input,
      pillar: kpi.pillar,
      department: kpi.pillar.department,
      id: `assigned-${kpi.assigned_kpi_id}`,
      elements: kpi.form_data,  // Map form_data to elements
      original_kpi_id: kpiNameToIdMap[kpi.kpi_name] || null
    }));
    
    return NextResponse.json({ 
      success: true, 
      assignedKpis: transformedKpis 
    });
  } catch (error) {
    console.error('Error fetching assigned KPIs:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch assigned KPIs' },
      { status: 500 }
    );
  }
}

/**
 * POST function to assign KPI(s) to a pillar, ensuring the pillar belongs to the correct department.
 */
export async function POST(request: Request): Promise<NextResponse> {
  try {
    const body = await request.json();
    const {
      departmentId,
      pillarId,
      kpiIds,
      kpi_name,
      kpi_status,
      kpi_value,
      kpi_description,
      comments,
      form_input
    } = body;
    
    // Validate required fields
    if (!departmentId) {
      return NextResponse.json(
        { success: false, error: 'Department ID is required' },
        { status: 400 }
      );
    }
    
    if (!pillarId) {
      return NextResponse.json(
        { success: false, error: 'Pillar ID is required' },
        { status: 400 }
      );
    }
    
    if (!kpiIds || !Array.isArray(kpiIds) || kpiIds.length === 0) {
      return NextResponse.json(
        { success: false, error: 'At least one KPI ID is required' },
        { status: 400 }
      );
    }
    
    // Verify that the pillar belongs to the specified department
    const pillar = await prisma.pillars.findFirst({
      where: {
        pillar_id: Number(pillarId),
        department_id: Number(departmentId)
      }
    });
    
    if (!pillar) {
      return NextResponse.json(
        {
          success: false,
          error: `Pillar ID ${pillarId} does not belong to Department ID ${departmentId}`
        },
        { status: 404 }
      );
    }
    
    // Get all pillars for this department to check for duplicate KPIs
    const departmentPillars = await prisma.pillars.findMany({
      where: {
        department_id: Number(departmentId)
      },
      select: {
        pillar_id: true
      }
    });
    
    const departmentPillarIds = departmentPillars.map(p => p.pillar_id);
    
    // Process each KPI in the array
    const assignedKpis = [];
    
    for (const kpiId of kpiIds) {
      // Fetch the KPI template
      const kpiTemplate = await prisma.kpi.findUnique({
        where: { kpi_id: Number(kpiId) }
      });
      
      if (!kpiTemplate) {
        return NextResponse.json(
          { success: false, error: `KPI template with ID ${kpiId} not found` },
          { status: 404 }
        );
      }
      
      // Use name from template if not provided
      const assignedKpiName = kpi_name || kpiTemplate.kpi_name;
      
      // Check if this KPI is already assigned to any pillar in this department
      const existingKpi = await prisma.assigned_kpi.findFirst({
        where: {
          kpi_name: assignedKpiName,
          pillar_id: {
            in: departmentPillarIds
          }
        },
        include: {
          pillar: true
        }
      });
      
      if (existingKpi) {
        return NextResponse.json(
          { 
            success: false, 
            error: `KPI "${assignedKpiName}" is already assigned to pillar "${existingKpi.pillar.pillar_name}" in Department ID ${departmentId}` 
          },
          { status: 409 } // 409 Conflict is appropriate for duplicate resources
        );
      }
      
      // Create the assigned KPI
      const assignedKpi = await prisma.assigned_kpi.create({
        data: {
          pillar_id: Number(pillarId),
          kpi_name: assignedKpiName,
          kpi_status: kpi_status || 'Not Started',
          form_data: kpiTemplate.form_data as unknown as Prisma.InputJsonValue,
          added_date: new Date(),
          resolved_date: null,
          comments: comments || '',
          kpi_value: kpi_value !== undefined ? kpi_value : kpiTemplate.kpi_value,
          kpi_description: kpi_description || kpiTemplate.kpi_description || '',
          form_input: form_input || null
        },
        include: {
          pillar: {
            include: {
              department: true
            }
          }
        }
      });
      
      // Transform the structure for response
      assignedKpis.push({
        assigned_kpi_id: assignedKpi.assigned_kpi_id,
        pillar_id: assignedKpi.pillar_id,
        kpi_name: assignedKpi.kpi_name,
        kpi_status: assignedKpi.kpi_status,
        added_date: assignedKpi.added_date,
        resolved_date: assignedKpi.resolved_date,
        comments: assignedKpi.comments,
        kpi_value: assignedKpi.kpi_value,
        kpi_description: assignedKpi.kpi_description,
        form_input: assignedKpi.form_input,
        department: assignedKpi.pillar.department,
        pillar: assignedKpi.pillar,
        id: `assigned-${assignedKpi.assigned_kpi_id}`,
        elements: assignedKpi.form_data
      });
    }
    
    // Return success with all assigned KPIs
    return NextResponse.json({
      success: true,
      message: `Successfully assigned ${assignedKpis.length} KPI(s)`,
      assignedKpis
    });
  } catch (error) {
    console.error('Error assigning KPI(s):', error);
    
    if (error instanceof Error) {
      return NextResponse.json(
        { success: false, error: `Failed to assign KPI(s): ${error.message}` },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { success: false, error: 'Failed to assign KPI(s)' },
      { status: 500 }
    );
  }
}