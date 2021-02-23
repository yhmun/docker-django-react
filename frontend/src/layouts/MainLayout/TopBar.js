import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';

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
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(TopBar);
