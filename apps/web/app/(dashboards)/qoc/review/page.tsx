"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Button } from "@workspace/ui/components/button"
import { Textarea } from "@workspace/ui/components/textarea"
import { Badge } from "lucide-react"
import { ArrowLeft, CheckCircle, XCircle } from "lucide-react"
import Link from "next/link"

const mockSubmission = {
  id: "1",
  department: "Cardiology",
  template: "Monthly Performance KPI",
  submittedBy: "Dr. Smith",
  submittedAt: "2023-10-15",
  status: "pending",
  data: [
    { label: "Patient Satisfaction Score", value: "4.7/5" },
    { label: "Average Wait Time", value: "12 minutes" },
    { label: "Number of Procedures", value: "142" },
    { label: "Readmission Rate", value: "3.2%" },
    { label: "Staff Satisfaction", value: "4.2/5" },
    { label: "Budget Compliance", value: "98.5%" },
  ],
}

export default function QOCSubmissionReview({ id }: { id: string }) {
  const [feedback, setFeedback] = useState("")
  const [status, setStatus] = useState(mockSubmission.status)

  const handleApprove = () => {
    setStatus("approved")
  }

  const handleReject = () => {
    setStatus("rejected")
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Review Submission</h1>
          <p className="text-muted-foreground mt-2">
            {mockSubmission.department} - {mockSubmission.template}
          </p>
        </div>
        <Button variant="outline" asChild>
          <Link href="/qoc/review">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Submissions
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Submission Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockSubmission.data.map((item, index) => (
                  <div key={index} className="grid grid-cols-2 gap-4 py-2 border-b last:border-0">
                    <div className="font-medium">{item.label}</div>
                    <div>{item.value}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Feedback</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Enter your feedback here..."
                className="min-h-[150px]"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Submission Info</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium">Status</p>
                  <Badge
                    className={`mt-1 ${status === "approved" ? "bg-green-500" : status === "rejected" ? "bg-red-500" : "bg-gray-300"}`}
                  >
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </Badge>
                </div>
                <div>
                  <p className="text-sm font-medium">Submitted By</p>
                  <p className="text-sm text-muted-foreground">{mockSubmission.submittedBy}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Submitted On</p>
                  <p className="text-sm text-muted-foreground">{mockSubmission.submittedAt}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Department</p>
                  <p className="text-sm text-muted-foreground">{mockSubmission.department}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Template</p>
                  <p className="text-sm text-muted-foreground">{mockSubmission.template}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button className="w-full" onClick={handleApprove} disabled={status === "approved"}>
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Approve
                </Button>
                <Button
                  variant="destructive"
                  className="w-full"
                  onClick={handleReject}
                  disabled={status === "rejected"}
                >
                  <XCircle className="mr-2 h-4 w-4" />
                  Reject
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

