import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { toolbarHeight, renderRoutes } from '../../components';
import TopBar from './TopBar';
import Footer from '../Footer';

const styles = {
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    overflow: 'hidden',
    // backgroundColor: theme.palette.background.default,
    // border: '1px solid gray',
  },
  wrapper: {
    flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    paddingTop: toolbarHeight,
    // [theme.breakpoints.up('lg')]: {
    //   paddingLeft: 256
    // }
    // border: '1px solid yellow',
  },
  contentContainer: {
    flex: '1 1 auto',
    // flexGrow: 1,
    display: 'flex',
    overflow: 'hidden',
    // border: '1px solid blue',
  },
  content: {
    height: '100%',
    flex: '1 1 auto',
    overflow: 'auto',
    // border: '1px solid red',
  },
  footer: {
    flexShrink: 0,
    // border: '1px solid green',
  },
};

class MainLayout extends React.Component {
  render() {
    const { classes, route } = this.props;

    return (
      <div className={classes.root}>
        <TopBar />
        <div className={classes.wrapper}>
          <div className={classes.contentContainer}>
            <main className={classes.content}>
              <Container>
                {renderRoutes(route.routes)}
              </Container>              
            </main>
          </div>
          <footer className={classes.footer}>
            <Footer />
          </footer>          
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(MainLayout);
