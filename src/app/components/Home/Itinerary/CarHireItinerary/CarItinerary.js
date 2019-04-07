import React, { Component } from 'react'

import CarType from './CarType'
import PickUpLocation from './PickUpLocation'
import DropOffLocation from './DropOffLocation'
import DateOfPickUpAndDropOff from './DateOfPickUpAndDropOff'

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

export class CarItinerary extends Component {
    state ={
        rotateOnClick: false,
        carType: '',
        pickUpLocation: '',
        dropOffLocation: '',
        pickUpDate: '',
        dropOffDate: '',
    }

    handleRotateOnClick = rotate => {
        const { pickUpLocation, dropOffLocation } = this.state;
        this.setState({ rotateOnClick: rotate })
        this.setState({ pickUpLocation: dropOffLocation })
        this.setState({ dropOffLocation: pickUpLocation })        
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
      const { carType, pickUpLocation, dropOffLocation, pickUpDate, dropOffDate } = this.state;
      return (
        <Grid container direction="row" justify="flex-start" alignItems="flex-start" >
            <Grid item xs={12} className={classes.listPosition}>
                <CarType carType={carType} handleChangeValue={this.handleChangeValue}/>
            </Grid>
            <Grid item xs={12} sm={5}>
                <PickUpLocation pickUpLocation={pickUpLocation} handleChangeValue={this.handleChangeValue}/>
            </Grid>
            <Grid item xs={12} sm={1}>
            <Fab size="small" aria-label="Add" className={classes.fab}>
                <SwapHoriz onClick={e => this.handleRotateOnClick(!rotateOnClick, e)} className={rotateOnClick ? classNames(classes.swapHoriz, classes.swapHorizOnClick) : classNames(classes.swapHoriz)}/>
            </Fab>
            </Grid>
            <Grid item xs={12} sm={5}>
                <DropOffLocation dropOffLocation={dropOffLocation} handleChangeValue={this.handleChangeValue}/>
            </Grid>
            <Grid item xs={12} sm={5}>
                <DateOfPickUpAndDropOff pickUpDate={pickUpDate} dropOffDate={dropOffDate} handleChangeValue={this.handleChangeValue}/>
            </Grid>
        </Grid>
    )
  }
}

CarItinerary.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CarItinerary)
