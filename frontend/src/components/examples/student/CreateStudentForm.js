import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';

class CreateStudentForm extends Component {
  state = {
    id: 0,
    name: '',
    email: '',
    document: '',
    phone: ''
  };

  componentDidMount() {
    if (this.props.student) {
      const { id, name, document, email, phone } = this.props.student;
      this.setState({ id, name, document, email, phone });
    }
  }

  editStudent = () => {
    console.log('editStudent');
  };

  createStudent = () => {
    console.log('createStudent');
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  defaultIfEmpty = (value) => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form 
        onSubmit={
          this.props.student ? this.editStudent : this.createStudent
        }>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input 
            type="text" 
            name="name" 
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.name)} 
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email:</Label>
          <Input 
            type="text" 
            name="email" 
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.email)} 
          />
        </FormGroup>
        <FormGroup>
          <Label for="document">Document:</Label>
          <Input 
            type="text" 
            name="document" 
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.document)} 
          />
        </FormGroup>
        <FormGroup>
          <Label for="name">Phone:</Label>
          <Input 
            type="text" 
            name="phone" 
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.phone)} 
          />
        </FormGroup>                              
        <Button 
          color="primary"
          style={{ width: "100px" }}>
            Send
        </Button>
      </Form>
    );
  }
}

export default CreateStudentForm;
