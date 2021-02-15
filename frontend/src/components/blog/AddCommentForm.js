import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';

class AddCommentForm extends Component {
  state = {
    author: '',
    content: '',
    article: this.props.article_id
  }

  componentDidUpdate(prevProp) {
    if (prevProp.article_id !== this.props.article_id) 
      this.setState({article: this.props.article_id})
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addComment = (event) => {
    event.preventDefault();
    axios.post(`${process.env.REACT_APP_HOST}/api/comments/`, this.state)
      .then(() => {
        console.log(this.state);
     })
     .catch((error) => {
       //console.log(error);
     });    
  };

  render() {
    return (
      <Form 
        onSubmit={this.addComment}
      >
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input 
            type="text" 
            name="author" 
            value={this.state.author} 
            onChange={this.onChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="comment">Comment:</Label>
          <Input 
            type="textarea" 
            name="content" 
            rows="4" 
            cols="50"
            value={this.state.content} 
            onChange={this.onChange}
          />
        </FormGroup>
        <Button color="primary">
          Add Comment
        </Button>
      </Form>
    );
  }
}

export default AddCommentForm;
