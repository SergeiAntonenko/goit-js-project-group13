const html = document.getElementsByTagName('html')[0];
const mobMenu = document.querySelector('.header-menu');
const mobMenuClose = document.querySelector('.header-menu-close');
const mobileMenu = document.querySelector('.mobile');

// mobMenu.addEventListener('click', mobMenuOpen);

// document.addEventListener('DOMContentLoaded', function () {});

mobMenu.addEventListener('click', function () {
  mobileMenu.classList.toggle('is-open');
  mobMenu.classList.add('disabled');
  mobMenuClose.classList.remove('disabled');
  html.classList.add('no-scroll');
});

mobMenuClose.addEventListener('click', function () {
  mobileMenu.classList.toggle('is-open');
  mobMenuClose.classList.add('disabled');
  mobMenu.classList.remove('disabled');
  html.classList.remove('no-scroll');
});
