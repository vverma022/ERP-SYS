import FormBuilder from "@/components/formbuilder/form-builder"
import { getFormById } from "@/lib/actions"
import { notFound } from "next/navigation"

interface EditFormPageProps {
  params: {
    form: string
  }
}

export default async function EditFormPage({ params }: EditFormPageProps) {
  const form = await getFormById(params.form)

  if (!form) {
    notFound()
  }

  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Edit Form</h1>
      <p className="bg-secondary mb-8">Make changes to your form and save when you're done.</p>
      <FormBuilder initialForm={form} />
    </main>
  )
}

