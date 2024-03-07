const html = document.getElementsByTagName('html')[0];
const signUpOpenBtn = document.querySelector('.header-btn');
const signUpCloseBtn = document.querySelector('.form-signup-close');
const signUp = document.querySelector('.sign-up');

signUpOpenBtn.addEventListener('click', () => {
  html.classList.add('no-scroll-signup');
  signUp.classList.add('signup-is-open');
});

signUpCloseBtn.addEventListener('click', () => {
  html.classList.remove('no-scroll-signup');
  signUp.classList.remove('signup-is-open');
});
