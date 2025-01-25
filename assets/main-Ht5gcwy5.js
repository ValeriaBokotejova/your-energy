import{a as f,i as d}from"./vendor-Cbhu4xvy.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function i(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(r){if(r.ep)return;r.ep=!0;const a=i(r);fetch(r.href,a)}})();const B="https://your-energy.b.goit.study/api",U={mobile:9,tablet:12,desktop:12};f.defaults.baseURL=B;const H=(s,e,i)=>{const t={filter:s,page:e,limit:i};return f.get("/filters",{params:t})},_=s=>f.get(`/exercises/${s}`),G=s=>f.get("/exercises",{params:s}),u="/your-energy/assets/sprite-Bh03drsD.svg";class y{constructor(e,i,t,r,a,n,p,o,c,l,m){this.id=e,this.bodyPart=i,this.equipment=t,this.gifUrl=r,this.name=a,this.target=n,this.description=p,this.rating=o,this.burnedCalories=c,this.time=l,this.popularity=m}setRatingVisible(e){this.ratingVisible=e}setTrashVisible(e){this.trashVisible=e}static async fetchById(e){const t=(await _(e)).data;return new y(t._id,t.bodyPart,t.equipment,t.gifUrl,t.name,t.target,t.description,t.rating,t.burnedCalories,t.time,t.popularity)}render(e=!0,i=!1){const t=document.createElement("div");return t.className="exercise-card",t.innerHTML=`  
        <div class="exercise-header">
          <div class="badge">workout</div>
          <div class="rating ${e?"":"hidden"}">
            ${this.formatRating()}
            <svg width="18" height="18">
              <use href="${u}#star-active"></use>
            </svg>
          </div>
          <button type="button" data-exerciseid="${this.id}" class="exercise-card-trash ${i?"":"hidden"}">
            <svg width="16" height="16">
              <use href="${u}#trash"></use>
            </svg>
          </button>
          <button type="button" data-exerciseid="${this.id}" class="exercise-start-btn">
            Start
            <svg width="16" height="16">
              <use href="${u}#arrow"></use>
            </svg>
          </button>
        </div>
        <div class="exercise-title-container">
          <div class="exercise-icon">
            <svg width="18" height="18">
              <use href="${u}#group"></use>
            </svg>
          </div>
          <div class="exercise-title">${this.name}</div>
        </div>
        <ul class="exercise-details">
          <li class="exercise-details-item">Burned calories: <span class="exercise-details-item-value">${this.burnedCalories}</span></li>
          <li class="exercise-details-item">Body Part: <span class="exercise-details-item-value">${this.bodyPart}</span></li>
          <li class="exercise-details-item">Target: <span class="exercise-details-item-value">${this.target}</span></li>
        </ul>
      `,t}renderCard(){const e=document.createElement("div");e.className="exercise-modal-card";const t=[{name:"Target",value:this.target},{name:"Body Part",value:this.bodyPart},{name:"Equipment",value:this.equipment},{name:"Popular",value:this.popularity},{name:"Burned Calories",value:this.burnedCalories}].filter(r=>r.value).map(r=>`
        <div class="modal-card-property">
        <span class="modal-card-property-name">${r.name}</span>
          <span class="modal-card-property-value">${r.value}</span>
          
        </div>`).join("");return e.innerHTML=`
      <button type="button" class="modal-card-close-button">
       <svg width="24" height="24">
              <use href="${u}#close"></use>
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
       ${this.getStarRatingHTML()}            
      </div>
      <hr class="divider" />
      <div class="modal-card-properties">
        ${t}
      </div>
      <hr class="divider" />
      <p class="modal-card-description">${this.description}</p>
      <div class="modal-card-buttons">
        <button type="button" data-exerciseid="${this.id}" class="modal-card-button favorite-button">
        <span>Add to favorites</span>
        <svg width="18" height="18">
            <use href="${u}#heart"></use>
          </svg>
        </button>
        <button type="button" data-exerciseid="${this.id}"class="modal-card-button rating-button">Give a rating</button>
      </div>
      </div>
      </div>
    `,e}formatRating(){return this.rating.toFixed(1)}getStarRatingHTML(){let e="";const i='<svg width="18" height="18"><use href="${sprite}#star-active"></use></svg>',t='<svg width="18" height="18"><use href="${sprite}#star-inactive"></use></svg>';return e+=i.repeat(this.rating.toFixed(0)),e+=t.repeat(5-this.rating.toFixed(0)),e}}const z=()=>new URLSearchParams(window.location.search).get("exerciseId");document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector(".modal-overlay"),e=document.querySelector(".modal-page"),i=document.body;document.addEventListener("click",t=>{if(t.target.closest(".exercise-start-btn")){const r=t.target.closest(".exercise-start-btn").dataset.exerciseid||z();r&&y.fetchById(r).then(a=>{e.innerHTML="",e.append(a.renderCard()),s.classList.remove("hidden"),e.classList.remove("hidden"),i.classList.add("no-scroll")}).catch(a=>{console.error("Error fetching exercise:",a)})}(t.target.classList.contains("modal-overlay")||t.target.closest(".modal-card-close-button"))&&(s.classList.add("hidden"),e.classList.add("hidden"),i.classList.remove("no-scroll"))})});const C=()=>{const s=window.innerWidth;return s<768?"mobile":s<1440?"tablet":"desktop"},J=()=>U[C()];class b{constructor(){this.exercises=[],this.page=0,this.perPage=10,this.totalPages=0}addExercise(e){this.exercises.push(e)}static async fetchWithFilters(e){const t=(await G(e.toParams())).data,r=new b;return r.page=t.page,r.perPage=t.perPage,r.totalPages=t.totalPages,t.results.forEach(a=>{const n=new y(a._id,a.bodyPart,a.equipment,a.gifUrl,a.name,a.target,a.description,a.rating,a.burnedCalories,a.time,a.popularity);r.addExercise(n)}),r}render(e=!0,i=!1){const t=document.createElement("div");return t.className="exercise-list",this.exercises.forEach(r=>{t.appendChild(r.render(e,i))}),t}}const h=Object.freeze({MUSCLES:"muscles",BODY_PART:"bodypart",EQUIPMENT:"equipment"});class K{constructor({bodypart:e,muscles:i,equipment:t,keyword:r,page:a=1,limit:n=10}={}){this.bodypart=e,this.muscles=i,this.equipment=t,this.keyword=r,this.page=a,this.limit=n}addFilter(e,i){switch(e){case h.MUSCLES:this.muscles=i;break;case h.BODY_PART:this.bodypart=i;break;case h.EQUIPMENT:this.equipment=i;break}}addKeyword(e){this.keyword=e}toParams(){const e={};return this.bodypart&&(e.bodypart=this.bodypart),this.muscles&&(e.muscles=this.muscles),this.equipment&&(e.equipment=this.equipment),this.keyword&&(e.keyword=this.keyword),e.page=this.page,e.limit=this.limit,e}}const T=document.querySelector(".loader"),k=()=>{T.classList.remove("hidden")},j=()=>{T.classList.add("hidden")},x=document.querySelector(".exercise-container");let q=new b;const W=async s=>{try{k(),q=await b.fetchWithFilters(s);const e=q.render(!0,!1);x.innerHTML="",x.appendChild(e)}catch(e){console.error(e)}finally{j()}};function A(s,e,i=null){const t=new K({page:1,limit:10});i&&t.addKeyword(i),t.addFilter(s,e),W(t),x.classList.remove("hidden")}const v=document.querySelector(".category-list"),M=document.querySelector(".category-container"),Q=s=>s.reduce((e,i)=>e+`<li class="category-card" data-name="${i.name}" data-filter="${i.filter}">
      <img class="gallery-image"
           src="${i.imgURL}"
           alt="${i.name}"/>
            <div class="category-title">
              <h3>${i.name}</h3>
              <p>${i.filter}</p>
            </div>
          </li>`,""),O=async(s,e)=>{try{k();const i=await H(s,e,J()),{page:t,perPage:r,totalPages:a,results:n}=i.data;return n.length===0?(console.log("There are no categories for the specified filter"),{page:t,perPage:r,totalPages:a}):(v.innerHTML=Q(n),v.addEventListener("click",R),M.classList.add("active"),{page:t,perPage:r,totalPages:a})}catch(i){console.log(i)}finally{j()}},V=()=>{v.innerHTML="",v.removeEventListener("click",R),M.classList.remove("active")},R=s=>{if(s.preventDefault(),console.log(C()),s.target===s.currentTarget)return;const e=s.target.closest("li"),i=e.getAttribute("data-filter"),t=e.getAttribute("data-name");V(),A(Y(i),t),te(i,t),console.log(`Execute function for rendering exercises (${i}; ${t})`)},Y=s=>{const e=s.toLowerCase();return Object.values(h).find(i=>i===e)},P=document.querySelectorAll(".filter-tab-button"),I=document.querySelector(".filter-form-container"),$=document.querySelector(".search-button"),S=document.querySelector(".cansel-search-button"),g=document.querySelector(".search-string"),N=document.querySelector(".additional-title-filter"),F=document.querySelector(".slash-in-filter");var L="",E="",w="";const Z={"button-muscles":"Muscles","button-bodypart":"Body parts","button-equipment":"Equipment"};g&&g.addEventListener("input",function(){S.style.display=this.value.length>0?"block":"none"});S&&S.addEventListener("click",function(){g.value="",this.style.display="none"});P.forEach(s=>{s.addEventListener("click",e=>{if(e.preventDefault(),ee(),e.target&&e.target.matches("button.filter-tab-button")){P.forEach(r=>{r.classList.remove("active")}),s.classList.add("active");const i=e.target.id,t=Z[i];O(t,1).then(r=>console.log(`Execute function for pagination with parameter ${JSON.stringify(r)}`)).catch(r=>console.log(r))}})});$&&$.addEventListener("click",s=>{s.preventDefault(),w=g.value,A(D(L),E,w)});function D(s){var e=s.toLowerCase();return e==="body parts"&&(e="bodypart"),Object.values(h).find(i=>i===e)}function X(s){F.style.display="inline",N.textContent=s}function ee(){F.style.display="none",I.style.display="none",N.textContent="",ie()}function te(s,e){se(s,e),X(e),I.style.display="block",console.log(`filterName: ${L}  categoryName: ${E}`)}function se(s,e){L=s,E=e}function ie(){L="",E="",g.value="",w=""}document.querySelector(".fav-list-card");document.querySelector(".fav-text-default");function re(){const s=document.querySelector(".js-header-nav-list"),e=document.querySelector(".logo"),i=document.querySelector(".menu-btn"),t=document.querySelector(".close-btn-menu"),r=document.querySelector(".mobile-menu-backdrop"),a=document.querySelectorAll(".menu-item");i&&i.addEventListener("click",()=>{r.classList.add("is-open")}),t&&t.addEventListener("click",()=>{r.classList.remove("is-open")}),a&&a.forEach(o=>{o.addEventListener("click",()=>{r.classList.remove("is-open")})});const n=localStorage.getItem("activePath"),p=window.location.pathname;s.querySelectorAll(".nav-link").forEach(o=>{const c=o.closest(".nav-item");o.getAttribute("href")===n||o.getAttribute("href")===p||p==="/"&&o.getAttribute("href")==="./index.html"?(o.classList.add("js-nav-link-active"),c.classList.add("js-nav-item-active")):(o.classList.remove("js-nav-link-active"),c.classList.remove("js-nav-item-active"))}),s.addEventListener("click",o=>{const c=o.target.closest(".nav-link");if(!c)return;const l=c.closest(".nav-item");s.querySelectorAll(".js-nav-link-active").forEach(m=>{m.classList.remove("js-nav-link-active")}),s.querySelectorAll(".js-nav-item-active").forEach(m=>{m.classList.remove("js-nav-item-active")}),c.classList.add("js-nav-link-active"),l.classList.add("js-nav-item-active"),localStorage.setItem("activePath",c.getAttribute("href"))}),e.addEventListener("click",()=>{s.querySelectorAll(".js-nav-link-active").forEach(l=>{l.classList.remove("js-nav-link-active")}),s.querySelectorAll(".js-nav-item-active").forEach(l=>{l.classList.remove("js-nav-item-active")});const o=s.querySelector('.nav-link[href="./index.html"]'),c=o==null?void 0:o.closest(".nav-item");o&&c&&(o.classList.add("js-nav-link-active"),c.classList.add("js-nav-item-active")),localStorage.setItem("activePath","./index.html")})}re();document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector(".footer__form");s&&s.addEventListener("submit",async function(e){e.preventDefault();const i=document.querySelector(".footer__input"),t=i.value.trim();if(!/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(t)){d.error({title:"Помилка",message:"Будь ласка, введіть коректну email адресу.",position:"bottomRight"});return}try{const a=await fetch("https://your-energy.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t})}),n=await a.json();a.status===201?d.success({title:"Успіх",message:n.message||"Ви успішно підписались на розсилку!",position:"topRight"}):a.status===400?d.warning({title:"Увага",message:n.message||"Некоректні дані. Перевірте ваш email.",position:"topRight"}):a.status===409?d.warning({title:"Увага",message:n.message||"Цей email вже підписаний.",position:"topRight"}):d.error({title:"Помилка",message:n.message||"Сталася помилка. Спробуйте пізніше.",position:"topRight"})}catch{d.error({title:"Помилка",message:"Не вдалося підключитися до сервера. Спробуйте пізніше.",position:"topRight"})}i.value=""})});O("Muscles",1).then(s=>console.log(`Execute function for pagination with parameter ${JSON.stringify(s)}`)).catch(s=>console.log(s));
//# sourceMappingURL=main-Ht5gcwy5.js.map
