import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getCategoryList } from '../js/booksAPI';

const allCategories = document.querySelector('.all-categories');

function renderCategoryList(arr) {
  const markup = arr
    .map(item => {
      return `
            <li class="gallery-item">
            <a class="gallery-link" href=#>${item.list_name}
            </a>
          </li>`;
    })
    .join('');
  return markup;
}

function viewLightBox(markup) {
  allCategories.insertAdjacentHTML('beforeend', markup);
}

getCategoryList()
  .then(response => renderCategoryList(response))
  .then(markup => {
    viewLightBox(markup);
    click();
    toggle();
  })
  .catch(error =>
    iziToast.error({
      maxWidth: '432px',
      messageColor: 'rgb(250, 250, 251)',
      messageSize: '16px',
      backgroundColor: 'rgb(239, 64, 64)',
      position: 'topRight',
      message: `${error}`,
    })
  );

function click() {
  const gallery = document.querySelectorAll('.gallery-link');
  const link = document.querySelector('.link');

  gallery.forEach(item => {
    item.addEventListener('click', () => {
      link.classList.remove('all-categories-link');
    });
  });
}

// Функція, яка вмикатиме кнопку на наступній позиції
function toggle() {
  const buttons = document.querySelectorAll('.gallery-link');
  let currentIndex = 0;

  // Додаємо слухача подій для кожної кнопки
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      buttons[currentIndex].classList.remove('active');
      currentIndex = index;
      buttons[currentIndex].classList.add('active');
    });
  });
}
