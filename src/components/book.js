import React from 'react';
import PropTypes from 'prop-types';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Book = ({ book, removeBook }) => {
  const handleRemoveBook = () => {
    removeBook(book);
  };

  return (
    <tr className="book-element">
      <div className="first-element">
        <div className="first-element-detail">
          <td className="first-element-category">{book.category}</td>
          <td className="first-element-title">{book.title}</td>
          <td className="first-element-id">
            Book id #
            {book.id}
          </td>
        </div>
        <div className="first-element-options">
          <span>Comments</span>
          <span>|</span>
          <td><button className="first-element-button" type="button" onClick={handleRemoveBook}>Remove</button></td>
          <span>|</span>
          <span>Edit</span>
        </div>
      </div>
      <div className="second-element">
        <FontAwesomeIcon icon={faCircleNotch} className="oval" />
        <div className="percentage">
          <span>64%</span>
          <span>Completed</span>
        </div>
      </div>
      <span className="line" />
      <div className="third-element">
        <span className="third-element-first">CURRENT CHAPTER</span>
        <span className="third-element-second">Chapter 13</span>
        <button type="button" className="third-element-third">UPDATE PROGRESS</button>
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
