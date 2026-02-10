/**
 * Table loading skeleton component
 * Renders animated skeleton rows based on column count and row count
 */

interface TableSkeletonProps {
  columns: number
  rows?: number
}

export const TableSkeleton = ({ columns, rows = 5 }: TableSkeletonProps) => {
  return (
    <>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <tr key={rowIndex} className="border-b border-gray-100">
          {Array.from({ length: columns }).map((_, colIndex) => (
            <td key={colIndex} className="p-4">
              <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
            </td>
          ))}
        </tr>
      ))}
    </>
  )
}

/**
 * TableSkeleton for card-style tables (like ClientsTable)
 */
interface CardTableSkeletonProps {
  rows?: number
}

export const CardTableSkeleton = ({ rows = 3 }: CardTableSkeletonProps) => {
  return (
    <>
      {Array.from({ length: rows }).map((_, index) => (
        <tr
          key={index}
          className="relative grid grid-cols-[200px_1fr_1fr_1fr_1fr_1fr_40px] border-b border-gray-100"
        >
          {/* Logo skeleton */}
          <td className="p-4 text-center align-middle">
            <div className="mx-auto h-14 w-14 animate-pulse rounded-md bg-gray-200" />
          </td>
          {/* Details skeleton */}
          <td className="p-4 text-left align-middle">
            <div className="space-y-2">
              <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />
              <div className="h-3 w-40 animate-pulse rounded bg-gray-200" />
              <div className="h-3 w-28 animate-pulse rounded bg-gray-200" />
            </div>
          </td>
          {/* Stats skeletons */}
          <td className="p-4 text-center">
            <div className="mx-auto h-6 w-8 animate-pulse rounded bg-gray-200" />
            <div className="mx-auto mt-1 h-3 w-20 animate-pulse rounded bg-gray-200" />
          </td>
          <td className="p-4 text-center">
            <div className="mx-auto h-6 w-12 animate-pulse rounded bg-gray-200" />
            <div className="mx-auto mt-1 h-3 w-16 animate-pulse rounded bg-gray-200" />
          </td>
          <td className="p-4 text-center">
            <div className="mx-auto h-6 w-12 animate-pulse rounded bg-gray-200" />
            <div className="mx-auto mt-1 h-3 w-16 animate-pulse rounded bg-gray-200" />
          </td>
          <td className="p-4 text-center">
            <div className="mx-auto h-3 w-24 animate-pulse rounded bg-gray-200" />
          </td>
          <td className="p-4 text-center">
            <div className="mx-auto h-5 w-5 animate-pulse rounded bg-gray-200" />
          </td>
        </tr>
      ))}
    </>
  )
}
