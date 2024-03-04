// Функция для добавления книги в localStorage
function addBookToLocalStorage(bookId) {
  // Получаем текущий список выбранных книг из localStorage
  let selectedBooks = JSON.parse(localStorage.getItem('selectedBooks')) || [];
  // Проверяем, есть ли уже книга в списке
  const index = selectedBooks.findIndex(item => item._id === bookId);
  if (index === -1) {
    // Если книги нет в списке, добавляем её
    selectedBooks.push({ _id: bookId });
  } else {
    // Если книга уже есть в списке, удаляем её
    selectedBooks.splice(index, 1);
  }
  // Обновляем список выбранных книг в localStorage
  localStorage.setItem('selectedBooks', JSON.stringify(selectedBooks));
}

// Получаем все кнопки "Добавить книгу" из карточек книг
const addButtonList = document.querySelectorAll('.book-action-btn');

// Добавляем обработчик события для каждой кнопки
addButtonList.forEach(button => {
  button.addEventListener('click', function () {
    // Получаем ID книги из родительского элемента кнопки
    const bookId = button.parentElement.dataset._id;
    // Вызываем функцию для обработки нажатия на кнопку
    addBookToLocalStorage(bookId);
  });
});

//=============== Функционал  для сохранения темной темы ==============

// Функция для сохранения выбранной пользователем темы сайта в localStorage
function saveThemeToLocalStorage(theme) {
  localStorage.setItem('selectedTheme', theme);
}

// Функция для загрузки сохраненной темы сайта из localStorage
function loadThemeFromLocalStorage() {
  return localStorage.getItem('selectedTheme');
}

// Функция для применения выбранной темы сайта
function applySelectedTheme(theme) {
  // Удаление всех классов темы
  document.body.classList.remove('light', 'dark');
  // Добавление класса выбранной темы
  document.body.classList.add(theme);
}

// Обработчик события при нажатии на кнопку выбора темы
const themeButton = document.getElementById('themeButton');
themeButton.addEventListener('click', function () {
  // Переключение между темным и светлым режимами
  const currentTheme = document.body.classList.contains('dark')
    ? 'light'
    : 'dark';
  // Сохранение выбранной пользователем темы в localStorage
  saveThemeToLocalStorage(currentTheme);
  // Применение выбранной темы
  applySelectedTheme(currentTheme);
});

// Загрузка сохраненной темы сайта при загрузке страницы
window.onload = function () {
  const selectedTheme = loadThemeFromLocalStorage();
  if (selectedTheme) {
    // Применение сохраненной темы
    applySelectedTheme(selectedTheme);
  }
};
