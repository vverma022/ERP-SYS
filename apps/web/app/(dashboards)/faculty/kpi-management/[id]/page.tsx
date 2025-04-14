import { KpiManagement } from "@/components/layout/kpi-management"

export default function KpiPage({ params }: { params: { kpiType: string } }) {
  return <KpiManagement kpiType={params.kpiType} />
}