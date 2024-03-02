const fundArray = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: './img/support-Ukr/save-the-children.png',
    img2: './img/support-Ukr/save-the-children@2x.png',
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: './img/support-Ukr/project-hope.png',
    img2: './img/support-Ukr/project-hope@2x.png',
  },

  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: './img/support-Ukr/intern-med-corps.png',
    img2: './img/support-Ukr/intern-med-corps@2x.png',
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: './img/support-Ukr/medecins-sans.png',
    img2: './img/support-Ukr/medecins-sans@2x.png',
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: './img/support-Ukr/razom.png ',
    img2: './img/support-Ukr/razom@2x.png ',
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: './img/support-Ukr/action-against.png ',
    img2: './img/support-Ukr/action-against@2x.png ',
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: './img/support-Ukr/world-vision.png',
    img2: './img/support-Ukr/world-vision@2x.png',
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: './img/support-Ukr/sergiy-prytula.png',
    img2: './img/support-Ukr/sergiy-prytula@2x.png',
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: './img/support-Ukr/united24.png',
    img2: './img/support-Ukr/united24@2x.png',
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
          <li class="support-list-item swiper-slide">
          <span class="supporters-number">${number}</span>
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="company icon"
              class="support-link"
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

////////////////////////////////////////////////////////////////////

// function scrollToTop(element, duration) {
//   const startingY = element.scrollTop;
//   const startTime = performance.now();

//   function scrollStep(timestamp) {
//     const timeElapsed = timestamp - startTime;
//     const scrollY = easeInOutQuad(timeElapsed, startingY, 0, duration);
//     element.scrollTop = scrollY;

//     if (timeElapsed < duration) {
//       requestAnimationFrame(scrollStep);
//     }
//   }

//   function easeInOutQuad(t, b, c, d) {
//     t /= d / 2;
//     if (t < 1) return (c / 2) * t * t + b;
//     t--;
//     return (-c / 2) * (t * (t - 2) - 1) + b;
//   }

//   requestAnimationFrame(scrollStep);
// }

/////////////////////////////////////////////////////////////////

// function scrollSupporters() {
//   const supportersList = document.querySelector('.swiper-wrapper'); // Corrected selector
//   const duration = 500; // Визначте тривалість прокрутки (в мілісекундах)

//   // Визначаємо, чи досягнуто кінець списку
//   const isEndOfList =
//     supportersList.scrollTop + supportersList.clientHeight >=
//     supportersList.scrollHeight;

//   // Якщо кінець списку досягнутий, прокрутити до початку з плавною анімацією
//   if (isEndOfList) {
//     scrollToTop(supportersList, duration);
//     const icon = document.querySelector('.supporters-btn-icon');
//     icon.style.transform = 'rotate(180deg)';
//   } else {
//     // Інакше продовжити прокручування вниз
//     supportersList.scrollBy({
//       top: 300, // Визначте крок прокрутки
//       behavior: 'smooth', // Встановіть плавну анімацію
//     });
//     const icon = document.querySelector('.supporters-btn-icon');
//     icon.style.transform = 'rotate(0deg)';
//   }
// }

// const scrollBtn = document.querySelector('.supporters-btn');
// scrollBtn.addEventListener('click', scrollSupporters);

///////////////////////////////////////////////////////////////////////////////////////////

// btnSwiperEl.addEventListener('click', () => {
//   const supportListHeight = supportList.clientHeight;
//   supportList.scrollTo({
//     top: supportList.scrollTop + supportListHeight,
//     behavior: 'smooth',
//   });
// });

// const swiper = new Swiper('.swiper', {
//   direction: 'vertical',
//   spaceBetween: 19,
//   slidesPerView: 'auto',
//   rewind: true,
//   allowTouchMove: false,
//   navigation: {
//     nextEl: '.swiper-button-next',
//   },

//   plugins: {
//     scrollContainer: true,
//   },
// });

// swiper.update();

// btnSwiperEl.addEventListener('click', () => {
//   swiper.slideNext();
// });

// Отримуємо посилання на елементи DOM

// const swiperWrapper = document.querySelector('.swiper-wrapper');
// const supportersBtn = document.querySelector('.supporters-btn');

// fundArray.forEach(fund => {
//   const listItem = document.createElement('li');
//   listItem.innerHTML = `
//         <a href="${fund.url}" target="_blank">
//             <img src="${fund.img}" srcset="${fund.img2} 2x" alt="${fund.title}">
//             <span>${fund.title}</span>
//         </a>
//     `;
//   swiperWrapper.appendChild(listItem);
// });

// supportersBtn.addEventListener('click', () => {

//   swiperWrapper.scrollTop += swiperWrapper.firstElementChild.offsetHeight;
// });
