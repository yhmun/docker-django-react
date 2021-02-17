import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

class TodoList extends Component {
  render() {
    const todos = [{text: 'Test'}]

    return (
      <ListGroup>
        {todos.map((todo, key) => (
          <ListGroupItem 
            key={key}
          >
            {todo.text}
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  }
}

export default TodoList;
