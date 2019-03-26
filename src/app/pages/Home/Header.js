import React from 'react'

import landscape from '../../images/landscape.jpg'

import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'

const styles = {
    card: {
      marginTop: 50,
    },
    media: {
      height: 320,
      borderRadius: 16,
    },
};

function Header(props) {
    const { classes } = props;
    return (
        <Grid container
            direction="row"
            justify="center"
            alignItems="flex-start"
            className={classes.card}
        >
         <Grid item xs={12} sm={9}>
            <CardMedia
                className={classes.media}
                image={landscape}
                title="Contemplative Reptile"
            />
         </Grid>
        </Grid>
    );
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(Header);