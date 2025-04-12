import { NextResponse } from 'next/server';
import { prisma } from '@repo/db';

/**
 * GET function to fetch a specific pillar by ID.
 */
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
): Promise<Response> {
  try {
    const pillar_id = params.id;

    const pillar = await prisma.pillars.findUnique({
      where: { pillar_id: Number(pillar_id) },
      include: {
        department: {
          select: {
            dept_id: true,
            dept_name: true
          }
        },
        assigned_kpi: true
      }
    });

    // Transform assigned KPIs for consistent structure
    if (pillar && pillar.assigned_kpi) {
      pillar.assigned_kpi = pillar.assigned_kpi.map(kpi => ({
        ...kpi,
        id: `assigned-${kpi.assigned_kpi_id}`,
        elements: kpi.form_data
      }));
    }

    if (!pillar) {
      return NextResponse.json(
        { success: false, error: 'Pillar not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, pillar });
  } catch (error) {
    console.error('Error fetching pillar:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch pillar' },
      { status: 500 }
    );
  }
}

/**
 * PUT function to update a pillar.
 */
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const pillar_id = params.id;
    const body = await request.json();
    const { pillar_name } = body;

    // Validate required fields
    if (!pillar_name) {
      return NextResponse.json(
        { success: false, error: 'Pillar name is required' },
        { status: 400 }
      );
    }

    // Check if pillar exists
    const existingPillar = await prisma.pillars.findUnique({
      where: { pillar_id: Number(pillar_id) }
    });

    if (!existingPillar) {
      return NextResponse.json(
        { success: false, error: 'Pillar not found' },
        { status: 404 }
      );
    }

    // Update pillar
    const updatedPillar = await prisma.pillars.update({
      where: { pillar_id: Number(pillar_id) },
      data: { pillar_name }
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Pillar updated successfully', 
      pillar: updatedPillar 
    });
  } catch (error) {
    console.error('Error updating pillar:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update pillar' },
      { status: 500 }
    );
  }
}

/**
 * DELETE function to delete a pillar.
 */
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const pillar_id = params.id;

    // Check if pillar exists
    const existingPillar = await prisma.pillars.findUnique({
      where: { pillar_id: Number(pillar_id) }
    });

    if (!existingPillar) {
      return NextResponse.json(
        { success: false, error: 'Pillar not found' },
        { status: 404 }
      );
    }

    // Delete pillar (cascade will delete associated assigned_kpi)
    await prisma.pillars.delete({
      where: { pillar_id: Number(pillar_id) }
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Pillar deleted successfully' 
    });
  } catch (error) {
    console.error('Error deleting pillar:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete pillar' },
      { status: 500 }
    );
  }
}