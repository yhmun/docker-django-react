import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { DialogContent, DialogActions, Button, TextField } from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { API_URL_STUDENT } from '../../../store/urls';
import { requestCreateObject, requestUpdateObject } from '../../../store/thunks';

const styles = (theme) => ({
  root: {

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

class CreateStudentForm extends React.Component {
  state = {
    id: 0,
    name: '',
    email: '',
    document: '',
    phone: '',
  };

  componentDidMount() {
    if (this.props.student) {
      const { id, name, document, email, phone } = this.props.student;
      this.setState({ id, name, document, email, phone });
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    const { handleCreate, handleUpdate, handleToggle } = this.props;
    event.preventDefault();
    if (this.props.student) {
      handleUpdate(this.state);
    } else {
      handleCreate(this.state);
    }
    handleToggle();
  }

  render() {
    const { classes, handleToggle } = this.props;

    return (
      <div className={classes.root}>
        <DialogContent>
          <form className={classes.form}>
            <TextField 
              fullWidth
              id="name" 
              label="Name" 
              variant="outlined" 
              type="text"
              className={classes.margin} 
              value={this.state.name}
              onChange={this.handleChange}
            />
            <TextField 
              fullWidth
              id="email" 
              label="Email" 
              type="email"
              variant="outlined" 
              className={classes.margin} 
              value={this.state.email}
              onChange={this.handleChange}
            />
            <TextField 
              fullWidth
              id="document" 
              label="Document" 
              type="text"
              variant="outlined" 
              className={classes.margin} 
              value={this.state.document}
              onChange={this.handleChange}
            />
            <TextField 
              fullWidth
              id="phone" 
              label="Phone" 
              type="text"
              variant="outlined" 
              className={classes.margin} 
              value={this.state.phone}
              onChange={this.handleChange}
            />
          </form>
        </DialogContent>
        <DialogActions className={classes.footer}>
          <Button onClick={handleToggle}>
            Cancel
          </Button>
          <Button color="primary" onClick={this.handleSubmit}>
            Submit
          </Button>
        </DialogActions>
      </div>      
    );
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  handleCreate: (data) => {
    dispatch(requestCreateObject(API_URL_STUDENT, data))
  },
  handleUpdate: (data) => {
    dispatch(requestUpdateObject(API_URL_STUDENT, data.id, data))
  },
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles),
) (CreateStudentForm);
