import React, { Component } from 'react'

import language from '../../../../../../translations/translation'

import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Popover from '@material-ui/core/Popover'

const styles = theme => ({
    block: {
        display: 'inline-block',
    },
    blockBorderOnClick: {
        borderColor: '#3f51b5',
        borderWidth: 2,
    },
    blockBorder: {
        borderColor: 'rgba(0, 0, 0, 0.23);',
    }
});

class Destination extends Component {
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
    
        return (
          <div className={classes.block}>
            <div 
            className={open ? classes.blockBorderOnClick : classes.blockBorder}
            onClick={this.handleClick}>
                {language.flightItinerary.destination.label}
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

Destination.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Destination)