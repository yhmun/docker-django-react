import React, { Component, Fragment } from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';

class UpvoteSection extends Component {
  state = {
    up_votes: this.props.article.up_votes
  }

  componentDidUpdate(prevProp) {
    if (prevProp.article !== this.props.article) 
      this.setState({up_votes: this.props.article.up_votes})
  }

  addUpvote() {
    let article = this.props.article;
    article.up_votes += 1;
    axios.put(`${process.env.REACT_APP_HOST}/api/articles/${article.id}`, article)
      .then(() => {
        this.setState({up_votes: article.up_votes})
      })
      .catch((error) => {
        //console.log(error);
      });
  }

  render() {
    return (
      <Fragment>        
        <p>
          <span>
            <Button 
              color="primary" 
              size="sm"
              onClick={() => this.addUpvote()}
            >Upvote</Button>
          </span>
          &nbsp;&nbsp;This post has been upvoted {this.state.up_votes} times
        </p>
      </Fragment>
    );
  }
}

export default UpvoteSection;
