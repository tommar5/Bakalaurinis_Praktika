import React, { Component } from 'react'

import NavigationBar from './components/Layout/Navbar'
import FooterBar from './components/Layout/Footer'
import Home from './components/Home/Home'

import Grid from '@material-ui/core/Grid'

class App extends Component {
  state = {
    itinerarySearch: "flight",
  }

  hadleToDisplayItinerary = event => {
    this.setState({ itinerarySearch: event.currentTarget.id })
  }

  render() {
    const { itinerarySearch } = this.state;
    return (
      <div className="App">
        <Grid container>
          <Grid xs={12}>
            <NavigationBar hadleToDisplayItinerary={this.hadleToDisplayItinerary}/>
          </Grid>
          <Grid item xs={12}>
            <Home itinerarySearch={itinerarySearch}/>
          </Grid>
          <Grid item xs={12}>
            <FooterBar />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
