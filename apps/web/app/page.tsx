"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { Button } from "@workspace/ui/components/button"
import { LockIcon, UserIcon, BookIcon } from "lucide-react"

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState("qoac")

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Video Section */}
      <div className="relative w-full md:w-2.2/3 bg-black">
        <video className="h-full w-full object-cover opacity-80" autoPlay muted loop playsInline>
          <source src="./mujvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
          <div className="bg-black/40 p-6 rounded-lg backdrop-blur-sm">
            <Image
              src="/logo.png"
              alt="Manipal University Jaipur Logo"
              width={75}
              height={75}
              className="mx-auto mb-4 bg-white-rounded-full"
            />
            <h1 className="text-3xl font-bold text-center mb-2">Manipal University Jaipur</h1>
            <p className="text-center max-w-md">Welcome to the official portal. Please login with your credentials.</p>
          </div>
        </div>
      </div>



      {/* Login Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Login Portal</CardTitle>
            <CardDescription className="text-center">Select your role and enter your credentials</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="qoac" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="qoac">QOAC</TabsTrigger>
                <TabsTrigger value="hod">HOD</TabsTrigger>
                <TabsTrigger value="faculty">Faculty</TabsTrigger>
              </TabsList>

              {/* QOAC Login */}
              <TabsContent value="qoac">
                <form className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="qoac-id">QOAC ID</Label>
                    <div className="relative">
                      <UserIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="qoac-id" placeholder="Enter your QOAC ID" className="pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="qoac-id">QOAC Name</Label>
                    <div className="relative">
                      <UserIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="qoac-name" placeholder="Enter your QOAC Name" className="pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="qoac-password">Password</Label>
                    <div className="relative">
                      <LockIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="qoac-password" type="password" placeholder="Enter your password" className="pl-10" />
                    </div>
                  </div>
                  <Button type="submit" className="w-full">
                    Login as QOAC
                  </Button>
                </form>
              </TabsContent>

              {/* HOD Login */}
              <TabsContent value="hod">
                <form className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="hod-id">HOD ID</Label>
                    <div className="relative">
                      <UserIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="hod-id" placeholder="Enter your HOD ID" className="pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="department">Department</Label>
                    <div className="relative">
                      <BookIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="department" placeholder="Enter your department" className="pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hod-password">Password</Label>
                    <div className="relative">
                      <LockIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="hod-password" type="password" placeholder="Enter your password" className="pl-10" />
                    </div>
                  </div>
                  <Button type="submit" className="w-full">
                    Login as HOD
                  </Button>
                </form>
              </TabsContent>

              {/* Faculty Login */}
              <TabsContent value="faculty">
                <form className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="faculty-id">Faculty ID</Label>
                    <div className="relative">
                      <UserIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="faculty-id" placeholder="Enter your Faculty ID" className="pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="faculty-department">Department</Label>
                    <div className="relative">
                      <BookIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="faculty-department" placeholder="Enter your department" className="pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="faculty-password">Password</Label>
                    <div className="relative">
                      <LockIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="faculty-password"
                        type="password"
                        placeholder="Enter your password"
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <Button type="submit" className="w-full ">
                    Login as Faculty
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            <div className="text-sm text-center text-muted-foreground">
              Forgot your password?{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Reset it here
              </a>
            </div>
            <div className="text-sm text-center text-muted-foreground">
              Having trouble?{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Contact support
              </a>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
