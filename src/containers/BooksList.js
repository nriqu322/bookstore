import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/book';
import { removeBook } from '../actions/index';

const BooksList = props => {
  const { books, removeBook } = props;
  const handleRemoveBook = book => {
    removeBook(book);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {books.map(book => (
          <Book key={book.id} book={book} removeBook={handleRemoveBook} />
        ))}
      </tbody>
    </table>
  );
};

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  removeBook: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  removeBook: id => {
    dispatch(removeBook(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
