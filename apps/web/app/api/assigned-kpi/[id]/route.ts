import { NextResponse } from 'next/server';
import { prisma } from '@repo/db';

/**
 * GET function to fetch a specific assigned KPI, including department context.
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
    
    // Return with transformed structure and department context
    const responseKpi = {
      assigned_kpi_id: assignedKpi.assigned_kpi_id,
      pillar_id: assignedKpi.pillar_id,
      department_id: assignedKpi.pillar.department_id,
      kpi_name: assignedKpi.kpi_name,
      kpi_status: assignedKpi.kpi_status,
      added_date: assignedKpi.added_date,
      resolved_date: assignedKpi.resolved_date,
      comments: assignedKpi.comments,
      kpi_value: assignedKpi.kpi_value,
      kpi_description: assignedKpi.kpi_description,
      form_input: assignedKpi.form_input,
      pillar: assignedKpi.pillar,
      department: assignedKpi.pillar.department,
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
 * PUT function to update an assigned KPI, with enhanced data handling.
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
    const { 
      kpi_status, 
      comments, 
      elements, 
      resolved_date,
      kpi_value,
      kpi_description,
      form_input
    } = body;
    
    // Check if assigned KPI exists and get its related data
    const existingKpi = await prisma.assigned_kpi.findUnique({
      where: { assigned_kpi_id },
      include: {
        pillar: {
          include: {
            department: true
          }
        }
      }
    });
    
    if (!existingKpi) {
      return NextResponse.json(
        { success: false, error: 'Assigned KPI not found' },
        { status: 404 }
      );
    }
    
    // Optional: Validate department_id if provided
    if (body.department_id && existingKpi.pillar.department_id !== Number(body.department_id)) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Cannot change the department of an assigned KPI' 
        },
        { status: 400 }
      );
    }
    
    // Optional: If pillar_id is being changed, ensure it belongs to the same department
    if (body.pillar_id && body.pillar_id !== existingKpi.pillar_id) {
      const newPillar = await prisma.pillars.findFirst({
        where: {
          pillar_id: Number(body.pillar_id),
          department_id: existingKpi.pillar.department_id
        }
      });
      
      if (!newPillar) {
        return NextResponse.json(
          { 
            success: false, 
            error: 'New pillar must belong to the same department' 
          },
          { status: 400 }
        );
      }
    }
    
    // Update data preparation
    const updateData: any = {};
    
    if (body.pillar_id) updateData.pillar_id = Number(body.pillar_id);
    if (kpi_status !== undefined) updateData.kpi_status = kpi_status;
    if (comments !== undefined) updateData.comments = comments;
    if (elements) updateData.form_data = elements;
    if (resolved_date) updateData.resolved_date = new Date(resolved_date);
    if (kpi_value !== undefined) updateData.kpi_value = kpi_value;
    if (kpi_description !== undefined) updateData.kpi_description = kpi_description;
    if (form_input !== undefined) updateData.form_input = form_input;
    
    // Update the assigned KPI
    const updatedKpi = await prisma.assigned_kpi.update({
      where: { assigned_kpi_id },
      data: updateData,
      include: {
        pillar: {
          include: {
            department: true
          }
        }
      }
    });
    
    // Return with transformed structure and department context
    return NextResponse.json({
      success: true,
      message: 'Assigned KPI updated successfully',
      assignedKpi: {
        assigned_kpi_id: updatedKpi.assigned_kpi_id,
        pillar_id: updatedKpi.pillar_id,
        department_id: updatedKpi.pillar.department_id,
        kpi_name: updatedKpi.kpi_name,
        kpi_status: updatedKpi.kpi_status,
        added_date: updatedKpi.added_date,
        resolved_date: updatedKpi.resolved_date,
        comments: updatedKpi.comments,
        kpi_value: updatedKpi.kpi_value,
        kpi_description: updatedKpi.kpi_description,
        form_input: updatedKpi.form_input,
        department: updatedKpi.pillar.department,
        pillar: updatedKpi.pillar,
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
      where: { assigned_kpi_id },
      include: {
        pillar: true
      }
    });
    
    if (!existingKpi) {
      return NextResponse.json(
        { success: false, error: 'Assigned KPI not found' },
        { status: 404 }
      );
    }
    
    // Keep track of the department and pillar info for the response
    const deletedInfo = {
      pillar_id: existingKpi.pillar_id,
      department_id: existingKpi.pillar.department_id,
      kpi_name: existingKpi.kpi_name
    };
    
    // Delete the assigned KPI
    await prisma.assigned_kpi.delete({
      where: { assigned_kpi_id }
    });
    
    return NextResponse.json({
      success: true,
      message: 'Assigned KPI deleted successfully',
      deleted: {
        assigned_kpi_id,
        ...deletedInfo
      }
    });
  } catch (error) {
    console.error('Error deleting assigned KPI:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete assigned KPI' },
      { status: 500 }
    );
  }
}