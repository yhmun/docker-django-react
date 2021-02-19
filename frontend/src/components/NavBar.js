import clsx from 'clsx';
import { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { drawerWidth } from '../constants/styles';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ListIcon from '@material-ui/icons/List';
import { 
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Hidden,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

const useStyles = (theme) => ({
  appBar: {
    [theme.breakpoints.up('sm')]: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    }
  },
  appBarShift: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,  
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  mobileMenuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
});

class NavBar extends Component {
  state = {
    title: 'Learning Django, React, and Material-UI',
    mobildDrawerOpen: false,
  };

  items = [
    { to: '/', icon: <HomeIcon />, text: 'Home' },
    { to: '/todos', icon: <ListIcon />, text: 'Todo' },    
    { to: '/about', icon: <InfoIcon />, text: 'About' },
  ];

  handleMobileDrawerToggle = (event) => {
    if (event.type === 'keydown' 
        && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    this.setState({ mobildDrawerOpen: !this.state.mobildDrawerOpen });
  }

  render() {
    const { classes, title, drawerOpen, handleDrawerToggle } = this.props;

    const drawer = (
      <Fragment>
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {this.items.map((item, idx) => (
            <Link
              key={idx}
              to={item.to}
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              <ListItem button>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.text} 
                />
              </ListItem>
            </Link>
          ))}
        </List>
      </Fragment>
    );

    return (
      <Fragment>
        <AppBar 
          position="fixed" 
          className={clsx(classes.appBar, {
            [classes.appBarShift]: drawerOpen,
          })}
        >
          <Toolbar>
            <Hidden smUp implementation="css">
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleMobileDrawerToggle}
                className={classes.mobileMenuButton}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Hidden xsDown implementation="css">
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerToggle}
                className={clsx(classes.menuButton, {
                  [classes.hide]: false,
                })}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Typography 
              variant="h6" 
              noWrap
            >
              {title}
            </Typography>
          </Toolbar>
        </AppBar>
        <nav 
          aria-label="drawer"
          className={clsx({
            [classes.drawer]: drawerOpen}
          )}
        >
          <Hidden smUp implementation="css">
            <Drawer 
              variant="temporary"
              anchor="left"
              open={this.state.mobildDrawerOpen} 
              onClose={this.handleMobileDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              <div 
                role="presentation"
                onClick={this.handleMobileDrawerToggle}
                onKeyDown={this.handleMobileDrawerToggle}
              >
                {drawer}
              </div>
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              variant="persistent"
              open={drawerOpen}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
      </Fragment>
    );
  }
}

export default withStyles(useStyles)(NavBar);
