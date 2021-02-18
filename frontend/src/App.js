import clsx from 'clsx';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { 
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  Drawer,
  Divider,
  Container,
  Grid,
  Box,
  Link,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const drawerWidth = 240;

const useStyles = (theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appBarSpacer: theme.mixins.toolbar,    
  menuButton: {
    marginRight: 36,
  },  
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  title: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },  
});

function Copyright() {
  return (
    <Typography 
      variant="body2" 
      color="textSecondary" 
      align="center"
    >
      {'Copyright © '}
      <Link 
        color="inherit" 
        href="http://mcodegeeks.com/"
      >
        MCODEGEEKS.COM
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

class App extends Component {
  state = {
    open: false,
    numNotification: 0,
    title: 'Dashboard',
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open, numNotification, title } = this.state;

    return (
      <div 
        className={classes.root}
      >
        <CssBaseline />
        <AppBar 
          position="absolute" 
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              className={clsx(classes.menuButton, {
                [classes.hide]: open
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography 
              variant="h6" 
              color="inherit" 
              noWrap 
              className={classes.title}
            >
              {title}
            </Typography>
            <IconButton 
              color="inherit"
            >
              <Badge 
                badgeContent={numNotification} 
                color="secondary"
              >
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div 
            className={classes.toolbar}
          >
            <IconButton 
              onClick={this.handleDrawerClose}
            >
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
        </Drawer>
        <main 
          className={classes.content}
        >
          <div 
            className={classes.appBarSpacer} 
          />
          <Container 
            maxWidth="lg" 
            className={classes.container}
          >
            <Grid container spacing={3}>
              
            </Grid>
          </Container>
          <Box pt={4}>
            <Copyright />
          </Box>
        </main>
      </div>
    );
  }
}

export default withStyles(useStyles)(App);

/*
import NotFoundPage from './NotFoundPage';
import HomePage from './HomePage';
import TodoPage from './todo/TodoPage';
*/
/*
  <Switch>
    <Route path="/" component={HomePage} exact />
    <Route path="/todos" component={TodoPage} />
    <Route component={NotFoundPage} />
  </Switch>
 */