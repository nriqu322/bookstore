import React from 'react';
import BookList from '../containers/BooksList';
import BookForm from '../containers/BooksForm';

function App() {
  return (
    <div className="App">
      <BookList />
      <BookForm />
    </div>
  );
}

export default App;
