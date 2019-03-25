import React, { Component } from 'react'

import language from '../../../../../translations/translation'
import TripType from './Travelerform/TripType'
import TravelersCount from './Travelerform/TravelersCount'
import ClassType from './Travelerform/ClassType'
import Destination from './DestinationForm/Destination'
import DateOfTravel from './DestinationForm/DateOfTravel'

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
                    <Destination />

                    <DateOfTravel />
                </Grid>
            </Grid>
        );
    }
}

FlightItinerary.propType = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FlightItinerary)