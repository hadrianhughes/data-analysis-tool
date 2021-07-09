import styled from 'styled-components'

interface CellProps {
  isHeading: boolean
}

export const Cell = styled.div<CellProps>`
  background-color: ${props => props.isHeading ? 'lightgrey' : 'white'};
  border: 1px solid grey;
  border-bottom: none;
  border-right: none;
  cursor: cell;
  left: 0;
  padding: 2px 5px;
`

export const Text = styled.span`
  vertical-align: middle;
`
