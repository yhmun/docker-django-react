import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import { Divider, Button, IconButton } from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { API_URL_STUDENT } from '../../../store/urls';
import { requestDeleteObject } from '../../../store/thunks';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = (theme) => ({
  root: {

  },
  margin: {
    marginTop: theme.spacing(1),
  },
  footer: {
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
});

class DeleteStudentModal extends React.Component {
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
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <IconButton 
          color="secondary" 
          edge="end" 
          aria-label="delete"
          onClick={this.handleToggle}
        >
          <DeleteIcon />
        </IconButton>
        <Dialog
          fullWidth={false}
          maxWidth="md"
          open={this.state.open} 
          onClose={this.handleToggle}
          aria-labelledby="delete student modal"
        >
          <DialogTitle>Delete Student</DialogTitle>
          <Divider />
          <DialogContent>
            <DialogContentText>
              Do you really want to delete the student?
            </DialogContentText>            
          </DialogContent>
          <DialogActions className={classes.footer}>
            <Button onClick={this.handleToggle}>
              No
            </Button>
            <Button color="primary" onClick={this.handleConfirm}>
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  handleDelete: id => dispatch(requestDeleteObject(API_URL_STUDENT, id)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles),
) (DeleteStudentModal);
