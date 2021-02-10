import React from 'react';
import ArticleList from '../components/ArticleList';
import articleContent from './article-content';

const ArticleListPage = () => (
  <React.Fragment>
    <h2>Articles</h2>    
    <ArticleList articles={articleContent} />
  </React.Fragment>
);

export default ArticleListPage;
