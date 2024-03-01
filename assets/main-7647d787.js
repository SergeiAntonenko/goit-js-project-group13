import i from"https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";import{i as u}from"./vendor-ad859c2f.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const a="https://books-backend.p.goit.global",l=["/books/category-list","/books/top-books","/books/category","/books"];async function g(){const t=`${a}${l[0]}`;try{return(await i.get(t)).data}catch(e){throw console.error("Error fetching category list: ",e),e}}async function m(){const t=`${a}${l[1]}`;try{return(await i.get(t)).data}catch(e){throw console.error("Error fetching Top Books list: ",e),e}}async function p(t){const e=`${a}${l[2]}`,s={category:t};try{return(await i.get(e,{params:s})).data}catch(r){throw console.error("Error fetching books by category name: ",r),r}}const d={topListElem:document.querySelector("#topList"),categoryListElem:document.querySelector("#categoryList")};document.addEventListener("DOMContentLoaded",async function(){d.topListElem.innerHTML="",(await m()).forEach(s=>{f(s)})});function f(t){const e=`
        <li class="top_list-container">
            <h2 class="top_list-category_name">${t.list_name}</h2>
            <ul class="top_list-cards">${y(t.books)}</ul>
            <button class="top_list-see_more" data-category="${t.list_name}">See More</button>
        </li>
    `;d.topListElem.innerHTML+=e}function y(t){let e=1;const s=t.map(r=>`
        <li class="top_list-card" data-book-sequence-number="${e++}">
            <img class="top_list-book_cover" src="${r.book_image}" data-bookid="${r._id}" alt="${r.title}">
            <h3 class="top_list-book_title">${r.title}</h3>
            <p class="top_list-book_author">${r.author}</p>
        </li>
    `).join("");return e++,s}document.addEventListener("DOMContentLoaded",function(){document.addEventListener("click",function(t){if(t.target.classList.contains("top_list-book_cover")){const e=t.target.dataset.bookid;console.log("book id: ",e)}})});document.addEventListener("DOMContentLoaded",function(){document.addEventListener("click",function(t){if(t.target.classList.contains("top_list-see_more")){const e=t.target.dataset.category;L(e)}})});function L(t){const e=document.getElementById("topList"),s=document.getElementById("categoryList");e.classList.add("hidden"),s.classList.remove("hidden"),h(t)}async function h(t){(await p(t)).forEach(r=>{console.log(r)})}const b=document.querySelector(".all-categories");function _(t){return t.map(s=>`
            <li class="gallery-item">
            <a class="gallery-link" href=#>${s.list_name}
            </a>
          </li>`).join("")}function k(t){b.insertAdjacentHTML("beforeend",t)}g().then(t=>_(t)).then(t=>k(t)).catch(t=>u.error({maxWidth:"432px",messageColor:"rgb(250, 250, 251)",messageSize:"16px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",message:`${t}`}));
//# sourceMappingURL=main-7647d787.js.map
