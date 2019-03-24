import React, { Component } from 'react'

import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'

const styles = theme => ({
      root: {
        width: '100%',
        maxWidth: 295,
      },
      container: {
        paddingTop: 10,
        paddingRight: 20,
        paddingBottom: 20,
        paddingLeft: 20,
      },
      marginCenter: {
        marginLeft: 'auto',
        marginRight: 'auto',
      },
      textField: {
        width: 255,
      },
      button: {
        float: 'right',
      },
  });

class LoginForm extends Component {
    state = {
        password: '',
        showPassword: false,
        rememberMe: false,
    };
    
    handleChangePasswordField = prop => event => {
        this.setState({ [prop]: event.target.value });
      };

    handleChangeRememberMecheckBox = prop => event => {
    this.setState({ [prop]: event.target.checked });
    };

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
      };

    render(){
        const { classes } = this.props;
        return(
            <form noValidate>
                    <Grid
                        container
                        spacing={0}
                        direction="column"
                        justify="flex-start"
                        alignItems="flex-start"
                        className={classNames(classes.container, classes.root)}
                    >
                        <Grid className={classes.marginCenter}>
                            <Typography variant="h6">
                                <b>Go</b>Travel
                            </Typography>
                        </Grid>
                        <Grid className={classes.marginCenter}>
                            <Typography variant="h4" gutterBottom>
                                Login
                            </Typography>
                        </Grid>
                        <Grid xs={12}>
                            <TextField
                                id="outlined-name"
                                label="Name"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                className={classes.textField}
                            />
                        </Grid>
                        <Grid >
                            <FormGroup row>
                                <FormControlLabel
                                    control={
                                        <TextField
                                            id="outlined-adornment-password"
                                            className={classes.textField}
                                            margin = "normal"
                                            variant="outlined"
                                            type={this.state.showPassword ? 'text' : 'password'}
                                            label="Password"
                                            value={this.state.password}
                                            onChange={this.handleChangePasswordField('password')}
                                            InputProps={{
                                                endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                    aria-label="Toggle password visibility"
                                                    onClick={this.handleClickShowPassword}
                                                    >
                                                    {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                                    </IconButton>
                                                </InputAdornment>
                                                ),
                                            }}
                                        />
                                    }
                                />
                            </FormGroup>
                        </Grid>
                        <Grid xs={12}>
                            <FormGroup row>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                        checked={this.state.rememberMe}
                                        onChange={this.handleChangeRememberMecheckBox('rememberMe')}
                                        value="rememberMe"
                                        color="primary"
                                        />
                                    }
                                    label="Remember me"
                                />
                            </FormGroup>
                        </Grid>
                        <Grid xs={12} style={{ width: '100%' }}>
                            <Button variant="contained" size="large" color="primary" className={classes.button}>
                                Login
                            </Button>
                        </Grid>
                    </Grid>
            </form>
        );
    }
}

LoginForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginForm);