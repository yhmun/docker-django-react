import React, { Component, Fragment } from 'react';
import axios from 'axios';
import NotFoundPage from './../NotFoundPage';
import ArticleList from '../../components/blog/ArticleList';
import CommentList from '../../components/blog/CommentList';
import UpvoteSection from '../../components/blog/UpvoteSection';
import AddCommentForm from '../../components/blog/AddCommentForm';

class ArticlePage extends Component {
  state = {
    article: null,
    loading: true,
  };

  componentDidMount() {
    this.resetState();
  }

  componentDidUpdate(prevProp) {
    if (prevProp.match.params.id !== this.props.match.params.id) 
      this.resetState();
  }

  resetState = () => {
    const id = this.props.match.params.id;
    this.getArticle(id);
  };

  getArticle = (id) => {
    axios.get(`${process.env.REACT_APP_HOST}/api/articles/${id}`)
      .then((response) => {
        this.setState({ article: response.data });
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        this.setState({ loading: false });
      });
  };
  
  render() {
    const article = this.state.article;

    if (this.state.loading)
      return <Fragment></Fragment>
    else if (!article)
      return <NotFoundPage />
    return (
        <Fragment>
          <h3>{article.title}</h3>
          <UpvoteSection 
            article={article}
          />
          <br/>
          <pre>{article.content}</pre>
          <hr/>
          <br/>
          <h4>Comments</h4>
          <br/>
          <CommentList 
            article_id={article.id}
          />
          <hr/>
          <br/>
          <h4>Add a Comment</h4>
          <AddCommentForm 
            article_id={article.id}
          />
          <hr/>
          <br/>
          <h4>Other Articles:</h4>
          <br/>
          <ArticleList
            exclude_id={article.id}
          />
        </Fragment>
    );
  }
}

export default ArticlePage;
