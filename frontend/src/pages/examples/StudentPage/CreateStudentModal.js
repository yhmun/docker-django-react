import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import { Divider, Button, IconButton } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import EditIcon from '@material-ui/icons/Edit';

const styles = (theme) => ({
  root: {
    display: 'inline',
  },
  footer: {
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(1),
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
    const { classes, isCreate } = this.props;
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
          <DialogContent>          
          </DialogContent>
          <DialogActions className={classes.footer}>
            <Button onClick={this.handleToggle}>
              Cancel
            </Button>
            <Button color="primary" onClick={this.handleConfirm}>
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(CreateStudentModal);
