import React from 'react';
import PropTypes from 'prop-types';

const CategoryFiler = ({ handleFilterChange }) => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <select name="category" onChange={handleFilterChange}>
      {categories.map(category => (
        <option key={category} value={category}>{category}</option>
      ))}
    </select>
  );
};

CategoryFiler.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFiler;
