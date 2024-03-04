import{g as z,s as w,a as O,b as C,c as R,d as P}from"./assets/mob-menu-1e45bd9a.js";import{i as S}from"./assets/vendor-372b0e6c.js";import"https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";const g="/goit-js-project-group13/assets/modal-icons-6da17b7d.svg",T="shoppingIdList",$=document.querySelector("body"),M=document.querySelector("#modalBookContainer");let q,k,h,u,c,l,E,r;document.addEventListener("keyup",t=>{t.code==="Escape"&&m()});async function W(t){r=t,l=JSON.parse(localStorage.getItem(T))||[],E=await z(r),c=l.includes(r);const o=N(E);M.insertAdjacentHTML("afterbegin",o),q=document.querySelector("#bookActionContainer"),J(),H(),Q(),$.classList.add("overflow-hidden")}function m(){h.removeEventListener("click",m),u.removeEventListener("click",b),k.removeEventListener("click",I),M.innerHTML="",$.classList.remove("overflow-hidden")}function b(){u.removeEventListener("click",b),c?l=l.filter(o=>o!==r):l.push(r),localStorage.setItem(T,JSON.stringify(l)),c=!c;const t=x();q.innerHTML=t,H()}function N(t){var f,y;const{book_image:o,author:e,title:s,description:i,buy_links:v}=t,D=((f=v.find(p=>p.name==="Amazon"))==null?void 0:f.url)||"https://www.amazon.com/",j=((y=v.find(p=>p.name==="Apple Books"))==null?void 0:y.url)||"https://www.apple.com/apple-books/";return`
    <div class="book-background" id="modalBookBackground">
      <div class="modal-container">
        <button class="modal-close" id="modalClose">
          <svg class="modal-close-icon" width="12" height="12">
            <use href="${g}#icon-close"></use>
          </svg>
        </button>
        <div class="book-box">
          <img src="${o}" alt="${s} cover" class="book-cover">
          <div class="book-description-box">
            <h2 class="book-title">${s}</h2>
            <div class="book-author">${e}</div>
            <p class="book-description">${i}</p>
            <ul class="book-shop-list">
              <li class="book-shop-item">
                <a href="${D}" class="book-shop-link" target="_blank">
                  <svg class="book-shop-logo amazon-logo" width="62" height="19">
                    <use href="${g}#icon-amazon-logo"></use>
                  </svg>
                </a>
              </li>
              <li class="book-shop-item">
                <a href="${j}" class="book-shop-link" target="_blank">
                  <svg class="book-shop-logo ibooks-logo" width="32" height="32">
                    <use href="${g}#icon-ibooks-logo"></use>
                  </svg>    
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="book-action" id="bookActionContainer">${x()}</div>
      </div>
    </div>
  `}function x(){return`
    <button class="book-action-btn" id="shoppingListBtn">${c?"remove from the shopping list":"add to shopping list"}</button>
    ${c?'<p class="book-congratulations">Сongratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".</p>':""}
  `}function J(){h=document.querySelector("#modalClose"),h.addEventListener("click",m)}function H(){u=document.querySelector("#shoppingListBtn"),u.addEventListener("click",b)}function Q(){k=document.querySelector("#modalBookBackground"),k.addEventListener("click",I)}function I(t){t.target===t.currentTarget&&m()}function U(){S.error({title:"Warning",message:"There are no more books in this category",position:"topRight",backgroundColor:"#eac645"})}const n={topListElem:document.querySelector("#topList"),categoryListElem:document.querySelector("#categoryList"),titleElement:document.querySelector(".top_list-title")};let L=!1;document.addEventListener("DOMContentLoaded",function(){document.addEventListener("click",K),document.addEventListener("click",a),document.addEventListener("click",F),window.addEventListener("scroll",V)});document.addEventListener("DOMContentLoaded",async function(){w(n.titleElement),n.topListElem.innerHTML="";const o=await O();let e="";o.forEach(s=>{e+=Y(s)}),n.topListElem.innerHTML=e,C()});function Y(t){return`
        <li class="top_list-container">
            <h2 class="top_list-category_name">${t.list_name}</h2>
            <ul class="top_list-cards">${G(t.books)}</ul>
            <button class="top_list-see_more" data-category="${t.list_name}">See More</button>
        </li>
    `}function G(t){let o=1;const e=t.map(s=>`
        <li class="top_list-card" data-book-sequence-number="${o++}">
            <div class="top_list-book_cover_wrapper" data-bookid="${s._id}" tabindex="0">
                <img class="top_list-book_cover" src="${s.book_image}" alt="${s.title}">
                <div class="quick-view-text">Quick view</div>
            </div>
            <h3 class="top_list-book_title">${s.title}</h3>
            <p class="top_list-book_author">${s.author}</p>
        </li>
    `).join("");return o++,e}const a=function(t){var o;if((o=t.target.parentElement)!=null&&o.classList.contains("top_list-book_cover_wrapper")){const e=t.target.parentElement.dataset.bookid;W(e)}},K=function(t){if(t.target.classList.contains("top_list-see_more")){n.topListElem.classList.add("hidden"),n.categoryListElem.classList.remove("hidden");const o=t.target.dataset.category;B(o),_(o),document.removeEventListener("click",a),document.addEventListener("click",a),d()}if(t.target.classList.contains("gallery-link")){n.topListElem.classList.add("hidden"),n.categoryListElem.classList.remove("hidden");const o=t.target.textContent.trim();B(o),_(o),d(),document.removeEventListener("click",a),document.addEventListener("click",a),d()}},F=async function(t){(t.target.classList.contains("all_categories")||t.target.classList.contains("link"))&&(n.titleElement.innerHTML="Best Sellers <span>Books</span>",n.categoryListElem.classList.add("hidden"),n.topListElem.classList.remove("hidden"),d())};async function _(t){w(n.titleElement),n.categoryListElem.innerHTML="";const e=await R(t);let s="";e.forEach(i=>{s+=`
        <li class="category_list-card">
            <div class="top_list-book_cover_wrapper" data-bookid="${i._id}" tabindex="0">
                <img class="top_list-book_cover" src="${i.book_image}" alt="${i.title}">
                <div class="quick-view-text">Quick view</div>
            </div>
            <h3 class="top_list-book_title">${i.title}</h3>
            <p class="top_list-book_author">${i.author}</p>
        </li>
        `}),s+='<li><button class="all_categories">All Categories</button></li>',n.categoryListElem.innerHTML=s,C()}function B(t){const e=t.split(" "),s=e.pop();n.titleElement.textContent=e.join(" ");const i=document.createElement("span");i.textContent=" "+s,n.titleElement.appendChild(i),L=!1}function V(){const t=document.querySelector(".all_categories");if(t){const o=t.getBoundingClientRect(),e=window.innerHeight||document.documentElement.clientHeight;o.top<e&&!L&&n.topListElem.classList.contains("hidden")&&(U(),L=!0)}}function d(){const t=window.innerWidth||document.documentElement.clientWidth,o=n.titleElement;t<1440&&setTimeout(function(){const e=o.getBoundingClientRect().top-60;window.scrollTo({top:e,behavior:"smooth"})},1100)}const X=document.querySelector(".all-categories");function Z(t){return t.map(e=>`
            <li class="gallery-item">
            <a class="gallery-link" href=#>${e.list_name}
            </a>
          </li>`).join("")}function tt(t){X.insertAdjacentHTML("beforeend",t)}P().then(t=>Z(t)).then(t=>{tt(t),ot()}).catch(t=>S.error({maxWidth:"432px",messageColor:"rgb(250, 250, 251)",messageSize:"16px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",message:`${t}`}));function ot(){const t=document.querySelectorAll(".gallery-link"),o=document.querySelector(".link");t.forEach(e=>{e.addEventListener("click",()=>{o.classList.remove("all-categories-link")})})}const A=document.getElementById("scrollToTopBtn");document.body.scrollTop=0;document.documentElement.scrollTop=0;A.addEventListener("click",nt);window.addEventListener("scroll",et);function et(){document.body.scrollTop>20||document.documentElement.scrollTop>20?(document.getElementById("scrollToTopBtn").style.display="block",A.classList.remove("visually-hidden")):document.getElementById("scrollToTopBtn").style.display="none"}function nt(){window.scrollTo({top:0,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
