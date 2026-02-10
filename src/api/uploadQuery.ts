import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import apiClient from './apiClient'
import { ASSET_ENDPOINTS, API_BASE_URL } from './uri'
import type { ApiError } from '../types/auth.types'

/**
 * Upload response type
 */
export interface UploadResponse {
  message: string
  asset: {
    fileName: string
    originalName: string
    mimeType: string
    size: number
    useCase: string
    mediaType: string
    relativePath: string
  }
}

/**
 * Get full asset URL by prefixing relativePath with base URL
 * @example getFullAssetUrl('storage/assets/client-logo/images/abc.jpg')
 * // Returns: 'https://api.seamsuite.com/storage/assets/client-logo/images/abc.jpg'
 */
export const getFullAssetUrl = (relativePath: string): string => {
  // Remove /api/v1 from base URL for assets
  const baseUrl = API_BASE_URL.replace('/api/v1', '')
  return `${baseUrl}/${relativePath}`
}

/**
 * Upload query keys for revalidation
 */
export const uploadQueryKeys = {
  all: ['uploads'] as const,
}

/**
 * Upload a file/asset
 * @param file - File to upload
 * @param useCase - Use case identifier (e.g., 'client-logo', 'avatar')
 * @returns Upload response with full URL in asset.fullUrl
 *
 * @example
 * const { mutateAsync: uploadFile } = useUploadAsset()
 * const result = await uploadFile({ file, useCase: 'client-logo' })
 * const fileUrl = result.fullUrl // Full URL ready to use
 */
export const useUploadAsset = () => {
  return useMutation({
    mutationFn: async ({ file, useCase }: { file: File; useCase: string }) => {
      const formData = new FormData()
      formData.append('file', file)

      const response = await apiClient.post<UploadResponse>(
        `${ASSET_ENDPOINTS.UPLOAD}/${useCase}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )

      // Return with full URL prefixed
      return {
        ...response.data,
        fullUrl: getFullAssetUrl(response.data.asset.relativePath),
      }
    },
    onError: (error: ApiError) => {
      toast.error(error.message || 'Failed to upload file')
    },
  })
}
