import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

const examples = [
  {
    title: 'Building Modern Projects with React',
    description: 'Learnig about Redux, Thunk, Selector',
    href: 'https://www.linkedin.com/learning/building-modern-projects-with-react',
    to: '/app/examples/todos', 
  }
];

const useStyles = (theme) => ({
  root: {
    width: '100%',
  },
});

class ExampleList extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <List dense className={classes.root}>
        {examples.map((example, idx) => (
          <ListItem 
            button
            key={idx} 
            component="a"
            href={example.href}
            target="_blank"
          >
            <ListItemText 
              primary={example.title} 
              secondary={example.description}
            />
            <ListItemSecondaryAction>
              <IconButton 
                color="primary" 
                edge="end" 
                aria-label="play"
                component={RouterLink}
                to={example.to}
              >
                <PlayCircleOutlineIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    );
  }
}

export default withStyles(useStyles)(ExampleList);
