import React, { Component, Fragment } from 'react';
import { Form, Row, Col, FormGroup, Input, Label, Button } from 'reactstrap';

class NewTodoForm extends Component {
  state = {
    todo: ''
  };

  onCreateTodo = (event) => {
    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <Form
        className="d-flex"
        onSubmit={this.onCreateTodo}        
      >
        <Input 
          className="flex-grow-1"
          type="text" 
          name="todo"
          placeholder="Type your new todo here" 
          value={this.state.todo}
          onChange={this.onChange}
        />
        <Button
          color="primary"
          style={{ width: "150px", marginLeft: "8px" }}
        >
          Create Todo
        </Button>
      </Form>
    );
  }
}

export default NewTodoForm;
