let selectedBooks = JSON.parse(localStorage.getItem('selectedBooks')) || [];

const shoppingListEl = document.getElementById('shopping-list');
const paginationEl = document.querySelector('.pagination');

shoppingListEl.innerHTML = '';

const itemsPerPage = 5;
const totalPages = Math.ceil(selectedBooks.length / itemsPerPage);
let currentPage = 1;

for (let i = 1; i <= totalPages; i++) {
  const pageBtn = document.createElement('button');
  pageBtn.textContent = i;
  pageBtn.addEventListener('click', () => {
    currentPage = i;
    renderShoppingList(currentPage, itemsPerPage);
  });
  paginationEl.appendChild(pageBtn);
}

function renderShoppingList(pageNum, itemsPerPage) {
  shoppingListEl.innerHTML = '';

  const startIndex = (pageNum - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = selectedBooks.slice(startIndex, endIndex);

  displayedItems.forEach(item => {
    const itemEl = document.createElement('div');
    itemEl.textContent = item;
    shoppingListEl.appendChild(itemEl);
  });
}

export { renderShoppingList };
