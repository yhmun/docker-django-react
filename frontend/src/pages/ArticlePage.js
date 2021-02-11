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
    setArticleInfo({ upvotes: Math.ceil(Math.random() * 10) })
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
