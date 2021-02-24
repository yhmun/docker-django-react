import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { drawerWidth } from '../../../components'
import { Hidden, Drawer, Divider, IconButton } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import User from './User';
import NavList from './NavList';

const styles = (theme) => ({
  root: {
    width: drawerWidth,
    // border: '1px solid blue',
  },
  header: {
    height: 64,
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    justifyContent: 'flex-end',
    // border: '1px solid red',
  },
});

class NavBar extends React.Component {
  render() {
    const { 
      classes,
      mobileDrawerOpen,
      desktopDrawerOpen,
      handleMobileDrawerToggle,
      handleDesktopDrawerToggle,
    } = this.props;

    return (
      <nav aria-label="drawer">
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
            <div 
                role="presentation"
                onClick={handleMobileDrawerToggle}
                onKeyDown={handleMobileDrawerToggle}
            >
              <Divider />
              <User />
              <Divider />
              <NavList />
            </div>
          </Drawer>
        </Hidden>
        <Hidden xsDown>
          <Drawer
            classes={{ paper: classes.root }}
            variant="persistent"
            anchor="left"
            open={desktopDrawerOpen}
          >
            <div className={classes.header}>
              <IconButton onClick={handleDesktopDrawerToggle}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <User />
            <Divider />
            <NavList />
          </Drawer>
        </Hidden>
      </nav>
    );
  }
}

export default withStyles(styles)(NavBar);
