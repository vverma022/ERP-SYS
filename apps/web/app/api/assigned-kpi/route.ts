import { NextResponse } from 'next/server';
import { prisma } from '@repo/db';

/**
 * GET function to fetch all assigned KPIs or KPIs for a specific pillar.
 */
export async function GET(request: Request): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);
    const pillar_id = searchParams.get('pillar_id');

    let assignedKpis;
    if (pillar_id) {
      // Get assigned KPIs for a specific pillar
      assignedKpis = await prisma.assigned_kpi.findMany({
        where: { pillar_id: Number(pillar_id) }
      });
    } else {
      // Get all assigned KPIs
      assignedKpis = await prisma.assigned_kpi.findMany({
        include: {
          pillar: {
            select: {
              pillar_id: true,
              pillar_name: true,
              department: {
                select: {
                  dept_id: true,
                  dept_name: true
                }
              }
            }
          }
        }
      });
    }

    return NextResponse.json({ success: true, assignedKpis });
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
      kpi_id, 
      kpi_name, 
      kpi_status = 'In Progress',
      comments,
      form_data 
    } = body;

    // Validate required fields
    if (!pillar_id) {
      return NextResponse.json(
        { success: false, error: 'Pillar ID is required' },
        { status: 400 }
      );
    }

    if (!kpi_name) {
      return NextResponse.json(
        { success: false, error: 'KPI name is required' },
        { status: 400 }
      );
    }

    if (!form_data) {
      return NextResponse.json(
        { success: false, error: 'Form data is required' },
        { status: 400 }
      );
    }

    // Check if pillar exists
    const pillar = await prisma.pillars.findUnique({
      where: { pillar_id: Number(pillar_id) }
    });

    if (!pillar) {
      return NextResponse.json(
        { success: false, error: 'Pillar not found' },
        { status: 404 }
      );
    }

    // If kpi_id is provided, get KPI data from the KPI table
    let kpiData = form_data;
    let name = kpi_name;
    
    if (kpi_id) {
      const kpi = await prisma.kpi.findUnique({
        where: { kpi_id: Number(kpi_id) }
      });
      
      if (kpi) {
        kpiData = kpi.form_data;
        name = kpi.kpi_name;
      }
    }

    // Create new assigned KPI
    const newAssignedKpi = await prisma.assigned_kpi.create({
      data: {
        pillar_id: Number(pillar_id),
        kpi_name: name,
        kpi_status,
        form_data: kpiData,
        comments: comments || null
      }
    });

    return NextResponse.json({ 
      success: true, 
      message: 'KPI assigned successfully', 
      assignedKpi: newAssignedKpi 
    });
  } catch (error) {
    console.error('Error assigning KPI:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to assign KPI' },
      { status: 500 }
    );
  }
}