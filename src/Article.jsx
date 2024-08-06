import React, { useContext, useState, useEffect } from 'react';
import '../public/css/Article.css';
import NewsContext from './NewsContext';

function Article({ apiKey, setIsSearching }) {
  const { news, loading, fetchLatestNews } = useContext(NewsContext);

  useEffect(() => {
    fetchLatestNews();
  }, []);

  return (
    <div className="article-container">

      {loading ? (
        <>
        <img className='loading-img' src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif" alt="Loading" />
        <p>Loading news can take several seconds</p>
        </>
        
      ) : (
        news.map((article, index) => (
          <div key={index} className="article">
            <h2>{article.title}</h2>
            {article.image && article.image !== "None" && (
              <img
                src={article.image}
                alt={article.title}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                }}
              />
            )}
            <p>{article.description || "Content not available"}</p>
            <a href={article.url} target='_blank'>Original article</a>
          </div>
        ))
      )}
    </div>
  );
}

export default Article;
