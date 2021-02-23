import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { renderRoutes } from '../../components';

// import NavBar from './NavBar';
import TopBar from './TopBar';

const styles = {
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    overflow: 'hidden',
    // backgroundColor: theme.palette.background.dark,
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

class DashboardLayout extends React.Component {
  render() {
    const { classes, route } = this.props;

    return (
      <div className={classes.root}>
        <TopBar />
        <div className={classes.wrapper}>
          <div className={classes.contentContainer}>
            <div className={classes.content}>
              {renderRoutes(route.routes)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(DashboardLayout);
