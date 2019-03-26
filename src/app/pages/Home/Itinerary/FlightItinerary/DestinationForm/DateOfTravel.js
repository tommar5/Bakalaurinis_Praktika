import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import { MuiPickersUtilsProvider, DatePicker, InlineDatePicker } from 'material-ui-pickers'
import DateFnsUtils from '@date-io/date-fns'

const styles = theme => ({

});

class DateOfTravel extends Component {
    state = {
        selectedDate: new Date(),
    };

    handleDateChange = date => {
        this.setState({ selectedDate: date });
    };

    render() {
        const { classes } = this.props;
        const { selectedDate } = this.state;
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <InlineDatePicker value={selectedDate} onChange={this.handleDateChange} />
                <InlineDatePicker value={selectedDate} onChange={this.handleDateChange} />
            </MuiPickersUtilsProvider>
        );
    }
}

DateOfTravel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DateOfTravel)