import React, { useState } from "react";
import Article from "./Article";
import articlesData from "./articlesData";
import "./ArticleList.css";
import "./Article.css";

import { ChevronLeft, ChevronRight } from "@material-ui/icons";

function ArticleList() {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 12;
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articlesData.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const renderArticles = () => {
    const articles = [];
    for (let i = 0; i < currentArticles.length; i += 3) {
      articles.push(
        <div key={i} className="row">
          {currentArticles.slice(i, i + 3).map((article) => (
            <div key={article.id} className="col-md-4">
              <Article article={article} />
            </div>
          ))}
        </div>
      );
    }
    return articles;
  };

  return (
    <div>
      <h1 className="latest-articles-heading">Latest Articles</h1>
      <div>{renderArticles()}</div>
      <div className="pagination-container">
        <button
          className="pagination-button"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeft /> Previous
        </button>
        <button
          className="pagination-button"
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastArticle >= articlesData.length}
        >
          Next <ChevronRight />
        </button>
      </div>
    </div>
  );
}

export default ArticleList;
