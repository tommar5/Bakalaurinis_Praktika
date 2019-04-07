import React, { Component } from 'react'

import language from '../../../../../translations/translation'

import RoomType from './RoomType'
import RoomClass from './RoomClass'
import RoomAndTravelersCount from './RoomAndTravelersCount'
import Hotel from './Hotel'
import DateOfCheckInAndChechOut from './DateOfCheckInAndChechOut'

import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
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
    language.hotelItinerary.roomType.singleRoom,
    language.hotelItinerary.roomType.twinRoom,
    language.hotelItinerary.roomType.doubleRoom,
];

const roomClasses = [
    language.hotelItinerary.roomClass.economy,
    language.hotelItinerary.roomClass.standart,
    language.hotelItinerary.roomClass.superior,
    language.hotelItinerary.roomClass.premium,
    language.hotelItinerary.roomClass.lux,
];

class HotelItinerary extends Component {
    state = {
        roomType: 0,
        roomClass: 0,
        roomCount: 1,
        adultsCount: 1,
        childrenCount: 0,
        hotel: '',
        checkIn: new Date(),
        checkOut: new Date(),
    }

    handleChangeValue = input => event => {
        if (input === "roomType" || input === "roomClass") {
            this.setState({ [input]: event.target.id })
        } else if (input === "checkIn" || input === "checkOut"){
            this.setState({ [input]: event })
        } else {
            this.setState({ [input]: event.target.value })
        }
    }

    handleAdd = event => {
        this.setState({ [event.currentTarget.id]: this.state[event.currentTarget.id] + 1 })
        this.setState({ AllTravelersCount: this.state.AllTravelersCount + 1 })
        if (this.state.AllTravelersCount > 9)
            this.setState({ error: true })
    }

    handleSubstract = event => {
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
        const { roomType, roomClass, roomCount, adultsCount, childrenCount, hotel, checkIn, checkOut } = this.state;
        
        return(
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid item xs={11} sm={8}>
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent} style={{paddingBottom: 8}}>
                            <Grid container direction="row" justify="flex-start" alignItems="flex-start" >
                                <Grid item xs={12} className={classes.listPosition}>
                                    <RoomType roomType={roomType} options={options} handleChangeValue={this.handleChangeValue}/>

                                    <RoomClass roomClass={roomClass} roomClasses={roomClasses} handleChangeValue={this.handleChangeValue}/>

                                    <RoomAndTravelersCount adultsCount={adultsCount}
                                    childrenCount={childrenCount}
                                    roomsCount={roomCount}
                                    handleAdd={this.handleAdd} 
                                    handleSubstract={this.handleSubstract}/>

                                </Grid>
                                <Grid item xs={12} className={classes.listPosition}>
                                    <Grid container direction="row" justify="space-evenly" alignItems="center">
                                        <Grid item xs={12} sm={7}>
                                            <Hotel hotel={hotel} handleChangeValue={this.handleChangeValue}/>
                                        </Grid>
                                        <Grid item xs={12} sm={5}>
                                            <DateOfCheckInAndChechOut checkIn={checkIn} checkOut={checkOut} handleChangeValue={this.handleChangeValue}/>
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

HotelItinerary.propType = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HotelItinerary)