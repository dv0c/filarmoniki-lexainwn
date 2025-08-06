"use client"

import AssignStudentsModal from "@/components/AssignStudentsModal"
import CreateInstrumentModal from "@/components/CreateInstrumentModal"
import { DataTable } from "@/components/data-table"
import DataTableSkeleton from "@/components/DataTableSkeleton"
import DeleteComponent from "@/components/DeleteModal"
import EditInstrumentModal from "@/components/EditInstrumentModal"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { IconDotsVertical } from "@tabler/icons-react"
import { ColumnDef } from "@tanstack/react-table"
import { Loader2 } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function StudentsTable() {
  const [students, setStudents] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [refresh, setRefresh] = useState(0)

  useEffect(() => {
    async function fetchStudents() {
      try {
        const res = await fetch("/api/instruments")
        if (!res.ok) throw new Error("Failed to fetch students")
        const data: any[] = await res.json()
        setStudents(data)
        console.log("Students fetched:", data)
      } catch (e: any) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    fetchStudents()
  }, [refresh])

  if (loading) return <div className="p-4 mx-auto ax-w-7xl w-full">
    <DataTableSkeleton columnCount={6} rowCount={5} />
    <div className="flex justify-center mt-4">
      <Loader2 className="animate-spin h-6 w-6 text-gray-500" />
    </div>
  </div>
  if (error) return <div className="text-red-600 text-center mt-4">{error}</div>


  const studentColumns: ColumnDef<any>[] = [
    {
      accessorKey: "barcode", header: "Barcode", cell:
        ({ row }) => <Link href={'/dashboard/instruments/' + row.original.id} className="font-medium underline">{row.original.barcode}</Link>
    },
    {
      accessorKey: "instrumentType", header: "Τύπος Οργάνου", cell:
        ({ row }) => <Link href={'/dashboard/instruments/' + row.original.id} className="font-medium underline">{row.original.instrumentType}</Link>
    },
    { accessorKey: "brand", header: "Μάρκα" },
    { accessorKey: "status", header: "Κατάσταση" },
    { accessorKey: "comments", header: "Σχόλια" },
    {
      id: "actions",
      cell: ({ row }) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <IconDotsVertical />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="max-w-sm" align="end">
            <DropdownMenuItem asChild>
              <EditInstrumentModal
                instrument={row.original}
                onSave={(updated) => {
                  setStudents((prev) =>
                    prev.map((s) => (s.id === updated.id ? updated : s))
                  )
                  setRefresh(prev => prev + 1)
                }}
              />
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <AssignStudentsModal
                instrumentId={row.original.id}
                instrumentName={`${row.original.instrumentType} ${row.original.brand}`}
                onAssigned={() => setRefresh((r) => r + 1)}
              />
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <DeleteComponent
                id={row.original.id}
                name={`${row.original.instrumentType} ${row.original.brand}`}
                onDelete={async (id) => {
                  await fetch(`/api/instruments?id=${id}`, { method: "DELETE" })
                  setStudents((prev) => prev.filter((s) => s.id !== id))
                  setRefresh(prev => prev + 1)
                }}
              />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }

  ]



  return (
    <div className="p-4 max-w-7xl w-full mx-auto">
      <CreateInstrumentModal onCreated={() => setRefresh(prev => prev + 1)} />
      <DataTable columns={studentColumns} data={students} />
    </div>
  )
}
