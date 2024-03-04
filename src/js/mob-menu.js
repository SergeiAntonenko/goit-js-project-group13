const mobMenu = document.querySelector('.header-menu');
  
mobMenu.addEventListener('click', mobMenuOpen);

function mobMenuOpen() {
  mobileMenu.classList.toggle('is-open');

      if (mobMenu.classList.contains('none')) {
      mobMenu.classList.add('flex');
  }
  return
}

const homePageElem = document.querySelector('.mob-menu-link');
const shoppingListElem = document.querySelector('.mob-menu-list-link');

homePageElem.addEventListener('click', function() {
    homePageElem.classList.remove('mob-menu-link');
    shoppingListElem.classList.remove('mob-menu-list-link');
    
    this.classList.add('mob-menu-link');
});

shoppingListElem.addEventListener('click', function() {
    homeElement.classList.remove('mob-menu-link');
    shoppingListElem.classList.remove('mob-menu-list-link');
    
    this.classList.add('mob-menu-list-link');
});