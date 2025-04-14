"use client"

import { Bell, HelpCircle, Search } from "lucide-react"
import type { ReactNode } from "react"

import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { SidebarTrigger } from "@workspace/ui/components/sidebar"
import { ThemeToggle } from "@workspace/ui/components/theme-toggle"
import { usePathname } from "next/navigation"


export interface NavbarProps {
  appTitle?: string
  showSearch?: boolean
  showThemeToggle?: boolean
  showNotifications?: boolean
  showHelp?: boolean
  userAvatar?: string
  userInitials?: string
  leftContent?: ReactNode
  rightContent?: ReactNode
  onSearch?: (query: string) => void
}

export function Navbar({
  appTitle,
  showSearch = true,
  showThemeToggle = true,
  showNotifications = true,
  showHelp = true,
  userAvatar = "/placeholder.svg",
  userInitials = "JD",
  leftContent,
  rightContent,
  onSearch,
}: NavbarProps) {
  const pathname = usePathname()
  const hideNotifications = pathname.startsWith("/qoc")

  return (
    <header className="flex h-14 items-center gap-4 border-b bg-background px-4 lg:h-[60px]">
      <SidebarTrigger className="lg:hidden" />

      {leftContent}

      {showSearch && (
        <div className="w-full flex-1">
          <form
            className="hidden md:block"
            onSubmit={(e) => {
              e.preventDefault()
              const form = e.currentTarget
              const formData = new FormData(form)
              const query = formData.get("search") as string
              onSearch?.(query)
            }}
          >
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                name="search"
                type="search"
                placeholder="Search..."
                className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
              />
            </div>
          </form>
        </div>
      )}

      <div className="flex items-center gap-2">
        {rightContent}

        {showThemeToggle && <ThemeToggle />}

        {showNotifications && !hideNotifications && (
          <Button variant="ghost" size="icon" className="rounded-full">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
        )}

        {showHelp && !hideNotifications && (
          <Button variant="ghost" size="icon" className="rounded-full">
            <HelpCircle className="h-5 w-5" />
            <span className="sr-only">Help</span>
          </Button>
        )}

        <Avatar className="h-8 w-8">
          <AvatarImage src={userAvatar} alt="User" />
          <AvatarFallback>{userInitials}</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}

