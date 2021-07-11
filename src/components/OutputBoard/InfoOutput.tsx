import React from 'react'
import { BlockHeading, BlockParagraph, Block } from './styles'

interface InfoOutputProps {
  heading: string
  body: string
}

const InfoOutput: React.FunctionComponent<InfoOutputProps> = ({
  heading,
  body
}) => (
  <Block>
    <BlockHeading>{heading}</BlockHeading>
    <BlockParagraph>{body}</BlockParagraph>
  </Block>
)

export default InfoOutput
