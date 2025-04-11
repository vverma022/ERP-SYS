import { NextResponse } from 'next/server';
import { prisma } from '@repo/db';

/**
 * GET function to fetch a specific KPI by ID.
 */
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  try {
    const { id } = params;
    const kpi_id = Number(id);

    const kpi = await prisma.kpi.findUnique({
      where: { kpi_id }
    });

    if (!kpi) {
      return NextResponse.json(
        { success: false, error: 'KPI not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, kpi });
  } catch (error) {
    console.error('Error fetching KPI:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch KPI' },
      { status: 500 }
    );
  }
}

/**
 * PUT function to update a KPI.
 */
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  try {
    const { id } = params;
    const kpi_id = Number(id);
    
    // Add error handling for JSON parsing
    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      console.error('Error parsing JSON body:', parseError);
      return NextResponse.json(
        { success: false, error: 'Invalid JSON in request body' },
        { status: 400 }
      );
    }
    
    const { kpi_name, form_data } = body;

    // Check if at least one field is provided
    if (!kpi_name && !form_data) {
      return NextResponse.json(
        { success: false, error: 'At least one field (kpi_name or form_data) must be provided' },
        { status: 400 }
      );
    }

    // Check if KPI exists
    const existingKpi = await prisma.kpi.findUnique({
      where: { kpi_id }
    });

    if (!existingKpi) {
      return NextResponse.json(
        { success: false, error: 'KPI not found' },
        { status: 404 }
      );
    }

    // Prepare update data
    const updateData: any = {};
    if (kpi_name) updateData.kpi_name = kpi_name;
    if (form_data) updateData.form_data = form_data;

    // Check if new KPI name already exists (if changing name)
    if (kpi_name && kpi_name !== existingKpi.kpi_name) {
      const duplicateKpi = await prisma.kpi.findUnique({
        where: { kpi_name }
      });

      if (duplicateKpi) {
        return NextResponse.json(
          { success: false, error: 'A KPI with this name already exists' },
          { status: 400 }
        );
      }
    }

    // Update KPI
    const updatedKpi = await prisma.kpi.update({
      where: { kpi_id },
      data: updateData
    });

    return NextResponse.json({ 
      success: true, 
      message: 'KPI updated successfully', 
      kpi: updatedKpi 
    });
  } catch (error) {
    console.error('Error updating KPI:', error);
    
    // Handle unique constraint violation
    if ((error as any).code === 'P2002') {
      return NextResponse.json(
        { success: false, error: 'A KPI with this name already exists' },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { success: false, error: 'Failed to update KPI' },
      { status: 500 }
    );
  }
}

/**
 * DELETE function to delete a KPI.
 */
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  try {
    const { id } = params;
    const kpi_id = Number(id);

    // Check if KPI exists
    const existingKpi = await prisma.kpi.findUnique({
      where: { kpi_id }
    });

    if (!existingKpi) {
      return NextResponse.json(
        { success: false, error: 'KPI not found' },
        { status: 404 }
      );
    }
    
    // Check if KPI is in use by any assigned_kpi
    const assignedKpis = await prisma.assigned_kpi.findMany({
      where: { kpi_name: existingKpi.kpi_name },
      take: 1 // We only need to know if there's at least one
    });
    
    if (assignedKpis.length > 0) {
      return NextResponse.json(
        { success: false, error: 'Cannot delete KPI that is in use. Remove all assigned instances first.' },
        { status: 400 }
      );
    }

    // Delete KPI
    await prisma.kpi.delete({
      where: { kpi_id }
    });

    return NextResponse.json({ 
      success: true, 
      message: 'KPI deleted successfully' 
    });
  } catch (error) {
    console.error('Error deleting KPI:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete KPI' },
      { status: 500 }
    );
  }
}