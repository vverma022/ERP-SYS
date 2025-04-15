"use client"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@workspace/ui/components/select"
import { useAssignKpiToPillar, useFetchDepartments  } from "@/hooks/dept"
import { useFetchForms } from "@/hooks/forms"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { useState } from "react"
import { Button } from "@workspace/ui/components/button"
import { toast } from "sonner"
import { AssignKpiPayload } from "@/lib/types"


export default function AssignPage() {
  const { data: departments, isLoading } = useFetchDepartments();
  const { data: forms } = useFetchForms();
  const assignKpiMutation = useAssignKpiToPillar();
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);
  const [selectedDepartmentName, setSelectedDepartmentName] = useState<string | null>(null);
  const [selectedKpis, setSelectedKpis] = useState<string[]>([]);
  const [selectedPillar, setSelectedPillar] = useState<string | null>(null);

  const pillars = departments?.find((dept) => dept.id.toString() === selectedDepartment)?.pillars || [];

  const handleKpiCheckboxChange = (kpiId: string) => {
    setSelectedKpis((prev) =>
      prev.includes(kpiId) ? prev.filter((id) => id !== kpiId) : [...prev, kpiId]
    );
  };

  const handleDepartmentChange = (deptId: string) => {
    setSelectedDepartment(deptId);
    const department = departments?.find((dept) => dept.id.toString() === deptId);
    setSelectedDepartmentName(department?.name || null);
    setSelectedKpis([]); // Clear selected KPIs on department change
  };

  const handlePillarChange = (pillarId: string) => {
    setSelectedPillar(pillarId);
  };

  const handleSaveAssignments = () => {
    if (!selectedDepartment) {
      toast.error("Please select a department.");
      return;
    }
    if (!selectedPillar) {
      toast.error("Please select a pillar.");
      return;
    }

    if (selectedKpis.length === 0) {
      toast.error("Please select at least one KPI to assign.");
      return;
    }
    const payload: AssignKpiPayload = {
      pillarId: selectedPillar,
      kpiIds: selectedKpis,
    };

    console.log("Assigning KPIs with payload:", payload);
    assignKpiMutation.mutate(payload);
  };

  return (
    <main className="container mx-auto py-8 px-4">
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

      {!selectedDepartment && (
        <p className="text-center text-gray-500">Please select a department to continue.</p>
      )}

      {selectedDepartment && (
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Assign KPIs for Department: <span className="text-primary">{selectedDepartmentName}</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {forms?.map((form) => (
              <div
                key={form.id}
                className="p-4 border bg-card rounded-lg shadow-sm flex items-start gap-4"
              >
                <Checkbox
                  checked={selectedKpis.includes(form.id)}
                  onCheckedChange={() => handleKpiCheckboxChange(form.id)}
                  className="mt-1"
                />
                <div>
                  <h3 className="text-lg font-medium">{form.title}</h3>
                  <p className="text-sm">{form.elements.length} Fields</p>
                  <p className="text-sm">
                    Created on {new Date(form.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
       {selectedDepartment && (
        <div className="mt-6 flex justify-end">
            <Button className="btn btn-primary" onClick={handleSaveAssignments} disabled={assignKpiMutation.isPending} >
               {assignKpiMutation.isPending ? 'Saving...' : 'Save Assignments'}
            </Button>
            </div>
          )}
    </main>
  )
}
