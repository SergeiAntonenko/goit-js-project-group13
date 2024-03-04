import{f as c,a as f,h as b,c as k,r as y}from"./assets/mob-menu-276fd7f1.js";import{P as L}from"./assets/vendor-372b0e6c.js";import"https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";const B="/goit-js-project-group13/assets/trash-03-478df87d.svg",P="/goit-js-project-group13/assets/modal-icons-6da17b7d.svg#icon-amazon-logo",$="/goit-js-project-group13/assets/modal-icons-6da17b7d.svg#icon-ibooks-logo",a={bookList:document.querySelector(".shopping-list-saved"),emptyList:document.querySelector(".shopping-list-empty"),pagination:document.querySelector(".tui-pagination")},g=window.innerWidth>=768?3:4;m();async function m(){const e=c();if(f(a.bookList),!e||e.length===0)p(a.emptyList),j(a.pagination);else{const t=await b(e);if(t&&t.length!==0){const i=S(t,g),s=o.getCurrentPage();I(i[s-1]),p(a.pagination),document.querySelectorAll(".saved-item-delete-btn").forEach(r=>r.addEventListener("click",w))}}k()}function A(e){return e.map(({_id:t,book_image:i,title:s,list_name:r,description:u,author:v,buy_links:h})=>{const d=h.reduce((l,n)=>(n.name==="Amazon"&&(l.amazon=n.url),n.name==="Apple Books"&&(l.apple=n.url),l),{});return`<li class="saved-item">
      <div class="saved-item-cover">
        <img
          class="saved-item-cover-img"
          src="${i}"
          alt="${s}"
        />
      </div>
      <div class="saved-item-discription">
        <div class="saved-item-discription-top">
          <div class="saved-item-title-wrap">
            <h2 class="saved-item-title">${s}</h2>
            <p class="saved-item-genre">${r}</p>
          </div>
          <button class="saved-item-delete-btn" data-id=${t}>
            <img
              class="delete-btn-img"
              src= ${B}
              alt="delete button"
            />
          </button>
        </div>
        <p class="saved-item-short">
          ${u}
        </p>
        <div class="saved-item-wrap-bottom">
          <p class="saved-item-author">${v}</p>
          <ul class="saved-item-refer-list">
            <li class="saved-item-refer-item">
              <a
                href="${d.amazon}"
                class="saved-item-refer-item-link"
                target="_blank"
              >
                <svg
                  class="saved-item-refer-amazon-logo"
                  width="62"
                  height="19"
                >
                  <use href=${P}></use>
                </svg>
              </a>
            </li>
            <li class="saved-item-refer-item">
              <a
                href="${d.apple}"
                class="saved-item-refer-item-link"
                target="_blank"
              >
                <svg
                  class="saved-item-refer-ibooks-logo"
                  width="16"
                  height="16"
                >
                  <use href=${$}></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </li>`}).join("")}function I(e){const t=A(e);a.bookList.insertAdjacentHTML("beforeend",t)}function j(e){e.classList.add("is-hidden")}function p(e){e.classList.remove("is-hidden")}function w(e){const t=e.currentTarget.dataset.id;y(t),a.bookList.innerHTML="",o.setTotalItems(c().length),o.movePageTo(o.getCurrentPage())}const H=document.getElementById("pagination"),M={totalItems:c().length,itemsPerPage:g,visiblePages:2,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}},o=new L(H,M);o.on("afterMove",({page:e})=>{a.bookList.innerHTML="",m()});function S(e,t){let i=[];for(let s=0;s<e.length;s+=t)i.push(e.slice(s,s+t));return i}
//# sourceMappingURL=commonHelpers2.js.map
