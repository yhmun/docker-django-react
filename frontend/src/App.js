import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

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

    return (
      <div className={classes.root}>
        <CssBaseline />
        <NavBar />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Router>
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route component={NotFoundPage} />
            </Switch>
          </Router>
        </main>
      </div>
    );
  }
}

export default withStyles(useStyles)(App);
