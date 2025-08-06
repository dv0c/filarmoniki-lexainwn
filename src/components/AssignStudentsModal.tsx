"use client"

import React, { useState, useEffect } from "react"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { User } from "lucide-react"
import { toast } from "sonner"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "./data-table"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"

interface Student {
  id: string
  firstName: string
  lastName: string
  address: string
  phoneNumber: string
  hasUniform: boolean
}

interface AssignStudentsDialogProps {
  instrumentId: string
  instrumentName: string
  onAssigned?: () => void
}

export default function AssignStudentsDialog({
  instrumentId,
  instrumentName,
  onAssigned,
}: AssignStudentsDialogProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [students, setStudents] = useState<Student[]>([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState("")
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set())
  const [assignedStudentIds, setAssignedStudentIds] = useState<Set<string>>(new Set())

  // Fetch students and assigned students when dialog opens
  useEffect(() => {
    if (!isOpen) return

    setLoading(true)

    const fetchStudents = fetch("/api/mathites")
      .then((res) => res.json())
      .then((data: Student[]) => setStudents(data))
      .catch(() => toast.error("Αποτυχία λήψης μαθητών"))

    const fetchAssigned = fetch(`/api/instruments?id=${instrumentId}`)
      .then((res) => res.json())
      .then((instrument) => {
        const assignedIds = new Set(
          (instrument.charges ?? []).map((c: any) => c.studentId ?? c.student?.id)
        )
        setAssignedStudentIds(assignedIds)
      })
      .catch(() => toast.error("Αποτυχία λήψης χρεώσεων"))

    Promise.all([fetchStudents, fetchAssigned])
      .finally(() => setLoading(false))
  }, [isOpen, instrumentId])

  // Columns including checkbox for selection and assigned status with dropdown remove
  const studentColumns: ColumnDef<Student>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            selectedIds.size > 0 &&
            students.filter((s) => !assignedStudentIds.has(s.id)).every((s) => selectedIds.has(s.id))
          }
          onCheckedChange={(value) => {
            if (value) {
              const newSet = new Set(students.filter((s) => !assignedStudentIds.has(s.id)).map((s) => s.id))
              setSelectedIds(newSet)
            } else {
              setSelectedIds(new Set())
            }
          }}
          aria-label="Επιλογή όλων των μη χρεωμένων μαθητών"
          indeterminate={
            selectedIds.size > 0 &&
            selectedIds.size < students.filter((s) => !assignedStudentIds.has(s.id)).length
          }
        />
      ),
      cell: ({ row }) => {
        const studentId = row.original.id
        const isAssigned = assignedStudentIds.has(studentId)
        const checked = selectedIds.has(studentId)

        return (
          <Checkbox
            checked={checked}
            disabled={isAssigned}
            onCheckedChange={(value) => {
              if (isAssigned) return
              const newSet = new Set(selectedIds)
              if (value) {
                newSet.add(studentId)
              } else {
                newSet.delete(studentId)
              }
              setSelectedIds(newSet)
            }}
            aria-label={`Επιλογή μαθητή ${row.original.firstName} ${row.original.lastName}`}
          />
        )
      },
    },
    { accessorKey: "firstName", header: "Όνομα" },
    { accessorKey: "lastName", header: "Επώνυμο" },
    { accessorKey: "address", header: "Διεύθυνση" },
    { accessorKey: "phoneNumber", header: "Τηλέφωνο" },
    {
      accessorKey: "hasUniform",
      header: "Στολή",
      cell: ({ getValue }) =>
        getValue() ? (
          <Badge variant="default">Ναι</Badge>
        ) : (
          <Badge variant="secondary">Όχι</Badge>
        ),
    },
    {
      id: "assigned",
      header: "Χρέωση",
      cell: ({ row }) => {
        const studentId = row.original.id
        const isAssigned = assignedStudentIds.has(studentId)
        if (!isAssigned) return <Badge variant="secondary">Μη Χρεωμένος</Badge>

        return (
          <div className="flex items-center gap-2">
            <Badge variant="default">Χρεωμένος</Badge>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="icon" variant="outline" aria-label="Επιλογές χρέωσης">
                  ⋮
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onSelect={async (e) => {
                    e.preventDefault()
                    if (!confirm("Είστε σίγουροι ότι θέλετε να αφαιρέσετε την χρέωση;"))
                      return
                    setLoading(true)
                    try {
                      const res = await fetch("/api/charges", {
                        method: "DELETE",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ studentId, instrumentId }),
                      })
                      if (!res.ok) throw new Error("Failed to remove assignment")

                      toast.success("Η χρέωση αφαιρέθηκε για τον μαθητή.")
                      setAssignedStudentIds((prev) => {
                        const newSet = new Set(prev)
                        newSet.delete(studentId)
                        return newSet
                      })
                      setSelectedIds((prev) => {
                        const newSet = new Set(prev)
                        newSet.delete(studentId)
                        return newSet
                      })
                    } catch {
                      toast.error("Αποτυχία αφαίρεσης οργάνου.")
                    } finally {
                      setLoading(false)
                    }
                  }}
                >
                  Αφαίρεση οργάνου
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )
      },
    },
  ]

  async function handleAssign() {
    if (selectedIds.size === 0) {
      toast.error("Επιλέξτε τουλάχιστον έναν μαθητή")
      return
    }
    setLoading(true)
    try {
      const unassignedIds = Array.from(selectedIds).filter(
        (id) => !assignedStudentIds.has(id)
      )

      const results = await Promise.all(
        unassignedIds.map((studentId) =>
          fetch("/api/charges", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ instrumentId, studentId }),
          })
        )
      )
      const successCount = results.filter((r) => r.ok).length
      const errorCount = results.length - successCount
      if (successCount > 0)
        toast.success(`Το όργανο χρεώθηκε επιτυχώς σε ${successCount} μαθητές.`)
      if (errorCount > 0)
        toast.error(`${errorCount} χρεώσεις απέτυχαν (ήδη χρεωμένες).`)

      setAssignedStudentIds((prev) => {
        const newSet = new Set(prev)
        unassignedIds.forEach((id) => newSet.add(id))
        return newSet
      })
      setSelectedIds(new Set())
      setIsOpen(false)
      onAssigned?.()
    } catch {
      toast.error("Αποτυχία χρέωσης οργάνου.")
    } finally {
      setLoading(false)
    }
  }

  const filteredStudents = students.filter(
    (s) =>
      s.firstName.toLowerCase().includes(search.toLowerCase()) ||
      s.lastName.toLowerCase().includes(search.toLowerCase()) ||
      s.address.toLowerCase().includes(search.toLowerCase()) ||
      s.phoneNumber.includes(search)
  )

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="w-full justify-start">
          <User className="mr-2 h-4 w-4" />
          Χρέωση σε Μαθητές
        </Button>
      </DialogTrigger>
      <DialogContent className="!max-w-7xl w-full !max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle>Επιλογή Μαθητών για {instrumentName}</DialogTitle>
        </DialogHeader>

        <DataTable
          data={filteredStudents}
          columns={studentColumns}
          searchPlaceholder="Αναζήτηση μαθητών..."
        />

        <div className="flex justify-end gap-2 mt-4">
          <Button variant="outline" onClick={() => setIsOpen(false)} disabled={loading}>
            Ακύρωση
          </Button>
          <Button onClick={handleAssign} disabled={loading || selectedIds.size === 0}>
            {loading ? "Χρέωση..." : `Χρέωση σε ${selectedIds.size} Μαθητές`}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
