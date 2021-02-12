import React, { Component, Fragment } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import CreateStudentForm from './CreateStudentForm';

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
          size="sm"
          style={{ width: "60px" }}          
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
          size="sm"
          style={{ width: "60px" }}
          onClick={this.toggle}
        >
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
            <CreateStudentForm 
              student={this.props.student}
              resetState={this.props.resetState}
              toggle={this.toggle}                            
            />
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default CreateStudentModal;
