import { ArrowLeft, Pencil } from 'lucide-react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import ClientActiveProjectsTable from '../tables/ClientActiveProjectsTable'
import CompanyTimeSummary from '../ui/CompanyTimeSummary'
import { useClientDetailsQuery } from '../queries'
import {
  openEditClientModal,
  setSelectedClient,
} from '../../../redux/slice/modalSlice'

/**
 * Skeleton loader for the client details page
 */
const ClientDetailsSkeleton = () => (
  <div className="min-h-screen animate-pulse bg-none text-gray-800">
    {/* Header Skeleton */}
    <div className="mb-6 flex items-center gap-2 rounded-lg bg-white p-4 shadow-sm">
      <div className="h-5 w-5 rounded bg-gray-200" />
      <div className="h-6 w-64 rounded bg-gray-200" />
    </div>

    {/* Client Details Card Skeleton */}
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <div className="mb-6 flex justify-between">
        <div className="flex items-start gap-4">
          <div className="h-20 w-20 rounded-md bg-gray-200" />
          <div className="space-y-2">
            <div className="h-5 w-32 rounded bg-gray-200" />
            <div className="h-4 w-24 rounded bg-gray-200" />
          </div>
        </div>
        <div className="h-8 w-8 rounded bg-gray-200" />
      </div>

      {/* Inputs Skeleton */}
      <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i}>
            <div className="mb-2 h-4 w-24 rounded bg-gray-200" />
            <div className="h-10 w-full rounded-md bg-gray-200" />
          </div>
        ))}
      </div>

      {/* About Skeleton */}
      <div className="mb-2 h-4 w-16 rounded bg-gray-200" />
      <div className="h-24 w-full rounded-md bg-gray-200" />
    </div>

    {/* Projects Table Skeleton */}
    <div className="mt-8 rounded-lg bg-white p-6 shadow-sm">
      <div className="mb-3 flex items-center justify-between rounded-md bg-[#F3F3F3] px-4 py-2">
        <div className="h-5 w-48 rounded bg-gray-300" />
        <div className="h-8 w-32 rounded bg-gray-300" />
      </div>
      <div className="space-y-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-12 w-full rounded bg-gray-200" />
        ))}
      </div>
    </div>

    {/* Time Summary Skeleton */}
    <div className="mt-8 rounded-lg bg-white p-6 shadow-sm">
      <div className="mb-4 h-6 w-48 rounded bg-gray-200" />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <div key={i} className="h-24 rounded-lg bg-gray-200" />
        ))}
      </div>
    </div>
  </div>
)

/**
 * Dynamic client details page
 * Fetches client data based on :id route param
 */
export default function ViewClientDetails() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { id } = useParams<{ id: string }>()

  const { data, isLoading, isError } = useClientDetailsQuery(id ?? '')

  const handleEditClick = () => {
    if (data?.client) {
      dispatch(setSelectedClient(data.client))
      dispatch(openEditClientModal())
    }
  }

  if (isLoading) {
    return <ClientDetailsSkeleton />
  }

  if (isError || !data) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <p className="mb-4 text-gray-600">Failed to load client details</p>
          <button
            onClick={() => navigate('/clients')}
            className="bg-primary hover:bg-primary/90 rounded-md px-4 py-2 text-white"
          >
            Back to Clients
          </button>
        </div>
      </div>
    )
  }

  const { client, projects, stats } = data

  return (
    <div className="min-h-screen bg-none text-gray-800">
      {/* ===== Header ===== */}
      <div className="mb-6 flex items-center gap-2 rounded-lg bg-white p-4 shadow-sm">
        <ArrowLeft
          className="h-5 w-5 cursor-pointer text-gray-700"
          onClick={() => navigate('/clients')}
        />
        <h1 className="text-lg font-semibold">Clients – {client.name}</h1>
      </div>

      {/* ===== Client Details Card ===== */}
      <div className="rounded-lg bg-white p-6 shadow-sm">
        {/* Top Section */}
        <div className="mb-6 flex justify-between">
          <div className="flex items-start gap-4">
            {client.logoUrl ? (
              <img
                src={client.logoUrl}
                alt={client.name}
                className="h-20 w-20 rounded-md border border-gray-200 object-cover"
              />
            ) : (
              <div className="flex h-20 w-20 items-center justify-center rounded-md border border-gray-200 bg-gray-100 text-2xl font-bold text-gray-500">
                {client.name.charAt(0)}
              </div>
            )}
            <div>
              <p className="font-medium text-gray-700">Client Logo/Photo</p>
              <p className="text-xs text-gray-400">PNG/JPEG | 5 MB max</p>
            </div>
          </div>

          <button
            onClick={handleEditClick}
            className="rounded-md p-2 hover:bg-gray-100"
            title="Edit Client"
          >
            <Pencil className="h-5 w-5 text-gray-400" />
          </button>
        </div>

        {/* Read-only Inputs */}
        <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-gray-700">
              Client Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={client.name || ''}
              readOnly
              className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-700"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              value={client.phone || '—'}
              readOnly
              className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-700"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={client.email || '—'}
              readOnly
              className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-700"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Website</label>
            <input
              type="text"
              value={client.website || '—'}
              readOnly
              className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-700"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">About</label>
          <textarea
            value={client.description || '—'}
            readOnly
            rows={3}
            className="mt-1 w-full resize-none rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-700"
          />
        </div>

        <div className="mt-4">
          <label className="text-sm font-medium text-gray-700">Notes</label>
          <textarea
            value={client.notes || '—'}
            readOnly
            rows={2}
            className="mt-1 w-full resize-none rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-700"
          />
        </div>
      </div>

      {/* ===== Active Projects ===== */}
      <div className="mt-8 rounded-lg bg-white p-6 shadow-sm">
        <div className="mb-3 flex items-center justify-between rounded-md bg-[#F3F3F3] px-4 py-2">
          <p className="text-sm font-medium text-gray-700">
            {client.name} Active Projects
          </p>
        </div>
        <ClientActiveProjectsTable
          projects={projects}
          clientName={client.name}
        />
      </div>

      {/* ===== Time Summary ===== */}
      <div className="mt-8 rounded-lg bg-white p-6 shadow-sm">
        <CompanyTimeSummary client={client} stats={stats} />
      </div>
    </div>
  )
}
