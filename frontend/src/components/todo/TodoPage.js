import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { loadTodosRequest } from '../../redux/todo/thunks';
import { removeTodo, markTodoAsCompleted } from '../../redux/todo/actions';
import CreateTodoForm from './CreateTodoForm';
import TodoList from './TodoList';

class TodoPage extends Component {
  componentDidMount() {
    const { startLoadingTodos } = this.props;
    startLoadingTodos();
  }

  render() {
    const { todos = [], onRemoveTodo, onCompleteTodo, isLoadingTodos } = this.props;

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
              onRemoveTodo={onRemoveTodo}
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
        {isLoadingTodos ? loading : content}
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoadingTodos: state.isLoadingTodos,
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  startLoadingTodos: () => dispatch(loadTodosRequest()),
  onRemoveTodo: text => dispatch(removeTodo(text)),
  onCompleteTodo: text => dispatch(markTodoAsCompleted(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);
