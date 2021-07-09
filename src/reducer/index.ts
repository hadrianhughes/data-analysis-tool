import {
  AppState,
  ActionType
} from './types'
import { stopEditAndPersist } from './utils'

const initialState: AppState = {
  gridData: {
    2: {
      4: 100
    }
  },
  selectedCell: null,
  editing: false,
  activeCellContents: ''
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

      const editPersistedState = stopEditAndPersist(state)

      return {
        ...editPersistedState,
        selectedCell: action.payload
      }
    case 'START_EDITING': {
      const { gridData, selectedCell } = state
      const [row, col] = selectedCell || []

      if (!row || !col) return state

      return {
        ...state,
        editing: true,
        activeCellContents: String(gridData[row]?.[col])
      }
    }
    case 'STOP_EDITING':
      return stopEditAndPersist(state)
    case 'SET_ACTIVE_CELL_CONTENTS':
      return {
        ...state,
        activeCellContents: action.payload
      }
    default:
      return state
  }
}
