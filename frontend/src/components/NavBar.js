import clsx from 'clsx';
import { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';
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
    drawerOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen });    
  };

  render() {
    const { classes, window } = this.props;
    const { title, drawerOpen } = this.state;
    const container = window !== undefined ? () => window().document.body : undefined;
    const drawer = (
      <Fragment>
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
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
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography 
              variant="h6" 
              noWrap
            >
              {title}
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
              onClose={this.handleDrawerToggle}
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
import { Link } from 'react-router-dom';

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
                      <Link 
                        className="nav-link" 
                        to={link.url}
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
