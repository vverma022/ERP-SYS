"use client"
import { DockIcon, Icon, LayoutDashboard, LineChart, Settings } from "lucide-react"

import { DashboardContent } from "@/components/layout/dashboard-content"
import { KpiManagement } from "@/components/layout/kpi-management"
import { SettingsContent } from "@/components/layout/settings-content"
import { AppLayout } from "@/components/layout/app-layout"
import FormBuilder from "@/components/formbuilder/form-builder"

// Define the sidebar navigation items
const sidebarItems = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    id: "dashboard",
  },
  {
    icon: LineChart,
    label: "KPI Management",
    id: "kpi-management",
    subItems: [
      { label: "KPI 3", id: "kpi-3" },
      { label: "KPI 4", id: "kpi-4" },
    ],
  },
  {
    icon: Settings,
    label: "Settings",
    id: "settings",
  },
  {
    icon: DockIcon,
    label: "Forms",
    id: "forms"
  }
]

export default function Home() {
  const renderContent = (activeSection: string) => {
    switch (activeSection) {
      case "dashboard":
        return <DashboardContent />
      case "kpi-3":
      case "kpi-4":
        return <KpiManagement kpiType={activeSection} />
      case "settings":
        return <SettingsContent />
        case "forms":
        return <FormBuilder />
      default:
        return <DashboardContent />
    }
  }

  return (
    <AppLayout
      sidebarProps={{
        items: sidebarItems,
        title: "KPI System",
      }}
      navbarProps={{
        showSearch: true,
        showThemeToggle: true,
        userInitials: "JD",
      }}
      defaultSection="dashboard"
      renderContent={renderContent}
      children={null}
    />
  )
}