import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function showNoBooksToast() {
  iziToast.error({
    title: 'Warning',
    message: 'There are no more books in this category',
    position: 'topRight',
    backgroundColor: '#eac645',
  });
}

export function showNotInLibraryToast() {
  iziToast.error({
    title: 'Warning',
    message: 'There are no more categories in this library',
    position: 'topRight',
    backgroundColor: '#eac645',
  });
}
