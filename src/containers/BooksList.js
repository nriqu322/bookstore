import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/book';
import { removeBook, changeFilter } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = props => {
  const {
    books, removeBook, changeFilter, filter,
  } = props;

  const handleRemoveBook = book => {
    removeBook(book);
  };

  const handleChangeFilter = filter => {
    changeFilter(filter);
  };

  return (
    <>
      <CategoryFilter changeFilter={handleChangeFilter} />
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
          {
          books
            .filter(book => book.category === filter || filter === 'All')
            .map(book => (
              <Book key={book.id} book={book} removeBook={handleRemoveBook} />
            ))
          }
        </tbody>
      </table>
    </>
  );
};

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: id => {
    dispatch(removeBook(id));
  },
  changeFilter: filter => {
    dispatch(changeFilter(filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
