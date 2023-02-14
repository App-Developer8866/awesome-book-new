/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
const addForm = document.querySelector('.form');
const showBooks = document.querySelector('.record');
const Title = document.querySelector('.title');
const Author = document.querySelector('.author');
const btn = document.querySelector('.form button');

btn.addEventListener('click', () => {
  if (Title.value === '' || Author.value === '') {
    document.querySelector('.form > span').textContent = 'All fiels are required!';
  } else {
    const books = JSON.parse(localStorage.getItem('data')) === null ? [] : JSON.parse(localStorage.getItem('data'));
    const bookObj = {
      id: new Date().getUTCMilliseconds(),
      title: Title.value,
      author: Author.value,
    };
    books.push(bookObj);
    localStorage.setItem('data', JSON.stringify(books));
    window.location.reload();
  }
});

// ***********

const removeBook = (id) => {
  const books = JSON.parse(localStorage.getItem('data')) === null ? [] : JSON.parse(localStorage.getItem('data'));
  if (books.length > 0) {
    const filteredBooks = books?.filter((i) => i?.id !== id);
    localStorage.setItem('data', JSON.stringify(filteredBooks));
    window.location.reload();
  }
};

// Locale storage
window.addEventListener('DOMContentLoaded', () => {
  const books = JSON.parse(localStorage.getItem('data')) === null ? [] : JSON.parse(localStorage.getItem('data'));
  books.forEach((i) => {
    showBooks.innerHTML += `
      <div class="element">
      <h5>${i?.title}</h5> 
      <h5>${i?.author} </h5>
      <button type='button' onClick='removeBook(${i?.id})'>Remove</button>
      </div>
      <hr />
      `;
  });
});
