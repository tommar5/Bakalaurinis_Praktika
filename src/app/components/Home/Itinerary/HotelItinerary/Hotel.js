import React, { Component } from 'react'

import language from '../../../../../translations/translation'

import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import Popover from '@material-ui/core/Popover'
import Typography from '@material-ui/core/Typography'
import TripOrigin from '@material-ui/icons/TripOrigin'

const styles = theme => ({
    block: {
        display: 'inline-block',
        width: '100%',
        color: 'white',
    },
    blockBorderOnClick: {
        outline: 'auto',
        height: 50,
    },
    blockBorder: {
        border: '1px solid rgba(255, 255, 255, 0.23)',
        borderRadius: 5,
        height: 50,
    },
    fieldPlaceholder: {
        position: 'absolute',
        margin: 11,
    },
    textPlaceholder: {
        position: 'absolute',
        margin: 2,
    }
});

export class Hotel extends Component {
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
              <span className={classes.fieldPlaceholder}>
                  <TripOrigin />
                  <span className={classes.textPlaceholder}>
                      {language.flightItinerary.departure.label}
                  </span>
              </span>
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

Hotel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Hotel)
