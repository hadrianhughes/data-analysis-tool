import React from 'react'
import { MultiGrid } from 'react-virtualized'
import { Cell, Text } from './styles'
import { GridData, CellTuple } from '../../reducer'

type CellType = {
  columnIndex: number,
  key: string,
  rowIndex: number,
  style: object
}

type SelectFn = (row: number, col: number) => void

interface DataGridProps {
  data: GridData
  selectedCell: CellTuple
  onSelect: SelectFn
  gridSize: [number, number]
}

const createCellRenderer = (
  data: GridData,
  selectedCell: CellTuple,
  onMouseDown: SelectFn
) => ({ columnIndex, key, rowIndex, style }: CellType) => {
  const isRowHeading = columnIndex === 0 && rowIndex > 0
  const isColHeading = rowIndex === 0 && columnIndex > 0
  const isRoot = columnIndex === 0 && rowIndex === 0
  const [selectedRow, selectedCol] = selectedCell || []

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
      onMouseDown={() => onMouseDown(rowIndex, columnIndex)}
      isHeading={isRowHeading || isColHeading}
      isRoot={isRoot}
      isSelected={rowIndex === selectedRow && columnIndex === selectedCol}
    >
      <Text>{text}</Text>
    </Cell>
  );
}

const DataGrid: React.FunctionComponent<DataGridProps> = ({
  data,
  selectedCell,
  onSelect,
  gridSize
}) => {
  const [gridWidth, gridHeight] = gridSize

  const config = {
    cellRenderer: createCellRenderer(data, selectedCell, onSelect),
    columnCount: 50,
    columnWidth: 100,
    className: 'data-grid',
    fixedColumnCount: 1,
    fixedRowCount: 1,
    height: gridHeight,
    rowCount: 100,
    rowHeight: 30,
    width: gridWidth
  }

  return (
    <MultiGrid
      {...config}
      data={data}
      selectedCell={selectedCell}
    />
  )
}

export default DataGrid
