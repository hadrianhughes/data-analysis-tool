import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import DataGrid from './DataGrid'
import { get } from '../../utils'
import { TOOLBAR_HEIGHT } from '../Toolbar'

const DataGridContainer = () => {
  const [gridSize, setGridSize] = useState<[number, number]>([0,0])

  useEffect(() => {
    setGridSize([window.innerWidth / 2, window.innerHeight - TOOLBAR_HEIGHT])
  }, [])

  const data = useSelector(get('gridData', {}))
  const selectedCell = useSelector(get('selectedCell'))
  const dispatch = useDispatch()

  const setSelectedCell = (row: number, col: number) => {
    if (row > 0 && col > 0) {
      dispatch({
        type: 'SET_SELECTED_CELL',
        payload: [row, col]
      })
    }
  }

  return (
    <DataGrid
      data={data}
      selectedCell={selectedCell}
      onSelect={setSelectedCell}
      gridSize={gridSize}
    />
  )
}

export default DataGridContainer
