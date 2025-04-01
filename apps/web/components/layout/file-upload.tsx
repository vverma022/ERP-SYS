"use client"

import type React from "react"

import { type ChangeEvent, useState } from "react"
import { Upload, X, FileText, Check } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { FormDescription } from "@workspace/ui/components/form"

export interface FileUploadProps {
  id: string
  label: string
  description?: string
  accept?: string
  maxSize?: number // in MB
  onChange?: (file: File | null) => void
  value?: File | null
  error?: string
  className?: string
}

export function FileUpload({
  id,
  label,
  description,
  accept = ".pdf",
  maxSize = 10, // 10MB default
  onChange,
  value,
  error,
  className,
}: FileUploadProps) {
  const [file, setFile] = useState<File | null>(value || null)
  const [isDragging, setIsDragging] = useState(false)
  const [fileError, setFileError] = useState<string | null>(error || null)

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null
    validateAndSetFile(selectedFile)
  }

  const validateAndSetFile = (selectedFile: File | null) => {
    setFileError(null)

    if (!selectedFile) {
      setFile(null)
      onChange?.(null)
      return
    }

    // Check file size
    if (selectedFile.size > maxSize * 1024 * 1024) {
      setFileError(`File size exceeds ${maxSize}MB limit`)
      return
    }

    // Check file type if accept is specified
    if (accept && accept !== "*") {
      const fileType = selectedFile.type
      const acceptTypes = accept.split(",").map((type) => type.trim())

      // Handle special cases like .pdf
      const fileExtension = `.${selectedFile.name.split(".").pop()}`
      const isAccepted = acceptTypes.some((type) => type === fileType || type === fileExtension || type === "*")

      if (!isAccepted) {
        setFileError(`File type not accepted. Please upload ${accept}`)
        return
      }
    }

    setFile(selectedFile)
    onChange?.(selectedFile)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    const droppedFile = e.dataTransfer.files[0]
    validateAndSetFile(droppedFile)
  }

  const clearFile = () => {
    setFile(null)
    setFileError(null)
    onChange?.(null)
  }

  return (
    <div className={`space-y-2 ${className}`}>
      <Label htmlFor={id}>{label}</Label>

      {description && <FormDescription>{description}</FormDescription>}

      {!file ? (
        <div
          className={`border-2 border-dashed rounded-md p-6 text-center ${
            isDragging ? "border-primary bg-primary/5" : "border-muted-foreground/20"
          } ${fileError ? "border-destructive" : ""}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center gap-2">
            <Upload className="h-8 w-8 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              Drag and drop your file here, or{" "}
              <label htmlFor={id} className="cursor-pointer text-primary hover:underline">
                browse
              </label>
            </p>
            <p className="text-xs text-muted-foreground">
              Supports {accept} up to {maxSize}MB
            </p>
            <Input id={id} type="file" accept={accept} onChange={handleFileChange} className="hidden" />
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-2 rounded-md border p-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
            <FileText className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="truncate text-sm font-medium">{file.name}</p>
            <p className="text-xs text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)}MB</p>
          </div>
          <div className="flex gap-2">
            <Button type="button" variant="ghost" size="icon" onClick={clearFile} className="h-8 w-8">
              <X className="h-4 w-4" />
              <span className="sr-only">Remove file</span>
            </Button>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
              <Check className="h-4 w-4 text-primary" />
            </div>
          </div>
        </div>
      )}

      {fileError && <p className="text-sm text-destructive">{fileError}</p>}
    </div>
  )
}

