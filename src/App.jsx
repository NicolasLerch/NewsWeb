import '../public/css/App.css';
import Article from './Article';
import NavBar from './NavBar';
import MoreNewsSection from './MoreNewsSection';
import { useState } from 'react';
import MainNews from './mainNews';
import SearchBar from './SearchBar';
import { NewsProvider } from './NewsContext';
import Header from './Header';
import Footer from './Footer';

function App() {


  const [isSearching, setIsSearching] = useState(false);

  return (
    <NewsProvider>
      <Header />
      <div className="categories-searchBar">
        <NavBar setIsSearching={setIsSearching} />
        <SearchBar setIsSearching={setIsSearching} />
      </div>
      {!isSearching && (
        <>
          <MainNews />
          <h2 className='more-news-title'>More News</h2>
          <MoreNewsSection />
        </>
      )}
      <div className="main-app-container">
        <Article setIsSearching={setIsSearching} />
      </div>
      <Footer />
    </NewsProvider>
  );
}

export default App;
