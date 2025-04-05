"use client"

import type React from "react"

import type { FormElementInstance } from "@/lib/types"
import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { RadioGroup, RadioGroupItem } from "@workspace/ui/components/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@workspace/ui/components/select"
import { Textarea } from "@workspace/ui/components/textarea"
import { useState } from "react"
import { toast } from "sonner"
import { submitFormData } from "@/lib/actions"
import { Loader2 } from "lucide-react"

interface FormPreviewProps {
  formTitle: string
  elements: FormElementInstance[]
}

export default function FormPreview({ formTitle, elements }: FormPreviewProps) {
  const [formData, setFormData] = useState<Record<string, any>>({})
  const [files, setFiles] = useState<Record<string, FileList | null>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (id: string, value: any) => {
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleFileChange = (id: string, fileList: FileList | null) => {
    setFiles((prev) => ({ ...prev, [id]: fileList }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate required fields
    const missingFields = elements
      .filter(
        (element) =>
          element.attributes.required && (element.type === "file" ? !files[element.id] : !formData[element.id]),
      )
      .map((element) => element.attributes.label)

    if (missingFields.length > 0) {
      toast({
        title: "Missing required fields",
        description: `Please fill in the following fields: ${missingFields.join(", ")}`,
        variant: "destructive",
      })
      return
    }

    try {
      setIsSubmitting(true)

      // Prepare form data for submission
      const formDataToSubmit = {
        formTitle,
        formData,
        // We don't send the actual files to the backend in this example
        // In a real app, you'd use FormData to upload files
        fileInfo: Object.entries(files).reduce(
          (acc, [id, fileList]) => {
            if (fileList) {
              acc[id] = Array.from(fileList).map((file) => ({
                name: file.name,
                type: file.type,
                size: file.size,
              }))
            }
            return acc
          },
          {} as Record<string, any>,
        ),
      }

      await submitFormData(formDataToSubmit)

      toast({
        title: "Form submitted successfully",
        description: "Your form data has been sent to the backend",
      })

      // Reset form after successful submission
      setFormData({})
      setFiles({})
    } catch (error) {
      console.error("Error submitting form:", error)
      toast({
        title: "Error submitting form",
        description: "There was an error submitting your form. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
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
    <form onSubmit={handleSubmit} className="border rounded-md p-6 bg-white">
      <h2 className="text-xl font-bold mb-6">{formTitle}</h2>

      <div className="space-y-6">
        {elements.map((element) => (
          <div key={element.id}>{renderFormElement(element)}</div>
        ))}
      </div>

      <div className="mt-8">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Submit Form"
          )}
        </Button>
      </div>
    </form>
  )
}

