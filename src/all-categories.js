import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

async function GetCategoryList() {
  const URL = `https://books-backend.p.goit.global/books/category-list `;

  const response = await axios.get(URL);
  return response;
}

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
  console.log(markup);
  return markup;
}

const allCategories = document.querySelector('.all-categories');
console.log(allCategories);

function viewLightBox(markup) {
  allCategories.insertAdjacentHTML('beforeend', markup);
}

GetCategoryList()
  .then(response => renderCategoryList(response.data))
  .then(markup => {
    viewLightBox(markup);
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
