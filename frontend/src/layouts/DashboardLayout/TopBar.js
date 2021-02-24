import clsx from 'clsx';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { toolbarHeight, drawerWidth } from '../../components'
import { AppBar, Toolbar, Hidden, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const styles = (theme) => ({
  root: {
    height: toolbarHeight,
    [theme.breakpoints.up('sm')]: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    // border: '1px solid blue',
  },
  shift: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  },
  toolbar: {
    height: toolbarHeight,
    backgroundColor: theme.palette.background.toolbar,
    // border: '1px solid red',
  },
  mobileMenuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  desktopMenuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
});

class TopBar extends React.Component {
  render() {
    const { 
      classes,
      title,
      desktopDrawerOpen,
      handleMobileDrawerToggle,
      handleDesktopDrawerToggle,
    } = this.props;

    return (
      <AppBar 
        className={clsx(classes.root, {
          [classes.shift]: desktopDrawerOpen,
        })}
        position="fixed"
      >
        <Toolbar className={classes.toolbar}>
          <Hidden smUp>
            <IconButton
              className={classes.mobileMenuButton}
              edge="start"
              color="inherit"
              aria-label="open mobile drawer"
              onClick={handleMobileDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Hidden xsDown>
            <IconButton
              className={clsx(classes.desktopMenuButton, {
                [classes.hide]: desktopDrawerOpen,
              })}
              edge="start"
              color="inherit"
              aria-label="open desktop drawer"
              onClick={handleDesktopDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Typography variant="h6" noWrap>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(TopBar);
