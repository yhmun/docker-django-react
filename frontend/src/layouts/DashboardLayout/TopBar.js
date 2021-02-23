import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';
import { Logo } from '../../components';

const styles = {
  root: {
    // border: '1px solid blue',
  },
  toolbar: {
    // border: '1px solid red',
  },
};

class TopBar extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <AppBar className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <RouterLink to="/">
            <Logo />
          </RouterLink>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(TopBar);
