const html = document.getElementsByTagName('html')[0];
const mobMenu = document.querySelector('.header-menu');
const mobMenuClose = document.querySelector('.header-menu-close');
const mobileMenu = document.querySelector('.mobile');
const signupBtn = document.querySelector('.header-btn');

mobMenu.addEventListener('click', function () {
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
