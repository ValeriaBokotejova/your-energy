import{a as v,i as d}from"./vendor-Cbhu4xvy.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function i(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(r){if(r.ep)return;r.ep=!0;const a=i(r);fetch(r.href,a)}})();const F="https://your-energy.b.goit.study/api",B={mobile:9,tablet:12,desktop:12};v.defaults.baseURL=F;const U=(s,e,i)=>{const t={filter:s,page:e,limit:i};return v.get("/filters",{params:t})},H=s=>v.get(`/exercises/${s}`),_=s=>v.get("/exercises",{params:s}),u="/your-energy/assets/sprite-gtohewle.svg";class f{constructor(e,i,t,r,a,o,g,n,c,l,m){this.id=e,this.bodyPart=i,this.equipment=t,this.gifUrl=r,this.name=a,this.target=o,this.description=g,this.rating=n,this.burnedCalories=c,this.time=l,this.popularity=m}setRatingVisible(e){this.ratingVisible=e}setTrashVisible(e){this.trashVisible=e}static async fetchById(e){const t=(await H(e)).data;return new f(t._id,t.bodyPart,t.equipment,t.gifUrl,t.name,t.target,t.description,t.rating,t.burnedCalories,t.time,t.popularity)}render(e=!0,i=!1){const t=document.createElement("div");return t.className="exercise-card",t.innerHTML=`  
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
    `,e}formatRating(){return this.rating.toFixed(1)}getStarRatingHTML(){let e="";const i='<svg width="18" height="18"><use href="${sprite}#star-active"></use></svg>',t='<svg width="18" height="18"><use href="${sprite}#star-inactive"></use></svg>';return e+=i.repeat(this.rating.toFixed(0)),e+=t.repeat(5-this.rating.toFixed(0)),e}}const G=()=>new URLSearchParams(window.location.search).get("exerciseId");document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector(".modal-overlay"),e=document.querySelector(".modal-page"),i=document.body;document.addEventListener("click",t=>{if(t.target.closest(".exercise-start-btn")){const r=t.target.closest(".exercise-start-btn").dataset.exerciseid||G();r&&f.fetchById(r).then(a=>{e.innerHTML="",e.append(a.renderCard()),s.classList.remove("hidden"),e.classList.remove("hidden"),i.classList.add("no-scroll")}).catch(a=>{console.error("Error fetching exercise:",a)})}(t.target.classList.contains("modal-overlay")||t.target.closest(".modal-card-close-button"))&&(s.classList.add("hidden"),e.classList.add("hidden"),i.classList.remove("no-scroll"))})});const P=()=>{const s=window.innerWidth;return s<768?"mobile":s<1440?"tablet":"desktop"},z=()=>B[P()];class y{constructor(){this.exercises=[],this.page=0,this.perPage=10,this.totalPages=0}addExercise(e){this.exercises.push(e)}static async fetchWithFilters(e){const t=(await _(e.toParams())).data,r=new y;return r.page=t.page,r.perPage=t.perPage,r.totalPages=t.totalPages,t.results.forEach(a=>{const o=new f(a._id,a.bodyPart,a.equipment,a.gifUrl,a.name,a.target,a.description,a.rating,a.burnedCalories,a.time,a.popularity);r.addExercise(o)}),r}render(e=!0,i=!1){const t=document.createElement("div");return t.className="exercise-list",this.exercises.forEach(r=>{t.appendChild(r.render(e,i))}),t}}const h=Object.freeze({MUSCLES:"muscles",BODY_PART:"bodypart",EQUIPMENT:"equipment"});class J{constructor({bodypart:e,muscles:i,equipment:t,keyword:r,page:a=1,limit:o=10}={}){this.bodypart=e,this.muscles=i,this.equipment=t,this.keyword=r,this.page=a,this.limit=o}addFilter(e,i){switch(e){case h.MUSCLES:this.muscles=i;break;case h.BODY_PART:this.bodypart=i;break;case h.EQUIPMENT:this.equipment=i;break}}addKeyword(e){this.keyword=e}toParams(){const e={};return this.bodypart&&(e.bodypart=this.bodypart),this.muscles&&(e.muscles=this.muscles),this.equipment&&(e.equipment=this.equipment),this.keyword&&(e.keyword=this.keyword),e.page=this.page,e.limit=this.limit,e}}const $=document.querySelector(".loader"),C=()=>{$.classList.remove("hidden")},T=()=>{$.classList.add("hidden")},E=document.querySelector(".exercise-container");let x=new y;const K=async s=>{try{C(),x=await y.fetchWithFilters(s);const e=x.render(!0,!1);E.innerHTML="",E.appendChild(e)}catch(e){console.error(e)}finally{T()}};function k(s,e,i=null){const t=new J({page:1,limit:10});i&&t.addKeyword(i),t.addFilter(s,e),K(t),E.classList.remove("hidden")}const p=document.querySelector(".category-list"),j=document.querySelector(".category-container"),W=s=>s.reduce((e,i)=>e+`<li class="category-card" data-name="${i.name}" data-filter="${i.filter}">
      <img class="gallery-image"
           src="${i.imgURL}"
           alt="${i.name}"/>
            <div class="category-title">
              <h3>${i.name}</h3>
              <p>${i.filter}</p>
            </div>
          </li>`,""),A=async(s,e)=>{try{C();const i=await U(s,e,z()),{page:t,perPage:r,totalPages:a,results:o}=i.data;return o.length===0?(console.log("There are no categories for the specified filter"),{page:t,perPage:r,totalPages:a}):(p.innerHTML=W(o),p.addEventListener("click",M),j.classList.add("active"),{page:t,perPage:r,totalPages:a})}catch(i){console.log(i)}finally{T()}},Q=()=>{p.innerHTML="",p.removeEventListener("click",M),j.classList.remove("active")},M=s=>{if(s.preventDefault(),console.log(P()),s.target===s.currentTarget)return;const e=s.target.closest("li"),i=e.getAttribute("data-filter"),t=e.getAttribute("data-name");Q(),k(V(i),t),ee(i,t),console.log(`Execute function for rendering exercises (${i}; ${t})`)},V=s=>{const e=s.toLowerCase();return Object.values(h).find(i=>i===e)},S=document.querySelectorAll(".filter-tab-button"),O=document.querySelector(".filter-form-container"),q=document.querySelector(".search-button"),R=document.querySelector(".search-string"),I=document.querySelector(".additional-title-filter"),N=document.querySelector(".slash-in-filter");var b="",L="",w="";const Y={"button-muscles":"Muscles","button-bodypart":"Body parts","button-equipment":"Equipment"};S.forEach(s=>{s.addEventListener("click",e=>{if(e.preventDefault(),X(),e.target&&e.target.matches("button.filter-tab-button")){S.forEach(r=>{r.classList.remove("active")}),s.classList.add("active");const i=e.target.id,t=Y[i];A(t,1).then(r=>console.log(`Execute function for pagination with parameter ${JSON.stringify(r)}`)).catch(r=>console.log(r))}})});q&&q.addEventListener("click",s=>{s.preventDefault(),w=R.value,k(Z(b),L,w)});function Z(s){var e=s.toLowerCase();return e==="body parts"&&(e="bodypart"),Object.values(h).find(i=>i===e)}function D(s){N.style.display="inline",I.textContent=s}function X(){N.style.display="none",O.style.display="none",I.textContent="",se()}function ee(s,e){te(s,e),D(e),O.style.display="block",console.log(`filterName: ${b}  categoryName: ${L}`)}function te(s,e){b=s,L=e}function se(){b="",L="",R.value="",w=""}document.querySelector(".fav-list-card");document.querySelector(".fav-text-default");function ie(){const s=document.querySelector(".js-header-nav-list"),e=document.querySelector(".logo"),i=document.querySelector(".menu-btn"),t=document.querySelector(".close-btn-menu"),r=document.querySelector(".mobile-menu-backdrop"),a=document.querySelectorAll(".menu-item");i&&i.addEventListener("click",()=>{r.classList.add("is-open")}),t&&t.addEventListener("click",()=>{r.classList.remove("is-open")}),a&&a.forEach(n=>{n.addEventListener("click",()=>{r.classList.remove("is-open")})});const o=localStorage.getItem("activePath"),g=window.location.pathname;s.querySelectorAll(".nav-link").forEach(n=>{const c=n.closest(".nav-item");n.getAttribute("href")===o||n.getAttribute("href")===g||g==="/"&&n.getAttribute("href")==="./index.html"?(n.classList.add("js-nav-link-active"),c.classList.add("js-nav-item-active")):(n.classList.remove("js-nav-link-active"),c.classList.remove("js-nav-item-active"))}),s.addEventListener("click",n=>{const c=n.target.closest(".nav-link");if(!c)return;const l=c.closest(".nav-item");s.querySelectorAll(".js-nav-link-active").forEach(m=>{m.classList.remove("js-nav-link-active")}),s.querySelectorAll(".js-nav-item-active").forEach(m=>{m.classList.remove("js-nav-item-active")}),c.classList.add("js-nav-link-active"),l.classList.add("js-nav-item-active"),localStorage.setItem("activePath",c.getAttribute("href"))}),e.addEventListener("click",()=>{s.querySelectorAll(".js-nav-link-active").forEach(l=>{l.classList.remove("js-nav-link-active")}),s.querySelectorAll(".js-nav-item-active").forEach(l=>{l.classList.remove("js-nav-item-active")});const n=s.querySelector('.nav-link[href="./index.html"]'),c=n==null?void 0:n.closest(".nav-item");n&&c&&(n.classList.add("js-nav-link-active"),c.classList.add("js-nav-item-active")),localStorage.setItem("activePath","./index.html")})}ie();document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector(".footer__form");s&&s.addEventListener("submit",async function(e){e.preventDefault();const i=document.querySelector(".footer__input"),t=i.value.trim();if(!/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(t)){d.error({title:"Помилка",message:"Будь ласка, введіть коректну email адресу.",position:"bottomRight"});return}try{const a=await fetch("https://your-energy.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t})}),o=await a.json();a.status===201?d.success({title:"Успіх",message:o.message||"Ви успішно підписались на розсилку!",position:"topRight"}):a.status===400?d.warning({title:"Увага",message:o.message||"Некоректні дані. Перевірте ваш email.",position:"topRight"}):a.status===409?d.warning({title:"Увага",message:o.message||"Цей email вже підписаний.",position:"topRight"}):d.error({title:"Помилка",message:o.message||"Сталася помилка. Спробуйте пізніше.",position:"topRight"})}catch{d.error({title:"Помилка",message:"Не вдалося підключитися до сервера. Спробуйте пізніше.",position:"topRight"})}i.value=""})});A("Muscles",1).then(s=>console.log(`Execute function for pagination with parameter ${JSON.stringify(s)}`)).catch(s=>console.log(s));
//# sourceMappingURL=main-CTkpb0em.js.map
