import c from"https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";import{i as y}from"./vendor-ad859c2f.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function e(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}})();const l="https://books-backend.p.goit.global",d=["/books/category-list","/books/top-books","/books/category","/books"];async function v(){const t=`${l}${d[0]}`;try{return(await c.get(t)).data}catch(o){throw console.error("Error fetching category list: ",o),o}}async function _(){const t=`${l}${d[1]}`;try{return(await c.get(t)).data}catch(o){throw console.error("Error fetching Top Books list: ",o),o}}async function L(t){const o=`${l}${d[2]}`,r={category:t};try{return(await c.get(o,{params:r})).data}catch(e){throw console.error("Error fetching books by category name: ",e),e}}async function $(t){const o=`${l}${d[3]}/${t}`;try{return(await c.get(o)).data}catch(r){throw console.error("Error fetching book by id: ",r),r}}const p="/goit-js-project-group13/assets/modal-icons-6da17b7d.svg",b=document.querySelector("#modalBookContainer");let g;async function w(t){const o=await $(t),r=E(o);b.insertAdjacentHTML("afterbegin",r),g=document.querySelector("#modalClose"),g.addEventListener("click",f)}function f(){g.removeEventListener("click",f),b.innerHTML=""}function E(t){var m,h;const{book_image:o,author:r,title:e,description:s,buy_links:n}=t,a=((m=n.find(u=>u.name==="Amazon"))==null?void 0:m.url)||"https://www.amazon.com/",k=((h=n.find(u=>u.name==="Apple Books"))==null?void 0:h.url)||"https://www.apple.com/apple-books/";return`
    <div class="book-background" id="modalBookContainer">
      <div class="modal-container">
        <button class="modal-close" id="modalClose">
          <svg class="modal-close-icon" width="12" height="12">
            <use href=".${p}#icon-close"></use>
          </svg>
        </button>
        <div class="book-box">
          <img src="${o}" alt="${e} cover" class="book-cover">
          <div class="book-description-box">
            <h2 class="book-title">${e}</h2>
            <div class="book-author">${r}</div>
            <p class="book-description">${s}</p>
            <ul class="book-shop-list">
              <li class="book-shop-item">
                <a href="${a}" class="book-shop-link" target="_blank">
                  <svg class="book-shop-logo amazon-logo" width="62" height="19">
                    <use href=".${p}#icon-amazon-logo"></use>
                  </svg>
                </a>
              </li>
              <li class="book-shop-item">
                <a href="${k}" class="book-shop-link" target="_blank">
                  <svg class="book-shop-logo ibooks-logo" width="32" height="32">
                    <use href=".${p}#icon-ibooks-logo"></use>
                  </svg>    
                </a>
              </li>
            </ul>
          </div>
        </div>
            
        <div class="book-action">
          <button class="book-action-btn">add to shopping list</button>
          <p class="book-congratulations">Сongratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".</p>
        </div>
      </div>
    </div>
  `}const i={topListElem:document.querySelector("#topList"),categoryListElem:document.querySelector("#categoryList"),titleElement:document.querySelector(".top_list-title")};document.addEventListener("DOMContentLoaded",async function(){i.topListElem.innerHTML="",(await _()).forEach(r=>{C(r)})});function C(t){const o=`
        <li class="top_list-container">
            <h2 class="top_list-category_name">${t.list_name}</h2>
            <ul class="top_list-cards">${M(t.books)}</ul>
            <button class="top_list-see_more" data-category="${t.list_name}">See More</button>
        </li>
    `;i.topListElem.innerHTML+=o}function M(t){let o=1;const r=t.map(e=>`
        <li class="top_list-card" data-book-sequence-number="${o++}">
            <div class="top_list-book_cover_wrapper" data-bookid="${e._id}" tabindex="0">
                <img class="top_list-book_cover" src="${e.book_image}" alt="${e.title}">
                <div class="quick-view-text">Quick view</div>
            </div>
            <h3 class="top_list-book_title">${e.title}</h3>
            <p class="top_list-book_author">${e.author}</p>
        </li>
    `).join("");return o++,r}document.addEventListener("DOMContentLoaded",function(){document.addEventListener("click",function(t){if(t.target.parentElement.classList.contains("top_list-book_cover_wrapper")){const o=t.target.parentElement.dataset.bookid;console.log(o),w(o)}})});document.addEventListener("DOMContentLoaded",function(){document.addEventListener("click",function(t){if(t.target.classList.contains("top_list-see_more")){const o=t.target.dataset.category;B(o),x(o)}})});async function x(t){topList.remove(),(await L(t)).forEach(e=>{const s=`
        <li class="category_list-card">
            <div class="top_list-book_cover_wrapper" data-bookid="${e._id}" tabindex="0">
                <img class="top_list-book_cover" src="${e.book_image}" alt="${e.title}">
                <div class="quick-view-text">Quick view</div>
            </div>
            <h3 class="top_list-book_title">${e.title}</h3>
            <p class="top_list-book_author">${e.author}</p>
        </li>
    `;i.categoryListElem.innerHTML+=s})}function B(t){const r=t.split(" "),e=r.pop();i.titleElement.textContent=r.join(" ");const s=document.createElement("span");s.textContent=" "+e,i.titleElement.appendChild(s)}const T=document.querySelector(".all-categories");function D(t){return t.map(r=>`
            <li class="gallery-item">
            <a class="gallery-link" href=#>${r.list_name}
            </a>
          </li>`).join("")}function O(t){T.insertAdjacentHTML("beforeend",t)}v().then(t=>D(t)).then(t=>O(t)).catch(t=>y.error({maxWidth:"432px",messageColor:"rgb(250, 250, 251)",messageSize:"16px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",message:`${t}`}));
//# sourceMappingURL=main-95c33433.js.map
