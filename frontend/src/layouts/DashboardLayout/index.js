import clsx from 'clsx';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { drawerWidth, renderRoutes } from '../../components';
import NavBar from './NavBar';
import TopBar from './TopBar';

const styles = (theme) => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    overflow: 'hidden',
    // backgroundColor: theme.palette.background.dark,
    border: '1px solid gray',
  },
  wrapper: {
    flex: '1 1 auto',
    display: 'flex',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('sm')]: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    // border: '1px solid yellow',
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
  contentContainer: {
    flex: '1 1 auto',
    display: 'flex',
    overflow: 'hidden',
    // border: '1px solid blue',
  },
  content: {
    height: '100%',
    flex: '1 1 auto',
    overflow: 'auto',
    border: '1px solid red',
  }
});

class DashboardLayout extends React.Component {
  state = {
    mobileDrawerOpen: false,
    desktopDrawerOpen: false,
  };

  handleMobileDrawerToggle = (event) => {
    if (event.type === 'keydown' 
        && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    this.setState({ mobileDrawerOpen: !this.state.mobileDrawerOpen });
  }
  
  handleDesktopDrawerToggle = (event) => {
    if (event.type === 'keydown' 
        && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    this.setState({ desktopDrawerOpen: !this.state.desktopDrawerOpen });
  }

  render() {
    const { classes, route } = this.props;
    const { mobileDrawerOpen, desktopDrawerOpen } = this.state;

    return (
      <div className={classes.root}>
        <TopBar 
          desktopDrawerOpen={desktopDrawerOpen}
          handleMobileDrawerToggle={this.handleMobileDrawerToggle}
          handleDesktopDrawerToggle={this.handleDesktopDrawerToggle}
        />
        <NavBar 
          mobileDrawerOpen={mobileDrawerOpen}
          desktopDrawerOpen={desktopDrawerOpen}
          handleMobileDrawerToggle={this.handleMobileDrawerToggle}
          handleDesktopDrawerToggle={this.handleDesktopDrawerToggle}
        />
        <div className={classes.wrapper}
          className={clsx(classes.wrapper, {
            [classes.shift]: desktopDrawerOpen,
          })}
        >
          <div className={classes.contentContainer}>
            <div className={classes.content}>
              {renderRoutes(route.routes)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(DashboardLayout);
