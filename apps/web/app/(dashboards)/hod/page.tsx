import { DashboardContent } from "./dashboard/page"


export default function Home() {
  // const renderContent = (activeSection: string) => {
  //   switch (activeSection) {
  //     case "dashboard":
  //       return <DashboardContent />
  //     case "kpi-3":
  //     case "kpi-4":
  //       return <KpiManagement kpiType={activeSection} />
  //     case "settings":
  //       return <SettingsContent />
  //       case "forms":
  //       return <FormBuilder />
  //     default:
  //       return <DashboardContent />
  //   }
  // }
  return (
     <>
     <DashboardContent />
     </>
  )
}