import { useFetchForms } from "@/hooks/forms";
import { Home, Hammer, Check, Settings, LayoutDashboard, LineChart } from "lucide-react"; // Icons
import { SidebarItem } from "./types";

type SidebarConfig = Record<string, { title: string; items: SidebarItem[] }>;

export function useSidebarConfig(): SidebarConfig {
  const { data } = useFetchForms();

  const kpiSubItems: SidebarItem[] =
  data?.map((kpi: any) => ({
    icon: LineChart,
    label: kpi.title, // Use `title` as the label
    id: kpi.id.replace("form-", ""), // Remove `form-` from `id`
    path: `/faculty/kpi-management/${kpi.id.replace("form-", "")}`, // Use the modified `id` in the path
  })) || [];

  return {
    qoc: {
      title: "QOC Dashboard",
      items: [
        { icon: Home, label: "Dashboard", id: "qoc-dashboard", path: "/qoc/" },
        { icon: Hammer, label: "KPI Builder", id: "form-builder", path: "/qoc/builder" },
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
  };
}