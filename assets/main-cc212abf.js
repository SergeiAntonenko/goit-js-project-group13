import g from"https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";import{i as O}from"./vendor-ad859c2f.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(e){if(e.ep)return;e.ep=!0;const i=s(e);fetch(e.href,i)}})();const m="https://books-backend.p.goit.global",h=["/books/category-list","/books/top-books","/books/category","/books"];async function T(){const t=`${m}${h[0]}`;try{return(await g.get(t)).data}catch(o){throw console.error("Error fetching category list: ",o),o}}async function D(){const t=`${m}${h[1]}`;try{return(await g.get(t)).data}catch(o){throw console.error("Error fetching Top Books list: ",o),o}}async function A(t){const o=`${m}${h[2]}`,s={category:t};try{return(await g.get(o,{params:s})).data}catch(n){throw console.error("Error fetching books by category name: ",n),n}}async function P(t){const o=`${m}${h[3]}/${t}`;try{return(await g.get(o)).data}catch(s){throw console.error("Error fetching book by id: ",s),s}}const b="/goit-js-project-group13/assets/modal-icons-6da17b7d.svg",f="shopListIds",w=document.querySelector("#modalBookContainer");let x,y,u,l,a,E,d;async function H(t){d=t,console.log("11",localStorage.getItem(f)),a=JSON.parse(localStorage.getItem(f))||[],console.log("shopListIds",a),E=await P(d),l=a.includes(d);const o=N(E);w.insertAdjacentHTML("afterbegin",o),x=document.querySelector("#bookActionContainer"),y=document.querySelector("#modalClose"),y.addEventListener("click",C),M()}function C(){y.removeEventListener("click",C),u.removeEventListener("click",v),w.innerHTML=""}function v(){u.removeEventListener("click",v),l?a=a.filter(o=>o!==d):a.push(d),localStorage.setItem(f,JSON.stringify(a)),l=!l;const t=B();x.innerHTML=t,M()}function N(t,o){var _,$;const{book_image:s,author:n,title:e,description:i,buy_links:c}=t,I=((_=c.find(k=>k.name==="Amazon"))==null?void 0:_.url)||"https://www.amazon.com/",q=(($=c.find(k=>k.name==="Apple Books"))==null?void 0:$.url)||"https://www.apple.com/apple-books/";return`
    <div class="book-background" id="modalBookContainer">
      <div class="modal-container">
        <button class="modal-close" id="modalClose">
          <svg class="modal-close-icon" width="12" height="12">
            <use href="${b}#icon-close"></use>
          </svg>
        </button>
        <div class="book-box">
          <img src="${s}" alt="${e} cover" class="book-cover">
          <div class="book-description-box">
            <h2 class="book-title">${e}</h2>
            <div class="book-author">${n}</div>
            <p class="book-description">${i}</p>
            <ul class="book-shop-list">
              <li class="book-shop-item">
                <a href="${I}" class="book-shop-link" target="_blank">
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
    <button class="book-action-btn" id="shippingListBtn">${l?"remove from the shopping list":"add to shopping list"}</button>
    ${l?'<p class="book-congratulations">Сongratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".</p>':""}
  `}function M(){u=document.querySelector("#shippingListBtn"),u.addEventListener("click",v)}const p={topListElem:document.querySelector("#topList"),categoryListElem:document.querySelector("#categoryList"),titleElement:document.querySelector(".top_list-title")};document.addEventListener("DOMContentLoaded",async function(){p.topListElem.innerHTML="",(await D()).forEach(s=>{j(s)})});function j(t){const o=`
        <li class="top_list-container">
            <h2 class="top_list-category_name">${t.list_name}</h2>
            <ul class="top_list-cards">${z(t.books)}</ul>
            <button class="top_list-see_more" data-category="${t.list_name}">See More</button>
        </li>
    `;p.topListElem.innerHTML+=o}function z(t){let o=1;const s=t.map(n=>`
        <li class="top_list-card" data-book-sequence-number="${o++}">
            <div class="top_list-book_cover_wrapper" data-bookid="${n._id}" tabindex="0">
                <img class="top_list-book_cover" src="${n.book_image}" alt="${n.title}">
                <div class="quick-view-text">Quick view</div>
            </div>
            <h3 class="top_list-book_title">${n.title}</h3>
            <p class="top_list-book_author">${n.author}</p>
        </li>
    `).join("");return o++,s}document.addEventListener("DOMContentLoaded",function(){document.addEventListener("click",function(t){var o;if((o=t.target.parentElement)!=null&&o.classList.contains("top_list-book_cover_wrapper")){const s=t.target.parentElement.dataset.bookid;console.log(s),H(s)}})});document.addEventListener("DOMContentLoaded",function(){document.addEventListener("click",function(t){if(t.target.classList.contains("top_list-see_more")){const o=t.target.dataset.category;U(o),R(o)}})});async function R(t){topList.remove(),(await A(t)).forEach(n=>{const e=`
        <li class="category_list-card">
            <div class="top_list-book_cover_wrapper" data-bookid="${n._id}" tabindex="0">
                <img class="top_list-book_cover" src="${n.book_image}" alt="${n.title}">
                <div class="quick-view-text">Quick view</div>
            </div>
            <h3 class="top_list-book_title">${n.title}</h3>
            <p class="top_list-book_author">${n.author}</p>
        </li>
    `;p.categoryListElem.innerHTML+=e})}function U(t){const s=t.split(" "),n=s.pop();p.titleElement.textContent=s.join(" ");const e=document.createElement("span");e.textContent=" "+n,p.titleElement.appendChild(e)}const J=document.querySelector(".all-categories");function K(t){return t.map(s=>`
            <li class="gallery-item">
            <a class="gallery-link" href=#>${s.list_name}
            </a>
          </li>`).join("")}function Q(t){J.insertAdjacentHTML("beforeend",t)}T().then(t=>K(t)).then(t=>{Q(t),W()}).catch(t=>O.error({maxWidth:"432px",messageColor:"rgb(250, 250, 251)",messageSize:"16px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",message:`${t}`}));function W(){const t=document.querySelector(".gallery-link"),o=document.querySelector(".link");t.addEventListener("click",()=>{o.classList.remove("all-categories-link")})}const L=document.querySelector("body"),r=document.querySelector(".toggle");let S=localStorage.getItem("mode");S&&S==="dark"?(L.classList.add("dark"),r.classList.add("active")):(r.style.background="linear-gradient(180deg, #4f2ee8 0%, #dcdcdc 100%)",r.style.boxShadow="inset 1px 1px 2px 0 rgba(0, 0, 0, 0.1)");r.addEventListener("click",()=>{if(L.classList.toggle("dark"),L.classList.contains("dark"))r.style.background="linear-gradient(180deg, #4f2ee8 0%, #686868 100%)",r.style.boxShadow="inset 1px 1px 2px 0 rgba(0, 0, 0, 0.1)",localStorage.setItem("mode","dark");else return r.style.background="linear-gradient(180deg, #4f2ee8 0%, #dcdcdc 100%)",r.style.boxShadow="inset 1px 1px 2px 0 rgba(0, 0, 0, 0.1)",localStorage.setItem("mode","light")});r.addEventListener("click",()=>r.classList.toggle("active"));
//# sourceMappingURL=main-cc212abf.js.map
