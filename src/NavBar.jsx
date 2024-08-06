import React, { useContext } from 'react';
import CategoryButton from "./CategoryButton";
import '../public/css/navBar.css'

import NewsContext from './NewsContext';

export default function NavBar({ setIsSearching }) {
    const { fetchNewsByCategory } = useContext(NewsContext);
    const categories = ['Technology', 'Sports', 'Business', 'Entertainment', 'Politics', 'World'];

    const handleCategoryClick = (category) => {
        fetchNewsByCategory(category);
        setIsSearching(true);
      };

    return (
        <div className="navBar">
            {categories.map((category) => {
                return <CategoryButton className="navBar-category-button" key={category} category={category} onClick={() => handleCategoryClick(category)} />
            })}
        </div>
    )
}