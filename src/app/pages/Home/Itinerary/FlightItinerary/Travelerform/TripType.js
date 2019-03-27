import React, { Component } from 'react'

import language from '../../../../../../translations/translation'

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

const options = [
    language.flightItinerary.trip.round,
    language.flightItinerary.trip.oneWay,
    language.flightItinerary.trip.multi,
];

class TripType extends Component {
    state = {
        optionAnchor: null,
        optionSelectedIndex: 0,
    }

    handleClickOptionListItem = event => {
        this.setState({ optionAnchor: event.currentTarget });
    };
    
    handleOptionMenuItemClick = (event, index) => {
        this.setState({ optionSelectedIndex: index, optionAnchor: null });
    };
    
    handleCloseOption = () => {
        this.setState({ optionAnchor: null });
    };

    render() {
        const { classes } = this.props;
        const { optionAnchor, optionSelectedIndex } = this.state;

        return(
            <div>
                <List component="nav" className={classes.listPosition}>
                    <ListItem button aria-haspopup="true" aria-controls="option-menu" aria-label="Option" onClick={this.handleClickOptionListItem}>
                        <ListItemText primary={options[optionSelectedIndex]}/><ArrowDropDown />
                    </ListItem>
                </List>
                <Menu id="option-menu" anchorEl={optionAnchor} open={Boolean(optionAnchor)} onClose={this.handleCloseOption} >
                    {options.map((option, index) => (
                        <MenuItem  key={option} selected={index === optionSelectedIndex} onClick={event => this.handleOptionMenuItemClick(event, index)}>
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