import { LucideIcon } from "lucide-react"

type ErrorName = 
| 'PROCESSING_ERROR';

export class ProcessError extends Error {
  name: ErrorName;
  message: string;
  cause: Error | null;

  constructor({name,message,cause} : {name: ErrorName; message: string; cause: any}) {
    super(message);
    this.name = name;
    this.message = message;
    this.cause = cause;
  }
}



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

export interface PillarInstance {
  id: number
  name: string
  counts: {
    assignedkpi: number;
  }
}

export interface AssignKpiPayload {
  pillarId: string;
  kpiIds: string[];
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
  id: string
  path?: string
  subItems?: SidebarItem[]
}

export interface DeptConfig {
  id: string
  name: string
  hodid: number | null
  hodName: string
  createdAt: string
  membersCount: number
  pillars: PillarInstance[]
}

