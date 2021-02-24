import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Dialog, DialogTitle } from '@material-ui/core';
import { Divider, Button, IconButton } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import EditIcon from '@material-ui/icons/Edit';
import CreateStudentForm from './CreateStudentForm';

const styles = (theme) => ({
  root: {
    display: 'inline',
  },
});

class CreateStudentModal extends React.Component {
  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState(previous => ({
      open: !previous.open
    }));
  };

  handleConfirm = () => {
    const { id, handleDelete } = this.props;
    handleDelete(id);
    this.handleToggle();
  }

  render() {
    const { classes, isCreate, student } = this.props;
    let title;
    let button;
    if (isCreate) {
      title = 'Create Student';
      button = (
        <Button
          variant="outlined"
          color="primary"
          size="small"
          startIcon={<CreateIcon />}
          onClick={this.handleToggle}
        >
          Create
        </Button>        
      )
    } else {
      title = 'Edit Student';
      button = (
        <IconButton 
          color="secondary" 
          edge="end" 
          aria-label="edit"
          onClick={this.handleToggle}
        >
          <EditIcon />
        </IconButton>
      );
    }
    return (
      <div className={classes.root}>
        {button}
        <Dialog
          fullWidth={false}
          maxWidth="md"
          open={this.state.open} 
          onClose={this.handleToggle}
        >
          <DialogTitle>{title}</DialogTitle>
          <Divider />
          <CreateStudentForm 
            student={student}
            handleToggle={this.handleToggle}
          />
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(CreateStudentModal);
