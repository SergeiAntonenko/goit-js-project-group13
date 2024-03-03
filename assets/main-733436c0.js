import m from"https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";import{i as O}from"./vendor-ad859c2f.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const k="https://books-backend.p.goit.global",h=["/books/category-list","/books/top-books","/books/category","/books"];async function P(){const t=`${k}${h[0]}`;try{return(await m.get(t)).data}catch(o){throw console.error("Error fetching category list: ",o),o}}async function j(){const t=`${k}${h[1]}`;try{return(await m.get(t)).data}catch(o){throw console.error("Error fetching Top Books list: ",o),o}}async function D(t){const o=`${k}${h[2]}`,n={category:t};try{return(await m.get(o,{params:n})).data}catch(s){throw console.error("Error fetching books by category name: ",s),s}}async function z(t){const o=`${k}${h[3]}/${t}`;try{return(await m.get(o)).data}catch(n){throw console.error("Error fetching book by id: ",n),n}}const L="/goit-js-project-group13/assets/modal-icons-6da17b7d.svg",T="shoppingIdList",C=document.querySelector("body"),M=document.querySelector("#modalBookContainer");let I,v,g,d,a,_,u;async function N(t){u=t,a=JSON.parse(localStorage.getItem(T))||[],_=await z(u),d=a.includes(u);const o=R(_);M.insertAdjacentHTML("afterbegin",o),I=document.querySelector("#bookActionContainer"),F(),A(),C.classList.add("overflow-hidden")}function q(){v.removeEventListener("click",q),g.removeEventListener("click",E),M.innerHTML="",C.classList.remove("overflow-hidden")}function E(){g.removeEventListener("click",E),d?a=a.filter(o=>o!==u):a.push(u),localStorage.setItem(T,JSON.stringify(a)),d=!d;const t=U();I.innerHTML=t,A()}function R(t){var b,S;const{book_image:o,author:n,title:s,description:e,buy_links:r}=t,l=((b=r.find(f=>f.name==="Amazon"))==null?void 0:b.url)||"https://www.amazon.com/",y=((S=r.find(f=>f.name==="Apple Books"))==null?void 0:S.url)||"https://www.apple.com/apple-books/";return`
    <div class="book-background" id="modalBookContainer">
      <div class="modal-container">
        <button class="modal-close" id="modalClose">
          <svg class="modal-close-icon" width="12" height="12">
            <use href="${L}#icon-close"></use>
          </svg>
        </button>
        <div class="book-box">
          <img src="${o}" alt="${s} cover" class="book-cover">
          <div class="book-description-box">
            <h2 class="book-title">${s}</h2>
            <div class="book-author">${n}</div>
            <p class="book-description">${e}</p>
            <ul class="book-shop-list">
              <li class="book-shop-item">
                <a href="${l}" class="book-shop-link" target="_blank">
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
  `}function F(){v=document.querySelector("#modalClose"),v.addEventListener("click",q)}function A(){g=document.querySelector("#shoppingListBtn"),g.addEventListener("click",E)}const i={topListElem:document.querySelector("#topList"),categoryListElem:document.querySelector("#categoryList"),titleElement:document.querySelector(".top_list-title")};document.addEventListener("DOMContentLoaded",function(){document.addEventListener("click",K),document.addEventListener("click",p),document.addEventListener("click",Q)});document.addEventListener("DOMContentLoaded",async function(){i.topListElem.innerHTML="",(await j()).forEach(n=>{W(n)})});function W(t){const o=`
        <li class="top_list-container">
            <h2 class="top_list-category_name">${t.list_name}</h2>
            <ul class="top_list-cards">${J(t.books)}</ul>
            <button class="top_list-see_more" data-category="${t.list_name}">See More</button>
        </li>
    `;i.topListElem.innerHTML+=o}function J(t){let o=1;const n=t.map(s=>`
        <li class="top_list-card" data-book-sequence-number="${o++}">
            <div class="top_list-book_cover_wrapper" data-bookid="${s._id}" tabindex="0">
                <img class="top_list-book_cover" src="${s.book_image}" alt="${s.title}">
                <div class="quick-view-text">Quick view</div>
            </div>
            <h3 class="top_list-book_title">${s.title}</h3>
            <p class="top_list-book_author">${s.author}</p>
        </li>
    `).join("");return o++,n}const p=function(t){var o;if((o=t.target.parentElement)!=null&&o.classList.contains("top_list-book_cover_wrapper")){const n=t.target.parentElement.dataset.bookid;N(n)}},K=function(t){if(t.target.classList.contains("top_list-see_more")){i.topListElem.classList.add("hidden"),i.categoryListElem.classList.remove("hidden");const o=t.target.dataset.category;console.log(o),B(o),$(o),document.removeEventListener("click",p),document.addEventListener("click",p)}if(t.target.classList.contains("gallery-link")){i.topListElem.classList.add("hidden"),i.categoryListElem.classList.remove("hidden");const o=t.target.textContent.trim();B(o),$(o),document.removeEventListener("click",p),document.addEventListener("click",p)}},Q=async function(t){(t.target.classList.contains("all_categories")||t.target.classList.contains("link"))&&(console.log("Click"),i.titleElement.innerHTML="Best Sellers <span>Books</span>",i.categoryListElem.classList.add("hidden"),i.topListElem.classList.remove("hidden"))};async function $(t){i.categoryListElem.innerHTML="",(await D(t)).forEach(e=>{const r=`
        <li class="category_list-card">
            <div class="top_list-book_cover_wrapper" data-bookid="${e._id}" tabindex="0">
                <img class="top_list-book_cover" src="${e.book_image}" alt="${e.title}">
                <div class="quick-view-text">Quick view</div>
            </div>
            <h3 class="top_list-book_title">${e.title}</h3>
            <p class="top_list-book_author">${e.author}</p>
        </li>
        `;i.categoryListElem.innerHTML+=r});const s='<li><button class="all_categories">All Categories</button></li>';i.categoryListElem.innerHTML+=s}function B(t){const n=t.split(" "),s=n.pop();i.titleElement.textContent=n.join(" ");const e=document.createElement("span");e.textContent=" "+s,i.titleElement.appendChild(e)}const Y=document.querySelector(".all-categories");function G(t){return t.map(n=>`
            <li class="gallery-item">
            <a class="gallery-link" href=#>${n.list_name}
            </a>
          </li>`).join("")}function Z(t){Y.insertAdjacentHTML("beforeend",t)}P().then(t=>G(t)).then(t=>{Z(t),V()}).catch(t=>O.error({maxWidth:"432px",messageColor:"rgb(250, 250, 251)",messageSize:"16px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",message:`${t}`}));function V(){const t=document.querySelector(".gallery-link"),o=document.querySelector(".link");t.addEventListener("click",()=>{o.classList.remove("all-categories-link")})}const w=document.querySelector("body"),c=document.querySelector(".toggle");document.getElementById("logo");document.getElementById("logo-dark");let x=localStorage.getItem("mode");x&&x==="dark"?(w.classList.add("dark"),c.classList.add("active")):(c.style.background="linear-gradient(180deg, #4f2ee8 0%, #dcdcdc 100%)",c.style.boxShadow="inset 1px 1px 2px 0 rgba(0, 0, 0, 0.1)");c.addEventListener("click",()=>{if(w.classList.toggle("dark"),w.classList.contains("dark"))c.style.background="linear-gradient(180deg, #4f2ee8 0%, #686868 100%)",c.style.boxShadow="inset 1px 1px 2px 0 rgba(0, 0, 0, 0.1)",localStorage.setItem("mode","dark");else return c.style.background="linear-gradient(180deg, #4f2ee8 0%, #dcdcdc 100%)",c.style.boxShadow="inset 1px 1px 2px 0 rgba(0, 0, 0, 0.1)",localStorage.setItem("mode","light")});c.addEventListener("click",()=>c.classList.toggle("active"));const X=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"../img/support-Ukr/save-the-children.png",img2:"../img/support-Ukr/save-the-children@2x.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"../img/support-Ukr/project-hope.png",img2:"../img/support-Ukr/project-hope@2x.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"../img/support-Ukr/intern-med-corps.png",img2:"../img/support-Ukr/intern-med-corps@2x.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"../img/support-Ukr/medecins-sans.png",img2:"../img/support-Ukr/medecins-sans@2x.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"../img/support-Ukr/razom.png ",img2:"../img/support-Ukr/razom@2x.png "},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"../img/support-Ukr/action-against.png ",img2:"../img/support-Ukr/action-against@2x.png "},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"../img/support-Ukr/world-vision.png",img2:"../img/support-Ukr/world-vision@2x.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"../img/support-Ukr/sergiy-prytula.png",img2:"../img/support-Ukr/sergiy-prytula@2x.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"../img/support-Ukr/united24.png",img2:"../img/support-Ukr/united24@2x.png"}],tt=document.querySelector(".swiper-wrapper");document.querySelector(".swiper-button-next");const ot=t=>{const o=t.map((n,s)=>{const{title:e,url:r,img:l,img2:y}=n;return`
          <li class="support-list-item">
          <span class="supporters-number">${(s+1).toString().padStart(2,"0")}</span>
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="company icon"
              href="${r}"
            >
              <img
                src="${l}"
                alt="${e}"
                class="supporters_img"
                srcset="${l} 1x, ${y} 2x"
                loading="lazy"
              />
            </a>
            
          </li>
              `}).join("");tt.innerHTML=`${o}`};ot(X);function et(t,o){const n=-t.scrollTop/(o/15),s=setInterval(function(){t.scrollTop!=0?t.scrollBy(0,n):clearInterval(s)},15)}function st(){const t=document.querySelector(".swiper"),o=500;if(t.scrollTop+t.clientHeight>=t.scrollHeight){et(t,o);const s=document.querySelector(".supporters-btn-icon");s.style.transform="rotate(180deg)"}else{t.scrollBy({top:300,behavior:"smooth"});const s=document.querySelector(".supporters-btn-icon");s.style.transform="rotate(0deg)"}}const nt=document.querySelector(".supporters-btn");nt.addEventListener("click",st);const H=document.getElementById("scrollToTopBtn");document.body.scrollTop=0;document.documentElement.scrollTop=0;H.addEventListener("click",it);window.addEventListener("scroll",rt);function rt(){document.body.scrollTop>20||document.documentElement.scrollTop>20?(document.getElementById("scrollToTopBtn").style.display="block",H.classList.remove("visually-hidden")):document.getElementById("scrollToTopBtn").style.display="none"}function it(){window.scrollTo({top:0,behavior:"smooth"})}
//# sourceMappingURL=main-733436c0.js.map
