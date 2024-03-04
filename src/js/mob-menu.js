
  
mobMenu.addEventListener('click', mobMenuOpen);

document.addEventListener('DOMContentLoaded', function () {
    const mobMenu = document.querySelector('.header-menu');
    const mobileMenu = document.querySelector('.mobile-menu');

    mobMenu.addEventListener('click', function () {
        mobileMenu.classList.toggle('.is-open');
    });
});

