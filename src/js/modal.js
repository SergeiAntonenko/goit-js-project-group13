import { getBookById } from './booksAPI';
import iconsPath from '../img/modal/modal-icons.svg';

const SHOPPING_LIST_IDS_KEY = 'shoppingIdList';

const bodyRef = document.querySelector('body');
const modalContainer = document.querySelector('#modalBookContainer');
let bookActionContainer;
let modalBookBackground;
let modalCloseBtn;
let shoppingListBtn;
let isBookInShopList;
let shopListIds;
let bookData;
let currentId;

document.addEventListener('keyup', e => {
  if (e.code === 'Escape') {
    onModalCloseBtn();
  }
});

export async function onOpenModal(id) {
  currentId = id;
  shopListIds = JSON.parse(localStorage.getItem(SHOPPING_LIST_IDS_KEY)) || [];
  bookData = await getBookById(currentId);
  isBookInShopList = shopListIds.includes(currentId);
  const modalMarkup = getModalMarkup(bookData);
  modalContainer.insertAdjacentHTML('afterbegin', modalMarkup);

  bookActionContainer = document.querySelector('#bookActionContainer');
  initModalCloseBtn();
  initShoppingListBtn();
  initBackgroundClick();

  bodyRef.classList.add('overflow-hidden');
}

function onModalCloseBtn() {
  modalCloseBtn.removeEventListener('click', onModalCloseBtn);
  shoppingListBtn.removeEventListener('click', onShoppingListBtn);
  modalBookBackground.removeEventListener('click', onBackgroundClick);
  modalContainer.innerHTML = '';
  bodyRef.classList.remove('overflow-hidden');
}

function onShoppingListBtn() {
  shoppingListBtn.removeEventListener('click', onShoppingListBtn);
  if (isBookInShopList) {
    shopListIds = shopListIds.filter(id => id !== currentId);
  } else {
    shopListIds.push(currentId);
  }

  localStorage.setItem(SHOPPING_LIST_IDS_KEY, JSON.stringify(shopListIds));

  isBookInShopList = !isBookInShopList;
  const bookActionMarkup = getBookActionMarkup();
  bookActionContainer.innerHTML = bookActionMarkup;
  initShoppingListBtn();
}

function getModalMarkup(data) {
  const { book_image, author, title, description, buy_links } = data;
  const amazonUrl =
    buy_links.find(buy_link => buy_link.name === 'Amazon')?.url ||
    'https://www.amazon.com/';
  const iBooksUrl =
    buy_links.find(buy_link => buy_link.name === 'Apple Books')?.url ||
    'https://www.apple.com/apple-books/';

  return `
    <div class="book-background" id="modalBookBackground">
      <div class="modal-container">
        <button class="modal-close" id="modalClose">
          <svg class="modal-close-icon" width="12" height="12">
            <use href="${iconsPath}#icon-close"></use>
          </svg>
        </button>
        <div class="book-box">
          <img src="${book_image}" alt="${title} cover" class="book-cover">
          <div class="book-description-box">
            <h2 class="book-title">${title}</h2>
            <div class="book-author">${author}</div>
            <p class="book-description">${description}</p>
            <ul class="book-shop-list">
              <li class="book-shop-item">
                <a href="${amazonUrl}" class="book-shop-link" target="_blank">
                  <svg class="book-shop-logo amazon-logo" width="62" height="19">
                    <use href="${iconsPath}#icon-amazon-logo"></use>
                  </svg>
                </a>
              </li>
              <li class="book-shop-item">
                <a href="${iBooksUrl}" class="book-shop-link" target="_blank">
                  <svg class="book-shop-logo ibooks-logo" width="32" height="32">
                    <use href="${iconsPath}#icon-ibooks-logo"></use>
                  </svg>    
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="book-action" id="bookActionContainer">${getBookActionMarkup()}</div>
      </div>
    </div>
  `;
}

function getBookActionMarkup() {
  const congratulationsMarkup = isBookInShopList
    ? '<p class="book-congratulations">Сongratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".</p>'
    : '';

  const shoppingListBtnLabel = isBookInShopList
    ? 'remove from the shopping list'
    : 'add to shopping list';

  return `
    <button class="book-action-btn" id="shoppingListBtn">${shoppingListBtnLabel}</button>
    ${congratulationsMarkup}
  `;
}

function initModalCloseBtn() {
  modalCloseBtn = document.querySelector('#modalClose');
  modalCloseBtn.addEventListener('click', onModalCloseBtn);
}

function initShoppingListBtn() {
  shoppingListBtn = document.querySelector('#shoppingListBtn');
  shoppingListBtn.addEventListener('click', onShoppingListBtn);
}

function initBackgroundClick() {
  modalBookBackground = document.querySelector('#modalBookBackground');
  modalBookBackground.addEventListener('click', onBackgroundClick);
}

function onBackgroundClick(e) {
  if (e.target === e.currentTarget) {
    onModalCloseBtn();
  }
}
