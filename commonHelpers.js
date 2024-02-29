import l from"https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const a="https://books-backend.p.goit.global",d=["/books/category-list","/books/top-books","/books/category","/books"];async function u(){const r=`${a}${d[1]}`;try{return(await l.get(r)).data}catch(o){throw console.error("Error fetching Top Books list: ",o),o}}const c={topListElem:document.querySelector("#topList")};document.addEventListener("DOMContentLoaded",async function(){c.topListElem.innerHTML="",(await u()).forEach(s=>{console.log(s),p(s)})});function p(r){const o=`
        <div class="top_list-group">
            <div class="top_list-category_name">${r.list_name}</div>
            <div class="top_list-book_list">
                ${f(r.books)}
            </div>
            <button class="btn-see_more" data-category="${r.list_name}">See More</button>
        </div>
    `;c.topListElem.innerHTML+=o}function f(r){return r.map(s=>`
        <div class="top_list-book" data-book-id="${s._id}">
            <img class="top_list-book_img" src="${s.book_image}" alt="${s.title}">
            <div class="top_list-book_title">${s.title}</div>
            <div class="top_list-book_author">${s.author}</div>
        </div>
    `).join("")}
//# sourceMappingURL=commonHelpers.js.map
