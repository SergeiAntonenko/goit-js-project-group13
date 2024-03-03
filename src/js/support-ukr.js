const fundArray = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: '../img/support-ukr/save-the-children.png',
    img2: '../img/support-ukr/save-the-children@2x.png',
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: '../img/support-ukr/project-hope.png',
    img2: '../img/support-ukr/project-hope@2x.png',
  },

  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: '../img/support-ukr/intern-med-corps.png',
    img2: '../img/support-ukr/intern-med-corps@2x.png',
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: '../img/support-ukr/medecins-sans.png',
    img2: '../img/support-ukr/medecins-sans@2x.png',
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: '../img/support-ukr/razom.png ',
    img2: '../img/support-ukr/razom@2x.png ',
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: '../img/support-ukr/action-against.png ',
    img2: '../img/support-ukr/action-against@2x.png ',
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: '../img/support-ukr/world-vision.png',
    img2: '../img/support-ukr/world-vision@2x.png',
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: '../img/support-ukr/sergiy-prytula.png',
    img2: '../img/support-ukr/sergiy-prytula@2x.png',
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: '../img/support-ukr/united24.png',
    img2: '../img/support-ukr/united24@2x.png',
  },
];

const supportList = document.querySelector('.swiper-wrapper');
const btnSwiperEl = document.querySelector('.swiper-button-next');

const renderSupportList = items => {
  const listItems = items
    .map((item, index) => {
      const { title, url, img, img2 } = item;
      const number = (index + 1).toString().padStart(2, '0');
      return `
          <li class="support-list-item">
          <span class="supporters-number">${number}</span>
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="company icon"
              href="${url}"
            >
              <img
                src="${img}"
                alt="${title}"
                class="supporters_img"
                srcset="${img} 1x, ${img2} 2x"
                loading="lazy"
              />
            </a>
            
          </li>
              `;
    })
    .join('');
  supportList.innerHTML = `${listItems}`;
};
renderSupportList(fundArray);

function scrollToTop(element, duration) {
  const scrollStep = -element.scrollTop / (duration / 15);
  const scrollInterval = setInterval(function () {
    if (element.scrollTop != 0) {
      element.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
}

function scrollSupporters() {
  const supportersList = document.querySelector('.swiper');
  const duration = 500;

  const isEndOfList =
    supportersList.scrollTop + supportersList.clientHeight >=
    supportersList.scrollHeight;

  if (isEndOfList) {
    scrollToTop(supportersList, duration);
    const icon = document.querySelector('.supporters-btn-icon');
    icon.style.transform = 'rotate(180deg)';
  } else {
    supportersList.scrollBy({
      top: 300,
      behavior: 'smooth',
    });
    const icon = document.querySelector('.supporters-btn-icon');
    icon.style.transform = 'rotate(0deg)';
  }
}

const scrollBtn = document.querySelector('.supporters-btn');
scrollBtn.addEventListener('click', scrollSupporters);
