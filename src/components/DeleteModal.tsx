"use client"

import React, { useState } from "react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Trash } from "lucide-react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export default function DeleteComponent({
  id,
  name,
  onDelete,
}: {
  id: string | number
  name?: string
  onDelete: (id: string | number) => Promise<void> | void
}) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleDelete() {
    try {
      setLoading(true)
      await onDelete(id)
      toast.success(`${name ?? "Item"} διαγράφηκε`)
      router.refresh() // 🔹 refresh table after delete
      setOpen(false)
    } catch (error: any) {
      toast.error("Η διαγραφή απέτυχε")
    } finally {
      setLoading(false)
    }
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="ghost" className="w-full justify-start" size="sm">
          <Trash className="mr-2 h-4 w-4" />
          Διαγραφή
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Επιβεβαίωση διαγραφής</AlertDialogTitle>
          <AlertDialogDescription>
            Θέλετε σίγουρα να διαγράψετε{" "}
            <span className="font-semibold">{name ?? "αυτό το στοιχείο"}</span>; 
            Η ενέργεια δεν μπορεί να αναιρεθεί.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={loading}>Ακύρωση</AlertDialogCancel>
          <AlertDialogAction
            disabled={loading}
            onClick={handleDelete}
            className="bg-red-600 hover:bg-red-700"
          >
            {loading ? "Διαγραφή..." : "Διαγραφή"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
