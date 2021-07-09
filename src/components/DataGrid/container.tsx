import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import DataGrid from './DataGrid'
import { get } from '../../lib/get'
import { TOOLBAR_HEIGHT } from '../Toolbar'

const DataGridContainer = () => {
  const [gridSize, setGridSize] = useState<[number, number]>([0,0])
  const [inputRefState, setInputRef] = useState<HTMLInputElement | null>(null)

  const data = useSelector(get('gridData', {}))
  const selectedCell = useSelector(get('selectedCell')) || []
  const [row, col] = selectedCell
  const editing = useSelector(get('editing'))
  const editValue = useSelector(get(`gridData.${row}.${col}`))
  const dispatch = useDispatch()

  const handleEditCell = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'SET_ACTIVE_CELL_CONTENTS',
      payload: e.target.value
    })
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.keyCode === 13 || (/^Digit\d$/.exec(e.code) && !editing)) {
      dispatch({ type: editing ? 'STOP_EDITING' : 'START_EDITING' })
    }
  }

  useEffect(() => {
    setGridSize([window.innerWidth / 2, window.innerHeight - TOOLBAR_HEIGHT])
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [editing])

  useEffect(() => {
    if (inputRefState) {
      inputRefState.focus()
    }
  }, [inputRefState])

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
      editing={editing}
      editValue={editValue}
      onEditCell={handleEditCell}
      setInputRef={setInputRef}
    />
  )
}

export default DataGridContainer
