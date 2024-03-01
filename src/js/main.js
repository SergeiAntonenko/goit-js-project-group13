import { getTopList } from './booksAPI.js';

const refs = {
    topListElem: document.querySelector('#topList'),
  };

document.addEventListener("DOMContentLoaded", async function() {
    refs.topListElem.innerHTML = '';
    const topListData = getTopList();
    const topList = await topListData;
    topList.forEach(elem => {
        console.log(elem);
        renderTopList(elem)
    });
});

function renderTopList(elem) {
    const html = `
        <li class="top_list-container">
            <h2 class="top_list-category_name">${elem.list_name}</h2>
            <ul class="top_list-cards">${renderBooks(elem.books)}</ul>
            <button class="top_list-see_more" data-category="${elem.list_name}">See More</button>
        </li>
    `;
    refs.topListElem.innerHTML += html;
}

function renderBooks(books) {
    let i = 1; // порядковый номер от 1 до 5 для скрытия ненужных книг в мобильных стилях
    const bookHtml = books.map(book => `
        <li class="top_list-card" data-book-id="${book._id}" data-book-sequence-number="${i++}">
            <img class="top_list-book_cover" src="${book.book_image}" alt="${book.title}">
            <h3 class="top_list-book_title">${book.title}</h3>
            <p class="top_list-book_author">${book.author}</p>
        </li>
    `).join('');
    i++;
    return bookHtml;
}


// document.addEventListener("DOMContentLoaded", async function() {
//     const categoryListData = getCategoryList();
//     const categoryList = await categoryListData;
//     const ulElement = document.getElementById("categoryList"); // Получаем DOM элемент <ul> по его идентификатору
//     categoryList.forEach(category => {
//         const liElement = document.createElement("li");
//         liElement.textContent = category.list_name;
//         liElement.classList.add("categoryList"); 
//         ulElement.appendChild(liElement); 
//     });
// });

// список книг в данной категории
// document.querySelector("#booksByCategory").addEventListener("click", async function() {
//     let category = "Picture Books"; // пример категории
//     const categoryDataPromise = getBooksByCategory(category);
//     const categoryData = await categoryDataPromise;
//     categoryData.forEach(book => {
//         console.log(book._id);
//         console.log(book.list_name);
//     });
    
// });

// // выод информации по одной книге
// document.querySelector("#btnBook").addEventListener("click", async function() {
//     let id = "643282b1e85766588626a080"; // пример id книги
//     const bookDataPromise = getBookById(id);
//     const bookData = await bookDataPromise;
//     const author = bookData.author;
//     const title = bookData.title;
//     console.log("Author:", author);
//     console.log("Title:", title);
// });
