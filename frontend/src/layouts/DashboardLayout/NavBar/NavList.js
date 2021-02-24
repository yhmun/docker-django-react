import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';
import BlockIcon from '@material-ui/icons/Block';
import CloudOffIcon from '@material-ui/icons/CloudOff';
import ListIcon from '@material-ui/icons/List';
import PeopleIcon from '@material-ui/icons/People';

const items = [
  {
    href: '/app/home',
    icon: HomeIcon,
    title: 'Home',
  },
  {
    href: '/app/examples/todos',
    icon: ListIcon,
    title: 'Todos',
  },  
  {
    href: '/app/examples/students',
    icon: PeopleIcon,
    title: 'Students',
  },
  {
    href: '/app/about',
    icon: InfoIcon,
    title: 'About',
  },
  {
    href: '/app/forbidden',
    icon: BlockIcon,
    title: 'Forbidden',
  },
  {
    href: '/app/notfound',
    icon: CloudOffIcon,
    title: 'Not Found',
  },
];

const styles = {
  root: {
    // border: '1px solid blue',
  },
  toolbar: {
    // border: '1px solid red',
  },
};

class NavList extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <List className={classes.root}>
        {items.map((item, idx) => (
          <RouterLink
            key={idx}
            to={item.href}
            style={{ color: 'inherit', textDecoration: 'inherit' }}
          >
            <ListItem button>
              <ListItemIcon>
                {<item.icon />}
              </ListItemIcon>
              <ListItemText primary={item.title}/>
            </ListItem>
          </RouterLink>
        ))}
      </List>
    );
  }
}

export default withStyles(styles)(NavList);
