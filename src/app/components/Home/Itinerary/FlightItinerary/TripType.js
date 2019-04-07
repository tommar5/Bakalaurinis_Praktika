import React, { Component } from 'react'

import language from '../../../../../translations/translation'

import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import ArrowDropDown from '@material-ui/icons/ArrowDropDown'

const styles = theme => ({
    listPosition: {
        float: 'left',
    },
});

class TripType extends Component {
    state = {
        optionAnchor: null,
    }

    handleClickOptionListItem = event => {
        this.setState({ optionAnchor: event.currentTarget });
    };
    
    handleCloseOption = () => {
        this.setState({ optionAnchor: null });
    };

    render() {
        const { classes } = this.props;
        const { flightType, options } = this.props;
        const { optionAnchor } = this.state;
        const { handleChangeValue } = this.props;

        return(
            <div>
                <List component="nav" className={classes.listPosition}>
                    <ListItem button aria-haspopup="true" aria-controls="option-menu" aria-label="Option" onClick={this.handleClickOptionListItem}>
                        <ListItemText primary={options[flightType]}/><ArrowDropDown />
                    </ListItem>
                </List>
                <Menu id="option-menu" anchorEl={optionAnchor} open={Boolean(optionAnchor)} onClose={this.handleCloseOption} >
                    {options.map((option, index) => (
                        <MenuItem id={index} key={option} selected={index === flightType} onClick={handleChangeValue("flightType")}>
                            {option}
                        </MenuItem>
                    ))}
                </Menu>
            </div>
        );
    }
}

TripType.propType = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(TripType);