import React, { Component } from 'react'

import language from "../../../../translations/translation"

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
    },
    selectLabel: {
        fontSize: 17,
        position: 'absolute',
        width: 155,
    },
  });

class LanguageSelect extends Component {
    state = {
        lang: localStorage.getItem("language"),
    }

    handleChange = event => {
    this.setState({ lang: event.target.value });
    localStorage.setItem("language", event.target.value);
    window.location.reload();
    };

    render() {
        const { classes } = this.props;
        const { lang } = this.state;
        const NowIsSetLang = language.language;
        return (
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel
                    htmlFor="outlined-lang-simple"
                >
                <Translate style={{height: 17}}/>
                    <span className={classes.selectLabel}> 
                    {language.footer.button.language} · <span style={{color: 'black'}}><span style={{color: 'black'}}>{NowIsSetLang[lang]}</span></span>
                    </span>
                </InputLabel>
                <Select
                    value={localStorage.getItem("language")}
                    onChange={this.handleChange}
                    input={
                    <OutlinedInput
                        labelWidth={175}
                        name="lang"
                        id="outlined-lang-simple"
                    />
                    }
                >
                    <MenuItem value="en">{language.language.en}</MenuItem>
                    <MenuItem value="lt">{language.language.lt}</MenuItem>
                    <MenuItem value="ru">{language.language.ru}</MenuItem>
                </Select>
            </FormControl>
        );
    }
}

LanguageSelect.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LanguageSelect);