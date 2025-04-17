import { NextResponse } from 'next/server';
import { prisma } from '@repo/db';

/**
 * GET function to fetch all assigned KPIs, with optional filtering by pillar_id.
 */
export async function GET(request: Request): Promise<NextResponse> {
  try {
    const url = new URL(request.url);
    const pillarId = url.searchParams.get('pillar_id');
    
    const where = pillarId ? { pillar_id: Number(pillarId) } : {};
    
    const assignedKpis = await prisma.assigned_kpi.findMany({
      where,
      include: {
        pillar: true // This should be "pillar" as defined in your assigned_kpi model relation
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
      pillar: kpi.pillar,
      id: `assigned-${kpi.assigned_kpi_id}`,
      elements: kpi.form_data,  // Map form_data to elements
      original_kpi_id: kpiNameToIdMap[kpi.kpi_name] || null
    }));
    
    return NextResponse.json({ success: true, assignedKpis: transformedKpis });
  } catch (error) {
    console.error('Error fetching assigned KPIs:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch assigned KPIs' },
      { status: 500 }
    );
  }
}

/**
 * POST function to assign a KPI to a pillar.
 */
export async function POST(request: Request): Promise<NextResponse> {
  try {
    const body = await request.json();
    const {
      pillarId,     // Changed from pillar_id to match your input format
      kpiIds,       // Now expecting an array of KPI IDs
      kpi_status,   // Optional status to apply to all assigned KPIs
      comments      // Optional comments to apply to all assigned KPIs
    } = body;
    
    // Validate required fields
    if (!pillarId) {
      return NextResponse.json(
        { success: false, error: 'Pillar ID is required' },
        { status: 400 }
      );
    }
    
    if (!kpiIds || !Array.isArray(kpiIds) || kpiIds.length === 0) {
      return NextResponse.json(
        { success: false, message: 'At least one KPI ID is required' },
        { status: 400 }
      );
    }
    
    // Check if pillar exists
    const pillar = await prisma.pillars.findUnique({
      where: { pillar_id: Number(pillarId) }
    });
    
    if (!pillar) {
      return NextResponse.json(
        { success: false, message: 'Pillar not found' },
        { status: 404 }
      );
    }
    
    // Process each KPI ID and create assigned KPIs
    const assignedKpis = [];
    const errors = [];
    
    for (const kpiId of kpiIds) {
      try {
        // Fetch the KPI template
        const kpiTemplate = await prisma.kpi.findUnique({
          where: { kpi_id: Number(kpiId) }
        });
        
        if (!kpiTemplate) {
          errors.push({ kpiId, error: 'KPI template not found' });
          continue;
        }
        
        // Create the assigned KPI
        const assignedKpi = await prisma.assigned_kpi.create({
          data: {
            pillar_id: Number(pillarId),
            kpi_name: kpiTemplate.kpi_name,
            kpi_status: kpi_status || 'Not Started',
            form_data: kpiTemplate.form_data || {}, // Copy form_data from the template
            added_date: new Date(),
            comments: comments || ''
          }
        });
        
        // Add to the successfully assigned KPIs list
        assignedKpis.push({
          assigned_kpi_id: assignedKpi.assigned_kpi_id,
          pillar_id: assignedKpi.pillar_id,
          kpi_name: assignedKpi.kpi_name,
          kpi_status: assignedKpi.kpi_status,
          added_date: assignedKpi.added_date,
          resolved_date: assignedKpi.resolved_date,
          comments: assignedKpi.comments,
          id: `assigned-${assignedKpi.assigned_kpi_id}`,
          elements: assignedKpi.form_data
        });
      } catch (err) {
        // Log and collect any errors for individual KPIs
        console.error(`Error assigning KPI ${kpiId}:`, err);
        errors.push({ kpiId, error: err instanceof Error ? err.message : 'Unknown error' });
      }
    }
    
    // Return response with successfully assigned KPIs and any errors
    return NextResponse.json({
      success: assignedKpis.length > 0,
      message: assignedKpis.length > 0 
        ? `Successfully assigned ${assignedKpis.length} KPIs` 
        : 'Failed to assign any KPIs',
      assignedKpis,
      errors: errors.length > 0 ? errors : undefined
    });
  } catch (error) {
    console.error('Error in KPI batch assignment:', error);
    
    // More detailed error handling
    if (error instanceof Error) {
      return NextResponse.json(
        { success: false, error: `Failed to assign KPIs: ${error.message}` },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { success: false, error: 'Failed to assign KPIs' },
      { status: 500 }
    );
  }
}