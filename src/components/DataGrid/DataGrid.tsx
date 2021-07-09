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
  editing: boolean
}

const createCellRenderer = (
  data: GridData,
  selectedCell: CellTuple,
  onMouseDown: SelectFn,
  editing: boolean
) => ({ columnIndex, key, rowIndex, style }: CellType) => {
  const isRowHeading = columnIndex === 0 && rowIndex > 0
  const isColHeading = rowIndex === 0 && columnIndex > 0
  const isRoot = columnIndex === 0 && rowIndex === 0
  const [selectedRow, selectedCol] = selectedCell || []
  const isSelected = rowIndex === selectedRow && columnIndex === selectedCol

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

  console.log('ran')
  return (
    <Cell
      key={key}
      style={style}
      onMouseDown={() => onMouseDown(rowIndex, columnIndex)}
      isHeading={isRowHeading || isColHeading}
      isRoot={isRoot}
      isSelected={isSelected}
    >
      {
        editing && isSelected
          ? <input value={text} type="text" />
          : <Text>{text}</Text>
      }
    </Cell>
  );
}

const DataGrid: React.FunctionComponent<DataGridProps> = ({
  data,
  selectedCell,
  onSelect,
  gridSize,
  editing
}) => {
  const [gridWidth, gridHeight] = gridSize

  const config = {
    cellRenderer: createCellRenderer(data, selectedCell, onSelect, editing),
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
      editing={editing}
    />
  )
}

export default DataGrid
