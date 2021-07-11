import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  root: {
    position: 'static'
  },
  toolbar: {
    justifyContent: 'space-between'
  }
}))

const Nav: React.FunctionComponent = () => {
  const classes = useStyles()

  return (
    <AppBar className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <div />
        <div>
          <Button variant="contained" color="secondary">Graph</Button>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Nav
