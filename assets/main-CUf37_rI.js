import{a as u}from"./vendor-N5iQpiFS.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const t of a)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(a){const t={};return a.integrity&&(t.integrity=a.integrity),a.referrerPolicy&&(t.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?t.credentials="include":a.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(a){if(a.ep)return;a.ep=!0;const t=r(a);fetch(a.href,t)}})();const L="https://your-energy.b.goit.study/api",P={mobile:9,tablet:12,desktop:12};u.defaults.baseURL=L;const w=(i,e,r)=>{const s={filter:i,page:e,limit:r};return u.get("/filters",{params:s})},S=i=>u.get(`/exercises/${i}`),q=i=>u.get("/exercises",{params:i});class m{constructor(e,r,s,a,t,c,n,o,b,x,E){this.id=e,this.bodyPart=r,this.equipment=s,this.gifUrl=a,this.name=t,this.target=c,this.description=n,this.rating=o,this.burnedCalories=b,this.time=x,this.popularity=E}setRatingVisible(e){this.ratingVisible=e}setTrashVisible(e){this.trashVisible=e}static async fetchById(e){const s=(await S(e)).data;return new m(s._id,s.bodyPart,s.equipment,s.gifUrl,s.name,s.target,s.description,s.rating,s.burnedCalories,s.time,s.popularity)}render(e=!0,r=!1){const s=document.createElement("div");return s.className="exercise-card",s.innerHTML=`
        <div class="exercise-header">
          <div class="badge">workout</div>
          <div class="rating ${e?"":"hidden"}">
            ${this.formatRating()}
            <svg width="18" height="18">
              <use href="./img/sprite.svg#star-active"></use>
            </svg>
          </div>
          <button class="exercise-card-trash ${r?"":"hidden"}">
            <svg width="16" height="16">
              <use href="./img/sprite.svg#trash"></use>
            </svg>
          </button>
          <button class="exercise-start-btn">
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
      `,s}formatRating(){return this.rating.toFixed(1)}}class g{constructor(){this.exercises=[],this.page=0,this.perPage=10,this.totalPages=0}addExercise(e){this.exercises.push(e)}static async fetchWithFilters(e){const s=(await q(e.toParams())).data,a=new g;return a.page=s.page,a.perPage=s.perPage,a.totalPages=s.totalPages,s.results.forEach(t=>{const c=new m(t._id,t.bodyPart,t.equipment,t.gifUrl,t.name,t.target,t.description,t.rating,t.burnedCalories,t.time,t.popularity);a.addExercise(c)}),a}render(e=!0,r=!1){const s=document.createElement("div");return s.className="exercise-list",this.exercises.forEach(a=>{s.appendChild(a.render(e,r))}),s}}const l=Object.freeze({MUSCLES:"muscles",BODY_PART:"bodypart",EQUIPMENT:"equipment"});class C{constructor({bodypart:e,muscles:r,equipment:s,keyword:a,page:t=1,limit:c=10}={}){this.bodypart=e,this.muscles=r,this.equipment=s,this.keyword=a,this.page=t,this.limit=c}addFilter(e,r){switch(e){case l.MUSCLES:this.muscles=r;break;case l.BODY_PART:this.bodypart=r;break;case l.EQUIPMENT:this.equipment=r;break}}toParams(){const e={};return this.bodypart&&(e.bodypart=this.bodypart),this.muscles&&(e.muscles=this.muscles),this.equipment&&(e.equipment=this.equipment),this.keyword&&(e.keyword=this.keyword),e.page=this.page,e.limit=this.limit,e}}const h=document.querySelector(".exercise-container"),j=async i=>{try{const r=(await g.fetchWithFilters(i)).render(!0,!1);h.innerHTML="",h.appendChild(r)}catch(e){console.error(e)}};function k(i,e){const r=new C({page:1,limit:10});r.addFilter(i,e),j(r),h.classList.remove("hidden")}const v=()=>{const i=window.innerWidth;return i<768?"mobile":i<1440?"tablet":"desktop"},A=()=>P[v()],d=document.querySelector(".category-list"),f=document.querySelector(".category-container"),T=i=>i.reduce((e,r)=>e+`<li class="category-card" data-name="${r.name}" data-filter="${r.filter}">
      <img class="gallery-image"
           src="${r.imgURL}"
           alt="${r.name}"/>
            <div class="category-title">
              <h3>${r.name}</h3>
              <p>${r.filter}</p>
            </div>
          </li>`,""),$=async(i,e)=>{try{const r=await w(i,e,A()),{page:s,perPage:a,totalPages:t,results:c}=r.data;return c.length===0?(console.log("There are no categories for the specified filter"),{page:s,perPage:a,totalPages:t}):(d.innerHTML=T(c),d.addEventListener("click",y),f.classList.add("active"),{page:s,perPage:a,totalPages:t})}catch(r){console.log(r)}},I=()=>{d.innerHTML="",d.removeEventListener("click",y),f.classList.remove("active")},y=i=>{if(i.preventDefault(),console.log(v()),i.target===i.currentTarget)return;const e=i.target.closest("li"),r=e.getAttribute("data-filter"),s=e.getAttribute("data-name");I(),k(O(r),s),console.log(`Execute function for rendering exercises (${r}; ${s})`)},O=i=>{const e=i.toLowerCase();return Object.values(l).find(r=>r===e)},p=document.querySelector(".fav-list-card"),M=[1,2,3,4,5,6,7,8],B=M.map(i=>`<li class="list-card-item" data-id="${i}">
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
              </li>`);p&&p.insertAdjacentHTML("beforeend",B.join(""));function N(){const i=document.querySelector(".js-header-nav-list"),e=document.querySelector(".logo");document.querySelector(".menu-btn").addEventListener("click",()=>{alert("Mobile menu will be added soon, enjoy ;)")});const s=localStorage.getItem("activePath"),a=window.location.pathname;i.querySelectorAll(".nav-link").forEach(t=>{const c=t.closest(".nav-item");t.getAttribute("href")===s||t.getAttribute("href")===a||a==="/"&&t.getAttribute("href")==="./index.html"?(t.classList.add("js-nav-link-active"),c.classList.add("js-nav-item-active")):(t.classList.remove("js-nav-link-active"),c.classList.remove("js-nav-item-active"))}),i.addEventListener("click",t=>{const c=t.target.closest(".nav-link");if(!c)return;const n=c.closest(".nav-item");i.querySelectorAll(".js-nav-link-active").forEach(o=>{o.classList.remove("js-nav-link-active")}),i.querySelectorAll(".js-nav-item-active").forEach(o=>{o.classList.remove("js-nav-item-active")}),c.classList.add("js-nav-link-active"),n.classList.add("js-nav-item-active"),localStorage.setItem("activePath",c.getAttribute("href"))}),e.addEventListener("click",()=>{i.querySelectorAll(".js-nav-link-active").forEach(n=>{n.classList.remove("js-nav-link-active")}),i.querySelectorAll(".js-nav-item-active").forEach(n=>{n.classList.remove("js-nav-item-active")});const t=i.querySelector('.nav-link[href="./index.html"]'),c=t==null?void 0:t.closest(".nav-item");t&&c&&(t.classList.add("js-nav-link-active"),c.classList.add("js-nav-item-active")),localStorage.setItem("activePath","./index.html")})}N();$("Muscles",1).then(i=>console.log(`Execute function for pagination with parameter ${JSON.stringify(i)}`)).catch(i=>console.log(i));
//# sourceMappingURL=main-CUf37_rI.js.map
