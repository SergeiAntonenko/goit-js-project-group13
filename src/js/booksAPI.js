import axios from 'axios';

const BASE_URL = "https://books-backend.p.goit.global";
const END_POINTS = [
    '/books/category-list',
    '/books/category',
    '/books',
];


export async function getCategoryList() {
    const url = `${BASE_URL}${END_POINTS[0]}`;
    try {
        const res = await axios.get(url);
        return res.data;
    } catch (error) {
        console.error('Error fetching category list: ', error);
        throw error;
    }
}


export async function getBooksByCategory(category) {
    const url = `${BASE_URL}${END_POINTS[1]}`;
    const params = {
        category: category,
    };
    try {
        const res = await axios.get(url, { params });
        return res.data;
    } catch (error) {
        console.error('Error fetching books by category name: ', error);
        throw error;
    }
}

 
export async function getBookById(id) {
      const url = `${BASE_URL}${END_POINTS[2]}/${id}`;
      try {
          const res = await axios.get(url);
          return res.data;
      } catch (error) {
          console.error('Error fetching book by id: ', error);
          throw error;
      }
}
