import m from"https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";import{i as H}from"./vendor-ad859c2f.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();const k="https://books-backend.p.goit.global",h=["/books/category-list","/books/top-books","/books/category","/books"];async function O(){const t=`${k}${h[0]}`;try{return(await m.get(t)).data}catch(e){throw console.error("Error fetching category list: ",e),e}}async function P(){const t=`${k}${h[1]}`;try{return(await m.get(t)).data}catch(e){throw console.error("Error fetching Top Books list: ",e),e}}async function j(t){const e=`${k}${h[2]}`,r={category:t};try{return(await m.get(e,{params:r})).data}catch(s){throw console.error("Error fetching books by category name: ",s),s}}async function D(t){const e=`${k}${h[3]}/${t}`;try{return(await m.get(e)).data}catch(r){throw console.error("Error fetching book by id: ",r),r}}const L="/goit-js-project-group13/assets/modal-icons-6da17b7d.svg",C="shoppingIdList",M=document.querySelector("body"),T=document.querySelector("#modalBookContainer");let I,v,u,d,l,S,g;async function z(t){g=t,l=JSON.parse(localStorage.getItem(C))||[],S=await D(g),d=l.includes(g);const e=N(S);T.insertAdjacentHTML("afterbegin",e),I=document.querySelector("#bookActionContainer"),R(),A(),M.classList.add("overflow-hidden")}function q(){v.removeEventListener("click",q),u.removeEventListener("click",E),T.innerHTML="",M.classList.remove("overflow-hidden")}function E(){u.removeEventListener("click",E),d?l=l.filter(e=>e!==g):l.push(g),localStorage.setItem(C,JSON.stringify(l)),d=!d;const t=U();I.innerHTML=t,A()}function N(t){var b,_;const{book_image:e,author:r,title:s,description:o,buy_links:n}=t,c=((b=n.find(f=>f.name==="Amazon"))==null?void 0:b.url)||"https://www.amazon.com/",y=((_=n.find(f=>f.name==="Apple Books"))==null?void 0:_.url)||"https://www.apple.com/apple-books/";return`
    <div class="book-background" id="modalBookContainer">
      <div class="modal-container">
        <button class="modal-close" id="modalClose">
          <svg class="modal-close-icon" width="12" height="12">
            <use href="${L}#icon-close"></use>
          </svg>
        </button>
        <div class="book-box">
          <img src="${e}" alt="${s} cover" class="book-cover">
          <div class="book-description-box">
            <h2 class="book-title">${s}</h2>
            <div class="book-author">${r}</div>
            <p class="book-description">${o}</p>
            <ul class="book-shop-list">
              <li class="book-shop-item">
                <a href="${c}" class="book-shop-link" target="_blank">
                  <svg class="book-shop-logo amazon-logo" width="62" height="19">
                    <use href="${L}#icon-amazon-logo"></use>
                  </svg>
                </a>
              </li>
              <li class="book-shop-item">
                <a href="${y}" class="book-shop-link" target="_blank">
                  <svg class="book-shop-logo ibooks-logo" width="32" height="32">
                    <use href="${L}#icon-ibooks-logo"></use>
                  </svg>    
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="book-action" id="bookActionContainer">${U()}</div>
      </div>
    </div>
  `}function U(){return`
    <button class="book-action-btn" id="shoppingListBtn">${d?"remove from the shopping list":"add to shopping list"}</button>
    ${d?'<p class="book-congratulations">Сongratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".</p>':""}
  `}function R(){v=document.querySelector("#modalClose"),v.addEventListener("click",q)}function A(){u=document.querySelector("#shoppingListBtn"),u.addEventListener("click",E)}const i={topListElem:document.querySelector("#topList"),categoryListElem:document.querySelector("#categoryList"),titleElement:document.querySelector(".top_list-title")};document.addEventListener("DOMContentLoaded",function(){document.addEventListener("click",J),document.addEventListener("click",p),document.addEventListener("click",K)});document.addEventListener("DOMContentLoaded",async function(){i.topListElem.innerHTML="",(await P()).forEach(r=>{F(r)})});function F(t){const e=`
        <li class="top_list-container">
            <h2 class="top_list-category_name">${t.list_name}</h2>
            <ul class="top_list-cards">${W(t.books)}</ul>
            <button class="top_list-see_more" data-category="${t.list_name}">See More</button>
        </li>
    `;i.topListElem.innerHTML+=e}function W(t){let e=1;const r=t.map(s=>`
        <li class="top_list-card" data-book-sequence-number="${e++}">
            <div class="top_list-book_cover_wrapper" data-bookid="${s._id}" tabindex="0">
                <img class="top_list-book_cover" src="${s.book_image}" alt="${s.title}">
                <div class="quick-view-text">Quick view</div>
            </div>
            <h3 class="top_list-book_title">${s.title}</h3>
            <p class="top_list-book_author">${s.author}</p>
        </li>
    `).join("");return e++,r}const p=function(t){var e;if((e=t.target.parentElement)!=null&&e.classList.contains("top_list-book_cover_wrapper")){const r=t.target.parentElement.dataset.bookid;z(r)}},J=function(t){if(t.target.classList.contains("top_list-see_more")){i.topListElem.classList.add("hidden"),i.categoryListElem.classList.remove("hidden");const e=t.target.dataset.category;console.log(e),x(e),$(e),document.removeEventListener("click",p),document.addEventListener("click",p)}if(t.target.classList.contains("gallery-link")){i.topListElem.classList.add("hidden"),i.categoryListElem.classList.remove("hidden");const e=t.target.textContent.trim();x(e),$(e),document.removeEventListener("click",p),document.addEventListener("click",p)}},K=async function(t){(t.target.classList.contains("all_categories")||t.target.classList.contains("link"))&&(console.log("Click"),i.titleElement.innerHTML="Best Sellers <span>Books</span>",i.categoryListElem.classList.add("hidden"),i.topListElem.classList.remove("hidden"))};async function $(t){i.categoryListElem.innerHTML="",(await j(t)).forEach(o=>{const n=`
        <li class="category_list-card">
            <div class="top_list-book_cover_wrapper" data-bookid="${o._id}" tabindex="0">
                <img class="top_list-book_cover" src="${o.book_image}" alt="${o.title}">
                <div class="quick-view-text">Quick view</div>
            </div>
            <h3 class="top_list-book_title">${o.title}</h3>
            <p class="top_list-book_author">${o.author}</p>
        </li>
        `;i.categoryListElem.innerHTML+=n});const s='<li><button class="all_categories">All Categories</button></li>';i.categoryListElem.innerHTML+=s}function x(t){const r=t.split(" "),s=r.pop();i.titleElement.textContent=r.join(" ");const o=document.createElement("span");o.textContent=" "+s,i.titleElement.appendChild(o)}const Q=document.querySelector(".all-categories");function Y(t){return t.map(r=>`
            <li class="gallery-item">
            <a class="gallery-link" href=#>${r.list_name}
            </a>
          </li>`).join("")}function G(t){Q.insertAdjacentHTML("beforeend",t)}O().then(t=>Y(t)).then(t=>{G(t),Z()}).catch(t=>H.error({maxWidth:"432px",messageColor:"rgb(250, 250, 251)",messageSize:"16px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",message:`${t}`}));function Z(){const t=document.querySelector(".gallery-link"),e=document.querySelector(".link");t.addEventListener("click",()=>{e.classList.remove("all-categories-link")})}const w=document.querySelector("body"),a=document.querySelector(".toggle");document.getElementById("logo");document.getElementById("logo-dark");let B=localStorage.getItem("mode");B&&B==="dark"?(w.classList.add("dark"),a.classList.add("active")):(a.style.background="linear-gradient(180deg, #4f2ee8 0%, #dcdcdc 100%)",a.style.boxShadow="inset 1px 1px 2px 0 rgba(0, 0, 0, 0.1)");a.addEventListener("click",()=>{if(w.classList.toggle("dark"),w.classList.contains("dark"))a.style.background="linear-gradient(180deg, #4f2ee8 0%, #686868 100%)",a.style.boxShadow="inset 1px 1px 2px 0 rgba(0, 0, 0, 0.1)",localStorage.setItem("mode","dark");else return a.style.background="linear-gradient(180deg, #4f2ee8 0%, #dcdcdc 100%)",a.style.boxShadow="inset 1px 1px 2px 0 rgba(0, 0, 0, 0.1)",localStorage.setItem("mode","light")});a.addEventListener("click",()=>a.classList.toggle("active"));const V=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"./img/support-Ukr/save-the-children.png",img2:"./img/support-Ukr/save-the-children@2x.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"./img/support-Ukr/project-hope.png",img2:"./img/support-Ukr/project-hope@2x.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"./img/support-Ukr/intern-med-corps.png",img2:"./img/support-Ukr/intern-med-corps@2x.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"./img/support-Ukr/medecins-sans.png",img2:"./img/support-Ukr/medecins-sans@2x.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"./img/support-Ukr/razom.png ",img2:"./img/support-Ukr/razom@2x.png "},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"./img/support-Ukr/action-against.png ",img2:"./img/support-Ukr/action-against@2x.png "},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"./img/support-Ukr/world-vision.png",img2:"./img/support-Ukr/world-vision@2x.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"./img/support-Ukr/sergiy-prytula.png",img2:"./img/support-Ukr/sergiy-prytula@2x.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"./img/support-Ukr/united24.png",img2:"./img/support-Ukr/united24@2x.png"}],X=document.querySelector(".swiper-wrapper");document.querySelector(".swiper-button-next");const tt=t=>{const e=t.map((r,s)=>{const{title:o,url:n,img:c,img2:y}=r;return`
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
                alt="${o}"
                class="supporters_img"
                srcset="${c} 1x, ${y} 2x"
                loading="lazy"
              />
            </a>
            
          </li>
              `}).join("");X.innerHTML=`${e}`};tt(V);function et(t,e){const r=-t.scrollTop/(e/15),s=setInterval(function(){t.scrollTop!=0?t.scrollBy(0,r):clearInterval(s)},15)}function ot(){const t=document.querySelector(".swiper"),e=500;if(t.scrollTop+t.clientHeight>=t.scrollHeight){et(t,e);const s=document.querySelector(".supporters-btn-icon");s.style.transform="rotate(180deg)"}else{t.scrollBy({top:300,behavior:"smooth"});const s=document.querySelector(".supporters-btn-icon");s.style.transform="rotate(0deg)"}}const st=document.querySelector(".supporters-btn");st.addEventListener("click",ot);
//# sourceMappingURL=main-a52b01c9.js.map
