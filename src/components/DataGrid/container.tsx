import React from 'react'
import { useSelector } from 'react-redux'
import DataGrid from './DataGrid'
import { get } from '../../utils'

const DataGridContainer = () => {
  const data = useSelector(get('gridData', {}))

  return (
    <DataGrid
      data={data}
      onSelect={(row: number, col: number) => console.log(row, col)}
    />
  )
}

export default DataGridContainer
