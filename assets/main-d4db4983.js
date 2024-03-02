import c from"https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";import{i as u}from"./vendor-ad859c2f.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=s(r);fetch(r.href,i)}})();const l="https://books-backend.p.goit.global",d=["/books/category-list","/books/top-books","/books/category","/books"];async function p(){const t=`${l}${d[0]}`;try{return(await c.get(t)).data}catch(e){throw console.error("Error fetching category list: ",e),e}}async function m(){const t=`${l}${d[1]}`;try{return(await c.get(t)).data}catch(e){throw console.error("Error fetching Top Books list: ",e),e}}async function g(t){const e=`${l}${d[2]}`,s={category:t};try{return(await c.get(e,{params:s})).data}catch(o){throw console.error("Error fetching books by category name: ",o),o}}const n={topListElem:document.querySelector("#topList"),categoryListElem:document.querySelector("#categoryList"),titleElement:document.querySelector(".top_list-title")};document.addEventListener("DOMContentLoaded",async function(){n.topListElem.innerHTML="",(await m()).forEach(s=>{f(s)})});function f(t){const e=`
        <li class="top_list-container">
            <h2 class="top_list-category_name">${t.list_name}</h2>
            <ul class="top_list-cards">${y(t.books)}</ul>
            <button class="top_list-see_more" data-category="${t.list_name}">See More</button>
        </li>
    `;n.topListElem.innerHTML+=e}function y(t){let e=1;const s=t.map(o=>`
        <li class="top_list-card" data-book-sequence-number="${e++}">
            <div class="top_list-book_cover_wrapper" data-bookid="${o._id}" tabindex="0">
                <img class="top_list-book_cover" src="${o.book_image}" alt="${o.title}">
                <div class="quick-view-text">Quick view</div>
            </div>
            <h3 class="top_list-book_title">${o.title}</h3>
            <p class="top_list-book_author">${o.author}</p>
        </li>
    `).join("");return e++,s}document.addEventListener("DOMContentLoaded",function(){document.addEventListener("click",function(t){if(t.target.parentElement.classList.contains("top_list-book_cover_wrapper")){const e=t.target.parentElement.dataset.bookid;console.log(e)}})});document.addEventListener("DOMContentLoaded",function(){document.addEventListener("click",function(t){if(t.target.classList.contains("top_list-see_more")){const e=t.target.dataset.category;h(e),_(e)}})});async function _(t){topList.remove(),(await g(t)).forEach(o=>{const r=`
        <li class="category_list-card">
            <div class="top_list-book_cover_wrapper" data-bookid="${o._id}" tabindex="0">
                <img class="top_list-book_cover" src="${o.book_image}" alt="${o.title}">
                <div class="quick-view-text">Quick view</div>
            </div>
            <h3 class="top_list-book_title">${o.title}</h3>
            <p class="top_list-book_author">${o.author}</p>
        </li>
    `;n.categoryListElem.innerHTML+=r})}function h(t){const s=t.split(" "),o=s.pop();n.titleElement.textContent=s.join(" ");const r=document.createElement("span");r.textContent=" "+o,n.titleElement.appendChild(r)}const L=document.querySelector(".all-categories");function b(t){return t.map(s=>`
            <li class="gallery-item">
            <a class="gallery-link" href=#>${s.list_name}
            </a>
          </li>`).join("")}function k(t){L.insertAdjacentHTML("beforeend",t)}p().then(t=>b(t)).then(t=>k(t)).catch(t=>u.error({maxWidth:"432px",messageColor:"rgb(250, 250, 251)",messageSize:"16px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",message:`${t}`}));
//# sourceMappingURL=main-d4db4983.js.map
