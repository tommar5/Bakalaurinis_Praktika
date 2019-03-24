import React, { Component } from "react"
import { Link as RouterLink } from 'react-router-dom'

import language from '../../../../translations/translation'

import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import AirplanemodeActive from '@material-ui/icons/AirplanemodeActive'
import Hotel from '@material-ui/icons/Hotel'
import Cruise from '@material-ui/icons/DirectionsBoat'
import Car from '@material-ui/icons/DirectionsCar'
import Map from '@material-ui/icons/Map'
import Translate from '@material-ui/icons/Translate'
import Public from '@material-ui/icons/Public'
import AttachMoney from '@material-ui/icons/AttachMoney'
import Link from '@material-ui/core/Link'

const styles = {
    list: {
        width: 250,
        backgroundColore: 'none',
    },
    bottom: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    typography: {
        paddingLeft: 16,
    },
  };

class SideMenu extends Component {
    state = {
        left: false,
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        const { classes } = this.props;

        const sideList = (
            <div className={classes.list}>
                <List>
                    <Typography variant="h6" color="inherit" className={classes.typography}>
                        <b>Go</b>Travel
                    </Typography>
                    <ListItem button>
                        <ListItemIcon>
                            <AirplanemodeActive />
                        </ListItemIcon>
                        <ListItemText primary={'Search flights'} />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <Hotel />
                        </ListItemIcon>
                        <ListItemText primary={'Search hotels'} />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <Cruise />
                        </ListItemIcon>
                        <ListItemText primary={'Search cruises'} />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <Car />
                        </ListItemIcon>
                        <ListItemText primary={'Car Hire'} />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <Map />
                        </ListItemIcon>
                        <ListItemText primary={'Explore map'} />
                    </ListItem>
                </List>
                <List className={classes.bottom}>
                    <Divider />
                    <ListItem button>
                        <ListItemIcon><Translate /></ListItemIcon>
                        <ListItemText primary={'Change language'} />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><Public /></ListItemIcon>
                        <ListItemText primary={'Change country'} />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><AttachMoney /></ListItemIcon>
                        <ListItemText primary={'chance currency'} />
                    </ListItem>
                </List>
            </div>
        );

        return (
            <div style={{ paddingRight: 18}}>
                <IconButton color="inherit" aria-label="Menu" onClick={this.toggleDrawer('left', true)}>
                    <MenuIcon />
                </IconButton>
                <SwipeableDrawer
                open={this.state.left}
                onClose={this.toggleDrawer('left', false)}
                onOpen={this.toggleDrawer('left', true)}
                >
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >
                        {sideList}
                    </div>
                </SwipeableDrawer>
            </div>
        );
    }
}

SideMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideMenu);