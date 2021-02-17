import React, { Component } from 'react';
import { Form, Input, Button } from 'reactstrap';
import { connect  } from 'react-redux';
import { createTodoRequest } from '../../redux/todo/thunks';

class CreateTodoForm extends Component {
  state = {
    text: ''
  };

  onCreateTodo = (event) => {
    const { todos, onCreateTodo } = this.props;
    const isDuplicated = todos.some((todo) => (
      todo.description === this.state.text
    ));
    if (!isDuplicated) {
      onCreateTodo(this.state.text);
      this.setState({ text: '' });
    }
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
      >
        <Input 
          className="flex-grow-1"
          type="text" 
          name="text"
          placeholder="Type your new todo here" 
          value={this.state.text}
          onChange={this.onChange}
        />
        <Button
          color="primary"
          style={{ minWidth: "120px", marginLeft: "8px" }}
          onClick={this.onCreateTodo}
        >
          Create Todo
        </Button>
      </Form>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onCreateTodo: text => dispatch(createTodoRequest(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTodoForm);
