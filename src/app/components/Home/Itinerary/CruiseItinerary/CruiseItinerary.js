import React, { Component } from 'react'

import Cruiseline from './Cruiseline'
import CruiseType from './CruiseType'
import SailingDuration from './SailingDuration'
import Departure from './Departure'
import Destination from './Destination'
import DateOfTravel from './DateOfTravel'

import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import SwapHoriz from '@material-ui/icons/SwapHoriz'
import Fab from '@material-ui/core/Fab'

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

export class CruiseItinerary extends Component {
    state = {
        rotateOnClick: false,
        sailingDuration: "3-5",
        departureStartDate: '',
        departureEndDate: '',
        departureFrom: '',
        destinationTo: '',
        cruiseline: '',
        cruiseType: '',
    }

    handleRotateOnClick = rotate => {
        const { departureFrom, destinationTo } = this.state;
        this.setState({ rotateOnClick: rotate })
        this.setState({ departureFrom: destinationTo })
        this.setState({ destinationTo: departureFrom })        
    };

    handleChangeValue = input => event => {
        this.setState({ [input]: event.target.value })
    }

    handleSubmitItinerary = event => {
        event.preventDefault();


    }
    
  render() {
    const { classes } = this.props;
    const { rotateOnClick } = this.state;
    const { sailingDuration, departureStartDate, departureEndDate, departureFrom, destinationTo, cruiseline, cruiseType } = this.state;
    return (
        <Grid container direction="row" justify="flex-start" alignItems="flex-start" >
            <Grid item xs={12} className={classes.listPosition}>
                <Cruiseline cruiseline={cruiseline} handleChangeValue={this.handleChangeValue}/>
                
                <CruiseType cruiseType={cruiseType} handleChangeValue={this.handleChangeValue}/>

                <SailingDuration sailingDuration={sailingDuration} handleChangeValue={this.handleChangeValue}/>
            </Grid>
            <Grid item xs={12} className={classes.listPosition}>
                <Grid container direction="row" justify="space-evenly" alignItems="center">
                    <Grid item xs={12} sm={7}>
                        <Grid container direction="row" justify="space-evenly" alignItems="center" space={0}>
                            <Grid item xs={12} sm={5}>
                                <Departure departureFrom={departureFrom} handleChangeValue={this.handleChangeValue}/>
                            </Grid>
                            <Grid item xs={12} sm={1}>
                            <Fab size="small" aria-label="Add" className={classes.fab}>
                                <SwapHoriz onClick={e => this.handleRotateOnClick(!rotateOnClick, e)} className={rotateOnClick ? classNames(classes.swapHoriz, classes.swapHorizOnClick) : classNames(classes.swapHoriz)}/>
                            </Fab>
                            </Grid>
                            <Grid item xs={12} sm={5}>
                                <Destination destinationTo={destinationTo} handleChangeValue={this.handleChangeValue}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <DateOfTravel departureStartDate={departureStartDate} departureEndDate={departureEndDate} handleChangeValue={this.handleChangeValue}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
  }
}

CruiseItinerary.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CruiseItinerary)
