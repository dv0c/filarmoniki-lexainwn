"use client"

import React, { useEffect, useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Students } from "@/generated/prisma"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { Edit } from "lucide-react"

export default function EditStudentModal({
  student,
  onSave,
}: {
  student: Students
  onSave: (updated: Students) => void
}) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState<Students>(student)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (open) setForm(student)
  }, [open, student])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch("/api/mathites", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error("Η ενημέρωση απέτυχε")
      const updated: Students = await res.json()
      onSave(updated)
      toast.success("Ο μαθητής ενημερώθηκε")
      router.refresh() // 🔹 refresh table after edit
      setOpen(false)
    } catch (error: any) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="w-full justify-start">
          <Edit className="mr-2 h-4 w-4" />
          Επεξεργασία
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Επεξεργασία μαθητή</DialogTitle>
          <DialogDescription>Ανανεώστε τα στοιχεία του μαθητή.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="firstName">Όνομα</Label>
            <Input
              id="firstName"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="lastName">Επώνυμο</Label>
            <Input
              id="lastName"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="address">Διεύθυνση</Label>
            <Input
              id="address"
              name="address"
              value={form.address || ""}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="phoneNumber">Τηλέφωνο</Label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              value={form.phoneNumber || ""}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="hasUniform"
              name="hasUniform"
              checked={form.hasUniform}
              onCheckedChange={(checked) =>
                setForm((prev) => ({ ...prev, hasUniform: !!checked }))
              }
            />
            <Label htmlFor="hasUniform">Διαθέτει Στολή</Label>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={loading}>
              {loading ? "Αποθήκευση..." : "Αποθήκευση"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
