"use client";
import { useState } from "react";
import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar";
import { Button } from "@workspace/ui/components/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card";
import { Badge } from "@workspace/ui/components/badge";
import { UserPlus } from "lucide-react";
import AssignDialog from "@/components/hod/assign-dialog";

export default function KPICoordinatorsPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const faculties = [
    { value: "faculty1", label: "John Doe" },
    { value: "faculty2", label: "Jane Smith" },
  ];

  const kpis = [
    { value: "kpi1", label: "KPI 1" },
    { value: "kpi2", label: "KPI 2" },
    { value: "kpi3", label: "KPI 3" },
  ];

  const handleAssignSubmit = (data: { facultyId: string; role: string; kpis: string[] }) => {
    console.log("Assignment Data:", data);
  };

  return (
    <div className="mx-auto max-w-7xl">
      <Card>
        <CardHeader className="flex flex-row items-center">
          <div>
            <CardTitle>KPI Coordinators</CardTitle>
            <CardDescription>Manage and assign KPI coordinators for your department</CardDescription>
          </div>
          <Button className="ml-auto" onClick={() => setIsDialogOpen(true)}>
            <UserPlus className="mr-2 h-4 w-4" />
            Assign Coordinator
          </Button>
          <AssignDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        faculties={faculties}
        kpis={kpis}
        onSubmit={handleAssignSubmit}
       />
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2 font-medium">Coordinator</th>
                  <th className="text-left p-2 font-medium">KPI Category</th>
                  <th className="text-left p-2 font-medium">Assigned Faculty</th>
                  <th className="text-left p-2 font-medium">Status</th>
                  <th className="text-left p-2 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "Dr. Emily Rodriguez",
                    category: "Research Publications",
                    assigned: 12,
                    status: "Active",
                    avatar: "ER",
                  },
                  {
                    name: "Dr. James Wilson",
                    category: "Teaching Evaluation",
                    assigned: 15,
                    status: "Active",
                    avatar: "JW",
                  },
                  {
                    name: "Dr. Aisha Patel",
                    category: "Community Service",
                    assigned: 8,
                    status: "Active",
                    avatar: "AP",
                  },
                  {
                    name: "Dr. Robert Kim",
                    category: "Grant Applications",
                    assigned: 7,
                    status: "Active",
                    avatar: "RK",
                  },
                ].map((coordinator, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>{coordinator.avatar}</AvatarFallback>
                        </Avatar>
                        <span>{coordinator.name}</span>
                      </div>
                    </td>
                    <td className="p-2">{coordinator.category}</td>
                    <td className="p-2">{coordinator.assigned} faculty members</td>
                    <td className="p-2">
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        {coordinator.status}
                      </Badge>
                    </td>
                    <td className="p-2">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-500 hover:text-red-600">
                          Remove
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}