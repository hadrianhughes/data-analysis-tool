import React from 'react'
import { MultiGrid } from 'react-virtualized'
import { Cell, Text } from './styles'

type CellType = {
  columnIndex: number,
  key: string,
  rowIndex: number,
  style: object
}

export type GridData = {
  [row: number]: {
    [col: number]: string | number
  }
}

interface DataGridProps {
  data: GridData
}

const createCellRenderer = (data: GridData) => ({ columnIndex, key, rowIndex, style }: CellType) => {
  const isRowHeading = columnIndex === 0 && rowIndex > 0
  const isColHeading = rowIndex === 0 && columnIndex > 0
  const isRoot = columnIndex === 0 && rowIndex === 0

  const text = (() => {
    if (isRoot) {
      return ''
    }

    if (isRowHeading) {
      return String(rowIndex)
    }

    if (isColHeading) {
      return 'C' + columnIndex
    }

    return data[rowIndex]?.[columnIndex] || ''
  })()

  return (
    <Cell
      key={key}
      style={style}
      isHeading={isRowHeading || isColHeading}
      isRoot={isRoot}
    >
      <Text>{text}</Text>
    </Cell>
  );
}

const DataGrid: React.FunctionComponent<DataGridProps> = ({ data }) => {
  const config = {
    cellRenderer: createCellRenderer(data),
    columnCount: 50,
    columnWidth: 100,
    className: 'data-grid',
    fixedColumnCount: 1,
    fixedRowCount: 1,
    height: 1000,
    rowCount: 100,
    rowHeight: 30,
    width: 1000
  }

  return <MultiGrid {...config} />
}

export default DataGrid
