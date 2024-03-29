import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { getBookByIds } from './booksAPI';
import deleteBtnImg from '../img/shopping-list/trash-03.svg';
import { spinnerPlay, spinnerStop } from './spinner';
import { getBooksInList, removeBookFromList } from './local-storage';
import amazon from '../img/modal/modal-icons.svg#icon-amazon-logo';
import ibooks from '../img/modal/modal-icons.svg#icon-ibooks-logo';
import svgIcon from '../img/shopping-list/icons-shop.svg';

const refs = {
  bookList: document.querySelector('.shopping-list-saved'),
  emptyList: document.querySelector('.shopping-list-empty'),
  pagination: document.querySelector('.tui-pagination'),
};
const perPage = window.innerWidth >= 768 ? 3 : 4;
const visiblePages = window.innerWidth >= 768 ? 3 : 2;
createShoppingList();

async function createShoppingList() {
  const bookIds = getBooksInList();
  setHidden(refs.pagination);
  spinnerPlay(refs.bookList);
  if (!bookIds || bookIds.length === 0) {
    removeHidden(refs.emptyList);
    setHidden(refs.pagination);
  } else {
    const booksArray = await getBookByIds(bookIds);

    if (booksArray && booksArray.length !== 0) {
      const chunkedArray = chunkArray(booksArray, perPage);
      const currentPage = pagination.getCurrentPage();
      renderBooks(chunkedArray[currentPage - 1]);
      removeHidden(refs.pagination);

      document
        .querySelectorAll('.saved-item-delete-btn')
        .forEach(btn => btn.addEventListener('click', removeBookFromStorage));
    }
  }
  spinnerStop();
}

function shoppingListMarkup(books) {
  return books
    .map(
      ({
        _id,
        book_image,
        title,
        list_name,
        description,
        author,
        buy_links,
      }) => {
        const shopHrefs = buy_links.reduce((acc, item) => {
          if (item.name === 'Amazon') {
            acc.amazon = item.url;
          }
          if (item.name === 'Apple Books') {
            acc.apple = item.url;
          }
          return acc;
        }, {});

        return `<li class="saved-item">
      <div class="saved-item-cover">
        <img
          class="saved-item-cover-img"
          src="${book_image}"
          alt="${title}"
        />
      </div>
      <div class="saved-item-discription">
        <div class="saved-item-discription-top">
          <div class="saved-item-title-wrap">
            <h2 class="saved-item-title">${title}</h2>
            <p class="saved-item-genre">${list_name}</p>
          </div>
          <button class="saved-item-delete-btn" data-id=${_id}>
            <img
              class="delete-btn-img"
              src= ${deleteBtnImg}
              alt="delete button"
            />
          </button>
        </div>
        <p class="saved-item-short">
          ${description}
        </p>
        <div class="saved-item-wrap-bottom">
          <p class="saved-item-author">${author}</p>
          <ul class="saved-item-refer-list">
            <li class="saved-item-refer-item">
              <a
                href="${shopHrefs.amazon}"
                class="saved-item-refer-item-link"
                target="_blank"
              >
                <svg
                  class="saved-item-refer-amazon-logo"
                  width="62"
                  height="19"
                >
                  <use href=${amazon}></use>
                </svg>
              </a>
            </li>
            <li class="saved-item-refer-item">
              <a
                href="${shopHrefs.apple}"
                class="saved-item-refer-item-link"
                target="_blank"
              >
                <svg
                  class="saved-item-refer-ibooks-logo"
                  width="16"
                  height="16"
                >
                  <use href=${ibooks}></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </li>`;
      }
    )
    .join('');
}

function renderBooks(books) {
  const markup = shoppingListMarkup(books);
  refs.bookList.insertAdjacentHTML('beforeend', markup);
}

function setHidden(el) {
  el.classList.add('is-hidden');
}

function removeHidden(el) {
  el.classList.remove('is-hidden');
}

function removeBookFromStorage(e) {
  const id = e.currentTarget.dataset.id;
  removeBookFromList(id);
  refs.bookList.innerHTML = '';
  pagination.setTotalItems(getBooksInList().length);
  pagination.movePageTo(pagination.getCurrentPage());
}

const container = document.getElementById('pagination');

const options = {
  totalItems: getBooksInList().length,
  itemsPerPage: perPage,
  visiblePages: visiblePages,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">' +
      `<svg >
                    <use href = "${svgIcon}#icon-pagination-{{type}}"></use>
                </svg>` +
      '</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">' +
      `<svg >
                    <use href = "${svgIcon}#icon-pagination-{{type}}"></use>
                </svg>` +
      '</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

const pagination = new Pagination(container, options);

pagination.on('afterMove', ({ page }) => {
  refs.bookList.innerHTML = '';
  createShoppingList();
});

function chunkArray(arr, chunkSize) {
  let chunkedArray = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunkedArray.push(arr.slice(i, i + chunkSize));
  }
  return chunkedArray;
}
