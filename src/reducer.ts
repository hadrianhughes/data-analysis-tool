export type GridData = {
  [row: number]: {
    [col: number]: string | number
  }
}

export type CellTuple = [number, number]

export type AppState = {
  gridData: GridData
  selectedCell: CellTuple | null
}

export type SetDataAction = {
  type: 'SET_DATA',
  payload: GridData
}

export type SetSelectedCellAction = {
  type: 'SET_SELECTED_CELL',
  payload: CellTuple
}

export type ActionType = SetDataAction | SetSelectedCellAction

const initialState = {
  gridData: {
    2: {
      4: 100
    }
  },
  selectedCell: null
}

export default function reducer(state: AppState = initialState, action: ActionType) {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        gridData: action.payload
      }
    case 'SET_SELECTED_CELL':
      return {
        ...state,
        selectedCell: action.payload
      }
    default:
      return state
  }
}
