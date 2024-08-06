import React, { createContext, useState } from 'react';

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');

  const apiKey = 'BA3kOboK5hUGflrUXljIlX-sSXgGQXpDDOnZazHQ47NWpneb';

  const fetchLatestNews = async () => {
    try {
      setLoading(true);
      const url = `https://api.currentsapi.services/v1/latest-news?page_size=5&apiKey=${apiKey}`;
      const res = await fetch(url);
      const data = await res.json();
      setNews(data.news);
    } catch (error) {
      console.error("Error fetching latest news:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchNewsByCategory = async (category) => {
    try {
      setLoading(true);
      const url = `https://api.currentsapi.services/v1/search?keywords=${category}&page_size=5&apiKey=${apiKey}`;
      const res = await fetch(url);
      const data = await res.json();
      setNews(data.news);
    } catch (error) {
      console.error("Error fetching news by category:", error);
    } finally {
      setLoading(false);
    }
  };

  const searchNews = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    try {
      setLoading(true);
      const url = `https://api.currentsapi.services/v1/search?keywords=${query}&page_size=5&apiKey=${apiKey}`;
      const res = await fetch(url);
      const data = await res.json();
      setNews(data.news);
    } catch (error) {
      console.error("Error searching news:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <NewsContext.Provider
      value={{
        news,
        setNews,
        loading,
        setLoading,
        query,
        setQuery,
        fetchLatestNews,
        searchNews,
        fetchNewsByCategory
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContext;