import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Popover from '@material-ui/core/Popover'
import SwapHoriz from '@material-ui/icons/SwapHoriz'

const styles = theme => ({

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
          <div>
            <Button
              aria-owns={open ? 'simple-popper' : undefined}
              aria-haspopup="true"
              variant="contained"
              onClick={this.handleClick}
            >
              From where?
            </Button>
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
            <SwapHoriz />
            <Button
              aria-owns={open ? 'simple-popper' : undefined}
              aria-haspopup="true"
              variant="contained"
              onClick={this.handleClick}
            >
              To where?
            </Button>
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