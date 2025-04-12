"use client"

import type { FormElementInstance } from "@/lib/types"
import FormElement from "./form-element"
import { useDroppable } from "@dnd-kit/core"
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"

interface FormCanvasProps {
  elements: FormElementInstance[]
  updateElement: (id: string, attributes: Record<string, any>) => void
  removeElement: (id: string) => void
}

export default function FormCanvas({ elements, updateElement, removeElement }: FormCanvasProps) {
  const { setNodeRef } = useDroppable({
    id: "canvas",
  })

  return (
    <div ref={setNodeRef} className="border rounded-md p-4 min-h-[400px]">
      {elements.length === 0 ? (
        <div className="h-full flex items-center justify-center text-gray-400 text-center p-8">
          <div>
            <p className="text-lg mb-2">Your form is empty</p>
            <p>Drag elements from the sidebar and drop them here</p>
          </div>
        </div>
      ) : (
        <SortableContext items={elements.map((e) => e.id)} strategy={verticalListSortingStrategy}>
          <div className="flex flex-col gap-4">
            {elements.map((element) => (
              <FormElement
                key={element.id}
                element={element}
                updateElement={updateElement}
                removeElement={removeElement}
              />
            ))}
          </div>
        </SortableContext>
      )}
    </div>
  )
}

