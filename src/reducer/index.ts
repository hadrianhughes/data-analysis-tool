import {
  AppState,
  ActionType
} from './types'

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
      return {
        ...state,
        selectedCell: action.payload
      }
    case 'SET_EDITING':
      const { gridData, selectedCell } = state
      const [row, col] = selectedCell || []

      if (!row || !col) return state

      return {
        ...state,
        editing: action.payload,
        activeCellContents: String(gridData[row]?.[col])
      }
    case 'SET_ACTIVE_CELL_CONTENTS':
      return {
        ...state,
        activeCellContents: action.payload
      }
    default:
      return state
  }
}
