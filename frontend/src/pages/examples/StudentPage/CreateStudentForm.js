import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { DialogContent, DialogActions, Button, TextField } from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { addEntity, updateEntity } from '../../../store/examples/studentsSlice';

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
    name: '',
    email: '',
    document: '',
    phone: '',
  };

  componentDidMount() {
    if (this.props.entity) {
      const { name, document, email, phone } = this.props.entity;
      this.setState({ name, document, email, phone });
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
    if (this.props.entity) {
      let entity = { ...this.props.entity };
      entity.name = this.state.name;
      entity.email = this.state.email;
      entity.document = this.state.document;
      entity.phone = this.state.phone;
      handleUpdate(entity);
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
  handleCreate: data => dispatch(addEntity(data)),
  handleUpdate: item => dispatch(updateEntity(item)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles),
) (CreateStudentForm);
