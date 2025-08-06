"use client"

import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core"
import { restrictToVerticalAxis } from "@dnd-kit/modifiers"
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  Row,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table"
import { Search, X } from "lucide-react"
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import {
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconChevronsLeft,
  IconChevronsRight,
  IconLayoutColumns,
  IconChevronUp,
} from "@tabler/icons-react"
import { RippleButton } from "./animate-ui/buttons/ripple"

function DraggableRow<TData>({ row }: { row: Row<TData> }) {
  const { transform, transition, setNodeRef, isDragging } = useSortable({
    id: row.id,
  })

  return (
    <TableRow
      ref={setNodeRef}
      data-dragging={isDragging}
      className="relative data-[dragging=true]:opacity-80"
      style={{ transform: CSS.Transform.toString(transform), transition }}
    >
      {row.getVisibleCells().map((cell) => (
        <TableCell key={cell.id}>
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </TableCell>
      ))}
    </TableRow>
  )
}

// Global filter function for searching across all columns
function globalFilterFn(row: any, columnId: string, value: string) {
  const search = value.trim().toLowerCase()

  // Αν η αναζήτηση είναι "ναι" θεωρούμε true, "όχι" ή "οχι" θεωρούμε false
  if (search === "ναι" || search === "έχει στολή" || search === "εχει στολη" || search === "has uniform") {
    // Επιστρέφουμε true αν κάποια από τις τιμές boolean του row είναι true
    // Για παράδειγμα ψάχνουμε αν υπάρχει κάποιο πεδίο boolean true:
    return Object.values(row.original).some((val) => val === true)
  }
  if (search === "όχι" || search === "οχι" || search === "no" || search === "does not have uniform" || search === 'δεν εχει στολη' || search === 'δεν έχει στολή') {
    return Object.values(row.original).some((val) => val === false)
  }

  // Default: αναζήτηση κανονικού κειμένου σε όλα τα πεδία (string ή αριθμοί κλπ)
  const rowValues = Object.values(row.original)
    .map((val) => {
      if (typeof val === "boolean") {
        return val ? "ναι" : "όχι" // Μετατρέπουμε boolean σε "ναι"/"όχι" για αναζήτηση
      }
      return String(val).toLowerCase()
    })
    .join(" ")

  return rowValues.includes(search)
}

export function DataTable<TData extends { id: string | number }>({
  data: initialData,
  columns,
  onDelete,
  onEdit,
  searchPlaceholder = "Αναζήτηση...",
}: {
  data: TData[]
  columns: ColumnDef<TData>[]
  onDelete?: (id: TData["id"]) => void
  onEdit?: (item: TData) => void
  searchPlaceholder?: string
}) {
  const [data, setData] = React.useState(initialData)
  const [rowSelection, setRowSelection] = React.useState({})
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [columnFilters, setColumnFilters] =
    React.useState<ColumnFiltersState>([])
  const [globalFilter, setGlobalFilter] = React.useState<any>("")
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  })

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor)
  )

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters, // you can keep this or remove if you don't use filters
      globalFilter,
      pagination,
    },
    getRowId: (row) => row.id.toString(),
    enableRowSelection: true,
    enableGlobalFilter: true,
    // disable column filters:
    enableColumnFilters: false,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
    globalFilterFn,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event
    if (active && over && active.id !== over.id) {
      setData((data) => {
        const ids = data.map((d) => d.id)
        return arrayMove(data, ids.indexOf(active.id), ids.indexOf(over.id))
      })
    }
  }

  // Clear search function
  const clearSearch = () => {
    setGlobalFilter("")
  }

  // Update data when initialData changes
  React.useEffect(() => {
    setData(initialData)
  }, [initialData])

  return (
    <Tabs defaultValue="outline" className="w-full flex-col gap-6">
      {/* Header with Search and Column Toggle */}
      <div className="flex items-center justify-between gap-4">
        <div className="relative flex-1 mt-10 max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder={searchPlaceholder}
            value={globalFilter ?? ""}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="pl-10 pr-10"
          />
          {globalFilter && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearSearch}
              className="absolute right-1 top-1/2 h-6 w-6 -translate-y-1/2 p-0 hover:bg-transparent"
            >
              <X className="h-3 w-3" />
            </Button>
          )}
        </div>

        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <IconLayoutColumns />
                <span className="ml-2">Columns</span>
                <IconChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((col) => col.getCanHide())
                .map((column) => (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) => column.toggleVisibility(!!value)}
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Search Results Info */}
      {globalFilter && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>
            Found {table.getFilteredRowModel().rows.length} result(s) for "
            {globalFilter}"
          </span>
          {table.getFilteredRowModel().rows.length !== data.length && (
            <Button
              variant="link"
              size="sm"
              onClick={clearSearch}
              className="h-auto p-0 text-sm underline"
            >
              Clear search
            </Button>
          )}
        </div>
      )}

      {/* Table */}
      <TabsContent
        value="outline"
        className="relative flex flex-col gap-4 overflow-auto"
      >
        <div className="overflow-hidden rounded-lg border">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            modifiers={[restrictToVerticalAxis]}
            onDragEnd={handleDragEnd}
          >
            <Table>
              <TableHeader className="bg-muted sticky top-0 z-10">
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <TableHead key={header.id} colSpan={header.colSpan}>
                        <div
                          role="button"
                          tabIndex={0}
                          onClick={
                            header.column.getCanSort()
                              ? () => header.column.toggleSorting()
                              : undefined
                          }
                          onKeyDown={(e) => {
                            if (
                              header.column.getCanSort() &&
                              (e.key === "Enter" || e.key === " ")
                            ) {
                              e.preventDefault()
                              header.column.toggleSorting()
                            }
                          }}
                          className={`select-none cursor-pointer flex items-center gap-1 ${header.column.getCanSort() ? "hover:underline" : ""
                            }`}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}

                          {{
                            asc: <IconChevronUp size={14} />,
                            desc: <IconChevronDown size={14} />,
                          }[header.column.getIsSorted() as string] ?? null}
                        </div>
                      </TableHead>
                    ))}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows.length ? (
                  <SortableContext
                    items={data.map((d) => d.id)}
                    strategy={verticalListSortingStrategy}
                  >
                    {table.getRowModel().rows.map((row) => (
                      <DraggableRow key={row.id} row={row} />
                    ))}
                  </SortableContext>
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      {globalFilter ? (
                        <div className="flex flex-col items-center gap-2">
                          <span>No results found for "{globalFilter}"</span>
                          <Button
                            variant="link"
                            size="sm"
                            onClick={clearSearch}
                            className="text-sm"
                          >
                            Clear search to see all results
                          </Button>
                        </div>
                      ) : (
                        "No results."
                      )}
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </DndContext>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between">
          <span className="hidden text-sm text-muted-foreground lg:block">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected.
            {globalFilter && (
              <span className="ml-2">
                ({table.getFilteredRowModel().rows.length} of {data.length} total)
              </span>
            )}
          </span>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              <IconChevronsLeft />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <IconChevronLeft />
            </Button>
            <span className="text-sm">
              Page {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <IconChevronRight />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              <IconChevronsRight />
            </Button>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  )
}
