import { getCategoryList } from './js/booksAPI.js';
import { getBooksByCategory } from './js/booksAPI.js';
import { getBookById } from './js/booksAPI.js';

const elements = {
    btnBooksList: document.querySelector("#btnBooksList"),
    btnBook: document.querySelector("#btnBook"),

    categoryList: document.querySelector("#categoryList"),
    booksList: document.querySelector("#booksList"),
    book: document.querySelector("#book"),
  };

console.log("test");

// лист категорий книг при загрузки страницы 
document.addEventListener("DOMContentLoaded", async function() {
    const categoryListData = getCategoryList();
    const categoryList = await categoryListData;
    categoryList.forEach(category => {
        // пока только вывод в коносль 
        console.log(category.list_name);
    });
});

// список книг в данной категории
elements.btnBooksList.addEventListener("click", async function() {
    let category = "Picture Books"; // пример категории
    const categoryDataPromise = getBooksByCategory(category);
    const categoryData = await categoryDataPromise;
    categoryData.forEach(book => {
        console.log(book._id);
        console.log(book.list_name);
    });
    
});

// выод информации по одной книге
elements.btnBook.addEventListener("click", async function() {
    let id = "643282b1e85766588626a080"; // пример id книги
    const bookDataPromise = getBookById(id);
    const bookData = await bookDataPromise;
    const author = bookData.author;
    const title = bookData.title;
    console.log("Author:", author);
    console.log("Title:", title);
});
