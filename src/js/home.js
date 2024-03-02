import { getTopList } from './booksAPI.js';
import { getBooksByCategory } from './booksAPI.js';
import { onOpenModal } from './modal.js';

const refs = {
    topListElem: document.querySelector('#topList'),
    categoryListElem: document.querySelector('#categoryList'),
    titleElement: document.querySelector('.top_list-title'),
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
            <div class="top_list-book_cover_wrapper" data-bookid="${book._id}" tabindex="0">
                <img class="top_list-book_cover" src="${book.book_image}" alt="${book.title}">
                <div class="quick-view-text">Quick view</div>
            </div>
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
        if (event.target.parentElement.classList.contains('top_list-book_cover_wrapper')) {
            const bookId = event.target.parentElement.dataset.bookid;
            console.log(bookId);
            onOpenModal(bookId);
        }
    });
});

// Слушатель кнопки "See More"
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('top_list-see_more')) {
            const category = event.target.dataset.category;
            titleCategory(category)
            categoryList(category);
        }
    });
});


// Асинхронная функция которая получает список книг по категории и отрисовывает его
async function categoryList(category) {
    topList.remove();
    const categoryDataPromise = getBooksByCategory(category);
    const categoryData = await categoryDataPromise;
    categoryData.forEach(book => {
        const html = `
        <li class="category_list-card">
            <div class="top_list-book_cover_wrapper" data-bookid="${book._id}" tabindex="0">
                <img class="top_list-book_cover" src="${book.book_image}" alt="${book.title}">
                <div class="quick-view-text">Quick view</div>
            </div>
            <h3 class="top_list-book_title">${book.title}</h3>
            <p class="top_list-book_author">${book.author}</p>
        </li>
    `;
    refs.categoryListElem.innerHTML += html;
    });
};

// функция меняет название категории вверху
function titleCategory(category) {
    const textContent = category;
    const words = textContent.split(' ');
    const lastWord = words.pop();
    refs.titleElement.textContent = words.join(' ');
    const spanElement = document.createElement('span');
    spanElement.textContent = ' ' + lastWord;
    refs.titleElement.appendChild(spanElement);
}