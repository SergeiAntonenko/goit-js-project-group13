import c from"https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";import{i as k}from"./vendor-ad859c2f.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&e(n)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function e(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();const l="https://books-backend.p.goit.global",d=["/books/category-list","/books/top-books","/books/category","/books"];async function y(){const t=`${l}${d[0]}`;try{return(await c.get(t)).data}catch(o){throw console.error("Error fetching category list: ",o),o}}async function v(){const t=`${l}${d[1]}`;try{return(await c.get(t)).data}catch(o){throw console.error("Error fetching Top Books list: ",o),o}}async function _(t){const o=`${l}${d[2]}`,r={category:t};try{return(await c.get(o,{params:r})).data}catch(e){throw console.error("Error fetching books by category name: ",e),e}}async function L(t){const o=`${l}${d[3]}/${t}`;try{return(await c.get(o)).data}catch(r){throw console.error("Error fetching book by id: ",r),r}}const h=document.querySelector("#modalBookContainer");let p;async function $(t){const o=await L(t),r=w(o);h.insertAdjacentHTML("afterbegin",r),p=document.querySelector("#modalClose"),p.addEventListener("click",b)}function b(){console.log(""),p.removeEventListener("click",b),h.innerHTML=""}function w(t){var m,g;const{book_image:o,author:r,title:e,description:s,buy_links:i}=t,n=((m=i.find(u=>u.name==="Amazon"))==null?void 0:m.url)||"https://www.amazon.com/",f=((g=i.find(u=>u.name==="Apple Books"))==null?void 0:g.url)||"https://www.apple.com/apple-books/";return`
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
                        <div class="book-author">${r}</div>
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
                                <a href="${f}" class="book-shop-link" target="_blank">
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
                    <p class="book-congratulations">Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>
                </div>
            </div>
        </div>
    `}const a={topListElem:document.querySelector("#topList"),categoryListElem:document.querySelector("#categoryList"),titleElement:document.querySelector(".top_list-title")};document.addEventListener("DOMContentLoaded",async function(){a.topListElem.innerHTML="",(await v()).forEach(r=>{E(r)})});function E(t){const o=`
        <li class="top_list-container">
            <h2 class="top_list-category_name">${t.list_name}</h2>
            <ul class="top_list-cards">${C(t.books)}</ul>
            <button class="top_list-see_more" data-category="${t.list_name}">See More</button>
        </li>
    `;a.topListElem.innerHTML+=o}function C(t){let o=1;const r=t.map(e=>`
        <li class="top_list-card" data-book-sequence-number="${o++}">
            <div class="top_list-book_cover_wrapper" data-bookid="${e._id}" tabindex="0">
                <img class="top_list-book_cover" src="${e.book_image}" alt="${e.title}">
                <div class="quick-view-text">Quick view</div>
            </div>
            <h3 class="top_list-book_title">${e.title}</h3>
            <p class="top_list-book_author">${e.author}</p>
        </li>
    `).join("");return o++,r}document.addEventListener("DOMContentLoaded",function(){document.addEventListener("click",function(t){if(t.target.parentElement.classList.contains("top_list-book_cover_wrapper")){const o=t.target.parentElement.dataset.bookid;console.log(o),$(o)}})});document.addEventListener("DOMContentLoaded",function(){document.addEventListener("click",function(t){if(t.target.classList.contains("top_list-see_more")){const o=t.target.dataset.category;x(o),M(o)}})});async function M(t){topList.remove(),(await _(t)).forEach(e=>{const s=`
        <li class="category_list-card">
            <div class="top_list-book_cover_wrapper" data-bookid="${e._id}" tabindex="0">
                <img class="top_list-book_cover" src="${e.book_image}" alt="${e.title}">
                <div class="quick-view-text">Quick view</div>
            </div>
            <h3 class="top_list-book_title">${e.title}</h3>
            <p class="top_list-book_author">${e.author}</p>
        </li>
    `;a.categoryListElem.innerHTML+=s})}function x(t){const r=t.split(" "),e=r.pop();a.titleElement.textContent=r.join(" ");const s=document.createElement("span");s.textContent=" "+e,a.titleElement.appendChild(s)}const B=document.querySelector(".all-categories");function T(t){return t.map(r=>`
            <li class="gallery-item">
            <a class="gallery-link" href=#>${r.list_name}
            </a>
          </li>`).join("")}function D(t){B.insertAdjacentHTML("beforeend",t)}y().then(t=>T(t)).then(t=>D(t)).catch(t=>k.error({maxWidth:"432px",messageColor:"rgb(250, 250, 251)",messageSize:"16px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",message:`${t}`}));
//# sourceMappingURL=main-76811576.js.map
