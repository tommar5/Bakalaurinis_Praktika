import React, { Component } from 'react'

import language from '../../../../../translations/translation'

import TripType from './TripType'
import TravelersCount from './TravelersCount'
import ClassType from './ClassType'
import Destination from './Destination'
import DateOfTravel from './DateOfTravel'
import Departure from './Departure'

import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import SwapHoriz from '@material-ui/icons/SwapHoriz'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Fab from '@material-ui/core/Fab'
import Search from '@material-ui/icons/Search'

const styles = theme => ({
    card: {
        position: 'relative',
        overflow: 'unset',
        borderRadius: 9,
        boxShadow: '0 1px 3px rgba(60,64,67, 0.3), 0 4px 8px 3px rgba(60,64,67, 0.15)',
    },
    cardContent: {
        position: 'relative',
        marginBottom: 60,
        marginTop: -78,
        padding: '8px 16px 0',
        borderRadius: 8,
        boxSizing: 'border-box',
        background: '#a9a2d2',
    },
    submitButton: {
        bottom: 'calc(-60px/2)',
        display: 'flex',
        margin: '0 auto',
    },
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

const options = [
    language.flightItinerary.trip.round,
    language.flightItinerary.trip.oneWay,
    language.flightItinerary.trip.multi,
];

const classTypes = [
    language.flightItinerary.type.economy,
    language.flightItinerary.type.premium,
    language.flightItinerary.type.business,
    language.flightItinerary.type.first,
];

class FlightItinerary extends Component {
    state = {
        rotateOnClick: false,
        flightType: 0,
        adultsCount: 1,
        childrenCount: 0,
        inflantsCount: 0,
        inflantsOnLapCount: 0,
        AllTravelersCount: 1,
        flightClass: 0,
        departure: '',
        destination: '',
        departureDate: new Date(),
        returnDate: new Date(),
    }

    handleRotateOnClick = rotate => {
        const { departure, destination } = this.state;
        this.setState({ rotateOnClick: rotate })
        this.setState({ departure: destination })
        this.setState({ destination: departure })        
    };

    handleChangeValue = input => event => {
        if (input === "flightType" || input === "flightClass") {
            this.setState({ [input]: event.target.id })
        } else if (input === "departureDate" || input === "returnDate"){
            this.setState({ [input]: event })
        } else {
            this.setState({ [input]: event.target.value })
        }
    }

    handleAddPassanger = event => {
        this.setState({ [event.currentTarget.id]: this.state[event.currentTarget.id] + 1 })
        this.setState({ AllTravelersCount: this.state.AllTravelersCount + 1 })
        if (this.state.AllTravelersCount > 9)
            this.setState({ error: true })
    }

    handleSubstractPassanger = event => {
        this.setState({ [event.currentTarget.id]: this.state[event.currentTarget.id] - 1 })
        this.setState({ AllTravelersCount: this.state.AllTravelersCount - 1 })
        if (this.state.AllTravelersCount <= 9)
            this.setState({ error: false })
    }

    handleSubmitItinerary = event => {
        event.preventDefault();
    }

    render() {
        const { classes } = this.props;
        const { rotateOnClick } = this.state;
        const { flightType, adultsCount, childrenCount, inflantsCount, inflantsOnLapCount, AllTravelersCount, flightClass, departure, destination, departureDate, returnDate } = this.state;

        return (
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid item xs={11} sm={8}>
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent} style={{paddingBottom: 8}}>
                            <Grid container direction="row" justify="flex-start" alignItems="flex-start" >
                                <Grid item xs={12} className={classes.listPosition}>
                                    <TripType flightType={flightType} options={options} handleChangeValue={this.handleChangeValue}/>
                                    
                                    <TravelersCount adultsCount={adultsCount}
                                    childrenCount={childrenCount}
                                    inflantsCount={inflantsCount}
                                    inflantsOnLapCount={inflantsOnLapCount} 
                                    AllTravelersCount={AllTravelersCount} 
                                    handleAddPassanger={this.handleAddPassanger} 
                                    handleSubstractPassanger={this.handleSubstractPassanger}/>

                                    <ClassType flightClass={flightClass} classTypes={classTypes} handleChangeValue={this.handleChangeValue}/>
                                </Grid>
                                <Grid item xs={12} className={classes.listPosition}>
                                    <Grid container direction="row" justify="space-evenly" alignItems="center">
                                        <Grid item xs={12} sm={7}>
                                            <Grid container direction="row" justify="space-evenly" alignItems="center" space={0}>
                                                <Grid item xs={12} sm={5}>
                                                    <Departure departure={departure} handleChangeValue={this.handleChangeValue}/>
                                                </Grid>
                                                <Grid item xs={12} sm={1}>
                                                <Fab size="small" aria-label="Add" className={classes.fab}>
                                                    <SwapHoriz onClick={() => this.handleRotateOnClick(!rotateOnClick)} className={rotateOnClick ? classNames(classes.swapHoriz, classes.swapHorizOnClick) : classNames(classes.swapHoriz)}/>
                                                </Fab>
                                                </Grid>
                                                <Grid item xs={12} sm={5}>
                                                    <Destination destination={destination} handleChangeValue={this.handleChangeValue}/>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12} sm={5}>
                                            <DateOfTravel departureDate={departureDate} returnDate={returnDate} handleChangeValue={this.handleChangeValue}/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Fab
                            variant="extended"
                            size="medium"
                            color="secondary"
                            aria-label="Add"
                            className={classes.submitButton}
                            >
                                <Search />
                                {language.flightItinerary.searchButton}
                            </Fab>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        );
    }
}

FlightItinerary.propType = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FlightItinerary)