export type GridData = {
  [row: number]: {
    [col: number]: string | number
  }
}

export type AppState = {
  gridData: GridData
}

export type SetDataAction = {
  type: 'SET_DATA',
  payload: GridData
}

const initialState = {
  gridData: {
    2: {
      4: 100
    }
  }
}

export default function reducer(state: AppState = initialState, action: SetDataAction) {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        gridData: action.payload
      }
    default:
      return state
  }
}
