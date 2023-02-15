/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */

// variables
const addForm = document.querySelector('.form');
const showBooks = document.querySelector('.record');
const Title = document.querySelector('.title');
const Author = document.querySelector('.author');
const btn = document.querySelector('.form button');


// create book object
// add books
btn.addEventListener('click', () => {
  if (Title.value === '' || Author.value === '') {
    document.querySelector('.form > span').textContent = 'All fields are required!';
  } else {
    const books = JSON.parse(localStorage.getItem('data')) == null ? [] : JSON.parse(localStorage.getItem('data'));
    const bookObj = {
      title: Title.value,
      author: Author.value,
    };
    books.push(bookObj);
    localStorage.setItem('data', JSON.stringify(books));
    window.location.reload();
  }
});


// local storage
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
