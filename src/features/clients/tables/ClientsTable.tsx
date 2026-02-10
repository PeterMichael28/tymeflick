import { useState, useMemo, useCallback } from 'react'
import { MoreVertical, Pencil, Eye, Trash2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createColumnHelper, type PaginationState } from '@tanstack/react-table'
import {
  DataTable,
  DropdownMenu,
  type DropdownMenuItem,
} from '../../../components/common'
import { MailIcon, PhoneIcon } from '../ui/ClientIcons'
import {
  openEditClientModal,
  openDeleteClientModal,
  setSelectedClient,
} from '../../../redux/slice/modalSlice'
import { useClientsQuery, type Client } from '../queries'

const columnHelper = createColumnHelper<Client>()

/**
 * Clients table with TanStack Table and server-side pagination
 */
interface ClientsTableProps {
  searchTerm?: string
}

export default function ClientsTable({ searchTerm = '' }: ClientsTableProps) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // Pagination state (0-indexed for TanStack Table)
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 20,
  })

  // Query with server-side pagination
  const { data, isLoading, isFetching } = useClientsQuery(
    pagination,
    searchTerm
  )

  const handleEdit = useCallback(
    (client: Client) => {
      dispatch(setSelectedClient(client))
      dispatch(openEditClientModal())
    },
    [dispatch]
  )

  const handleDelete = useCallback(
    (client: Client) => {
      dispatch(setSelectedClient(client))
      dispatch(openDeleteClientModal())
    },
    [dispatch]
  )

  const handleViewDetails = useCallback(
    (clientId: string) => {
      navigate(`/clients/${clientId}`)
    },
    [navigate]
  )

  const handleRowClick = useCallback(
    (client: Client) => {
      navigate(`/clients/${client.id}`)
    },
    [navigate]
  )

  // Build dropdown items for a client
  const getDropdownItems = useCallback(
    (client: Client): DropdownMenuItem[] => [
      {
        label: 'Edit Client',
        onClick: () => handleEdit(client),
        icon: <Pencil className="h-4 w-4" />,
      },
      {
        label: 'View Details',
        onClick: () => handleViewDetails(client.id),
        icon: <Eye className="h-4 w-4" />,
      },
      {
        label: 'Delete Client',
        onClick: () => handleDelete(client),
        icon: <Trash2 className="h-4 w-4" />,
        variant: 'danger',
      },
    ],
    [handleEdit, handleViewDetails, handleDelete]
  )

  // CRITICAL: Memoize columns to prevent infinite re-renders
  const columns = useMemo(
    () => [
      columnHelper.accessor('logoUrl', {
        header: '',
        size: 100,
        cell: ({ row }) => (
          <div className="flex justify-center">
            {row.original.logoUrl ? (
              <img
                src={row.original.logoUrl}
                alt={row.original.name}
                className="h-14 w-14 rounded-md object-cover"
              />
            ) : (
              <div className="flex h-14 w-14 items-center justify-center rounded-md bg-gray-200 text-lg font-semibold text-gray-500">
                {row.original.name.charAt(0)}
              </div>
            )}
          </div>
        ),
      }),
      columnHelper.accessor('name', {
        header: 'Client',
        cell: ({ row }) => (
          <div>
            <p className="font-medium text-gray-900">{row.original.name}</p>
            {row.original.email ? (
              <p className="flex items-center gap-1 text-xs text-gray-500">
                <MailIcon className="mr-1 h-4 w-4" />
                {row.original.email}
              </p>
            ) : null}
            {row.original.phone ? (
              <p className="flex items-center gap-1 text-xs text-gray-500">
                <PhoneIcon className="mr-1 h-4 w-4" />
                {row.original.phone}
              </p>
            ) : null}
          </div>
        ),
      }),
      columnHelper.accessor('status', {
        header: 'Status',
        cell: ({ getValue }) => {
          const status = getValue()
          return (
            <span
              className={`rounded-md px-2 py-0.5 text-xs font-medium ${
                status === 'ACTIVE'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-yellow-100 text-yellow-700'
              }`}
            >
              {status}
            </span>
          )
        },
      }),
      columnHelper.accessor('totalTrackedMinutes', {
        header: 'Total Hours',
        cell: ({ getValue }) => {
          const minutes = getValue()
          const hours = Math.floor(minutes / 60)
          const mins = minutes % 60
          return (
            <div className="">
              <p className="font-semibold text-gray-900">
                {hours}h {mins}m
              </p>
              <p className="text-xs text-gray-500">Total Hours</p>
            </div>
          )
        },
      }),
      columnHelper.accessor('totalBillableAmount', {
        header: 'Total Cost',
        cell: ({ getValue }) => (
          <div className="">
            <p className="font-semibold text-gray-900">${getValue()}</p>
            <p className="text-xs text-gray-500">Total Cost</p>
          </div>
        ),
      }),
      columnHelper.accessor('updatedAt', {
        header: 'Last Activity',
        cell: ({ getValue }) => {
          const date = new Date(getValue())
          const now = new Date()
          const diffMs = now.getTime() - date.getTime()
          const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

          let display = ''
          if (diffDays === 0) {
            display = 'Today'
          } else if (diffDays === 1) {
            display = 'Yesterday'
          } else if (diffDays < 7) {
            display = `${diffDays} days ago`
          } else {
            display = date.toLocaleDateString()
          }

          return (
            <p className="text-xs whitespace-nowrap text-gray-500">
              Last activity: {display}
            </p>
          )
        },
      }),
      columnHelper.display({
        id: 'actions',
        size: 50,
        cell: ({ row }) => (
          <div onClick={(e) => e.stopPropagation()}>
            <DropdownMenu
              trigger={
                <MoreVertical className="h-5 w-5 cursor-pointer text-gray-600 hover:text-gray-900" />
              }
              items={getDropdownItems(row.original)}
            />
          </div>
        ),
      }),
    ],
    [getDropdownItems]
  )

  return (
    <div className="relative">
      {/* DataTable */}
      <DataTable
        data={data?.data ?? []}
        columns={columns}
        isLoading={isLoading}
        manualPagination
        paginationMeta={
          data
            ? { page: data.page, limit: data.limit, total: data.total }
            : undefined
        }
        pagination={pagination}
        onPaginationChange={setPagination}
        onRowClick={handleRowClick}
        emptyMessage="No clients found. Add your first client!"
      />

      {/* Loading indicator for refetching */}
      {isFetching && !isLoading ? (
        <div className="absolute top-0 right-0 p-2">
          <div className="border-primary h-4 w-4 animate-spin rounded-full border-2 border-t-transparent" />
        </div>
      ) : null}
    </div>
  )
}
