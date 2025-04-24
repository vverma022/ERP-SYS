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
  departmentId: string;
  kpiIds: string[];
}

export interface KpiFormData {
  id: string;
  formData: {
    entries: Record<string, any>[];
  };
}

export interface FormConfig {
  id: string
  title: string
  description: string
  value: number
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

export interface AssignedKPI {
  assigned_kpi_id: number;
  kpi_name: string;
  kpi_status: string;
  comments: string;
  elements: FormElementInstance[];
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

