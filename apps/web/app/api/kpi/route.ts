import { NextResponse } from 'next/server';
import { prisma } from '@repo/db';

/**
 * GET function to fetch all KPIs.
 */
export async function GET(request: Request): Promise<NextResponse> {
  try {
    const kpis = await prisma.kpi.findMany();
    
    // Transform KPIs to match frontend format
    const transformedKpis = kpis.map(kpi => ({
      kpi_id: kpi.kpi_id,
      kpi_name: kpi.kpi_name,
      kpi_created_at: kpi.kpi_created_at,
      kpi_updated_at: kpi.kpi_updated_at,
      kpi_value: kpi.kpi_value,
      kpi_description: kpi.kpi_description,
      id: kpi.kpi_name,
      elements: kpi.form_data
    }));
    
    return NextResponse.json({ success: true, kpis: transformedKpis });
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
    const { 
      id, 
      title, 
      elements, 
      createdAt, 
      updatedAt,
      kpi_value,
      kpi_description
    } = body;

    // Validate required fields
    if (!id) {
      return NextResponse.json(
        { success: false, error: 'KPI id is required' },
        { status: 400 }
      );
    }

    if (!elements || !Array.isArray(elements)) {
      return NextResponse.json(
        { success: false, error: 'Form elements are required and must be an array' },
        { status: 400 }
      );
    }

    // Check if KPI with same name already exists
    const existingKpi = await prisma.kpi.findFirst({
      where: { kpi_name: id }
    });

    if (existingKpi) {
      return NextResponse.json(
        { success: false, error: 'A KPI with this ID already exists' },
        { status: 400 }
      );
    }

    // Create new KPI with additional fields
    const newKpi = await prisma.kpi.create({
      data: {
        kpi_name: id,
        form_data: elements,
        kpi_created_at: createdAt ? new Date(createdAt) : new Date(),
        kpi_updated_at: updatedAt ? new Date(updatedAt) : new Date(),
        kpi_value: kpi_value !== undefined ? kpi_value : null,
        kpi_description: kpi_description || null
      }
    });

    // Return the created KPI with consistent structure
    return NextResponse.json({ 
      success: true, 
      message: 'KPI created successfully', 
      kpi: {
        kpi_id: newKpi.kpi_id,
        kpi_name: newKpi.kpi_name,
        kpi_created_at: newKpi.kpi_created_at,
        kpi_updated_at: newKpi.kpi_updated_at,
        kpi_value: newKpi.kpi_value,
        kpi_description: newKpi.kpi_description,
        id: newKpi.kpi_name,
        elements: newKpi.form_data
      }
    });
  } catch (error) {
    console.error('Error creating KPI:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create KPI' },
      { status: 500 }
    );
  }
}