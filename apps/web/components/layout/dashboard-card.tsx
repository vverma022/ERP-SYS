"use client"

import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Progress } from "@workspace/ui/components/progress"

export interface DashboardCardProps {
  title: string
  value: string | number
  icon?: LucideIcon
  subtitle?: string
  progress?: number
  trend?: {
    value: string
    positive?: boolean
  }
  footer?: ReactNode
  className?: string
  onClick?: () => void
}

export function DashboardCard({
  title,
  value,
  icon: Icon,
  subtitle,
  progress,
  trend,
  footer,
  className,
  onClick,
}: DashboardCardProps) {
  return (
    <Card className={`bg-card text-card-foreground ${className}`} onClick={onClick}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
        {trend && <p className={`text-xs ${trend.positive ? "text-green-500" : "text-red-500"}`}>{trend.value}</p>}
        {typeof progress === "number" && <Progress className="mt-2" value={progress} />}
        {footer}
      </CardContent>
    </Card>
  )
}

