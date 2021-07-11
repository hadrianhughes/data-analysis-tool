import React from 'react'
import { DataGridContainer as DataGrid } from '../DataGrid'
import Nav from '../Nav'
import OutputBoard from '../OutputBoard/container'
import { Main } from './styles'

const Layout: React.FunctionComponent = () => (
  <div>
    <Nav />
    <Main>
      <DataGrid />
      <OutputBoard />
    </Main>
  </div>
)

export default Layout
