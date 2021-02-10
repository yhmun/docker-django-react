import React from 'react';
import { Link } from 'react-router-dom';

const ArticleList = ({ articles }) => (
  <div className="list-group list-group-flush">
    {articles.map((article, key) => (
      <Link className="list-group-item list-group-item-action"
            key={key}
            to={`/article/${article.name}`}
      >
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{article.title}</h5>            
        </div>
        <p className="my-1">{article.content[0].substring(0, 150)}...</p>
      </Link>
    ))}
  </div>
);

export default ArticleList;
