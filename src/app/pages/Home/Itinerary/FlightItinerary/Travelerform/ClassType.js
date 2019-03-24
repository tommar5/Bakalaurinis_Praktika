import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import ArrowDropDown from '@material-ui/icons/ArrowDropDown'

const styles = theme =>({
    listPosition: {
        float: 'left',
    },
});

const classTypes = [
    'Economy',
    'Premium Economy',
    'Business',
    'First class',
];

class ClassType extends Component {
    state = {
        classTypeAnchor: null,
        classTypeSelectedIndex: 0,
    }

    handleClickClassListItem = event => {
        this.setState({ classTypeAnchor: event.currentTarget });
    };
    
    handleClassMenuItemClick = (event, index) => {
        this.setState({ classTypeSelectedIndex: index, classTypeAnchor: null });
    };
    
    handleCloseClass = () => {
        this.setState({ classTypeAnchor: null });
    };

    render() {
        const { classes } = this.props;
        const { classTypeAnchor, classTypeSelectedIndex } = this.state;

        return (
            <div>
                <List component="nav" className={classes.listPosition}>
                    <ListItem button aria-haspopup="true" aria-controls="class-type-menu" aria-label="Class type" onClick={this.handleClickClassListItem}>
                        <ListItemText primary={classTypes[classTypeSelectedIndex]} /><ArrowDropDown />
                    </ListItem>
                </List>
                <Menu id="class-type-menu" anchorEl={classTypeAnchor} open={Boolean(classTypeAnchor)} onClose={this.handleCloseClass} >
                {classTypes.map((classType, index) => (
                    <MenuItem key={classType} selected={index === classTypeSelectedIndex} onClick={event => this.handleClassMenuItemClick(event, index)}>
                        {classType}
                    </MenuItem>
                ))}
                </Menu>
            </div>
        );
    }
}

ClassType.propType = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ClassType);