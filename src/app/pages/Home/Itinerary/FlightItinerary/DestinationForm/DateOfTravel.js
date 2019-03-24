import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'

const styles = theme => ({

});

class DateOfTravel extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
            </div>
        );
    }
}

DateOfTravel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DateOfTravel)