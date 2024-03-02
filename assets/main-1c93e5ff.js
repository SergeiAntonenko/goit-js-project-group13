import l from"https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";import{i as L}from"./vendor-ad859c2f.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&e(n)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}})();const d="https://books-backend.p.goit.global",g=["/books/category-list","/books/top-books","/books/category","/books"];async function _(){const t=`${d}${g[0]}`;try{return(await l.get(t)).data}catch(o){throw console.error("Error fetching category list: ",o),o}}async function w(){const t=`${d}${g[1]}`;try{return(await l.get(t)).data}catch(o){throw console.error("Error fetching Top Books list: ",o),o}}async function $(t){const o=`${d}${g[2]}`,a={category:t};try{return(await l.get(o,{params:a})).data}catch(e){throw console.error("Error fetching books by category name: ",e),e}}async function E(t){const o=`${d}${g[3]}/${t}`;try{return(await l.get(o)).data}catch(a){throw console.error("Error fetching book by id: ",a),a}}const f=document.querySelector("#modalBookContainer");let p;async function x(t){const o=await E(t),a=C(o);f.insertAdjacentHTML("afterbegin",a),p=document.querySelector("#modalClose"),p.addEventListener("click",y)}function y(){p.removeEventListener("click",y),f.innerHTML=""}function C(t){var b,h;const{book_image:o,author:a,title:e,description:s,buy_links:r}=t,n=((b=r.find(u=>u.name==="Amazon"))==null?void 0:b.url)||"https://www.amazon.com/",v=((h=r.find(u=>u.name==="Apple Books"))==null?void 0:h.url)||"https://www.apple.com/apple-books/";return`
    <div class="book-background" id="modalBookContainer">
      <div class="modal-container">
        <button class="modal-close" id="modalClose">
          <svg class="modal-close-icon" width="12" height="12">
            <use href="./img/modal/modal-icons.svg#icon-close"></use>
          </svg>
        </button>
        <div class="book-box">
          <img src="${o}" alt="${e} cover" class="book-cover">
          <div class="book-description-box">
            <h2 class="book-title">${e}</h2>
            <div class="book-author">${a}</div>
            <p class="book-description">${s}</p>
            <ul class="book-shop-list">
              <li class="book-shop-item">
                <a href="${n}" class="book-shop-link" target="_blank">
                  <svg class="book-shop-logo amazon-logo" width="62" height="19">
                    <use href="./img/modal/modal-icons.svg#icon-amazon-logo"></use>
                  </svg>
                </a>
              </li>
              <li class="book-shop-item">
                <a href="${v}" class="book-shop-link" target="_blank">
                  <svg class="book-shop-logo ibooks-logo" width="32" height="32">
                    <use href="./img/modal/modal-icons.svg#icon-ibooks-logo"></use>
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
  `}const c={topListElem:document.querySelector("#topList"),categoryListElem:document.querySelector("#categoryList"),titleElement:document.querySelector(".top_list-title")};document.addEventListener("DOMContentLoaded",async function(){c.topListElem.innerHTML="",(await w()).forEach(a=>{S(a)})});function S(t){const o=`
        <li class="top_list-container">
            <h2 class="top_list-category_name">${t.list_name}</h2>
            <ul class="top_list-cards">${M(t.books)}</ul>
            <button class="top_list-see_more" data-category="${t.list_name}">See More</button>
        </li>
    `;c.topListElem.innerHTML+=o}function M(t){let o=1;const a=t.map(e=>`
        <li class="top_list-card" data-book-sequence-number="${o++}">
            <div class="top_list-book_cover_wrapper" data-bookid="${e._id}" tabindex="0">
                <img class="top_list-book_cover" src="${e.book_image}" alt="${e.title}">
                <div class="quick-view-text">Quick view</div>
            </div>
            <h3 class="top_list-book_title">${e.title}</h3>
            <p class="top_list-book_author">${e.author}</p>
        </li>
    `).join("");return o++,a}document.addEventListener("DOMContentLoaded",function(){document.addEventListener("click",function(t){if(t.target.parentElement.classList.contains("top_list-book_cover_wrapper")){const o=t.target.parentElement.dataset.bookid;console.log(o),x(o)}})});document.addEventListener("DOMContentLoaded",function(){document.addEventListener("click",function(t){if(t.target.classList.contains("top_list-see_more")){const o=t.target.dataset.category;B(o),q(o)}})});async function q(t){topList.remove(),(await $(t)).forEach(e=>{const s=`
        <li class="category_list-card">
            <div class="top_list-book_cover_wrapper" data-bookid="${e._id}" tabindex="0">
                <img class="top_list-book_cover" src="${e.book_image}" alt="${e.title}">
                <div class="quick-view-text">Quick view</div>
            </div>
            <h3 class="top_list-book_title">${e.title}</h3>
            <p class="top_list-book_author">${e.author}</p>
        </li>
    `;c.categoryListElem.innerHTML+=s})}function B(t){const a=t.split(" "),e=a.pop();c.titleElement.textContent=a.join(" ");const s=document.createElement("span");s.textContent=" "+e,c.titleElement.appendChild(s)}const T=document.querySelector(".all-categories");function D(t){return t.map(a=>`
            <li class="gallery-item">
            <a class="gallery-link" href=#>${a.list_name}
            </a>
          </li>`).join("")}function O(t){T.insertAdjacentHTML("beforeend",t)}_().then(t=>D(t)).then(t=>O(t)).catch(t=>L.error({maxWidth:"432px",messageColor:"rgb(250, 250, 251)",messageSize:"16px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",message:`${t}`}));const m=document.querySelector("body"),i=document.querySelector(".toggle");let k=localStorage.getItem("mode");k&&k==="dark"?(m.classList.add("dark"),i.classList.add("active")):(i.style.background="linear-gradient(180deg, #4f2ee8 0%, #dcdcdc 100%)",i.style.boxShadow="inset 1px 1px 2px 0 rgba(0, 0, 0, 0.1)");i.addEventListener("click",()=>{if(m.classList.toggle("dark"),m.classList.contains("dark"))i.style.background="linear-gradient(180deg, #4f2ee8 0%, #686868 100%)",i.style.boxShadow="inset 1px 1px 2px 0 rgba(0, 0, 0, 0.1)",localStorage.setItem("mode","dark");else return i.style.background="linear-gradient(180deg, #4f2ee8 0%, #dcdcdc 100%)",i.style.boxShadow="inset 1px 1px 2px 0 rgba(0, 0, 0, 0.1)",localStorage.setItem("mode","light")});i.addEventListener("click",()=>i.classList.toggle("active"));
//# sourceMappingURL=main-1c93e5ff.js.map
