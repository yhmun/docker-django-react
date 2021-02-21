import { Component } from 'react';
import { connect } from 'react-redux';
import { 
  readTodosRequest, 
  deleteTodoRequest, 
  completeTodoRequest
} from '../redux/todo/thunks';
import { withStyles } from '@material-ui/core/styles';
import { 
  Box,
  Card, 
  CardContent,
  
  CardHeader,
  CardActionArea,
  CardActions,
  CardMedia,

  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Checkbox,

  Tabs,
  Tab,
  Typography,
  Button,
} from '@material-ui/core';
import TodoList from '../components/todo/TodoList';

const useStyles = (theme) => ({
  root: {
    width: '100%',
  },
});

class TodoPage extends Component {
  state = {
    tab: 0
  };

  componentDidMount() {
    const { setTitle, startReadingTodos } = this.props;
    if (setTitle)
      setTitle('Todo List');
    if (startReadingTodos)
      startReadingTodos();
  }

  handleTabChange = (event, value) => {
    this.setState({
      tab: value
    });
  };

  render() {
    const { classes, todos = [] } = this.props;
    // isReadingTodos, 

    return (
      <Box className={classes.root}>
        <Card>
          <Tabs
              value={this.state.tab}
              onChange={this.handleTabChange}
              indicatorColor="primary"
              textColor="primary"
              aria-label="todo list tabs"
            >
              <Tab label="Completed" />
              <Tab label="Incomplete" />
          </Tabs>
          <CardContent>
            <TodoList 
              todos={todos}
              handleDelete={this.props.handleDelete}
              handleComplete={this.props.handleComplete}
            />
          </CardContent>
          <CardActions>
            <Box 
              width="100%"
              display="flex" 
              justifyContent="flex-end"
            >
              <Button 
                variant="contained" 
                color="primary">
                Create
              </Button>
            </Box>
          </CardActions>
        </Card>
      </Box>
    );
  }
}

const mapStateToProps = (state) => ({
  isReadingTodos: state.isReadingTodos,
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  startReadingTodos: () => dispatch(readTodosRequest()),
  handleDelete: id => dispatch(deleteTodoRequest(id)),
  handleComplete: id => dispatch(completeTodoRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(useStyles)(TodoPage)
);
