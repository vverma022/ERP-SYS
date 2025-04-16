import { useFetchForms } from "@/hooks/forms";
import { Home, Hammer, Check, Settings, LayoutDashboard, LineChart, User2 } from "lucide-react"; // Icons
import { SidebarItem } from "./types";

type SidebarConfig = Record<string, { title: string; items: SidebarItem[] }>;

export function useSidebarConfig(): SidebarConfig {
  const { data } = useFetchForms();

  const kpiSubItems: SidebarItem[] =
  data?.map((kpi: any) => ({
    icon: LineChart,
    label: kpi.title, 
    id: kpi.id.replace("form-", ""), 
    path: `/faculty/kpi-management/${kpi.id.replace("form-", "")}`, 
  })) || [];

  const HodkpiSubItems: SidebarItem[] =
  data?.map((kpi: any) => ({
    icon: LineChart,
    label: kpi.title, 
    id: kpi.id.replace("form-", ""), 
    path: `/hod/kpi-management/${kpi.id.replace("form-", "")}`, 
  })) || [];

  return {
    qoc: {
      title: "QOC Dashboard",
      items: [
        { icon: Home, label: "Dashboard", id: "qoc-dashboard", path: "/qoc/" },
        { icon: Hammer, label: "Build KPI", id: "form-builder", path: "/qoc/builder" },
        { icon: User2, label:"Assign KPI", id:"assign-kpi", path:"/qoc/assign"},
        { icon: Check, label: "Review KPI's", id: "review-submissions", path: "/qoc/review" },
        { icon: Settings, label: "Settings", id: "qoc-settings", path: "/qoc/settings" },
      ],
    },
    faculty: {
      title: "Faculty Dashboard",
      items: [
        {
          icon: LayoutDashboard,
          label: "Dashboard",
          id: "dashboard",
          path: "/faculty/",
        },
        {
          icon: LineChart,
          label: "KPI Management",
          id: "kpi-management",
          subItems: kpiSubItems, // Nested KPI items with required paths
        },
        {
          icon: Settings,
          label: "Settings",
          id: "settings",
          path: "/faculty/settings",
        },
      ],
    },
    hod: {
      title: "HoD Dashboard",
      items:  [
        {
          icon: LayoutDashboard,
          label: "Dashboard",
          id: "dashboard",
          path: "/hod/",
        },
        {
          icon: LineChart,
          label: "KPI Management",
          id: "kpi-management",
          subItems: HodkpiSubItems, // Nested KPI items with required paths
        },
        {
          icon: User2,
          label: "Assign KPI Coordinator",
          id: "kpi-coordinator",
          path: "/hod/assign-coordinator", // Nested KPI items with required paths
        },
        {
          icon: Settings,
          label: "Settings",
          id: "settings",
          path: "/hod/settings",
        },
      ],
    },
  };
}