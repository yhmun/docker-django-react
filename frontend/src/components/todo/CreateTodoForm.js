import { Component, Fragment } from 'react';
import { connect  } from 'react-redux';
import { createTodoRequest } from '../../redux/todo/thunks';
import { withStyles } from '@material-ui/core/styles';
import { 
  Button,
  TextField, 
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';

const useStyles = (theme) => ({
  button: {
    margin: theme.spacing(2),
  },
});

class CreateTodoForm extends Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Button
          variant="outlined"
          color="primary"
          size="small"
          startIcon={<CreateIcon />}
          className={classes.button}
          onClick={this.handleOpen}
        >
          Create
        </Button>
        <Dialog 
          fullWidth={false}
          maxWidth="md"
          open={this.state.open} 
          onClose={this.handleClose}
          aria-labelledby="create todo form"
        >
          <DialogTitle>
            Create Todo
          </DialogTitle>
          <DialogContent>
            <form 
              className={classes.form} 
              noValidate
            >
              <TextField
                id="name"
                label="Title"
              />
              <TextField 
                id="description"
                label="Description" 
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button 
              onClick={this.handleClose} 
            >
              Cancel
            </Button>
            <Button 
              onClick={this.handleClose} 
              color="primary"
            >
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onCreateTodo: text => dispatch(createTodoRequest(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(useStyles)(CreateTodoForm)
);

/*
import React, { Component } from 'react';
import { Form, Input, Button } from 'reactstrap';

              <TextField 
                label="Title" 
                defaultValue="Hello World" 
              />



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
        onSubmit={this.onCreateTodo}
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
          style={{ minWidth: "118px", marginLeft: "8px" }}
        >
          Create
        </Button>
      </Form>
    );
  }
}


*/