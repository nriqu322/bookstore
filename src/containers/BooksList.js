import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const BooksList = ({ books }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {books.map(book => {
          <div key={book.id} book={book} />;
        })}
      </tbody>
    </table>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
});

const BooksListConnect = connect(mapStateToProps, null)(BooksList);

export default BooksListConnect;
