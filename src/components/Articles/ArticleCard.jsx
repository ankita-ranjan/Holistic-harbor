import React from "react";

function ArticleCard({ article }) {
  return (
    <div className="article-card">
      <h2>{article.title}</h2>
      <img src={article.image} alt={article.title} />
      <p>{article.content}</p>
      <p>Author: {article.author}</p>
      <p>Published on: {article.publishedDate}</p>
    </div>
  );
}

export default ArticleCard;
