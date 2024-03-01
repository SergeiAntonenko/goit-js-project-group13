import a from"https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(t){if(t.ep)return;t.ep=!0;const e=i(t);fetch(t.href,e)}})();const l="https://books-backend.p.goit.global",d=["/books/category-list","/books/top-books","/books/category","/books"];async function u(){const s=`${l}${d[1]}`;try{return(await a.get(s)).data}catch(o){throw console.error("Error fetching Top Books list: ",o),o}}const c={topListElem:document.querySelector("#topList")};document.addEventListener("DOMContentLoaded",async function(){c.topListElem.innerHTML="",(await u()).forEach(i=>{console.log(i),p(i)})});function p(s){const o=`
        <div class="top_list-group">
            <div class="top_list-category_name">${s.list_name}</div>
            <div class="top_list-book_list">
                ${f(s.books)}
            </div>
            <button class="btn-see_more" data-category="${s.list_name}">See More</button>
            <div style="clear:both;"></div>
        </div>
    `;c.topListElem.innerHTML+=o}function f(s){let o=1;const i=s.map(r=>`
        <div class="top_list-book" data-book-id="${r._id}" data-book-sequence-number="${o++}">
            <img class="top_list-book_img" src="${r.book_image}" alt="${r.title}">
            <div class="top_list-book_title">${r.title}</div>
            <div class="top_list-book_author">${r.author}</div>
        </div>
    `).join("");return o++,i}
//# sourceMappingURL=main-d6f71f02.js.map
