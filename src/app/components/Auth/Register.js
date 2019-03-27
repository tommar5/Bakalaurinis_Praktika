import React, { Component } from 'react'

import language from '../../../translations/translation'

import RegisterForm from './RegisterForm'

import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Popover from '@material-ui/core/Popover'
import Button from '@material-ui/core/Button'

const styles = theme => ({
    button: {
        marginLeft: 10,
      },
      typography: {
        margin: theme.spacing.unit * 2,
      },
  });

class Register extends Component {
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
                <Button variant="outlined" color="inherit" className={classes.button} aria-owns={open ? 'register-popper' : undefined}
                aria-haspopup="true"
                onClick={this.handleClick}>{language.nav.button.register}</Button>

                <Popover
                    id="register-popper"
                    open={open}
                    anchorEl={anchorEl}
                    onClose={this.handleClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <RegisterForm />
                </Popover>
            </div>
        )
    }
}

Register.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(Register);