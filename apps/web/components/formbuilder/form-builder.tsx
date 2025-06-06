"use client"

import { useState } from "react"
import { DndContext, type DragEndEvent, DragOverlay, type DragStartEvent, closestCenter } from "@dnd-kit/core"
import { SortableContext, arrayMove, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { restrictToVerticalAxis, restrictToWindowEdges } from "@dnd-kit/modifiers"
import FormElementsSidebar from "./form-elements-sidebar"
import FormCanvas from "./form-canvas"
import FormElement from "./form-element"
import { Button } from "@workspace/ui/components/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"
import FormPreview from "./form-preview"
import type { FormElementType, FormElementInstance, FormConfig } from "@/lib/types"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { toast } from "sonner"
import { Loader2, Save } from "lucide-react"
import { useSaveForm } from "@/hooks/forms"
import { useRouter } from "next/navigation"

export default function FormBuilder({ initialForm }: { initialForm?: FormConfig }) {
  const [formTitle, setFormTitle] = useState(initialForm?.title || "")
  const [formDescription, setFormDescription] = useState(initialForm?.description || "")
  const [formValue, setFormValue] = useState(initialForm?.value || 0)
  const [elements, setElements] = useState<FormElementInstance[]>(initialForm?.elements || [])
  const [activeId, setActiveId] = useState<string | null>(null)
  const [activeElement, setActiveElement] = useState<FormElementInstance | null>(null)
  const [isSaving, setIsSaving] = useState(false)
  const { mutate: saveForm } = useSaveForm();
  const router = useRouter();

  function handleDragStart(event: DragStartEvent) {
    const { active } = event
    setActiveId(active.id as string)

    if (typeof active.id === "string" && active.id.includes("sidebar-")) {
      const elementType = active.id.replace("sidebar-", "") as FormElementType
      const newElement: FormElementInstance = {
        id: `element-${Date.now()}`,
        type: elementType,
        attributes: getDefaultAttributes(elementType),
      }
      setActiveElement(newElement)
    } else {
      // If dragging an existing element
      const draggedElement = elements.find((el) => el.id === active.id)
      if (draggedElement) {
        setActiveElement(draggedElement)
      }
    }
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event
    setActiveId(null)
    setActiveElement(null)

   
    if (!over) return

    
    if (typeof active.id === "string" && active.id.includes("sidebar-")) {
      const elementType = active.id.replace("sidebar-", "") as FormElementType
      const newElement: FormElementInstance = {
        id: `element-${Date.now()}`,
        type: elementType,
        attributes: getDefaultAttributes(elementType),
      }
      setElements([...elements, newElement])
      return
    }

    // If reordering elements within the canvas
    const oldIndex = elements.findIndex((el) => el.id === active.id)
    const newIndex = elements.findIndex((el) => el.id === over.id)

    if (oldIndex !== -1 && newIndex !== -1) {
      setElements(arrayMove(elements, oldIndex, newIndex))
    }
  }

  function getDefaultAttributes(type: FormElementType) {
    switch (type) {
      case "text":
        return { label: "Text Input", placeholder: "Enter text...", required: false }
      case "textarea":
        return { label: "Text Area", placeholder: "Enter long text...", required: false, rows: 3 }
      case "number":
        return { label: "Number Input", placeholder: "Enter a number", required: false, min: 0, max: 100 }
      case "select":
        return {
          label: "Select",
          placeholder: "Select an option",
          required: false,
          options: [
            { label: "Option 1", value: "option1" },
            { label: "Option 2", value: "option2" },
            { label: "Option 3", value: "option3" },
          ],
        }
      case "checkbox":
        return { label: "Checkbox", required: false }
      case "radio":
        return {
          label: "Radio Group",
          required: false,
          options: [
            { label: "Option 1", value: "option1" },
            { label: "Option 2", value: "option2" },
            { label: "Option 3", value: "option3" },
          ],
        }
      case "date":
        return { label: "Date Picker", required: false }
      case "email":
        return { label: "Email Input", placeholder: "Enter email...", required: false }
      case "file":
        return {
          label: "File Upload",
          required: false,
          multiple: false,
          acceptedFileTypes: ".pdf,.doc,.docx,.jpg,.jpeg,.png",
        }
      default:
        return { label: "New Field", required: false }
    }
  }

  function updateElement(id: string, attributes: Record<string, any>) {
    setElements(
      elements.map((element) => {
        if (element.id === id) {
          return { ...element, attributes: { ...element.attributes, ...attributes } }
        }
        return element
      }),
    )
  }

  function removeElement(id: string) {
    setElements(elements.filter((element) => element.id !== id))
  }

  const handleSaveForm = () => {
    if (!formTitle.trim() || formTitle.trim() === "KPI") {
      toast.error("Empty KPI Number", {
        description: "Form title must include a KPI number.",
      });
      return;
    }  
    if (elements.length === 0) {
      toast.warning("Cannot save empty form", {
        description: "Please add at least one element to your form",
      });
      return;
    }
  
    try {
      const formData: FormConfig = {
        id: `form-${Date.now()}`,
        title: formTitle,
        elements,
        description: formDescription,
        value: formValue,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
  
      saveForm(formData);

      setTimeout(() => router.push('/qoc/builder'), 2000);

    } catch (error) {
      console.error("Unexpected error in handleSaveForm:", error);
      toast("Unexpected Error", {
        description: "An unexpected error occurred. Please try again.",
      });
    }
  };

  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      collisionDetection={closestCenter}
      modifiers={[restrictToVerticalAxis, restrictToWindowEdges]}
    >
      <div className="mb-6">
      <div className="space-y-6">
  <div className="flex flex-col">
    <Label className="text-lg font-medium mb-2">KPI</Label>
    <p className="text-sm text-gray-500 mb-2">
      KPI identification number, usually between 1 to 78.
    </p>
    <Input
      id="form-title"
      value={formTitle.replace('KPI', '')}
      onChange={(e) => {
        const numberValue = e.target.value.replace(/\D/g, ''); // Allow only numbers
        setFormTitle(`KPI ${numberValue}`);
      }}
      className="text-lg font-medium"
      placeholder="Enter KPI Number"
    />
  </div>

  {/* KPI Description Input */}
  <div className="flex flex-col">
    <Label className="text-lg font-medium mb-2">Description</Label>
    <p className="text-sm text-gray-500 mb-2">
      A short description of what this KPI is and what faculty is expected to fill.
    </p>
    <Input
      id="form-description"
      value={formDescription}
      required
      onChange={(e) => setFormDescription(e.target.value)}
      className="text-lg font-medium"
      placeholder="Enter KPI Description"
    />
  </div>

  {/* KPI Value Input */}
  <div className="flex flex-col">
    <Label className="text-lg font-medium mb-2">Value</Label>
    <p className="text-sm text-gray-500 mb-2">
      Value of each KPI in a specific metric.
    </p>
    <Input
      id="form-value"
      type="number" // Ensure only numeric input
      required

      value={formValue}
      onChange={(e) => setFormValue(Number(e.target.value))}
      className="text-lg font-medium"
      placeholder="Enter KPI Value"
    />
  </div>
  <div>
    <div className="flex flex-col">
      <Label className="text-lg font-medium mb-2">Upload KPI Template</Label>
      <p className="text-sm text-gray-500 mb-2">
        Upload an Excel template for this KPI. This will help faculty understand the expected format.
      </p>
      <Input
        id="template-upload"
        type="file"
        accept=".xlsx,.xls"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            // Handle file upload logic here
            toast.success("Template uploaded successfully");
          }
        }}
        className="text-lg font-medium"
      />
    </div>
  </div>
</div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <FormElementsSidebar />

        <div className="flex-1">
          <Tabs defaultValue="editor">
            <div className="flex justify-between items-center mb-4">
              <TabsList>
                <TabsTrigger value="editor">Editor</TabsTrigger>
                <TabsTrigger value="preview">Preview</TabsTrigger>
              </TabsList>

              <div className="flex gap-2">
                <Button onClick={handleSaveForm} disabled={isSaving}>
                  {isSaving ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="mr-2 h-4 w-4" />
                      Save KPI
                    </>
                  )}
                </Button>
              </div>
            </div>

            <TabsContent value="editor" className="mt-0">
              <SortableContext items={elements.map((e) => e.id)} strategy={verticalListSortingStrategy}>
                <FormCanvas elements={elements} updateElement={updateElement} removeElement={removeElement} />
              </SortableContext>
            </TabsContent>

            <TabsContent value="preview" className="mt-0">
              <FormPreview formTitle={formTitle} elements={elements} />
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <DragOverlay>
        {activeId && activeElement && (
          <div className="opacity-80">
            <FormElement element={activeElement} isOverlay={true} updateElement={() => {}} removeElement={() => {}} />
          </div>
        )}
      </DragOverlay>
    </DndContext>
  )
}

