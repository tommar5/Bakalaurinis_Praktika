import React, { Component } from 'react'

import SideMenu from './SideMenu'
import Login from '../../Auth/Login'
import Register from '../../Auth/Register'

import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
});

class NavBar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="absolute">
          <Toolbar>

            <SideMenu />

            <Typography variant="h6" color="inherit" className={classes.grow}>
              <b>Go</b>Travel
            </Typography>

            <Login/>

            <Register />

          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);