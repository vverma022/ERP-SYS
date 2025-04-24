"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Button } from "@workspace/ui/components/button"
import { Badge } from "@workspace/ui/components/badge"
import Link from "next/link"
import { Eye, Filter } from "lucide-react"

function useOutsideClick(ref: React.RefObject<HTMLDivElement>, callback: () => void) {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback()
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => {
      document.removeEventListener("mousedown", handleClick)
    }
  }, [ref, callback])
}

// Mock data for submissions
const mockSubmissions = [
  {
    id: "1",
    department: "Cardiology",
    template: "Monthly Performance KPI",
    submittedBy: "Dr. Smith",
    submittedAt: "2023-10-15",
    status: "pending",
  },
  {
    id: "2",
    department: "Oncology",
    template: "Quarterly Quality Metrics",
    submittedBy: "Dr. Johnson",
    submittedAt: "2023-10-12",
    status: "approved",
  },
  {
    id: "3",
    department: "Pediatrics",
    template: "Monthly Performance KPI",
    submittedBy: "Dr. Williams",
    submittedAt: "2023-10-10",
    status: "rejected",
  },
  {
    id: "4",
    department: "Neurology",
    template: "Annual Department Review",
    submittedBy: "Dr. Brown",
    submittedAt: "2023-10-05",
    status: "pending",
  },
]

export function QOCReview() {
  const [filter, setFilter] = useState<"all" | "approved" | "rejected" | "pending">("all")
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown on outside click
  useOutsideClick(dropdownRef, () => setDropdownOpen(false))

  const filteredSubmissions =
    filter === "all"
      ? mockSubmissions
      : mockSubmissions.filter((submission) => submission.status === filter)

  const handleFilterSelect = (status: "all" | "approved" | "rejected" | "pending") => {
    setFilter(status)
    setDropdownOpen(false)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Review Submissions</h1>
        <p className="text-muted-foreground mt-2">Review and analyze KPI submissions from departments</p>
      </div>

      <div className="relative flex justify-end">
        <Button variant="outline" onClick={() => setDropdownOpen(!dropdownOpen)}>
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
        {dropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute right-0 mt-2 w-40 rounded-md border bg-white shadow-lg z-10"
          >
            <ul className="py-1 text-sm text-gray-700">
              <li>
                <button
                  className={`block w-full px-4 py-2 text-left hover:bg-gray-100 ${
                    filter === "all" ? "font-semibold" : ""
                  }`}
                  onClick={() => handleFilterSelect("all")}
                >
                  All
                </button>
              </li>
              <li>
                <button
                  className={`block w-full px-4 py-2 text-left hover:bg-gray-100 ${
                    filter === "approved" ? "font-semibold" : ""
                  }`}
                  onClick={() => handleFilterSelect("approved")}
                >
                  Approved
                </button>
              </li>
              <li>
                <button
                  className={`block w-full px-4 py-2 text-left hover:bg-gray-100 ${
                    filter === "rejected" ? "font-semibold" : ""
                  }`}
                  onClick={() => handleFilterSelect("rejected")}
                >
                  Rejected
                </button>
              </li>
              <li>
                <button
                  className={`block w-full px-4 py-2 text-left hover:bg-gray-100 ${
                    filter === "pending" ? "font-semibold" : ""
                  }`}
                  onClick={() => handleFilterSelect("pending")}
                >
                  Pending
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="space-y-4">
        {filteredSubmissions.map((submission) => (
          <Card key={submission.id}>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{submission.department}</CardTitle>
                <Badge
                  variant={
                    submission.status === "approved"
                      ? "approved"
                      : submission.status === "rejected"
                        ? "rejected"
                        : "pending"
                  }
                >
                  {submission.status.charAt(0).toUpperCase() + submission.status.slice(1)}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2 md:grid-cols-3">
                <div>
                  <p className="text-sm font-medium">Template</p>
                  <p className="text-sm text-muted-foreground">{submission.template}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Submitted By</p>
                  <p className="text-sm text-muted-foreground">{submission.submittedBy}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Submitted On</p>
                  <p className="text-sm text-muted-foreground">{submission.submittedAt}</p>
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <Button asChild>
                  <Link href={`/qoc/review/${submission.id}`}>
                    <Eye className="mr-2 h-4 w-4" />
                    View Submission
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
