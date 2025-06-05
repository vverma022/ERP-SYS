import { NextResponse } from 'next/server';
import { prisma } from '@repo/db';

/**
 * GET function to fetch a specific KPI by ID.
 */
export async function GET(
  request: Request,
  context: { params: { id: string } }
): Promise<NextResponse> {
  try {
    const id = context.params.id;
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

    // Return KPI with transformed structure for frontend
    // Include the new fields: kpi_value and kpi_description
    const responseKpi = {
      kpi_id: kpi.kpi_id,
      kpi_name: kpi.kpi_name,
      kpi_created_at: kpi.kpi_created_at,
      kpi_updated_at: kpi.kpi_updated_at,
      kpi_value: kpi.kpi_value,
      kpi_description: kpi.kpi_description,
      id: kpi.kpi_name,
      elements: kpi.form_data
    };

    return NextResponse.json({ success: true, kpi: responseKpi });
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
    
    // Parse request body
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
    
    const { 
      elements, 
      updatedAt, 
      kpi_value, 
      kpi_description 
    } = body;

    // Check if elements are provided
    if (!elements || !Array.isArray(elements)) {
      return NextResponse.json(
        { success: false, error: 'Form elements are required and must be an array' },
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

    // Update KPI - include new fields in the update operation
    const updatedKpi = await prisma.kpi.update({
      where: { kpi_id },
      data: {
        form_data: elements,
        kpi_updated_at: updatedAt ? new Date(updatedAt) : new Date(),
        kpi_value: kpi_value !== undefined ? kpi_value : existingKpi.kpi_value,
        kpi_description: kpi_description !== undefined ? kpi_description : existingKpi.kpi_description
      }
    });

    // Return updated KPI with transformed structure including new fields
    return NextResponse.json({ 
      success: true, 
      message: 'KPI updated successfully', 
      kpi: {
        kpi_id: updatedKpi.kpi_id,
        kpi_name: updatedKpi.kpi_name,
        kpi_created_at: updatedKpi.kpi_created_at,
        kpi_updated_at: updatedKpi.kpi_updated_at,
        kpi_value: updatedKpi.kpi_value,
        kpi_description: updatedKpi.kpi_description,
        id: updatedKpi.kpi_name,
        elements: updatedKpi.form_data
      }
    });
  } catch (error) {
    console.error('Error updating KPI:', error);
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
    
    // First delete all assigned_kpi entries with this KPI name
    const deletedAssignments = await prisma.assigned_kpi.deleteMany({
      where: { kpi_name: existingKpi.kpi_name }
    });
    
    // Then delete the KPI itself
    await prisma.kpi.delete({
      where: { kpi_id }
    });
    
    return NextResponse.json({
      success: true,
      message: 'KPI and all its assignments deleted successfully',
      deleted: {
        kpi_id: kpi_id,
        kpi_name: existingKpi.kpi_name,
        kpi_value: existingKpi.kpi_value,
        kpi_description: existingKpi.kpi_description
      },
      assignmentsDeleted: deletedAssignments.count
    });
  } catch (error) {
    console.error('Error deleting KPI:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete KPI' },
      { status: 500 }
    );
  }
}