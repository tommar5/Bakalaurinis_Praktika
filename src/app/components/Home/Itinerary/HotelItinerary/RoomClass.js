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

export class RoomClass extends Component {
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
    const { roomClass, roomClasses } = this.props;
    const { optionAnchor } = this.state;
    const { handleChangeValue } = this.props;

    return(
        <div>
            <List component="nav" className={classes.listPosition}>
                <ListItem button aria-haspopup="true" aria-controls="option-menu" aria-label="Option" onClick={this.handleClickOptionListItem}>
                    <ListItemText primary={roomClasses[roomClass]}/><ArrowDropDown />
                </ListItem>
            </List>
            <Menu id="option-menu" anchorEl={optionAnchor} open={Boolean(optionAnchor)} onClose={this.handleCloseOption} >
                {roomClasses.map((type, index) => (
                    <MenuItem id={index} key={type} selected={index === roomClass} onClick={handleChangeValue("roomClass")}>
                        {type}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
  }
}

RoomClass.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RoomClass)
