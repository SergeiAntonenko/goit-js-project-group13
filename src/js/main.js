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
        <div class="top_list-group">
            <div class="top_list-category_name">${elem.list_name}</div>
            <div class="top_list-book_list">
                ${renderBooks(elem.books)}
            </div>
            <button class="btn-see_more" data-category="${elem.list_name}">See More</button>
        </div>
    `;
    refs.topListElem.innerHTML += html;
}

function renderBooks(books) {
    const bookHtml = books.map(book => `
        <div class="top_list-book" data-book-id="${book._id}">
            <img class="top_list-book_img" src="${book.book_image}" alt="${book.title}">
            <div class="top_list-book_title">${book.title}</div>
            <div class="top_list-book_author">${book.author}</div>
        </div>
    `).join('');
    
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
