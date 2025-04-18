"use client"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"

import { Button } from "@workspace/ui/components/button"
import { Calendar } from "@workspace/ui/components/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@workspace/ui/components/form"
import { Input } from "@workspace/ui/components/input"
import { Popover, PopoverContent, PopoverTrigger } from "@workspace/ui/components/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@workspace/ui/components/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"
import { Textarea } from "@workspace/ui/components/textarea"
import { cn } from "@workspace/ui/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { toast } from "sonner"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Label } from "@workspace/ui/components/label"
import { RadioGroup, RadioGroupItem } from "@workspace/ui/components/radio-group"

interface KpiManagementProps {
  kpiType: number
}

export function KpiManagement({ kpiType }: KpiManagementProps) {
  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="mb-6 text-2xl font-bold">
        {kpiType === 3 ? "KPI 3 - Value Added Courses" : "KPI 4 - Target Courses"}
      </h1>

      <Tabs defaultValue="add" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="add">Add New Entry</TabsTrigger>
          <TabsTrigger value="view">View Entries</TabsTrigger>
        </TabsList>
        <TabsContent value="add">{kpiType === 3 ? <Kpi3Form /> : <Kpi4Form />}</TabsContent>
        <TabsContent value="view">
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>Existing Entries</CardTitle>
              <CardDescription>
                View and manage your existing {kpiType === 3 ? "value added courses" : "target courses"}.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full rounded-md border border-dashed flex items-center justify-center">
                <p className="text-muted-foreground">Data table will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// KPI 3 Form
function Kpi3Form() {
  const formSchema = z.object({
    serialNo: z.string().min(1, { message: "Serial number is required" }),
    departmentName: z.string().min(1, { message: "Department name is required" }),
    programName: z.string().min(1, { message: "Program name is required" }),
    programCode: z.string().min(1, { message: "Program code is required" }),
    courseValueAdded: z.string().min(1, { message: "Course name is required" }),
    courseCode: z.string().optional(),
    dateIntroduction: z.date({
      required_error: "Date of introduction is required",
    }),
    duration: z.string().min(1, { message: "Duration is required" }),
    session: z.string().min(1, { message: "Session is required" }),
    studentsRegistered: z.string().min(1, { message: "Number of students is required" }),
    studentsCompleted: z.string().min(1, { message: "Number of students is required" }),
    documents: z.any().optional(),
    qcVerification: z.string().optional(),
    qcRemarks: z.string().optional(),
    departmentRemarks: z.string().optional(),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      serialNo: "",
      departmentName: "",
      programName: "",
      programCode: "",
      courseValueAdded: "",
      courseCode: "",
      duration: "",
      session: "",
      studentsRegistered: "",
      studentsCompleted: "",
      qcVerification: "",
      qcRemarks: "",
      departmentRemarks: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // Submit to your API
    toast( "Form submitted",{
      description: "Your KPI 3 entry has been submitted successfully.",
    })
  }

  return (
    <Card className="bg-card text-card-foreground">
      <CardHeader>
        <CardTitle>KPI 3 - Value Added Courses</CardTitle>
        <CardDescription>Add details about value added courses offered by your department.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <FormField
                control={form.control}
                name="serialNo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Serial No.</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter serial number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="departmentName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Department Name</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="computer-science">Computer Science</SelectItem>
                        <SelectItem value="electrical">Electrical Engineering</SelectItem>
                        <SelectItem value="mechanical">Mechanical Engineering</SelectItem>
                        <SelectItem value="civil">Civil Engineering</SelectItem>
                        <SelectItem value="electronics">Electronics & Communication</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="programName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Program Name</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select program" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="btech">B.Tech</SelectItem>
                        <SelectItem value="mtech">M.Tech</SelectItem>
                        <SelectItem value="phd">Ph.D</SelectItem>
                        <SelectItem value="bsc">B.Sc</SelectItem>
                        <SelectItem value="msc">M.Sc</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="programCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Program Code</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter program code" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="courseValueAdded"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name of Value Added Course</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter course name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="courseCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Course Code (if any)</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter course code" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dateIntroduction"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date of Introduction</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                          >
                            {field.value ? format(field.value, "dd-MM-yyyy") : <span>DD-MM-YYYY</span>}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar mode="single" selected={field.value} onSelect={field.onChange} initialFocus />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="duration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Duration of Course (in hours)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Enter duration" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="session"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Session</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select session" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="2023-24">2023-24</SelectItem>
                        <SelectItem value="2022-23">2022-23</SelectItem>
                        <SelectItem value="2021-22">2021-22</SelectItem>
                        <SelectItem value="2020-21">2020-21</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="studentsRegistered"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Students Registered</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Enter number of students" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="studentsCompleted"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Students Completing with Certificate</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Enter number of students" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="documents"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Upload Documents (Single PDF)</FormLabel>
                  <FormDescription>
                    Include: 1. Value added course brochure (in Q&C format), 2. BoS minutes highlighting course/s, 3.
                    List of students, 4. Certificates of all students
                  </FormDescription>
                  <FormControl>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="document-upload">Upload PDF</Label>
                      <Input
                        id="document-upload"
                        type="file"
                        accept=".pdf"
                        onChange={(e) => field.onChange(e.target.files?.[0])}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <FormField
                control={form.control}
                name="qcVerification"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value === "yes"}
                        onCheckedChange={(checked) => {
                          field.onChange(checked ? "yes" : "no")
                        }}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Q&C Verification</FormLabel>
                      <FormDescription>Mark as verified by Q&C</FormDescription>
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="qcRemarks"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Remarks by Q&C</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Enter remarks" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="departmentRemarks"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Remarks by Concerned Department</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Enter remarks" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex gap-2">
              <Button type="submit">Submit</Button>
              <Button type="button" variant="outline" onClick={() => form.reset()}>
                Reset
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

// KPI 4 Form
function Kpi4Form() {
  const formSchema = z.object({
    serialNo: z.string().min(1, { message: "Serial number is required" }),
    department: z.string().min(1, { message: "Department is required" }),
    programName: z.string().min(1, { message: "Program name is required" }),
    programCode: z.string().min(1, { message: "Program code is required" }),
    level: z.string().min(1, { message: "Level is required" }),
    dateIntroduction: z.date({
      required_error: "Date of introduction is required",
    }),
    programStatus: z.string().min(1, { message: "Program status is required" }),
    courseCode: z.string().min(1, { message: "Course code is required" }),
    targetCourseName: z.string().min(1, { message: "Target course name is required" }),
    offeringDepartment: z.string().min(1, { message: "Offering department is required" }),
    studentsEnrolled: z.string().min(1, { message: "Number of students is required" }),
    documents: z.any().optional(),
    qcVerification: z.string().optional(),
    qcRemarks: z.string().optional(),
    departmentRemarks: z.string().optional(),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      serialNo: "",
      department: "",
      programName: "",
      programCode: "",
      level: "",
      programStatus: "",
      courseCode: "",
      targetCourseName: "",
      offeringDepartment: "",
      studentsEnrolled: "",
      qcVerification: "",
      qcRemarks: "",
      departmentRemarks: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // Submit to your API
    toast("Form submitted",{
      description: "Your KPI 4 entry has been submitted successfully.",
    })
  }

  return (
    <Card className="bg-card text-card-foreground">
      <CardHeader>
        <CardTitle>KPI 4 - Target Courses</CardTitle>
        <CardDescription>Add details about target courses for your department.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <FormField
                control={form.control}
                name="serialNo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Serial No.</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter serial number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="department"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Department</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="computer-science">Computer Science</SelectItem>
                        <SelectItem value="electrical">Electrical Engineering</SelectItem>
                        <SelectItem value="mechanical">Mechanical Engineering</SelectItem>
                        <SelectItem value="civil">Civil Engineering</SelectItem>
                        <SelectItem value="electronics">Electronics & Communication</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="programName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Program Name</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select program" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="btech">B.Tech</SelectItem>
                        <SelectItem value="mtech">M.Tech</SelectItem>
                        <SelectItem value="phd">Ph.D</SelectItem>
                        <SelectItem value="bsc">B.Sc</SelectItem>
                        <SelectItem value="msc">M.Sc</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="programCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Program Code</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter program code" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="level"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Level</FormLabel>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-row space-x-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="UG" id="ug" />
                        <Label htmlFor="ug">UG</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="PG" id="pg" />
                        <Label htmlFor="pg">PG</Label>
                      </div>
                    </RadioGroup>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dateIntroduction"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date of Introduction</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                          >
                            {field.value ? format(field.value, "dd-MM-yyyy") : <span>DD-MM-YYYY</span>}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar mode="single" selected={field.value} onSelect={field.onChange} initialFocus />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="programStatus"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New or Existing Program</FormLabel>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-row space-x-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="new" id="new" />
                        <Label htmlFor="new">New</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="existing" id="existing" />
                        <Label htmlFor="existing">Existing</Label>
                      </div>
                    </RadioGroup>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="courseCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Course Code</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter course code" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="targetCourseName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name of Target Course</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter target course name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="offeringDepartment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name of Department Offered Target Course</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="computer-science">Computer Science</SelectItem>
                        <SelectItem value="electrical">Electrical Engineering</SelectItem>
                        <SelectItem value="mechanical">Mechanical Engineering</SelectItem>
                        <SelectItem value="civil">Civil Engineering</SelectItem>
                        <SelectItem value="electronics">Electronics & Communication</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="studentsEnrolled"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Your Department Students Enrolled</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Enter number of students" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="documents"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Upload Documents (Single PDF)</FormLabel>
                  <FormDescription>
                    Include: 1. Approved scheme of program, 2. AC minutes (in case of new program introduced), 3. BOS
                    Minutes (in case of new program introduced), 4. Course handout
                  </FormDescription>
                  <FormControl>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="document-upload-kpi4">Upload PDF</Label>
                      <Input
                        id="document-upload-kpi4"
                        type="file"
                        accept=".pdf"
                        onChange={(e) => field.onChange(e.target.files?.[0])}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <FormField
                control={form.control}
                name="qcVerification"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value === "yes"}
                        onCheckedChange={(checked) => {
                          field.onChange(checked ? "yes" : "no")
                        }}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Q&C Verification</FormLabel>
                      <FormDescription>Mark as verified by Q&C</FormDescription>
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="qcRemarks"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Remarks by Q&C</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Enter remarks" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="departmentRemarks"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Remarks by Concerned Department</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Enter remarks" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex gap-2">
              <Button type="submit">Submit</Button>
              <Button type="button" variant="outline" onClick={() => form.reset()}>
                Reset
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

