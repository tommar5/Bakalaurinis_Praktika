import React, { Component } from 'react'

import language from '../../../../../../translations/translation'

import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Popover from '@material-ui/core/Popover'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import ArrowDropDown from '@material-ui/icons/ArrowDropDown'

const styles = theme => ({
    button: {
        float: 'left',
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 8,
        marginBottom: 8,
        textTransform: 'none',
    },
    travellerCountCard: {
        display: 'block',
        width: 250,
        height: 230,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 10,
        paddingLeft: 10,
    },
    travellerCountCardButtons: {
        float: 'right',
        paddingTop: 10,
        paddingBottom: 10,
    },
    addRemoveButton: {
        padding: 0,
        width: 30,
        height: 30,
        minWidth: 30,
        marginLeft: 8,
        marginRight: 8,
    },
    travelerRow: {
        paddingTop: 3,
        paddingBottom: 3,
    },
    textDecoration: {
        fontWeight: 400,
        lineHeight: 0.8,
    },
});

class TravelersCount extends Component {
    state = {
        travelerCountAnchor: null,
        adultsCount: 1,
        childrenCount: 0,
        infantsInSeatCount: 0,
        infantsOnLapCount: 0,
        AllTravelersCount: 1,
    }

    handleClickTravelerListItem = event => {
        this.setState({ travelerCountAnchor: event.currentTarget });
    };
    
    handleAddPassanger = count => event => {
        this.setState({ [event.currentTarget.id]: count + 1 })
        this.setState({ AllTravelersCount: this.state.AllTravelersCount + 1 })
    }

    handleSubstractPassanger = count => event => {
        this.setState({ [event.currentTarget.id]: count - 1 })
        this.setState({ AllTravelersCount: this.state.AllTravelersCount - 1 })
    }

    handleCloseTraveler = () => {
        this.setState({ travelerCountAnchor: null });
    };

    render() {
        const { classes } = this.props;
        const { travelerCountAnchor } = this.state;

        return(
            <div>
                <Button
                onClick={this.handleClickTravelerListItem}
                className={classes.button}
                size="large"
                >
                    <Typography variant="subtitle1" style={{paddingRight: 16}}>
                        {this.state.AllTravelersCount} {this.state.AllTravelersCount > 1 ? language.flightItinerary.traveler.travelers : language.flightItinerary.traveler.traveler }
                        </Typography> <ArrowDropDown />
                </Button>
                <Popover
                open={Boolean(travelerCountAnchor)}
                anchorEl={travelerCountAnchor}
                onClose={this.handleCloseTraveler}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                    }}
                >
                    <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start" 
                    className={classes.travellerCountCard}
                    >
                        <Grid item xs={12} className={classes.travelerRow}>
                            <div style={{width:120, height: 44, display: 'inline-block'}}>
                                <Grid
                                container
                                direction="row"
                                justify="flex-start"
                                alignItems="flex-start"
                                >
                                    <Grid item xs={12}>
                                        <Typography variant="h6" className={classes.textDecoration}>{language.flightItinerary.traveler.adult}</Typography>
                                    </Grid>
                                </Grid>
                            </div>
                            {this.state.adultsCount == 1 ? (
                                <Button disabled variant="contained" color="primary" className={classes.addRemoveButton}><RemoveIcon /></Button>
                            ) : (
                                <Button id="adultsCount" variant="contained" color="primary" className={classes.addRemoveButton} onClick={this.handleSubstractPassanger(this.state.adultsCount)}><RemoveIcon /></Button>
                            )}
                            {this.state.adultsCount}
                            <Button id="adultsCount" variant="contained" color="primary" className={classes.addRemoveButton} onClick={this.handleAddPassanger(this.state.adultsCount)}><AddIcon /></Button>
                        </Grid>
                        <Grid item xs={12} className={classes.travelerRow}>
                            <div style={{width:120, display: 'inline-block'}}>
                                <Grid
                                container
                                direction="row"
                                justify="flex-start"
                                alignItems="flex-start"
                                >
                                    <Grid item xs={12}>
                                        <Typography variant="h6" className={classes.textDecoration}>{language.flightItinerary.traveler.child}</Typography>
                                        <Typography variant="subtitle1">{language.flightItinerary.traveler.age}</Typography>
                                    </Grid>
                                </Grid>
                            </div>
                            {this.state.childrenCount == 0 ? (
                                <Button disabled variant="contained" color="primary" className={classes.addRemoveButton}><RemoveIcon /></Button>
                            ) : (
                                <Button id="childrenCount" variant="contained" color="primary" className={classes.addRemoveButton} onClick={this.handleSubstractPassanger(this.state.childrenCount)}><RemoveIcon /></Button>
                            )}
                            {this.state.childrenCount}
                            <Button id="childrenCount" variant="contained" color="primary" className={classes.addRemoveButton} onClick={this.handleAddPassanger(this.state.childrenCount)}><AddIcon /></Button>
                        </Grid>
                        <Grid item xs={12} className={classes.travelerRow}>
                            <div style={{width:120, display: 'inline-block'}}>
                                <Grid
                                container
                                direction="row"
                                justify="flex-start"
                                alignItems="flex-start"
                                >
                                    <Grid item xs={12}>
                                        <Typography variant="h6" className={classes.textDecoration}>{language.flightItinerary.traveler.infant}</Typography>
                                        <Typography variant="subtitle1">{language.flightItinerary.traveler.seat}</Typography>
                                    </Grid>
                                </Grid>
                            </div>
                            {this.state.infantsInSeatCount == 0 ? (
                                <Button disabled variant="contained" color="primary" className={classes.addRemoveButton}><RemoveIcon /></Button>
                            ) : (
                                <Button id="infantsInSeatCount" variant="contained" color="primary" className={classes.addRemoveButton} onClick={this.handleSubstractPassanger(this.state.infantsInSeatCount)}><RemoveIcon /></Button>
                            )}
                            {this.state.infantsInSeatCount}
                            <Button id="infantsInSeatCount" variant="contained" color="primary" className={classes.addRemoveButton} onClick={this.handleAddPassanger(this.state.infantsInSeatCount)}><AddIcon /></Button>
                        </Grid>
                        <Grid item xs={12} className={classes.travelerRow}>
                            <div style={{width:120, display: 'inline-block'}}>
                                <Grid
                                container
                                direction="row"
                                justify="flex-start"
                                alignItems="flex-start"
                                >
                                    <Grid item xs={12}>
                                        <Typography variant="h6" className={classes.textDecoration}>{language.flightItinerary.traveler.infant}</Typography>
                                        <Typography variant="subtitle1">{language.flightItinerary.traveler.lap}</Typography>
                                    </Grid>
                                </Grid>
                            </div>
                            {this.state.infantsOnLapCount == 0 ? (
                                <Button disabled variant="contained" color="primary" className={classes.addRemoveButton}><RemoveIcon /></Button>
                            ) : (
                                <Button id="infantsOnLapCount" variant="contained" color="primary" className={classes.addRemoveButton} onClick={this.handleSubstractPassanger(this.state.infantsOnLapCount)}><RemoveIcon /></Button>
                            )}
                            {this.state.infantsOnLapCount}
                            <Button id="infantsOnLapCount" variant="contained" color="primary" className={classes.addRemoveButton} onClick={this.handleAddPassanger(this.state.infantsOnLapCount)}><AddIcon /></Button>
                        </Grid>
                    </Grid>
                </Popover>
            </div>
        );
    }
}

TravelersCount.propType = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(TravelersCount);