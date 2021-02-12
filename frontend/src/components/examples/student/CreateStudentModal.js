import React, { Component, Fragment } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

class CreateStudentModal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };

  render() {
    const create = this.props.create;
    let title;
    let button;
    if (create) {
      title = "Create Student";
      button = (
        <Button
          className="float-right"
          color="primary"
          style={{ minWidth: "20px" }}
          onClick={this.toggle}
        >
          Create
        </Button>
      );
    } else {
      title = "Edit Student";
      button = (
        <Button 
          color="info"
          onClick={this.toggle
        }>
          Edit
        </Button>
      );
    }

    return (
      <Fragment>
        {button}
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle}>
            {title}
          </ModalHeader>
          <ModalBody>

          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default CreateStudentModal;
