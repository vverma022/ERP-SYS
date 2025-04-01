"use client"

import type { ReactNode } from "react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Button } from "@workspace/ui/components/button"

export interface FormCardProps {
  title: string
  description?: string
  children: ReactNode
  footer?: ReactNode
  submitLabel?: string
  resetLabel?: string
  onSubmit?: () => void
  onReset?: () => void
  showActions?: boolean
  className?: string
}

export function FormCard({
  title,
  description,
  children,
  footer,
  submitLabel = "Submit",
  resetLabel = "Reset",
  onSubmit,
  onReset,
  showActions = true,
  className,
}: FormCardProps) {
  return (
    <Card className={`bg-card text-card-foreground ${className}`}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className="flex justify-between">
        {footer
          ? footer
          : showActions && (
              <>
                <Button variant="outline" onClick={onReset}>
                  {resetLabel}
                </Button>
                <Button onClick={onSubmit}>{submitLabel}</Button>
              </>
            )}
      </CardFooter>
    </Card>
  )
}

