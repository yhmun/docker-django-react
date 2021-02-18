import { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';

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
          <HomePage />
        </main>
      </div>
    );
  }
}

export default withStyles(useStyles)(App);

/*
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
 */
