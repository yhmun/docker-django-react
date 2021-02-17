import React, { Component } from 'react';
import { ListGroup, ListGroupItem, ListGroupItemText, Button } from 'reactstrap';

class TodoList extends Component {
  render() {
    const { todos, onDeleteTodo, onCompleteTodo } = this.props;

    return (
      <ListGroup>
        {todos.map((todo, key) => (
          <ListGroupItem 
            key={key} 
            className="d-flex">
            <ListGroupItemText 
              className="flex-grow-1 overflow-auto">
              {todo.description}
            </ListGroupItemText>
            {todo.completed ? (
                null 
              ) : (
                <Button 
                  color="success"
                  style={{ minWidth: "170px", maxHeight: "40px", marginLeft: "12px" }}
                  onClick={() => onCompleteTodo(todo.description)}
                >
                  Mark As Completed
                </Button>
              )
            }
            <Button 
              color="danger"
              style={{ minWidth: "90px", maxHeight: "40px", marginLeft: "8px" }}
              onClick={() => onDeleteTodo(todo.description)}
            >
              Delete
            </Button>
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  }
}

export default TodoList;
