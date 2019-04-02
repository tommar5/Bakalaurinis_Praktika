import React, { Component } from 'react'

import language from "../../../translations/translation"

import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Translate from '@material-ui/icons/Translate'

const styles = theme => ({
    root: {
        width: '100%',
    },
    grow: {
        padding: 20,
    },
    spaceBetwenBlocks: {
        padding: '5px 5px 5px 5px'
    },
    formControl: {
        width: '100%',
    },
    selectLabel: {
        fontSize: 17,
        position: 'absolute',
        width: 155,
    },
    selectLabel: {
        fontSize: 17,
        position: 'absolute',
        width: 155,
    },
});

class Footer extends Component {
    state = {
        language: localStorage.getItem("language"),
        country: localStorage.getItem("country"),
        currency: 'eur',
    }

    handleChange = event => {
        this.setState({ [event.currentTarget.id]: event.target.value });
        localStorage.setItem(event.currentTarget.id, event.target.value);
        if (event.currentTarget.id == "language") window.location.reload();
    };

    LanguageSelect() {
        const { classes } = this.props;
        const NowIsSetLang = language.language;
        return (
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-lang-simple">
                    <Translate style={{height: 17}}/>
                    <span className={classes.selectLabel}>
                    {language.footer.button.language} · <span style={{color: 'black'}}><span style={{color: 'black'}}>{NowIsSetLang[this.state.language]}</span></span>
                    </span>
                </InputLabel>
                <Select value={this.state.language} onChange={this.handleChange} input={<OutlinedInput labelWidth={175} name="lang" id="outlined-lang-simple" />}>
                    <MenuItem id="language" value="en">{language.language.en}</MenuItem>
                    <MenuItem id="language" value="lt">{language.language.lt}</MenuItem>
                    <MenuItem id="language" value="ru">{language.language.ru}</MenuItem>
                </Select>
            </FormControl>
        );
    }
    CountrySelect() {
        const { classes } = this.props;
        return (
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-simple">
                    <span className={classes.selectLabel}>
                    {language.footer.button.country}
                    </span>
                </InputLabel>
                <Select value={this.state.country} onChange={this.handleChange} input={<OutlinedInput labelWidth={60} name="country" id="outlined-age-simple"/>}>
                    <MenuItem id="country" value="lt">{language.footer.countrySelect.lt}</MenuItem>
                    <MenuItem id="country" value="lv">{language.footer.countrySelect.lv}</MenuItem>
                    <MenuItem id="country" value="est">{language.footer.countrySelect.est}</MenuItem>
                </Select>
            </FormControl>
        );
    }

    CurrencySelect() {
        const { classes } = this.props;

        return (
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-simple">
                    <span className={classes.selectLabel}> 
                    {language.footer.button.currency}
                    </span>
                </InputLabel>
                <Select value={this.state.currency} onChange={this.handleChange} input={<OutlinedInput labelWidth={70} name="currency" id="outlined-age-simple"/>}>
                    <MenuItem id="currency" value="eur">€ EUR</MenuItem>
                    <MenuItem id="currency" value="usd">$ USD</MenuItem>
                    <MenuItem id="currency" value="pnd">£ POUND</MenuItem>
                </Select>
            </FormControl>
        );
    }

    render() {
        const { classes } = this.props;

        return (
            <footer className={classes.root}>
                <Divider style={{marginBottom: 8}}/>
                <Grid container spacing={8}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={12} sm={1}>
                        <Typography variant="subtitle1" className={classes.grow}>
                            <b>Go</b>Travel
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        {this.LanguageSelect()}
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        {this.CountrySelect()}
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        {this.CurrencySelect()}
                    </Grid>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={12} sm={8} className={classes.spaceBetwenBlocks}>
                        <Typography variant="body2" gutterBottom>
                            {language.footer.label.textOne}
                        </Typography>
                    </Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={2}></Grid>
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
                    <Grid item xs={5}></Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={12} sm={8} className={classes.spaceBetwenBlocks}>
                        <Typography variant="body2" gutterBottom>
                            {language.footer.label.textTwo}
                        </Typography>
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>
            </footer>
        );
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(Footer);