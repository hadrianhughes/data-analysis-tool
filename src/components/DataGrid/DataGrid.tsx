import React from 'react'
import { Grid } from 'react-virtualized'
import { Cell, Text } from './styles'

type CellType = {
  columnIndex: number,
  key: string,
  rowIndex: number,
  style: object
}

const cellRenderer = ({ columnIndex, key, rowIndex, style }: CellType) => {
  const isRowHeading = columnIndex === 0
  const isColHeading = rowIndex === 0

  const text = (() => {
    if (isRowHeading && isColHeading) {
      return ''
    }

    if (isRowHeading) {
      return String(rowIndex)
    }

    if (isColHeading) {
      return 'C' + columnIndex
    }

    return 1
  })()

  return (
    <Cell key={key} style={style} isHeading={isRowHeading || isColHeading}>
      <Text>{text}</Text>
    </Cell>
  );
}

const config = {
  cellRenderer,
  columnCount: 50,
  columnWidth: 100,
  height: 1000,
  rowCount: 100,
  rowHeight: 30,
  width: 1000
}

const DataGrid = () => (
  <Grid {...config} />
)

export default DataGrid
