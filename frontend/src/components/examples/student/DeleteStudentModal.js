import React, { Component, Fragment } from 'react';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';
import axios from 'axios';

class DeleteStudentModal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };

  deleteStudent = (id) => {
    /*
    axios.delete(`${process.env.REACT_APP_HOST}/api/students/${id}`)
      .then((response) => {
        */
        this.props.resetState();
        this.toggle();
        /*
      })
      .catch((error) => {
        console.log(error);
      });
    */
  };

  render() {
    return (
      <Fragment>
        <Button 
          color="danger"
          size="sm"
          style={{ width: "60px" }}
          onClick={this.toggle}
        >
          Delete
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle}>
            Do you really want to delete the student?
          </ModalHeader>
          <ModalFooter>
            <Button 
              style={{ width: "100px" }}
              onClick={this.toggle}
            >
              Cancel
            </Button>
            <Button
              style={{ width: "100px" }}
              color="primary"
              onClick={() => this.deleteStudent(this.props.id)}
            >
              Yes
            </Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}

export default DeleteStudentModal;