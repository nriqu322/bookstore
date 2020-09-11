import axios from 'axios';

const url = 'https://nriqu3-bookstore-api.herokuapp.com/api/v1/books';

const saveBook = (category = 'Action', book) => {
  const object = { category, book };

  return axios
    .post(url, object)
    .then(response => response.data);
};

const getBooks = () => axios
  .get(url)
  .then(response => response.data.result);

export { getBooks, saveBook };
