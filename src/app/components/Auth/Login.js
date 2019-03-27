import React, { Component } from 'react'

import language from '../../../translations/translation'

import LoginForm from './LoginForm'

import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Popover from '@material-ui/core/Popover'
import Button from '@material-ui/core/Button'

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    button: {
      marginLeft: 10,
    },
    typography: {
      margin: theme.spacing.unit * 2,
    },
  });
class Login extends Component {
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
                <Button color="inherit" className={classes.button} aria-owns={open ? 'login-popper' : undefined}
                aria-haspopup="true"
                onClick={this.handleClick}>{language.nav.button.login}</Button>

                <Popover
                id="login-popper"
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
                    <LoginForm />
                </Popover>
            </div>
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);