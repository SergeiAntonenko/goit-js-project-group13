import g from"https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";import{i as U}from"./vendor-ad859c2f.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const m="https://books-backend.p.goit.global",h=["/books/category-list","/books/top-books","/books/category","/books"];async function A(){const t=`${m}${h[0]}`;try{return(await g.get(t)).data}catch(o){throw console.error("Error fetching category list: ",o),o}}async function H(){const t=`${m}${h[1]}`;try{return(await g.get(t)).data}catch(o){throw console.error("Error fetching Top Books list: ",o),o}}async function O(t){const o=`${m}${h[2]}`,r={category:t};try{return(await g.get(o,{params:r})).data}catch(s){throw console.error("Error fetching books by category name: ",s),s}}async function P(t){const o=`${m}${h[3]}/${t}`;try{return(await g.get(o)).data}catch(r){throw console.error("Error fetching book by id: ",r),r}}const f="/goit-js-project-group13/assets/modal-icons-6da17b7d.svg",x="shoppingIdList",B=document.querySelector("body"),C=document.querySelector("#modalBookContainer");let M,L,u,p,l,S,d;async function j(t){d=t,l=JSON.parse(localStorage.getItem(x))||[],S=await P(d),p=l.includes(d);const o=D(S);C.insertAdjacentHTML("afterbegin",o),M=document.querySelector("#bookActionContainer"),z(),q(),B.classList.add("overflow-hidden")}function T(){L.removeEventListener("click",T),u.removeEventListener("click",_),C.innerHTML="",B.classList.remove("overflow-hidden")}function _(){u.removeEventListener("click",_),p?l=l.filter(o=>o!==d):l.push(d),localStorage.setItem(x,JSON.stringify(l)),p=!p;const t=I();M.innerHTML=t,q()}function D(t){var y,E;const{book_image:o,author:r,title:s,description:e,buy_links:n}=t,c=((y=n.find(b=>b.name==="Amazon"))==null?void 0:y.url)||"https://www.amazon.com/",k=((E=n.find(b=>b.name==="Apple Books"))==null?void 0:E.url)||"https://www.apple.com/apple-books/";return`
    <div class="book-background" id="modalBookContainer">
      <div class="modal-container">
        <button class="modal-close" id="modalClose">
          <svg class="modal-close-icon" width="12" height="12">
            <use href="${f}#icon-close"></use>
          </svg>
        </button>
        <div class="book-box">
          <img src="${o}" alt="${s} cover" class="book-cover">
          <div class="book-description-box">
            <h2 class="book-title">${s}</h2>
            <div class="book-author">${r}</div>
            <p class="book-description">${e}</p>
            <ul class="book-shop-list">
              <li class="book-shop-item">
                <a href="${c}" class="book-shop-link" target="_blank">
                  <svg class="book-shop-logo amazon-logo" width="62" height="19">
                    <use href="${f}#icon-amazon-logo"></use>
                  </svg>
                </a>
              </li>
              <li class="book-shop-item">
                <a href="${k}" class="book-shop-link" target="_blank">
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
    <button class="book-action-btn" id="shoppingListBtn">${p?"remove from the shopping list":"add to shopping list"}</button>
    ${p?'<p class="book-congratulations">Сongratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".</p>':""}
  `}function z(){L=document.querySelector("#modalClose"),L.addEventListener("click",T)}function q(){u=document.querySelector("#shoppingListBtn"),u.addEventListener("click",_)}const i={topListElem:document.querySelector("#topList"),categoryListElem:document.querySelector("#categoryList"),titleElement:document.querySelector(".top_list-title")};document.addEventListener("DOMContentLoaded",function(){document.addEventListener("click",F),document.addEventListener("click",v),document.addEventListener("click",W)});document.addEventListener("DOMContentLoaded",async function(){i.topListElem.innerHTML="",(await H()).forEach(r=>{N(r)})});function N(t){const o=`
        <li class="top_list-container">
            <h2 class="top_list-category_name">${t.list_name}</h2>
            <ul class="top_list-cards">${R(t.books)}</ul>
            <button class="top_list-see_more" data-category="${t.list_name}">See More</button>
        </li>
    `;i.topListElem.innerHTML+=o}function R(t){let o=1;const r=t.map(s=>`
        <li class="top_list-card" data-book-sequence-number="${o++}">
            <div class="top_list-book_cover_wrapper" data-bookid="${s._id}" tabindex="0">
                <img class="top_list-book_cover" src="${s.book_image}" alt="${s.title}">
                <div class="quick-view-text">Quick view</div>
            </div>
            <h3 class="top_list-book_title">${s.title}</h3>
            <p class="top_list-book_author">${s.author}</p>
        </li>
    `).join("");return o++,r}const v=function(t){var o;if((o=t.target.parentElement)!=null&&o.classList.contains("top_list-book_cover_wrapper")){const r=t.target.parentElement.dataset.bookid;j(r)}},F=function(t){if(t.target.classList.contains("top_list-see_more")){i.topListElem.classList.add("hidden"),i.categoryListElem.classList.remove("hidden");const o=t.target.dataset.category;K(o),J(o),document.removeEventListener("click",v),document.addEventListener("click",v)}},W=async function(t){t.target.classList.contains("all_categories")&&(i.titleElement.innerHTML="Best Sellers <span>Books</span>",i.categoryListElem.classList.add("hidden"),i.topListElem.classList.remove("hidden"))};async function J(t){i.categoryListElem.innerHTML="",(await O(t)).forEach(e=>{const n=`
        <li class="category_list-card">
            <div class="top_list-book_cover_wrapper" data-bookid="${e._id}" tabindex="0">
                <img class="top_list-book_cover" src="${e.book_image}" alt="${e.title}">
                <div class="quick-view-text">Quick view</div>
            </div>
            <h3 class="top_list-book_title">${e.title}</h3>
            <p class="top_list-book_author">${e.author}</p>
        </li>
        `;i.categoryListElem.innerHTML+=n});const s='<li><button class="all_categories">All Categories</button></li>';i.categoryListElem.innerHTML+=s}function K(t){const r=t.split(" "),s=r.pop();i.titleElement.textContent=r.join(" ");const e=document.createElement("span");e.textContent=" "+s,i.titleElement.appendChild(e)}const Q=document.querySelector(".all-categories");function Y(t){return t.map(r=>`
            <li class="gallery-item">
            <a class="gallery-link" href=#>${r.list_name}
            </a>
          </li>`).join("")}function G(t){Q.insertAdjacentHTML("beforeend",t)}A().then(t=>Y(t)).then(t=>{G(t),Z()}).catch(t=>U.error({maxWidth:"432px",messageColor:"rgb(250, 250, 251)",messageSize:"16px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",message:`${t}`}));function Z(){const t=document.querySelector(".gallery-link"),o=document.querySelector(".link");t.addEventListener("click",()=>{o.classList.remove("all-categories-link")})}const w=document.querySelector("body"),a=document.querySelector(".toggle");document.getElementById("logo");document.getElementById("logo-dark");let $=localStorage.getItem("mode");$&&$==="dark"?(w.classList.add("dark"),a.classList.add("active")):(a.style.background="linear-gradient(180deg, #4f2ee8 0%, #dcdcdc 100%)",a.style.boxShadow="inset 1px 1px 2px 0 rgba(0, 0, 0, 0.1)");a.addEventListener("click",()=>{if(w.classList.toggle("dark"),w.classList.contains("dark"))a.style.background="linear-gradient(180deg, #4f2ee8 0%, #686868 100%)",a.style.boxShadow="inset 1px 1px 2px 0 rgba(0, 0, 0, 0.1)",localStorage.setItem("mode","dark");else return a.style.background="linear-gradient(180deg, #4f2ee8 0%, #dcdcdc 100%)",a.style.boxShadow="inset 1px 1px 2px 0 rgba(0, 0, 0, 0.1)",localStorage.setItem("mode","light")});a.addEventListener("click",()=>a.classList.toggle("active"));const V=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"./img/support-Ukr/save-the-children.png",img2:"./img/support-Ukr/save-the-children@2x.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"./img/support-Ukr/project-hope.png",img2:"./img/support-Ukr/project-hope@2x.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"./img/support-Ukr/intern-med-corps.png",img2:"./img/support-Ukr/intern-med-corps@2x.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"./img/support-Ukr/medecins-sans.png",img2:"./img/support-Ukr/medecins-sans@2x.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"./img/support-Ukr/razom.png ",img2:"./img/support-Ukr/razom@2x.png "},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"./img/support-Ukr/action-against.png ",img2:"./img/support-Ukr/action-against@2x.png "},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"./img/support-Ukr/world-vision.png",img2:"./img/support-Ukr/world-vision@2x.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"./img/support-Ukr/sergiy-prytula.png",img2:"./img/support-Ukr/sergiy-prytula@2x.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"./img/support-Ukr/united24.png",img2:"./img/support-Ukr/united24@2x.png"}],X=document.querySelector(".swiper-wrapper");document.querySelector(".swiper-button-next");const tt=t=>{const o=t.map((r,s)=>{const{title:e,url:n,img:c,img2:k}=r;return`
          <li class="support-list-item">
          <span class="supporters-number">${(s+1).toString().padStart(2,"0")}</span>
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="company icon"
              href="${n}"
            >
              <img
                src="${c}"
                alt="${e}"
                class="supporters_img"
                srcset="${c} 1x, ${k} 2x"
                loading="lazy"
              />
            </a>
            
          </li>
              `}).join("");X.innerHTML=`${o}`};tt(V);function ot(t,o){const r=-t.scrollTop/(o/15),s=setInterval(function(){t.scrollTop!=0?t.scrollBy(0,r):clearInterval(s)},15)}function et(){const t=document.querySelector(".swiper"),o=500;if(t.scrollTop+t.clientHeight>=t.scrollHeight){ot(t,o);const s=document.querySelector(".supporters-btn-icon");s.style.transform="rotate(180deg)"}else{t.scrollBy({top:300,behavior:"smooth"});const s=document.querySelector(".supporters-btn-icon");s.style.transform="rotate(0deg)"}}const st=document.querySelector(".supporters-btn");st.addEventListener("click",et);
//# sourceMappingURL=main-37349522.js.map
