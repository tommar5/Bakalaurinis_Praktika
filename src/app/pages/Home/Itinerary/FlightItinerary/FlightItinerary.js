import React, { Component } from 'react'

import TripType from './Travelerform/TripType'
import TravelersCount from './Travelerform/TravelersCount'
import ClassType from './Travelerform/ClassType'
import Destination from './DestinationForm/Destination'
import DateOfTravel from './DestinationForm/DateOfTravel'
import Departure from './DestinationForm/Departure'
import SwapHoriz from '@material-ui/icons/SwapHoriz'
import Fab from '@material-ui/core/Fab'

import PropTypes from 'prop-types'
import classNames from 'classnames'
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

class FlightItinerary extends Component {
    state = {
        rotateOnClick: false,
    }

    handleRotateOnClick = (rotate, event) => {
        this.setState({ rotateOnClick: rotate })
        console.log(rotate)
    };

    render() {
        const { classes } = this.props;
        const { rotateOnClick } = this.state;

        return (
            <Grid container direction="row" justify="flex-start" alignItems="flex-start" >
                <Grid item xs={12} className={classes.listPosition}>
                    <TripType />
                    
                    <TravelersCount />

                    <ClassType />
                </Grid>
                <Grid item xs={12} className={classes.listPosition}>
                    <Grid container direction="row" justify="space-evenly" alignItems="center">
                        <Grid item xs={12} sm={7}>
                            <Grid container direction="row" justify="space-evenly" alignItems="center" space={0}>
                                <Grid item xs={12} sm={5}>
                                    <Departure />
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                <Fab size="small" aria-label="Add" className={classes.fab}>
                                    <SwapHoriz onClick={e => this.handleRotateOnClick(!rotateOnClick, e)} className={rotateOnClick ? classNames(classes.swapHoriz, classes.swapHorizOnClick) : classNames(classes.swapHoriz)}/>
                                </Fab>
                                </Grid>
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