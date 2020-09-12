import axios from 'axios';

const url = 'https://nriqu3-bookstore-api.herokuapp.com/api/v1/books';

const saveBook = (book, category = 'Action') => {
  const object = { book, category };

  return axios
    .post(url, object)
    .then(response => response.data);
};

const getBooks = async setBooks => axios
  .get(url)
  .then(response => setBooks(response.data));

const deleteBook = async id => axios
  .delete(`${url}/${id}`)
  .then(response => response.data);

export { getBooks, saveBook, deleteBook };
