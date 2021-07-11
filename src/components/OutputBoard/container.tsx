import React from 'react'
import { useSelector } from 'react-redux'
import { get } from '../../lib/get'
import OutputBoard from './OutputBoard'

const OutputBoardContainer = () => {
  const outputs = useSelector(get('outputs')) || []

  return (
    <OutputBoard outputs={outputs} />
  )
}

export default OutputBoardContainer
