import { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';

const styles = (theme) => ({
  root: {
  },
});

const StyledListItem = withStyles({
  secondaryAction: {
    paddingRight: 80
  }
})(ListItem);

class TodoList extends Component {
  render() {
    const { 
      classes, 
      todos,
      handleComplete, 
      handleDelete 
    } = this.props;

    return (
      <List dense className={classes.root}>
        {todos.map((todo) => (
          <StyledListItem key={todo.id}>
            <ListItemText 
              primary={todo.title}
              secondary={todo.description}
            />
            <ListItemSecondaryAction>
              {todo.completed ? (
                  null 
                ) : (
                  <IconButton 
                    color="primary" 
                    edge="end" 
                    aria-label="check"
                    onClick={() => handleComplete(todo.id)}
                  >
                    <CheckIcon />
                  </IconButton>
                )
              }
              <IconButton 
                color="secondary" 
                edge="end" 
                aria-label="delete"
                onClick={() => handleDelete(todo.id)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </StyledListItem>
        ))}
      </List>
    );
  }
}

export default withStyles(styles)(TodoList);
