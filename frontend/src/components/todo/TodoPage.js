import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { 
  readTodosRequest, 
  deleteTodoRequest, 
  completeTodoRequest
} from '../../redux/todo/thunks';
import CreateTodoForm from './CreateTodoForm';
import TodoList from './TodoList';

class TodoPage extends Component {
  componentDidMount() {
    const { startReadingTodos } = this.props;
    startReadingTodos();
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
  startReadingTodos: () => dispatch(readTodosRequest()),
  onDeleteTodo: id => dispatch(deleteTodoRequest(id)),
  onCompleteTodo: id => dispatch(completeTodoRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);
