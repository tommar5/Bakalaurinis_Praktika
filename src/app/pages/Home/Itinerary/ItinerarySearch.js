import React, { Component } from 'react'

import language from '../../../../translations/translation'
import FlightItinerary from './FlightItinerary/FlightItinerary'

import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
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
});

class ItinerarySearch extends Component{
    render() {
        const { classes } = this.props;

        return (
            <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            >
                <Grid item xs={11} sm={8}>
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent} style={{paddingBottom: 8}}>
                            <FlightItinerary />
                            <Fab
                            variant="extended"
                            size="medium"
                            color="secondary"
                            aria-label="Add"
                            className={classes.submitButton}
                            >
                                <Search />
                                Search
                            </Fab>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        );
    }
}

ItinerarySearch.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ItinerarySearch);