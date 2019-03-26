import React, { Component } from 'react'

import language from '../../../../../translations/translation'
import TripType from './Travelerform/TripType'
import TravelersCount from './Travelerform/TravelersCount'
import ClassType from './Travelerform/ClassType'
import Destination from './DestinationForm/Destination'
import DateOfTravel from './DestinationForm/DateOfTravel'
import Departure from './DestinationForm/Departure'
import SwapHoriz from '@material-ui/icons/SwapHoriz'

import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
    listPosition: {
        float: 'left',
    },
});

class FlightItinerary extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid container direction="row" justify="flex-start" alignItems="flex-start" >
                <Grid item xs={12} className={classes.listPosition}>
                    <TripType />
                    
                    <TravelersCount />

                    <ClassType />
                </Grid>
                <Grid item xs={12} className={classes.listPosition}>
                    <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                        <Grid item xs={12} sm={7}>
                            <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                            >
                                <Grid item xs={12} sm={5}>
                                    <Departure />
                                </Grid>
                                <SwapHoriz />
                                <Grid item xs={12} sm={5}>
                                    <Destination />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={5}>
                            <DateOfTravel />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

FlightItinerary.propType = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FlightItinerary)