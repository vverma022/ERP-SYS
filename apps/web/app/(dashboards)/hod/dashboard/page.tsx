"use client";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar"
import { BarChart3, BookOpen, CalendarIcon, FileText, LineChart, PieChart, Users, UserPlus } from "lucide-react"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Progress } from "@workspace/ui/components/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@workspace/ui/components/table"
import { Badge } from "@workspace/ui/components/badge"

export function DashboardContent() {
    const [openAssignDialog, setOpenAssignDialog] = useState(false)
  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">HoD Dashboard</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <FileText className="mr-2 h-4 w-4" />
            Export Report
          </Button>
          <Button size="sm">
            <CalendarIcon className="mr-2 h-4 w-4" />
            Current Session
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-card text-card-foreground">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total KPI 3 Entries</CardTitle>
                <LineChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">+4 from last month</p>
                <Progress className="mt-2" value={75} />
              </CardContent>
            </Card>

            <Card className="bg-card text-card-foreground">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total KPI 4 Entries</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">18</div>
                <p className="text-xs text-muted-foreground">+2 from last month</p>
                <Progress className="mt-2" value={60} />
              </CardContent>
            </Card>

            <Card className="bg-card text-card-foreground">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Pending Verification</CardTitle>
                <PieChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7</div>
                <p className="text-xs text-muted-foreground">-3 since last week</p>
                <Progress className="mt-2" value={30} />
              </CardContent>
            </Card>

            <Card className="bg-card text-card-foreground">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">92%</div>
                <p className="text-xs text-muted-foreground">+5% from last month</p>
                <Progress className="mt-2" value={92} />
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4 bg-card text-card-foreground">
              <CardHeader>
                <CardTitle>Recent Submissions</CardTitle>
                <CardDescription>Latest KPI entries submitted across departments</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableCaption>A list of recent KPI submissions.</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Department</TableHead>
                      <TableHead>KPI Type</TableHead>
                      <TableHead>Course Name</TableHead>
                      <TableHead className="text-right">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Computer Science</TableCell>
                      <TableCell>KPI 3</TableCell>
                      <TableCell>Web Development</TableCell>
                      <TableCell className="text-right">
                        <Badge variant="approved">Approved</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Electrical Engineering</TableCell>
                      <TableCell>KPI 4</TableCell>
                      <TableCell>Power Systems</TableCell>
                      <TableCell className="text-right">
                        <Badge variant="rejected">Rejected</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Mechanical Engineering</TableCell>
                      <TableCell>KPI 3</TableCell>
                      <TableCell>CAD/CAM</TableCell>
                      <TableCell className="text-right">
                        <Badge variant="approved">Approved</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Civil Engineering</TableCell>
                      <TableCell>KPI 4</TableCell>
                      <TableCell>Structural Analysis</TableCell>
                      <TableCell className="text-right">
                        <Badge variant="pending">Pending</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Electronics & Communication</TableCell>
                      <TableCell>KPI 3</TableCell>
                      <TableCell>VLSI Design</TableCell>
                      <TableCell className="text-right">
                        <Badge variant="approved">Approved</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Chemical Engineering</TableCell>
                      <TableCell>KPI 4</TableCell>
                      <TableCell>Thermodynamics</TableCell>
                      <TableCell className="text-right">
                        <Badge variant="rejected">Rejected</Badge>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </CardFooter>
            </Card>

            <Card className="col-span-3 bg-card text-card-foreground">
              <CardHeader>
                <CardTitle>Department Participation</CardTitle>
                <CardDescription>KPI submission rates by department</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">Computer Science</span>
                      </div>
                      <span className="text-sm font-medium">95%</span>
                    </div>
                    <Progress value={95} />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">Electrical Engineering</span>
                      </div>
                      <span className="text-sm font-medium">85%</span>
                    </div>
                    <Progress value={85} />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">Mechanical Engineering</span>
                      </div>
                      <span className="text-sm font-medium">78%</span>
                    </div>
                    <Progress value={78} />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">Civil Engineering</span>
                      </div>
                      <span className="text-sm font-medium">65%</span>
                    </div>
                    <Progress value={65} />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">Electronics & Communication</span>
                      </div>
                      <span className="text-sm font-medium">90%</span>
                    </div>
                    <Progress value={90} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>KPI Analytics</CardTitle>
              <CardDescription>Detailed analysis of KPI submissions and verification rates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full rounded-md border border-dashed flex items-center justify-center">
                <p className="text-muted-foreground">Analytics Dashboard Placeholder</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>Generated Reports</CardTitle>
              <CardDescription>Download and view generated reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full rounded-md border border-dashed flex items-center justify-center">
                <p className="text-muted-foreground">Reports Dashboard Placeholder</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>              

      </Tabs>
    </div>
  )
}
