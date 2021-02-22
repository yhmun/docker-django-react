import { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getTodos, getTodosReading, getCompletedTodos, getIncompletedTodos } from '../redux/todo/selectors';
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
    const { classes, isReading = false } = this.props;
    var todos = []
    switch (this.state.tab) {
      case 0:
        todos = this.props.incompletedTodos;
        break;
      case 1:
        todos = this.props.completedTodos;
        break;
      default:
        todos = this.props.todos;
    }
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
              <Tab label="Incompleted" />
              <Tab label="Completed" />
              <Tab label="All" />
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
  incompletedTodos: getIncompletedTodos(state),
  completedTodos: getCompletedTodos(state),
  todos: getTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadTodos: () => dispatch(readTodosRequest()),
  handleDelete: id => dispatch(deleteTodoRequest(id)),
  handleComplete: id => dispatch(completeTodoRequest(id)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(useStyles),
) (TodoPage);
