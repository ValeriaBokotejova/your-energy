import{a as g}from"./vendor-N5iQpiFS.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}})();const L="https://your-energy.b.goit.study/api",P={mobile:9,tablet:12,desktop:12};g.defaults.baseURL=L;const w=(i,e,s)=>{const t={filter:i,page:e,limit:s};return g.get("/filters",{params:t})},S=i=>g.get(`/exercises/${i}`),q=i=>g.get("/exercises",{params:i});class v{constructor(e,s,t,r,a,n,u,c,o,l,d){this.id=e,this.bodyPart=s,this.equipment=t,this.gifUrl=r,this.name=a,this.target=n,this.description=u,this.rating=c,this.burnedCalories=o,this.time=l,this.popularity=d}setRatingVisible(e){this.ratingVisible=e}setTrashVisible(e){this.trashVisible=e}static async fetchById(e){const t=(await S(e)).data;return new v(t._id,t.bodyPart,t.equipment,t.gifUrl,t.name,t.target,t.description,t.rating,t.burnedCalories,t.time,t.popularity)}render(e=!0,s=!1){const t=document.createElement("div");return t.className="exercise-card",t.innerHTML=`
        <div class="exercise-header">
          <div class="badge">workout</div>
          <div class="rating ${e?"":"hidden"}">
            ${this.formatRating()}
            <svg width="18" height="18">
              <use href="./img/sprite.svg#star-active"></use>
            </svg>
          </div>
          <button class="exercise-card-trash ${s?"":"hidden"}">
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
      `,t}formatRating(){return this.rating.toFixed(1)}}class f{constructor(){this.exercises=[],this.page=0,this.perPage=10,this.totalPages=0}addExercise(e){this.exercises.push(e)}static async fetchWithFilters(e){const t=(await q(e.toParams())).data,r=new f;return r.page=t.page,r.perPage=t.perPage,r.totalPages=t.totalPages,t.results.forEach(a=>{const n=new v(a._id,a.bodyPart,a.equipment,a.gifUrl,a.name,a.target,a.description,a.rating,a.burnedCalories,a.time,a.popularity);r.addExercise(n)}),r}render(e=!0,s=!1){const t=document.createElement("div");return t.className="exercise-list",this.exercises.forEach(r=>{t.appendChild(r.render(e,s))}),t}}const m=Object.freeze({MUSCLES:"muscles",BODY_PART:"bodypart",EQUIPMENT:"equipment"});class C{constructor({bodypart:e,muscles:s,equipment:t,keyword:r,page:a=1,limit:n=10}={}){this.bodypart=e,this.muscles=s,this.equipment=t,this.keyword=r,this.page=a,this.limit=n}addFilter(e,s){switch(e){case m.MUSCLES:this.muscles=s;break;case m.BODY_PART:this.bodypart=s;break;case m.EQUIPMENT:this.equipment=s;break}}toParams(){const e={};return this.bodypart&&(e.bodypart=this.bodypart),this.muscles&&(e.muscles=this.muscles),this.equipment&&(e.equipment=this.equipment),this.keyword&&(e.keyword=this.keyword),e.page=this.page,e.limit=this.limit,e}}const p=document.querySelector(".exercise-container"),k=async i=>{try{const s=(await f.fetchWithFilters(i)).render(!0,!1);p.innerHTML="",p.appendChild(s)}catch(e){console.error(e)}};function j(i,e){const s=new C({page:1,limit:10});s.addFilter(i,e),k(s),p.classList.remove("hidden")}const b=()=>{const i=window.innerWidth;return i<768?"mobile":i<1440?"tablet":"desktop"},A=()=>P[b()],h=document.querySelector(".category-list"),E=document.querySelector(".category-container"),T=i=>i.reduce((e,s)=>e+`<li class="category-card" data-name="${s.name}" data-filter="${s.filter}">
      <img class="gallery-image"
           src="${s.imgURL}"
           alt="${s.name}"/>
            <div class="category-title">
              <h3>${s.name}</h3>
              <p>${s.filter}</p>
            </div>
          </li>`,""),$=async(i,e)=>{try{const s=await w(i,e,A()),{page:t,perPage:r,totalPages:a,results:n}=s.data;return n.length===0?(console.log("There are no categories for the specified filter"),{page:t,perPage:r,totalPages:a}):(h.innerHTML=T(n),h.addEventListener("click",x),E.classList.add("active"),{page:t,perPage:r,totalPages:a})}catch(s){console.log(s)}},I=()=>{h.innerHTML="",h.removeEventListener("click",x),E.classList.remove("active")},x=i=>{if(i.preventDefault(),console.log(b()),i.target===i.currentTarget)return;const e=i.target.closest("li"),s=e.getAttribute("data-filter"),t=e.getAttribute("data-name");I(),j(M(s),t),console.log(`Execute function for rendering exercises (${s}; ${t})`)},M=i=>{const e=i.toLowerCase();return Object.values(m).find(s=>s===e)},y=document.querySelector(".fav-list-card"),O=[1,2,3,4,5,6,7,8],B=O.map(i=>`<li class="list-card-item" data-id="${i}">
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
              </li>`);y&&y.insertAdjacentHTML("beforeend",B.join(""));function N(){const i=document.querySelector(".js-header-nav-list"),e=document.querySelector(".logo"),s=document.querySelector(".menu-btn"),t=document.querySelector(".close-btn-menu"),r=document.querySelector(".mobile-menu-backdrop"),a=document.querySelectorAll(".menu-item");s&&s.addEventListener("click",()=>{r.classList.add("is-open")}),t&&t.addEventListener("click",()=>{r.classList.remove("is-open")}),a&&a.forEach(c=>{c.addEventListener("click",()=>{r.classList.remove("is-open")})});const n=localStorage.getItem("activePath"),u=window.location.pathname;i.querySelectorAll(".nav-link").forEach(c=>{const o=c.closest(".nav-item");c.getAttribute("href")===n||c.getAttribute("href")===u||u==="/"&&c.getAttribute("href")==="./index.html"?(c.classList.add("js-nav-link-active"),o.classList.add("js-nav-item-active")):(c.classList.remove("js-nav-link-active"),o.classList.remove("js-nav-item-active"))}),i.addEventListener("click",c=>{const o=c.target.closest(".nav-link");if(!o)return;const l=o.closest(".nav-item");i.querySelectorAll(".js-nav-link-active").forEach(d=>{d.classList.remove("js-nav-link-active")}),i.querySelectorAll(".js-nav-item-active").forEach(d=>{d.classList.remove("js-nav-item-active")}),o.classList.add("js-nav-link-active"),l.classList.add("js-nav-item-active"),localStorage.setItem("activePath",o.getAttribute("href"))}),e.addEventListener("click",()=>{i.querySelectorAll(".js-nav-link-active").forEach(l=>{l.classList.remove("js-nav-link-active")}),i.querySelectorAll(".js-nav-item-active").forEach(l=>{l.classList.remove("js-nav-item-active")});const c=i.querySelector('.nav-link[href="./index.html"]'),o=c==null?void 0:c.closest(".nav-item");c&&o&&(c.classList.add("js-nav-link-active"),o.classList.add("js-nav-item-active")),localStorage.setItem("activePath","./index.html")})}N();$("Muscles",1).then(i=>console.log(`Execute function for pagination with parameter ${JSON.stringify(i)}`)).catch(i=>console.log(i));
//# sourceMappingURL=main-BUj4EV30.js.map
