import { AppState } from './types'

export const stopEditAndPersist = (state: AppState): AppState => {
  const { gridData, selectedCell, activeCellContents, editing } = state
  const [row, col] = selectedCell || []

  if (!row || !col || !editing) return state

  let newData = { ...gridData }
  newData[row][col] = activeCellContents

  return {
    ...state,
    gridData: newData,
    activeCellContents: '',
    editing: false
  }
}
