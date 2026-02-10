import { useMemo } from 'react'
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
  type ColumnDef,
  type PaginationState,
} from '@tanstack/react-table'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { TableSkeleton } from './TableSkeleton'

/**
 * Pagination info from server response
 */
export interface PaginationMeta {
  page: number
  limit: number
  total: number
}

/**
 * DataTable props
 */
interface DataTableProps<TData> {
  /** Table data array */
  data: TData[]
  /** TanStack Table column definitions - uses any to avoid strict type conflicts */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: ColumnDef<TData, any>[]
  /** Loading state */
  isLoading?: boolean
  /** Pagination meta from server (for server-side) */
  paginationMeta?: PaginationMeta
  /** Current pagination state */
  pagination?: PaginationState
  /** Pagination change handler */
  onPaginationChange?: (pagination: PaginationState) => void
  /** Enable server-side pagination */
  manualPagination?: boolean
  /** Empty state message */
  emptyMessage?: string
  /** Row click handler - receives the row data */
  onRowClick?: (row: TData) => void
}

/**
 * Reusable DataTable component with TanStack Table v8
 * Supports both client-side and server-side pagination
 *
 * @example
 * // Client-side pagination
 * <DataTable data={clients} columns={columns} />
 *
 * @example
 * // Server-side pagination
 * <DataTable
 *   data={data?.data ?? []}
 *   columns={columns}
 *   isLoading={isLoading}
 *   manualPagination
 *   paginationMeta={{ page: data?.page, limit: data?.limit, total: data?.total }}
 *   pagination={pagination}
 *   onPaginationChange={setPagination}
 * />
 */
export function DataTable<TData>({
  data,
  columns,
  isLoading = false,
  paginationMeta,
  pagination,
  onPaginationChange,
  manualPagination = false,
  emptyMessage = 'No data found',
  onRowClick,
}: DataTableProps<TData>) {
  // CRITICAL: Memoize data to prevent infinite re-renders
  const memoizedData = useMemo(() => data, [data])

  const pageCount = useMemo(() => {
    if (!manualPagination || !paginationMeta) {
      return undefined
    }
    return Math.ceil(paginationMeta.total / paginationMeta.limit)
  }, [manualPagination, paginationMeta])

  const table = useReactTable({
    data: memoizedData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    // Only use client-side pagination if not manual
    ...(manualPagination
      ? {}
      : { getPaginationRowModel: getPaginationRowModel() }),
    // Server-side pagination config
    manualPagination,
    pageCount,
    state: pagination ? { pagination } : undefined,
    onPaginationChange: onPaginationChange
      ? (updater) => {
          const newState =
            typeof updater === 'function'
              ? updater(pagination ?? { pageIndex: 0, pageSize: 20 })
              : updater
          onPaginationChange(newState)
        }
      : undefined,
  })

  const currentPage =
    pagination?.pageIndex ?? table.getState().pagination.pageIndex
  const totalPages = pageCount ?? table.getPageCount()

  return (
    <div className="w-full">
      {/* Table */}
      <div className="overflow-x-auto rounded-lg">
        <table className="min-w-full border-collapse text-sm">
          <thead className="bg-[#F3F3F3] text-gray-600">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-4 py-3 text-left font-medium"
                    style={{ width: header.getSize() }}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-white">
            {isLoading ? (
              <TableSkeleton columns={columns.length} rows={5} />
            ) : table.getRowModel().rows.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="p-8 text-center text-gray-500"
                >
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  onClick={() => onRowClick?.(row.original)}
                  className={`border-b border-gray-100 transition hover:bg-gray-50 ${
                    onRowClick ? 'cursor-pointer' : ''
                  }`}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-4 py-3">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {(manualPagination || table.getPageCount() > 1) && (
        <div className="mt-4 flex items-center justify-between px-2">
          <div className="text-sm text-gray-500">
            {paginationMeta ? (
              <>
                Showing {currentPage * paginationMeta.limit + 1} to{' '}
                {Math.min(
                  (currentPage + 1) * paginationMeta.limit,
                  paginationMeta.total
                )}{' '}
                of {paginationMeta.total} results
              </>
            ) : (
              <>
                Page {currentPage + 1} of {totalPages}
              </>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="flex items-center gap-1 rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </button>
            <button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="flex items-center gap-1 rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
