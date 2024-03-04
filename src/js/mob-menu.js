
function btnmenu() {
  const mobMenu = document.querySelector('.header-menu');
  mobMenu.style.display = (mobMenu.style.display === 'block') ? 'none' : 'block';
}

const homePageElem = document.querySelector('.mob-menu-link');
const shoppingListElem = document.querySelector('.mob-menu-list-link');

homePageElem.addEventListener('click', function() {
    homePageElem.classList.remove('mob-menu-link');
    shoppingListElement.classList.remove('mob-menu-list-link');
    
    this.classList.add('mob-menu-link');
});

shoppingListElem.addEventListener('click', function() {
    homeElement.classList.remove('mob-menu-link');
    shoppingListElement.classList.remove('mob-menu-list-link');
    
    this.classList.add('mob-menu-list-link');
});