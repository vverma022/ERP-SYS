import { QOCReview } from "@/components/qoc/qoc-review"

export function QOCDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">QOC Dashboard</h1>
        <p className="text-muted-foreground mt-2">Manage KPI templates and review department submissions</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <QOCReview />
      </div>
    </div>
  )
}

