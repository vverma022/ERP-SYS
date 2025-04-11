"use client"

import type React from "react"
import Image from "next/image"
import { useState } from "react"
import { cn } from "@workspace/ui/lib/utils"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent } from "@workspace/ui/components/card"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"
import { useRouter } from "next/navigation"

export default function LoginForm({ className }: { className?: string }) {
  const [userType, setUserType] = useState("faculty")
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    console.log(`Logging in as ${userType}`)
  }

  return (
    <div className={cn("flex min-h-screen items-center justify-center p-4", className)}>
      <Card className="w-full max-w-4xl overflow-hidden">
        <CardContent className="grid p-0 md:grid-cols-2">
          <div className="flex flex-col">
            <Tabs defaultValue="faculty" className="w-full" onValueChange={setUserType}>
              <TabsList className="grid w-full grid-cols-3 p-1 rounded-xl bg-muted/50">
                <TabsTrigger value="qoac" className="rounded-lg shadow-sm data-[state=active]:shadow-md transition-all">
                  QOAC
                </TabsTrigger>
                <TabsTrigger value="hod" className="rounded-lg shadow-sm data-[state=active]:shadow-md transition-all">
                  HoD
                </TabsTrigger>
                <TabsTrigger
                  value="faculty"
                  className="rounded-lg shadow-sm data-[state=active]:shadow-md transition-all"
                >
                  Faculty
                </TabsTrigger>
              </TabsList>

              <TabsContent value="qoac" className="p-6 md:p-8">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col items-center text-center">
                      <h1 className="text-2xl font-bold">Welcome!</h1>
                      <p className="text-balance text-muted-foreground">Login to your QOAC account</p>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="qoac-email">Email</Label>
                      <Input id="qoac-email" type="email" placeholder="qoac@muj.manipal.edu" required />
                    </div>
                    <div className="grid gap-2">
                      <div className="flex items-center">
                        <Label htmlFor="qoac-password">Password</Label>
                        <a href="#" className="ml-auto text-sm underline-offset-2 hover:underline">
                          Forgot your password?
                        </a>
                      </div>
                      <Input id="qoac-password" type="password" required />
                    </div>
                    <Button type="button" className="w-full" onClick={() => router.push('/qoc')}>
                      Login as QOAC
                    </Button>
                  </div>
                </form>
              </TabsContent>

              <TabsContent value="hod" className="p-6 md:p-8">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col items-center text-center">
                      <h1 className="text-2xl font-bold">Welcome!</h1>
                      <p className="text-balance text-muted-foreground">Login to your HoD account</p>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="hod-email">Email</Label>
                      <Input id="hod-email" type="email" placeholder="hod@muj.manipal.edu" required />
                    </div>
                    <div className="grid gap-2">
                      <div className="flex items-center">
                        <Label htmlFor="hod-password">Password</Label>
                        <a href="#" className="ml-auto text-sm underline-offset-2 hover:underline">
                          Forgot your password?
                        </a>
                      </div>
                      <Input id="hod-password" type="password" required />
                    </div>
                    <Button type="submit" className="w-full">
                      Login as HoD
                    </Button>
                  </div>
                </form>
              </TabsContent>

              <TabsContent value="faculty" className="p-6 md:p-8">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col items-center text-center">
                      <h1 className="text-2xl font-bold">Welcome!</h1>
                      <p className="text-balance text-muted-foreground">Login to your Faculty account</p>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="faculty-email">Email</Label>
                      <Input id="faculty-email" type="email" placeholder="faculty@muj.manipal.edu" required />
                    </div>
                    <div className="grid gap-2">
                      <div className="flex items-center">
                        <Label htmlFor="faculty-password">Password</Label>
                        <a href="#" className="ml-auto text-sm underline-offset-2 hover:underline">
                          Forgot your password?
                        </a>
                      </div>
                      <Input id="faculty-password" type="password" required />
                    </div>
                    <Button type="submit" className="w-full" onClick={() => router.push('/faculty')}>
                      Login as Faculty
                    </Button>
                  </div>
                </form>
              </TabsContent>
            </Tabs>
          </div>
          <div className="relative hidden h-full min-h-[300px] bg-muted md:block">
            <Image
              src="/images/Manipal.png"
              alt="Manipal University Jaipur"
              fill
              className="object-cover dark:brightness-[0.5]"
              priority
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

