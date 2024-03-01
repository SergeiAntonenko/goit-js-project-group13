import{i as p}from"./vendor-ad859c2f.js";import c from"https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const a="https://books-backend.p.goit.global",l=["/books/category-list","/books/top-books","/books/category","/books"];async function d(){const t=`${a}${l[0]}`;try{return(await c.get(t)).data}catch(e){throw console.error("Error fetching category list: ",e),e}}async function f(){const t=`${a}${l[1]}`;try{return(await c.get(t)).data}catch(e){throw console.error("Error fetching Top Books list: ",e),e}}const g=document.querySelector(".all-categories");function m(t){return t.map(s=>`
            <li class="gallery-item">
            <a class="gallery-link" href=#>${s.list_name}
            </a>
          </li>`).join("")}function h(t){g.insertAdjacentHTML("beforeend",t)}d().then(t=>m(t)).then(t=>h(t)).catch(t=>p.error({maxWidth:"432px",messageColor:"rgb(250, 250, 251)",messageSize:"16px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",message:`${t}`}));const u={topListElem:document.querySelector("#topList")};document.addEventListener("DOMContentLoaded",async function(){u.topListElem.innerHTML="",(await f()).forEach(s=>{console.log(s),y(s)})});function y(t){const e=`
        <li class="top_list-container">
            <h2 class="top_list-category_name">${t.list_name}</h2>
            <ul class="top_list-cards">${L(t.books)}</ul>
            <button class="top_list-see_more" data-category="${t.list_name}">See More</button>
        </li>
    `;u.topListElem.innerHTML+=e}function L(t){let e=1;const s=t.map(i=>`
        <li class="top_list-card" data-book-id="${i._id}" data-book-sequence-number="${e++}">
            <img class="top_list-book_cover" src="${i.book_image}" alt="${i.title}">
            <h3 class="top_list-book_title">${i.title}</h3>
            <p class="top_list-book_author">${i.author}</p>
        </li>
    `).join("");return e++,s}
//# sourceMappingURL=main-e2af1f8d.js.map
