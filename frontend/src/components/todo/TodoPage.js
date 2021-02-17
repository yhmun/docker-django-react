import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { readTodosRequest, deleteTodoRequest } from '../../redux/todo/thunks';
import { markTodoAsCompleted } from '../../redux/todo/actions';
import CreateTodoForm from './CreateTodoForm';
import TodoList from './TodoList';

class TodoPage extends Component {
  componentDidMount() {
    const { startLoadingTodos } = this.props;
    startLoadingTodos();
  }

  render() {
    const { todos = [], onDeleteTodo, onCompleteTodo, isReadingTodos } = this.props;

    const loading = (
      <Row>
        <Col>
          <h4>Loading ....</h4>
        </Col>
      </Row>
    );

    const content = (
      <Fragment>
        <Row>
          <Col>
            <CreateTodoForm />
          </Col>
        </Row>
        <Row 
          style={{ marginTop: "18px" }}>
          <Col>
            <TodoList 
              todos={todos}
              onDeleteTodo={onDeleteTodo}
              onCompleteTodo={onCompleteTodo}
            />
          </Col>
        </Row>
      </Fragment>
    );

    return (
      <Container>
        <Row>
          <Col>
            <h3>Todo List</h3>
            <hr/>
          </Col>
        </Row>
        {isReadingTodos ? loading : content}
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  isReadingTodos: state.isReadingTodos,
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  startLoadingTodos: () => dispatch(readTodosRequest()),
  onDeleteTodo: id => dispatch(deleteTodoRequest(id)),
  onCompleteTodo: text => dispatch(markTodoAsCompleted(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);
