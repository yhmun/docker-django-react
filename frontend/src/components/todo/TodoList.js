import { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { 
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';

const useStyles = (theme) => ({
  root: {
    width: '100%',
  },
  itemText: {
    width: '10px',
  },
});

const StyledListItem = withStyles({
  secondaryAction: {
    paddingRight: 80
  }
})(ListItem);

class TodoList extends Component {
  render() {
    const { classes } = this.props;

    return (
      <List dense className={classes.root}>
        {this.props.todos.map((todo) => (
          <StyledListItem key={todo.id}>
            <ListItemText 
              className={classes.itemText}
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
                    onClick={() => this.props.handleComplete(todo.id)}
                  >
                    <CheckIcon />
                  </IconButton>
                )
              }
              <IconButton 
                color="secondary" 
                edge="end" 
                aria-label="delete"
                onClick={() => this.props.handleDelete(todo.id)}
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

export default withStyles(useStyles)(TodoList);
