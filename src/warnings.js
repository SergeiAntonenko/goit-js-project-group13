import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function showErrorToast(errorMessage) {
  if (errorMessage === 'noBooks') {
    iziToast.error({
      title: 'Warning',
      message: 'There are no more books in this category',
      position: 'topCenter',
    });
  } else if (errorMessage === 'notOnSale') {
    iziToast.error({
      title: 'Warning',
      message: 'This book is no longer on sale',
      position: 'topCenter',
    });
  }
}
