import React, { Component } from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ArticleList extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    this.resetState();
  }

  resetState = () => {
    this.getArticles();
  };

  getArticles = () => {
    axios.get(`${process.env.REACT_APP_HOST}/api/articles/?ordering=id`)
      .then((response) => {
        this.setState({ articles: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  render() {
    let articles = this.state.articles;
    if (this.props.exclude_id)
      articles = articles.filter(article => article.id !== this.props.exclude_id)

    return (
      <ListGroup flush>
        {articles.map((article, key) => (
        <Link           
          key={key}
          to={`/blog/articles/${article.id}`}
          style={{color: 'white'}}
        >
          <ListGroupItem action>
            <ListGroupItemHeading>
              {article.title}
            </ListGroupItemHeading>
            <ListGroupItemText>
              {article.content.substring(0, 150)} ...
            </ListGroupItemText>
          </ListGroupItem>
        </Link>
        ))}
      </ListGroup>
    );
  }
}

export default ArticleList;
