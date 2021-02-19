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
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
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
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  }
});

class NavBar extends Component {
  state = {
    title: 'Learning Django, React, and Material-UI',
    mobildDrawerOpen: false,
  };

  items = [
    { to: '/', icon: <HomeIcon />, text: 'Home' },
    { to: '/about', icon: <InfoIcon />, text: 'About' },
    { to: '/todos', icon: <InfoIcon />, text: 'Todo' },
  ];

  handleMobileDrawerToggle = (event) => {
    if (event.type === 'keydown' 
        && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    this.setState({ mobildDrawerOpen: !this.state.mobildDrawerOpen });
  }

  render() {
    const { classes, title } = this.props;

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
          className={classes.appBar}
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleMobileDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography 
              variant="h6" 
              noWrap
            >
              {title}
            </Typography>            
          </Toolbar>
        </AppBar>
        <nav 
          className={classes.drawer} 
          aria-label="drawer">
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
              variant="permanent"
              open={true}
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
