import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Popover from '@material-ui/core/Popover'

const useStyles = makeStyles(theme => ({
  root: {
    position: 'static'
  },
  toolbar: {
    justifyContent: 'space-between'
  }
}))

const Nav: React.FunctionComponent = () => {
  const [openMenu, setOpenMenu] = useState<{ open: boolean, el: Element | null }>({ open: false, el: null })
  const classes = useStyles()

  const handleClick = (e: React.SyntheticEvent) => {
    if (openMenu.open) {
      setOpenMenu({ open: false, el: null })
    } else {
      setOpenMenu({ open: true, el: e.currentTarget })
    }
  }

  return (
    <AppBar className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <div />
        <div>
          <Button variant="contained" color="secondary" onClick={handleClick}>Graph</Button>
          <Popover
            open={openMenu.open}
            anchorEl={openMenu.el}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            onClose={handleClick}
          >
            WILL BE BOXPLOT BUTTON
          </Popover>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Nav
