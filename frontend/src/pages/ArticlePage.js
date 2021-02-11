import axios from 'axios';
import React, { useEffect, useState } from  'react';
import ArticleList from '../components/ArticleList';
import NotFoundPage from './NotFoundPage';
import articleContent from './article-content';

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const article = articleContent.find(article => article.name == name);
  
  const [articleInfo, setArticleInfo] = useState({
    upvotes: 0,
    comments: []
  });

  useEffect(() => {    
    console.log(process.env)
    axios.get(`${process.env.REACT_APP_API_HOST}/api/articles/1`)
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [name]);

  if (!article)
    return <NotFoundPage />

  const otherArticles = articleContent.filter(article => article.name !== name);

  return (
    <React.Fragment>
      <h2>{article.title}</h2>
      <p>This post has been upvoted {articleInfo.upvotes} times</p>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <ArticleList articles={otherArticles} />
    </React.Fragment>
  );
}

export default ArticlePage;
