const items = document.querySelectorAll('.shopping-list-item');

let currentPage = 1;

const itemsPerPage = 3;

function displayItems(items, currentPage, itemsPerPage) {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  items.forEach((item, index) => {
    if (index >= startIndex && index < endIndex) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

displayItems(items, currentPage, itemsPerPage);

document.querySelector('.pagination-prev').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    displayItems(items, currentPage, itemsPerPage);
  }
});

document.querySelector('.pagination-next').addEventListener('click', () => {
  if (currentPage < Math.ceil(items.length / itemsPerPage)) {
    currentPage++;
    displayItems(items, currentPage, itemsPerPage);
  }
});

export { displayItems, currentPage, itemsPerPage };
