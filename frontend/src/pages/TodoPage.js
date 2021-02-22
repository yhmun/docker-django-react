import { Component } from 'react';
import { connect } from 'react-redux';
import { getTodos, getTodosReading } from '../redux/todo/selectors';
import { readTodosRequest, deleteTodoRequest, completeTodoRequest } from '../redux/todo/thunks';
import { withStyles } from '@material-ui/core/styles';
import { 
  Box,
  Card, 
  CardContent,
  CardActions,
  Tabs,
  Tab,
  CircularProgress,
} from '@material-ui/core';
import TodoList from '../components/todo/TodoList';
import CreateTodoForm from '../components/todo/CreateTodoForm';

const useStyles = (theme) => ({
  root: {
    width: '100%',
  },
  button: {
    margin: theme.spacing(2),
  },
});

class TodoPage extends Component {
  state = {
    tab: 0
  };

  componentDidMount() {
    const { setTitle, loadTodos } = this.props;
    if (setTitle)
      setTitle('Todo List');
    if (loadTodos)
    loadTodos();
  }

  handleTabChange = (event, value) => {
    this.setState({
      tab: value
    });
  };

  render() {
    const { classes, todos = [], isReading } = this.props;

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
          {isReading ? (
            <CardContent>
              <Box 
                py={6}
                width="100%"
                display="flex" 
                justifyContent="center"
              >
                <CircularProgress disableShrink />
              </Box>
            </CardContent>
          ) : (
            <Box>
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
                  <CreateTodoForm />
                </Box>
              </CardActions> 
            </Box>
          )}
        </Card>
      </Box>
    );
  }
}

const mapStateToProps = (state) => ({
  isReading: getTodosReading(state),
  todos: getTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadTodos: () => dispatch(readTodosRequest()),
  handleDelete: id => dispatch(deleteTodoRequest(id)),
  handleComplete: id => dispatch(completeTodoRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(useStyles)(TodoPage)
);
