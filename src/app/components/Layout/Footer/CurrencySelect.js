import React, { Component } from 'react'

import language from "../../../../translations/translation"

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
    formControl: {
      margin: theme.spacing.unit,
      width: '100%',
      minWidth: 120,
    },
    selectLabel: {
        fontSize: 17,
        position: 'absolute',
        width: 155,
    },
  });

class CurrencySelect extends Component {
    state = {
        currency: 'eur',
    };
    
    handleChange = event => {
    this.setState({ currency: event.target.value });
    localStorage.setItem("currency", event.target.value);
    };

    render() {
        const { classes } = this.props;

        return (
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel
                    ref={ref => {
                    this.InputLabelRef = ref;
                    }}
                    htmlFor="outlined-age-simple"
                >
                    <span className={classes.selectLabel}> 
                    {language.footer.button.currency}
                    </span>
                </InputLabel>
                <Select
                    value={this.state.currency}
                    onChange={this.handleChange}
                    input={
                    <OutlinedInput
                        labelWidth={70}
                        name="age"
                        id="outlined-age-simple"
                    />
                    }
                >
                    <MenuItem value="eur">€ EUR</MenuItem>
                    <MenuItem value="usd">$ USD</MenuItem>
                    <MenuItem value="pnd">£ POUND</MenuItem>
                </Select>
            </FormControl>
        );
    }
}

CurrencySelect.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CurrencySelect);