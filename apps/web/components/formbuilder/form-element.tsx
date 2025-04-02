"use client"

import { useState } from "react"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import type { FormElementInstance } from "@/lib/types"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent, CardFooter, CardHeader } from "@workspace/ui/components/card"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { RadioGroup, RadioGroupItem } from "@workspace/ui/components/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger,  SelectValue } from "@workspace/ui/components/select"
import { Textarea } from "@workspace/ui/components/textarea"
import { Popover, PopoverContent, PopoverTrigger } from "@workspace/ui/components/popover"
import {
  AlignLeft,
  Calendar,
  CheckSquare,
  File,
  Grip,
  Hash,
  ListFilter,
  Mail,
  RadioIcon,
  Settings,
  Trash2,
  Type,
} from "lucide-react"
import ElementSettings from "./element-settings"

interface FormElementProps {
  element: FormElementInstance
  isOverlay?: boolean
  updateElement: (id: string, attributes: Record<string, any>) => void
  removeElement: (id: string) => void
}

export default function FormElement({ element, isOverlay = false, updateElement, removeElement }: FormElementProps) {
  const [showSettings, setShowSettings] = useState(false)

  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: element.id,
    disabled: isOverlay,
  })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  }

  const getElementIcon = () => {
    switch (element.type) {
      case "text":
        return <Type size={18} />
      case "textarea":
        return <AlignLeft size={18} />
      case "number":
        return <Hash size={18} />
      case "select":
        return <ListFilter size={18} />
      case "checkbox":
        return <CheckSquare size={18} />
      case "radio":
        return <RadioIcon size={18} />
      case "date":
        return <Calendar size={18} />
      case "email":
        return <Mail size={18} />
      case "file":
        return <File size={18} />
      default:
        return <Type size={18} />
    }
  }

  const renderElementPreview = () => {
    const { attributes } = element

    switch (element.type) {
      case "text":
        return (
          <div className="space-y-2">
            <Label>{attributes.label}</Label>
            <Input placeholder={attributes.placeholder} />
          </div>
        )
      case "textarea":
        return (
          <div className="space-y-2">
            <Label>{attributes.label}</Label>
            <Textarea placeholder={attributes.placeholder} rows={attributes.rows} />
          </div>
        )
      case "number":
        return (
          <div className="space-y-2">
            <Label>{attributes.label}</Label>
            <Input type="number" placeholder={attributes.placeholder} min={attributes.min} max={attributes.max} />
          </div>
        )
      case "select":
        return (
          <div className="space-y-2">
            <Label>{attributes.label}</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder={attributes.placeholder} />
              </SelectTrigger>
              <SelectContent>
                {attributes.options?.map((option: any, index: number) => (
                  <SelectItem key={index} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )
      case "checkbox":
        return (
          <div className="flex items-center space-x-2">
            <Checkbox id={`checkbox-${element.id}`} />
            <Label htmlFor={`checkbox-${element.id}`}>{attributes.label}</Label>
          </div>
        )
      case "radio":
        return (
          <div className="space-y-2">
            <Label>{attributes.label}</Label>
            <RadioGroup>
              {attributes.options?.map((option: any, index: number) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.value} id={`radio-${element.id}-${index}`} />
                  <Label htmlFor={`radio-${element.id}-${index}`}>{option.label}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        )
      case "date":
        return (
          <div className="space-y-2">
            <Label>{attributes.label}</Label>
            <Input type="date" />
          </div>
        )
      case "email":
        return (
          <div className="space-y-2">
            <Label>{attributes.label}</Label>
            <Input type="email" placeholder={attributes.placeholder} />
          </div>
        )
      case "file":
        return (
          <div className="space-y-2">
            <Label>{attributes.label}</Label>
            <Input
              type="file"
              multiple={attributes.multiple}
              accept={attributes.acceptedFileTypes}
              className="cursor-pointer"
            />
          </div>
        )
      default:
        return <div>Unknown element type</div>
    }
  }

  return (
    <Card ref={setNodeRef} style={style} className={`${isOverlay ? "w-64" : "w-full"}`}>
      <CardHeader className="p-3 border-b flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-gray-500">{getElementIcon()}</div>
          <span className="font-medium">{element.attributes.label}</span>
        </div>
        {!isOverlay && (
          <div className="flex items-center gap-1">
            <Popover open={showSettings} onOpenChange={setShowSettings}>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Settings size={16} />
                </Button>
              </PopoverTrigger>
              <PopoverContent align="end" className="w-80">
                <ElementSettings
                  element={element}
                  updateElement={updateElement}
                  onClose={() => setShowSettings(false)}
                />
              </PopoverContent>
            </Popover>

            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50"
              onClick={() => removeElement(element.id)}
            >
              <Trash2 size={16} />
            </Button>

            <Button variant="ghost" size="icon" className="h-8 w-8 cursor-move" {...attributes} {...listeners}>
              <Grip size={16} />
            </Button>
          </div>
        )}
      </CardHeader>
      <CardContent className="p-4">{renderElementPreview()}</CardContent>
      {element.attributes.required && (
        <CardFooter className="p-2 pt-0 text-xs text-red-500">* Required field</CardFooter>
      )}
    </Card>
  )
}

