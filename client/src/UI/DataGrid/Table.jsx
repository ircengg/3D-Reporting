import { useState, useMemo } from "react"
import { createPortal } from "react-dom"
import { groupBy as rowGrouper } from "lodash"
import DataGrid, { SelectColumn } from "react-data-grid"
import { exportToCsv, exportToXlsx, exportToPdf } from "./ExportUtils"
import './index.scss'



const columns = [
  SelectColumn,
  {
    key: "equipment",
    name: "Equipment",
    sortable:true    ,
    filterable:true
  },
  {
    key: "name",
    name: "name",
    sortable:true   
  },
  {
    key: "mat",
    name: "Material"
  },
  {
    key: "P",
    name: "Design Pressure (MPA)"
  },
  {
    key: "T",
    name: "Design Temp. (C)"
  },
  {
    key: "to",
    name: "Nominal Thickness (mm)"
  },
  {
    key: "tmin",
    name: "Minimum required Thickness (mm)"
  },
  {
    key: "tmm",
    name: "Actual Minimum Thickness (mm)"
  } 
]

function rowKeyGetter(row) {
  return row.id
}


const options = ["modelId"]







function ExportButton({ onExport, children }) {
  const [exporting, setExporting] = useState(false)
  return (
    <button
      disabled={exporting}
      onClick={async () => {
        setExporting(true)
        await onExport()
        setExporting(false)
      }}
    >
      {exporting ? "Exporting" : children}
    </button>
  )
}








export default function Grouping({ rows }) {  
  const [selectedRows, setSelectedRows] = useState(() => new Set())
  const [grouping, setGrouping] = useState(false)
  const [expandedGroupIds, setExpandedGroupIds] = useState(
    () =>
      new Set(["United States of America", "United States of America__2015"])
  )

  const gridElement = (

    <DataGrid
      columns={columns}
      rows={rows}
      rowKeyGetter={rowKeyGetter}
      selectedRows={selectedRows}
      onSelectedRowsChange={setSelectedRows}
      groupBy={grouping ? ['equipment', 'component'] : []}
      rowGrouper={rowGrouper}
      expandedGroupIds={expandedGroupIds}
      onExpandedGroupIdsChange={setExpandedGroupIds}
      defaultColumnOptions={{ resizable: true }}
      // direction={direction}           
    />
  )


  return (
    <div>
      <div className='toolbarClassname'>
        <div>
          <label>
            <input
              type="checkbox"
              checked={grouping}
              onChange={event => setGrouping(event.target.checked)}
            />{" "}
            Group
          </label>
        </div>
        <ExportButton
          onExport={() => exportToCsv(gridElement, "CommonFeatures.csv")}
        >
          Export to CSV
        </ExportButton>
        <ExportButton
          onExport={() => exportToXlsx(gridElement, "CommonFeatures.xlsx")}
        >
          Export to XSLX
        </ExportButton>
        <ExportButton
          onExport={() => exportToPdf(gridElement, "CommonFeatures.pdf")}
        >
          Export to PDF
        </ExportButton>
      </div>
      {gridElement}
    </div>
  )
}
