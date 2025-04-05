"use client"

import type { FormElementInstance } from "@/lib/types"
import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { Separator } from "@workspace/ui/components/separator"
import { Plus, Trash2 } from "lucide-react"
import { useState } from "react"

interface ElementSettingsProps {
  element: FormElementInstance
  updateElement: (id: string, attributes: Record<string, any>) => void
  onClose: () => void
}

export default function ElementSettings({ element, updateElement, onClose }: ElementSettingsProps) {
  const { attributes } = element

  const handleChange = (key: string, value: any) => {
    updateElement(element.id, { [key]: value })
  }

  const renderCommonSettings = () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="label">Label</Label>
        <Input id="label" value={attributes.label || ""} onChange={(e) => handleChange("label", e.target.value)} />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="required"
          checked={attributes.required || false}
          onCheckedChange={(checked) => handleChange("required", checked)}
        />
        <Label htmlFor="required">Required field</Label>
      </div>
    </div>
  )

  const renderSpecificSettings = () => {
    switch (element.type) {
      case "text":
      case "email":
        return (
          <div className="space-y-2">
            <Label htmlFor="placeholder">Placeholder</Label>
            <Input
              id="placeholder"
              value={attributes.placeholder || ""}
              onChange={(e) => handleChange("placeholder", e.target.value)}
            />
          </div>
        )
      case "textarea":
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="placeholder">Placeholder</Label>
              <Input
                id="placeholder"
                value={attributes.placeholder || ""}
                onChange={(e) => handleChange("placeholder", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="rows">Rows</Label>
              <Input
                id="rows"
                type="number"
                min={1}
                value={attributes.rows || 3}
                onChange={(e) => handleChange("rows", Number.parseInt(e.target.value))}
              />
            </div>
          </>
        )
      case "number":
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="placeholder">Placeholder</Label>
              <Input
                id="placeholder"
                value={attributes.placeholder || ""}
                onChange={(e) => handleChange("placeholder", e.target.value)}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="min">Min Value</Label>
                <Input
                  id="min"
                  type="number"
                  value={attributes.min || 0}
                  onChange={(e) => handleChange("min", Number.parseInt(e.target.value))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="max">Max Value</Label>
                <Input
                  id="max"
                  type="number"
                  value={attributes.max || 100}
                  onChange={(e) => handleChange("max", Number.parseInt(e.target.value))}
                />
              </div>
            </div>
          </>
        )
      case "select":
      case "radio":
        return <OptionsEditor element={element} updateElement={updateElement} />
      case "file":
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="acceptedFileTypes">Accepted File Types</Label>
              <Input
                id="acceptedFileTypes"
                value={attributes.acceptedFileTypes || ".pdf,.doc,.docx,.jpg,.jpeg,.png"}
                onChange={(e) => handleChange("acceptedFileTypes", e.target.value)}
                placeholder=".pdf,.doc,.jpg"
              />
              <p className="text-xs text-gray-500">Comma-separated file extensions (e.g., .pdf,.jpg)</p>
            </div>
            <div className="flex items-center space-x-2 mt-4">
              <Checkbox
                id="multiple"
                checked={attributes.multiple || false}
                onCheckedChange={(checked) => handleChange("multiple", checked)}
              />
              <Label htmlFor="multiple">Allow multiple files</Label>
            </div>
          </>
        )
      default:
        return null
    }
  }

  return (
    <div className="p-1 space-y-4">
      <h3 className="font-medium">Element Settings</h3>
      <Separator />

      {renderCommonSettings()}

      {renderSpecificSettings() && (
        <>
          <Separator />
          {renderSpecificSettings()}
        </>
      )}

      <div className="flex justify-end pt-2">
        <Button onClick={onClose}>Done</Button>
      </div>
    </div>
  )
}

interface OptionsEditorProps {
  element: FormElementInstance
  updateElement: (id: string, attributes: Record<string, any>) => void
}

function OptionsEditor({ element, updateElement }: OptionsEditorProps) {
  const options = element.attributes.options || []
  const [newOption, setNewOption] = useState({ label: "", value: "" })

  const addOption = () => {
    if (!newOption.label.trim() || !newOption.value.trim()) return

    const updatedOptions = [...options, { ...newOption }]
    updateElement(element.id, { options: updatedOptions })
    setNewOption({ label: "", value: "" })
  }

  const removeOption = (index: number) => {
    const updatedOptions = options.filter((_, i) => i !== index)
    updateElement(element.id, { options: updatedOptions })
  }

  const updateOption = (index: number, field: "label" | "value", value: string) => {
    const updatedOptions = [...options]
    updatedOptions[index] = { ...updatedOptions[index], [field]: value }
    updateElement(element.id, { options: updatedOptions })
  }

  return (
    <div className="space-y-4">
      <Label>Options</Label>

      <div className="space-y-2">
        {options.map((option, index) => (
          <div key={index} className="flex items-center gap-2">
            <Input
              placeholder="Label"
              value={option.label}
              onChange={(e) => updateOption(index, "label", e.target.value)}
              className="flex-1"
            />
            <Input
              placeholder="Value"
              value={option.value}
              onChange={(e) => updateOption(index, "value", e.target.value)}
              className="flex-1"
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => removeOption(index)}
              className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50"
            >
              <Trash2 size={16} />
            </Button>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <Input
          placeholder="Label"
          value={newOption.label}
          onChange={(e) => setNewOption({ ...newOption, label: e.target.value })}
          className="flex-1"
        />
        <Input
          placeholder="Value"
          value={newOption.value}
          onChange={(e) => setNewOption({ ...newOption, value: e.target.value })}
          className="flex-1"
        />
        <Button
          variant="outline"
          size="icon"
          onClick={addOption}
          className="h-8 w-8"
          disabled={!newOption.label.trim() || !newOption.value.trim()}
        >
          <Plus size={16} />
        </Button>
      </div>
    </div>
  )
}

