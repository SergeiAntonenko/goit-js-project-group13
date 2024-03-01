import{i as u}from"./vendor-ad859c2f.js";import c from"https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const a="https://books-backend.p.goit.global",l=["/books/category-list","/books/top-books","/books/category","/books"];async function p(){const t=`${a}${l[0]}`;try{return(await c.get(t)).data}catch(o){throw console.error("Error fetching category list: ",o),o}}async function f(){const t=`${a}${l[1]}`;try{return(await c.get(t)).data}catch(o){throw console.error("Error fetching Top Books list: ",o),o}}const g=document.querySelector(".all-categories");function m(t){return t.map(s=>`
            <li class="gallery-item">
            <a class="gallery-link" href=#>${s.list_name}
            </a>
          </li>`).join("")}function y(t){g.insertAdjacentHTML("beforeend",t)}p().then(t=>m(t)).then(t=>y(t)).catch(t=>u.error({maxWidth:"432px",messageColor:"rgb(250, 250, 251)",messageSize:"16px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",message:`${t}`}));const d={topListElem:document.querySelector("#topList")};document.addEventListener("DOMContentLoaded",async function(){d.topListElem.innerHTML="",(await f()).forEach(s=>{console.log(s),b(s)})});function b(t){const o=`
        <div class="top_list-group">
            <div class="top_list-category_name">${t.list_name}</div>
            <div class="top_list-book_list">
                ${h(t.books)}
            </div>
            <button class="btn-see_more" data-category="${t.list_name}">See More</button>
            <div style="clear:both;"></div>
        </div>
    `;d.topListElem.innerHTML+=o}function h(t){let o=1;const s=t.map(i=>`
        <div class="top_list-book" data-book-id="${i._id}" data-book-sequence-number="${o++}">
            <img class="top_list-book_img" src="${i.book_image}" alt="${i.title}">
            <div class="top_list-book_title">${i.title}</div>
            <div class="top_list-book_author">${i.author}</div>
        </div>
    `).join("");return o++,s}
//# sourceMappingURL=main-4bf44080.js.map
