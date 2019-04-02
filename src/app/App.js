import React, { Component } from 'react'

import NavigationBar from './components/Layout/Navbar'
import FooterBar from './components/Layout/Footer'
import Home from './pages/Home/Home'

import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
})

class App extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div className="App">
        <Grid container>
          <Grid xs={12}>
            <NavigationBar/>
          </Grid>
          <Grid xs={12}>
            <Home />
          </Grid>
          <Grid xs={12}>
            <FooterBar />
          </Grid>
        </Grid>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
