const page = window.location.href;
const currentPage = page.split('/').pop();
console.log(currentPage);
console.log(page);
import { loadTheme, saveTheme } from './local-storage';

const homeElement = document.querySelector('.menu-home');
const shoppingListElement = document.querySelector('.menu-shopping-list');

getCurrentPage();

document.addEventListener('DOMContentLoaded', function () {
  const body = document.querySelector('body');
  const mobMenuBtn = document.querySelector('.header-menu-svg');
  const toggle = document.querySelector('.toggle');
  const getMode = loadTheme();
  const header = document.querySelector('.header');
  const headerBtn = document.querySelector('.header-btn');

  if (getMode && getMode === 'dark') {
    header.classList.add('dark');
    headerBtn.classList.add('dark');
    mobMenuBtn.classList.add('dark');
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
      header.classList.add('dark');
      headerBtn.classList.add('dark');
      mobMenuBtn.classList.add('dark');
      toggle.style.background =
        'linear-gradient(180deg, #4f2ee8 0%, #686868 100%)';
      toggle.style.boxShadow = 'inset 1px 1px 2px 0 rgba(0, 0, 0, 0.1)';
      saveTheme('dark');
    } else {
      header.classList.remove('dark');
      headerBtn.classList.remove('dark');
      mobMenuBtn.classList.remove('dark');
      toggle.style.background =
        'linear-gradient(180deg, #4f2ee8 0%, #dcdcdc 100%)';
      toggle.style.boxShadow = 'inset 1px 1px 2px 0 rgba(0, 0, 0, 0.1)';
      saveTheme('light');
    }
  });
});

//
function getCurrentPage() {
  if (currentPage === 'index.html' || currentPage === 'index.html#') {
    shoppingListElement.classList.remove('active-shopping-list');
    homeElement.classList.add('active-home');
  } else {
    homeElement.classList.remove('active-home');
    shoppingListElement.classList.add('active-shopping-list');
  }
}
