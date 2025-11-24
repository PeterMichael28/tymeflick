import React, { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'

export type Column<T> = {
  header: string
  accessor: keyof T
  className?: string
  render?: (value: any, row: T) => React.ReactNode
}

type AgileAccordionTableProps<T> = {
  columns: Column<T>[]
  data: T[]
  gridTemplate?: string
  /**
   * Returns children for a row or undefined/empty if none.
   */
  getChildren: (row: T) => T[] | undefined
  /**
   * Return a stable id for a row. Could use row.id or combination of row fields.
   * `path` is the parent path (used internally), leave it optional if you can compute id from row.
   */
  getRowId?: (row: T, path?: string) => string
  /**
   * Optional: how much indent (px) per nesting level
   */
  indentPx?: number
}

export default function AgileAccordionTable<T extends Record<string, any>>({
  columns,
  data,
  gridTemplate,
  getChildren,
  getRowId,
  indentPx = 20,
}: AgileAccordionTableProps<T>) {
  const defaultTemplate = `repeat(${columns.length}, 1fr)`
  const template = gridTemplate || defaultTemplate

  // track expanded ids
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})

  const toggle = (id: string) => setExpanded((s) => ({ ...s, [id]: !s[id] }))

  const idFor = (row: T, path?: string, idx?: number) =>
    getRowId
      ? getRowId(row, path)
      : `${path ?? 'root'}-${idx ?? JSON.stringify(row)}`

  // recursive renderer
  const renderRows = (rows: T[], level = 0, parentPath = ''): React.ReactNode =>
    rows.map((row, i) => {
      const id = idFor(row, parentPath, i)
      const children = getChildren(row) ?? []
      const hasChildren = children.length > 0
      const isExpanded = !!expanded[id]

      return (
        <React.Fragment key={id}>
          {/* main row */}
          <div
            className="grid cursor-pointer items-center border-b border-[#F2F0F5] py-3 text-sm transition hover:bg-gray-50"
            style={{ gridTemplateColumns: template }}
            onClick={() => hasChildren && toggle(id)}
            role={hasChildren ? 'button' : undefined}
          >
            {columns.map((col, colIndex) => (
              <div
                key={colIndex}
                className={`flex items-center gap-2 px-4 py-2 ${col.className || ''}`}
              >
                {/* First column: render chevron + indent */}
                {colIndex === 0 && (
                  <>
                    <div style={{ width: level * indentPx }} />
                    {hasChildren ? (
                      <span className="flex items-center justify-center">
                        {isExpanded ? (
                          <ChevronDown size={16} className="text-gray-500" />
                        ) : (
                          <ChevronRight size={16} className="text-gray-500" />
                        )}
                      </span>
                    ) : (
                      <span style={{ width: 16 }} />
                    )}
                  </>
                )}

                <div className="min-w-0">
                  {col.render
                    ? col.render(row[col.accessor], row)
                    : (row[col.accessor] as any)}
                </div>
              </div>
            ))}
          </div>

          {/* children container: accordion with max-height transition */}
          {hasChildren && (
            <div
              className={`overflow-hidden transition-all duration-300`}
              style={{
                maxHeight: isExpanded
                  ? 2000 /* large enough for nested content */
                  : 0,
              }}
            >
              <div className="bg-white">
                {renderRows(children, level + 1, `${parentPath}/${id}`)}
              </div>
            </div>
          )}
        </React.Fragment>
      )
    })

  return (
    <div className="w-full overflow-hidden rounded-lg border border-[#D2D2D266] bg-white">
      {/* header */}
      <div
        className="grid h-14 items-center rounded-t-lg border-b border-[#D2D2D266] bg-[#F3F3F3] text-sm font-medium"
        style={{ gridTemplateColumns: template }}
      >
        {columns.map((col, i) => (
          <div
            key={i}
            className={`text-grey900 font-bricolage px-4 text-[16px] ${col.className || ''}`}
          >
            {col.header}
          </div>
        ))}
      </div>

      {/* rows container with scroll */}
      <div className="max-h-[500px] overflow-y-auto">
        {data.length === 0 ? (
          <div className="py-6 text-center text-gray-400">
            No data available
          </div>
        ) : (
          <div>{renderRows(data)}</div>
        )}
      </div>
    </div>
  )
}
