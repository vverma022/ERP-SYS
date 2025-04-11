import { NextResponse } from 'next/server';
import { prisma } from '@repo/db';

/**
 * GET function to fetch all pillars or pillars for a specific department.
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const dept_id = searchParams.get('department_id');

    let pillars;
    if (dept_id) {
      // Get pillars for a specific department
      pillars = await prisma.pillars.findMany({
        where: { department_id: Number(dept_id) },
        include: {
          department: {
            select: {
              dept_id: true,
              dept_name: true
            }
          },
          assigned_kpi: {
            select: {
              assigned_kpi_id: true,
              kpi_name: true,
              kpi_status: true
            }
          }
        }
      });
    } else {
      // Get all pillars
      pillars = await prisma.pillars.findMany({
        include: {
          department: {
            select: {
              dept_id: true,
              dept_name: true
            }
          },
          _count: {
            select: { assigned_kpi: true }
          }
        }
      });
    }

    return NextResponse.json({ success: true, pillars });
  } catch (error) {
    console.error('Error fetching pillars:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch pillars' },
      { status: 500 }
    );
  }
}

/**
 * POST function to create a new pillar.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { pillar_name, department_id } = body;

    // Validate required fields
    if (!pillar_name) {
      return NextResponse.json(
        { success: false, error: 'Pillar name is required' },
        { status: 400 }
      );
    }

    if (!department_id) {
      return NextResponse.json(
        { success: false, error: 'Department ID is required' },
        { status: 400 }
      );
    }

    // Check if department exists
    const department = await prisma.departments.findUnique({
      where: { dept_id: Number(department_id) }
    });

    if (!department) {
      return NextResponse.json(
        { success: false, error: 'Department not found' },
        { status: 404 }
      );
    }

    // Check if pillar with same name already exists in that department
    const existingPillar = await prisma.pillars.findFirst({
      where: {
        pillar_name,
        department_id: Number(department_id)
      }
    });

    if (existingPillar) {
      return NextResponse.json(
        { success: false, error: 'A pillar with this name already exists in this department' },
        { status: 400 }
      );
    }

    // Create new pillar
    const newPillar = await prisma.pillars.create({
      data: {
        pillar_name,
        department_id: Number(department_id)
      }
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Pillar created successfully', 
      pillar: newPillar 
    });
  } catch (error) {
    console.error('Error creating pillar:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create pillar' },
      { status: 500 }
    );
  }
}