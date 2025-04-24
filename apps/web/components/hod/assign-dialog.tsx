import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@workspace/ui/components/dialog";
import { Button } from "@workspace/ui/components/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@workspace/ui/components/select";


interface Faculty {
  value: string;
  label: string;
}

interface KPI {
  value: string;
  label: string;
}

interface AssignDialogProps {
  isOpen: boolean;
  onClose: () => void;
  faculties: Faculty[];
  kpis: KPI[];
  onSubmit: (data: { facultyId: string; role: string; kpis: string[] }) => void;
}

const AssignDialog: React.FC<AssignDialogProps> = ({ isOpen, onClose, faculties, kpis, onSubmit }) => {
    const [selectedFaculty, setSelectedFaculty] = useState<string | null>(null);
    const [role, setRole] = useState<string | null>(null);
    const [selectedKPIs, setSelectedKPIs] = useState<string[]>([]);
  
    const handleKPISelection = (value: string) => {
      setSelectedKPIs(prev =>
        prev.includes(value) ? prev.filter(kpi => kpi !== value) : [...prev, value]
      );
    };
  
    const handleSubmit = () => {
      if (selectedFaculty && role && selectedKPIs.length > 0) {
        onSubmit({
          facultyId: selectedFaculty,
          role,
          kpis: selectedKPIs,
        });
        onClose(); // Close the dialog after submission
      }
    };
  
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Assign Coordinator</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {/* Select Faculty */}
            <div>
              <label className="block text-sm font-medium mb-2">Select Faculty:</label>
              <Select onValueChange={setSelectedFaculty}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choose a faculty" />
                </SelectTrigger>
                <SelectContent>
                  {faculties.map(faculty => (
                    <SelectItem key={faculty.value} value={faculty.value}>
                      {faculty.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
  
            {/* Select Role */}
            <div>
              <label className="block text-sm font-medium mb-2">Select Role:</label>
              <Select onValueChange={setRole}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choose a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="KPI Coordinator">KPI Coordinator</SelectItem>
                  <SelectItem value="Faculty">Faculty</SelectItem>
                </SelectContent>
              </Select>
            </div>
  
            {/* Assign KPIs */}
            <div>
              <label className="block text-sm font-medium mb-2">Assign KPIs:</label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select KPIs (multi-select)" />
                </SelectTrigger>
                <SelectContent>
                  {kpis.map(kpi => (
                    <SelectItem
                      key={kpi.value}
                      value={kpi.value}
                      onClick={() => handleKPISelection(kpi.value)}
                    >
                      {selectedKPIs.includes(kpi.value) ? `✓ ${kpi.label}` : kpi.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="secondary" onClick={onClose}>
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={!selectedFaculty || !role || selectedKPIs.length === 0}
            >
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
  );
};

export default AssignDialog;