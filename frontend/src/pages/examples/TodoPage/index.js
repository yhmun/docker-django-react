import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent, CardActions, Divider, Tabs, Tab } from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { API_URL_TODO } from '../../../store/urls';
import { requestReadObjects, requestUpdateObject, requestDeleteObject } from '../../../store/thunks';
import { getObjects, getObjectsReading } from '../../../store/selectors';
import { getCompletedTodos, getIncompletedTodos } from '../../../store/selectors/todo';
import { Page, Progress } from '../../../components';
import TodoList from './TodoList';
import CreateTodoForm from './CreateTodoForm';

const useStyles = (theme) => ({
  root: {
    padding: theme.spacing(1),
  },
  content: {
    minHeight: 200,
  },
  footer: {
    //width="100%"
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

class TodoPage extends React.Component {
  state = {
    tab: 0
  };

  componentDidMount() {
    const { loadTodos } = this.props;
    if (loadTodos)
      loadTodos();
  }

  handleTabChange = (event, value) => {
    this.setState({
      tab: value
    });
  };

  render() {
    const { 
      classes, 
      isLoading = false 
    } = this.props;
    let todos = []
    switch (this.state.tab) {
      case 1:
        todos = this.props.incompletedTodos;
        break;
      case 2:
        todos = this.props.completedTodos;
        break;
      default:
        todos = this.props.todos;
    }

    return (
      <Page
        className={classes.root}
        title="Todo List"
      >
        <Card>
          <CardHeader title="Todos" />
          <Divider />
          <Tabs
            value={this.state.tab}
            onChange={this.handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            aria-label="todo list tabs"
            >
              <Tab label="All" />              
              <Tab label="Incompleted" />
              <Tab label="Completed" />
          </Tabs>
          <CardContent className={classes.content}>
            {isLoading ? (
              <Progress className={classes.content} />
            ) : (
              <TodoList 
                todos={todos}
                handleDelete={this.props.handleDelete}
                handleComplete={this.props.handleComplete}
              />
            )}
          </CardContent>
          <CardActions className={classes.footer}>
            <CreateTodoForm />
          </CardActions>
        </Card>
      </Page>
    );
  }
}

const mapStateToProps = (state) => ({
  incompletedTodos: getIncompletedTodos(state),
  completedTodos: getCompletedTodos(state),
  todos: getObjects(state),
  isLoading: getObjectsReading(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadTodos: () => dispatch(requestReadObjects(API_URL_TODO)),
  handleDelete: id => dispatch(requestDeleteObject(API_URL_TODO, id)),
  handleComplete: id => {
    const data = {
      completed: true,
    };
    dispatch(requestUpdateObject(API_URL_TODO, id, data))
  },
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(useStyles),
) (TodoPage);

/*
              
                <Box 

                >
                  
                </Box>
*/
