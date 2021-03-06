import React, { Component } from 'react'

import Header from './Header'
import ItineraryFlight from './Itinerary/FlightItinerary/FlightItinerary'
import ItineraryHotel from './Itinerary/HotelItinerary/HotelItinerary'
import ItineraryCruise from './Itinerary/CruiseItinerary/CruiseItinerary'
import ItineraryCar from './Itinerary/CarHireItinerary/CarItinerary'
import TopTravels from './TopTravels'
import MapShow from './MapShow'

import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    content: {
        display: 'contents',
    },
});

class Home extends Component {
    render() {
        const { classes } = this.props;
        const { itinerarySearch } = this.props;
        return (
            <main>
                <Grid container direction="column" justify="center" alignItems="stretch">
                    <Grid item xs={12}>
                        <Header />
                    </Grid>
                    <Grid item xs={12} className={classes.content}>
                        {itinerarySearch == "flight" ? (<ItineraryFlight />) : 
                         itinerarySearch == "hotel" ? (<ItineraryHotel />) : 
                         itinerarySearch == "cruise" ? (<ItineraryCruise />) :
                         itinerarySearch == "car" ? (<ItineraryCar />) : ''}
                    </Grid>
                    <Grid item xs={12} className={classes.content}>
                       <Grid container direction="row" justify="center" alignItems="stretch" >
                            <Grid item sm={2}></Grid>
                            <Grid item xs={12} sm={4} style={{paddingTop: 15, paddingBottom: 15}}>
                                <TopTravels />
                            </Grid>
                            <Grid item xs={12} sm={4} style={{paddingTop: 15, paddingBottom: 15}}>
                                <MapShow />
                            </Grid>
                            <Grid item sm={2}></Grid>
                            </Grid>
                    </Grid>
                </Grid>
            </main>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);