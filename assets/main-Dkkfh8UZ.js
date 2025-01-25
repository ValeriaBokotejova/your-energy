import{a as L,i as g}from"./vendor-Cbhu4xvy.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(i){if(i.ep)return;i.ep=!0;const r=s(i);fetch(i.href,r)}})();const Y="https://your-energy.b.goit.study/api",Z={mobile:9,tablet:12,desktop:12},Q={mobile:8,tablet:10,desktop:10};L.defaults.baseURL=Y;const J=(t,e,s)=>{const a={filter:t,page:e,limit:s};return L.get("/filters",{params:a})},X=t=>L.get(`/exercises/${t}`),ee=t=>L.get("/exercises",{params:t}),te=(t,e,s,a)=>{const i={rate:e,email:s,review:a};return L.patch(`/exercises/${t}/rating`,i)},u="/your-energy/assets/sprite-C3g35aWz.svg",se="/your-energy/assets/no-image-B2yyVwMF.jpg";function ae(t,e){const s="#EEA10C",a="#F4F4F4";let r="";for(let n=0;n<5;n++){const d=`starGradient${n}`,o=n+1<=t?100:n<t?t%1*100:0,c=[{offset:"0%",color:s,opacity:"1"},{offset:`${o}%`,color:s,opacity:"1"},{offset:`${o+1}%`,color:a,opacity:"0.20"}],l=`
            <linearGradient id="${d}" x1="0%" y1="0%" x2="100%" y2="0%">
              ${c.map(h=>`<stop offset="${h.offset}" style="stop-color:${h.color};stop-opacity:${h.opacity}" />`).join("")}
            </linearGradient>
          `,m=`url(#${d})`;r+=`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">${l}<path d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z" fill="${m}" fill-opacity="1"/></svg>`}return r}const R=document.querySelector(".loader"),_=()=>{R.classList.remove("hidden")},I=()=>{R.classList.add("hidden")};class E{constructor(e,s,a,i,r,n,d,o,c,l,m){this.id=e,this.bodyPart=s,this.equipment=a,this.gifUrl=i,this.name=r,this.target=n,this.description=d,this.rating=o,this.burnedCalories=c,this.time=l,this.popularity=m}setRatingVisible(e){this.ratingVisible=e}setTrashVisible(e){this.trashVisible=e}static async fetchById(e){try{_();const a=(await X(e)).data;return new E(a._id,a.bodyPart,a.equipment,a.gifUrl,a.name,a.target,a.description,a.rating,a.burnedCalories,a.time,a.popularity)}catch(s){throw console.error("Error fetching exercise:",s),s}finally{I()}}render(e=!0,s=!1){const a=document.createElement("div");return a.className="exercise-card",a.innerHTML=`  
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
      `,a}renderCard(){const e=document.createElement("div");e.className="exercise-modal-card";const a=[{name:"Target",value:this.target},{name:"Body Part",value:this.bodyPart},{name:"Equipment",value:this.equipment},{name:"Popular",value:this.popularity},{name:"Burned Calories",value:this.burnedCalories}].filter(i=>i.value).map(i=>`
        <div class="modal-card-property">
        <span class="modal-card-property-name">${i.name}</span>
          <span class="modal-card-property-value">${i.value}</span>
          
        </div>`).join("");return e.innerHTML=`
      <button type="button" class="modal-card-close-button">
       <svg width="24" height="24">
              <use href="${u}#close"></use>
            </svg>
        </button>
      <div class="modal-card-header">
      
      <div class="image-container">
        <img 
          src="${this.gifUrl}"
          alt="${this.name}"
          onerror="this.src='${se}'"
          loading="lazy" />
      </div>
      <div class="modal-card-data">

      <h3 class="modal-card-title">${this.name}</h3>
      <div class="modal-card-rating">
        <span class="rating-value">${this.formatRating()}</span>
       ${ae(this.rating)}            
      </div>
      <hr class="divider" />
      <div class="modal-card-properties">
        ${a}
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
    `,e}formatRating(){return this.rating.toFixed(1)}getStarRatingHTML(){let e="";const s='<svg width="18" height="18"><use href="${sprite}#star-active"></use></svg>',a='<svg width="18" height="18"><use href="${sprite}#star-inactive"></use></svg>';return e+=s.repeat(this.rating.toFixed(0)),e+=a.repeat(5-this.rating.toFixed(0)),e}}const ie=()=>new URLSearchParams(window.location.search).get("exerciseId");document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".modal-overlay"),e=document.querySelector(".modal-page"),s=document.body;document.addEventListener("click",a=>{if(a.target.closest(".exercise-start-btn")){const i=a.target.closest(".exercise-start-btn").dataset.exerciseid||ie();i&&E.fetchById(i).then(r=>{e.innerHTML="",e.append(r.renderCard()),t.classList.remove("hidden"),e.classList.remove("hidden"),s.classList.add("no-scroll")}).catch(r=>{console.error("Error fetching exercise:",r)})}(a.target.classList.contains("modal-overlay")||a.target.closest(".modal-card-close-button"))&&(t.classList.add("hidden"),e.classList.add("hidden"),e.innerHTML="",s.classList.remove("no-scroll"))})});document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".modal-page");document.addEventListener("click",e=>{if(!e.target.matches(".rating-button"))return;const s=e.target.dataset.exerciseid,a=document.querySelector(".exercise-modal-card"),i=ne();re(a),t.append(i);const r=i.querySelectorAll(".rating-modal__stars span"),n=i.querySelector(".rating-modal__value"),d=i.querySelector(".rating-modal__hidden-rating"),o=i.querySelector(".rating-modal__form");let c=0;r.forEach(l=>{l.addEventListener("mouseenter",()=>q(r,parseInt(l.dataset.value,10))),l.addEventListener("mouseleave",()=>q(r,c)),l.addEventListener("click",()=>{c=parseInt(l.dataset.value,10),d.value=c,n.textContent=c.toFixed(1),q(r,c)})}),o.addEventListener("submit",async l=>{var k,M;l.preventDefault();const m=parseInt(d.value),h=o.querySelector(".rating-modal__email").value.trim(),T=o.querySelector(".rating-modal__comment").value.trim();if(!m||!h||!T){g.error({title:"Помилка",message:"Всі поля повинні бути заповнені"});return}try{await te(s,m,h,T),g.success({title:"Успіх",message:"Ви упсішно відправили рейтинг"}),i.remove(),a.style.display="block"}catch(K){g.error({title:"Помилка",message:((M=(k=K.response)==null?void 0:k.data)==null?void 0:M.message)||"Щось пішло не так"})}})})});function re(t,e){t.style.display="none"}function q(t,e){t.forEach(s=>{const a=parseInt(s.dataset.value,10);s.querySelector("svg use").setAttribute("href",`${u}#${a<=e?"star-active":"star-inactive"}`)})}function ne(){const t=document.createElement("div");return t.className="rating-modal-card",t.innerHTML=`
      <button type="button" class="modal-card-close-button">
        <svg width="24" height="24">
          <use href="${u}#close"></use>
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
                      <use href="${u}#star-inactive"></use>
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
    `,t}const A={0:u+"#two-angle-left",1:u+"#one-angle-left",6:u+"#one-angle-right",7:u+"#two-angle-right"},oe=(t,e)=>{const s=[];if(t<4)for(let a=0;a<4;a++)s.push(1+a);if(e-t<3&&s.length===0)for(let a=0;a<4;a++)s.unshift(e-a);if(s.length===0)for(let a=-1;a<3;a++)s.push(t+a);s[3]<e&&(s[3]=0),s[3]===e&&s[0]!=1&&(s[0]=0);for(let a=0;a<4;a++)s[a]>e&&(s[a]=-1);return s.unshift(t>1?t-1:-1),s.unshift(t>1?1:-1),s.push(t<e?t+1:-1),s.push(t<e?e:-1),s},ce=(t,e)=>{const s=oe(t,e),a=new Set([0,1]),i=new Set([6,7]),r=a.union(i);return s.map((n,d)=>[d,n,r.has(d)?"":n===0?"...":n>0?n:"",n===t||a.has(d)&&t!=1||i.has(d)&&t!=e,r.has(d)||n===t])},le=t=>A.hasOwnProperty(t)?`<svg width="20" height="20"><use href="${A[t]}"></use></svg>`:"",de=(t,e,s,a,i)=>`<li class="pagination-item${a?" accent":""}${i?" outline":""}${e===-1&&!i?" hidden-btn":""}" data-page="${e}">${s}${le(t)}</li>`,ue=(t,e)=>ce(t,e).reduce((a,i)=>a+de(...i),""),me=(t,e)=>`<ul class="pagination">${ue(t,e)}</ul>`,ge=(t,...e)=>s=>{s.preventDefault();const a=s.currentTarget;if(s.target===s.currentTarget)return;const i=Number(s.target.closest("li").getAttribute("data-page"));if(i==-1)return;a.remove();let r=Array.from(...e);r.splice(-1,1,i),t.apply(null,r)},F=(t,e,s,a,...i)=>{const r=document.querySelector(t);r.innerHTML=me(e,s),r.firstChild.addEventListener("click",ge(a,i))},N=t=>{const e=document.querySelector(t);e.firstChild&&e.firstChild.remove()},B=()=>{const t=window.innerWidth;return t<768?"mobile":t<1440?"tablet":"desktop"},he=()=>Z[B()],pe=()=>Q[B()];class S{constructor(){this.exercises=[],this.page=0,this.perPage=10,this.totalPages=0}addExercise(e){this.exercises.push(e)}static async fetchWithFilters(e){const a=(await ee(e.toParams())).data,i=new S;return i.page=a.page,i.perPage=a.perPage,i.totalPages=a.totalPages,a.results.forEach(r=>{const n=new E(r._id,r.bodyPart,r.equipment,r.gifUrl,r.name,r.target,r.description,r.rating,r.burnedCalories,r.time,r.popularity);i.addExercise(n)}),i}render(e=!0,s=!1){const a=document.createElement("div");return a.className="exercise-list",this.exercises.forEach(i=>{a.appendChild(i.render(e,s))}),a}}const f=Object.freeze({MUSCLES:"muscles",BODY_PART:"bodypart",EQUIPMENT:"equipment"});class ve{constructor({bodypart:e,muscles:s,equipment:a,keyword:i,page:r=1,limit:n=10}={}){this.bodypart=e,this.muscles=s,this.equipment=a,this.keyword=i,this.page=r,this.limit=n}addFilter(e,s){switch(e){case f.MUSCLES:this.muscles=s;break;case f.BODY_PART:this.bodypart=s;break;case f.EQUIPMENT:this.equipment=s;break}}addKeyword(e){this.keyword=e}toParams(){const e={};return this.bodypart&&(e.bodypart=this.bodypart),this.muscles&&(e.muscles=this.muscles),this.equipment&&(e.equipment=this.equipment),this.keyword&&(e.keyword=this.keyword),e.page=this.page,e.limit=this.limit,e}}const p=document.querySelector(".exercise-container");let v=new S;const H=async(t,e=1)=>{try{_(),t.page=e,v=await S.fetchWithFilters(t);const s=v.render(!0,!1);p.innerHTML="",p.appendChild(s),F(".pagination-container",v.page,v.totalPages,H,t,v.page)}catch(s){console.error(s)}finally{I()}};function U(t,e,s=null){const a=new ve({page:1,limit:pe()});s&&a.addKeyword(s),a.addFilter(t,e),H(a),p.classList.add("active")}function fe(){p.innerHTML="",p.classList.contains("active")&&p.classList.remove("active"),N(".pagination-container")}const y=document.querySelector(".category-list"),G=document.querySelector(".category-container"),ye=t=>t.reduce((e,s)=>e+`<li class="category-card" data-name="${s.name}" data-filter="${s.filter}">
      <img class="gallery-image"
           src="${s.imgURL}"
           alt="${s.name}"
           loading="lazy"/>
            <div class="category-title">
              <h3>${s.name}</h3>
              <p>${s.filter}</p>
            </div>
          </li>`,""),P=async(t,e)=>{try{_();const s=await J(t,e,he()),{page:a,totalPages:i,results:r}=s.data;r.length===0&&(y.innerHTML=""),y.innerHTML=ye(r),y.addEventListener("click",z),G.classList.add("active"),F(".pagination-container",e,i,P,t,a),fe()}catch(s){console.log(s)}finally{I()}},be=()=>{y.innerHTML="",N(".pagination-container"),y.removeEventListener("click",z),G.classList.remove("active")},z=t=>{if(t.preventDefault(),t.target===t.currentTarget)return;const e=t.target.closest("li"),s=e.getAttribute("data-filter"),a=e.getAttribute("data-name");be(),U(Le(s),a),qe(s,a)},Le=t=>{const e=t.toLowerCase();return Object.values(f).find(s=>s===e)};P("Muscles",1);const j=document.querySelectorAll(".filter-tab-button"),V=document.querySelector(".filter-form-container"),O=document.querySelector(".search-button"),C=document.querySelector(".cansel-search-button"),b=document.querySelector(".search-string"),W=document.querySelector(".additional-title-filter"),D=document.querySelector(".slash-in-filter");var w="",$="",x="";const Ee={"button-muscles":"Muscles","button-bodypart":"Body parts","button-equipment":"Equipment"};b&&b.addEventListener("input",function(){C.style.display=this.value.length>0?"block":"none"});C&&C.addEventListener("click",function(){b.value="",this.style.display="none"});j.forEach(t=>{t.addEventListener("click",e=>{if(e.preventDefault(),$e(),e.target&&e.target.matches("button.filter-tab-button")){j.forEach(i=>{i.classList.remove("active")}),t.classList.add("active");const s=e.target.id,a=Ee[s];P(a,1)}})});O&&O.addEventListener("click",t=>{t.preventDefault(),x=b.value,U(Se(w),$,x)});function Se(t){var e=t.toLowerCase();return e==="body parts"&&(e="bodypart"),Object.values(f).find(s=>s===e)}function we(t){D.style.display="inline",W.textContent=t}function $e(){D.style.display="none",V.style.display="none",W.textContent="",xe()}function qe(t,e){Ce(t,e),we(e),V.style.display="block",console.log(`filterName: ${w}  categoryName: ${$}`)}function Ce(t,e){w=t,$=e}function xe(){w="",$="",b.value="",x=""}document.querySelector(".fav-list-card");document.querySelector(".fav-text-default");function _e(){const t=document.querySelector(".js-header-nav-list"),e=document.querySelector(".logo"),s=document.querySelector(".menu-btn"),a=document.querySelector(".close-btn-menu"),i=document.querySelector(".mobile-menu-backdrop"),r=document.querySelectorAll(".menu-item");s&&s.addEventListener("click",()=>{i.classList.add("is-open")}),a&&a.addEventListener("click",()=>{i.classList.remove("is-open")}),r&&r.forEach(o=>{o.addEventListener("click",()=>{i.classList.remove("is-open")})});const n=localStorage.getItem("activePath"),d=window.location.pathname;t.querySelectorAll(".nav-link").forEach(o=>{const c=o.closest(".nav-item");o.getAttribute("href")===n||o.getAttribute("href")===d||d==="/"&&o.getAttribute("href")==="./index.html"?(o.classList.add("js-nav-link-active"),c.classList.add("js-nav-item-active")):(o.classList.remove("js-nav-link-active"),c.classList.remove("js-nav-item-active"))}),t.addEventListener("click",o=>{const c=o.target.closest(".nav-link");if(!c)return;const l=c.closest(".nav-item");t.querySelectorAll(".js-nav-link-active").forEach(m=>{m.classList.remove("js-nav-link-active")}),t.querySelectorAll(".js-nav-item-active").forEach(m=>{m.classList.remove("js-nav-item-active")}),c.classList.add("js-nav-link-active"),l.classList.add("js-nav-item-active"),localStorage.setItem("activePath",c.getAttribute("href"))}),e.addEventListener("click",()=>{t.querySelectorAll(".js-nav-link-active").forEach(l=>{l.classList.remove("js-nav-link-active")}),t.querySelectorAll(".js-nav-item-active").forEach(l=>{l.classList.remove("js-nav-item-active")});const o=t.querySelector('.nav-link[href="./index.html"]'),c=o==null?void 0:o.closest(".nav-item");o&&c&&(o.classList.add("js-nav-link-active"),c.classList.add("js-nav-item-active")),localStorage.setItem("activePath","./index.html")})}_e();document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".footer__form");t&&t.addEventListener("submit",async function(e){e.preventDefault();const s=document.querySelector(".footer__input"),a=s.value.trim();if(!/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(a)){g.error({title:"Помилка",message:"Будь ласка, введіть коректну email адресу.",position:"bottomRight"});return}try{const r=await fetch("https://your-energy.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a})}),n=await r.json();r.status===201?g.success({title:"Успіх",message:n.message||"Ви успішно підписались на розсилку!",position:"topRight"}):r.status===400?g.warning({title:"Увага",message:n.message||"Некоректні дані. Перевірте ваш email.",position:"topRight"}):r.status===409?g.warning({title:"Увага",message:n.message||"Цей email вже підписаний.",position:"topRight"}):g.error({title:"Помилка",message:n.message||"Сталася помилка. Спробуйте пізніше.",position:"topRight"})}catch{g.error({title:"Помилка",message:"Не вдалося підключитися до сервера. Спробуйте пізніше.",position:"topRight"})}s.value=""})});
//# sourceMappingURL=main-Dkkfh8UZ.js.map
