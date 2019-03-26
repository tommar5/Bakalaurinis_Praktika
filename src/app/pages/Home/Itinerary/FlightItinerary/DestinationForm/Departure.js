import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import Popover from '@material-ui/core/Popover'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
    block: {
        display: 'inline-block',
    },
    blockBorderOnClick: {
        outline: 'auto',
    },
    blockBorder: {
        border: '1px solid rgba(0, 0, 0, 0.23)',
        borderRadius: 0,
    },
});

class Departure extends Component {
    state = {
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({
          anchorEl: event.currentTarget,
        });
    };
    
    handleClose = () => {
        this.setState({
          anchorEl: null,
        });
    };

    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return(
            <div className={classes.block}>
            <div 
            className={open ? classes.blockBorderOnClick : classes.blockBorder}
            onClick={this.handleClick}>
                From where?
            </div>
            <Popover
            id="simple-popper"
            open={open}
            anchorEl={anchorEl}
            onClose={this.handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            >
            <Typography className={classes.typography}>The content of the Popover.</Typography>
            </Popover>
            </div>
        );
    }
}

Departure.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Departure)