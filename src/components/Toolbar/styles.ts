import styled from 'styled-components'
import { COLORS } from '../../styles/settings'

export const TOOLBAR_HEIGHT = 50

export const Wrapper = styled.section`
  background-color: ${COLORS.pastelGreen};
  height: ${TOOLBAR_HEIGHT}px;
  position: relative;

  &::after {
    background-color: #d8d8d8;
    bottom: 0;
    content: '';
    height: 1px;
    position: absolute;
    width: 100%;
  }
`
