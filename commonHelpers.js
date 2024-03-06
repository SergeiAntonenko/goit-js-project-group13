import{s as z,i as T,g as P,a as S,b as W,c as $,d as O,e as N}from"./assets/mob-menu-529b2ba0.js";import{i as v}from"./assets/vendor-372b0e6c.js";import"https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";const p="/goit-js-project-group13/assets/modal-icons-6da17b7d.svg",M=document.querySelector("body"),q=document.querySelector("#modalBookContainer");let x,g,k,r,d,B,c;document.addEventListener("keyup",t=>{t.code==="Escape"&&u()});async function Q(t){c=t,B=await P(c),d=T(c);const o=U(B);q.insertAdjacentHTML("afterbegin",o),x=document.querySelector("#bookActionContainer"),Y(),A(),F(),M.classList.add("overflow-hidden")}function u(){k.removeEventListener("click",u),r.removeEventListener("click",b),g.removeEventListener("click",I),q.innerHTML="",M.classList.remove("overflow-hidden")}function b(){r.removeEventListener("click",b),z(c),d=T(c);const t=H();x.innerHTML=t,A()}function U(t){var y,E;const{book_image:o,author:e,title:n,description:i,buy_links:f}=t,R=((y=f.find(m=>m.name==="Amazon"))==null?void 0:y.url)||"https://www.amazon.com/",j=((E=f.find(m=>m.name==="Apple Books"))==null?void 0:E.url)||"https://www.apple.com/apple-books/";return`
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
                <a href="${R}" class="book-shop-link" target="_blank">
                  <svg class="book-shop-logo amazon-logo" width="62" height="19">
                    <use href="${p}#icon-amazon-logo"></use>
                  </svg>
                </a>
              </li>
              <li class="book-shop-item">
                <a href="${j}" class="book-shop-link" target="_blank">
                  <svg class="book-shop-logo ibooks-logo" width="32" height="32">
                    <use href="${p}#icon-ibooks-logo"></use>
                  </svg>    
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="book-action" id="bookActionContainer">${H()}</div>
      </div>
    </div>
  `}function H(){return`
    <button class="book-action-btn" id="shoppingListBtn">${d?"remove from the shopping list":"add to shopping list"}</button>
    ${d?'<p class="book-congratulations">Сongratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".</p>':""}
  `}function Y(){k=document.querySelector("#modalClose"),k.addEventListener("click",u)}function A(){r=document.querySelector("#shoppingListBtn"),r.addEventListener("click",b)}function F(){g=document.querySelector("#modalBookBackground"),g.addEventListener("click",I)}function I(t){t.target===t.currentTarget&&u()}function G(){v.show({message:"There are no more books in this category",position:"topRight",backgroundColor:"#eac645"})}function J(){v.show({message:"There are no more categories in this library",position:"topRight",backgroundColor:"#eac645"})}const s={topListElem:document.querySelector("#topList"),categoryListElem:document.querySelector("#categoryList"),titleElement:document.querySelector(".top_list-title"),allCategoriesElement:document.querySelector(".all-categories")};let h=!1;document.addEventListener("DOMContentLoaded",function(){document.addEventListener("click",X),document.addEventListener("click",l),document.addEventListener("click",Z),window.addEventListener("scroll",tt)});document.addEventListener("DOMContentLoaded",async function(){S(s.titleElement),s.topListElem.innerHTML="";const o=await W();let e="";o.forEach(n=>{e+=K(n)}),s.topListElem.innerHTML=e,$()});function K(t){return`
        <li class="top_list-container">
            <h2 class="top_list-category_name">${t.list_name}</h2>
            <ul class="top_list-cards">${V(t.books)}</ul>
            <button class="top_list-see_more" data-category="${t.list_name}">See More</button>
        </li>
    `}function V(t){let o=1;const e=t.map(n=>`
        <li class="top_list-card" data-book-sequence-number="${o++}">
            <div class="top_list-book_cover_wrapper" data-bookid="${n._id}" tabindex="0">
                <img class="top_list-book_cover" src="${n.book_image}" alt="${n.title}">
                <div class="quick-view-text">Quick view</div>
            </div>
            <h3 class="top_list-book_title">${n.title}</h3>
            <p class="top_list-book_author">${n.author}</p>
        </li>
    `).join("");return o++,e}const l=function(t){var o;if((o=t.target.parentElement)!=null&&o.classList.contains("top_list-book_cover_wrapper")){const e=t.target.parentElement.dataset.bookid;Q(e)}},X=function(t){if(t.target.classList.contains("top_list-see_more")){s.topListElem.classList.add("hidden"),s.categoryListElem.classList.remove("hidden");const o=t.target.dataset.category;_(o),w(o),document.removeEventListener("click",l),document.addEventListener("click",l),a(),L(o)}if(t.target.classList.contains("gallery-link")){s.topListElem.classList.add("hidden"),s.categoryListElem.classList.remove("hidden");const o=t.target.textContent.trim();_(o),w(o),a(),document.removeEventListener("click",l),document.addEventListener("click",l),a(),L(o)}},Z=async function(t){t.target.classList.contains("all_categories")&&(s.titleElement.innerHTML="Best Sellers <span>Books</span>",s.categoryListElem.classList.add("hidden"),s.topListElem.classList.remove("hidden"),a(),L("All categories")),t.target.classList.contains("link")&&(s.titleElement.innerHTML="Best Sellers <span>Books</span>",s.categoryListElem.classList.add("hidden"),s.topListElem.classList.remove("hidden"),a())};async function w(t){S(s.titleElement),s.categoryListElem.innerHTML="";const e=await O(t);let n="";e.forEach(i=>{n+=`
        <li class="category_list-card">
            <div class="top_list-book_cover_wrapper" data-bookid="${i._id}" tabindex="0">
                <img class="top_list-book_cover" src="${i.book_image}" alt="${i.title}">
                <div class="quick-view-text">Quick view</div>
            </div>
            <h3 class="top_list-book_title">${i.title}</h3>
            <p class="top_list-book_author">${i.author}</p>
        </li>
        `}),n+='<li><button class="all_categories">All Categories</button></li>',s.categoryListElem.innerHTML=n,$()}function _(t){const e=t.split(" "),n=e.pop();s.titleElement.textContent=e.join(" ");const i=document.createElement("span");i.textContent=" "+n,s.titleElement.appendChild(i),h=!1}function tt(){const t=document.querySelector(".all_categories");if(t){const o=t.getBoundingClientRect(),e=window.innerHeight||document.documentElement.clientHeight;o.top<e&&!h&&s.topListElem.classList.contains("hidden")&&(G(),h=!0)}}function a(){const t=window.innerWidth||document.documentElement.clientWidth,o=s.titleElement;t<1440&&setTimeout(function(){const e=o.getBoundingClientRect().top-60;window.scrollTo({top:e,behavior:"smooth"})},1100)}let C;function ot(){return window.innerHeight+window.scrollY>=document.body.offsetHeight}window.addEventListener("scroll",function(){ot()&&(clearTimeout(C),C=setTimeout(function(){s.titleElement.textContent.trim()==="Best Sellers Books"&&J()},500))});function L(t){const o=document.querySelector(".link"),e=document.querySelector(".sidebar");s.allCategoriesElement.querySelectorAll(".gallery-link").forEach(n=>{t===n.textContent.trim()?(n.classList.add("active"),o.classList.remove("all-categories-link"),e.scrollTop=n.offsetTop-e.offsetTop):n.classList.remove("active")})}const et=document.querySelector(".all-categories");function nt(t){return t.map(e=>`
            <li class="gallery-item">
            <a class="gallery-link" href=#>${e.list_name}
            </a>
          </li>`).join("")}function st(t){et.insertAdjacentHTML("beforeend",t)}N().then(t=>nt(t)).then(t=>{st(t),it(),lt()}).catch(t=>v.error({maxWidth:"432px",messageColor:"rgb(250, 250, 251)",messageSize:"16px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",message:`${t}`}));function it(){const t=document.querySelectorAll(".gallery-link"),o=document.querySelector(".link");t.forEach(e=>{e.addEventListener("click",()=>{o.classList.remove("all-categories-link")})})}function lt(){const t=document.querySelectorAll(".gallery-link");let o=0;t.forEach((e,n)=>{e.addEventListener("click",()=>{t[o].classList.remove("active"),o=n,t[o].classList.add("active")})})}const D=document.getElementById("scrollToTopBtn");document.body.scrollTop=0;document.documentElement.scrollTop=0;D.addEventListener("click",at);window.addEventListener("scroll",ct);function ct(){document.body.scrollTop>20||document.documentElement.scrollTop>20?(document.getElementById("scrollToTopBtn").style.display="block",D.classList.remove("visually-hidden")):document.getElementById("scrollToTopBtn").style.display="none"}function at(){window.scrollTo({top:0,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
