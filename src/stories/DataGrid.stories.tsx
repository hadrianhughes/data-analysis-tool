import React from 'react'
import DataGrid, { GridData } from '../components/DataGrid'

export default {
  title: 'DataGrid',
  component: DataGrid
}

const data: GridData = {
  2: {
    10: 1
  }
}

export const Default = () => <DataGrid data={data} />
