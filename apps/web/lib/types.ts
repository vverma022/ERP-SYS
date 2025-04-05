import { LucideIcon } from "lucide-react"

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

export interface AppSidebarProps {
  activeSection: string | null
  setActiveSection: (section: string) => void
}

export interface SidebarItem {
  icon: LucideIcon
  label: string
  id?: string
  path?: string
  subItems?: SidebarItem[]
}

