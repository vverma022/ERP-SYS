import { NextResponse } from 'next/server';
import { prisma } from '@packages/db/client'; // Import Prisma client from the shared package

/* 
For KPI's. Here we'll have the KPI's for creating the KPI's and Getting the KPI's.
Post request will be used to create the kpi. 
GET request will be used to get the kpi's names etc to display on dashboard.
Get_byId will be used to get the kpi by id to show the actual file.
*/

// POST function to create a KPI
export async function POST(request: Request) {
  try {
    // Parse the JSON body from the request
    const body = await request.json();

    // Extract relevant fields from the JSON
    const { id, title, elements, createdAt, updatedAt } = body;

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
 * GET function to fetch all KPIs with limited fields: id, name, created_at, and updated_at.
 * This function will be later replaced from one i think department route later on.
 */
export async function GET() {
  try {
    // Fetch all KPIs from the database with selected fields
    const kpis = await prisma.kpi.findMany({
      select: {
        kpi_id: true,
        kpi_name: true,
        kpi_created_at: true,
        kpi_updated_at: true,
      },
    });

    // Return the KPIs as a JSON response
    return NextResponse.json({ message: 'KPIs fetched successfully', kpis });
  } catch (error) {
    console.error('Error fetching KPIs:', error);
    return NextResponse.json({ error: 'Failed to fetch KPIs' }, { status: 500 });
  }
}

// GET function to fetch a particular KPI by ID
export async function GET_BY_ID(request: Request) {
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
    });

    if (!kpi) {
      return NextResponse.json({ error: 'KPI not found' }, { status: 404 });
    }

    // Format the response to match the required structure
    const formattedResponse = {
      id: `form-${kpi.kpi_id}`,
      title: kpi.kpi_name,
      elements: kpi.form_data, // Assuming `form_data` is stored as JSON
      createdAt: kpi.kpi_created_at.toISOString(),
      updatedAt: kpi.kpi_created_at.toISOString(), // Assuming no separate updatedAt field
    };

    // Return the formatted response
    return NextResponse.json(formattedResponse);
  } catch (error) {
    console.error('Error fetching KPI:', error);
    return NextResponse.json({ error: 'Failed to fetch KPI' }, { status: 500 });
  }
}


