import { useMemo } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import type { PaginationState } from '@tanstack/react-table'
import apiClient from '../../api/apiClient'
import { CLIENT_ENDPOINTS } from '../../api/uri'
import type { ApiError } from '../../types/auth.types'
import type { CreateClientPayload } from './schemas/clientSchema'
import { useDebounce } from '../../utils/debounce'

/**
 * Client types
 */
export interface Client {
  id: string
  tenantId: string
  name: string
  description?: string
  email?: string
  phone?: string
  address?: string
  city?: string
  country?: string
  postalCode?: string
  contactPerson?: string
  logoUrl?: string
  website?: string
  notes?: string
  lastActivityAt?: string
  status: 'ACTIVE' | 'INACTIVE'
  totalTrackedMinutes: number
  totalBillableAmount: string
  metadata?: Record<string, unknown>
  createdAt: string
  updatedAt: string
}

export interface ClientsResponse {
  data: Client[]
  total: number
  page: number
  limit: number
}

/**
 * Project associated with a client
 */
export interface ClientProject {
  id: string
  name: string
  status: 'ACTIVE' | 'INACTIVE'
  totalTrackedMinutes: number
  lastActivityAt?: string
}

/**
 * Stats for a client
 */
export interface ClientStats {
  activeProjects: number
  totalProjects: number
  totalTrackedMinutes: number
  totalBillableAmount: number
  todayHours: number
  thisWeekHours: number
  thisMonthHours: number
}

/**
 * Full client details response from /clients/{id}/details
 */
export interface ClientDetailsResponse {
  client: Client
  projects: ClientProject[]
  stats: ClientStats
}

export interface UpdateClientPayload extends Partial<CreateClientPayload> {
  id: string
}

/**
 * Query keys for clients - export for revalidation anywhere
 * Usage: queryClient.invalidateQueries({ queryKey: clientQueryKeys.all })
 */
export const clientQueryKeys = {
  all: ['clients'] as const,
  list: (params?: { page?: number; limit?: number; search?: string }) =>
    [...clientQueryKeys.all, 'list', params] as const,
  detail: (id: string) => [...clientQueryKeys.all, 'detail', id] as const,
  details: (id: string) => [...clientQueryKeys.all, 'details', id] as const,
}

/**
 * Hook for clients list with server-side pagination and search
 * Includes debounced search handling
 */
export const useClientsQuery = (
  pagination: PaginationState = { pageIndex: 0, pageSize: 20 },
  searchTerm = ''
) => {
  // Debounce search term to avoid excessive API calls
  const debouncedSearch = useDebounce(searchTerm, 300)

  const queryParams = useMemo(
    () => ({
      page: pagination.pageIndex + 1, // API uses 1-based pages
      limit: pagination.pageSize,
      search: debouncedSearch,
    }),
    [pagination.pageIndex, pagination.pageSize, debouncedSearch]
  )

  return useQuery({
    // CRITICAL: Include ALL state in query key for proper refetching
    queryKey: clientQueryKeys.list(queryParams),
    queryFn: async () => {
      const params = new URLSearchParams()
      params.set('page', String(queryParams.page))
      params.set('limit', String(queryParams.limit))
      if (queryParams.search) {
        params.set('search', queryParams.search)
      }

      const response = await apiClient.get<ClientsResponse>(
        `${CLIENT_ENDPOINTS.LIST}?${params.toString()}`
      )
      return response.data
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    placeholderData: (previousData) => previousData, // Keep previous data while fetching
  })
}

/**
 * Fetch single client by ID
 */
export const useClientQuery = (id: string) => {
  return useQuery({
    queryKey: clientQueryKeys.detail(id),
    queryFn: async () => {
      const response = await apiClient.get<Client>(CLIENT_ENDPOINTS.GET(id))
      return response.data
    },
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  })
}

/**
 * Fetch client details with projects and stats
 * Used on the client details page
 */
export const useClientDetailsQuery = (id: string) => {
  return useQuery({
    queryKey: clientQueryKeys.details(id),
    queryFn: async () => {
      const response = await apiClient.get<ClientDetailsResponse>(
        CLIENT_ENDPOINTS.DETAILS(id)
      )
      return response.data
    },
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  })
}

/**
 * Create new client mutation
 */
export const useCreateClient = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: CreateClientPayload) => {
      const response = await apiClient.post<Client>(
        CLIENT_ENDPOINTS.CREATE,
        data
      )
      return response.data
    },
    onSuccess: () => {
      toast.success('Client created successfully!')
      queryClient.invalidateQueries({ queryKey: clientQueryKeys.all })
    },
    onError: (error: ApiError) => {
      toast.error(error.message || 'Failed to create client')
    },
  })
}

/**
 * Update client mutation (PATCH - only send changed fields)
 */
export const useUpdateClient = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({ id, ...data }: UpdateClientPayload) => {
      const response = await apiClient.patch<Client>(
        CLIENT_ENDPOINTS.UPDATE(id),
        data
      )
      return response.data
    },
    onSuccess: (_, variables) => {
      toast.success('Client updated successfully!')
      queryClient.invalidateQueries({ queryKey: clientQueryKeys.all })
      queryClient.invalidateQueries({
        queryKey: clientQueryKeys.detail(variables.id),
      })
    },
    onError: (error: ApiError) => {
      toast.error(error.message || 'Failed to update client')
    },
  })
}

/**
 * Delete client mutation
 */
export const useDeleteClient = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (id: string) => {
      await apiClient.delete(CLIENT_ENDPOINTS.DELETE(id))
      return id
    },
    onSuccess: () => {
      toast.success('Client deleted successfully!')
      queryClient.invalidateQueries({ queryKey: clientQueryKeys.all })
    },
    onError: (error: ApiError) => {
      toast.error(error.message || 'Failed to delete client')
    },
  })
}
