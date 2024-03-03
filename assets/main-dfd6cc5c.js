import u from"https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";import{i as q}from"./vendor-ad859c2f.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const m="https://books-backend.p.goit.global",k=["/books/category-list","/books/top-books","/books/category","/books"];async function A(){const t=`${m}${k[0]}`;try{return(await u.get(t)).data}catch(e){throw console.error("Error fetching category list: ",e),e}}async function H(){const t=`${m}${k[1]}`;try{return(await u.get(t)).data}catch(e){throw console.error("Error fetching Top Books list: ",e),e}}async function O(t){const e=`${m}${k[2]}`,s={category:t};try{return(await u.get(e,{params:s})).data}catch(i){throw console.error("Error fetching books by category name: ",i),i}}async function P(t){const e=`${m}${k[3]}/${t}`;try{return(await u.get(e)).data}catch(s){throw console.error("Error fetching book by id: ",s),s}}const f="/goit-js-project-group13/assets/modal-icons-6da17b7d.svg",x="shoppingIdList",B=document.querySelector("body"),C=document.querySelector("#modalBookContainer");let M,L,g,d,l,$,p;async function j(t){p=t,l=JSON.parse(localStorage.getItem(x))||[],$=await P(p),d=l.includes(p);const e=D($);C.insertAdjacentHTML("afterbegin",e),M=document.querySelector("#bookActionContainer"),z(),T(),B.classList.add("overflow-hidden")}function U(){L.removeEventListener("click",U),g.removeEventListener("click",_),C.innerHTML="",B.classList.remove("overflow-hidden")}function _(){g.removeEventListener("click",_),d?l=l.filter(e=>e!==p):l.push(p),localStorage.setItem(x,JSON.stringify(l)),d=!d;const t=I();M.innerHTML=t,T()}function D(t){var y,E;const{book_image:e,author:s,title:i,description:o,buy_links:r}=t,c=((y=r.find(b=>b.name==="Amazon"))==null?void 0:y.url)||"https://www.amazon.com/",h=((E=r.find(b=>b.name==="Apple Books"))==null?void 0:E.url)||"https://www.apple.com/apple-books/";return`
    <div class="book-background" id="modalBookContainer">
      <div class="modal-container">
        <button class="modal-close" id="modalClose">
          <svg class="modal-close-icon" width="12" height="12">
            <use href="${f}#icon-close"></use>
          </svg>
        </button>
        <div class="book-box">
          <img src="${e}" alt="${i} cover" class="book-cover">
          <div class="book-description-box">
            <h2 class="book-title">${i}</h2>
            <div class="book-author">${s}</div>
            <p class="book-description">${o}</p>
            <ul class="book-shop-list">
              <li class="book-shop-item">
                <a href="${c}" class="book-shop-link" target="_blank">
                  <svg class="book-shop-logo amazon-logo" width="62" height="19">
                    <use href="${f}#icon-amazon-logo"></use>
                  </svg>
                </a>
              </li>
              <li class="book-shop-item">
                <a href="${h}" class="book-shop-link" target="_blank">
                  <svg class="book-shop-logo ibooks-logo" width="32" height="32">
                    <use href="${f}#icon-ibooks-logo"></use>
                  </svg>    
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="book-action" id="bookActionContainer">${I()}</div>
      </div>
    </div>
  `}function I(){return`
    <button class="book-action-btn" id="shoppingListBtn">${d?"remove from the shopping list":"add to shopping list"}</button>
    ${d?'<p class="book-congratulations">Сongratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".</p>':""}
  `}function z(){L=document.querySelector("#modalClose"),L.addEventListener("click",U)}function T(){g=document.querySelector("#shoppingListBtn"),g.addEventListener("click",_)}const n={topListElem:document.querySelector("#topList"),categoryListElem:document.querySelector("#categoryList"),titleElement:document.querySelector(".top_list-title")};document.addEventListener("DOMContentLoaded",function(){document.addEventListener("click",F),document.addEventListener("click",v),document.addEventListener("click",W)});document.addEventListener("DOMContentLoaded",async function(){n.topListElem.innerHTML="",(await H()).forEach(s=>{N(s)})});function N(t){const e=`
        <li class="top_list-container">
            <h2 class="top_list-category_name">${t.list_name}</h2>
            <ul class="top_list-cards">${R(t.books)}</ul>
            <button class="top_list-see_more" data-category="${t.list_name}">See More</button>
        </li>
    `;n.topListElem.innerHTML+=e}function R(t){let e=1;const s=t.map(i=>`
        <li class="top_list-card" data-book-sequence-number="${e++}">
            <div class="top_list-book_cover_wrapper" data-bookid="${i._id}" tabindex="0">
                <img class="top_list-book_cover" src="${i.book_image}" alt="${i.title}">
                <div class="quick-view-text">Quick view</div>
            </div>
            <h3 class="top_list-book_title">${i.title}</h3>
            <p class="top_list-book_author">${i.author}</p>
        </li>
    `).join("");return e++,s}const v=function(t){var e;if((e=t.target.parentElement)!=null&&e.classList.contains("top_list-book_cover_wrapper")){const s=t.target.parentElement.dataset.bookid;j(s)}},F=function(t){if(t.target.classList.contains("top_list-see_more")){n.topListElem.classList.add("hidden"),n.categoryListElem.classList.remove("hidden");const e=t.target.dataset.category;K(e),J(e),document.removeEventListener("click",v),document.addEventListener("click",v)}},W=async function(t){t.target.classList.contains("all_categories")&&(n.titleElement.innerHTML="Best Sellers <span>Books</span>",n.categoryListElem.classList.add("hidden"),n.topListElem.classList.remove("hidden"))};async function J(t){n.categoryListElem.innerHTML="",(await O(t)).forEach(o=>{const r=`
        <li class="category_list-card">
            <div class="top_list-book_cover_wrapper" data-bookid="${o._id}" tabindex="0">
                <img class="top_list-book_cover" src="${o.book_image}" alt="${o.title}">
                <div class="quick-view-text">Quick view</div>
            </div>
            <h3 class="top_list-book_title">${o.title}</h3>
            <p class="top_list-book_author">${o.author}</p>
        </li>
        `;n.categoryListElem.innerHTML+=r});const i='<li><button class="all_categories">All Categories</button></li>';n.categoryListElem.innerHTML+=i}function K(t){const s=t.split(" "),i=s.pop();n.titleElement.textContent=s.join(" ");const o=document.createElement("span");o.textContent=" "+i,n.titleElement.appendChild(o)}const Q=document.querySelector(".all-categories");function Y(t){return t.map(s=>`
            <li class="gallery-item">
            <a class="gallery-link" href=#>${s.list_name}
            </a>
          </li>`).join("")}function G(t){Q.insertAdjacentHTML("beforeend",t)}A().then(t=>Y(t)).then(t=>{G(t),Z()}).catch(t=>q.error({maxWidth:"432px",messageColor:"rgb(250, 250, 251)",messageSize:"16px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",message:`${t}`}));function Z(){const t=document.querySelector(".gallery-link"),e=document.querySelector(".link");t.addEventListener("click",()=>{e.classList.remove("all-categories-link")})}const w=document.querySelector("body"),a=document.querySelector(".toggle");document.getElementById("logo");document.getElementById("logo-dark");let S=localStorage.getItem("mode");S&&S==="dark"?(w.classList.add("dark"),a.classList.add("active")):(a.style.background="linear-gradient(180deg, #4f2ee8 0%, #dcdcdc 100%)",a.style.boxShadow="inset 1px 1px 2px 0 rgba(0, 0, 0, 0.1)");a.addEventListener("click",()=>{if(w.classList.toggle("dark"),w.classList.contains("dark"))a.style.background="linear-gradient(180deg, #4f2ee8 0%, #686868 100%)",a.style.boxShadow="inset 1px 1px 2px 0 rgba(0, 0, 0, 0.1)",localStorage.setItem("mode","dark");else return a.style.background="linear-gradient(180deg, #4f2ee8 0%, #dcdcdc 100%)",a.style.boxShadow="inset 1px 1px 2px 0 rgba(0, 0, 0, 0.1)",localStorage.setItem("mode","light")});a.addEventListener("click",()=>a.classList.toggle("active"));const V=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"./img/support-Ukr/save-the-children.png",img2:"./img/support-Ukr/save-the-children@2x.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"./img/support-Ukr/project-hope.png",img2:"./img/support-Ukr/project-hope@2x.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"./img/support-Ukr/intern-med-corps.png",img2:"./img/support-Ukr/intern-med-corps@2x.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"./img/support-Ukr/medecins-sans.png",img2:"./img/support-Ukr/medecins-sans@2x.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"./img/support-Ukr/razom.png ",img2:"./img/support-Ukr/razom@2x.png "},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"./img/support-Ukr/action-against.png ",img2:"./img/support-Ukr/action-against@2x.png "},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"./img/support-Ukr/world-vision.png",img2:"./img/support-Ukr/world-vision@2x.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"./img/support-Ukr/sergiy-prytula.png",img2:"./img/support-Ukr/sergiy-prytula@2x.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"./img/support-Ukr/united24.png",img2:"./img/support-Ukr/united24@2x.png"}],X=document.querySelector(".swiper-wrapper");document.querySelector(".swiper-button-next");const tt=t=>{const e=t.map((s,i)=>{const{title:o,url:r,img:c,img2:h}=s;return`
          <li class="support-list-item swiper-slide">
          <span class="supporters-number">${(i+1).toString().padStart(2,"0")}</span>
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="company icon"
              class="support-link"
              href="${r}"
            >
              <img
                src="${c}"
                alt="${o}"
                class="supporters_img"
                srcset="${c} 1x, ${h} 2x"
                loading="lazy"
              />
            </a>
            
          </li>
              `}).join("");X.innerHTML=`${e}`};tt(V);
//# sourceMappingURL=main-dfd6cc5c.js.map
