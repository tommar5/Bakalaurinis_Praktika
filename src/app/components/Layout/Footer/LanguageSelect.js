import React, { Component } from 'react'

import language from "../../../../translations/translation"

import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Translate from '@material-ui/icons/Translate'

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

class LanguageSelect extends Component {
    state = {
        lang: '',
    };
    
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
                    htmlFor="outlined-lang-simple"
                >
                <Translate style={{height: 17}}/>
                    <span className={classes.selectLabel}> 
                    Language · <span style={{color: 'black'}}>English</span>
                    </span>
                </InputLabel>
                <Select
                    value={this.state.lang}
                    onChange={this.handleChange}
                    input={
                    <OutlinedInput
                        labelWidth={this.state.labelWidth}
                        name="lang"
                        id="outlined-lang-simple"
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

LanguageSelect.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LanguageSelect);