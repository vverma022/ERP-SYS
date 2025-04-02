export type FormElementType =
  | "text"
  | "textarea"
  | "number"
  | "select"
  | "checkbox"
  | "radio"
  | "date"
  | "email"
  | "file"

export interface FormElementInstance {
  id: string
  type: FormElementType
  attributes: Record<string, any>
}

export interface FormConfig {
  id: string
  title: string
  elements: FormElementInstance[]
  createdAt: string
  updatedAt: string
}

export interface FormSubmission {
  formTitle: string
  formData: Record<string, any>
  fileInfo?: Record<string, any>
}

