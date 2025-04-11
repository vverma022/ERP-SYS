import { NextResponse } from 'next/server';
import { prisma } from '@repo/db';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  try {
    const dept_id = params.id;

    if (!dept_id) {
      return NextResponse.json(
        { success: false, error: 'Department ID is required' },
        { status: 400 }
      );
    }

    const department = await prisma.departments.findUnique({
      where: { dept_id: Number(dept_id) },
      include: {
        pillars: {
          include: {
            assigned_kpi: true
          }
        },
        members: {
          select: {
            user_id: true,
            user_name: true,
            user_email: true,
            user_role: true
          }
        }
      }
    });

    if (!department) {
      return NextResponse.json(
        { success: false, error: 'Department not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, department });
  } catch (error) {
    console.error('Error fetching department:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch department' },
      { status: 500 }
    );
  }
}