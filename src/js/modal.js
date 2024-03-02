import { getBookById } from './booksAPI';
import { default as iconsPath } from '../assets/modal-icons.svg';

const SHOPPING_LIST_IDS_KEY = 'shopListIds';

const modalContainer = document.querySelector('#modalBookContainer');
let bookActionContainer;
let modalCloseBtn;
let shippingListBtn;
let isBookInShopList;
let shopListIds;
let bookData;
let currentId;

export async function onOpenModal(id) {
  currentId = id;

  console.log('11', localStorage.getItem(SHOPPING_LIST_IDS_KEY));
  shopListIds = JSON.parse(localStorage.getItem(SHOPPING_LIST_IDS_KEY)) || [];
  console.log('shopListIds', shopListIds);

  bookData = await getBookById(currentId);

  isBookInShopList = shopListIds.includes(currentId);
  const modalMarkup = getModalMarkup(bookData, isBookInShopList);
  modalContainer.insertAdjacentHTML('afterbegin', modalMarkup);

  bookActionContainer = document.querySelector('#bookActionContainer');

  modalCloseBtn = document.querySelector('#modalClose');
  modalCloseBtn.addEventListener('click', onModalCloseBtn);

  initShippingListBtn();
}

function onModalCloseBtn() {
  modalCloseBtn.removeEventListener('click', onModalCloseBtn);
  shippingListBtn.removeEventListener('click', onShippingListBtn);
  modalContainer.innerHTML = '';
}

function onShippingListBtn() {
  shippingListBtn.removeEventListener('click', onShippingListBtn);
  if (isBookInShopList) {
    shopListIds = shopListIds.filter(id => id !== currentId);
  } else {
    shopListIds.push(currentId);
  }

  localStorage.setItem(SHOPPING_LIST_IDS_KEY, JSON.stringify(shopListIds));

  isBookInShopList = !isBookInShopList;
  const bookActionMarkup = getBookActionMarkup();
  bookActionContainer.innerHTML = bookActionMarkup;
  initShippingListBtn();
}

function getModalMarkup(data, isBookInShopList) {
  const { book_image, author, title, description, buy_links } = data;
  const amazonUrl =
    buy_links.find(buy_link => buy_link.name === 'Amazon')?.url ||
    'https://www.amazon.com/';
  const iBooksUrl =
    buy_links.find(buy_link => buy_link.name === 'Apple Books')?.url ||
    'https://www.apple.com/apple-books/';

  return `
    <div class="book-background" id="modalBookContainer">
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
    <button class="book-action-btn" id="shippingListBtn">${shoppingListBtnLabel}</button>
    ${congratulationsMarkup}
  `;
}

function initShippingListBtn() {
  shippingListBtn = document.querySelector('#shippingListBtn');
  shippingListBtn.addEventListener('click', onShippingListBtn);
}
