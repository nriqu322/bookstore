import React from 'react';
import PropTypes from 'prop-types';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Book = ({ book, removeBook }) => {
  const handleRemoveBook = () => {
    removeBook(book);
    window.location.reload(false);
  };

  return (
    <div className="book-element">
      <div className="first-element">
        <div className="first-element-detail">
          <div className="first-element-category">{book.category}</div>
          <div className="first-element-title">{book.title}</div>
          <div className="first-element-id">
            Book id #
            {book.id}
          </div>
        </div>
        <div className="first-element-options">
          <span>Comments</span>
          <span>|</span>
          <button className="first-element-button" type="button" onClick={handleRemoveBook}>Remove</button>
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
    </div>
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
