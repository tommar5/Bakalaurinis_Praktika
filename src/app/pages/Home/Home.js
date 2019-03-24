import React, { Component } from 'react'

import language from '../../../translations/translation'

import Header from './Header'
import ItinerarySearch from './Itinerary/ItinerarySearch'
import TopTravels from './TopTravels'
import MapShow from './MapShow'

import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    header: {
        display: 'contents',
    },
});

class Home extends Component {
    render() {
        const { classes } = this.props;
        return (
            <main>
                <Grid container direction="column" justify="center" alignItems="stretch" >
                    <Grid >
                        <Header />
                    </Grid>
                    <Grid >
                        <ItinerarySearch />
                    </Grid>
                       <Grid container direction="row" justify="center" alignItems="stretch" >
                        <Grid item xs></Grid>
                            <Grid item xs={4} style={{paddingTop: 15, paddingBottom: 15}}>
                                <TopTravels />
                            </Grid>
                            <Grid item xs={4} style={{paddingTop: 15, paddingBottom: 15}}>
                                <MapShow />
                            </Grid>
                            <Grid item xs></Grid>
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