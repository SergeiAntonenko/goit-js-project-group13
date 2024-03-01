import { getTopList } from './booksAPI.js';
import { getBooksByCategory } from './booksAPI.js';

const refs = {
    topListElem: document.querySelector('#topList'),
    categoryListElem: document.querySelector('#categoryList'),
  };


document.addEventListener("DOMContentLoaded", async function() {
    refs.topListElem.innerHTML = '';
    const topListData = getTopList();
    const topList = await topListData;
    topList.forEach(elem => {
        // console.log(elem);
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
        <li class="top_list-card" data-book-sequence-number="${i++}">
            <img class="top_list-book_cover" src="${book.book_image}" data-bookid="${book._id}" alt="${book.title}">
            <h3 class="top_list-book_title">${book.title}</h3>
            <p class="top_list-book_author">${book.author}</p>
        </li>
    `).join('');
    i++;
    return bookHtml;
}

// Слушатель нажатие по книже
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('top_list-book_cover')) {
            const bookId = event.target.dataset.bookid;
            console.log("book id: ", bookId);
        }
    });
});

// Слушатель кнопки "See More"
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('top_list-see_more')) {
            const category = event.target.dataset.category;
            // console.log("category: ", category);
            seeMore(category);
        }
    });
});

// Функция See More
function seeMore(category) {
    const topList = document.getElementById('topList');
    const categoryList = document.getElementById('categoryList');
    topList.classList.add('hidden');
    categoryList.classList.remove('hidden');
    CategoryList(category);
}

// Асинхронная функция которая получает список книг по категории
async function CategoryList(category) {
    const categoryDataPromise = getBooksByCategory(category);
    const categoryData = await categoryDataPromise;
    categoryData.forEach(book => {
        // console.log(book._id);
        console.log(book);
        // renderCategoryList(book);
    });
};


// рисуем книги по категории...
function renderCategoryList(elem) {
    const html = `
        <li class="category_list-container">
            <h2 class="category_list-category_name">${elem.list_name}</h2>
            <ul class="category_list-cards">${renderBooks(elem.books)}</ul>
            <button class="category_list-see_more" data-category="${elem.list_name}">See More</button>
        </li>
    `;
    refs.topListElem.innerHTML += html;
}











// function renderCategoryList(category) {
// //     const html = `
// //     <li class="category_list-container">
// //         <h2 class="category_list-category_name">${elem.list_name}</h2>
// //         <ul class="category_list-cards">${renderBooks(elem.books)}</ul>
// //     </li>
// // `;
//     const html = ` Тут будут книги категории ${category} `;
//     refs.categoryListElem.innerHTML += html;
// }



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


// document.querySelector("#booksByCategory").addEventListener("click", async function() {
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
