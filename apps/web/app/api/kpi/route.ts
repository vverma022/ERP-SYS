import { NextResponse } from 'next/server';
import { prisma } from '@repo/db';

/**
 * GET function to fetch all KPIs.
 */
export async function GET(request: Request): Promise<NextResponse> {
  try {
    const kpis = await prisma.kpi.findMany();
    return NextResponse.json({ success: true, kpis });
  } catch (error) {
    console.error('Error fetching KPIs:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch KPIs' },
      { status: 500 }
    );
  }
}

/**
 * POST function to create a new KPI.
 */
export async function POST(request: Request): Promise<NextResponse> {
  try {
    const body = await request.json();
    const { kpi_name, form_data } = body;

    // Validate required fields
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

    // Check if KPI with same name already exists
    const existingKpi = await prisma.kpi.findUnique({
      where: { kpi_name }
    });

    if (existingKpi) {
      return NextResponse.json(
        { success: false, error: 'A KPI with this name already exists' },
        { status: 400 }
      );
    }

    // Create new KPI
    const newKpi = await prisma.kpi.create({
      data: {
        kpi_name,
        form_data
      }
    });

    return NextResponse.json({ 
      success: true, 
      message: 'KPI created successfully', 
      kpi: newKpi 
    });
  } catch (error) {
    console.error('Error creating KPI:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create KPI' },
      { status: 500 }
    );
  }
}