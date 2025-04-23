import { notFound } from "next/navigation"
import { Button } from "@workspace/ui/components/button"
import Link from "next/link"
import { ArrowLeft, Edit } from "lucide-react"
import FormPreview from "@/components/formbuilder/form-preview"

interface KpiViewPageProps {
  params: {
    id: string
  }
}

export default async function KpiViewPage({ params }: KpiViewPageProps) {
  const kpi = await getKpiById(params.id)

  if (!kpi) {
    notFound()
  }

  if (!kpi.hasForm || !kpi.form) {
    return (
      <main className="container mx-auto py-8 px-4">
        <div className="mb-6">
          <Link href="/">
            <Button variant="outline" size="sm" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to KPI Dashboard
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">KPI: {kpi.name}</h1>
        </div>

        <div className="text-center py-12 border rounded-lg bg-gray-50">
          <h3 className="text-lg font-medium mb-2">No form created yet</h3>
          <p className="text-gray-500 mb-6">This KPI doesn't have an associated form</p>
          <Link href={`/kpi/${kpi.id}/form`}>
            <Button>
              <Edit className="mr-2 h-4 w-4" />
              Create Form
            </Button>
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="container mx-auto py-8 px-4">
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to KPI Dashboard
            </Button>
          </Link>
          <Link href={`/kpi/${kpi.id}/form`}>
            <Button size="sm">
              <Edit className="mr-2 h-4 w-4" />
              Edit Form
            </Button>
          </Link>
        </div>
        <h1 className="text-3xl font-bold mt-4">KPI: {kpi.name}</h1>
        <p className="text-gray-600 mt-2">View and submit the form for this KPI</p>
      </div>

      <div className="max-w-3xl mx-auto">
        <FormPreview formTitle={kpi.name} elements={kpi.form.elements} kpiId={kpi.id} />
      </div>
    </main>
  )
}

