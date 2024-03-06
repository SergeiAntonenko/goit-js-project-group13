import { getTopList, getBooksByCategory } from './booksAPI.js';
import { onOpenModal } from './modal.js';
import { spinnerPlay, spinnerStop } from './spinner.js';
import { showNoBooksToast, showNotInLibraryToast } from './warnings.js';

const refs = {
  topListElem: document.querySelector('#topList'),
  categoryListElem: document.querySelector('#categoryList'),
  titleElement: document.querySelector('.top_list-title'),
  allCategoriesElement: document.querySelector('.all-categories'),
};

let isNoBooksToastShown = false;

document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', clickSeeMore);
  document.addEventListener('click', clickByBook);
  document.addEventListener('click', clickByAllCategory);
  window.addEventListener('scroll', scrollHandler); // скрол
});

document.addEventListener('DOMContentLoaded', async function () {
  spinnerPlay(refs.titleElement);
  refs.topListElem.innerHTML = '';
  const topListData = getTopList();
  const topList = await topListData;
  let html = '';
  topList.forEach(elem => {
    html += renderTopList(elem);
  });
  refs.topListElem.innerHTML = html;
  spinnerStop();
});

function renderTopList(elem) {
  return `
        <li class="top_list-container">
            <h2 class="top_list-category_name">${elem.list_name}</h2>
            <ul class="top_list-cards">${renderBooks(elem.books)}</ul>
            <button class="top_list-see_more" data-category="${
              elem.list_name
            }">See More</button>
        </li>
    `;
}

function renderBooks(books) {
  let i = 1;
  const bookHtml = books
    .map(
      book => `
        <li class="top_list-card" data-book-sequence-number="${i++}">
            <div class="top_list-book_cover_wrapper" data-bookid="${
              book._id
            }" tabindex="0">
                <img class="top_list-book_cover" src="${
                  book.book_image
                }" alt="${book.title}">
                <div class="quick-view-text">Quick view</div>
            </div>
            <h3 class="top_list-book_title">${book.title}</h3>
            <p class="top_list-book_author">${book.author}</p>
        </li>
    `
    )
    .join('');
  i++;
  return bookHtml;
}

const clickByBook = function (event) {
  if (
    event.target.parentElement?.classList.contains(
      'top_list-book_cover_wrapper'
    )
  ) {
    const bookId = event.target.parentElement.dataset.bookid;
    onOpenModal(bookId);
  }
};

const clickSeeMore = function (event) {
  if (event.target.classList.contains('top_list-see_more')) {
    refs.topListElem.classList.add('hidden');
    refs.categoryListElem.classList.remove('hidden');
    const category = event.target.dataset.category;
    titleCategory(category);
    categoryList(category);
    document.removeEventListener('click', clickByBook);
    document.addEventListener('click', clickByBook);
    smoothScrollToElement();
    allCategoriesClassActive(category);
  }
  if (event.target.classList.contains('gallery-link')) {
    refs.topListElem.classList.add('hidden');
    refs.categoryListElem.classList.remove('hidden');
    const category = event.target.textContent.trim();
    titleCategory(category);
    categoryList(category);
    smoothScrollToElement(category);
    document.removeEventListener('click', clickByBook);
    document.addEventListener('click', clickByBook);
    smoothScrollToElement();
    allCategoriesClassActive(category);
  }
};

const clickByAllCategory = async function (event) {
  if (event.target.classList.contains('all_categories')) {
    refs.titleElement.innerHTML = 'Best Sellers <span>Books</span>';
    refs.categoryListElem.classList.add('hidden');
    refs.topListElem.classList.remove('hidden');
    smoothScrollToElement();
    allCategoriesClassActive('All categories');
  }
  if (event.target.classList.contains('link')) {
    refs.titleElement.innerHTML = 'Best Sellers <span>Books</span>';
    refs.categoryListElem.classList.add('hidden');
    refs.topListElem.classList.remove('hidden');
    smoothScrollToElement();
  }
};

async function categoryList(category) {
  spinnerPlay(refs.titleElement);
  refs.categoryListElem.innerHTML = '';
  const categoryDataPromise = getBooksByCategory(category);
  const categoryData = await categoryDataPromise;
  let html = '';
  categoryData.forEach(book => {
    html += `
        <li class="category_list-card">
            <div class="top_list-book_cover_wrapper" data-bookid="${book._id}" tabindex="0">
                <img class="top_list-book_cover" src="${book.book_image}" alt="${book.title}">
                <div class="quick-view-text">Quick view</div>
            </div>
            <h3 class="top_list-book_title">${book.title}</h3>
            <p class="top_list-book_author">${book.author}</p>
        </li>
        `;
  });
  html += `<li><button class="all_categories">All Categories</button></li>`;
  refs.categoryListElem.innerHTML = html;
  spinnerStop();
}

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
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    if (
      buttonRect.top < windowHeight &&
      !isNoBooksToastShown &&
      refs.topListElem.classList.contains('hidden')
    ) {
      showNoBooksToast();
      isNoBooksToastShown = true;
    }
  }
}

function smoothScrollToElement() {
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  const element = refs.titleElement;
  if (windowWidth < 1440) {
    setTimeout(function () {
      const scrollOffset = element.getBoundingClientRect().top - 60;
      window.scrollTo({ top: scrollOffset, behavior: 'smooth' });
    }, 1100);
  }
}

let scrollTimeout;

function isPageScrolledToBottom() {
  return window.innerHeight + window.scrollY >= document.body.offsetHeight;
}
window.addEventListener('scroll', function () {
  if (isPageScrolledToBottom()) {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function () {
      const title = refs.titleElement.textContent.trim();
      if (title === 'Best Sellers Books') {
        showNotInLibraryToast();
      }
    }, 500);
  }
});

function allCategoriesClassActive(category) {
  const allCategories = document.querySelector('.link');
  const sidebar = document.querySelector('.sidebar');
  refs.allCategoriesElement.querySelectorAll('.gallery-link').forEach(link => {
    if (category === link.textContent.trim()) {
      link.classList.add('active');
      allCategories.classList.remove('all-categories-link');
      sidebar.scrollTop = link.offsetTop - sidebar.offsetTop;
    } else {
      link.classList.remove('active');
    }
  });
}
