"use client"

import { type ReactNode, useState, useEffect } from "react"
import { SidebarProvider } from "@workspace/ui/components/sidebar"
import { AppSidebar } from "@/components/layout/app-sidebar"
import { Navbar } from "@/components/layout/navbar"

export interface AppLayoutProps {
  children: ReactNode
  sidebarProps: Omit<React.ComponentProps<typeof AppSidebar>, "activeSection" | "setActiveSection">
  navbarProps: React.ComponentProps<typeof Navbar>
  defaultSection?: string
  themeProviderProps?: {
    attribute?: string
    defaultTheme?: string
    enableSystem?: boolean
    disableTransitionOnChange?: boolean
  }
  renderContent?: (activeSection: string) => ReactNode
}

export function AppLayout({
  children,
  sidebarProps,
  navbarProps,
  defaultSection = "dashboard",
  themeProviderProps = {
    attribute: "class",
    defaultTheme: "system",
    enableSystem: true,
  },
  renderContent,
}: AppLayoutProps) {
  const [activeSection, setActiveSection] = useState(defaultSection)
  const [mounted, setMounted] = useState(false)
  
// Ensure theme is only accessed after mounting to prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
      <SidebarProvider>
        <div className="flex h-screen w-full overflow-hidden bg-background">
          <AppSidebar {...sidebarProps} activeSection={activeSection} setActiveSection={setActiveSection} />
          <div className="flex flex-1 flex-col overflow-hidden">
          <Navbar {...navbarProps} />
            <main className="flex-1 overflow-y-auto p-4 md:p-6">
              {renderContent ? renderContent(activeSection) : children}
            </main>
          </div>
        </div>
      </SidebarProvider>
  )
}

