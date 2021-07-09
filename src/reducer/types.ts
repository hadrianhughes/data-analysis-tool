export type GridData = {
  [row: number]: {
    [col: number]: string | number
  }
}

export type CellTuple = [number, number]

export type AppState = {
  gridData: GridData
  selectedCell: CellTuple | null
  editing: boolean
  activeCellContents: string
}

export type SetDataAction = {
  type: 'SET_DATA',
  payload: GridData
}

export type SetSelectedCellAction = {
  type: 'SET_SELECTED_CELL',
  payload: CellTuple
}

export type SetEditingAction = {
  type: 'SET_EDITING',
  payload: boolean
}

export type SetActiveCellContentsAction = {
  type: 'SET_ACTIVE_CELL_CONTENTS',
  payload: string
}

export type ActionType =
  SetDataAction |
  SetSelectedCellAction |
  SetEditingAction |
  SetActiveCellContentsAction
