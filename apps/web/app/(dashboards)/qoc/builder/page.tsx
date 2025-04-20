"use client"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { AlertDialog , AlertDialogContent, AlertDialogFooter, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle } from "@workspace/ui/components/alert-dialog"
import Link from "next/link"
import {  PlusCircle } from "lucide-react"
import { useFetchForms , useDeleteKpi } from "@/hooks/forms"
import { useState } from "react"
import { Badge } from "@workspace/ui/components/badge"

export default function FormsPage() {
  const { data: forms, isLoading, error } = useFetchForms();
  const deleteKpiMutation = useDeleteKpi();
  const [deletingFormId, setDeletingFormId] = useState<string | null>(null);
  const [formToDelete, setFormToDelete] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  console.log("Forms:", forms);

  const handleDelete = (formId: string) => {
    const numericId = formId.startsWith("form-") ? formId.split("-")[1]! : formId;
    setDeletingFormId(formId);
    deleteKpiMutation.mutate(numericId, {
      onSuccess: () => setDeletingFormId(null),
      onError: () => setDeletingFormId(null),
    });
  };

  const openDeleteDialog = (formId: string) => {
    setFormToDelete(formId);
    setOpen(true);
  };

  const handleConfirmDelete = () => {
    if (formToDelete) {
      handleDelete(formToDelete);
      setOpen(false);
      setFormToDelete(null);
    }
  };

  return (
    <main className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Your KPI's</h1>
          <p className="text-gray-600 mt-2">Manage and edit your created KPI's</p>
        </div>
        <Link href="/qoc/builder/create">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Create KPI
          </Button>
        </Link>
      </div>

      {isLoading && (
        <p className="text-center text-black dark:text-white">Loading forms...</p>
      )}
      {error && (
        <p className="text-center text-red-600">Error loading forms: {error.message}</p>
      )}

      {!isLoading && !error && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {forms!.map((form) => (
            <Card key={form.id}>
            <CardHeader className="flex justify-between items-center">
              <div>
                <CardTitle>{form.title}</CardTitle>
                <CardDescription>
                  Created on {new Date(form.createdAt).toLocaleDateString()}
                </CardDescription>
              </div>
              <Badge>{form.value}</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm">{form.elements.length} Fields</p>
              <p 
                className="text-sm text-gray-500 truncate" 
                title={form.description}
              >
                {form.description}
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link href={`/qoc/builder/form/view/${form.id.replace('form-','')}`}>
                <Button>View</Button>
              </Link>
              <Link href={`/qoc/builder/form/edit/${form.id.replace('form-','')}`}>
                <Button variant="outline">Edit</Button>
              </Link>
              <Button 
                variant="destructive" 
                onClick={() => openDeleteDialog(form.id)} 
                disabled={deletingFormId === form.id}
              >
                {deletingFormId === form.id ? 'Deleting...' : 'Delete'}
              </Button>
            </CardFooter>
          </Card>
          ))}
        </div>
      )}

      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the created KPI.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Button variant="secondary" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleConfirmDelete}>
              {formToDelete && deletingFormId === formToDelete ? 'Deleting...' : 'Confirm'}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </main>
  );
}
