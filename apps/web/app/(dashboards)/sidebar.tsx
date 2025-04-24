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
import { ChevronDown, ChevronRight, Hammer, Check} from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AppSidebarProps, SidebarItem } from "@/lib/types";
import { useSidebarConfig } from "@/components/layout/sidebarconfig";

export function MainAppSidebar({ activeSection, setActiveSection }: AppSidebarProps) {
  const router = useRouter(); 
  const pathname = usePathname();
  const dashboardKey = pathname.startsWith("/qoc") ? "qoc" : pathname.startsWith("/hod") ? "hod" : "faculty";
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const sidebarConfig = useSidebarConfig();
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
          <img src="/MUJ-Logo.png" alt="MUJ Logo" className="h-20 w-auto object-contain" />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel><div>{title}</div></SidebarGroupLabel>
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
