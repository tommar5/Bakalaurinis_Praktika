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
import InputAdornment from '@material-ui/core/InputAdornment'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import Checkbox from '@material-ui/core/Checkbox'
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
      button: {
          float: 'right',
      },
  });

class RegisterForm extends Component {
    state = {
        password: '',
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
            <Grid container className={classes.root}>
                <Grid item xs={12}>
                    <Typography variant="h6" className={classes.grow} color="grey">
                        <b>Go</b>Travel
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h4" gutterBottom>
                        Register
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        id="outlined-first-name"
                        label="First name"
                        className={classNames(classes.textField, classes.grow)}
                        margin="normal"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={6}>
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
                        className={classes.textField}
                        fullWidth
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
                    />
                    <TextField
                    id="outlined-adornment-confirm"
                    className={classNames(classes.passwordTextField)}
                    margin = "normal"
                    variant="outlined"
                    type={this.state.showPassword ? 'text' : 'password'}
                    label="Confirm"
                    value={this.state.password}
                    onChange={this.handleChange('password')}
                    />
                    <IconButton
                        aria-label="Toggle password visibility"
                        onClick={this.handleClickShowPassword}
                        >
                        {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                    <Typography variant="body2" gutterBottom>
                    Use 8 or more characters with a mix of letters, numbers & symbols
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        id="country"
                        label="Country"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        id="city"
                        label="City"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        id="address1"
                        label="First address"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={6}>
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
            // <Form>
            //     <Form.Row>
            //         <Form.Group as={Col} controlId="formGridEmail">
            //         <Form.Label>Email</Form.Label>
            //         <Form.Control type="email" placeholder="Enter email" />
            //         </Form.Group>

            //         <Form.Group as={Col} controlId="formGridPassword">
            //         <Form.Label>Password</Form.Label>
            //         <Form.Control type="password" placeholder="Password" />
            //         </Form.Group>
            //     </Form.Row>

            //     <Form.Group controlId="formGridAddress1">
            //         <Form.Label>Address</Form.Label>
            //         <Form.Control placeholder="1234 Main St" />
            //     </Form.Group>

            //     <Form.Group controlId="formGridAddress2">
            //         <Form.Label>Address 2</Form.Label>
            //         <Form.Control placeholder="Apartment, studio, or floor" />
            //     </Form.Group>

            //     <Form.Row>
            //         <Form.Group as={Col} controlId="formGridCity">
            //         <Form.Label>City</Form.Label>
            //         <Form.Control />
            //         </Form.Group>

            //         <Form.Group as={Col} controlId="formGridState">
            //         <Form.Label>State</Form.Label>
            //         <Form.Control as="select">
            //             <option>Choose...</option>
            //             <option>...</option>
            //         </Form.Control>
            //         </Form.Group>

            //         <Form.Group as={Col} controlId="formGridZip">
            //         <Form.Label>Zip</Form.Label>
            //         <Form.Control />
            //         </Form.Group>
            //     </Form.Row>

            //     <Form.Group id="formGridCheckbox">
            //         <Form.Check type="checkbox" label="Check me out" />
            //     </Form.Group>

            //     <Button variant="primary" type="submit">
            //         Submit
            //     </Button>
            // </Form>
        );
    }
}

RegisterForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RegisterForm);