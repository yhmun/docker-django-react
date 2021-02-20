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
    display: 'flex',
    flex: '1 0 auto',    
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    }
  },
  contentShift: {
    [theme.breakpoints.up('sm')]: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }
  },
  footer: {
    flexShrink: '0',
    [theme.breakpoints.up('sm')]: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    }
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
            className={clsx(classes.content, {
              [classes.contentShift]: this.state.drawerOpen,
            })}
          >
            <div className={classes.toolbar} />
            <Switch>
              {routes.map((route, idx) => (
                <Route 
                  key={idx} 
                  path={route.path} 
                  exact={route.exact}
                  children={<route.page setTitle={this.setTitle} />}
                />
              ))}
            </Switch>
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
