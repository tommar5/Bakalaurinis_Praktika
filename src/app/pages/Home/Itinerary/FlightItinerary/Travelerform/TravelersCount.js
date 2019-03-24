import React, { Component } from 'react'

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
        height: 250,
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
        travelersCounts: {
            adults: 1,
            children: 0,
            infantsInSeat: 0,
            infantsOnLap: 0,
        },
        AllTravelersCount: 1,
    }

    handleClickTravelerListItem = event => {
        this.setState({ travelerCountAnchor: event.currentTarget });
    };
    
    passangerCountAdd() {

    };

    passangerCountSubtract() {

    };

    handleCloseTraveler = () => {
        this.setState({ travelerCountAnchor: null });
    };

    render() {
        const { classes } = this.props;
        const { travelerCountAnchor, travelersCounts } = this.state;

        let passanger;

        if (this.state.AllTravelersCount == 1) {
            passanger = 'passanger'
        } else {
            passanger = 'passangers'
        }

        return(
            <div>
                <Button
                onClick={this.handleClickTravelerListItem}
                className={classes.button}
                size="large"
                >
                    <Typography variant="subtitle1" style={{paddingRight: 16}}>
                        {this.state.AllTravelersCount} {passanger}
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
                                        <Typography variant="h6" className={classes.textDecoration}>Adults</Typography>
                                    </Grid>
                                </Grid>
                            </div>
                            {this.state.travelersCounts.adults == 1 ? (
                                <Button disabled variant="contained" color="primary" className={classes.addRemoveButton}><RemoveIcon /></Button>
                            ) : (
                                <Button variant="contained" color="primary" className={classes.addRemoveButton}><RemoveIcon /></Button>
                            )}
                            0
                            <Button variant="contained" color="primary" className={classes.addRemoveButton}><AddIcon /></Button>
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
                                        <Typography variant="h6" className={classes.textDecoration}>Children</Typography>
                                        <Typography variant="subtitle1">Aged 2-12</Typography>
                                    </Grid>
                                </Grid>
                            </div>
                            {this.state.travelersCounts.children == 0 ? (
                                <Button disabled variant="contained" color="primary" className={classes.addRemoveButton}><RemoveIcon /></Button>
                            ) : (
                                <Button variant="contained" color="primary" className={classes.addRemoveButton}><RemoveIcon /></Button>
                            )}
                            0<Button variant="contained" color="primary" className={classes.addRemoveButton}><AddIcon /></Button>
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
                                        <Typography variant="h6" className={classes.textDecoration}>Infants</Typography>
                                        <Typography variant="subtitle1">In seat</Typography>
                                    </Grid>
                                </Grid>
                            </div>
                            {this.state.travelersCounts.infantsInSeat == 0 ? (
                                <Button disabled variant="contained" color="primary" className={classes.addRemoveButton}><RemoveIcon /></Button>
                            ) : (
                                <Button variant="contained" color="primary" className={classes.addRemoveButton}><RemoveIcon /></Button>
                            )}
                            0<Button variant="contained" color="primary" className={classes.addRemoveButton}><AddIcon /></Button>
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
                                        <Typography variant="h6" className={classes.textDecoration}>Infants</Typography>
                                        <Typography variant="subtitle1">On lap</Typography>
                                    </Grid>
                                </Grid>
                            </div>
                            {this.state.travelersCounts.infantsOnLap == 0 ? (
                                <Button disabled variant="contained" color="primary" className={classes.addRemoveButton}><RemoveIcon /></Button>
                            ) : (
                                <Button variant="contained" color="primary" className={classes.addRemoveButton}><RemoveIcon /></Button>
                            )}
                            0<Button variant="contained" color="primary" className={classes.addRemoveButton}><AddIcon /></Button>
                        </Grid>
                        <Grid item xs={12} className={classes.travellerCountCardButtons}>
                        <Button>Cancel</Button> <Button color="primary">Done</Button>
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