import{a as p}from"./vendor-N5iQpiFS.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}})();const P="https://your-energy.b.goit.study/api",S={mobile:9,tablet:12,desktop:12};p.defaults.baseURL=P;const q=(i,e,s)=>{const t={filter:i,page:e,limit:s};return p.get("/filters",{params:t})},$=i=>p.get(`/exercises/${i}`),C=i=>p.get("/exercises",{params:i});class g{constructor(e,s,t,a,r,c,u,n,o,l,d){this.id=e,this.bodyPart=s,this.equipment=t,this.gifUrl=a,this.name=r,this.target=c,this.description=u,this.rating=n,this.burnedCalories=o,this.time=l,this.popularity=d}setRatingVisible(e){this.ratingVisible=e}setTrashVisible(e){this.trashVisible=e}static async fetchById(e){const t=(await $(e)).data;return new g(t._id,t.bodyPart,t.equipment,t.gifUrl,t.name,t.target,t.description,t.rating,t.burnedCalories,t.time,t.popularity)}render(e=!0,s=!1){const t=document.createElement("div");return t.className="exercise-card",t.innerHTML=`
        <div class="exercise-header">
          <div class="badge">workout</div>
          <div class="rating ${e?"":"hidden"}">
            ${this.formatRating()}
            <svg width="18" height="18">
              <use href="./img/sprite.svg#star-active"></use>
            </svg>
          </div>
          <button type="button" data-exerciseid="${this.id}" class="exercise-card-trash ${s?"":"hidden"}">
            <svg width="16" height="16">
              <use href="./img/sprite.svg#trash"></use>
            </svg>
          </button>
          <button type="button" data-exerciseid="${this.id}" class="exercise-start-btn">
            Start
            <svg width="16" height="16">
              <use href="./img/sprite.svg#arrow"></use>
            </svg>
          </button>
        </div>
        <div class="exercise-title-container">
          <div class="exercise-icon">
            <svg width="18" height="18">
              <use href="./img/sprite.svg#group"></use>
            </svg>
          </div>
          <div class="exercise-title">${this.name}</div>
        </div>
        <ul class="exercise-details">
          <li class="exercise-details-item">Burned calories: <span class="exercise-details-item-value">${this.burnedCalories}</span></li>
          <li class="exercise-details-item">Body Part: <span class="exercise-details-item-value">${this.bodyPart}</span></li>
          <li class="exercise-details-item">Target: <span class="exercise-details-item-value">${this.target}</span></li>
        </ul>
      `,t}renderCard(){const e=document.createElement("div");e.className="exercise-modal-card";const t=[{name:"Target",value:this.target},{name:"Body Part",value:this.bodyPart},{name:"Equipment",value:this.equipment},{name:"Popular",value:this.popularity},{name:"Burned Calories",value:this.burnedCalories}].filter(a=>a.value).map(a=>`
        <div class="modal-card-property">
        <span class="modal-card-property-name">${a.name}</span>
          <span class="modal-card-property-value">${a.value}</span>
          
        </div>`).join("");return e.innerHTML=`
      <button type="button" class="modal-card-close-button">
       <svg width="24" height="24">
              <use href="./img/sprite.svg#close"></use>
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
            <use href="./img/sprite.svg#heart"></use>
          </svg>
        </button>
        <button type="button" data-exerciseid="${this.id}"class="modal-card-button rating-button">Give a rating</button>
      </div>
      </div>
      </div>
    `,e}formatRating(){return this.rating.toFixed(1)}getStarRatingHTML(){let e="";const s='<svg width="18" height="18"><use href="./img/sprite.svg#star-active"></use></svg>',t='<svg width="18" height="18"><use href="./img/sprite.svg#star-inactive"></use></svg>';return e+=s.repeat(this.rating.toFixed(0)),e+=t.repeat(5-this.rating.toFixed(0)),e}}const y=document.querySelector(".modal-page");y&&g.fetchById("64f389465ae26083f39b17df").then(i=>{y.append(i.renderCard())});class v{constructor(){this.exercises=[],this.page=0,this.perPage=10,this.totalPages=0}addExercise(e){this.exercises.push(e)}static async fetchWithFilters(e){const t=(await C(e.toParams())).data,a=new v;return a.page=t.page,a.perPage=t.perPage,a.totalPages=t.totalPages,t.results.forEach(r=>{const c=new g(r._id,r.bodyPart,r.equipment,r.gifUrl,r.name,r.target,r.description,r.rating,r.burnedCalories,r.time,r.popularity);a.addExercise(c)}),a}render(e=!0,s=!1){const t=document.createElement("div");return t.className="exercise-list",this.exercises.forEach(a=>{t.appendChild(a.render(e,s))}),t}}const m=Object.freeze({MUSCLES:"muscles",BODY_PART:"bodypart",EQUIPMENT:"equipment"});class T{constructor({bodypart:e,muscles:s,equipment:t,keyword:a,page:r=1,limit:c=10}={}){this.bodypart=e,this.muscles=s,this.equipment=t,this.keyword=a,this.page=r,this.limit=c}addFilter(e,s){switch(e){case m.MUSCLES:this.muscles=s;break;case m.BODY_PART:this.bodypart=s;break;case m.EQUIPMENT:this.equipment=s;break}}toParams(){const e={};return this.bodypart&&(e.bodypart=this.bodypart),this.muscles&&(e.muscles=this.muscles),this.equipment&&(e.equipment=this.equipment),this.keyword&&(e.keyword=this.keyword),e.page=this.page,e.limit=this.limit,e}}const f=document.querySelector(".exercise-container");let b=new v;const j=async i=>{try{b=await v.fetchWithFilters(i);const e=b.render(!0,!1);f.innerHTML="",f.appendChild(e)}catch(e){console.error(e)}};function k(i,e){const s=new T({page:1,limit:10});s.addFilter(i,e),j(s),f.classList.remove("hidden")}const E=()=>{const i=window.innerWidth;return i<768?"mobile":i<1440?"tablet":"desktop"},A=()=>S[E()],h=document.querySelector(".category-list"),L=document.querySelector(".category-container"),M=i=>i.reduce((e,s)=>e+`<li class="category-card" data-name="${s.name}" data-filter="${s.filter}">
      <img class="gallery-image"
           src="${s.imgURL}"
           alt="${s.name}"/>
            <div class="category-title">
              <h3>${s.name}</h3>
              <p>${s.filter}</p>
            </div>
          </li>`,""),I=async(i,e)=>{try{const s=await q(i,e,A()),{page:t,perPage:a,totalPages:r,results:c}=s.data;return c.length===0?(console.log("There are no categories for the specified filter"),{page:t,perPage:a,totalPages:r}):(h.innerHTML=M(c),h.addEventListener("click",w),L.classList.add("active"),{page:t,perPage:a,totalPages:r})}catch(s){console.log(s)}},B=()=>{h.innerHTML="",h.removeEventListener("click",w),L.classList.remove("active")},w=i=>{if(i.preventDefault(),console.log(E()),i.target===i.currentTarget)return;const e=i.target.closest("li"),s=e.getAttribute("data-filter"),t=e.getAttribute("data-name");B(),k(O(s),t),console.log(`Execute function for rendering exercises (${s}; ${t})`)},O=i=>{const e=i.toLowerCase();return Object.values(m).find(s=>s===e)},x=document.querySelector(".fav-list-card"),R=[1,2,3,4,5,6,7,8],N=R.map(i=>`<li class="list-card-item" data-id="${i}">
                <div class="list-card-wrapper">
                  <div class="box-buttons">
                    <div class="card-name-box">
                      <p class="list-card-name">tags</p>
                    </div>
                    <button class="btn-start" type="button">Start</button>
                  </div>
                  <h3 class="list-title-card">title card</h3>
                  <div class="info-text-box">
                    <p class="list-info-about-body">
                      Burned calories: <span class="info-text-body">220 / 3 min</span>
                    </p>
                    <p class="list-info-about-body">
                      Body part: <span class="info-text-body">Waist</span>
                    </p>
                    <p class="list-info-about-body">
                      Target: <span class="info-text-body">Biceps</span>
                    </p>
                  </div>
                </div>
              </li>`);x&&x.insertAdjacentHTML("beforeend",N.join(""));function F(){const i=document.querySelector(".js-header-nav-list"),e=document.querySelector(".logo"),s=document.querySelector(".menu-btn"),t=document.querySelector(".close-btn-menu"),a=document.querySelector(".mobile-menu-backdrop"),r=document.querySelectorAll(".menu-item");s&&s.addEventListener("click",()=>{a.classList.add("is-open")}),t&&t.addEventListener("click",()=>{a.classList.remove("is-open")}),r&&r.forEach(n=>{n.addEventListener("click",()=>{a.classList.remove("is-open")})});const c=localStorage.getItem("activePath"),u=window.location.pathname;i.querySelectorAll(".nav-link").forEach(n=>{const o=n.closest(".nav-item");n.getAttribute("href")===c||n.getAttribute("href")===u||u==="/"&&n.getAttribute("href")==="./index.html"?(n.classList.add("js-nav-link-active"),o.classList.add("js-nav-item-active")):(n.classList.remove("js-nav-link-active"),o.classList.remove("js-nav-item-active"))}),i.addEventListener("click",n=>{const o=n.target.closest(".nav-link");if(!o)return;const l=o.closest(".nav-item");i.querySelectorAll(".js-nav-link-active").forEach(d=>{d.classList.remove("js-nav-link-active")}),i.querySelectorAll(".js-nav-item-active").forEach(d=>{d.classList.remove("js-nav-item-active")}),o.classList.add("js-nav-link-active"),l.classList.add("js-nav-item-active"),localStorage.setItem("activePath",o.getAttribute("href"))}),e.addEventListener("click",()=>{i.querySelectorAll(".js-nav-link-active").forEach(l=>{l.classList.remove("js-nav-link-active")}),i.querySelectorAll(".js-nav-item-active").forEach(l=>{l.classList.remove("js-nav-item-active")});const n=i.querySelector('.nav-link[href="./index.html"]'),o=n==null?void 0:n.closest(".nav-item");n&&o&&(n.classList.add("js-nav-link-active"),o.classList.add("js-nav-item-active")),localStorage.setItem("activePath","./index.html")})}F();I("Muscles",1).then(i=>console.log(`Execute function for pagination with parameter ${JSON.stringify(i)}`)).catch(i=>console.log(i));
//# sourceMappingURL=main-BVJgK5kR.js.map
