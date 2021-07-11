import styled from 'styled-components'
import { COLORS } from '../../styles/settings'

export const TOOLBAR_HEIGHT = 50

export const Wrapper = styled.section`
  background-color: ${COLORS.pastelGreen};
  display: flex;
  height: ${TOOLBAR_HEIGHT}px;
  justify-content: space-between;
  position: relative;

  &::after {
    background-color: ${COLORS.lightGrey};
    bottom: 0;
    content: '';
    height: 1px;
    position: absolute;
    width: 100%;
  }
`

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  height: 100%;
  padding: 0 20px;
`
