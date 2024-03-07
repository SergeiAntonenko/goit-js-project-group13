import { getBookById } from './booksAPI';
import iconsPath from '../img/modal/modal-icons.svg';
import { switchBookInList, isBookInList } from './local-storage';

const ADD_BTN_LABEL = 'add to shopping list';
const REMOVE_BTN_LABEL = 'remove from the shopping list';

const bodyRef = document.querySelector('body');

const modalBookContainer = document.querySelector('#modalBookContainer');
const modalCloseBtn = modalBookContainer.querySelector('#modalClose');
const shoppingListBtn = modalBookContainer.querySelector('#shoppingListBtn');

const bookCover = modalBookContainer.querySelector('#bookCover');
const bookTitle = modalBookContainer.querySelector('#bookTitle');
const bookAuthor = modalBookContainer.querySelector('#bookAuthor');
const bookDescription = modalBookContainer.querySelector('#bookDescription');
const amazonLink = modalBookContainer.querySelector('#amazonLink');
const iBookLink = modalBookContainer.querySelector('#iBookLink');

modalCloseBtn.addEventListener('click', onModalCloseBtn);
shoppingListBtn.addEventListener('click', onShoppingListBtn);
modalBookBackground.addEventListener('click', onBackgroundClick);

let isBookInShopList;
let bookData;
let currentId;

document.addEventListener('keyup', e => {
  if (e.code === 'Escape') {
    onModalCloseBtn();
  }
});

export async function onOpenModal(id) {
  currentId = id;
  bookData = await getBookById(currentId);
  isBookInShopList = isBookInList(currentId);
  updateModalMarkup(bookData, isBookInShopList);
  modalBookContainer.classList.remove('visually-hidden');
  modalBookContainer.classList.add('modal-book-container-show');
  bodyRef.classList.add('overflow-hidden');
}

function onModalCloseBtn() {
  modalBookContainer.classList.add('visually-hidden');
  modalBookContainer.classList.remove('modal-book-container-show');
  bodyRef.classList.remove('overflow-hidden');
}

function onShoppingListBtn() {
  switchBookInList(currentId);
  isBookInShopList = isBookInList(currentId);
  updateBookStatus(isBookInShopList);
}

function updateModalMarkup(data, isInList) {
  const { book_image, author, title, description, buy_links } = data;
  const amazonUrl =
    buy_links.find(buy_link => buy_link.name === 'Amazon')?.url ||
    'https://www.amazon.com/';
  const iBooksUrl =
    buy_links.find(buy_link => buy_link.name === 'Apple Books')?.url ||
    'https://www.apple.com/apple-books/';

  bookCover.setAttribute('src', book_image);
  bookCover.setAttribute('alt', title);
  bookTitle.textContent = title;
  bookAuthor.textContent = author;
  bookDescription.textContent = description;
  amazonLink.setAttribute('href', amazonUrl);
  iBookLink.setAttribute('href', iBooksUrl);

  updateBookStatus(isInList);
}

function updateBookStatus(isInList) {
  if (isInList) {
    shoppingListBtn.textContent = REMOVE_BTN_LABEL;
    bookCongratulations.classList.remove('visually-hidden');
  } else {
    shoppingListBtn.textContent = ADD_BTN_LABEL;
    bookCongratulations.classList.add('visually-hidden');
  }
}

function onBackgroundClick(e) {
  if (e.target === e.currentTarget) {
    onModalCloseBtn();
  }
}
