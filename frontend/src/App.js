import clsx from 'clsx';
import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { drawerWidth, drawerOpen } from './constants/styles';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TodoPage from './pages/TodoPage';

const routes = [
  { page: HomePage, path: "/", exact: true },
  { page: TodoPage, path: "/todos" },
  { page: AboutPage, path: "/about" },
  { page: NotFoundPage, path: "*" }
];

const useStyles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  container: {
    flex: '1 0 auto',
    display: 'flex',
  },
  main: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
  },
  mainShift: {
    [theme.breakpoints.up('sm')]: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  },
  footer: {
    flexShrink: '0',
    [theme.breakpoints.up('sm')]: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
  },
  footerShift: {
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
    ...theme.mixins.toolbar,
  },
  content: {
    //border: '1px solid red',
    display: 'flex',
    flexGrow: 1,
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2),
    },
  },
});

class App extends Component {
  state = {
    title: '',
    drawerOpen: drawerOpen,
  };

  setTitle = (title) => {
    this.setState({
      title: title
    });
  };

  handleDrawerToggle = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen });    
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <div className={classes.container}>
          <NavBar 
            title={this.state.title}
            drawerOpen={this.state.drawerOpen}
            handleDrawerToggle={this.handleDrawerToggle}
          />
          <main 
            className={clsx(classes.main, {
              [classes.mainShift]: this.state.drawerOpen,
            })}
          >
            <div className={classes.toolbar} />
            <div className={classes.content}>
              <Switch>
                {routes.map((route, idx) => (
                  <Route 
                    key={idx} 
                    path={route.path} 
                    exact={route.exact}
                    children={<route.page  
                      className={classes.content}
                      setTitle={this.setTitle}
                      setContentFlex={this.setContentFlex}
                    />}
                  />
                ))}
              </Switch>
            </div>
          </main>
        </div>
        <footer
          className={clsx(classes.footer, {
            [classes.footerShift]: this.state.drawerOpen,
          })}
        >
          <Footer />
        </footer>
      </div>
    );
  }
}

export default withStyles(useStyles)(App);
