import { useFetchForms } from "@/hooks/forms";
import { Home, Hammer, Check, Settings, LayoutDashboard, LineChart, User2, Eye } from "lucide-react"; // Icons
import { SidebarItem } from "@/lib/types";
import { useFetchAssignedKPI } from "@/hooks/faculty";

type SidebarConfig = Record<string, { title: string; items: SidebarItem[] }
>;

export function useSidebarConfig(): SidebarConfig {
  const { data, isLoading, error } = useFetchAssignedKPI();


  const kpiSubItems: SidebarItem[] =
  data?.map((kpi: any) => ({
    icon: LineChart,
    label: kpi.kpi_name, 
    id: kpi.assigned_kpi_id, 
    path: `/faculty/kpi-management/${kpi.kpi_id.toString()}`, // Assuming kpi_id is the ID you want to use
  })) || [];

  const HodkpiSubItems: SidebarItem[] =
  data?.map((kpi: any) => ({
    icon: LineChart,
    label: kpi.kpi_name, 
    id: kpi.assigned_kpi_id, 
    path: `/hod/kpi-management/${kpi.kpi_id.toString()}`, // Assuming kpi_id is the ID you want to use
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
          icon: Eye, 
          label: "View KPI's", 
          id: "view-submissions", 
          path: "/hod/ViewKPI" 
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