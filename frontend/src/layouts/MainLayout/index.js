import React from 'react';
import { withStyles } from '@material-ui/core/styles';
// import NavBar from './NavBar';
import TopBar from './TopBar';

const styles = {
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    overflow: 'hidden',
    // backgroundColor: theme.palette.background.default,
    border: '1px solid gray',
  },
  wrapper: {
    flex: '1 1 auto',
    display: 'flex',
    overflow: 'hidden',
    paddingTop: 64,
    // [theme.breakpoints.up('lg')]: {
    //   paddingLeft: 256
    // }
    border: '1px solid yellow',
  },
  contentContainer: {
    flex: '1 1 auto',
    display: 'flex',
    overflow: 'hidden',
    border: '1px solid blue',
  },
  content: {
    height: '100%',
    flex: '1 1 auto',
    overflow: 'auto',
    border: '1px solid red',
  }
};

class MainLayout extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <TopBar />
        <div className={classes.wrapper}>
          <div className={classes.contentContainer}>
            <div className={classes.content}>
              MainLayout
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(MainLayout);
