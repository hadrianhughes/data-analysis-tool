import styled from 'styled-components'
import { COLORS } from '../../styles/settings'

export const Container = styled.div`
  padding: 10px;
`

export const Block = styled.article`
  border: 1px solid ${COLORS.lightGrey};
  border-radius: 10px;
  margin: 10px 0;
  padding: 10px;

  &:first-child {
    margin-top: 0;
  }
`

export const BlockHeading = styled.h2`
  margin: 0;
  padding: 10px 0;
`

export const BlockParagraph = styled.p`
  margin: 0;
  padding: 10px 0;
`
