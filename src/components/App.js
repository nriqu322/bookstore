import React from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BookList from '../containers/BooksList';
import BookForm from '../containers/BooksForm';

function App() {
  return (
    <div className="App">
      <header>
        <div className="left-header">
          <div className="bookstore-title">Bookstore CMS</div>
          <ul>
            <li>BOOKS</li>
            <li>CATEGORIES</li>
          </ul>
        </div>
        <div>
          <FontAwesomeIcon icon={faUser} id="user-profile" />
        </div>
      </header>
      <BookList />
      <BookForm />
    </div>
  );
}

export default App;
