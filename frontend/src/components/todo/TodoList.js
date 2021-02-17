import React, { Component } from 'react';
import { ListGroup, ListGroupItem, ListGroupItemText, Button } from 'reactstrap';

class TodoList extends Component {
  render() {
    const todos = this.props.todos;
    return (
      <ListGroup>
        {todos.map((todo, key) => (
          <ListGroupItem 
            key={key} 
            className="d-flex">
            <ListGroupItemText 
              className="flex-grow-1 overflow-auto">
              {todo.text}
            </ListGroupItemText>
            <Button 
              color="success"
              style={{ minWidth: "170px", marginLeft: "12px" }}
            >
              Mark As Completed
            </Button>
            <Button 
              color="danger"
              style={{ minWidth: "90px", marginLeft: "8px" }}
            >
              Remove
            </Button>
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  }
}

export default TodoList;
