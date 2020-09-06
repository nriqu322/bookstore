import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ changeFilter }) => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const handleFilterChange = filter => {
    changeFilter(filter);
  };

  return (
    <select name="category" onChange={handleFilterChange}>
      {categories.map(category => (
        <option key={category} value={category}>{category}</option>
      ))}
    </select>
  );
};

CategoryFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
