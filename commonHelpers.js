import{s as j,i as _,g as z,a as w,b as R,c as C,d as W,e as O}from"./assets/mob-menu-5bc6becb.js";import{i as T}from"./assets/vendor-372b0e6c.js";import"https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";const p="/goit-js-project-group13/assets/modal-icons-6da17b7d.svg",$=document.querySelector("body"),S=document.querySelector("#modalBookContainer");let M,g,k,r,d,f,c;document.addEventListener("keyup",t=>{t.code==="Escape"&&u()});async function P(t){c=t,f=await z(c),d=_(c);const o=N(f);S.insertAdjacentHTML("afterbegin",o),M=document.querySelector("#bookActionContainer"),Q(),x(),U(),$.classList.add("overflow-hidden")}function u(){k.removeEventListener("click",u),r.removeEventListener("click",L),g.removeEventListener("click",H),S.innerHTML="",$.classList.remove("overflow-hidden")}function L(){r.removeEventListener("click",L),j(c),d=_(c);const t=q();M.innerHTML=t,x()}function N(t){var v,y;const{book_image:o,author:e,title:s,description:i,buy_links:b}=t,I=((v=b.find(m=>m.name==="Amazon"))==null?void 0:v.url)||"https://www.amazon.com/",D=((y=b.find(m=>m.name==="Apple Books"))==null?void 0:y.url)||"https://www.apple.com/apple-books/";return`
    <div class="book-background" id="modalBookBackground">
      <div class="modal-container">
        <button class="modal-close" id="modalClose">
          <svg class="modal-close-icon" width="12" height="12">
            <use href="${p}#icon-close"></use>
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
  `}function Q(){k=document.querySelector("#modalClose"),k.addEventListener("click",u)}function x(){r=document.querySelector("#shoppingListBtn"),r.addEventListener("click",L)}function U(){g=document.querySelector("#modalBookBackground"),g.addEventListener("click",H)}function H(t){t.target===t.currentTarget&&u()}function Y(){T.error({title:"Warning",message:"There are no more books in this category",position:"topRight",backgroundColor:"#eac645"})}const n={topListElem:document.querySelector("#topList"),categoryListElem:document.querySelector("#categoryList"),titleElement:document.querySelector(".top_list-title")};let h=!1;document.addEventListener("DOMContentLoaded",function(){document.addEventListener("click",J),document.addEventListener("click",l),document.addEventListener("click",K),window.addEventListener("scroll",V)});document.addEventListener("DOMContentLoaded",async function(){w(n.titleElement),n.topListElem.innerHTML="";const o=await R();let e="";o.forEach(s=>{e+=F(s)}),n.topListElem.innerHTML=e,C()});function F(t){return`
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
    `).join("");return o++,e}const l=function(t){var o;if((o=t.target.parentElement)!=null&&o.classList.contains("top_list-book_cover_wrapper")){const e=t.target.parentElement.dataset.bookid;P(e)}},J=function(t){if(t.target.classList.contains("top_list-see_more")){n.topListElem.classList.add("hidden"),n.categoryListElem.classList.remove("hidden");const o=t.target.dataset.category;B(o),E(o),document.removeEventListener("click",l),document.addEventListener("click",l),a()}if(t.target.classList.contains("gallery-link")){n.topListElem.classList.add("hidden"),n.categoryListElem.classList.remove("hidden");const o=t.target.textContent.trim();B(o),E(o),a(),document.removeEventListener("click",l),document.addEventListener("click",l),a()}},K=async function(t){(t.target.classList.contains("all_categories")||t.target.classList.contains("link"))&&(n.titleElement.innerHTML="Best Sellers <span>Books</span>",n.categoryListElem.classList.add("hidden"),n.topListElem.classList.remove("hidden"),a())};async function E(t){w(n.titleElement),n.categoryListElem.innerHTML="";const e=await W(t);let s="";e.forEach(i=>{s+=`
        <li class="category_list-card">
            <div class="top_list-book_cover_wrapper" data-bookid="${i._id}" tabindex="0">
                <img class="top_list-book_cover" src="${i.book_image}" alt="${i.title}">
                <div class="quick-view-text">Quick view</div>
            </div>
            <h3 class="top_list-book_title">${i.title}</h3>
            <p class="top_list-book_author">${i.author}</p>
        </li>
        `}),s+='<li><button class="all_categories">All Categories</button></li>',n.categoryListElem.innerHTML=s,C()}function B(t){const e=t.split(" "),s=e.pop();n.titleElement.textContent=e.join(" ");const i=document.createElement("span");i.textContent=" "+s,n.titleElement.appendChild(i),h=!1}function V(){const t=document.querySelector(".all_categories");if(t){const o=t.getBoundingClientRect(),e=window.innerHeight||document.documentElement.clientHeight;o.top<e&&!h&&n.topListElem.classList.contains("hidden")&&(Y(),h=!0)}}function a(){const t=window.innerWidth||document.documentElement.clientWidth,o=n.titleElement;t<1440&&setTimeout(function(){const e=o.getBoundingClientRect().top-60;window.scrollTo({top:e,behavior:"smooth"})},1100)}const X=document.querySelector(".all-categories");function Z(t){return t.map(e=>`
            <li class="gallery-item">
            <a class="gallery-link" href=#>${e.list_name}
            </a>
          </li>`).join("")}function tt(t){X.insertAdjacentHTML("beforeend",t)}O().then(t=>Z(t)).then(t=>{tt(t),ot()}).catch(t=>T.error({maxWidth:"432px",messageColor:"rgb(250, 250, 251)",messageSize:"16px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",message:`${t}`}));function ot(){const t=document.querySelectorAll(".gallery-link"),o=document.querySelector(".link");t.forEach(e=>{e.addEventListener("click",()=>{o.classList.remove("all-categories-link")})})}const A=document.getElementById("scrollToTopBtn");document.body.scrollTop=0;document.documentElement.scrollTop=0;A.addEventListener("click",nt);window.addEventListener("scroll",et);function et(){document.body.scrollTop>20||document.documentElement.scrollTop>20?(document.getElementById("scrollToTopBtn").style.display="block",A.classList.remove("visually-hidden")):document.getElementById("scrollToTopBtn").style.display="none"}function nt(){window.scrollTo({top:0,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
