"use client"

import type React from "react"

import { useDraggable } from "@dnd-kit/core"
import { Card, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card"
import type { FormElementType } from "@/lib/types"
import { AlignLeft, Calendar, CheckSquare, File, Hash, ListFilter, Mail, RadioIcon, Type } from "lucide-react"

interface ElementButtonProps {
  id: string
  icon: React.ReactNode
  label: string
}

function ElementButton({ id, icon, label }: ElementButtonProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  })

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="flex items-center gap-2 p-3 border rounded-md cursor-pointer hover:bg-gray-200 hover:dark:bg-zinc-800 transition-colors"
    >
      <div className="text-primary">{icon}</div>
      <span>{label}</span>
    </div>
  )
}

export default function FormElementsSidebar() {
  const elements: { type: FormElementType; icon: React.ReactNode; label: string }[] = [
    { type: "text", icon: <Type size={18} />, label: "Text Input" },
    { type: "textarea", icon: <AlignLeft size={18} />, label: "Text Area" },
    { type: "number", icon: <Hash size={18} />, label: "Number" },
    { type: "select", icon: <ListFilter size={18} />, label: "Select" },
    { type: "checkbox", icon: <CheckSquare size={18} />, label: "Checkbox" },
    { type: "radio", icon: <RadioIcon size={18} />, label: "Radio Group" },
    { type: "date", icon: <Calendar size={18} />, label: "Date" },
    { type: "email", icon: <Mail size={18} />, label: "Email" },
    { type: "file", icon: <File size={18} />, label: "File Upload" },
  ]

  return (
    <Card className="w-full lg:w-64 h-fit">
      <CardHeader>
        <CardTitle>Form Elements</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          {elements.map((element) => (
            <ElementButton
              key={element.type}
              id={`sidebar-${element.type}`}
              icon={element.icon}
              label={element.label}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

