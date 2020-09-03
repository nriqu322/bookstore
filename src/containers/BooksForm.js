import React from 'react';

const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <form id="book-form">
      <input name="bookTitle" component="input" type="text" placeholder="add book title" />
      <select name="category" value="">
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BooksForm;
