import React, { Component } from 'react'

import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles, Grid } from '@material-ui/core'
import { MuiPickersUtilsProvider, InlineDatePicker } from 'material-ui-pickers'
import DateFnsUtils from '@date-io/date-fns'
import ltLocale from "date-fns/locale/lt";
import ruLocale from "date-fns/locale/ru";
import enLocale from "date-fns/locale/en-US";

const styles = theme => ({
    block: {
        border: '1px solid rgba(255, 255, 255, 0.23)',
        height: 52,
        borderRadius: 5,
        color: 'white'
    },
    divider: {
        borderLeft: '1px solid #dadce0',
        height: 29,
        display: 'inline-block',
    },
    datePicker: {
        width: '90%',
        padding: '0 10px',
    },
    datePickercolor: {
        color: 'white',
    }
});

const localeMap = {
    en: enLocale,
    lt: ltLocale,
    ru: ruLocale,
};

class DateOfTravel extends Component {
    render() {
        const { classes } = this.props;
        const { departureDate, returnDate } = this.props;
        const { handleChangeValue } = this.props;

        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={localeMap[localStorage.getItem("language")]}>
                <Grid container direction="row" justify="space-evenly" alignItems="center" space={0} className={classes.block}>
                    <Grid item xs={12} sm={6}>
                        <InlineDatePicker value={departureDate} onChange={handleChangeValue("departureDate")} className={classes.datePicker}/>
                        <div className={classes.divider}></div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InlineDatePicker value={returnDate} onChange={handleChangeValue("returnDate")} className={classes.datePicker}/>
                    </Grid>
                </Grid>
            </MuiPickersUtilsProvider>
        );
    }
}

DateOfTravel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DateOfTravel)