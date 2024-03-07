const page = window.location.href;
const currentPage = page.split('/').pop();

const html = document.getElementsByTagName('html')[0];
const mobMenu = document.querySelector('.header-menu');
const mobMenuClose = document.querySelector('.header-menu-close');
const mobileMenu = document.querySelector('.mobile');
const signupBtn = document.querySelector('.header-btn');
const homeBtn = document.querySelector('.mob-menu-link');
const shoppingListBtn = document.querySelector('.mob-menu-list-link');

mobMenu.addEventListener('click', function () {
  getCurrentPageMob();
  mobileMenu.classList.toggle('is-open');
  mobMenu.classList.add('disabled');
  mobMenuClose.classList.remove('disabled');
  html.classList.add('no-scroll');
  signupBtn.classList.add('signup-is-active');
});

mobMenuClose.addEventListener('click', function () {
  mobileMenu.classList.toggle('is-open');
  mobMenuClose.classList.add('disabled');
  mobMenu.classList.remove('disabled');
  html.classList.remove('no-scroll');
  signupBtn.classList.remove('signup-is-active');
});

function getCurrentPageMob() {
  if (currentPage === 'shopping-list.html') {
    homeBtn.classList.remove('active');
    shoppingListBtn.classList.add('active');
  } else {
    shoppingListBtn.classList.remove('active');
    homeBtn.classList.add('active');
  }
}
