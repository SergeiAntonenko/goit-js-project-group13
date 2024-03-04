import{d as h}from"./assets/support-ukr-0a324166.js";import{P as b}from"./assets/vendor-372b0e6c.js";import"https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";const k="/goit-js-project-group13/assets/trash-03-478df87d.svg",a={bookList:document.querySelector(".shopping-list-saved"),emptyList:document.querySelector(".shopping-list-empty"),pagination:document.querySelector(".tui-pagination")},g=window.innerWidth>=768?3:4;m();function l(){const e=localStorage.getItem("shoppingIdList");return JSON.parse(e)}async function m(){const e=l();if(!e||e.length===0)p(a.emptyList),L(a.pagination);else{const t=await h(e);if(t&&t.length!==0){const i=S(t,g),s=n.getCurrentPage();I(i[s-1]),p(a.pagination),document.querySelectorAll(".saved-item-delete-btn").forEach(o=>o.addEventListener("click",B))}}}function y(e){return e.map(({_id:t,book_image:i,title:s,list_name:o,description:u,author:v,buy_links:f})=>{const c=f.reduce((d,r)=>(r.name==="Amazon"&&(d.amazon=r.url),r.name==="Apple Books"&&(d.apple=r.url),d),{});return`<li class="saved-item">
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
            <p class="saved-item-genre">${o}</p>
          </div>
          <button class="saved-item-delete-btn" data-id=${t}>
            <img
              class="delete-btn-img"
              src= ${k}
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
                href="${c.amazon}"
                class="saved-item-refer-item-link"
                target="_blank"
              >
                <svg
                  class="saved-item-refer-amazon-logo"
                  width="62"
                  height="19"
                >
                  <use href="../img/modal/modal-icons.svg#icon-amazon-logo"></use>
                </svg>
              </a>
            </li>
            <li class="saved-item-refer-item">
              <a
                href="${c.apple}"
                class="saved-item-refer-item-link"
                target="_blank"
              >
                <svg
                  class="saved-item-refer-ibooks-logo"
                  width="16"
                  height="16"
                >
                  <use href="../img/modal/modal-icons.svg#icon-ibooks-logo"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </li>`}).join("")}function I(e){const t=y(e);a.bookList.insertAdjacentHTML("beforeend",t)}function L(e){e.classList.add("is-hidden")}function p(e){e.classList.remove("is-hidden")}function B(e){const t=e.currentTarget.dataset.id,s=l().filter(o=>t!==o);localStorage.setItem("shoppingIdList",JSON.stringify(s)),a.bookList.innerHTML="",n.setTotalItems(l().length),n.movePageTo(n.getCurrentPage())}const A=document.getElementById("pagination"),P={totalItems:l().length,itemsPerPage:g,visiblePages:2,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}},n=new b(A,P);n.on("afterMove",({page:e})=>{a.bookList.innerHTML="",m()});function S(e,t){let i=[];for(let s=0;s<e.length;s+=t)i.push(e.slice(s,s+t));return i}
//# sourceMappingURL=commonHelpers2.js.map
