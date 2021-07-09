import {
  AppState,
  ActionType,
  GridData
} from './types'

const initialState: AppState = {
  gridData: {
    2: {
      4: 100
    }
  },
  selectedCell: null,
  editing: false
}

export default function reducer(state: AppState = initialState, action: ActionType) {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        gridData: action.payload
      }
    case 'SET_SELECTED_CELL':
      const [row, col] = action.payload
      const [currentRow, currentCol] = state.selectedCell || []

      if (row === currentRow && col === currentCol) return state

      return {
        ...state,
        selectedCell: action.payload,
        editing: false
      }
    case 'START_EDITING': {
      const { selectedCell } = state
      const [row, col] = selectedCell || []

      if (!row || !col) return state

      return {
        ...state,
        editing: true,
      }
    }
    case 'STOP_EDITING':
      return {
        ...state,
        editing: false
      }
    case 'SET_ACTIVE_CELL_CONTENTS': {
      const [row, col] = state.selectedCell || []
      if (!row || !col) return state

      const newGridData: GridData = {
        ...state.gridData,
        [row]: {
          ...state.gridData[row] || {},
          [col]: action.payload
        }
      }

      return {
        ...state,
        gridData: newGridData
      }
    }
    default:
      return state
  }
}
