import React from "react";
import "./Article.css";

function Article({ article }) {
  return (
    <div className="article-card">
      <img
        src={article.templeImage}
        alt={article.title}
        className="article-image"
      />
      <div className="article-details">
        <h2 className="article-title">{article.title}</h2>
        <p className="article-content">
          {article.content}{" "}
          <a href="#" className="read-more">
            Read More
          </a>{" "}
        </p>
       
        <p className="article-author">
          <strong>Author: {article.author}</strong>
        </p>
        <p className="article-date">
          <strong>Published Date:</strong> {article.publishedDate}
        </p>
      </div>
    </div>
  );
}

export default Article;
