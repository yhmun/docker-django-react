import React, { Component, Fragment } from 'react';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';

class TodoPage extends Component {
  render() {
    return (
      <Fragment>
        <h3>Todo List</h3>
        <hr/>
        <TodoList />
        <hr/>
        <NewTodoForm />        
      </Fragment>
    );
  }
}

export default TodoPage;
