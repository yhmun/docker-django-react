import clsx from 'clsx';
import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { CssBaseline, Box } from '@material-ui/core';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TodoPage from './pages/TodoPage';

const drawerWidth = 240;

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
  },
  footer: {
    flexShrink: '0',
    textAlign: 'right',
    paddingTop: '0.5em',
    paddingBottom: '0.5em',
    backgroundColor: 'silver',
  },
  drawerOpen: {
    marginLeft: drawerWidth,
  },
});

class App extends Component {
  state = {
    drawerOpen: false,
  }

  handleDrawerToggle = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen });    
  };
  
  render() {
    const { classes } = this.props;
    const items = [
      { path: '/about', component: AboutPage },
      { path: '/todos', component: TodoPage },
    ]

    console.log(this.state.drawerOpen);
    return (
      <div className={classes.root}>
        <CssBaseline />        
        <div className={classes.container}>
          <NavBar 
            drawerOpen={this.state.drawerOpen}
            handleDrawerToggle={this.handleDrawerToggle}
          />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Switch>
              <Route 
                path="/" 
                component={HomePage} 
                exact
              />
              {items.map((item, idx) => (
                <Route 
                  key={idx}
                  path={item.path}
                  component={item.component}
                />
              ))}
              <Route 
                component={NotFoundPage}
              />
            </Switch>
          </main>
        </div>
        <footer 
          className={clsx(classes.footer, {
            [classes.drawerOpen]: this.state.drawerOpen,
          })}
        >
          <Footer />
        </footer>
      </div>
    );
  }
}

export default withStyles(useStyles)(App);
