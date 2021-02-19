import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { CssBaseline, Box } from '@material-ui/core';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TodoPage from './pages/TodoPage';

const useStyles = (theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
});

class App extends Component {
  render() {
    const { classes } = this.props;

    const items = [
      { path: '/about', component: AboutPage },
      { path: '/todos', component: TodoPage },
    ]

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Router>
          <NavBar />
          <main className={classes.content}>
            <div 
              className={classes.toolbar} 
            />
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
            <Box pt={4}>
              <Footer />
            </Box>
          </main>
        </Router>
      </div>
    );
  }
}

export default withStyles(useStyles)(App);
