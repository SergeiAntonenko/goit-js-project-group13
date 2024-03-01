import { getBookById } from './booksAPI';

const modalContainer = document.querySelector('#modalBookContainer');
let modalClose;

export async function onOpenModal(id) {
    const bookData = await getBookById(id);
    const modalMarkup = getModalMarkup(bookData);
    modalContainer.insertAdjacentHTML('afterbegin', modalMarkup);
    modalClose = document.querySelector('#modalClose');
    modalClose.addEventListener('click', onCloseModal);
}

function onCloseModal() {
    console.log('')
    modalClose.removeEventListener('click', onCloseModal);
    modalContainer.innerHTML = '';
}

function getModalMarkup(data) {
    const { book_image, author, title, description, buy_links } = data;
    const amazonUrl = buy_links.find(buy_link => buy_link.name === 'Amazon')?.url || 'https://www.amazon.com/';
    const iBooksUrl = buy_links.find(buy_link => buy_link.name === 'Apple Books')?.url || 'https://www.apple.com/apple-books/';

    return `
        <div class="book-background" id="modalBookContainer">
            <div class="modal-container">
                <button class="modal-close" id="modalClose">
                    <svg class="modal-close-icon" width="12" height="12">
                        <use href="./img/modal/modal-icons.svg#icon-close"></use>
                    </svg>
                </button>
                <div class="book-box">
                    <img src="${book_image}" alt="${title} cover" class="book-cover">
                    <div class="book-description-box">
                        <h2 class="book-title">${title}</h2>
                        <div class="book-author">${author}</div>
                        <p class="book-description">${description}</p>
                        <ul class="book-shop-list">
                            <li class="book-shop-item">
                                <a href="${amazonUrl}" class="book-shop-link" target="_blank">
                                    <svg class="book-shop-logo amazon-logo" width="62" height="19">
                                        <use href="./img/modal/modal-icons.svg#icon-amazon-logo"></use>
                                    </svg>
                                </a>
                            </li>
                            <li class="book-shop-item">
                                <a href="${iBooksUrl}" class="book-shop-link" target="_blank">
                                    <svg class="book-shop-logo ibooks-logo" width="32" height="32">
                                        <use href="./img/modal/modal-icons.svg#icon-ibooks-logo"></use>
                                    </svg>    
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div class="book-action">
                    <button class="book-action-btn">add to shopping list</button>
                    <p class="book-congratulations">Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>
                </div>
            </div>
        </div>
    `
}
