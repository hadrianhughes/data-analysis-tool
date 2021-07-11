import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

interface InfoOutputProps {
  heading: string
  body: string
}

const InfoOutput: React.FunctionComponent<InfoOutputProps> = ({
  heading,
  body
}) => (
  <Card>
    <CardContent>
      <Typography variant="h4" paragraph>{heading}</Typography>
      <Typography variant="body1">{body}</Typography>
    </CardContent>
  </Card>
)

export default InfoOutput
