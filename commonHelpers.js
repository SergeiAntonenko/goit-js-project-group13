import{g as P,a as N,b as O,c as R}from"./assets/support-ukr-3619f58f.js";import{S as W,i as w}from"./assets/vendor-372b0e6c.js";import"https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";const g="/goit-js-project-group13/assets/modal-icons-6da17b7d.svg",C="shoppingIdList",S=document.querySelector("body"),T=document.querySelector("#modalBookContainer");let $,k,h,m,c,l,f,r;document.addEventListener("keyup",t=>{t.code==="Escape"&&p()});async function J(t){r=t,l=JSON.parse(localStorage.getItem(C))||[],f=await P(r),c=l.includes(r);const o=Q(f);T.insertAdjacentHTML("afterbegin",o),$=document.querySelector("#bookActionContainer"),U(),q(),Y(),S.classList.add("overflow-hidden")}function p(){h.removeEventListener("click",p),m.removeEventListener("click",b),k.removeEventListener("click",x),T.innerHTML="",S.classList.remove("overflow-hidden")}function b(){m.removeEventListener("click",b),c?l=l.filter(o=>o!==r):l.push(r),localStorage.setItem(C,JSON.stringify(l)),c=!c;const t=M();$.innerHTML=t,q()}function Q(t){var v,y;const{book_image:o,author:e,title:s,description:i,buy_links:d}=t,z=((v=d.find(u=>u.name==="Amazon"))==null?void 0:v.url)||"https://www.amazon.com/",j=((y=d.find(u=>u.name==="Apple Books"))==null?void 0:y.url)||"https://www.apple.com/apple-books/";return`
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
                <a href="${z}" class="book-shop-link" target="_blank">
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
        <div class="book-action" id="bookActionContainer">${M()}</div>
      </div>
    </div>
  `}function M(){return`
    <button class="book-action-btn" id="shoppingListBtn">${c?"remove from the shopping list":"add to shopping list"}</button>
    ${c?'<p class="book-congratulations">Сongratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".</p>':""}
  `}function U(){h=document.querySelector("#modalClose"),h.addEventListener("click",p)}function q(){m=document.querySelector("#shoppingListBtn"),m.addEventListener("click",b)}function Y(){k=document.querySelector("#modalBookBackground"),k.addEventListener("click",x)}function x(t){t.target===t.currentTarget&&p()}let F={lines:14,length:12,width:8,radius:16,scale:.6,corners:1,speed:1,rotate:0,animation:"spinner-line-fade-quick",direction:1,color:"#4F2EE8",fadeColor:"transparent",top:"50%",left:"50%",shadow:"0 0 1px transparent",zIndex:999,className:"spinner",position:"absolute"};const H=new W(F),I=t=>{H.spin(t)},A=()=>{H.stop()};function G(){w.error({title:"Warning",message:"There are no more books in this category",position:"topCenter"})}const n={topListElem:document.querySelector("#topList"),categoryListElem:document.querySelector("#categoryList"),titleElement:document.querySelector(".top_list-title")};let L=!1;document.addEventListener("DOMContentLoaded",function(){document.addEventListener("click",X),document.addEventListener("click",a),document.addEventListener("click",Z),window.addEventListener("scroll",tt)});document.addEventListener("DOMContentLoaded",async function(){n.topListElem.innerHTML="",I(n.topListElem),(await N()).forEach(e=>{K(e)}),A()});function K(t){const o=`
        <li class="top_list-container">
            <h2 class="top_list-category_name">${t.list_name}</h2>
            <ul class="top_list-cards">${V(t.books)}</ul>
            <button class="top_list-see_more" data-category="${t.list_name}">See More</button>
        </li>
    `;n.topListElem.innerHTML+=o}function V(t){let o=1;const e=t.map(s=>`
        <li class="top_list-card" data-book-sequence-number="${o++}">
            <div class="top_list-book_cover_wrapper" data-bookid="${s._id}" tabindex="0">
                <img class="top_list-book_cover" src="${s.book_image}" alt="${s.title}">
                <div class="quick-view-text">Quick view</div>
            </div>
            <h3 class="top_list-book_title">${s.title}</h3>
            <p class="top_list-book_author">${s.author}</p>
        </li>
    `).join("");return o++,e}const a=function(t){var o;if((o=t.target.parentElement)!=null&&o.classList.contains("top_list-book_cover_wrapper")){const e=t.target.parentElement.dataset.bookid;J(e)}},X=function(t){if(t.target.classList.contains("top_list-see_more")){n.topListElem.classList.add("hidden"),n.categoryListElem.classList.remove("hidden");const o=t.target.dataset.category;_(o),E(o),document.removeEventListener("click",a),document.addEventListener("click",a)}if(t.target.classList.contains("gallery-link")){n.topListElem.classList.add("hidden"),n.categoryListElem.classList.remove("hidden");const o=t.target.textContent.trim();_(o),E(o),document.removeEventListener("click",a),document.addEventListener("click",a)}},Z=async function(t){(t.target.classList.contains("all_categories")||t.target.classList.contains("link"))&&(n.titleElement.innerHTML="Best Sellers <span>Books</span>",n.categoryListElem.classList.add("hidden"),n.topListElem.classList.remove("hidden"))};async function E(t){I(),n.categoryListElem.innerHTML="",(await O(t)).forEach(i=>{const d=`
        <li class="category_list-card">
            <div class="top_list-book_cover_wrapper" data-bookid="${i._id}" tabindex="0">
                <img class="top_list-book_cover" src="${i.book_image}" alt="${i.title}">
                <div class="quick-view-text">Quick view</div>
            </div>
            <h3 class="top_list-book_title">${i.title}</h3>
            <p class="top_list-book_author">${i.author}</p>
        </li>
        `;n.categoryListElem.innerHTML+=d});const s='<li><button class="all_categories">All Categories</button></li>';n.categoryListElem.innerHTML+=s,A()}function _(t){const e=t.split(" "),s=e.pop();n.titleElement.textContent=e.join(" ");const i=document.createElement("span");i.textContent=" "+s,n.titleElement.appendChild(i),L=!1}function tt(){const t=document.querySelector(".all_categories");if(t){const o=t.getBoundingClientRect(),e=window.innerHeight||document.documentElement.clientHeight;o.top<e&&!L&&n.topListElem.classList.contains("hidden")&&(G(),L=!0)}}const ot=document.querySelector(".all-categories");function et(t){return t.map(e=>`
            <li class="gallery-item">
            <a class="gallery-link" href=#>${e.list_name}
            </a>
          </li>`).join("")}function nt(t){ot.insertAdjacentHTML("beforeend",t)}R().then(t=>et(t)).then(t=>{nt(t),st()}).catch(t=>w.error({maxWidth:"432px",messageColor:"rgb(250, 250, 251)",messageSize:"16px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",message:`${t}`}));function st(){const t=document.querySelectorAll(".gallery-link"),o=document.querySelector(".link");t.forEach(e=>{e.addEventListener("click",()=>{o.classList.remove("all-categories-link")})})}const D=document.getElementById("scrollToTopBtn");document.body.scrollTop=0;document.documentElement.scrollTop=0;D.addEventListener("click",lt);window.addEventListener("scroll",it);function it(){document.body.scrollTop>20||document.documentElement.scrollTop>20?(document.getElementById("scrollToTopBtn").style.display="block",D.classList.remove("visually-hidden")):document.getElementById("scrollToTopBtn").style.display="none"}function lt(){window.scrollTo({top:0,behavior:"smooth"})}const B=document.querySelector(".mob-menu-link");document.querySelector(".mob-menu-list-link");B.addEventListener("click",function(){B.classList.remove("mob-menu-link"),shoppingListElement.classList.remove("mob-menu-list-link"),this.classList.add("mob-menu-link")});shoppingListElement.addEventListener("click",function(){homeElement.classList.remove("mob-menu-link"),shoppingListElement.classList.remove("mob-menu-list-link"),this.classList.add("mob-menu-list-link")});
//# sourceMappingURL=commonHelpers.js.map