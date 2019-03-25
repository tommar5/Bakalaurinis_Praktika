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
    grid: {
        height: 90,
    },
    card: {
        bottom: 100,
        position: 'relative',
        background: '#a9a2d2',
    },
    cardContent: {
        paddingTop: 5,
    }
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
                <Grid item xs={11} sm={8} className={classes.grid}>
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                            <FlightItinerary />
                        </CardContent>
                    </Card>
                    <Fab
                    variant="extended"
                    size="medium"
                    color="secondary"
                    aria-label="Add"
                    style={{bottom: 120, marginLeft: 'auto', marginRight: 'auto', display: 'flex'}}
                    >
                        <Search />
                        Search
                    </Fab>
                </Grid>
            </Grid>
        );
    }
}

ItinerarySearch.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ItinerarySearch);