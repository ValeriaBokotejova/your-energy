import{a as v,i as d}from"./vendor-Cbhu4xvy.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}})();const C="https://your-energy.b.goit.study/api",T={mobile:9,tablet:12,desktop:12};v.defaults.baseURL=C;const j=(i,e,s)=>{const t={filter:i,page:e,limit:s};return v.get("/filters",{params:t})},A=i=>v.get(`/exercises/${i}`),k=i=>v.get("/exercises",{params:i}),u="/your-energy/assets/sprite-gtohewle.svg";class f{constructor(e,s,t,r,a,o,h,n,c,l,m){this.id=e,this.bodyPart=s,this.equipment=t,this.gifUrl=r,this.name=a,this.target=o,this.description=h,this.rating=n,this.burnedCalories=c,this.time=l,this.popularity=m}setRatingVisible(e){this.ratingVisible=e}setTrashVisible(e){this.trashVisible=e}static async fetchById(e){const t=(await A(e)).data;return new f(t._id,t.bodyPart,t.equipment,t.gifUrl,t.name,t.target,t.description,t.rating,t.burnedCalories,t.time,t.popularity)}render(e=!0,s=!1){const t=document.createElement("div");return t.className="exercise-card",t.innerHTML=`  
        <div class="exercise-header">
          <div class="badge">workout</div>
          <div class="rating ${e?"":"hidden"}">
            ${this.formatRating()}
            <svg width="18" height="18">
              <use href="${u}#star-active"></use>
            </svg>
          </div>
          <button type="button" data-exerciseid="${this.id}" class="exercise-card-trash ${s?"":"hidden"}">
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
    `,e}formatRating(){return this.rating.toFixed(1)}getStarRatingHTML(){let e="";const s='<svg width="18" height="18"><use href="${sprite}#star-active"></use></svg>',t='<svg width="18" height="18"><use href="${sprite}#star-inactive"></use></svg>';return e+=s.repeat(this.rating.toFixed(0)),e+=t.repeat(5-this.rating.toFixed(0)),e}}const L=document.querySelector(".modal-page");L&&f.fetchById("64f389465ae26083f39b17df").then(i=>{L.append(i.renderCard())});class y{constructor(){this.exercises=[],this.page=0,this.perPage=10,this.totalPages=0}addExercise(e){this.exercises.push(e)}static async fetchWithFilters(e){const t=(await k(e.toParams())).data,r=new y;return r.page=t.page,r.perPage=t.perPage,r.totalPages=t.totalPages,t.results.forEach(a=>{const o=new f(a._id,a.bodyPart,a.equipment,a.gifUrl,a.name,a.target,a.description,a.rating,a.burnedCalories,a.time,a.popularity);r.addExercise(o)}),r}render(e=!0,s=!1){const t=document.createElement("div");return t.className="exercise-list",this.exercises.forEach(r=>{t.appendChild(r.render(e,s))}),t}}const g=Object.freeze({MUSCLES:"muscles",BODY_PART:"bodypart",EQUIPMENT:"equipment"});class R{constructor({bodypart:e,muscles:s,equipment:t,keyword:r,page:a=1,limit:o=10}={}){this.bodypart=e,this.muscles=s,this.equipment=t,this.keyword=r,this.page=a,this.limit=o}addFilter(e,s){switch(e){case g.MUSCLES:this.muscles=s;break;case g.BODY_PART:this.bodypart=s;break;case g.EQUIPMENT:this.equipment=s;break}}toParams(){const e={};return this.bodypart&&(e.bodypart=this.bodypart),this.muscles&&(e.muscles=this.muscles),this.equipment&&(e.equipment=this.equipment),this.keyword&&(e.keyword=this.keyword),e.page=this.page,e.limit=this.limit,e}}const w=document.querySelector(".loader"),x=()=>{w.classList.remove("hidden")},P=()=>{w.classList.add("hidden")},b=document.querySelector(".exercise-container");let E=new y;const M=async i=>{try{x(),E=await y.fetchWithFilters(i);const e=E.render(!0,!1);b.innerHTML="",b.appendChild(e)}catch(e){console.error(e)}finally{P()}};function O(i,e){const s=new R({page:1,limit:10});s.addFilter(i,e),M(s),b.classList.remove("hidden")}const $=()=>{const i=window.innerWidth;return i<768?"mobile":i<1440?"tablet":"desktop"},I=()=>T[$()],p=document.querySelector(".category-list"),S=document.querySelector(".category-container"),N=i=>i.reduce((e,s)=>e+`<li class="category-card" data-name="${s.name}" data-filter="${s.filter}">
      <img class="gallery-image"
           src="${s.imgURL}"
           alt="${s.name}"/>
            <div class="category-title">
              <h3>${s.name}</h3>
              <p>${s.filter}</p>
            </div>
          </li>`,""),F=async(i,e)=>{try{x();const s=await j(i,e,I()),{page:t,perPage:r,totalPages:a,results:o}=s.data;return o.length===0?(console.log("There are no categories for the specified filter"),{page:t,perPage:r,totalPages:a}):(p.innerHTML=N(o),p.addEventListener("click",q),S.classList.add("active"),{page:t,perPage:r,totalPages:a})}catch(s){console.log(s)}finally{P()}},B=()=>{p.innerHTML="",p.removeEventListener("click",q),S.classList.remove("active")},q=i=>{if(i.preventDefault(),console.log($()),i.target===i.currentTarget)return;const e=i.target.closest("li"),s=e.getAttribute("data-filter"),t=e.getAttribute("data-name");B(),O(U(s),t),console.log(`Execute function for rendering exercises (${s}; ${t})`)},U=i=>{const e=i.toLowerCase();return Object.values(g).find(s=>s===e)};document.querySelector(".fav-list-card");document.querySelector(".fav-text-default");function _(){const i=document.querySelector(".js-header-nav-list"),e=document.querySelector(".logo"),s=document.querySelector(".menu-btn"),t=document.querySelector(".close-btn-menu"),r=document.querySelector(".mobile-menu-backdrop"),a=document.querySelectorAll(".menu-item");s&&s.addEventListener("click",()=>{r.classList.add("is-open")}),t&&t.addEventListener("click",()=>{r.classList.remove("is-open")}),a&&a.forEach(n=>{n.addEventListener("click",()=>{r.classList.remove("is-open")})});const o=localStorage.getItem("activePath"),h=window.location.pathname;i.querySelectorAll(".nav-link").forEach(n=>{const c=n.closest(".nav-item");n.getAttribute("href")===o||n.getAttribute("href")===h||h==="/"&&n.getAttribute("href")==="./index.html"?(n.classList.add("js-nav-link-active"),c.classList.add("js-nav-item-active")):(n.classList.remove("js-nav-link-active"),c.classList.remove("js-nav-item-active"))}),i.addEventListener("click",n=>{const c=n.target.closest(".nav-link");if(!c)return;const l=c.closest(".nav-item");i.querySelectorAll(".js-nav-link-active").forEach(m=>{m.classList.remove("js-nav-link-active")}),i.querySelectorAll(".js-nav-item-active").forEach(m=>{m.classList.remove("js-nav-item-active")}),c.classList.add("js-nav-link-active"),l.classList.add("js-nav-item-active"),localStorage.setItem("activePath",c.getAttribute("href"))}),e.addEventListener("click",()=>{i.querySelectorAll(".js-nav-link-active").forEach(l=>{l.classList.remove("js-nav-link-active")}),i.querySelectorAll(".js-nav-item-active").forEach(l=>{l.classList.remove("js-nav-item-active")});const n=i.querySelector('.nav-link[href="./index.html"]'),c=n==null?void 0:n.closest(".nav-item");n&&c&&(n.classList.add("js-nav-link-active"),c.classList.add("js-nav-item-active")),localStorage.setItem("activePath","./index.html")})}_();document.addEventListener("DOMContentLoaded",()=>{const i=document.querySelector(".footer__form");i&&i.addEventListener("submit",async function(e){e.preventDefault();const s=document.querySelector(".footer__input"),t=s.value.trim();if(!/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(t)){d.error({title:"Помилка",message:"Будь ласка, введіть коректну email адресу.",position:"bottomRight"});return}try{const a=await fetch("https://your-energy.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t})}),o=await a.json();a.status===201?d.success({title:"Успіх",message:o.message||"Ви успішно підписались на розсилку!",position:"topRight"}):a.status===400?d.warning({title:"Увага",message:o.message||"Некоректні дані. Перевірте ваш email.",position:"topRight"}):a.status===409?d.warning({title:"Увага",message:o.message||"Цей email вже підписаний.",position:"topRight"}):d.error({title:"Помилка",message:o.message||"Сталася помилка. Спробуйте пізніше.",position:"topRight"})}catch{d.error({title:"Помилка",message:"Не вдалося підключитися до сервера. Спробуйте пізніше.",position:"topRight"})}s.value=""})});F("Muscles",1).then(i=>console.log(`Execute function for pagination with parameter ${JSON.stringify(i)}`)).catch(i=>console.log(i));
//# sourceMappingURL=main-CoioLl-u.js.map
