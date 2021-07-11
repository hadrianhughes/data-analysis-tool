import React from 'react'

interface InfoOutputProps {
  heading: string
  body: string
}

const InfoOutput: React.FunctionComponent<InfoOutputProps> = ({
  heading,
  body
}) => (
  <article>
    <h2>{heading}</h2>
    <p>{body}</p>
  </article>
)

export default InfoOutput
