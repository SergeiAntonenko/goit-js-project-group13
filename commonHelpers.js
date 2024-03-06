import{s as j,i as T,g as z,a as C,b as P,c as $,d as W,e as O}from"./assets/mob-menu-fde5e066.js";import{i as L}from"./assets/vendor-372b0e6c.js";import"https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";const p="/goit-js-project-group13/assets/modal-icons-6da17b7d.svg",S=document.querySelector("body"),M=document.querySelector("#modalBookContainer");let q,g,k,r,d,E,c;document.addEventListener("keyup",t=>{t.code==="Escape"&&u()});async function N(t){c=t,E=await z(c),d=T(c);const o=Q(E);M.insertAdjacentHTML("afterbegin",o),q=document.querySelector("#bookActionContainer"),U(),H(),Y(),S.classList.add("overflow-hidden")}function u(){k.removeEventListener("click",u),r.removeEventListener("click",b),g.removeEventListener("click",A),M.innerHTML="",S.classList.remove("overflow-hidden")}function b(){r.removeEventListener("click",b),j(c),d=T(c);const t=x();q.innerHTML=t,H()}function Q(t){var f,y;const{book_image:o,author:e,title:n,description:s,buy_links:v}=t,D=((f=v.find(m=>m.name==="Amazon"))==null?void 0:f.url)||"https://www.amazon.com/",R=((y=v.find(m=>m.name==="Apple Books"))==null?void 0:y.url)||"https://www.apple.com/apple-books/";return`
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
            <p class="book-description">${s}</p>
            <ul class="book-shop-list">
              <li class="book-shop-item">
                <a href="${D}" class="book-shop-link" target="_blank">
                  <svg class="book-shop-logo amazon-logo" width="62" height="19">
                    <use href="${p}#icon-amazon-logo"></use>
                  </svg>
                </a>
              </li>
              <li class="book-shop-item">
                <a href="${R}" class="book-shop-link" target="_blank">
                  <svg class="book-shop-logo ibooks-logo" width="32" height="32">
                    <use href="${p}#icon-ibooks-logo"></use>
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
    <button class="book-action-btn" id="shoppingListBtn">${d?"remove from the shopping list":"add to shopping list"}</button>
    ${d?'<p class="book-congratulations">Сongratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".</p>':""}
  `}function U(){k=document.querySelector("#modalClose"),k.addEventListener("click",u)}function H(){r=document.querySelector("#shoppingListBtn"),r.addEventListener("click",b)}function Y(){g=document.querySelector("#modalBookBackground"),g.addEventListener("click",A)}function A(t){t.target===t.currentTarget&&u()}function F(){L.show({message:"There are no more books in this category",position:"topRight",backgroundColor:"#eac645"})}function G(){L.show({message:"There are no more categories in this library",position:"topRight",backgroundColor:"#eac645"})}const i={topListElem:document.querySelector("#topList"),categoryListElem:document.querySelector("#categoryList"),titleElement:document.querySelector(".top_list-title")};let h=!1;document.addEventListener("DOMContentLoaded",function(){document.addEventListener("click",V),document.addEventListener("click",l),document.addEventListener("click",X),window.addEventListener("scroll",Z)});document.addEventListener("DOMContentLoaded",async function(){C(i.titleElement),i.topListElem.innerHTML="";const o=await P();let e="";o.forEach(n=>{e+=J(n)}),i.topListElem.innerHTML=e,$()});function J(t){return`
        <li class="top_list-container">
            <h2 class="top_list-category_name">${t.list_name}</h2>
            <ul class="top_list-cards">${K(t.books)}</ul>
            <button class="top_list-see_more" data-category="${t.list_name}">See More</button>
        </li>
    `}function K(t){let o=1;const e=t.map(n=>`
        <li class="top_list-card" data-book-sequence-number="${o++}">
            <div class="top_list-book_cover_wrapper" data-bookid="${n._id}" tabindex="0">
                <img class="top_list-book_cover" src="${n.book_image}" alt="${n.title}">
                <div class="quick-view-text">Quick view</div>
            </div>
            <h3 class="top_list-book_title">${n.title}</h3>
            <p class="top_list-book_author">${n.author}</p>
        </li>
    `).join("");return o++,e}const l=function(t){var o;if((o=t.target.parentElement)!=null&&o.classList.contains("top_list-book_cover_wrapper")){const e=t.target.parentElement.dataset.bookid;N(e)}},V=function(t){if(t.target.classList.contains("top_list-see_more")){i.topListElem.classList.add("hidden"),i.categoryListElem.classList.remove("hidden");const o=t.target.dataset.category;w(o),B(o),document.removeEventListener("click",l),document.addEventListener("click",l),a()}if(t.target.classList.contains("gallery-link")){i.topListElem.classList.add("hidden"),i.categoryListElem.classList.remove("hidden");const o=t.target.textContent.trim();w(o),B(o),a(),document.removeEventListener("click",l),document.addEventListener("click",l),a()}},X=async function(t){(t.target.classList.contains("all_categories")||t.target.classList.contains("link"))&&(i.titleElement.innerHTML="Best Sellers <span>Books</span>",i.categoryListElem.classList.add("hidden"),i.topListElem.classList.remove("hidden"),a())};async function B(t){C(i.titleElement),i.categoryListElem.innerHTML="";const e=await W(t);let n="";e.forEach(s=>{n+=`
        <li class="category_list-card">
            <div class="top_list-book_cover_wrapper" data-bookid="${s._id}" tabindex="0">
                <img class="top_list-book_cover" src="${s.book_image}" alt="${s.title}">
                <div class="quick-view-text">Quick view</div>
            </div>
            <h3 class="top_list-book_title">${s.title}</h3>
            <p class="top_list-book_author">${s.author}</p>
        </li>
        `}),n+='<li><button class="all_categories">All Categories</button></li>',i.categoryListElem.innerHTML=n,$()}function w(t){const e=t.split(" "),n=e.pop();i.titleElement.textContent=e.join(" ");const s=document.createElement("span");s.textContent=" "+n,i.titleElement.appendChild(s),h=!1}function Z(){const t=document.querySelector(".all_categories");if(t){const o=t.getBoundingClientRect(),e=window.innerHeight||document.documentElement.clientHeight;o.top<e&&!h&&i.topListElem.classList.contains("hidden")&&(F(),h=!0)}}function a(){const t=window.innerWidth||document.documentElement.clientWidth,o=i.titleElement;t<1440&&setTimeout(function(){const e=o.getBoundingClientRect().top-60;window.scrollTo({top:e,behavior:"smooth"})},1100)}let _;function tt(){return window.innerHeight+window.scrollY>=document.body.offsetHeight}window.addEventListener("scroll",function(){tt()&&(clearTimeout(_),_=setTimeout(function(){i.titleElement.textContent.trim()==="Best Sellers Books"&&G()},500))});const ot=document.querySelector(".all-categories");function et(t){return t.map(e=>`
            <li class="gallery-item">
            <a class="gallery-link" href=#>${e.list_name}
            </a>
          </li>`).join("")}function nt(t){ot.insertAdjacentHTML("beforeend",t)}O().then(t=>et(t)).then(t=>{nt(t),it(),st()}).catch(t=>L.error({maxWidth:"432px",messageColor:"rgb(250, 250, 251)",messageSize:"16px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",message:`${t}`}));function it(){const t=document.querySelectorAll(".gallery-link"),o=document.querySelector(".link");t.forEach(e=>{e.addEventListener("click",()=>{o.classList.remove("all-categories-link")})})}function st(){const t=document.querySelectorAll(".gallery-link");let o=0;t.forEach((e,n)=>{e.addEventListener("click",()=>{t[o].classList.remove("active"),o=n,t[o].classList.add("active")})})}const I=document.getElementById("scrollToTopBtn");document.body.scrollTop=0;document.documentElement.scrollTop=0;I.addEventListener("click",ct);window.addEventListener("scroll",lt);function lt(){document.body.scrollTop>20||document.documentElement.scrollTop>20?(document.getElementById("scrollToTopBtn").style.display="block",I.classList.remove("visually-hidden")):document.getElementById("scrollToTopBtn").style.display="none"}function ct(){window.scrollTo({top:0,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
