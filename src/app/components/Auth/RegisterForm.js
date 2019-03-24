import React, { Component } from 'react'

import language from '../../../translations/translation'

import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'

const styles = theme => ({
      root: {
        width: '100%',
        maxWidth: 500,
      },
      container: {
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 20,
        paddingLeft: 20,
      },
      textField: {
      },
      margin: {
        margin: theme.spacing.unit,
      },
      passwordIcon: {
        marginTop: 31,
        marginBottom: 25, 
        marginLeft: 'auto', 
        marginRight: 'auto',
        display: 'block',
        padding: 0,
      },
      button: {
          float: 'right',
          marginRight: 10,
      },
  });

class RegisterForm extends Component {
    state = {
        password: '',
        confirm: '',
        showPassword: false,
        terms: false,
    };
    
    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
      };

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
      };
    render() {
        const { classes } = this.props;
        return(
            <form>
            <Grid container className={classNames(classes.root, classes.container)}>
                <Grid xs={12}>
                    <Typography variant="h6">
                        <b>Go</b>Travel
                    </Typography>
                </Grid>
                <Grid xs={12}>
                    <Typography variant="h4" gutterBottom>
                        Register
                    </Typography>
                </Grid>
                <Grid xs={12} sm={6}>
                    <TextField
                        id="outlined-first-name"
                        label="First name"
                        className={classNames(classes.textField, classes.grow)}
                        margin="normal"
                        variant="outlined"
                    />
                </Grid>
                <Grid xs={12} sm={6}>
                    <TextField
                        id="outlined-last-name"
                        label="Last name"
                        className={classNames(classes.textField, classes.grow)}
                        margin="normal"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="outlined-email"
                        label="Email"
                        margin="normal"
                        variant="outlined"
                        style={{ width: '95%'}}
                    />
                </Grid>
                <Grid xs={12} sm={5}>
                    <TextField
                    id="outlined-adornment-password"
                    className={classNames(classes.passwordTextField)}
                    margin = "normal"
                    variant="outlined"
                    type={this.state.showPassword ? 'text' : 'password'}
                    label="Password"
                    value={this.state.password}
                    onChange={this.handleChange('password')}
                    />
                </Grid>
                <Grid xs={10} sm={5}>
                    <TextField
                    id="outlined-adornment-confirm"
                    className={classNames(classes.passwordTextField)}
                    margin = "normal"
                    variant="outlined"
                    type={this.state.showPassword ? 'text' : 'password'}
                    label="Confirm"
                    value={this.state.confirm}
                    style={{ width: '95%', marginLeft: 10 }}
                    onChange={this.handleChange('confirm')}
                    />
                </Grid>
                <Grid xs={2} sm={2}>
                    <IconButton
                        aria-label="Toggle password visibility"
                        className={classes.passwordIcon}
                        onClick={this.handleClickShowPassword}
                        >
                        {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                </Grid>
                    <Typography variant="body2" gutterBottom>
                    Use 8 or more characters with a mix of letters, numbers & symbols
                    </Typography>
                <Grid xs={12} sm={6}>
                    <TextField
                        id="country"
                        label="Country"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                    />
                </Grid>
                <Grid xs={12} sm={6}>
                    <TextField
                        id="city"
                        label="City"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                    />
                </Grid>
                <Grid xs={12} sm={6}>
                    <TextField
                        id="address1"
                        label="First address"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                    />
                </Grid>
                <Grid xs={12} sm={6}>
                    <TextField
                        id="address2"
                        label="Second address"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                    />
                </Grid>
                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Checkbox
                            checked={this.state.terms}
                            onChange={this.handleChange('terms')}
                            value="terms"
                            color="primary"
                            />
                        }
                        label="Accept terms of service"
                    />
                </FormGroup>
                <Grid xs={12}>
                    <Button variant="contained" size="large" color="primary" className={classes.button}>
                        Register
                    </Button>
                </Grid>
                </Grid>
            </form>
        );
    }
}

RegisterForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RegisterForm);