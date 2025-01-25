import{a as v,i as m}from"./vendor-Cbhu4xvy.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function i(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(r){if(r.ep)return;r.ep=!0;const a=i(r);fetch(r.href,a)}})();const H="https://your-energy.b.goit.study/api",U={mobile:9,tablet:12,desktop:12};v.defaults.baseURL=H;const _=(s,e,i)=>{const t={filter:s,page:e,limit:i};return v.get("/filters",{params:t})},G=s=>v.get(`/exercises/${s}`),z=s=>v.get("/exercises",{params:s}),h="/your-energy/assets/sprite-Bh03drsD.svg";function J(s,e){const i="#EEA10C",t="#F4F4F4";let a="";for(let o=0;o<5;o++){const d=`starGradient${o}`,n=o+1<=s?100:o<s?s%1*100:0,c=[{offset:"0%",color:i,opacity:"1"},{offset:`${n}%`,color:i,opacity:"1"},{offset:`${n+1}%`,color:t,opacity:"0.20"}],l=`
            <linearGradient id="${d}" x1="0%" y1="0%" x2="100%" y2="0%">
              ${c.map(w=>`<stop offset="${w.offset}" style="stop-color:${w.color};stop-opacity:${w.opacity}" />`).join("")}
            </linearGradient>
          `,u=`url(#${d})`;a+=`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">${l}<path d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z" fill="${u}" fill-opacity="1"/></svg>`}return a}class y{constructor(e,i,t,r,a,o,d,n,c,l,u){this.id=e,this.bodyPart=i,this.equipment=t,this.gifUrl=r,this.name=a,this.target=o,this.description=d,this.rating=n,this.burnedCalories=c,this.time=l,this.popularity=u}setRatingVisible(e){this.ratingVisible=e}setTrashVisible(e){this.trashVisible=e}static async fetchById(e){const t=(await G(e)).data;return new y(t._id,t.bodyPart,t.equipment,t.gifUrl,t.name,t.target,t.description,t.rating,t.burnedCalories,t.time,t.popularity)}render(e=!0,i=!1){const t=document.createElement("div");return t.className="exercise-card",t.innerHTML=`  
        <div class="exercise-header">
          <div class="badge">workout</div>
          <div class="rating ${e?"":"hidden"}">
            ${this.formatRating()}
            <svg width="18" height="18">
              <use href="${h}#star-active"></use>
            </svg>
          </div>
          <button type="button" data-exerciseid="${this.id}" class="exercise-card-trash ${i?"":"hidden"}">
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
      `,t}renderCard(){const e=document.createElement("div");e.className="exercise-modal-card";const t=[{name:"Target",value:this.target},{name:"Body Part",value:this.bodyPart},{name:"Equipment",value:this.equipment},{name:"Popular",value:this.popularity},{name:"Burned Calories",value:this.burnedCalories}].filter(r=>r.value).map(r=>`
        <div class="modal-card-property">
        <span class="modal-card-property-name">${r.name}</span>
          <span class="modal-card-property-value">${r.value}</span>
          
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
       ${J(this.rating)}            
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
            <use href="${h}#heart"></use>
          </svg>
        </button>
        <button type="button" data-exerciseid="${this.id}"class="modal-card-button rating-button">Give a rating</button>
      </div>
      </div>
      </div>
    `,e}formatRating(){return this.rating.toFixed(1)}getStarRatingHTML(){let e="";const i='<svg width="18" height="18"><use href="${sprite}#star-active"></use></svg>',t='<svg width="18" height="18"><use href="${sprite}#star-inactive"></use></svg>';return e+=i.repeat(this.rating.toFixed(0)),e+=t.repeat(5-this.rating.toFixed(0)),e}}const K=()=>new URLSearchParams(window.location.search).get("exerciseId");document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector(".modal-overlay"),e=document.querySelector(".modal-page"),i=document.body;document.addEventListener("click",t=>{if(t.target.closest(".exercise-start-btn")){const r=t.target.closest(".exercise-start-btn").dataset.exerciseid||K();r&&y.fetchById(r).then(a=>{e.innerHTML="",e.append(a.renderCard()),s.classList.remove("hidden"),e.classList.remove("hidden"),i.classList.add("no-scroll")}).catch(a=>{console.error("Error fetching exercise:",a)})}(t.target.classList.contains("modal-overlay")||t.target.closest(".modal-card-close-button"))&&(s.classList.add("hidden"),e.classList.add("hidden"),i.classList.remove("no-scroll"))})});const T=()=>{const s=window.innerWidth;return s<768?"mobile":s<1440?"tablet":"desktop"},W=()=>U[T()];class b{constructor(){this.exercises=[],this.page=0,this.perPage=10,this.totalPages=0}addExercise(e){this.exercises.push(e)}static async fetchWithFilters(e){const t=(await z(e.toParams())).data,r=new b;return r.page=t.page,r.perPage=t.perPage,r.totalPages=t.totalPages,t.results.forEach(a=>{const o=new y(a._id,a.bodyPart,a.equipment,a.gifUrl,a.name,a.target,a.description,a.rating,a.burnedCalories,a.time,a.popularity);r.addExercise(o)}),r}render(e=!0,i=!1){const t=document.createElement("div");return t.className="exercise-list",this.exercises.forEach(r=>{t.appendChild(r.render(e,i))}),t}}const g=Object.freeze({MUSCLES:"muscles",BODY_PART:"bodypart",EQUIPMENT:"equipment"});class Z{constructor({bodypart:e,muscles:i,equipment:t,keyword:r,page:a=1,limit:o=10}={}){this.bodypart=e,this.muscles=i,this.equipment=t,this.keyword=r,this.page=a,this.limit=o}addFilter(e,i){switch(e){case g.MUSCLES:this.muscles=i;break;case g.BODY_PART:this.bodypart=i;break;case g.EQUIPMENT:this.equipment=i;break}}addKeyword(e){this.keyword=e}toParams(){const e={};return this.bodypart&&(e.bodypart=this.bodypart),this.muscles&&(e.muscles=this.muscles),this.equipment&&(e.equipment=this.equipment),this.keyword&&(e.keyword=this.keyword),e.page=this.page,e.limit=this.limit,e}}const k=document.querySelector(".loader"),j=()=>{k.classList.remove("hidden")},A=()=>{k.classList.add("hidden")},x=document.querySelector(".exercise-container");let C=new b;const Q=async s=>{try{j(),C=await b.fetchWithFilters(s);const e=C.render(!0,!1);x.innerHTML="",x.appendChild(e)}catch(e){console.error(e)}finally{A()}};function M(s,e,i=null){const t=new Z({page:1,limit:10});i&&t.addKeyword(i),t.addFilter(s,e),Q(t),x.classList.remove("hidden")}const f=document.querySelector(".category-list"),I=document.querySelector(".category-container"),V=s=>s.reduce((e,i)=>e+`<li class="category-card" data-name="${i.name}" data-filter="${i.filter}">
      <img class="gallery-image"
           src="${i.imgURL}"
           alt="${i.name}"/>
            <div class="category-title">
              <h3>${i.name}</h3>
              <p>${i.filter}</p>
            </div>
          </li>`,""),O=async(s,e)=>{try{j();const i=await _(s,e,W()),{page:t,perPage:r,totalPages:a,results:o}=i.data;return o.length===0?(console.log("There are no categories for the specified filter"),{page:t,perPage:r,totalPages:a}):(f.innerHTML=V(o),f.addEventListener("click",R),I.classList.add("active"),{page:t,perPage:r,totalPages:a})}catch(i){console.log(i)}finally{A()}},Y=()=>{f.innerHTML="",f.removeEventListener("click",R),I.classList.remove("active")},R=s=>{if(s.preventDefault(),console.log(T()),s.target===s.currentTarget)return;const e=s.target.closest("li"),i=e.getAttribute("data-filter"),t=e.getAttribute("data-name");Y(),M(D(i),t),ie(i,t),console.log(`Execute function for rendering exercises (${i}; ${t})`)},D=s=>{const e=s.toLowerCase();return Object.values(g).find(i=>i===e)},q=document.querySelectorAll(".filter-tab-button"),F=document.querySelector(".filter-form-container"),P=document.querySelector(".search-button"),S=document.querySelector(".cansel-search-button"),p=document.querySelector(".search-string"),N=document.querySelector(".additional-title-filter"),B=document.querySelector(".slash-in-filter");var L="",E="",$="";const X={"button-muscles":"Muscles","button-bodypart":"Body parts","button-equipment":"Equipment"};p&&p.addEventListener("input",function(){S.style.display=this.value.length>0?"block":"none"});S&&S.addEventListener("click",function(){p.value="",this.style.display="none"});q.forEach(s=>{s.addEventListener("click",e=>{if(e.preventDefault(),se(),e.target&&e.target.matches("button.filter-tab-button")){q.forEach(r=>{r.classList.remove("active")}),s.classList.add("active");const i=e.target.id,t=X[i];O(t,1).then(r=>console.log(`Execute function for pagination with parameter ${JSON.stringify(r)}`)).catch(r=>console.log(r))}})});P&&P.addEventListener("click",s=>{s.preventDefault(),$=p.value,M(ee(L),E,$)});function ee(s){var e=s.toLowerCase();return e==="body parts"&&(e="bodypart"),Object.values(g).find(i=>i===e)}function te(s){B.style.display="inline",N.textContent=s}function se(){B.style.display="none",F.style.display="none",N.textContent="",ae()}function ie(s,e){re(s,e),te(e),F.style.display="block",console.log(`filterName: ${L}  categoryName: ${E}`)}function re(s,e){L=s,E=e}function ae(){L="",E="",p.value="",$=""}document.querySelector(".fav-list-card");document.querySelector(".fav-text-default");function oe(){const s=document.querySelector(".js-header-nav-list"),e=document.querySelector(".logo"),i=document.querySelector(".menu-btn"),t=document.querySelector(".close-btn-menu"),r=document.querySelector(".mobile-menu-backdrop"),a=document.querySelectorAll(".menu-item");i&&i.addEventListener("click",()=>{r.classList.add("is-open")}),t&&t.addEventListener("click",()=>{r.classList.remove("is-open")}),a&&a.forEach(n=>{n.addEventListener("click",()=>{r.classList.remove("is-open")})});const o=localStorage.getItem("activePath"),d=window.location.pathname;s.querySelectorAll(".nav-link").forEach(n=>{const c=n.closest(".nav-item");n.getAttribute("href")===o||n.getAttribute("href")===d||d==="/"&&n.getAttribute("href")==="./index.html"?(n.classList.add("js-nav-link-active"),c.classList.add("js-nav-item-active")):(n.classList.remove("js-nav-link-active"),c.classList.remove("js-nav-item-active"))}),s.addEventListener("click",n=>{const c=n.target.closest(".nav-link");if(!c)return;const l=c.closest(".nav-item");s.querySelectorAll(".js-nav-link-active").forEach(u=>{u.classList.remove("js-nav-link-active")}),s.querySelectorAll(".js-nav-item-active").forEach(u=>{u.classList.remove("js-nav-item-active")}),c.classList.add("js-nav-link-active"),l.classList.add("js-nav-item-active"),localStorage.setItem("activePath",c.getAttribute("href"))}),e.addEventListener("click",()=>{s.querySelectorAll(".js-nav-link-active").forEach(l=>{l.classList.remove("js-nav-link-active")}),s.querySelectorAll(".js-nav-item-active").forEach(l=>{l.classList.remove("js-nav-item-active")});const n=s.querySelector('.nav-link[href="./index.html"]'),c=n==null?void 0:n.closest(".nav-item");n&&c&&(n.classList.add("js-nav-link-active"),c.classList.add("js-nav-item-active")),localStorage.setItem("activePath","./index.html")})}oe();document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector(".footer__form");s&&s.addEventListener("submit",async function(e){e.preventDefault();const i=document.querySelector(".footer__input"),t=i.value.trim();if(!/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(t)){m.error({title:"Помилка",message:"Будь ласка, введіть коректну email адресу.",position:"bottomRight"});return}try{const a=await fetch("https://your-energy.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t})}),o=await a.json();a.status===201?m.success({title:"Успіх",message:o.message||"Ви успішно підписались на розсилку!",position:"topRight"}):a.status===400?m.warning({title:"Увага",message:o.message||"Некоректні дані. Перевірте ваш email.",position:"topRight"}):a.status===409?m.warning({title:"Увага",message:o.message||"Цей email вже підписаний.",position:"topRight"}):m.error({title:"Помилка",message:o.message||"Сталася помилка. Спробуйте пізніше.",position:"topRight"})}catch{m.error({title:"Помилка",message:"Не вдалося підключитися до сервера. Спробуйте пізніше.",position:"topRight"})}i.value=""})});O("Muscles",1).then(s=>console.log(`Execute function for pagination with parameter ${JSON.stringify(s)}`)).catch(s=>console.log(s));
//# sourceMappingURL=main-CqNMtRr0.js.map
