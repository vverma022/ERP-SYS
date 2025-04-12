import FormBuilder from "@/components/formbuilder/form-builder"

export default function CreateFormPage() {
  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Create Form</h1>
      <p className="mb-8">Start building your new form below.</p>
      <FormBuilder />
    </main>
  )
}