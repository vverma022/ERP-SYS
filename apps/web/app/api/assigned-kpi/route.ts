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
      elements: kpi.form_data  // Map form_data to elements
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
      pillar_id,
      kpi_id,  // Required to find the KPI template
      kpi_name, // Optional, can use the name from the KPI template if not provided
      kpi_status, 
      comments
    } = body;
    
    // Validate required fields
    if (!pillar_id) {
      return NextResponse.json(
        { success: false, error: 'Pillar ID is required' },
        { status: 400 }
      );
    }
    
    if (!kpi_id) {
      return NextResponse.json(
        { success: false, message: 'KPI ID is required' },
        { status: 400 }
      );
    }
    
    // Check if pillar exists - use pillars (plural) as defined in your schema
    const pillar = await prisma.pillars.findUnique({
      where: { pillar_id: Number(pillar_id) }
    });
    
    if (!pillar) {
      return NextResponse.json(
        { success: false, message: 'Pillar not found' },
        { status: 404 }
      );
    }
    
    // Fetch the KPI template using kpi_id
    const kpiTemplate = await prisma.kpi.findUnique({
      where: { kpi_id: Number(kpi_id) }
    });
    
    if (!kpiTemplate) {
      return NextResponse.json(
        { success: false, error: 'KPI template not found' },
        { status: 404 }
      );
    }
    
    // Use name from template if not provided
    const assignedKpiName = kpi_name || kpiTemplate.kpi_name;
    
    // Create the assigned KPI with form_data copied from the template
    const assignedKpi = await prisma.assigned_kpi.create({
      data: {
        pillar_id: Number(pillar_id),
        kpi_name: assignedKpiName,
        kpi_status: kpi_status || 'Not Started',
        form_data: kpiTemplate.form_data || {}, // Copy form_data from the KPI template with empty object fallback
        added_date: new Date(),
        comments: comments || ''
      }
    });
    
    // Return the newly created assigned KPI with frontend-friendly format
    return NextResponse.json({
      success: true,
      message: 'KPI assigned successfully',
      assignedKpi: {
        assigned_kpi_id: assignedKpi.assigned_kpi_id,
        pillar_id: assignedKpi.pillar_id,
        kpi_name: assignedKpi.kpi_name,
        kpi_status: assignedKpi.kpi_status,
        added_date: assignedKpi.added_date,
        resolved_date: assignedKpi.resolved_date,
        comments: assignedKpi.comments,
        id: `assigned-${assignedKpi.assigned_kpi_id}`,
        elements: assignedKpi.form_data
      }
    });
  } catch (error) {
    console.error('Error assigning KPI:', error);
    
    // More detailed error handling
    if (error instanceof Error) {
      return NextResponse.json(
        { success: false, error: `Failed to assign KPI: ${error.message}` },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { success: false, error: 'Failed to assign KPI' },
      { status: 500 }
    );
  }
}