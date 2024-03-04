const path = window.location.pathname;
const page = path.split('/').pop();
console.log(page);

const homeElement = document.querySelector('.menu-home');
const shoppingListElement = document.querySelector('.menu-shopping-list');

getCurrentPage();

document.addEventListener('DOMContentLoaded', function () {
  const body = document.querySelector('body');
  const toggle = document.querySelector('.toggle');
  const getMode = localStorage.getItem('mode');

  if (getMode && getMode === 'dark') {
    body.classList.add('dark');
    toggle.classList.add('active');
    toggle.style.background =
      'linear-gradient(180deg, #4f2ee8 0%, #686868 100%)';
    toggle.style.boxShadow = 'inset 1px 1px 2px 0 rgba(0, 0, 0, 0.1)';
  } else {
    toggle.style.background =
      'linear-gradient(180deg, #4f2ee8 0%, #dcdcdc 100%)';
    toggle.style.boxShadow = 'inset 1px 1px 2px 0 rgba(0, 0, 0, 0.1)';
  }

  toggle.addEventListener('click', function () {
    body.classList.toggle('dark');
    toggle.classList.toggle('active');

    if (body.classList.contains('dark')) {
      toggle.style.background =
        'linear-gradient(180deg, #4f2ee8 0%, #686868 100%)';
      toggle.style.boxShadow = 'inset 1px 1px 2px 0 rgba(0, 0, 0, 0.1)';
      localStorage.setItem('mode', 'dark');
    } else {
      toggle.style.background =
        'linear-gradient(180deg, #4f2ee8 0%, #dcdcdc 100%)';
      toggle.style.boxShadow = 'inset 1px 1px 2px 0 rgba(0, 0, 0, 0.1)';
      localStorage.setItem('mode', 'light');
    }
  });
});

//
function getCurrentPage() {
  if (page === 'index.html') {
    shoppingListElement.classList.remove('active-shopping-list');
    homeElement.classList.add('active-home');
  } else {
    homeElement.classList.remove('active-home');
    shoppingListElement.classList.add('active-shopping-list');
  }
}
