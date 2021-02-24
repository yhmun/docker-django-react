import clsx from 'clsx';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { toolbarHeight, drawerWidth, drawerOpen, renderRoutes } from '../../components';
import NavBar from './NavBar';
import TopBar from './TopBar';
import Footer from '../Footer';

const styles = (theme) => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    overflow: 'hidden',
    // backgroundColor: theme.palette.background.dark,
    // border: '1px solid gray',
  },
  wrapper: {
    flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    paddingTop: toolbarHeight,
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
    // flexGrow: 1,
    display: 'flex',  
    overflow: 'hidden',
    // border: '1px solid blue',
  },
  content: {
    height: '100%',
    flex: '1 1 auto',
    overflow: 'auto',
    // border: '1px solid red',
  },
  footer: {
    flexShrink: 0,
    // border: '1px solid green',
  },
});

class DashboardLayout extends React.Component {
  state = {
    mobileDrawerOpen: false,
    desktopDrawerOpen: drawerOpen,
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
            <main className={classes.content}>
              {renderRoutes(route.routes)}
            </main>          
          </div>
          <footer className={classes.footer}>
            <Footer />
          </footer>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(DashboardLayout);
