import { AppState } from './types'

export const editCell = (state: AppState, value: string): AppState => {
  const { gridData, selectedCell } = state
  const [row, col] = selectedCell || []

  if (!row || !col) return state

  let newGridData = { ...gridData }
  newGridData[row][col] = value

  return {
    ...state,
    gridData: newGridData
  }
}
