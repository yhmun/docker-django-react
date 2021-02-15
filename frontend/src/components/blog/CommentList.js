import React, { Component } from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import axios from 'axios';

class CommentList extends Component {
  state = {
    comments: []
  };

  componentDidMount() {
    this.getComments(this.props.article_id);
  }

  componentDidUpdate(prevProp) {
    if (prevProp.article_id !== this.props.article_id) 
      this.getComments(this.props.article_id);
  }

  getComments(article_id) {
    if (!article_id)
      return;
    this.setState({ comments: [] });
    axios.get(`${process.env.REACT_APP_HOST}/api/comments/?article=${article_id}`)
      .then((response) => {
        this.setState({ comments: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const comments = this.state.comments;
    return (
      <ListGroup flush>
        {comments.map((comment, key) => (
          <ListGroupItem 
            key={key}>
            <ListGroupItemHeading>
              {comment.author}
            </ListGroupItemHeading>
            <ListGroupItemText>
              {comment.content}
            </ListGroupItemText>
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  }
}

export default CommentList;
