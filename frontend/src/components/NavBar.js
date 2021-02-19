import clsx from 'clsx';
import { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ListIcon from '@material-ui/icons/List';
import { 
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Hidden,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

const drawerWidth = 240;

const useStyles = (theme) => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
});

class NavBar extends Component {
  state = {
    title: 'Learning Django, React, and Material-UI',
  };

  render() {
    const { classes, window, drawerOpen, handleDrawerToggle } = this.props;
    const container = window !== undefined ? () => window().document.body : undefined;

    const items = [
      { to: '/', icon: <HomeIcon />, text: 'Home' },
      { to: '/about', icon: <InfoIcon />, text: 'About' },
      { to: '/todos', icon: <InfoIcon />, text: 'Todo' },
    ];

    const drawer = (
      <Fragment>
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {items.map((item, idx) => (
            <Link
              key={idx}
              to={item.to}
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              <ListItem button>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.text} 
                />
              </ListItem>
            </Link>
          ))}
        </List>
      </Fragment>
    );

    return (
      <Fragment>
        <AppBar 
          position="fixed" 
          className={classes.appBar}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography 
              variant="h6" 
              noWrap
            >
              {this.state.title}
            </Typography>
          </Toolbar>
        </AppBar>
        <nav 
          className={classes.drawer} 
          aria-label="drawer"
        >
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor="left"
              open={drawerOpen}
              classes={{
                paper: classes.drawerPaper,
              }}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              variant="permanent"
              open={true}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
      </Fragment>
    );
  }
}

export default withStyles(useStyles)(NavBar);

/*
import { Container, Row, Col } from 'reactstrap';


  render() {
    const links = [
      { 
        name: 'Home', 
        url: '/',
      },
      { 
        name: 'Todos', 
        url: '/todos',
      },
    ];

    return (
      <header className="fixed-top">
        <Container>
          <Row>
            <Col>
              <nav className="navbar navbar-expand navbar-dark">
                <ul className="navbar-nav mr-auto">
                  {links.map((link, key) => (
                    <li 
                      key={key}
                      className="nav-item"
                    >
                      
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </Col>
          </Row>
        </Container>
      </header>
    );
  }
*/
