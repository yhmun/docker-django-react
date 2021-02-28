import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent, CardActions, Divider, Tabs, Tab } from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { selectStatus, selectTodos, selectIncompletedTodos, selectCompletedTodos } from '../../../store/examples/todosSlice';
import { loadEntities, removeEntity, updateEntity } from '../../../store/examples/todosSlice';
import { Page, Progress } from '../../../components';
import TodoList from './TodoList';
import CreateTodoForm from './CreateTodoForm';

const styles = (theme) => ({
  root: {
    padding: theme.spacing(1),
  },
  content: {
    minHeight: 200,
  },
  footer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

class TodoPage extends React.Component {
  state = {
    tab: 0
  };

  componentDidMount() {
    const { loadEntities } = this.props;
    loadEntities();
  }

  handleTabChange = (event, value) => {
    this.setState({
      tab: value
    });
  };

  render() {
    const { classes, status, handleDelete, handleComplete } = this.props;
    let todos = [];
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
          <Divider />
          <CardContent className={classes.content}>
            {status === 'loading' ? (
              <Progress className={classes.content} />
            ) : (
              <TodoList 
                todos={todos}
                handleDelete={handleDelete}
                handleComplete={handleComplete}
              />
            )}
          </CardContent>
          <Divider />
          <CardActions className={classes.footer}>
            <CreateTodoForm />
          </CardActions>
        </Card>
      </Page>
    );
  }
}

const mapStateToProps = (state) => ({
  status: selectStatus(state),
  todos: selectTodos(state),
  incompletedTodos: selectIncompletedTodos(state),
  completedTodos: selectCompletedTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadEntities: () => dispatch(loadEntities()),  
  handleDelete: (id) => dispatch(removeEntity(id)),  
  handleComplete: (id) => {
    const data = { completed: true};
    dispatch(updateEntity(id, data));
  },
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles),
) (TodoPage);
