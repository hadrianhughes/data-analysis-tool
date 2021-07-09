import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import DataGrid from './DataGrid'
import { get } from '../../lib/get'
import { TOOLBAR_HEIGHT } from '../Toolbar'

const DataGridContainer = () => {
  const [gridSize, setGridSize] = useState<[number, number]>([0,0])

  const data = useSelector(get('gridData', {}))
  const selectedCell = useSelector(get('selectedCell'))
  const editing = useSelector(get('editing'))
  const dispatch = useDispatch()

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.keyCode === 13) {
      dispatch({
        type: 'SET_EDITING',
        payload: true
      })
    }
  }

  useEffect(() => {
    setGridSize([window.innerWidth / 2, window.innerHeight - TOOLBAR_HEIGHT])
    window.addEventListener('keydown', handleKeyDown)
  }, [])

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
