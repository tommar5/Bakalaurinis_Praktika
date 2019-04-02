import React, { Component } from 'react'

import TravelersCount from './TravelerForm/TravelersCount'
import DateOfDuration from './HotelForm/DateOfDuration'

import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
    listPosition: {
        float: 'left',
    },
    fab: {
        margin: theme.spacing.unit,
        background: 'none',
        float: 'right',
        color: 'white',
        boxShadow: 'none',
      },
    swapHoriz: {
        WebkitTransition: 'transform 150ms ease 0ms',
    },
    swapHorizOnClick: {
        transform: 'rotateZ(180deg)',
    },
});

class HotelItinerary extends Component {
    render() {
        const { classes } = this.props;
        return(
            <Grid container direction="row" justify="flex-start" alignItems="flex-start" >
                <Grid item xs={12} className={classes.listPosition}> 
                    <TravelersCount />
                </Grid>
                <Grid item xs={12} className={classes.listPosition}>
                    <Grid container direction="row" justify="space-evenly" alignItems="center">
                        <Grid item xs={12} sm={6}>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <DateOfDuration />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

HotelItinerary.propType = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(HotelItinerary);