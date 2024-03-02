import u from"https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";import{i as I}from"./vendor-ad859c2f.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function e(r){if(r.ep)return;r.ep=!0;const i=s(r);fetch(r.href,i)}})();const m="https://books-backend.p.goit.global",h=["/books/category-list","/books/top-books","/books/category","/books"];async function q(){const t=`${m}${h[0]}`;try{return(await u.get(t)).data}catch(o){throw console.error("Error fetching category list: ",o),o}}async function O(){const t=`${m}${h[1]}`;try{return(await u.get(t)).data}catch(o){throw console.error("Error fetching Top Books list: ",o),o}}async function T(t){const o=`${m}${h[2]}`,s={category:t};try{return(await u.get(o,{params:s})).data}catch(e){throw console.error("Error fetching books by category name: ",e),e}}async function A(t){const o=`${m}${h[3]}/${t}`;try{return(await u.get(o)).data}catch(s){throw console.error("Error fetching book by id: ",s),s}}const f="/goit-js-project-group13/assets/modal-icons-6da17b7d.svg",x="shoppingIdList",E=document.querySelector("#modalBookContainer");let C,v,g,l,c,$,p;async function D(t){p=t,c=JSON.parse(localStorage.getItem(x))||[],$=await A(p),l=c.includes(p);const o=P($);E.insertAdjacentHTML("afterbegin",o),C=document.querySelector("#bookActionContainer"),document.body.style.overflow="hidden",j(),U()}function M(){v.removeEventListener("click",M),g.removeEventListener("click",w),E.innerHTML="",document.body.style.overflow=""}function w(){g.removeEventListener("click",w),l?c=c.filter(o=>o!==p):c.push(p),localStorage.setItem(x,JSON.stringify(c)),l=!l;const t=B();C.innerHTML=t,U()}function P(t){var b,_;const{book_image:o,author:s,title:e,description:r,buy_links:i}=t,a=((b=i.find(y=>y.name==="Amazon"))==null?void 0:b.url)||"https://www.amazon.com/",k=((_=i.find(y=>y.name==="Apple Books"))==null?void 0:_.url)||"https://www.apple.com/apple-books/";return`
    <div class="book-background" id="modalBookContainer">
      <div class="modal-container">
        <button class="modal-close" id="modalClose">
          <svg class="modal-close-icon" width="12" height="12">
            <use href="${f}#icon-close"></use>
          </svg>
        </button>
        <div class="book-box">
          <img src="${o}" alt="${e} cover" class="book-cover">
          <div class="book-description-box">
            <h2 class="book-title">${e}</h2>
            <div class="book-author">${s}</div>
            <p class="book-description">${r}</p>
            <ul class="book-shop-list">
              <li class="book-shop-item">
                <a href="${a}" class="book-shop-link" target="_blank">
                  <svg class="book-shop-logo amazon-logo" width="62" height="19">
                    <use href="${f}#icon-amazon-logo"></use>
                  </svg>
                </a>
              </li>
              <li class="book-shop-item">
                <a href="${k}" class="book-shop-link" target="_blank">
                  <svg class="book-shop-logo ibooks-logo" width="32" height="32">
                    <use href="${f}#icon-ibooks-logo"></use>
                  </svg>    
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="book-action" id="bookActionContainer">${B()}</div>
      </div>
    </div>
  `}function B(){return`
    <button class="book-action-btn" id="shippingListBtn">${l?"remove from the shopping list":"add to shopping list"}</button>
    ${l?'<p class="book-congratulations">Сongratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".</p>':""}
  `}function j(){v=document.querySelector("#modalClose"),v.addEventListener("click",M)}function U(){g=document.querySelector("#shippingListBtn"),g.addEventListener("click",w)}const d={topListElem:document.querySelector("#topList"),categoryListElem:document.querySelector("#categoryList"),titleElement:document.querySelector(".top_list-title")};document.addEventListener("DOMContentLoaded",async function(){d.topListElem.innerHTML="",(await O()).forEach(s=>{z(s)})});function z(t){const o=`
        <li class="top_list-container">
            <h2 class="top_list-category_name">${t.list_name}</h2>
            <ul class="top_list-cards">${H(t.books)}</ul>
            <button class="top_list-see_more" data-category="${t.list_name}">See More</button>
        </li>
    `;d.topListElem.innerHTML+=o}function H(t){let o=1;const s=t.map(e=>`
        <li class="top_list-card" data-book-sequence-number="${o++}">
            <div class="top_list-book_cover_wrapper" data-bookid="${e._id}" tabindex="0">
                <img class="top_list-book_cover" src="${e.book_image}" alt="${e.title}">
                <div class="quick-view-text">Quick view</div>
            </div>
            <h3 class="top_list-book_title">${e.title}</h3>
            <p class="top_list-book_author">${e.author}</p>
        </li>
    `).join("");return o++,s}document.addEventListener("DOMContentLoaded",function(){document.addEventListener("click",function(t){var o;if((o=t.target.parentElement)!=null&&o.classList.contains("top_list-book_cover_wrapper")){const s=t.target.parentElement.dataset.bookid;console.log(s),D(s)}})});document.addEventListener("DOMContentLoaded",function(){document.addEventListener("click",function(t){if(t.target.classList.contains("top_list-see_more")){const o=t.target.dataset.category;R(o),N(o)}})});async function N(t){topList.remove(),(await T(t)).forEach(e=>{const r=`
        <li class="category_list-card">
            <div class="top_list-book_cover_wrapper" data-bookid="${e._id}" tabindex="0">
                <img class="top_list-book_cover" src="${e.book_image}" alt="${e.title}">
                <div class="quick-view-text">Quick view</div>
            </div>
            <h3 class="top_list-book_title">${e.title}</h3>
            <p class="top_list-book_author">${e.author}</p>
        </li>
    `;d.categoryListElem.innerHTML+=r})}function R(t){const s=t.split(" "),e=s.pop();d.titleElement.textContent=s.join(" ");const r=document.createElement("span");r.textContent=" "+e,d.titleElement.appendChild(r)}const F=document.querySelector(".all-categories");function W(t){return t.map(s=>`
            <li class="gallery-item">
            <a class="gallery-link" href=#>${s.list_name}
            </a>
          </li>`).join("")}function J(t){F.insertAdjacentHTML("beforeend",t)}q().then(t=>W(t)).then(t=>{J(t),K()}).catch(t=>I.error({maxWidth:"432px",messageColor:"rgb(250, 250, 251)",messageSize:"16px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",message:`${t}`}));function K(){const t=document.querySelector(".gallery-link"),o=document.querySelector(".link");t.addEventListener("click",()=>{o.classList.remove("all-categories-link")})}const L=document.querySelector("body"),n=document.querySelector(".toggle");let S=localStorage.getItem("mode");S&&S==="dark"?(L.classList.add("dark"),n.classList.add("active")):(n.style.background="linear-gradient(180deg, #4f2ee8 0%, #dcdcdc 100%)",n.style.boxShadow="inset 1px 1px 2px 0 rgba(0, 0, 0, 0.1)");n.addEventListener("click",()=>{if(L.classList.toggle("dark"),L.classList.contains("dark"))n.style.background="linear-gradient(180deg, #4f2ee8 0%, #686868 100%)",n.style.boxShadow="inset 1px 1px 2px 0 rgba(0, 0, 0, 0.1)",localStorage.setItem("mode","dark");else return n.style.background="linear-gradient(180deg, #4f2ee8 0%, #dcdcdc 100%)",n.style.boxShadow="inset 1px 1px 2px 0 rgba(0, 0, 0, 0.1)",localStorage.setItem("mode","light")});n.addEventListener("click",()=>n.classList.toggle("active"));const Q=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"./img/support-Ukr/save-the-children.png",img2:"./img/support-Ukr/save-the-children@2x.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"./img/support-Ukr/project-hope.png",img2:"./img/support-Ukr/project-hope@2x.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"./img/support-Ukr/intern-med-corps.png",img2:"./img/support-Ukr/intern-med-corps@2x.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"./img/support-Ukr/medecins-sans.png",img2:"./img/support-Ukr/medecins-sans@2x.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"./img/support-Ukr/razom.png ",img2:"./img/support-Ukr/razom@2x.png "},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"./img/support-Ukr/action-against.png ",img2:"./img/support-Ukr/action-against@2x.png "},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"./img/support-Ukr/world-vision.png",img2:"./img/support-Ukr/world-vision@2x.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"./img/support-Ukr/sergiy-prytula.png",img2:"./img/support-Ukr/sergiy-prytula@2x.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"./img/support-Ukr/united24.png",img2:"./img/support-Ukr/united24@2x.png"}],Y=document.querySelector(".swiper-wrapper");document.querySelector(".swiper-button-next");const G=t=>{const o=t.map((s,e)=>{const{title:r,url:i,img:a,img2:k}=s;return`
          <li class="support-list-item swiper-slide">
          <span class="supporters-number">${(e+1).toString().padStart(2,"0")}</span>
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="company icon"
              class="support-link"
              href="${i}"
            >
              <img
                src="${a}"
                alt="${r}"
                class="supporters_img"
                srcset="${a} 1x, ${k} 2x"
                loading="lazy"
              />
            </a>
            
          </li>
              `}).join("");Y.innerHTML=`${o}`};G(Q);
//# sourceMappingURL=main-d7277947.js.map
