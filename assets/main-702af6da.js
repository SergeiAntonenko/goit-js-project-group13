import{i as l,a as d}from"./vendor-8cce9181.js";import u from"https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();async function p(){const t="https://books-backend.p.goit.global/books/category-list ";return await d.get(t)}function g(t){const o=t.map(r=>`
            <li class="gallery-item">
            <a class="gallery-link" href=#>${r.list_name}
            </a>
          </li>`).join("");return console.log(o),o}const a=document.querySelector(".all-categories");console.log(a);function f(t){a.insertAdjacentHTML("beforeend",t)}p().then(t=>g(t.data)).then(t=>{f(t)}).catch(t=>l.error({maxWidth:"432px",messageColor:"rgb(250, 250, 251)",messageSize:"16px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",message:`${t}`}));const m="https://books-backend.p.goit.global",b=["/books/category-list","/books/top-books","/books/category","/books"];async function y(){const t=`${m}${b[1]}`;try{return(await u.get(t)).data}catch(o){throw console.error("Error fetching Top Books list: ",o),o}}const c={topListElem:document.querySelector("#topList")};document.addEventListener("DOMContentLoaded",async function(){c.topListElem.innerHTML="",(await y()).forEach(r=>{console.log(r),L(r)})});function L(t){const o=`
        <div class="top_list-group">
            <div class="top_list-category_name">${t.list_name}</div>
            <div class="top_list-book_list">
                ${h(t.books)}
            </div>
            <button class="btn-see_more" data-category="${t.list_name}">See More</button>
            <div style="clear:both;"></div>
        </div>
    `;c.topListElem.innerHTML+=o}function h(t){let o=1;const r=t.map(i=>`
        <div class="top_list-book" data-book-id="${i._id}" data-book-sequence-number="${o++}">
            <img class="top_list-book_img" src="${i.book_image}" alt="${i.title}">
            <div class="top_list-book_title">${i.title}</div>
            <div class="top_list-book_author">${i.author}</div>
        </div>
    `).join("");return o++,r}
//# sourceMappingURL=main-702af6da.js.map
