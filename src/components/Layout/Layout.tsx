import React from 'react'
import { DataGridContainer as DataGrid } from '../DataGrid'
import Toolbar from '../Toolbar'
import OutputBoard from '../OutputBoard/container'
import { Main } from './styles'

const Layout: React.FunctionComponent = () => (
  <div>
    <Toolbar />
    <Main>
      <DataGrid />
      <OutputBoard />
    </Main>
  </div>
)

export default Layout
