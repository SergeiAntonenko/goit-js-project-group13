const scrollBtn = document.getElementById('scrollToTopBtn');
document.body.scrollTop = 0; // Для Safari
document.documentElement.scrollTop = 0; // Для всіх інших браузерів

scrollBtn.addEventListener('click', onScrollBtnClick);
window.addEventListener('scroll', onScroll);

function onScroll() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('scrollToTopBtn').style.display = 'block';
    scrollBtn.classList.remove('visually-hidden');
  } else {
    document.getElementById('scrollToTopBtn').style.display = 'none';
  }
}
function onScrollBtnClick() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
