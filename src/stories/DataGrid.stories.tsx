import React from 'react'
import DataGrid from '../components/DataGrid'
import { GridData } from '../reducer'

export default {
  title: 'DataGrid',
  component: DataGrid
}

const data: GridData = {
  2: {
    10: 1
  }
}

export const Default = () => (
  <DataGrid
    data={data}
    onSelect={(row: number, col: number) => console.log(row, col)}
  />
)
