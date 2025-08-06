"use client"

import CreateStudentModal from "@/components/CreateStudentModal"
import { DataTable } from "@/components/data-table"
import DataTableSkeleton from "@/components/DataTableSkeleton"
import DeleteComponent from "@/components/DeleteModal"
import EditStudentModal from "@/components/EditStudentModal"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { IconDotsVertical } from "@tabler/icons-react"
import { ColumnDef } from "@tanstack/react-table"
import { Loader2 } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

type Student = {
  id: string
  firstName: string
  lastName: string
  address?: string
  phoneNumber?: string
  hasUniform: boolean
}

export default function StudentsTable() {
  const router = useRouter()
  const [students, setStudents] = useState<Student[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [refresh, setRefresh] = useState(0)


  useEffect(() => {
    async function fetchStudents() {
      setLoading(true)
      try {
        const res = await fetch("/api/mathites", { cache: "no-store" })
        if (!res.ok) throw new Error("Failed to fetch students")
        const data: Student[] = await res.json()
        setStudents(data)
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


  const studentColumns: ColumnDef<Student>[] = [
    {
      accessorKey: "firstName", header: "Όνομα", cell:
        ({ row }) => <Link href={'/dashboard/students/' + row.original.id} className="font-medium underline">{row.original.firstName}</Link>
    },
    { accessorKey: "lastName", header: "Επώνυμο", cell:
      ({ row }) => <Link href={'/dashboard/students/' + row.original.id} className="font-medium underline">{row.original.lastName}</Link>
     },
    { accessorKey: "address", header: "Διεύθυνση", cell: ({ row }) => row.original.address || "Δεν έχει οριστεί" },
    { accessorKey: "phoneNumber", header: "Τηλέφωνο" , cell: ({ row }) => row.original.phoneNumber || "Δεν έχει οριστεί" },
    {
      accessorKey: "hasUniform",
      header: "Στολή",
      cell: ({ row }) => (
        <Badge variant="outline">{row.original.hasUniform ? "Ναι" : "Όχι"}</Badge>
      ),
    },
    {
      id: "actions",
      cell: ({ row }) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <IconDotsVertical />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <EditStudentModal
                student={row.original as any}
                onSave={(updated) => {
                  setStudents((prev) =>
                    prev.map((s) => (s.id === updated.id ? updated : s))
                  )
                  setRefresh(prev => prev + 1) // Trigger re-render
                }}
              />
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <DeleteComponent
                id={row.original.id}
                name={`${row.original.firstName} ${row.original.lastName}`}
                onDelete={async (id) => {
                  await fetch(`/api/mathites?id=${id}`, { method: "DELETE" })
                  setStudents((prev) => prev.filter((s) => s.id !== id))
                  setRefresh(prev => prev + 1) // Trigger re-render
                }}
              />

            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ]



  return (
    <div className="p-4 max-w-7xl w-full mx-auto">
      <CreateStudentModal onCreated={() => setRefresh(prev => prev + 1)} />
      <DataTable columns={studentColumns} data={students} />
    </div>
  )
}
