"use client"
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@workspace/ui/components/sidebar"
import { Home , LayoutDashboard, LineChart, Settings , ChevronDown, ChevronRight, Hammer, Check} from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AppSidebarProps, SidebarItem } from "@/lib/types";

const sidebarConfig: Record<string, { title: string; items: SidebarItem[] }> = {
    qoc: {
      title: "QOC Dashboard",
      items: [
        { icon: Home, label: "Dashboard", id: "qoc-dashboard", path: "/qoc/" },
        {icon: Hammer, label:"KPI Builder", id:"form-builder", path:"/qoc/builder"},
        {icon: Check, label:"Review KPI's", id:"Review Submissions", path:"/qoc/review"},
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
          subItems: [
            { icon:LineChart,label: "KPI 3", id: "kpi-3", path: "/faculty/kpi-management/kpi-3" }, // Added path
            { icon: LineChart ,label: "KPI 4", id: "kpi-4", path: "/faculty/kpi-management/kpi-4" }, // Added path
          ],
        },
        {
          icon: Settings,
          label: "Settings",
          id: "settings",
          path: "/faculty/settings", // Added path
        },
      ],
    },
  }


export function MainAppSidebar({ activeSection, setActiveSection }: AppSidebarProps) {
  const router = useRouter(); // Initialize the router
  const pathname = usePathname();
  const dashboardKey = pathname.startsWith("/qoc") ? "qoc" : "faculty";
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const { title, items } = sidebarConfig[dashboardKey] as { title: string; items: SidebarItem[] };

  const toggleSubmenu = (id: string) => {
    setExpandedMenu(expandedMenu === id ? null : id);
  };

  const handleNavigation = (id: string, path?: string) => {
    setActiveSection(id);
    if (path) {
      router.push(path); // Navigate to the corresponding route
    }
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex h-14 items-center border-b px-4">
          <h1 className="text-xl font-bold">{title}</h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <div key={item.id}>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      onClick={() => (item.subItems ? toggleSubmenu(item.id) : handleNavigation(item.id, item.path || '/'))}
                      isActive={activeSection === item.id}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.label}</span>
                      {item.subItems && (
                        <span className="ml-auto">
                          {expandedMenu === item.id ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                        </span>
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  {item.subItems && expandedMenu === item.id && (
                    <div className="ml-6">
                      {item.subItems.map((subItem) => (
                        <SidebarMenuItem key={subItem.id}>
                          <SidebarMenuButton
                            onClick={() => handleNavigation(subItem.id, subItem.path)}
                            isActive={activeSection === subItem.id}
                          >
                            <span>{subItem.label}</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
