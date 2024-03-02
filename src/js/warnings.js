import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function showNoBooksToast() {
  iziToast.error({
    title: 'Warning',
    message: 'There are no more books in this category',
    position: 'topCenter',
  });
}

export function showNotOnSaleToast() {
  iziToast.error({
    title: 'Warning',
    message: 'This book is no longer on sale',
    position: 'topCenter',
  });
}
