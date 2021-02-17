import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import CreateTodoForm from './CreateTodoForm';
import TodoList from './TodoList';

class TodoPage extends Component {  
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h3>Todo List</h3>
            <hr/>
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateTodoForm />
          </Col>
        </Row>
        <Row 
          style={{ marginTop: "18px" }}>
          <Col>
            <TodoList />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TodoPage;
