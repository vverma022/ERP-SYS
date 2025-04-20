"use client"

import type React from "react"
import { useState } from "react"
import type { FormElementInstance } from "@/lib/types"
import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { RadioGroup, RadioGroupItem } from "@workspace/ui/components/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@workspace/ui/components/select"
import { Textarea } from "@workspace/ui/components/textarea"
import { toast } from "sonner"
import { Loader2, CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@workspace/ui/components/card"

interface FormRendererProps {
  name: string
  elements: FormElementInstance[]
}

export default function FormRenderer({ name, elements }: FormRendererProps) {
  // Define all hooks at the top level - never conditionally
  const [formData, setFormData] = useState<Record<string, any>>({})
  const [files, setFiles] = useState<Record<string, FileList | null>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (elementId: string, value: any) => {
    setFormData((prev) => ({ ...prev, [elementId]: value }))
  }

  const handleFileChange = (elementId: string, fileList: FileList | null) => {
    setFiles((prev) => ({ ...prev, [elementId]: fileList }))
  }

  const resetForm = () => {
    setFormData({})
    setFiles({})
    setIsSubmitted(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

  console.log("Form Data:", formData);
  console.log("Uploaded Files:", files);
    
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      toast.success("Form submitted successfully")
    }, 1500)
  }

  const renderFormElement = (element: FormElementInstance) => {
    const { id: elementId, type, attributes } = element

    switch (type) {
      case "text":
        return (
          <div className="space-y-2">
            <Label htmlFor={elementId}>
              {attributes.label}
              {attributes.required && " *"}
            </Label>
            <Input
              id={elementId}
              placeholder={attributes.placeholder}
              value={formData[elementId] || ""}
              onChange={(e) => handleChange(elementId, e.target.value)}
              required={attributes.required}
              disabled={isSubmitting || isSubmitted}
            />
          </div>
        )
      case "textarea":
        return (
          <div className="space-y-2">
            <Label htmlFor={elementId}>
              {attributes.label}
              {attributes.required && " *"}
            </Label>
            <Textarea
              id={elementId}
              placeholder={attributes.placeholder}
              rows={attributes.rows}
              value={formData[elementId] || ""}
              onChange={(e) => handleChange(elementId, e.target.value)}
              required={attributes.required}
              disabled={isSubmitting || isSubmitted}
            />
          </div>
        )
      case "number":
        return (
          <div className="space-y-2">
            <Label htmlFor={elementId}>
              {attributes.label}
              {attributes.required && " *"}
            </Label>
            <Input
              id={elementId}
              type="number"
              placeholder={attributes.placeholder}
              min={attributes.min}
              max={attributes.max}
              value={formData[elementId] || ""}
              onChange={(e) => handleChange(elementId, Number.parseInt(e.target.value))}
              required={attributes.required}
              disabled={isSubmitting || isSubmitted}
            />
          </div>
        )
      case "select":
        return (
          <div className="space-y-2">
            <Label htmlFor={elementId}>
              {attributes.label}
              {attributes.required && " *"}
            </Label>
            <Select
              value={formData[elementId] || ""}
              onValueChange={(value) => handleChange(elementId, value)}
              required={attributes.required}
              disabled={isSubmitting || isSubmitted}
            >
              <SelectTrigger id={elementId}>
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
              id={elementId}
              checked={formData[elementId] || false}
              onCheckedChange={(checked) => handleChange(elementId, checked)}
              required={attributes.required}
              disabled={isSubmitting || isSubmitted}
            />
            <Label htmlFor={elementId}>
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
              value={formData[elementId] || ""}
              onValueChange={(value) => handleChange(elementId, value)}
              required={attributes.required}
              disabled={isSubmitting || isSubmitted}
            >
              {attributes.options?.map((option: any, index: number) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.value} id={`${elementId}-${index}`} />
                  <Label htmlFor={`${elementId}-${index}`}>{option.label}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        )
      case "date":
        return (
          <div className="space-y-2">
            <Label htmlFor={elementId}>
              {attributes.label}
              {attributes.required && " *"}
            </Label>
            <Input
              id={elementId}
              type="date"
              value={formData[elementId] || ""}
              onChange={(e) => handleChange(elementId, e.target.value)}
              required={attributes.required}
              disabled={isSubmitting || isSubmitted}
            />
          </div>
        )
      case "email":
        return (
          <div className="space-y-2">
            <Label htmlFor={elementId}>
              {attributes.label}
              {attributes.required && " *"}
            </Label>
            <Input
              id={elementId}
              type="email"
              placeholder={attributes.placeholder}
              value={formData[elementId] || ""}
              onChange={(e) => handleChange(elementId, e.target.value)}
              required={attributes.required}
              disabled={isSubmitting || isSubmitted}
            />
          </div>
        )
      case "file":
        return (
          <div className="space-y-2">
            <Label htmlFor={elementId}>
              {attributes.label}
              {attributes.required && " *"}
            </Label>
            <Input
              id={elementId}
              type="file"
              multiple={attributes.multiple}
              accept={attributes.acceptedFileTypes}
              onChange={(e) => handleFileChange(elementId, e.target.files)}
              required={attributes.required}
              className="cursor-pointer"
              disabled={isSubmitting || isSubmitted}
            />
            {files[elementId] && files[elementId]!.length > 0 && (
              <div className="mt-2">
                <p className="text-sm font-medium">Selected files:</p>
                <ul className="text-sm text-gray-500 list-disc pl-5">
                  {Array.from(files[elementId]!).map((file, index) => (
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

  // Instead of early return, use conditional rendering inside the main return
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        {isSubmitted ? (
          <div className="py-8 text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle2 className="h-16 w-16 text-green-500" />
            </div>
            <h3 className="text-xl font-medium mb-2">Form Submitted Successfully</h3>
            <p className="text-gray-500 mb-6">Your data has been recorded</p>
            <Button onClick={resetForm}>Submit Another Response</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {elements.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">This form has no elements</p>
              </div>
            ) : (
              <>
                {elements.map((element) => (
                  <div key={element.id}>{renderFormElement(element)}</div>
                ))}
                <div className="pt-4">
                  <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
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
              </>
            )}
          </form>
        )}
      </CardContent>
    </Card>
  )
}