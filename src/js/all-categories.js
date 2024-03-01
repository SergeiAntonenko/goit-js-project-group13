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
  .then(markup => viewLightBox(markup))
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
