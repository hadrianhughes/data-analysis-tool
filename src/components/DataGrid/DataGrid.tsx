import React from 'react'
import { Grid } from 'react-virtualized'
import { Cell } from './styles'

type CellType = {
  columnIndex: number,
  key: string,
  rowIndex: number,
  style: object
}

const cellRenderer = ({ columnIndex, key, rowIndex, style }: CellType) => {
  return (
    <Cell key={key} style={style}>
      1
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
