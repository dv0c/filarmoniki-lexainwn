"use client"

import React, { useState } from "react"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { Button } from "./ui/button"
import { Plus } from "lucide-react"
import { useRouter } from "next/navigation"
import { RippleButton } from "./animate-ui/buttons/ripple"

export default function CreateInstrumentModal({ onCreated }: { onCreated: () => void }) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({
    barcode: "",
    instrumentType: "",
    brand: "",
    status: "",
    comments: "",
  })
  const [loading, setLoading] = useState(false)

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.barcode || !form.instrumentType || !form.brand || !form.status) {
      return
    }

    setLoading(true)
    try {
      const res = await fetch("/api/instruments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error("Αποτυχία δημιουργίας οργάνου")
      setOpen(false)
      setForm({ barcode: "", instrumentType: "", brand: "", status: "", comments: "" })
      onCreated()
      router.refresh()
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
      onCreated()
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <RippleButton>
          <Plus />
          Δήλωση νέου οργάνου
        </RippleButton>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Δήλωση νέου οργάνου</DialogTitle>
          <DialogDescription>Συμπληρώστε την φόρμα για να δηλώσετε ένα νέο όργανο</DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <Label htmlFor="barcode">Barcode</Label>
            <Input
              id="barcode"
              name="barcode"
              value={form.barcode}
              onChange={onChange}
              required
              disabled={loading}
            />
          </div>
          <div>
            <Label htmlFor="instrumentType">Τύπος Οργάνου</Label>
            <Input
              id="instrumentType"
              name="instrumentType"
              value={form.instrumentType}
              onChange={onChange}
              required
              disabled={loading}
            />
          </div>
          <div>
            <Label htmlFor="brand">Μάρκα</Label>
            <Input
              id="brand"
              name="brand"
              value={form.brand}
              onChange={onChange}
              required
              disabled={loading}
            />
          </div>
          <div>
            <Label htmlFor="status">Κατάσταση</Label>
            <Input
              id="status"
              name="status"
              value={form.status}
              onChange={onChange}
              required
              disabled={loading}
            />
          </div>
          <div>
            <Label htmlFor="comments">Σχόλια</Label>
            <Input
              id="comments"
              name="comments"
              value={form.comments}
              onChange={onChange}
              disabled={loading}
            />
          </div>

          <DialogFooter>
            <Button type="submit" disabled={loading}>
              {loading ? "Αποθήκευση..." : "Αποθήκευση"}
            </Button>
            <DialogClose asChild>
              <Button variant="outline" disabled={loading}>
                Άκυρο
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
