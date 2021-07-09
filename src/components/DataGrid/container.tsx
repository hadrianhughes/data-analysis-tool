import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import DataGrid from './DataGrid'
import { get } from '../../utils'

const DataGridContainer = () => {
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
    />
  )
}

export default DataGridContainer
