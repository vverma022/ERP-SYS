import { NextResponse } from 'next/server';
import { prisma } from '@repo/db' // Import Prisma client from the shared package

/* 
For KPI's. Here we'll have the KPI's for creating the KPI's and Getting the KPI's.
POST request will be used to create the KPI. 
GET request will be used to get the KPI's names etc to display on the dashboard.
GET_BY_ID will be used to get the KPI by ID to show the actual file.
*/

// POST function to create a KPI
export async function POST(request: Request): Promise<NextResponse> {
  try {
    // Parse the JSON body from the request
    const body = await request.json();
    console.log('Request body:', body);

    // Extract relevant fields from the JSON
    const { id, title, elements, createdAt } = body;

    // Save the data to the `kpi` table
    const newKpi = await prisma.kpi.create({
      data: {
        kpi_name: title || 'Untitled KPI', // Use title as the KPI name
        form_data: elements, // Save the `elements` field as JSON in `form_data`
        kpi_created_at: createdAt ? new Date(createdAt) : new Date(), // Use `createdAt` or default to now
      },
    });

    // Return a success response
    return NextResponse.json({ message: 'KPI created successfully', kpi: newKpi });
  } catch (error) {
    console.error('Error creating KPI:', error);
    return NextResponse.json({ error: 'Failed to create KPI' }, { status: 500 });
  }
}

/**
 * GET function to fetch all KPIs with limited fields: id, name, created_at, updated_at, and elements.
 */
export async function GET(): Promise<NextResponse> {
  try {
    // Fetch all KPIs from the database with selected fields
    const kpis = await prisma.kpi.findMany({
      select: {
        kpi_id: true,
        kpi_name: true,
        kpi_created_at: true,
        kpi_updated_at: true,
        form_data: true, // Include the form_data field
      },
    });

    // Format the response to include the elements field
    const formattedKpis = kpis.map((kpi) => ({
      id: `form-${kpi.kpi_id}`,
      title: kpi.kpi_name,
      elements: kpi.form_data, // Map form_data to elements
      createdAt: kpi.kpi_created_at?.toISOString(),
      updatedAt: kpi.kpi_updated_at?.toISOString(),
    }));

    // Return the KPIs as a JSON response
    return NextResponse.json({ message: 'KPIs fetched successfully', kpis: formattedKpis });
  } catch (error) {
    console.error('Error fetching KPIs:', error);
    return NextResponse.json({ error: 'Failed to fetch KPIs' }, { status: 500 });
  }
}

/**
 * GET_BY_ID function to fetch a particular KPI by ID.
 */
export async function GET_BY_ID(request: Request): Promise<NextResponse> {
  try {
    // Extract the `kpi_id` from the query parameters
    const { searchParams } = new URL(request.url);
    const kpiId = searchParams.get('id');

    if (!kpiId) {
      return NextResponse.json({ error: 'KPI ID is required' }, { status: 400 });
    }

    // Fetch the KPI from the database
    const kpi = await prisma.kpi.findUnique({
      where: { kpi_id: parseInt(kpiId, 10) },
      select: {
        kpi_id: true,
        kpi_name: true,
        kpi_created_at: true,
        kpi_updated_at: true,
        form_data: true, // Include the form_data field
      },
    });

    if (!kpi) {
      return NextResponse.json({ error: 'KPI not found' }, { status: 404 });
    }

    // Format the response to match the required structure
    const formattedResponse = {
      id: `form-${kpi.kpi_id}`,
      title: kpi.kpi_name,
      elements: kpi.form_data, // Map form_data to elements
      createdAt: kpi.kpi_created_at?.toISOString(),
      updatedAt: kpi.kpi_updated_at?.toISOString(),
    };

    // Return the formatted response
    return NextResponse.json(formattedResponse);
  } catch (error) {
    console.error('Error fetching KPI:', error);
    return NextResponse.json({ error: 'Failed to fetch KPI' }, { status: 500 });
  }
}