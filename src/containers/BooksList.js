import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/book';
import { removeBook, changeFilter } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';
import { getBooks, deleteBook } from '../services/store';

const BooksList = props => {
  const {
    removeBook, changeFilter, filter,
  } = props;
  const [books, setBooks] = useState([]);

  const handleRemoveBook = book => {
    deleteBook(book.id);
    removeBook(book);

    window.location.reload();
  };

  const handleFilterChange = e => {
    changeFilter(e.target.value);
  };

  useEffect(() => {
    getBooks(setBooks);
    // fetch('https://nriqu3-bookstore-api.herokuapp.com/api/v1/books')
    //   .then(res => res.json())
    //   .then(response => {
    //     setBooks(response);
    //   })
    //   .catch(error => error);
  }, []);

  return (
    <>
      <div className="category-container">
        <div>CATEGORY FILTER:</div>
        <CategoryFilter changeFilter={handleFilterChange} />
      </div>
      <div className="books-table">
        <div>
          {
          books
            .filter(book => book.category === filter || filter === 'All')
            .map(book => (
              <Book key={book.id} book={book} removeBook={handleRemoveBook} />
            ))
          }
        </div>

      </div>
    </>
  );
};

BooksList.propTypes = {
  // books: PropTypes.instanceOf(Array).isRequired,
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
