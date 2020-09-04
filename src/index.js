import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import './index.css';
import mainReducer from './reducers/index';

const initialState = {
  books: [
    {
      id: Math.floor(Math.random() * 100),
      title: 'The Little Prince',
      category: 'Kids',
    },
    {
      id: Math.floor(Math.random() * 100),
      title: 'Anne Frank: The Diary of a Young Girl ',
      category: 'Biography',
    },
    {
      id: Math.floor(Math.random() * 100),
      title: 'The Shining',
      category: 'Horror',
    },
    {
      id: Math.floor(Math.random() * 100),
      title: 'Journey to the Center of the Earth',
      category: 'Sci-fi',
    },
  ],
};

const store = createStore(mainReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
