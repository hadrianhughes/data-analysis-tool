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
      return {
        ...state,
        selectedCell: action.payload
      }
    case 'SET_EDITING':
      return {
        ...state,
        editing: action.payload
      }
    default:
      return state
  }
}
