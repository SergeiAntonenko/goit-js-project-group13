import{s as R,i as _,g as j,a as C,b as z,c as T,d as W,e as P}from"./assets/mob-menu-87d27780.js";import{i as L}from"./assets/vendor-372b0e6c.js";import"https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";const p="/goit-js-project-group13/assets/modal-icons-6da17b7d.svg",$=document.querySelector("body"),S=document.querySelector("#modalBookContainer");let M,g,k,r,d,E,c;document.addEventListener("keyup",t=>{t.code==="Escape"&&u()});async function O(t){c=t,E=await j(c),d=_(c);const o=N(E);S.insertAdjacentHTML("afterbegin",o),M=document.querySelector("#bookActionContainer"),Q(),x(),U(),$.classList.add("overflow-hidden")}function u(){k.removeEventListener("click",u),r.removeEventListener("click",b),g.removeEventListener("click",H),S.innerHTML="",$.classList.remove("overflow-hidden")}function b(){r.removeEventListener("click",b),R(c),d=_(c);const t=q();M.innerHTML=t,x()}function N(t){var f,y;const{book_image:o,author:e,title:i,description:s,buy_links:v}=t,I=((f=v.find(m=>m.name==="Amazon"))==null?void 0:f.url)||"https://www.amazon.com/",D=((y=v.find(m=>m.name==="Apple Books"))==null?void 0:y.url)||"https://www.apple.com/apple-books/";return`
    <div class="book-background" id="modalBookBackground">
      <div class="modal-container">
        <button class="modal-close" id="modalClose">
          <svg class="modal-close-icon" width="12" height="12">
            <use href="${p}#icon-close"></use>
          </svg>
        </button>
        <div class="book-box">
          <img src="${o}" alt="${i} cover" class="book-cover">
          <div class="book-description-box">
            <h2 class="book-title">${i}</h2>
            <div class="book-author">${e}</div>
            <p class="book-description">${s}</p>
            <ul class="book-shop-list">
              <li class="book-shop-item">
                <a href="${I}" class="book-shop-link" target="_blank">
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
    <button class="book-action-btn" id="shoppingListBtn">${d?"remove from the shopping list":"add to shopping list"}</button>
    ${d?'<p class="book-congratulations">Сongratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".</p>':""}
  `}function Q(){k=document.querySelector("#modalClose"),k.addEventListener("click",u)}function x(){r=document.querySelector("#shoppingListBtn"),r.addEventListener("click",b)}function U(){g=document.querySelector("#modalBookBackground"),g.addEventListener("click",H)}function H(t){t.target===t.currentTarget&&u()}function Y(){L.error({title:"Warning",message:"There are no more books in this category",position:"topRight",backgroundColor:"#eac645"})}function F(){L.error({title:"Warning",message:"There are no more books in this library",position:"topRight",backgroundColor:"#eac645"})}const n={topListElem:document.querySelector("#topList"),categoryListElem:document.querySelector("#categoryList"),titleElement:document.querySelector(".top_list-title")};let h=!1;document.addEventListener("DOMContentLoaded",function(){document.addEventListener("click",K),document.addEventListener("click",l),document.addEventListener("click",V),window.addEventListener("scroll",X)});document.addEventListener("DOMContentLoaded",async function(){C(n.titleElement),n.topListElem.innerHTML="";const o=await z();let e="";o.forEach(i=>{e+=G(i)}),n.topListElem.innerHTML=e,T()});function G(t){return`
        <li class="top_list-container">
            <h2 class="top_list-category_name">${t.list_name}</h2>
            <ul class="top_list-cards">${J(t.books)}</ul>
            <button class="top_list-see_more" data-category="${t.list_name}">See More</button>
        </li>
    `}function J(t){let o=1;const e=t.map(i=>`
        <li class="top_list-card" data-book-sequence-number="${o++}">
            <div class="top_list-book_cover_wrapper" data-bookid="${i._id}" tabindex="0">
                <img class="top_list-book_cover" src="${i.book_image}" alt="${i.title}">
                <div class="quick-view-text">Quick view</div>
            </div>
            <h3 class="top_list-book_title">${i.title}</h3>
            <p class="top_list-book_author">${i.author}</p>
        </li>
    `).join("");return o++,e}const l=function(t){var o;if((o=t.target.parentElement)!=null&&o.classList.contains("top_list-book_cover_wrapper")){const e=t.target.parentElement.dataset.bookid;O(e)}},K=function(t){if(t.target.classList.contains("top_list-see_more")){n.topListElem.classList.add("hidden"),n.categoryListElem.classList.remove("hidden");const o=t.target.dataset.category;w(o),B(o),document.removeEventListener("click",l),document.addEventListener("click",l),a()}if(t.target.classList.contains("gallery-link")){n.topListElem.classList.add("hidden"),n.categoryListElem.classList.remove("hidden");const o=t.target.textContent.trim();w(o),B(o),a(),document.removeEventListener("click",l),document.addEventListener("click",l),a()}},V=async function(t){(t.target.classList.contains("all_categories")||t.target.classList.contains("link"))&&(n.titleElement.innerHTML="Best Sellers <span>Books</span>",n.categoryListElem.classList.add("hidden"),n.topListElem.classList.remove("hidden"),a())};async function B(t){C(n.titleElement),n.categoryListElem.innerHTML="";const e=await W(t);let i="";e.forEach(s=>{i+=`
        <li class="category_list-card">
            <div class="top_list-book_cover_wrapper" data-bookid="${s._id}" tabindex="0">
                <img class="top_list-book_cover" src="${s.book_image}" alt="${s.title}">
                <div class="quick-view-text">Quick view</div>
            </div>
            <h3 class="top_list-book_title">${s.title}</h3>
            <p class="top_list-book_author">${s.author}</p>
        </li>
        `}),i+='<li><button class="all_categories">All Categories</button></li>',n.categoryListElem.innerHTML=i,T()}function w(t){const e=t.split(" "),i=e.pop();n.titleElement.textContent=e.join(" ");const s=document.createElement("span");s.textContent=" "+i,n.titleElement.appendChild(s),h=!1}function X(){const t=document.querySelector(".all_categories");if(t){const o=t.getBoundingClientRect(),e=window.innerHeight||document.documentElement.clientHeight;o.top<e&&!h&&n.topListElem.classList.contains("hidden")&&(Y(),h=!0)}}function a(){const t=window.innerWidth||document.documentElement.clientWidth,o=n.titleElement;t<1440&&setTimeout(function(){const e=o.getBoundingClientRect().top-60;window.scrollTo({top:e,behavior:"smooth"})},1100)}function Z(){return window.innerHeight+window.scrollY>=document.body.offsetHeight}window.addEventListener("scroll",function(){Z()&&n.titleElement.textContent.trim()==="Best Sellers Books"&&F()});const tt=document.querySelector(".all-categories");function ot(t){return t.map(e=>`
            <li class="gallery-item">
            <a class="gallery-link" href=#>${e.list_name}
            </a>
          </li>`).join("")}function et(t){tt.insertAdjacentHTML("beforeend",t)}P().then(t=>ot(t)).then(t=>{et(t),nt()}).catch(t=>L.error({maxWidth:"432px",messageColor:"rgb(250, 250, 251)",messageSize:"16px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",message:`${t}`}));function nt(){const t=document.querySelectorAll(".gallery-link"),o=document.querySelector(".link");t.forEach(e=>{e.addEventListener("click",()=>{o.classList.remove("all-categories-link")})})}const A=document.getElementById("scrollToTopBtn");document.body.scrollTop=0;document.documentElement.scrollTop=0;A.addEventListener("click",st);window.addEventListener("scroll",it);function it(){document.body.scrollTop>20||document.documentElement.scrollTop>20?(document.getElementById("scrollToTopBtn").style.display="block",A.classList.remove("visually-hidden")):document.getElementById("scrollToTopBtn").style.display="none"}function st(){window.scrollTo({top:0,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
