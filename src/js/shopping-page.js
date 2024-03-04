import { getBookById, getBookByIds } from './booksAPI';

const refs = {
  bookList: document.querySelector('.shopping-list-saved'),
  emptyList: document.querySelector('.shopping-list-empty'),
  //   deleteBtns: document.querySelectorAll('.saved-item-delete-btn'),
};

createShoppingList();

function getBooksStorage() {
  const savedBooks = localStorage.getItem('shoppingIdList');
  const bookIdArray = JSON.parse(savedBooks);
  return bookIdArray;
}

async function createShoppingList() {
  const bookIds = getBooksStorage();
  if (!bookIds || bookIds.length === 0) {
    removeHidden(refs.emptyList);
  } else {
    const booksArray = await getBookByIds(bookIds);

    if (booksArray && booksArray.length !== 0) {
      renderBooks(booksArray);

      document
        .querySelectorAll('.saved-item-delete-btn')
        .forEach(btn => btn.addEventListener('click', removeBookFromStorage));
    }
  }
}

function shoppingListMarkup(books) {
  console.log(books);
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
          console.log(item.name === 'Amazon');
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
              src="../img/shopping list/trash-03.svg"
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
                  <use href="../img/modal/modal-icons.svg#icon-amazon-logo"></use>
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
                  <use href="../img/modal/modal-icons.svg#icon-ibooks-logo"></use>
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
  const bookIds = getBooksStorage();
  const filtredBooks = bookIds.filter(bookId => id !== bookId);
  localStorage.setItem('shoppingIdList', JSON.stringify(filtredBooks));
  refs.bookList.innerHTML = '';
  createShoppingList();
}
