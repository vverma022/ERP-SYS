import { NextResponse } from 'next/server';
import { prisma } from '@repo/db';

/**
 * GET function to fetch a specific assigned KPI.
 */
export async function GET(
  request: Request,
  { params }: { params: { id: number } }
): Promise<NextResponse> {
  try {
    const { id } = params;
    const assigned_kpi_id = id;
    
    if (isNaN(assigned_kpi_id)) {
      return NextResponse.json(
        { success: false, error: 'Invalid assigned KPI ID' },
        { status: 400 }
      );
    }
    
    const assignedKpi = await prisma.assigned_kpi.findUnique({
      where: { assigned_kpi_id },
      include: {
        pillar: {
          include: {
            department: true
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
    
    // Return with transformed structure
    const responseKpi = {
      assigned_kpi_id: assignedKpi.assigned_kpi_id,
      pillar_id: assignedKpi.pillar_id,
      kpi_name: assignedKpi.kpi_name,
      kpi_status: assignedKpi.kpi_status,
      added_date: assignedKpi.added_date,
      resolved_date: assignedKpi.resolved_date,
      comments: assignedKpi.comments,
      pillar: assignedKpi.pillar,
      id: `assigned-${assignedKpi.assigned_kpi_id}`,
      elements: assignedKpi.form_data
    };
    
    return NextResponse.json({ success: true, assignedKpi: responseKpi });
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
): Promise<NextResponse> {
  try {
    const { id } = params;
    const assigned_kpi_id = Number(id);
    
    if (isNaN(assigned_kpi_id)) {
      return NextResponse.json(
        { success: false, error: 'Invalid assigned KPI ID' },
        { status: 400 }
      );
    }
    
    const body = await request.json();
    const { kpi_status, comments, elements, resolved_date } = body;
    
    // Check if assigned KPI exists
    const existingKpi = await prisma.assigned_kpi.findUnique({
      where: { assigned_kpi_id }
    });
    
    if (!existingKpi) {
      return NextResponse.json(
        { success: false, error: 'Assigned KPI not found' },
        { status: 404 }
      );
    }
    
    // Update data preparation
    const updateData: any = {};
    
    if (kpi_status) updateData.kpi_status = kpi_status;
    if (comments !== undefined) updateData.comments = comments;
    if (elements) updateData.form_data = elements;
    if (resolved_date) updateData.resolved_date = new Date(resolved_date);
    
    // Update the assigned KPI
    const updatedKpi = await prisma.assigned_kpi.update({
      where: { assigned_kpi_id },
      data: updateData
    });
    
    // Return with transformed structure
    return NextResponse.json({
      success: true,
      message: 'Assigned KPI updated successfully',
      assignedKpi: {
        assigned_kpi_id: updatedKpi.assigned_kpi_id,
        pillar_id: updatedKpi.pillar_id,
        kpi_name: updatedKpi.kpi_name,
        kpi_status: updatedKpi.kpi_status,
        added_date: updatedKpi.added_date,
        resolved_date: updatedKpi.resolved_date,
        comments: updatedKpi.comments,
        id: `assigned-${updatedKpi.assigned_kpi_id}`,
        elements: updatedKpi.form_data
      }
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
): Promise<NextResponse> {
  try {
    const { id } = params;
    const assigned_kpi_id = Number(id);
    
    if (isNaN(assigned_kpi_id)) {
      return NextResponse.json(
        { success: false, error: 'Invalid assigned KPI ID' },
        { status: 400 }
      );
    }
    
    // Check if assigned KPI exists
    const existingKpi = await prisma.assigned_kpi.findUnique({
      where: { assigned_kpi_id }
    });
    
    if (!existingKpi) {
      return NextResponse.json(
        { success: false, error: 'Assigned KPI not found' },
        { status: 404 }
      );
    }
    
    // Delete the assigned KPI
    await prisma.assigned_kpi.delete({
      where: { assigned_kpi_id }
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