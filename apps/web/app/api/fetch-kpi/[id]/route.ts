import { NextResponse } from 'next/server';
import { prisma } from '@repo/db';

export async function GET(
    request: Request,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
    try {
      const assigned_kpi_id = parseInt(params.id);
      // Convert the ID parameter to a number
      const assignedKpiId = parseInt(params.id);
  
      // Check if ID is valid
      if (isNaN(assignedKpiId)) {
        return NextResponse.json(
          { error: 'Invalid assigned_kpi_id format' },
          { status: 400 }
        );
      }
  
      // Fetch the assigned KPI data
      const kpiData = await prisma.assigned_kpi.findUnique({
        where: {
          assigned_kpi_id: assignedKpiId,
        },
        select: {
          kpi_name: true,
          kpi_description: true, // This corresponds to the "description" field requested
          form_data: true,
          kpi_value: true,
        },
      });
  
      // If no KPI found with the given ID
      if (!kpiData) {
        return NextResponse.json(
          { error: 'Assigned KPI not found' },
          { status: 404 }
        );
      }
  
      // Return the requested KPI data
      return NextResponse.json(kpiData);
    } catch (error) {
      console.error('Error fetching assigned KPI:', error);
      return NextResponse.json(
        { error: 'Failed to fetch assigned KPI data' },
        { status: 500 }
      );
    }
  }