import{d as p}from"./assets/support-ukr-7a4f977d.js";import"https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";const n={bookList:document.querySelector(".shopping-list-saved"),emptyList:document.querySelector(".shopping-list-empty")};c();function d(){const e=localStorage.getItem("shoppingIdList");return JSON.parse(e)}async function c(){const e=d();if(!e||e.length===0)h(n.emptyList);else{const s=await p(e);s&&s.length!==0&&(f(s),document.querySelectorAll(".saved-item-delete-btn").forEach(o=>o.addEventListener("click",k)))}}function u(e){return console.log(e),e.map(({_id:s,book_image:o,title:i,list_name:a,description:m,author:v,buy_links:g})=>{const l=g.reduce((r,t)=>(console.log(t.name==="Amazon"),t.name==="Amazon"&&(r.amazon=t.url),t.name==="Apple Books"&&(r.apple=t.url),r),{});return`<li class="saved-item">
      <div class="saved-item-cover">
        <img
          class="saved-item-cover-img"
          src="${o}"
          alt="${i}"
        />
      </div>
      <div class="saved-item-discription">
        <div class="saved-item-discription-top">
          <div class="saved-item-title-wrap">
            <h2 class="saved-item-title">${i}</h2>
            <p class="saved-item-genre">${a}</p>
          </div>
          <button class="saved-item-delete-btn" data-id=${s}>
            <img
              class="delete-btn-img"
              src="../img/shopping list/trash-03.svg"
              alt="delete button"
            />
          </button>
        </div>
        <p class="saved-item-short">
          ${m}
        </p>
        <div class="saved-item-wrap-bottom">
          <p class="saved-item-author">${v}</p>
          <ul class="saved-item-refer-list">
            <li class="saved-item-refer-item">
              <a
                href="${l.amazon}"
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
                href="${l.apple}"
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
    </li>`}).join("")}function f(e){const s=u(e);n.bookList.insertAdjacentHTML("beforeend",s)}function h(e){e.classList.remove("is-hidden")}function k(e){const s=e.currentTarget.dataset.id,i=d().filter(a=>s!==a);localStorage.setItem("shoppingIdList",JSON.stringify(i)),n.bookList.innerHTML="",c()}
//# sourceMappingURL=commonHelpers2.js.map
