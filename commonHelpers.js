import{g as j,s as B,a as z,b as w,c as O,d as P}from"./assets/mob-menu-5d649ef3.js";import{i as C}from"./assets/vendor-372b0e6c.js";import"https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";const p="/goit-js-project-group13/assets/modal-icons-6da17b7d.svg",S="shoppingIdList",T=document.querySelector("body"),$=document.querySelector("#modalBookContainer");let M,g,k,d,c,l,f,r;document.addEventListener("keyup",t=>{t.code==="Escape"&&u()});async function N(t){r=t,l=JSON.parse(localStorage.getItem(S))||[],f=await j(r),c=l.includes(r);const o=R(f);$.insertAdjacentHTML("afterbegin",o),M=document.querySelector("#bookActionContainer"),W(),x(),J(),T.classList.add("overflow-hidden")}function u(){k.removeEventListener("click",u),d.removeEventListener("click",L),g.removeEventListener("click",H),$.innerHTML="",T.classList.remove("overflow-hidden")}function L(){d.removeEventListener("click",L),c?l=l.filter(o=>o!==r):l.push(r),localStorage.setItem(S,JSON.stringify(l)),c=!c;const t=q();M.innerHTML=t,x()}function R(t){var b,y;const{book_image:o,author:e,title:n,description:i,buy_links:v}=t,A=((b=v.find(m=>m.name==="Amazon"))==null?void 0:b.url)||"https://www.amazon.com/",D=((y=v.find(m=>m.name==="Apple Books"))==null?void 0:y.url)||"https://www.apple.com/apple-books/";return`
    <div class="book-background" id="modalBookBackground">
      <div class="modal-container">
        <button class="modal-close" id="modalClose">
          <svg class="modal-close-icon" width="12" height="12">
            <use href="${p}#icon-close"></use>
          </svg>
        </button>
        <div class="book-box">
          <img src="${o}" alt="${n} cover" class="book-cover">
          <div class="book-description-box">
            <h2 class="book-title">${n}</h2>
            <div class="book-author">${e}</div>
            <p class="book-description">${i}</p>
            <ul class="book-shop-list">
              <li class="book-shop-item">
                <a href="${A}" class="book-shop-link" target="_blank">
                  <svg class="book-shop-logo amazon-logo" width="62" height="19">
                    <use href="${p}#icon-amazon-logo"></use>
                  </svg>
                </a>
              </li>
              <li class="book-shop-item">
                <a href="${D}" class="book-shop-link" target="_blank">
                  <svg class="book-shop-logo ibooks-logo" width="32" height="32">
                    <use href="${p}#icon-ibooks-logo"></use>
                  </svg>    
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="book-action" id="bookActionContainer">${q()}</div>
      </div>
    </div>
  `}function q(){return`
    <button class="book-action-btn" id="shoppingListBtn">${c?"remove from the shopping list":"add to shopping list"}</button>
    ${c?'<p class="book-congratulations">Сongratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".</p>':""}
  `}function W(){k=document.querySelector("#modalClose"),k.addEventListener("click",u)}function x(){d=document.querySelector("#shoppingListBtn"),d.addEventListener("click",L)}function J(){g=document.querySelector("#modalBookBackground"),g.addEventListener("click",H)}function H(t){t.target===t.currentTarget&&u()}function Q(){C.error({title:"Warning",message:"There are no more books in this category",position:"topCenter"})}const s={topListElem:document.querySelector("#topList"),categoryListElem:document.querySelector("#categoryList"),titleElement:document.querySelector(".top_list-title")};let h=!1;document.addEventListener("DOMContentLoaded",function(){document.addEventListener("click",G),document.addEventListener("click",a),document.addEventListener("click",K),window.addEventListener("scroll",F)});document.addEventListener("DOMContentLoaded",async function(){B(s.titleElement),s.topListElem.innerHTML="";const o=await z();let e="";o.forEach(n=>{e+=U(n)}),s.topListElem.innerHTML=e,w()});function U(t){return`
        <li class="top_list-container">
            <h2 class="top_list-category_name">${t.list_name}</h2>
            <ul class="top_list-cards">${Y(t.books)}</ul>
            <button class="top_list-see_more" data-category="${t.list_name}">See More</button>
        </li>
    `}function Y(t){let o=1;const e=t.map(n=>`
        <li class="top_list-card" data-book-sequence-number="${o++}">
            <div class="top_list-book_cover_wrapper" data-bookid="${n._id}" tabindex="0">
                <img class="top_list-book_cover" src="${n.book_image}" alt="${n.title}">
                <div class="quick-view-text">Quick view</div>
            </div>
            <h3 class="top_list-book_title">${n.title}</h3>
            <p class="top_list-book_author">${n.author}</p>
        </li>
    `).join("");return o++,e}const a=function(t){var o;if((o=t.target.parentElement)!=null&&o.classList.contains("top_list-book_cover_wrapper")){const e=t.target.parentElement.dataset.bookid;N(e)}},G=function(t){if(t.target.classList.contains("top_list-see_more")){s.topListElem.classList.add("hidden"),s.categoryListElem.classList.remove("hidden");const o=t.target.dataset.category;_(o),E(o),document.removeEventListener("click",a),document.addEventListener("click",a)}if(t.target.classList.contains("gallery-link")){s.topListElem.classList.add("hidden"),s.categoryListElem.classList.remove("hidden");const o=t.target.textContent.trim();_(o),E(o),document.removeEventListener("click",a),document.addEventListener("click",a)}},K=async function(t){(t.target.classList.contains("all_categories")||t.target.classList.contains("link"))&&(s.titleElement.innerHTML="Best Sellers <span>Books</span>",s.categoryListElem.classList.add("hidden"),s.topListElem.classList.remove("hidden"))};async function E(t){B(s.titleElement),s.categoryListElem.innerHTML="";const e=await O(t);let n="";e.forEach(i=>{n+=`
        <li class="category_list-card">
            <div class="top_list-book_cover_wrapper" data-bookid="${i._id}" tabindex="0">
                <img class="top_list-book_cover" src="${i.book_image}" alt="${i.title}">
                <div class="quick-view-text">Quick view</div>
            </div>
            <h3 class="top_list-book_title">${i.title}</h3>
            <p class="top_list-book_author">${i.author}</p>
        </li>
        `}),n+='<li><button class="all_categories">All Categories</button></li>',s.categoryListElem.innerHTML=n,w()}function _(t){const e=t.split(" "),n=e.pop();s.titleElement.textContent=e.join(" ");const i=document.createElement("span");i.textContent=" "+n,s.titleElement.appendChild(i),h=!1}function F(){const t=document.querySelector(".all_categories");if(t){const o=t.getBoundingClientRect(),e=window.innerHeight||document.documentElement.clientHeight;o.top<e&&!h&&s.topListElem.classList.contains("hidden")&&(Q(),h=!0)}}const V=document.querySelector(".all-categories");function X(t){return t.map(e=>`
            <li class="gallery-item">
            <a class="gallery-link" href=#>${e.list_name}
            </a>
          </li>`).join("")}function Z(t){V.insertAdjacentHTML("beforeend",t)}P().then(t=>X(t)).then(t=>{Z(t),tt()}).catch(t=>C.error({maxWidth:"432px",messageColor:"rgb(250, 250, 251)",messageSize:"16px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",message:`${t}`}));function tt(){const t=document.querySelectorAll(".gallery-link"),o=document.querySelector(".link");t.forEach(e=>{e.addEventListener("click",()=>{o.classList.remove("all-categories-link")})})}const I=document.getElementById("scrollToTopBtn");document.body.scrollTop=0;document.documentElement.scrollTop=0;I.addEventListener("click",et);window.addEventListener("scroll",ot);function ot(){document.body.scrollTop>20||document.documentElement.scrollTop>20?(document.getElementById("scrollToTopBtn").style.display="block",I.classList.remove("visually-hidden")):document.getElementById("scrollToTopBtn").style.display="none"}function et(){window.scrollTo({top:0,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
