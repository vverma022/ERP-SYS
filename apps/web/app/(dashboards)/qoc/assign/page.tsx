"use client"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@workspace/ui/components/select"
import { useFetchDepartments  } from "@/hooks/dept"
import { useFetchForms } from "@/hooks/forms"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { useState } from "react"
import { Button } from "@workspace/ui/components/button"


export default function AssignPage() {
  const { data: departments, isLoading } = useFetchDepartments();
  const { data: forms  } = useFetchForms();
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);
  const [selectedDepartmentName, setSelectedDepartmentName] = useState<string | null>(null);
  const [selectedKpis, setSelectedKpis] = useState<string[]>([]);

//   const kpis = forms?.map((form) =>({
//     id: form.id,
//     name: form.title,
//   }))

const handleKpiCheckboxChange = (kpiId: string) => {
    setSelectedKpis((prev) =>
      prev.includes(kpiId)
        ? prev.filter((id) => id !== kpiId)
        : [...prev, kpiId]
    );
  };

  const handleDepartmentChange = (deptId: string) => {
    setSelectedDepartment(deptId);
    const department = departments?.find((dept) => dept.id.toString() === deptId);
    setSelectedDepartmentName(department?.name || null);
    setSelectedKpis([]); // Reset selected KPIs when department changes
  };


  if(isLoading) return <p></p>

  return (
    <main className="container mx-auto py-8 px-4">
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-3xl font-bold">Your KPIs</h1>
        <p className="text-gray-600 mt-2">Assign KPIs by Selecting the Department</p>
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
    </div>

    {selectedDepartment && (
      <div>
        <h2 className="text-xl font-semibold mb-4">
          Assign KPIs for Department: <span className="text-primary">{selectedDepartmentName}</span>
        </h2>
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
        {selectedDepartment && (
        <Button
          className="fixed bottom-10 right-10 btn btn-primary"
        >
          Save Assignments
        </Button>
      )}
      </div>
    )}
  </main>
  )
}
