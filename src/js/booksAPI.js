// import axios from 'axios';
import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';

const BASE_URL = 'https://books-backend.p.goit.global';
const END_POINTS = [
  '/books/category-list',
  '/books/top-books',
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

export async function getTopList() {
  const url = `${BASE_URL}${END_POINTS[1]}`;
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.error('Error fetching Top Books list: ', error);
    throw error;
  }
}

export async function getBooksByCategory(category) {
  const url = `${BASE_URL}${END_POINTS[2]}`;
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
  const url = `${BASE_URL}${END_POINTS[3]}/${id}`;
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.error('Error fetching book by id: ', error);
    throw error;
  }
}

// ============== GET BOOKS ARRAY BY IDS =======================

export async function getBookByIds(idsArray) {
  const url = `${BASE_URL}${END_POINTS[3]}`;

  try {
    const booksArray = [];
    for (const id of idsArray) {
      const response = await axios.get(`${url}/${id}`);
      booksArray.push(response.data);
    }
    return booksArray;
  } catch (error) {
    console.error('Error fetching book by id: ', error);
    throw error;
  }
}
