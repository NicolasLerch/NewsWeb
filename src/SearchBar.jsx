import React, { useContext } from 'react';
import NewsContext from './NewsContext';
import '../public/css/searchBar.css'

export default function SearchBar({ setIsSearching }) {
  const { query, setQuery, searchNews } = useContext(NewsContext);
  const handleSearch = async (e) => {
    e.preventDefault();
    setIsSearching(true);
    await searchNews(e);
  };
  return (
    <form onSubmit={handleSearch} className="search-form">
      <input className='search-input'
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search news..."
      />
      <button type="submit">Search</button>
    </form>
  );
}