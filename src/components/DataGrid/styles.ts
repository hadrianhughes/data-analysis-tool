import styled, { css } from 'styled-components'

interface CellProps {
  isHeading: boolean
  isRoot: boolean
  isSelected: boolean
}

export const Cell = styled.div<CellProps>`
  background-color: ${({ isRoot, isHeading }) => {
    if (isRoot) return 'darkgrey'
    if (isHeading) return 'lightgrey'
    return 'white'
  }};

  ${({ isSelected }) => {
    if (isSelected) {
      return css`
        &::after {
          border: 3px solid lightblue;
          content: '';
          height: 100%;
          left: 50%;
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          z-index: 1;
        }
      `
    }
  }}

  border: 1px solid grey;
  border-bottom: none;
  border-right: none;
  box-sizing: border-box;
  font-family: sans-serif;
  cursor: ${props => props.isHeading || props.isRoot ? 'default' : 'cell'};
  left: 0;
  padding: 2px 5px;
`

export const Text = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`
