import { getTopList } from './booksAPI.js';
import { getBooksByCategory } from './booksAPI.js';
import { onOpenModal } from './modal.js';
import { spinnerPlay } from './spinner.js';
import { spinnerStop } from './spinner.js';
import { showNoBooksToast } from './warnings.js';


const refs = {
    topListElem: document.querySelector('#topList'),
    categoryListElem: document.querySelector('#categoryList'),
    titleElement: document.querySelector('.top_list-title'),
  };

let isNoBooksToastShown = false;

// Добавляем слушатели событий на Книжки и "See Mor" при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', clickSeeMore);
    document.addEventListener('click', clickByBook);
    document.addEventListener('click', clickByAllCategory);
    window.addEventListener('scroll', scrollHandler); // скрол
});

// Ждем загрузки страницы и создаём список лучших книг
document.addEventListener("DOMContentLoaded", async function() {
    spinnerPlay();
    refs.topListElem.innerHTML = '';
    const topListData = getTopList();
    const topList = await topListData;
    topList.forEach(elem => {
        renderTopList(elem)
    });
    spinnerStop();
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


// Клика по Книге
const clickByBook = function(event) {
    if (event.target.parentElement?.classList.contains('top_list-book_cover_wrapper')) {
        const bookId = event.target.parentElement.dataset.bookid;
        onOpenModal(bookId);
    }
};

// Клик по кнопке "See More"
const clickSeeMore = function(event) {
    if (event.target.classList.contains('top_list-see_more')) {
        refs.topListElem.classList.add('hidden');
        refs.categoryListElem.classList.remove('hidden');
        const category = event.target.dataset.category;
        titleCategory(category);
        categoryList(category);
        document.removeEventListener('click', clickByBook); // удаляем созданные слуштаели событий по книгам
        document.addEventListener('click', clickByBook); // создаем новые только для тех которые только что отрендерели
    }
    if (event.target.classList.contains('gallery-link')) {
        refs.topListElem.classList.add('hidden');
        refs.categoryListElem.classList.remove('hidden');
        const category = event.target.textContent.trim();
        titleCategory(category);
        categoryList(category);
        document.removeEventListener('click', clickByBook); // удаляем созданные слуштаели событий по книгам
        document.addEventListener('click', clickByBook); // создаем новые только для тех которые только что отрендерели
    }
};

// Клик по кнопке "All Categories"
    const clickByAllCategory = async function(event) {
        if (event.target.classList.contains('all_categories') || event.target.classList.contains('link')) {
            refs.titleElement.innerHTML = 'Best Sellers <span>Books</span>'; 
            refs.categoryListElem.classList.add('hidden');                
            refs.topListElem.classList.remove('hidden');
        }
    };


// Асинхронная функция которая получает список книг по категории и отрисовывает его
async function categoryList(category) {
    spinnerPlay();
    refs.categoryListElem.innerHTML = '';
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
    const btnAllCategoriesHTML = `<li><button class="all_categories">All Categories</button></li>`;
    refs.categoryListElem.innerHTML += btnAllCategoriesHTML;
    spinnerStop();
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
    isNoBooksToastShown = false;
}


function scrollHandler() {
    const allCategoriesButton = document.querySelector('.all_categories');
    if (allCategoriesButton) {
        const buttonRect = allCategoriesButton.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (buttonRect.top < windowHeight && !isNoBooksToastShown && refs.topListElem.classList.contains('hidden')) {
            showNoBooksToast();
            isNoBooksToastShown = true;
        }
    }
}

