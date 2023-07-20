import React from 'react';

const CategoryFilter = ({ categories, selectedCategory, onCategoryFilter }) => {
  const handleCategoryClick = (category) => {
    onCategoryFilter(category);
  };

  return (
    <div>
      {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? 'selected' : ''}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;