import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { drawerWidth } from '../../../components'
import {
  Hidden,  
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  List,
  Typography,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const styles = (theme) => ({
  root: {
    width: drawerWidth,
    flexShrink: 0,
  },
  mobileDrawer: {
    width: drawerWidth
  },
  desktopDrawer: {
    width: drawerWidth,
    // top: 64,
    // height: 'calc(100% - 64px)'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },  
});

class NavBar extends React.Component {
  render() {
    const { 
      classes,
      route,
      mobileDrawerOpen,
      desktopDrawerOpen,
      handleMobileDrawerToggle,
      handleDesktopDrawerToggle,
    } = this.props;

    return (
      <div>
        <Hidden smUp>
          <Drawer
            classes={{ paper: classes.root }}
            variant="temporary"
            anchor="left"
            open={mobileDrawerOpen}
            onClose={handleMobileDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
          </Drawer>
        </Hidden>
        <Hidden xsDown>
          <Drawer
            classes={{ paper: classes.root }}
            variant="persistent"
            anchor="left"
            open={desktopDrawerOpen}
          >
          </Drawer>
        </Hidden>
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);

