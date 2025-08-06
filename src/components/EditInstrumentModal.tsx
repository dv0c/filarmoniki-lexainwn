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
import { Instruments } from "@/generated/prisma"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { Edit } from "lucide-react"

export default function EditInstrumentModal({
  instrument,
  onSave,
}: {
  instrument: Instruments
  onSave: (updated: Instruments) => void
}) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState<Instruments>(instrument)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (open) setForm(instrument)
  }, [open, instrument])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch("/api/instruments", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error("Η ενημέρωση απέτυχε")
      const updated: Instruments = await res.json()
      onSave(updated)
      toast.success("Το όργανο ενημερώθηκε")
      router.refresh()
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
          <Edit className="mr-2 h-4 w-4"  />
          Επεξεργασία
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Επεξεργασία Οργάνου</DialogTitle>
          <DialogDescription>Ανανεώστε τα στοιχεία του οργάνου.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="barcode">Barcode</Label>
            <Input
              id="barcode"
              name="barcode"
              value={form.barcode}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="instrumentType">Τύπος Οργάνου</Label>
            <Input
              id="instrumentType"
              name="instrumentType"
              value={form.instrumentType}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="brand">Μάρκα</Label>
            <Input
              id="brand"
              name="brand"
              value={form.brand}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="status">Κατάσταση</Label>
            <Input
              id="status"
              name="status"
              value={form.status}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="comments">Σχόλια</Label>
            <Input
              id="comments"
              name="comments"
              value={form.comments || ""}
              onChange={handleChange}
            />
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
