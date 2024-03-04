const SELECTED_THEME = 'selectedTheme';
const SELECTED_BOOKS = 'selectedBooks';

export function switchBookInList(bookId) {
  isBookInList(bookId) ? removeBookFromList(bookId) : addBookToList(bookId);
}

export function removeBookFromList(bookId) {
  const selectedBookIds = getBooksInList().filter(book => book !== bookId);
  localStorage.setItem(SELECTED_BOOKS, JSON.stringify(selectedBookIds));
}

export function addBookToList(bookId) {
  const selectedBookIds = getBooksInList();
  selectedBookIds.push(bookId);
  localStorage.setItem(SELECTED_BOOKS, JSON.stringify(selectedBookIds));
}

export function isBookInList(bookId) {
  const selectedBookIds = getBooksInList();
  const index = selectedBookIds.findIndex(item => item === bookId);
  return index >= 0;
}

export function getBooksInList() {
  return JSON.parse(localStorage.getItem(SELECTED_BOOKS)) || [];
}

export function saveTheme(theme) {
  localStorage.setItem(SELECTED_THEME, theme);
}

export function loadTheme() {
  return localStorage.getItem(SELECTED_THEME);
}
