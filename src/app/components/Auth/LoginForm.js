import React, { Component } from 'react'

import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import Button from '@material-ui/core/Button'

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      root: {
        width: '100%',
        maxWidth: 500,
      },
      textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
      },
      margin: {
        margin: theme.spacing.unit,
      },
      passwordTextField: {
        flexBasis: 200,
      },
  });

class LoginForm extends Component {
    state = {
        password: '',
        showPassword: false,
    };
    
    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
      };

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
      };

    render(){
        const { classes } = this.props;
        return(
            <form className={classes.container} noValidate autoComplete="off">
             <Grid container className={classes.demo} justify="center">
                <Grid item xs={4}>
                    <Typography variant="h6" className={classes.grow} color="grey">
                        <b>Go</b>Travel
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h4" gutterBottom>
                        Login
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="outlined-name"
                        label="Name"
                        className={classNames(classes.textField, classes.grow)}
                        margin="normal"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    id="outlined-adornment-password"
                    className={classNames(classes.passwordTextField)}
                    margin = "normal"
                    variant="outlined"
                    type={this.state.showPassword ? 'text' : 'password'}
                    label="Password"
                    value={this.state.password}
                    onChange={this.handleChange('password')}
                    InputProps={{
                        endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="Toggle password visibility"
                            onClick={this.handleClickShowPassword}
                            >
                            {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        ),
                    }}
                    />
                </Grid>
                <Button variant="contained" size="large" color="primary">
                    Login
                </Button>
             </Grid>
            </form>
        );
    }
}

LoginForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginForm);