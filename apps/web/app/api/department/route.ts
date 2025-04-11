import { NextResponse } from 'next/server';
import { prisma } from '@repo/db'; // Make sure this points to your Prisma client

/**
 * GET function to fetch all departments.
 */
export async function GET(request: Request) {
  try {
    const departments = await prisma.departments.findMany({
      include: {
        pillars: {
          select: {
            pillar_id: true,
            pillar_name: true,
            _count: {
              select: { assigned_kpi: true }
            }
          }
        },
        _count: {
          select: { members: true }
        }
      }
    });

    return NextResponse.json({ success: true, departments });
  } catch (error) {
    console.error('Error fetching departments:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch departments' },
      { status: 500 }
    );
  }
}

/**
 * POST function to create a new department.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { dept_name, hod_id, hod_name } = body;

    // Validate required fields
    if (!dept_name) {
      return NextResponse.json(
        { success: false, error: 'Department name is required' },
        { status: 400 }
      );
    }

    // Check if department with same name already exists
    const existingDepartment = await prisma.departments.findUnique({
      where: { dept_name }
    });

    if (existingDepartment) {
      return NextResponse.json(
        { success: false, error: 'A department with this name already exists' },
        { status: 400 }
      );
    }

    // Create new department
    const newDepartment = await prisma.departments.create({
      data: {
        dept_name,
        hod_id: hod_id || null,
        hod_name: hod_name || null,
      }
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Department created successfully', 
      department: newDepartment 
    });
  } catch (error) {
    console.error('Error creating department:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create department' },
      { status: 500 }
    );
  }
}

/**
 * PUT function to update a department.
 */
export async function PUT(request: Request) {
  try {
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

    // Check if body is empty
    if (!body || Object.keys(body).length === 0) {
      return NextResponse.json(
        { success: false, error: 'Request body is empty' },
        { status: 400 }
      );
    }

    const { dept_id, dept_name, hod_id, hod_name } = body;

    // Validate required fields
    if (!dept_id) {
      return NextResponse.json(
        { success: false, error: 'Department ID is required' },
        { status: 400 }
      );
    }

    // Check if department exists
    const existingDepartment = await prisma.departments.findUnique({
      where: { dept_id: Number(dept_id) }
    });

    if (!existingDepartment) {
      return NextResponse.json(
        { success: false, error: 'Department not found' },
        { status: 404 }
      );
    }

    // Prepare update data
    const updateData: any = {};
    if (dept_name) updateData.dept_name = dept_name;
    if (hod_id !== undefined) updateData.hod_id = hod_id || null;
    if (hod_name !== undefined) updateData.hod_name = hod_name || null;

    // Update department
    const updatedDepartment = await prisma.departments.update({
      where: { dept_id: Number(dept_id) },
      data: updateData
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Department updated successfully', 
      department: updatedDepartment 
    });
  } catch (error) {
    console.error('Error updating department:', error);
    
    // Handle unique constraint violation (duplicate department name)
    if ((error as any).code === 'P2002') {
      return NextResponse.json(
        { success: false, error: 'A department with this name already exists' },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { success: false, error: 'Failed to update department' },
      { status: 500 }
    );
  }
}

/**
 * DELETE function to delete a department.
 */
export async function DELETE(request: Request) {
  try {
    // Get department ID from URL query parameters
    const { searchParams } = new URL(request.url);
    const dept_id = searchParams.get('id');

    if (!dept_id) {
      return NextResponse.json(
        { success: false, error: 'Department ID is required' },
        { status: 400 }
      );
    }

    // Check if department exists
    const existingDepartment = await prisma.departments.findUnique({
      where: { dept_id: Number(dept_id) }
    });

    if (!existingDepartment) {
      return NextResponse.json(
        { success: false, error: 'Department not found' },
        { status: 404 }
      );
    }

    // Delete department (cascade will handle related records based on schema)
    await prisma.departments.delete({
      where: { dept_id: Number(dept_id) }
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Department deleted successfully' 
    });
  } catch (error) {
    console.error('Error deleting department:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete department' },
      { status: 500 }
    );
  }
}