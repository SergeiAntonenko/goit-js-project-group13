import children from '../img/support-ukr/save-the-children';
import children2x from './img/support-ukr/save-the-children@2x.png';
import hope from './img/support-ukr/project-hope.png';
import hope2x from './img/support-ukr/project-hope@2x.png';
import med from './img/support-ukr/intern-med-corps.png';
import med2x from './img/support-ukr/intern-med-corps.png';
import sans from './img/support-ukr/medecins-sans.png';
import sans2x from './img/support-ukr/medecins-sans@2x.png';
import razom from './img/support-ukr/razom.png';
import razom2x from './img/support-ukr/razom@2x.png';
import action from './img/support-ukr/action - against.png';
import action2x from './img/support-ukr/action-against@2x.png';
import vision from './img/support-ukr/world-vision.png';
import vision2x from './img/support-ukr/world-vision@2x.png';
import prytula from './img/support-ukr/sergiy-prytula.png';
import prytula2x from './img/support-ukr/sergiy-prytula@2x.png';
import united from './img/support-ukr/united24.png';
import united2x from './img/support-ukr/united24@2x.png';

const fundArray = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: children,
    img2: children2x,
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: hope,
    img2: hope2x,
  },

  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: med,
    img2: med2x,
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: sans,
    img2: sans2x,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: razom,
    img2: razom2x,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: action,
    img2: action2x,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: vision,
    img2: vision2x,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: prytula,
    img2: prytula2x,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: united,
    img2: united2x,
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
