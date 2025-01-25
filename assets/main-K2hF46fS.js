import{a as f,i as m}from"./vendor-Cbhu4xvy.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=a(i);fetch(i.href,r)}})();const z="https://your-energy.b.goit.study/api",D={mobile:9,tablet:12,desktop:12};f.defaults.baseURL=z;const J=(t,e,a)=>{const s={filter:t,page:e,limit:a};return f.get("/filters",{params:s})},K=t=>f.get(`/exercises/${t}`),W=t=>f.get("/exercises",{params:t}),Y=(t,e,a,s)=>{const i={rate:e,email:a,review:s};return f.patch(`/exercises/${t}/rating`,i)},h="/your-energy/assets/sprite-Bh03drsD.svg";function Z(t,e){const a="#EEA10C",s="#F4F4F4";let r="";for(let n=0;n<5;n++){const d=`starGradient${n}`,o=n+1<=t?100:n<t?t%1*100:0,c=[{offset:"0%",color:a,opacity:"1"},{offset:`${o}%`,color:a,opacity:"1"},{offset:`${o+1}%`,color:s,opacity:"0.20"}],l=`
            <linearGradient id="${d}" x1="0%" y1="0%" x2="100%" y2="0%">
              ${c.map(g=>`<stop offset="${g.offset}" style="stop-color:${g.color};stop-opacity:${g.opacity}" />`).join("")}
            </linearGradient>
          `,u=`url(#${d})`;r+=`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">${l}<path d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z" fill="${u}" fill-opacity="1"/></svg>`}return r}class b{constructor(e,a,s,i,r,n,d,o,c,l,u){this.id=e,this.bodyPart=a,this.equipment=s,this.gifUrl=i,this.name=r,this.target=n,this.description=d,this.rating=o,this.burnedCalories=c,this.time=l,this.popularity=u}setRatingVisible(e){this.ratingVisible=e}setTrashVisible(e){this.trashVisible=e}static async fetchById(e){const s=(await K(e)).data;return new b(s._id,s.bodyPart,s.equipment,s.gifUrl,s.name,s.target,s.description,s.rating,s.burnedCalories,s.time,s.popularity)}render(e=!0,a=!1){const s=document.createElement("div");return s.className="exercise-card",s.innerHTML=`  
        <div class="exercise-header">
          <div class="badge">workout</div>
          <div class="rating ${e?"":"hidden"}">
            ${this.formatRating()}
            <svg width="18" height="18">
              <use href="${h}#star-active"></use>
            </svg>
          </div>
          <button type="button" data-exerciseid="${this.id}" class="exercise-card-trash ${a?"":"hidden"}">
            <svg width="16" height="16">
              <use href="${h}#trash"></use>
            </svg>
          </button>
          <button type="button" data-exerciseid="${this.id}" class="exercise-start-btn">
            Start
            <svg width="16" height="16">
              <use href="${h}#arrow"></use>
            </svg>
          </button>
        </div>
        <div class="exercise-title-container">
          <div class="exercise-icon">
            <svg width="18" height="18">
              <use href="${h}#group"></use>
            </svg>
          </div>
          <div class="exercise-title">${this.name}</div>
        </div>
        <ul class="exercise-details">
          <li class="exercise-details-item">Burned calories: <span class="exercise-details-item-value">${this.burnedCalories}</span></li>
          <li class="exercise-details-item">Body Part: <span class="exercise-details-item-value">${this.bodyPart}</span></li>
          <li class="exercise-details-item">Target: <span class="exercise-details-item-value">${this.target}</span></li>
        </ul>
      `,s}renderCard(){const e=document.createElement("div");e.className="exercise-modal-card";const s=[{name:"Target",value:this.target},{name:"Body Part",value:this.bodyPart},{name:"Equipment",value:this.equipment},{name:"Popular",value:this.popularity},{name:"Burned Calories",value:this.burnedCalories}].filter(i=>i.value).map(i=>`
        <div class="modal-card-property">
        <span class="modal-card-property-name">${i.name}</span>
          <span class="modal-card-property-value">${i.value}</span>
          
        </div>`).join("");return e.innerHTML=`
      <button type="button" class="modal-card-close-button">
       <svg width="24" height="24">
              <use href="${h}#close"></use>
            </svg>
        </button>
      <div class="modal-card-header">
      
      <div class="image-container">
        <img src="${this.gifUrl}" alt="${this.name}" />
      </div>
      <div class="modal-card-data">

      <h3 class="modal-card-title">${this.name}</h3>
      <div class="modal-card-rating">
        <span class="rating-value">${this.formatRating()}</span>
       ${Z(this.rating)}            
      </div>
      <hr class="divider" />
      <div class="modal-card-properties">
        ${s}
      </div>
      <hr class="divider" />
      <p class="modal-card-description">${this.description}</p>
      <div class="modal-card-buttons">
        <button type="button" data-exerciseid="${this.id}" class="modal-card-button favorite-button">
        <span>Add to favorites</span>
        <svg width="18" height="18">
            <use href="${h}#heart"></use>
          </svg>
        </button>
        <button type="button" data-exerciseid="${this.id}"class="modal-card-button rating-button">Give a rating</button>
      </div>
      </div>
      </div>
    `,e}formatRating(){return this.rating.toFixed(1)}getStarRatingHTML(){let e="";const a='<svg width="18" height="18"><use href="${sprite}#star-active"></use></svg>',s='<svg width="18" height="18"><use href="${sprite}#star-inactive"></use></svg>';return e+=a.repeat(this.rating.toFixed(0)),e+=s.repeat(5-this.rating.toFixed(0)),e}}const Q=()=>new URLSearchParams(window.location.search).get("exerciseId");document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".modal-overlay"),e=document.querySelector(".modal-page"),a=document.body;document.addEventListener("click",s=>{if(s.target.closest(".exercise-start-btn")){const i=s.target.closest(".exercise-start-btn").dataset.exerciseid||Q();i&&b.fetchById(i).then(r=>{e.innerHTML="",e.append(r.renderCard()),t.classList.remove("hidden"),e.classList.remove("hidden"),a.classList.add("no-scroll")}).catch(r=>{console.error("Error fetching exercise:",r)})}(s.target.classList.contains("modal-overlay")||s.target.closest(".modal-card-close-button"))&&(t.classList.add("hidden"),e.classList.add("hidden"),a.classList.remove("no-scroll"))})});document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".modal-page");document.addEventListener("click",e=>{if(!e.target.matches(".rating-button"))return;const a=e.target.dataset.exerciseid,s=document.querySelector(".exercise-modal-card"),i=ee();X(s),t.append(i);const r=i.querySelectorAll(".rating-modal__stars span"),n=i.querySelector(".rating-modal__value"),d=i.querySelector(".rating-modal__hidden-rating"),o=i.querySelector(".rating-modal__form");let c=0;r.forEach(l=>{l.addEventListener("mouseenter",()=>x(r,parseInt(l.dataset.value,10))),l.addEventListener("mouseleave",()=>x(r,c)),l.addEventListener("click",()=>{c=parseInt(l.dataset.value,10),d.value=c,n.textContent=c.toFixed(1),x(r,c)})}),o.addEventListener("submit",async l=>{var P,_;l.preventDefault();const u=parseInt(d.value),g=o.querySelector(".rating-modal__email").value.trim(),C=o.querySelector(".rating-modal__comment").value.trim();if(!u||!g||!C){m.error({title:"Помилка",message:"Всі поля повинні бути заповнені"});return}try{await Y(a,u,g,C),m.success({title:"Успіх",message:"Ви упсішно відправили рейтинг"}),i.remove(),s.style.display="block"}catch(V){m.error({title:"Помилка",message:((_=(P=V.response)==null?void 0:P.data)==null?void 0:_.message)||"Щось пішло не так"})}})})});function X(t,e){t.style.display="none"}function x(t,e){t.forEach(a=>{const s=parseInt(a.dataset.value,10);a.querySelector("svg use").setAttribute("href",`${h}#${s<=e?"star-active":"star-inactive"}`)})}function ee(){const t=document.createElement("div");return t.className="rating-modal-card",t.innerHTML=`
      <button type="button" class="modal-card-close-button">
        <svg width="24" height="24">
          <use href="${h}#close"></use>
        </svg>
      </button>
      <div class="rating-modal">
        <h2 class="rating-modal__title">Rating</h2>
        <form class="rating-modal__form">
          <div class="rating-modal__mark">
            <div class="rating-modal__value">0.0</div>
            <div class="rating-modal__stars">
              ${[1,2,3,4,5].map(e=>`
                  <span data-value="${e}">
                    <svg class="rating-modal__stars__item" width="18" height="18">
                      <use href="${h}#star-inactive"></use>
                    </svg>
                  </span>`).join("")}
            </div>
          </div>
          <input type="hidden" name="rate" class="rating-modal__hidden-rating" value="0">
          <input type="email" class="rating-modal__email" placeholder="Email" required />
          <textarea class="rating-modal__comment" placeholder="Your comment" required></textarea>
          <button type="submit" class="rating-modal__submit-btn">Send</button>
        </form>
      </div>
    `,t}const I=()=>{const t=window.innerWidth;return t<768?"mobile":t<1440?"tablet":"desktop"},te=()=>D[I()];class L{constructor(){this.exercises=[],this.page=0,this.perPage=10,this.totalPages=0}addExercise(e){this.exercises.push(e)}static async fetchWithFilters(e){const s=(await W(e.toParams())).data,i=new L;return i.page=s.page,i.perPage=s.perPage,i.totalPages=s.totalPages,s.results.forEach(r=>{const n=new b(r._id,r.bodyPart,r.equipment,r.gifUrl,r.name,r.target,r.description,r.rating,r.burnedCalories,r.time,r.popularity);i.addExercise(n)}),i}render(e=!0,a=!1){const s=document.createElement("div");return s.className="exercise-list",this.exercises.forEach(i=>{s.appendChild(i.render(e,a))}),s}}const p=Object.freeze({MUSCLES:"muscles",BODY_PART:"bodypart",EQUIPMENT:"equipment"});class se{constructor({bodypart:e,muscles:a,equipment:s,keyword:i,page:r=1,limit:n=10}={}){this.bodypart=e,this.muscles=a,this.equipment=s,this.keyword=i,this.page=r,this.limit=n}addFilter(e,a){switch(e){case p.MUSCLES:this.muscles=a;break;case p.BODY_PART:this.bodypart=a;break;case p.EQUIPMENT:this.equipment=a;break}}addKeyword(e){this.keyword=e}toParams(){const e={};return this.bodypart&&(e.bodypart=this.bodypart),this.muscles&&(e.muscles=this.muscles),this.equipment&&(e.equipment=this.equipment),this.keyword&&(e.keyword=this.keyword),e.page=this.page,e.limit=this.limit,e}}const R=document.querySelector(".loader"),A=()=>{R.classList.remove("hidden")},j=()=>{R.classList.add("hidden")},$=document.querySelector(".exercise-container");let k=new L;const ae=async t=>{try{A(),k=await L.fetchWithFilters(t);const e=k.render(!0,!1);$.innerHTML="",$.appendChild(e)}catch(e){console.error(e)}finally{j()}};function O(t,e,a=null){const s=new se({page:1,limit:10});a&&s.addKeyword(a),s.addFilter(t,e),ae(s),$.classList.remove("hidden")}const y=document.querySelector(".category-list"),F=document.querySelector(".category-container"),ie=t=>t.reduce((e,a)=>e+`<li class="category-card" data-name="${a.name}" data-filter="${a.filter}">
      <img class="gallery-image"
           src="${a.imgURL}"
           alt="${a.name}"/>
            <div class="category-title">
              <h3>${a.name}</h3>
              <p>${a.filter}</p>
            </div>
          </li>`,""),N=async(t,e)=>{try{A();const a=await J(t,e,te()),{page:s,perPage:i,totalPages:r,results:n}=a.data;return n.length===0?(console.log("There are no categories for the specified filter"),{page:s,perPage:i,totalPages:r}):(y.innerHTML=ie(n),y.addEventListener("click",B),F.classList.add("active"),{page:s,perPage:i,totalPages:r})}catch(a){console.log(a)}finally{j()}},re=()=>{y.innerHTML="",y.removeEventListener("click",B),F.classList.remove("active")},B=t=>{if(t.preventDefault(),console.log(I()),t.target===t.currentTarget)return;const e=t.target.closest("li"),a=e.getAttribute("data-filter"),s=e.getAttribute("data-name");re(),O(ne(a),s),ue(a,s),console.log(`Execute function for rendering exercises (${a}; ${s})`)},ne=t=>{const e=t.toLowerCase();return Object.values(p).find(a=>a===e)},T=document.querySelectorAll(".filter-tab-button"),H=document.querySelector(".filter-form-container"),M=document.querySelector(".search-button"),w=document.querySelector(".cansel-search-button"),v=document.querySelector(".search-string"),U=document.querySelector(".additional-title-filter"),G=document.querySelector(".slash-in-filter");var E="",S="",q="";const oe={"button-muscles":"Muscles","button-bodypart":"Body parts","button-equipment":"Equipment"};v&&v.addEventListener("input",function(){w.style.display=this.value.length>0?"block":"none"});w&&w.addEventListener("click",function(){v.value="",this.style.display="none"});T.forEach(t=>{t.addEventListener("click",e=>{if(e.preventDefault(),de(),e.target&&e.target.matches("button.filter-tab-button")){T.forEach(i=>{i.classList.remove("active")}),t.classList.add("active");const a=e.target.id,s=oe[a];N(s,1).then(i=>console.log(`Execute function for pagination with parameter ${JSON.stringify(i)}`)).catch(i=>console.log(i))}})});M&&M.addEventListener("click",t=>{t.preventDefault(),q=v.value,O(ce(E),S,q)});function ce(t){var e=t.toLowerCase();return e==="body parts"&&(e="bodypart"),Object.values(p).find(a=>a===e)}function le(t){G.style.display="inline",U.textContent=t}function de(){G.style.display="none",H.style.display="none",U.textContent="",he()}function ue(t,e){me(t,e),le(e),H.style.display="block",console.log(`filterName: ${E}  categoryName: ${S}`)}function me(t,e){E=t,S=e}function he(){E="",S="",v.value="",q=""}document.querySelector(".fav-list-card");document.querySelector(".fav-text-default");function ge(){const t=document.querySelector(".js-header-nav-list"),e=document.querySelector(".logo"),a=document.querySelector(".menu-btn"),s=document.querySelector(".close-btn-menu"),i=document.querySelector(".mobile-menu-backdrop"),r=document.querySelectorAll(".menu-item");a&&a.addEventListener("click",()=>{i.classList.add("is-open")}),s&&s.addEventListener("click",()=>{i.classList.remove("is-open")}),r&&r.forEach(o=>{o.addEventListener("click",()=>{i.classList.remove("is-open")})});const n=localStorage.getItem("activePath"),d=window.location.pathname;t.querySelectorAll(".nav-link").forEach(o=>{const c=o.closest(".nav-item");o.getAttribute("href")===n||o.getAttribute("href")===d||d==="/"&&o.getAttribute("href")==="./index.html"?(o.classList.add("js-nav-link-active"),c.classList.add("js-nav-item-active")):(o.classList.remove("js-nav-link-active"),c.classList.remove("js-nav-item-active"))}),t.addEventListener("click",o=>{const c=o.target.closest(".nav-link");if(!c)return;const l=c.closest(".nav-item");t.querySelectorAll(".js-nav-link-active").forEach(u=>{u.classList.remove("js-nav-link-active")}),t.querySelectorAll(".js-nav-item-active").forEach(u=>{u.classList.remove("js-nav-item-active")}),c.classList.add("js-nav-link-active"),l.classList.add("js-nav-item-active"),localStorage.setItem("activePath",c.getAttribute("href"))}),e.addEventListener("click",()=>{t.querySelectorAll(".js-nav-link-active").forEach(l=>{l.classList.remove("js-nav-link-active")}),t.querySelectorAll(".js-nav-item-active").forEach(l=>{l.classList.remove("js-nav-item-active")});const o=t.querySelector('.nav-link[href="./index.html"]'),c=o==null?void 0:o.closest(".nav-item");o&&c&&(o.classList.add("js-nav-link-active"),c.classList.add("js-nav-item-active")),localStorage.setItem("activePath","./index.html")})}ge();document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".footer__form");t&&t.addEventListener("submit",async function(e){e.preventDefault();const a=document.querySelector(".footer__input"),s=a.value.trim();if(!/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(s)){m.error({title:"Помилка",message:"Будь ласка, введіть коректну email адресу.",position:"bottomRight"});return}try{const r=await fetch("https://your-energy.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s})}),n=await r.json();r.status===201?m.success({title:"Успіх",message:n.message||"Ви успішно підписались на розсилку!",position:"topRight"}):r.status===400?m.warning({title:"Увага",message:n.message||"Некоректні дані. Перевірте ваш email.",position:"topRight"}):r.status===409?m.warning({title:"Увага",message:n.message||"Цей email вже підписаний.",position:"topRight"}):m.error({title:"Помилка",message:n.message||"Сталася помилка. Спробуйте пізніше.",position:"topRight"})}catch{m.error({title:"Помилка",message:"Не вдалося підключитися до сервера. Спробуйте пізніше.",position:"topRight"})}a.value=""})});N("Muscles",1).then(t=>console.log(`Execute function for pagination with parameter ${JSON.stringify(t)}`)).catch(t=>console.log(t));
//# sourceMappingURL=main-K2hF46fS.js.map
