"use client"

import type React from "react"

import type { FormElementInstance } from "@/lib/types"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { RadioGroup, RadioGroupItem } from "@workspace/ui/components/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@workspace/ui/components/select"
import { Textarea } from "@workspace/ui/components/textarea"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Button } from "@workspace/ui/components/button"
import { Loader2 } from "lucide-react"
import { toast } from "sonner"



interface FormPreviewProps {
  formTitle: string
  elements: FormElementInstance[]
  description?: string
  isPreview?: boolean
}

export default function FormPreview({ formTitle, elements, description, isPreview = false }: FormPreviewProps) {
  const [formData, setFormData] = useState<Record<string, any>>({})
  const [files, setFiles] = useState<Record<string, FileList | null>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (id: string, value: any) => {
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleFileChange = (id: string, fileList: FileList | null) => {
    setFiles((prev) => ({ ...prev, [id]: fileList }))
  }


  const renderFormElement = (element: FormElementInstance) => {
    const { id, type, attributes } = element

    switch (type) {
      case "text":
        return (
          <div className="space-y-2">
            <Label htmlFor={id}>
              {attributes.label}
              {attributes.required && " *"}
            </Label>
            <Input
              id={id}
              placeholder={attributes.placeholder}
              value={formData[id] || ""}
              onChange={(e) => handleChange(id, e.target.value)}
              required={attributes.required}
            />
          </div>
        )
      case "textarea":
        return (
          <div className="space-y-2">
            <Label htmlFor={id}>
              {attributes.label}
              {attributes.required && " *"}
            </Label>
            <Textarea
              id={id}
              placeholder={attributes.placeholder}
              rows={attributes.rows}
              value={formData[id] || ""}
              onChange={(e) => handleChange(id, e.target.value)}
              required={attributes.required}
            />
          </div>
        )
      case "number":
        return (
          <div className="space-y-2">
            <Label htmlFor={id}>
              {attributes.label}
              {attributes.required && " *"}
            </Label>
            <Input
              id={id}
              type="number"
              placeholder={attributes.placeholder}
              min={attributes.min}
              max={attributes.max}
              value={formData[id] || ""}
              onChange={(e) => handleChange(id, Number.parseInt(e.target.value))}
              required={attributes.required}
            />
          </div>
        )
      case "select":
        return (
          <div className="space-y-2">
            <Label htmlFor={id}>
              {attributes.label}
              {attributes.required && " *"}
            </Label>
            <Select
              value={formData[id] || ""}
              onValueChange={(value) => handleChange(id, value)}
              required={attributes.required}
            >
              <SelectTrigger id={id}>
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
            <Checkbox
              id={id}
              checked={formData[id] || false}
              onCheckedChange={(checked) => handleChange(id, checked)}
              required={attributes.required}
            />
            <Label htmlFor={id}>
              {attributes.label}
              {attributes.required && " *"}
            </Label>
          </div>
        )
      case "radio":
        return (
          <div className="space-y-2">
            <Label>
              {attributes.label}
              {attributes.required && " *"}
            </Label>
            <RadioGroup
              value={formData[id] || ""}
              onValueChange={(value) => handleChange(id, value)}
              required={attributes.required}
            >
              {attributes.options?.map((option: any, index: number) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.value} id={`${id}-${index}`} />
                  <Label htmlFor={`${id}-${index}`}>{option.label}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        )
      case "date":
        return (
          <div className="space-y-2">
            <Label htmlFor={id}>
              {attributes.label}
              {attributes.required && " *"}
            </Label>
            <Input
              id={id}
              type="date"
              value={formData[id] || ""}
              onChange={(e) => handleChange(id, e.target.value)}
              required={attributes.required}
            />
          </div>
        )
      case "email":
        return (
          <div className="space-y-2">
            <Label htmlFor={id}>
              {attributes.label}
              {attributes.required && " *"}
            </Label>
            <Input
              id={id}
              type="email"
              placeholder={attributes.placeholder}
              value={formData[id] || ""}
              onChange={(e) => handleChange(id, e.target.value)}
              required={attributes.required}
            />
          </div>
        )
      case "file":
        return (
          <div className="space-y-2">
            <Label htmlFor={id}>
              {attributes.label}
              {attributes.required && " *"}
            </Label>
            <Input
              id={id}
              type="file"
              multiple={attributes.multiple}
              accept={attributes.acceptedFileTypes}
              onChange={(e) => handleFileChange(id, e.target.files)}
              required={attributes.required}
              className="cursor-pointer"
            />
            {files[id] && files[id]!.length > 0 && (
              <div className="mt-2">
                <p className="text-sm font-medium">Selected files:</p>
                <ul className="text-sm text-gray-500 list-disc pl-5">
                  {Array.from(files[id]!).map((file, index) => (
                    <li key={index}>
                      {file.name} ({(file.size / 1024).toFixed(1)} KB)
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )
      default:
        return <div>Unknown element type</div>
    }
  }

  if (elements.length === 0) {
    return (
      <div className="border rounded-md p-8 text-center text-gray-500">
        <p>No form elements added yet</p>
        <p className="text-sm">Add elements to see the preview</p>
      </div>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{formTitle}</CardTitle>
        <CardDescription>
          {description || "No description available"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          {elements.map((element) => (
            <div key={element.id}>{renderFormElement(element)}</div>
          ))}
        </form>
      </CardContent>
    </Card>
  )
}