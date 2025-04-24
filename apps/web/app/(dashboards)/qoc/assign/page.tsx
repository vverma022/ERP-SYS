"use client"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@workspace/ui/components/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { useAssignKpiToPillar, useFetchDepartments } from "@/hooks/dept"
import { useFetchForms } from "@/hooks/forms"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { useState } from "react"
import { Button } from "@workspace/ui/components/button"
import { toast } from "sonner"
import type { AssignKpiPayload } from "@/lib/types"
import { useFetchAssignedKpis } from "@/hooks/dept"
import { Badge } from "@workspace/ui/components/badge"

export default function AssignPage() {
  const { data: departments, isLoading } = useFetchDepartments()
  const { data: forms } = useFetchForms()
  const assignKpiMutation = useAssignKpiToPillar()
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null)
  const [selectedDepartmentName, setSelectedDepartmentName] = useState<string | null>(null)
  const [selectedKpis, setSelectedKpis] = useState<string[]>([])
  const [selectedPillar, setSelectedPillar] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("assign") // "assign" or "assigned"
  const [assignedTabDepartment, setAssignedTabDepartment] = useState<string | null>(null)
  const [assignedTabPillar, setAssignedTabPillar] = useState<string | null>(null)
  const {
    data: assignedKpis,
    isLoading: isLoadingAssigned,
    isError: isErrorAssigned,
    error: assignedError,
  } = useFetchAssignedKpis(assignedTabDepartment, assignedTabPillar)
  console.log("Assigned KPIs:", assignedKpis)

  const pillars = departments?.find((dept) => dept.id.toString() === selectedDepartment)?.pillars || []
  const assignedTabPillars = departments?.find((dept) => dept.id.toString() === assignedTabDepartment)?.pillars || []

  const handleKpiCheckboxChange = (kpiId: string) => {
    setSelectedKpis((prev) => (prev.includes(kpiId) ? prev.filter((id) => id !== kpiId) : [...prev, kpiId]))
  }

  const handleAssignedTabDepartmentChange = (deptId: string) => {
    setAssignedTabDepartment(deptId)
    setAssignedTabPillar(null) // Reset pillar when department changes
  }

  const handleDepartmentChange = (deptId: string) => {
    setSelectedDepartment(deptId)
    const department = departments?.find((dept) => dept.id.toString() === deptId)
    setSelectedDepartmentName(department?.name || null)
    setSelectedKpis([]) // Clear selected KPIs on department change
  }

  const handlePillarChange = (pillarId: string) => {
    setSelectedPillar(pillarId)
  }

  const handleAssignedTabPillarChange = (pillarId: string) => {
    setAssignedTabPillar(pillarId)
  }

  const handleSaveAssignments = () => {
    if (!selectedDepartment) {
      toast.error("Please select a department.")
      return
    }
    if (!selectedPillar) {
      toast.error("Please select a pillar.")
      return
    }

    if (selectedKpis.length === 0) {
      toast.error("Please select at least one KPI to assign.")
      return
    }
    const payload: AssignKpiPayload = {
      pillarId: selectedPillar,
      departmentId: selectedDepartment,
      kpiIds: selectedKpis.map((kpiId) => kpiId.replace("form-", "")),
    }

    console.log("Assigning KPIs with payload:", payload)
    assignKpiMutation.mutate(payload)
  }

  const handleSelectAllKpis = () => {
    if (!forms) return

    if (selectedKpis.length === forms.length) {
      // If all are already selected, deselect all
      setSelectedKpis([])
    } else {
      // Otherwise, select all
      setSelectedKpis(forms.map((form) => form.id))
    }
  }

  return (
    <main className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">KPI Management</h1>
      </div>

      <div className="mb-6 border-b border-gray-300">
        <ul className="flex -mb-px text-sm font-medium text-center">
          <li
            className={`cursor-pointer py-2 px-4 ${
              activeTab === "assign" ? "border-b-1 border-secondary text-primary" : ""
            }`}
            onClick={() => setActiveTab("assign")}
          >
            Assign KPI
          </li>
          <li
            className={`cursor-pointer py-2 px-4 ${
              activeTab === "assigned" ? "border-b-1 border-secondary text-primary" : ""
            }`}
            onClick={() => setActiveTab("assigned")}
          >
            Assigned KPI
          </li>
        </ul>
      </div>

      {activeTab === "assign" && (
        <div>
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">Assign KPIs</h1>
              <p className="text-gray-600 mt-2">Assign KPIs by selecting the department.</p>
            </div>
            <Select onValueChange={handleDepartmentChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select a department" />
              </SelectTrigger>
              <SelectContent>
                {departments?.map((dept) => (
                  <SelectItem key={dept.id} value={dept.id.toString()}>
                    {dept.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {selectedDepartment && (
              <Select onValueChange={handlePillarChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a pillar" />
                </SelectTrigger>
                <SelectContent>
                  {pillars.length > 0 ? (
                    pillars.map((pillar) => (
                      <SelectItem key={pillar.id} value={pillar.id.toString()}>
                        {pillar.name}
                      </SelectItem>
                    ))
                  ) : (
                    <SelectItem value="no-pillars" disabled>
                      No pillars available for this department
                    </SelectItem>
                  )}
                </SelectContent>
              </Select>
            )}
          </div>

          {!selectedDepartment && <p className="text-center text-gray-500">Please select a department to continue.</p>}

          {selectedDepartment && (
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Assign KPIs for Department: <span className="text-primary">{selectedDepartmentName}</span>
              </h2>
              <div className="flex justify-between items-center mb-4">
                <span></span> {/* Empty span for flex spacing */}
                <Button variant="outline" onClick={handleSelectAllKpis} disabled={!forms || forms.length === 0}>
                  {selectedKpis.length === forms?.length ? "Deselect All" : "Select All"}
                </Button>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {forms?.map((form) => (
                  <div key={form.id} className="p-4 border bg-card rounded-lg shadow-sm flex items-start gap-4">
                    <Checkbox
                      checked={selectedKpis.includes(form.id)}
                      onCheckedChange={() => handleKpiCheckboxChange(form.id)}
                      className="mt-1"
                    />
                    <div>
                      <h3 className="text-lg font-medium">{form.title}</h3>
                      <p className="text-sm">{form.elements.length} Fields</p>
                      <p className="text-sm">Created on {new Date(form.createdAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {selectedDepartment && (
            <div className="mt-6 flex justify-end">
              <Button
                className="btn btn-primary"
                onClick={handleSaveAssignments}
                disabled={assignKpiMutation.isPending}
              >
                {assignKpiMutation.isPending ? "Saving..." : "Save Assignments"}
              </Button>
            </div>
          )}
        </div>
      )}

      {activeTab === "assigned" && (
        <div>
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold">Assigned KPIs</h2>
              <p className="text-gray-600 mt-2">
                View KPIs that have already been assigned to departments and pillars.
              </p>
            </div>
            <Select onValueChange={handleAssignedTabDepartmentChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select a department" />
              </SelectTrigger>
              <SelectContent>
                {departments?.map((dept) => (
                  <SelectItem key={dept.id} value={dept.id.toString()}>
                    {dept.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select onValueChange={handleAssignedTabPillarChange} disabled={!assignedTabDepartment}>
              <SelectTrigger>
                <SelectValue placeholder="Select a pillar" />
              </SelectTrigger>
              <SelectContent>
                {assignedTabPillars.length > 0 ? (
                  assignedTabPillars.map((pillar) => (
                    <SelectItem key={pillar.id} value={pillar.id.toString()}>
                      {pillar.name}
                    </SelectItem>
                  ))
                ) : (
                  <SelectItem value="no-pillars" disabled>
                    No pillars available for this department
                  </SelectItem>
                )}
              </SelectContent>
            </Select>
          </div>

          {!assignedTabDepartment && (
            <p className="text-center text-gray-500">Please select a department and pillar to view assigned KPIs.</p>
          )}

          {assignedTabDepartment && !assignedTabPillar && (
            <p className="text-center text-gray-500">Please select a pillar to view assigned KPIs.</p>
          )}

          {isLoadingAssigned && (
            <div className="text-center py-10">
              <p className="mt-2 text-gray-600">Loading assigned KPIs...</p>
            </div>
          )}

          {isErrorAssigned && (
            <div className="text-center py-10 text-red-500">
              <p>Error loading assigned KPIs.</p>
              <p className="text-sm">{(assignedError as Error)?.message || "Please try again"}</p>
            </div>
          )}

          {assignedTabDepartment && assignedTabPillar && assignedKpis && (
            <div>
              {assignedKpis.assignedKpis?.length === 0 ? (
                <div className="bg-gray-50 rounded-lg p-8 text-center">
                  <p className="text-gray-500">No KPIs have been assigned to this pillar yet.</p>
                </div>
              ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {assignedKpis.assignedKpis?.map((kpi) => (
                    <Card key={kpi.id}>
                      <CardHeader className="flex justify-between items-center">
                        <div>
                          <CardTitle>{kpi.kpi_name}</CardTitle>
                          <CardDescription>Created on {new Date(kpi.added_date).toLocaleDateString()}</CardDescription>
                        </div>
                        <Badge>{kpi.kpi_value}</Badge>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">{kpi.elements?.length || 0} Fields</p>
                        <p className="text-sm text-gray-500 truncate" title={kpi.kpi_description}>
                          {kpi.kpi_description}
                        </p>
                      </CardContent>
                      <CardFooter></CardFooter>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </main>
  )
}
