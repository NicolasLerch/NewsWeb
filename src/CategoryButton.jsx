import React, { useContext } from 'react';
export default function CategoryButton({ category, onClick }) {
  
  return (
    <button onClick={onClick} className="category-button">
      {category}
    </button>
  );
}