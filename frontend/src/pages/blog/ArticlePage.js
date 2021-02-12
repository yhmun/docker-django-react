import React, { Component, Fragment } from 'react';
import axios from 'axios';
import NotFoundPage from './../NotFoundPage';
import ArticleList from '../../components/blog/ArticleList';

class ArticlePage extends Component {
  state = {
    article: null,
    loading: true,
  };

  componentDidMount() {
    this.getArticle(this.props.match.params.id)
  }

  getArticle = (id) => {
    axios.get(`${process.env.REACT_APP_HOST}/api/articles/${id}`)
      .then((response) => {
        this.setState({ article: response.data });
      })
      .catch((error) => {
        //console.log(error);
      })
      .then(() => {
        this.setState({ loading: false });
      });
  }
  
  render() {
    const article = this.state.article;

    if (this.state.loading)
      return <Fragment></Fragment>
    else if (!article) 
      return <NotFoundPage />
    return (
        <Fragment>
          <h3>{article.title}</h3>
          <br/>
          <pre>{article.content}</pre>
          <hr/>
          <ArticleList
            exclude_id={article.id}
          />
        </Fragment>
    );
  }
}

export default ArticlePage;
