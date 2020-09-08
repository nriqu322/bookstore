import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, removeBook }) => {
  const handleRemoveBook = () => {
    removeBook(book);
  };

  return (
    <tr className="book-element">
      <div className="first-element">
        <td>{book.category}</td>
        <td>{book.title}</td>
        <td>
          Book id #
          {book.id}
        </td>
        <td><button type="button" onClick={handleRemoveBook}>Remove</button></td>
      </div>
      <div className="second-element">
        <span>64%</span>
        <span>Completed</span>
      </div>
      <div className="third-element">
        <span>CURRENT CHAPTER</span>
        <span>Chapter 13</span>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
