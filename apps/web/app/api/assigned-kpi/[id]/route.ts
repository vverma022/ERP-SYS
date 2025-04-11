import { NextResponse } from 'next/server';
import { prisma } from '@repo/db';

/**
 * GET function to fetch a specific assigned KPI by ID.
 */
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
): Promise<Response> {
  try {
    const assigned_kpi_id = params.id;

    const assignedKpi = await prisma.assigned_kpi.findUnique({
      where: { assigned_kpi_id: Number(assigned_kpi_id) },
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

    if (!assignedKpi) {
      return NextResponse.json(
        { success: false, error: 'Assigned KPI not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, assignedKpi });
  } catch (error) {
    console.error('Error fetching assigned KPI:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch assigned KPI' },
      { status: 500 }
    );
  }
}

/**
 * PUT function to update an assigned KPI.
 */
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
): Promise<Response> {
  try {
    const assigned_kpi_id = params.id;
    const body = await request.json();
    const { kpi_name, kpi_status, form_data, comments, resolved_date } = body;

    // Check if assigned KPI exists
    const existingAssignedKpi = await prisma.assigned_kpi.findUnique({
      where: { assigned_kpi_id: Number(assigned_kpi_id) }
    });

    if (!existingAssignedKpi) {
      return NextResponse.json(
        { success: false, error: 'Assigned KPI not found' },
        { status: 404 }
      );
    }

    // Prepare update data
    const updateData: any = {};
    if (kpi_name) updateData.kpi_name = kpi_name;
    if (kpi_status) updateData.kpi_status = kpi_status;
    if (form_data) updateData.form_data = form_data;
    if (comments !== undefined) updateData.comments = comments;
    if (resolved_date !== undefined) updateData.resolved_date = resolved_date;

    // Update assigned KPI
    const updatedAssignedKpi = await prisma.assigned_kpi.update({
      where: { assigned_kpi_id: Number(assigned_kpi_id) },
      data: updateData
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Assigned KPI updated successfully', 
      assignedKpi: updatedAssignedKpi 
    });
  } catch (error) {
    console.error('Error updating assigned KPI:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update assigned KPI' },
      { status: 500 }
    );
  }
}

/**
 * DELETE function to delete an assigned KPI.
 */
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const assigned_kpi_id = params.id;

    // Check if assigned KPI exists
    const existingAssignedKpi = await prisma.assigned_kpi.findUnique({
      where: { assigned_kpi_id: Number(assigned_kpi_id) }
    });

    if (!existingAssignedKpi) {
      return NextResponse.json(
        { success: false, error: 'Assigned KPI not found' },
        { status: 404 }
      );
    }

    // Delete assigned KPI
    await prisma.assigned_kpi.delete({
      where: { assigned_kpi_id: Number(assigned_kpi_id) }
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Assigned KPI deleted successfully' 
    });
  } catch (error) {
    console.error('Error deleting assigned KPI:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete assigned KPI' },
      { status: 500 }
    );
  }
}