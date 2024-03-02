import d from"https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";import{i as _}from"./vendor-ad859c2f.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}})();const u="https://books-backend.p.goit.global",g=["/books/category-list","/books/top-books","/books/category","/books"];async function $(){const t=`${u}${g[0]}`;try{return(await d.get(t)).data}catch(o){throw console.error("Error fetching category list: ",o),o}}async function w(){const t=`${u}${g[1]}`;try{return(await d.get(t)).data}catch(o){throw console.error("Error fetching Top Books list: ",o),o}}async function E(t){const o=`${u}${g[2]}`,a={category:t};try{return(await d.get(o,{params:a})).data}catch(e){throw console.error("Error fetching books by category name: ",e),e}}async function x(t){const o=`${u}${g[3]}/${t}`;try{return(await d.get(o)).data}catch(a){throw console.error("Error fetching book by id: ",a),a}}const l="/goit-js-project-group13/assets/modal-icons-6da17b7d.svg";console.log("icons",l);const y=document.querySelector("#modalBookContainer");let m;async function C(t){const o=await x(t),a=S(o);y.insertAdjacentHTML("afterbegin",a),m=document.querySelector("#modalClose"),m.addEventListener("click",v)}function v(){m.removeEventListener("click",v),y.innerHTML=""}function S(t){var h,k;const{book_image:o,author:a,title:e,description:s,buy_links:r}=t,i=((h=r.find(p=>p.name==="Amazon"))==null?void 0:h.url)||"https://www.amazon.com/",L=((k=r.find(p=>p.name==="Apple Books"))==null?void 0:k.url)||"https://www.apple.com/apple-books/";return`
    <div class="book-background" id="modalBookContainer">
      <div class="modal-container">
        <button class="modal-close" id="modalClose">
          <svg class="modal-close-icon" width="12" height="12">
            <use href="${l}#icon-close"></use>
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
                <a href="${i}" class="book-shop-link" target="_blank">
                  <svg class="book-shop-logo amazon-logo" width="62" height="19">
                    <use href="${l}#icon-amazon-logo"></use>
                  </svg>
                </a>
              </li>
              <li class="book-shop-item">
                <a href="${L}" class="book-shop-link" target="_blank">
                  <svg class="book-shop-logo ibooks-logo" width="32" height="32">
                    <use href="${l}#icon-ibooks-logo"></use>
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
  `}const c={topListElem:document.querySelector("#topList"),categoryListElem:document.querySelector("#categoryList"),titleElement:document.querySelector(".top_list-title")};document.addEventListener("DOMContentLoaded",async function(){c.topListElem.innerHTML="",(await w()).forEach(a=>{M(a)})});function M(t){const o=`
        <li class="top_list-container">
            <h2 class="top_list-category_name">${t.list_name}</h2>
            <ul class="top_list-cards">${q(t.books)}</ul>
            <button class="top_list-see_more" data-category="${t.list_name}">See More</button>
        </li>
    `;c.topListElem.innerHTML+=o}function q(t){let o=1;const a=t.map(e=>`
        <li class="top_list-card" data-book-sequence-number="${o++}">
            <div class="top_list-book_cover_wrapper" data-bookid="${e._id}" tabindex="0">
                <img class="top_list-book_cover" src="${e.book_image}" alt="${e.title}">
                <div class="quick-view-text">Quick view</div>
            </div>
            <h3 class="top_list-book_title">${e.title}</h3>
            <p class="top_list-book_author">${e.author}</p>
        </li>
    `).join("");return o++,a}document.addEventListener("DOMContentLoaded",function(){document.addEventListener("click",function(t){if(t.target.parentElement.classList.contains("top_list-book_cover_wrapper")){const o=t.target.parentElement.dataset.bookid;console.log(o),C(o)}})});document.addEventListener("DOMContentLoaded",function(){document.addEventListener("click",function(t){if(t.target.classList.contains("top_list-see_more")){const o=t.target.dataset.category;T(o),B(o)}})});async function B(t){topList.remove(),(await E(t)).forEach(e=>{const s=`
        <li class="category_list-card">
            <div class="top_list-book_cover_wrapper" data-bookid="${e._id}" tabindex="0">
                <img class="top_list-book_cover" src="${e.book_image}" alt="${e.title}">
                <div class="quick-view-text">Quick view</div>
            </div>
            <h3 class="top_list-book_title">${e.title}</h3>
            <p class="top_list-book_author">${e.author}</p>
        </li>
    `;c.categoryListElem.innerHTML+=s})}function T(t){const a=t.split(" "),e=a.pop();c.titleElement.textContent=a.join(" ");const s=document.createElement("span");s.textContent=" "+e,c.titleElement.appendChild(s)}const D=document.querySelector(".all-categories");function O(t){return t.map(a=>`
            <li class="gallery-item">
            <a class="gallery-link" href=#>${a.list_name}
            </a>
          </li>`).join("")}function P(t){D.insertAdjacentHTML("beforeend",t)}$().then(t=>O(t)).then(t=>{P(t),j()}).catch(t=>_.error({maxWidth:"432px",messageColor:"rgb(250, 250, 251)",messageSize:"16px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",message:`${t}`}));function j(){const t=document.querySelector(".gallery-link"),o=document.querySelector(".link");t.addEventListener("click",()=>{o.classList.remove("all-categories-link")})}const b=document.querySelector("body"),n=document.querySelector(".toggle");let f=localStorage.getItem("mode");f&&f==="dark"?(b.classList.add("dark"),n.classList.add("active")):(n.style.background="linear-gradient(180deg, #4f2ee8 0%, #dcdcdc 100%)",n.style.boxShadow="inset 1px 1px 2px 0 rgba(0, 0, 0, 0.1)");n.addEventListener("click",()=>{if(b.classList.toggle("dark"),b.classList.contains("dark"))n.style.background="linear-gradient(180deg, #4f2ee8 0%, #686868 100%)",n.style.boxShadow="inset 1px 1px 2px 0 rgba(0, 0, 0, 0.1)",localStorage.setItem("mode","dark");else return n.style.background="linear-gradient(180deg, #4f2ee8 0%, #dcdcdc 100%)",n.style.boxShadow="inset 1px 1px 2px 0 rgba(0, 0, 0, 0.1)",localStorage.setItem("mode","light")});n.addEventListener("click",()=>n.classList.toggle("active"));
//# sourceMappingURL=main-75d0c246.js.map
