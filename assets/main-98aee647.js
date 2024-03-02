import g from"https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";import{i as I}from"./vendor-ad859c2f.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))e(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&e(l)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function e(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}})();const m="https://books-backend.p.goit.global",h=["/books/category-list","/books/top-books","/books/category","/books"];async function O(){const t=`${m}${h[0]}`;try{return(await g.get(t)).data}catch(o){throw console.error("Error fetching category list: ",o),o}}async function T(){const t=`${m}${h[1]}`;try{return(await g.get(t)).data}catch(o){throw console.error("Error fetching Top Books list: ",o),o}}async function D(t){const o=`${m}${h[2]}`,s={category:t};try{return(await g.get(o,{params:s})).data}catch(e){throw console.error("Error fetching books by category name: ",e),e}}async function A(t){const o=`${m}${h[3]}/${t}`;try{return(await g.get(o)).data}catch(s){throw console.error("Error fetching book by id: ",s),s}}const b="/goit-js-project-group13/assets/modal-icons-6da17b7d.svg",E="shoppingIdList",S=document.querySelector("#modalBookContainer");let x,f,p,c,a,$,d;async function P(t){d=t,a=JSON.parse(localStorage.getItem(E))||[],$=await A(d),c=a.includes(d);const o=H($);S.insertAdjacentHTML("afterbegin",o),x=document.querySelector("#bookActionContainer"),document.body.style.overflow="hidden",N(),M()}function C(){f.removeEventListener("click",C),p.removeEventListener("click",L),S.innerHTML="",document.body.style.overflow=""}function L(){p.removeEventListener("click",L),c?a=a.filter(o=>o!==d):a.push(d),localStorage.setItem(E,JSON.stringify(a)),c=!c;const t=B();x.innerHTML=t,M()}function H(t){var v,_;const{book_image:o,author:s,title:e,description:n,buy_links:i}=t,l=((v=i.find(k=>k.name==="Amazon"))==null?void 0:v.url)||"https://www.amazon.com/",q=((_=i.find(k=>k.name==="Apple Books"))==null?void 0:_.url)||"https://www.apple.com/apple-books/";return`
    <div class="book-background" id="modalBookContainer">
      <div class="modal-container">
        <button class="modal-close" id="modalClose">
          <svg class="modal-close-icon" width="12" height="12">
            <use href="${b}#icon-close"></use>
          </svg>
        </button>
        <div class="book-box">
          <img src="${o}" alt="${e} cover" class="book-cover">
          <div class="book-description-box">
            <h2 class="book-title">${e}</h2>
            <div class="book-author">${s}</div>
            <p class="book-description">${n}</p>
            <ul class="book-shop-list">
              <li class="book-shop-item">
                <a href="${l}" class="book-shop-link" target="_blank">
                  <svg class="book-shop-logo amazon-logo" width="62" height="19">
                    <use href="${b}#icon-amazon-logo"></use>
                  </svg>
                </a>
              </li>
              <li class="book-shop-item">
                <a href="${q}" class="book-shop-link" target="_blank">
                  <svg class="book-shop-logo ibooks-logo" width="32" height="32">
                    <use href="${b}#icon-ibooks-logo"></use>
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
    <button class="book-action-btn" id="shippingListBtn">${c?"remove from the shopping list":"add to shopping list"}</button>
    ${c?'<p class="book-congratulations">Сongratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".</p>':""}
  `}function N(){f=document.querySelector("#modalClose"),f.addEventListener("click",C)}function M(){p=document.querySelector("#shippingListBtn"),p.addEventListener("click",L)}const u={topListElem:document.querySelector("#topList"),categoryListElem:document.querySelector("#categoryList"),titleElement:document.querySelector(".top_list-title")};document.addEventListener("DOMContentLoaded",async function(){u.topListElem.innerHTML="",(await T()).forEach(s=>{j(s)})});function j(t){const o=`
        <li class="top_list-container">
            <h2 class="top_list-category_name">${t.list_name}</h2>
            <ul class="top_list-cards">${z(t.books)}</ul>
            <button class="top_list-see_more" data-category="${t.list_name}">See More</button>
        </li>
    `;u.topListElem.innerHTML+=o}function z(t){let o=1;const s=t.map(e=>`
        <li class="top_list-card" data-book-sequence-number="${o++}">
            <div class="top_list-book_cover_wrapper" data-bookid="${e._id}" tabindex="0">
                <img class="top_list-book_cover" src="${e.book_image}" alt="${e.title}">
                <div class="quick-view-text">Quick view</div>
            </div>
            <h3 class="top_list-book_title">${e.title}</h3>
            <p class="top_list-book_author">${e.author}</p>
        </li>
    `).join("");return o++,s}document.addEventListener("DOMContentLoaded",function(){document.addEventListener("click",function(t){var o;if((o=t.target.parentElement)!=null&&o.classList.contains("top_list-book_cover_wrapper")){const s=t.target.parentElement.dataset.bookid;console.log(s),P(s)}})});document.addEventListener("DOMContentLoaded",function(){document.addEventListener("click",function(t){if(t.target.classList.contains("top_list-see_more")){const o=t.target.dataset.category;U(o),R(o)}})});async function R(t){topList.remove(),(await D(t)).forEach(e=>{const n=`
        <li class="category_list-card">
            <div class="top_list-book_cover_wrapper" data-bookid="${e._id}" tabindex="0">
                <img class="top_list-book_cover" src="${e.book_image}" alt="${e.title}">
                <div class="quick-view-text">Quick view</div>
            </div>
            <h3 class="top_list-book_title">${e.title}</h3>
            <p class="top_list-book_author">${e.author}</p>
        </li>
    `;u.categoryListElem.innerHTML+=n})}function U(t){const s=t.split(" "),e=s.pop();u.titleElement.textContent=s.join(" ");const n=document.createElement("span");n.textContent=" "+e,u.titleElement.appendChild(n)}const J=document.querySelector(".all-categories");function K(t){return t.map(s=>`
            <li class="gallery-item">
            <a class="gallery-link" href=#>${s.list_name}
            </a>
          </li>`).join("")}function Q(t){J.insertAdjacentHTML("beforeend",t)}O().then(t=>K(t)).then(t=>{Q(t),W()}).catch(t=>I.error({maxWidth:"432px",messageColor:"rgb(250, 250, 251)",messageSize:"16px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",message:`${t}`}));function W(){const t=document.querySelector(".gallery-link"),o=document.querySelector(".link");t.addEventListener("click",()=>{o.classList.remove("all-categories-link")})}const y=document.querySelector("body"),r=document.querySelector(".toggle");let w=localStorage.getItem("mode");w&&w==="dark"?(y.classList.add("dark"),r.classList.add("active")):(r.style.background="linear-gradient(180deg, #4f2ee8 0%, #dcdcdc 100%)",r.style.boxShadow="inset 1px 1px 2px 0 rgba(0, 0, 0, 0.1)");r.addEventListener("click",()=>{if(y.classList.toggle("dark"),y.classList.contains("dark"))r.style.background="linear-gradient(180deg, #4f2ee8 0%, #686868 100%)",r.style.boxShadow="inset 1px 1px 2px 0 rgba(0, 0, 0, 0.1)",localStorage.setItem("mode","dark");else return r.style.background="linear-gradient(180deg, #4f2ee8 0%, #dcdcdc 100%)",r.style.boxShadow="inset 1px 1px 2px 0 rgba(0, 0, 0, 0.1)",localStorage.setItem("mode","light")});r.addEventListener("click",()=>r.classList.toggle("active"));
//# sourceMappingURL=main-98aee647.js.map
