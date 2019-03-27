import React, { Component } from 'react'

import language from "../../../../translations/translation"

import Language from './LanguageSelect'
import CountrySelect from './CountrySelect'
import CurrencySelect from './CurrencySelect'

import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link';

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    padding: 20,
  },
  spaceBetwenBlocks: {
      padding: '5px 5px 5px 5px'
  }
});

class Footer extends Component {
    render() {
        const { classes } = this.props;

        return (
            <footer className={classes.root}>
                <Divider />
                <Grid container
                    direction="column"
                    justify="flex-start"
                    alignItems="stretch"
                >
                    <Grid item>
                        <Grid container
                            direction="row"
                            justify="flex-start"
                            alignItems="flex-start"
                        >
                            <Grid item xs></Grid>
                            <Grid item xs={8}>
                                <Grid container
                                    direction="row"
                                    justify="flex-start"
                                    alignItems="flex-start"
                                    spacing={8}
                                >
                                    <Grid item xs={12} sm={1}>
                                        <Typography variant="subtitle1" className={classes.grow}>
                                            <b>Go</b>Travel
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={2}>
                                        <Language />
                                    </Grid>
                                    <Grid item xs={12} sm={2}>
                                        <CountrySelect />
                                    </Grid>
                                    <Grid item xs={12} sm={2}>
                                        <CurrencySelect />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs></Grid>
                        </Grid>
                    </Grid>
                    <Grid item> 
                        <Grid container
                            direction="row"
                            justify="flex-start"
                            alignItems="flex-start"
                        >
                            <Grid item xs></Grid>
                            <Grid item xs={8}>
                                <Divider />
                                <Grid container
                                    direction="column"
                                    justify="flex-start"
                                    alignItems="stretch"
                                >
                                    <Grid item className={classes.spaceBetwenBlocks}>
                                        <Typography variant="body2" gutterBottom>
                                            {language.footer.label.textOne}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} className={classes.spaceBetwenBlocks}>
                                        <Grid container
                                        direction="row"
                                        justify="flex-start"
                                        alignItems="flex-start"
                                        >
                                            <Grid item xs={12} sm={2}>
                                                <Link href="#" variant="button">
                                                    {language.footer.label.terms}
                                                </Link>
                                            </Grid>
                                            <Grid item xs={12} sm={3}>
                                                <Link href="#" variant="button">
                                                    {language.footer.label.helpCenter}
                                                </Link>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item className={classes.spaceBetwenBlocks}>
                                        <Typography variant="body2" gutterBottom>
                                            {language.footer.label.textTwo}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs></Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </footer>
        );
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Footer);