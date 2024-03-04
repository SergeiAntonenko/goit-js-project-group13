
const SELECTED_THEME = 'selectedTheme';
const SELECTED_BOOKS = 'selectedBooks';

// Функция для добавления книги в localStorage
export function switchBookInList(bookId) {
  // Получаем текущий список выбранных книг из localStorage
  let selectedBooks = getBooksInList();
  // Проверяем, есть ли уже книга в списке
  if (isBookInList(bookId)) {
    // Если книга уже есть в списке, удаляем её
    selectedBooks = selectedBooks.filter(book => book._id !== bookId);
  } else {
    // Если книги нет в списке, добавляем её
    selectedBooks.push({ _id: bookId });
  }
  // Обновляем список выбранных книг в localStorage
  localStorage.setItem(SELECTED_BOOKS, JSON.stringify(selectedBooks));
}

export function isBookInList(bookId) {
  const selectedBooks = getBooksInList();
  const index = selectedBooks.findIndex(item => item._id === bookId);
  return index >= 0;
}

export function getBooksInList() {
  return JSON.parse(localStorage.getItem(SELECTED_BOOKS)) || [];
}

//=============== Функционал  для сохранения темной темы ==============

// Функция для сохранения выбранной пользователем темы сайта в localStorage
export function saveTheme(theme) {
  localStorage.setItem(SELECTED_THEME, theme);
}

// Функция для загрузки сохраненной темы сайта из localStorage
export function loadTheme() {
  return localStorage.getItem(SELECTED_THEME);
}


