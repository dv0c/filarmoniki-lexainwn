"use client"

import React, { useState } from "react"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "./ui/dialog"
import { Button } from "./ui/button"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Checkbox } from "./ui/checkbox"
import { toast } from "sonner"
import { RippleButton } from "./animate-ui/buttons/ripple"
import { Plus } from "lucide-react"

export default function CreateStudentDialog({ onCreated }: { onCreated: () => void }) {
    const [open, setOpen] = useState(false)
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        residence: "",
        phoneNumber: "",
        hasUniform: false,
    })
    const [loading, setLoading] = useState(false)

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value, type, checked } = e.target
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }))
    }

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault()
        if (!form.firstName || !form.lastName) {
            toast.error("Το όνομα και το επώνυμο είναι υποχρεωτικά")
            return
        }

        setLoading(true)
        try {
            const res = await fetch("/api/mathites", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            })
            if (!res.ok) throw new Error("Αποτυχία δημιουργίας μαθητή")
            toast.success("Ο μαθητής δημιουργήθηκε επιτυχώς")
            setOpen(false)
            setForm({ firstName: "", lastName: "", residence: "", phoneNumber: "", hasUniform: false })
            onCreated()
        } catch (error) {
            toast.error((error as Error).message)
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
                    Δημιουργία Νέου Μαθητή
                </RippleButton>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Δημιουργία Μαθητή</DialogTitle>
                    <DialogDescription>Συμπλήρωσε την φόρμα για να προσθέσεις νέο μαθητή.</DialogDescription>
                </DialogHeader>
                <form onSubmit={onSubmit} className="space-y-4">
                    <div>
                        <Label htmlFor="firstName">Όνομα</Label>
                        <Input
                            id="firstName"
                            name="firstName"
                            value={form.firstName}
                            onChange={onChange}
                            required
                            disabled={loading}
                        />
                    </div>
                    <div>
                        <Label htmlFor="lastName">Επώνυμο</Label>
                        <Input
                            id="lastName"
                            name="lastName"
                            value={form.lastName}
                            onChange={onChange}
                            required
                            disabled={loading}
                        />
                    </div>
                    <div>
                        <Label htmlFor="residence">Τόπος Κατοικίας</Label>
                        <Input
                            id="residence"
                            name="residence"
                            value={form.residence}
                            onChange={onChange}
                            disabled={loading}
                        />
                    </div>
                    <div>
                        <Label htmlFor="phoneNumber">Τηλέφωνο</Label>
                        <Input
                            id="phoneNumber"
                            name="phoneNumber"
                            value={form.phoneNumber}
                            onChange={onChange}
                            type="tel"
                            disabled={loading}
                        />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox
                            id="hasUniform"
                            name="hasUniform"
                            checked={form.hasUniform}
                            onCheckedChange={(checked) =>
                                setForm((prev) => ({ ...prev, hasUniform: !!checked }))
                            }
                            disabled={loading}
                        />
                        <Label htmlFor="hasUniform">Διαθέτει Στολή</Label>
                    </div>

                    <DialogFooter>
                        <RippleButton type="submit" disabled={loading}>
                            {loading ? "Αποθήκευση..." : "Αποθήκευση"}
                        </RippleButton>
                        <DialogClose asChild>
                            <RippleButton variant="outline" disabled={loading}>
                                Ακύρωση
                            </RippleButton>
                        </DialogClose>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
