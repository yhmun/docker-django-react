import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, TextField } from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { API_URL_TODO } from '../../../store/urls';
import { requestCreateObject } from '../../../store/thunks';
import { getObjects } from '../../../store/selectors';
import CreateIcon from '@material-ui/icons/Create';

const styles = (theme) => ({
  root: {
    marginRight: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  form: {

  },
  margin: {
    marginTop: theme.spacing(1),
  },
  footer: {
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
});

class CreateTodoForm extends React.Component {
  state = {
    open: false,
    title: '',
    description: '',
    duplicated: false,
  };

  clear = () => {
    this.setState({
      title: '',
      description: '',
      duplicated: false,
    });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
    if (event.target.id === 'title') {
      this.setState({ duplicated: false });
    }
  };

  handleCancel = () => {
    this.handleClose();
    this.clear();
  }

  handleCreate = () => {
    const { todos, handleCreate } = this.props;
    const isDuplicated = todos.some((todo) => (
      todo.title === this.state.title
    ));
    if (isDuplicated) {
      this.setState({ duplicated: true });
    } else {
      handleCreate(this.state.title, this.state.description);
      this.handleClose();
      this.clear();
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
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
          <DialogTitle>Create Todo</DialogTitle>
          <Divider />
          <DialogContent>
            <form 
              className={classes.form} 
              noValidate
            >
              <TextField 
                fullWidth
                id="title" 
                label="Title" 
                variant="outlined" 
                placeholder="Type title here"
                error={this.state.duplicated}
                helperText={this.state.duplicated ? "Duplicated entry." : ""}
                className={classes.margin} 
                value={this.state.title}
                onChange={this.handleChange}
              />
              <TextField 
                fullWidth
                id="description" 
                label="Description" 
                variant="outlined" 
                placeholder="Type description here"
                className={classes.margin} 
                value={this.state.description}
                onChange={this.handleChange}
              />
            </form>
          </DialogContent>
          <DialogActions className={classes.footer}>
            <Button 
              onClick={this.handleCancel} 
            >
              Cancel
            </Button>
            <Button 
              color="primary"
              onClick={this.handleCreate}
            >
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: getObjects(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleCreate: (title, description) => {
    const data = {
      title: title,
      description: description,
    };
    dispatch(requestCreateObject(API_URL_TODO, data))
  },
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles),
) (CreateTodoForm);
