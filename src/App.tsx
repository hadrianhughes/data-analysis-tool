import React from 'react'
import './App.css';
import { DataGridContainer as DataGrid } from './components/DataGrid'
import Toolbar from './components/Toolbar'

function App() {
  return (
    <>
      <Toolbar />
      <DataGrid />
    </>
  );
}

export default App;
