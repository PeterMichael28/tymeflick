import React from 'react'

export type Column<T> = {
  header: string
  accessor: keyof T
  className?: string
  render?: (value: any, row: T) => React.ReactNode
}

type TableProps<T> = {
  columns: Column<T>[]
  data: T[]
  gridTemplate?: string
  onRowClick?: (row: T) => void
}

export default function Table<T>({
  columns,
  data,
  gridTemplate,
  onRowClick,
}: TableProps<T>) {
  const defaultTemplate = `repeat(${columns.length}, 1fr)`

  return (
    <div className="w-full overflow-hidden rounded-lg border border-[#D2D2D266] bg-white">
      {/* HEADER */}
      <div
        className="text-grey900 grid h-14 items-center rounded-t-lg border-b border-[#D2D2D266] bg-[#F3F3F3] text-sm font-medium"
        style={{ gridTemplateColumns: gridTemplate || defaultTemplate }}
      >
        {columns.map((col, i) => (
          <div
            key={i}
            className={`text-grey900 font-bricolage px-4 text-[16px] font-normal ${col.className || ''}`}
          >
            {col.header}
          </div>
        ))}
      </div>

      {/* EMPTY STATE */}
      {data.length === 0 && (
        <div className="py-6 text-center text-gray-400">No data available</div>
      )}

      {/* ROWS */}
      {data.map((row, rowIndex) => (
        <div
          key={rowIndex}
          onClick={() => onRowClick?.(row)}
          className="grid items-center border-b border-[#F2F0F5] py-3 text-sm transition hover:bg-gray-50"
          style={{ gridTemplateColumns: gridTemplate || defaultTemplate }}
        >
          {columns.map((col, colIndex) => (
            <div key={colIndex} className="font-bricolage px-4 py-3 text-sm">
              {col.render
                ? col.render(row[col.accessor], row)
                : (row[col.accessor] as any)}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
