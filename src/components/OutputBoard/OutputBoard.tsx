import React from 'react'
import { Container } from './styles'
import { InfoOutput as InfoOutputType } from '../../reducer/types'
import InfoOutput from './InfoOutput'

interface OutputBoardProps {
  outputs: InfoOutputType[]
}

const OutputBoard: React.FunctionComponent<OutputBoardProps> = ({ outputs }) => (
  <Container>
    {outputs.map(o => (
      <InfoOutput
        heading={o.heading}
        body={o.body}
      />
    ))}
  </Container>
)

export default OutputBoard
