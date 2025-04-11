"use client"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@workspace/ui/components/card"
import Link from "next/link"
import { PlusCircle } from "lucide-react"
import { useFetchForms } from "@/hooks/forms"

export default function FormsPage() {
  const {data: forms, isLoading, error } = useFetchForms();

  if (isLoading) {
    return (
      <main className="container mx-auto py-8 px-4">
        <p className="text-center text-gray-600">Loading forms...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="container mx-auto py-8 px-4">
        <p className="text-center text-red-600">Error loading forms: {error.message}</p>
      </main>
    );
  }

  return (
    <main className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Your Forms</h1>
          <p className="text-gray-600 mt-2">Manage and edit your created forms</p>
        </div>
        <Link href="/qoc/builder/create">
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Create Form
            </Button>
          </Link>
      </div>

      {forms?.length === 0 ? (
        <div className="text-center py-12 border rounded-lg bg-secondary">
          <h3 className="text-lg font-medium mb-2">No forms created yet</h3>
          <p className="mb-6">Create your first form to get started</p>
          <Link href="/qoc/builder/create">
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Create Form
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          
          {forms!.map((form) => (
            <Card key={form.id}>
              <CardHeader>
                <CardTitle>{form.title}</CardTitle>
                <CardDescription>Created on {new Date(form.createdAt).toLocaleDateString()}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{form.elements.length} elements</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link href={`/forms/${form.id}/edit`}>
                  <Button variant="outline">Edit</Button>
                </Link>
                <Link href={`/forms/${form.id}/view`}>
                  <Button>View</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </main>
  )
}
