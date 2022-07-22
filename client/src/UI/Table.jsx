import { useState } from "react"

import DataGrid, { SelectColumn, TextEditor } from "react-data-grid"



function rowKeyGetter(row) {
  return row.id
}

const columns = [
  SelectColumn,
  {
    key: "id",
    name: "ID",
    width: 80,
    resizable: true,
    frozen: true
  },
  {
    key: "avatar",
    name: "Avatar",
    width: 40,
    resizable: true,
    headerRenderer: () => null,
    formatter: ({ row }) => row.title 
  },
  {
    key: "title",
    name: "Title",
    width: 200,
    resizable: true,
    formatter(props) {
      return <>{props.row.title}</>
    },
    editor: null,
    editorOptions: {
      editOnClick: true
    }
  },
  {
    key: "firstName",
    name: "First Name",
    width: 200,
    resizable: true,
    frozen: true,
    editor: TextEditor
  },
  {
    key: "lastName",
    name: "Last Name",
    width: 200,
    resizable: true,
    frozen: true,
    editor: TextEditor
  },
  {
    key: "email",
    name: "Email",
    width: 200,
    resizable: true,
    editor: TextEditor
  },
  {
    key: "street",
    name: "Street",
    width: 200,
    resizable: true,
    editor: TextEditor
  },
  {
    key: "zipCode",
    name: "ZipCode",
    width: 200,
    resizable: true,
    editor: TextEditor
  },
  {
    key: "date",
    name: "Date",
    width: 200,
    resizable: true,
    editor: TextEditor
  },
  {
    key: "bs",
    name: "bs",
    width: 200,
    resizable: true,
    editor: TextEditor
  },
  {
    key: "catchPhrase",
    name: "Catch Phrase",
    width: 200,
    resizable: true,
    editor: TextEditor
  },
  {
    key: "companyName",
    name: "Company Name",
    width: 200,
    resizable: true,
    editor: TextEditor
  },
  {
    key: "sentence",
    name: "Sentence",
    width: 200,
    resizable: true,
    editor: TextEditor
  }
]

function createRows() {
  const rows = []

  for (let i = 0; i < 2000; i++) {
    rows.push({
      id: `id_${i}`,
      avatar: `id_${i}`,
      email: `id_${i}`,
      title: `id_${i}`,
      firstName: `id_${i}`,
      lastName: `id_${i}`,
      street: `id_${i}`,
      zipCode: `id_${i}`,
      date: `id_${i}`,
      bs: `id_${i}`,
      catchPhrase: `id_${i}`,
      companyName: `id_${i}`,
      words: `id_${i}`,
      sentence: `id_${i}`
    })
  }

  return rows
}

export default function AllFeatures({ direction }) {
  const [rows, setRows] = useState(createRows)
  const [selectedRows, setSelectedRows] = useState(() => new Set())

  function handleFill({ columnKey, sourceRow, targetRow }) {
    return { ...targetRow, [columnKey]: sourceRow[columnKey] }
  }

  function handlePaste({
    sourceColumnKey,
    sourceRow,
    targetColumnKey,
    targetRow
  }) {
    const incompatibleColumns = ["email", "zipCode", "date"]
    if (
      sourceColumnKey === "avatar" ||
      ["id", "avatar"].includes(targetColumnKey) ||
      ((incompatibleColumns.includes(targetColumnKey) ||
        incompatibleColumns.includes(sourceColumnKey)) &&
        sourceColumnKey !== targetColumnKey)
    ) {
      return targetRow
    }

    return { ...targetRow, [targetColumnKey]: sourceRow[sourceColumnKey] }
  }

  function handleCopy({ sourceRow, sourceColumnKey }) {
    if (window.isSecureContext) {
      navigator.clipboard.writeText(sourceRow[sourceColumnKey])
    }
  }

  return (
    <DataGrid
      columns={columns}
      rows={rows}
      rowKeyGetter={rowKeyGetter}
      onRowsChange={setRows}
      onFill={handleFill}
      onCopy={handleCopy}
      onPaste={handlePaste}
      rowHeight={30}
      selectedRows={selectedRows}
      onSelectedRowsChange={setSelectedRows}
      className="fill-grid"     
      direction={direction}
    />
  )
}
