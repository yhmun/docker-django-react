import React, { Component, Fragment } from 'react';
import ArticleList from '../../components/blog/ArticleList';

class ArticleListPage extends Component {
  render() {
    return (
      <Fragment>
        <h2>Articles</h2>
        <ArticleList />
      </Fragment>
    );
  }
}

export default ArticleListPage;
