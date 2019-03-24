import React, { Component } from 'react'

import language from "../../../../translations/translation"

import ReactDOM from 'react-dom';
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
        age: '',
    };
    
    componentDidMount() {
        this.setState({
            labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
        });
    }
    
    handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
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
                    Currency · <span style={{color: 'black'}}>EUR</span>
                    </span>
                </InputLabel>
                <Select
                    value={this.state.age}
                    onChange={this.handleChange}
                    input={
                    <OutlinedInput
                        labelWidth={this.state.labelWidth}
                        name="age"
                        id="outlined-age-simple"
                    />
                    }
                >
                    <MenuItem value="">
                    <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        );
    }
}

CurrencySelect.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CurrencySelect);