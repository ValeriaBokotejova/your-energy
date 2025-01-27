import{a as v,i as g}from"./vendor-Cbhu4xvy.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}})();const te="https://your-energy.b.goit.study/api",fe={mobile:9,tablet:12,desktop:12},ve={mobile:8,tablet:10,desktop:10};v.defaults.baseURL=te;const ye=(t,e,s)=>{const i={filter:t,page:e,limit:s};return v.get("/filters",{params:i})},be=t=>v.get(`/exercises/${t}`),Le=t=>v.get("/exercises",{params:t}),we=(t,e,s,i)=>{const r={rate:e,email:s,review:i};return v.patch(`/exercises/${t}/rating`,r)},u="/your-energy/assets/sprite-D8xu5p1j.svg",Se="/your-energy/assets/no-image-B2yyVwMF.jpg";function Ee(t,e){const s="#EEA10C",i="#F4F4F4";let a="";for(let n=0;n<5;n++){const m=`starGradient${n}`,l=n+1<=t?100:n<t?t%1*100:0,o=[{offset:"0%",color:s,opacity:"1"},{offset:`${l}%`,color:s,opacity:"1"},{offset:`${l+1}%`,color:i,opacity:"0.20"}],c=`
            <linearGradient id="${m}" x1="0%" y1="0%" x2="100%" y2="0%">
              ${o.map(y=>`<stop offset="${y.offset}" style="stop-color:${y.color};stop-opacity:${y.opacity}" />`).join("")}
            </linearGradient>
          `,d=`url(#${m})`;a+=`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">${c}<path d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z" fill="${d}" fill-opacity="1"/></svg>`}return a}const j=document.querySelector(".loader"),k=document.querySelector(".loader-container"),A=document.querySelector(".exercise-loader-container");function F(){if(window.innerWidth>=1440){A.style.minHeight="500px",A.style.width="900px";const t=A.getBoundingClientRect(),e=k.getBoundingClientRect(),s=Math.max(t.left,Math.min(t.right-e.width,(window.innerWidth-e.width)/2)),i=Math.max(t.top,Math.min(t.bottom-e.height,(window.innerHeight-e.height)/2));k.style.left=`${s-t.left}px`,k.style.top=`${i-t.top}px`}}window.addEventListener("scroll",F);window.addEventListener("resize",F);const se=()=>{j.classList.remove("hidden"),F()},ie=()=>{j.classList.remove("hidden")},L=()=>{j.classList.add("hidden")},w="favorite-exercises";function xe(t){try{const e=JSON.parse(localStorage.getItem(w)||"[]");return e.includes(t)?!1:(e.push(t),localStorage.setItem(w,JSON.stringify(e)),!0)}catch(e){return console.error("Error adding ID to localStorage:",e),!1}}function ae(t){try{const e=JSON.parse(localStorage.getItem(w)||"[]"),s=e.indexOf(t);return s!==-1?(e.splice(s,1),localStorage.setItem(w,JSON.stringify(e)),!0):!1}catch(e){return console.error("Error removing ID from localStorage:",e),!1}}function re(t){try{return JSON.parse(localStorage.getItem(w)||"[]").includes(t)}catch(e){return console.error("Error checking ID in localStorage:",e),!1}}function $e(){return JSON.parse(localStorage.getItem(w)||"[]")}class _{constructor(e,s,i,r,a,n,m,l,o,c,d){this.id=e,this.bodyPart=s,this.equipment=i,this.gifUrl=r,this.name=a,this.target=n,this.description=m,this.rating=l,this.burnedCalories=o,this.time=c,this.popularity=d}setRatingVisible(e){this.ratingVisible=e}setTrashVisible(e){this.trashVisible=e}static async fetchById(e){try{ie();const i=(await be(e)).data;return new _(i._id,i.bodyPart,i.equipment,i.gifUrl,i.name,i.target,i.description,i.rating,i.burnedCalories,i.time,i.popularity)}catch(s){throw console.error("Error fetching exercise:",s),s}finally{L()}}render(e=!0,s=!1){const i=document.createElement("div");return i.className="exercise-card",i.innerHTML=`  
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
      `,i}renderCard(){const e=document.createElement("div");e.className="exercise-modal-card";const i=[{name:"Target",value:this.target},{name:"Body Part",value:this.bodyPart},{name:"Equipment",value:this.equipment},{name:"Popular",value:this.popularity},{name:"Burned Calories",value:this.burnedCalories}].filter(a=>a.value).map(a=>`
        <div class="modal-card-property">
        <span class="modal-card-property-name">${a.name}</span>
          <span class="modal-card-property-value">${a.value}</span>
          
        </div>`).join("");var r=re(this.id);return e.innerHTML=`
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
          onerror="this.src='${Se}'"
          loading="lazy" />
      </div>
      <div class="modal-card-data">

      <h3 class="modal-card-title">${this.name}</h3>
      <div class="modal-card-rating">
        <span class="rating-value">${this.formatRating()}</span>
       ${Ee(this.rating)}            
      </div>
      <hr class="divider" />
      <div class="modal-card-properties">
        ${i}
      </div>
      <hr class="divider" />
      <p class="modal-card-description">${this.description}</p>
      <div class="modal-card-buttons">
        <button type="button" data-exerciseid="${this.id}" class="modal-card-button favorite-button">
        <span>${r?"Remove favorite":"Add to favorites"}</span>
        <svg width="18" height="18">
            <use href="${u}#heart" fill="${r?"black":"none"}"></use>
          </svg>
        </button>
        <button type="button" data-exerciseid="${this.id}"class="modal-card-button rating-button">Give a rating</button>
      </div>
      </div>
      </div>
    `,e}formatRating(){return this.rating.toFixed(1)}getStarRatingHTML(){let e="";const s='<svg width="18" height="18"><use href="${sprite}#star-active"></use></svg>',i='<svg width="18" height="18"><use href="${sprite}#star-inactive"></use></svg>';return e+=s.repeat(this.rating.toFixed(0)),e+=i.repeat(5-this.rating.toFixed(0)),e}}const qe=()=>new URLSearchParams(window.location.search).get("exerciseId");document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".modal-overlay"),e=document.querySelector(".modal-page"),s=document.body;document.addEventListener("click",i=>{if(i.target.closest(".exercise-start-btn")){const r=i.target.closest(".exercise-start-btn").dataset.exerciseid||qe();r&&_.fetchById(r).then(a=>{e.innerHTML="",e.append(a.renderCard()),t.classList.remove("hidden"),e.classList.remove("hidden"),s.classList.add("no-scroll")}).catch(a=>{console.error("Error fetching exercise:",a)})}(i.target.classList.contains("modal-overlay")||i.target.closest(".modal-card-close-button"))&&(t.classList.add("hidden"),e.classList.add("hidden"),e.innerHTML="",s.classList.remove("no-scroll"))})});document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".modal-page");document.addEventListener("click",e=>{const s=t.querySelector(".favorite-button");if(s&&(e.target===s||s.contains(e.target))){const d=s.getAttribute("data-exerciseid");d&&(re(d)?(ae(d),s.querySelector("span").textContent="Add to favorites",s.querySelector("use").setAttribute("fill","none")):(xe(d),s.querySelector("span").textContent="Remove favorite",s.querySelector("use").setAttribute("fill","black")))}if(!e.target.matches(".rating-button"))return;const i=e.target.dataset.exerciseid,r=document.querySelector(".exercise-modal-card"),a=Ie();Ce(r),t.append(a);const n=a.querySelectorAll(".rating-modal__stars span"),m=a.querySelector(".rating-modal__value"),l=a.querySelector(".rating-modal__hidden-rating"),o=a.querySelector(".rating-modal__form");let c=0;n.forEach(d=>{d.addEventListener("mouseenter",()=>O(n,parseInt(d.dataset.value,10))),d.addEventListener("mouseleave",()=>O(n,c)),d.addEventListener("click",()=>{c=parseInt(d.dataset.value,10),l.value=c,m.textContent=c.toFixed(1),O(n,c)})}),o.addEventListener("submit",async d=>{var z,W;d.preventDefault();const y=parseInt(l.value),J=o.querySelector(".rating-modal__email").value.trim(),V=o.querySelector(".rating-modal__comment").value.trim();if(!y||!J||!V){g.error({title:"Помилка",message:"Всі поля повинні бути заповнені"});return}try{await we(i,y,J,V),g.success({title:"Успіх",message:"Ви упсішно відправили рейтинг"}),a.remove(),r.style.display="block"}catch(pe){g.error({title:"Помилка",message:((W=(z=pe.response)==null?void 0:z.data)==null?void 0:W.message)||"Щось пішло не так"})}})})});function Ce(t,e){t.style.display="none"}function O(t,e){t.forEach(s=>{const i=parseInt(s.dataset.value,10);s.querySelector("svg use").setAttribute("href",`${u}#${i<=e?"star-active":"star-inactive"}`)})}function Ie(){const t=document.createElement("div");return t.className="rating-modal-card",t.innerHTML=`
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
    `,t}async function _e(){const t=JSON.parse(localStorage.getItem("quoteDay")),e=new Date().toISOString().split("T")[0];if((t==null?void 0:t.currentDate)===e){K(t.data);return}try{const{data:s}=await v.get(`${te}/quote`),i={data:s,currentDate:e};localStorage.setItem("quoteDay",JSON.stringify(i)),K(s)}catch(s){console.error("Error fetching the quote:",s)}}function K({quote:t,author:e}){document.querySelector(".js-quote").innerHTML=`
    <p class="quote-text">"${t}"</p>
    <p class="quote-signature">- ${e}</p>
  `}document.addEventListener("DOMContentLoaded",_e);const Y={0:u+"#two-angle-left",1:u+"#one-angle-left",6:u+"#one-angle-right",7:u+"#two-angle-right"},Me=(t,e)=>{const s=[];if(t<4)for(let i=0;i<4;i++)s.push(1+i);if(e-t<3&&s.length===0)for(let i=0;i<4;i++)s.unshift(e-i);if(s.length===0)for(let i=-1;i<3;i++)s.push(t+i);s[3]<e&&(s[3]=0),s[3]===e&&s[0]!=1&&(s[0]=0);for(let i=0;i<4;i++)s[i]>e&&(s[i]=-1);return s.unshift(t>1?t-1:-1),s.unshift(t>1?1:-1),s.push(t<e?t+1:-1),s.push(t<e?e:-1),s},Te=(t,e)=>{const s=Me(t,e),i=new Set([0,1]),r=new Set([6,7]),a=i.union(r);return s.map((n,m)=>[m,n,a.has(m)?"":n===0?"...":n>0?n:"",n===t||i.has(m)&&t!=1||r.has(m)&&t!=e,a.has(m)||n===t])},Pe=t=>Y.hasOwnProperty(t)?`<svg width="20" height="20"><use href="${Y[t]}"></use></svg>`:"",ke=(t,e,s,i,r)=>`<li class="pagination-item${i?" accent":""}${r?" outline":""}${e===-1&&!r?" hidden-btn":""}" data-page="${e}">${s}${Pe(t)}</li>`,Ae=(t,e)=>e<2?"":Te(t,e).reduce((i,r)=>i+ke(...r),""),Oe=(t,e)=>`<ul class="pagination">${Ae(t,e)}</ul>`,Re=(t,...e)=>s=>{s.preventDefault();const i=s.currentTarget;if(s.target===s.currentTarget)return;const r=Number(s.target.closest("li").getAttribute("data-page"));if(r<1)return;i.remove();let a=Array.from(...e);a.splice(-1,1,r),t.apply(null,a)},H=(t,e,s,i,...r)=>{const a=document.querySelector(t);a.innerHTML=Oe(e,s),a.firstChild.addEventListener("click",Re(i,r))},ne=t=>{const e=document.querySelector(t);e.firstChild&&e.firstChild.remove()},oe=()=>{const t=window.innerWidth;return t<768?"mobile":t<1440?"tablet":"desktop"},Ne=()=>fe[oe()],ce=()=>ve[oe()];class M{constructor(){this.exercises=[],this.page=0,this.perPage=10,this.totalPages=0}addExercise(e){this.exercises.push(e)}static async fetchWithFilters(e){const i=(await Le(e.toParams())).data,r=new M;return r.page=i.page,r.perPage=i.perPage,r.totalPages=i.totalPages,i.results.forEach(a=>{const n=new _(a._id,a.bodyPart,a.equipment,a.gifUrl,a.name,a.target,a.description,a.rating,a.burnedCalories,a.time,a.popularity);r.addExercise(n)}),r}render(e=!0,s=!1){const i=document.createElement("div");return i.className="exercise-list",this.exercises.forEach(r=>{i.appendChild(r.render(e,s))}),i}}const E=Object.freeze({MUSCLES:"muscles",BODY_PART:"bodypart",EQUIPMENT:"equipment"});class Be{constructor({bodypart:e,muscles:s,equipment:i,keyword:r,page:a=1,limit:n=10}={}){this.bodypart=e,this.muscles=s,this.equipment=i,this.keyword=r,this.page=a,this.limit=n}addFilter(e,s){switch(e){case E.MUSCLES:this.muscles=s;break;case E.BODY_PART:this.bodypart=s;break;case E.EQUIPMENT:this.equipment=s;break}}addKeyword(e){this.keyword=e}toParams(){const e={};return this.bodypart&&(e.bodypart=this.bodypart),this.muscles&&(e.muscles=this.muscles),this.equipment&&(e.equipment=this.equipment),this.keyword&&(e.keyword=this.keyword),e.page=this.page,e.limit=this.limit,e}}const f=document.querySelector(".exercise-container");let S=new M;const le=async(t,e=1)=>{try{se(),t.page=e,S=await M.fetchWithFilters(t);const s=S.render(!0,!1);f.innerHTML="",f.appendChild(s),H(".pagination-container",S.page,S.totalPages,le,t,S.page),e!=1&&f.scrollIntoView({behavior:"smooth"})}catch(s){console.error(s)}finally{L()}};function D(t,e,s=null){const i=new Be({page:1,limit:ce()});s&&i.addKeyword(s),i.addFilter(t,e),le(i),f.classList.add("active")}function je(){f.innerHTML="",f.classList.contains("active")&&f.classList.remove("active"),ne(".pagination-container")}const x=document.querySelector(".category-list"),I=document.querySelector(".category-container"),Fe=t=>t.reduce((e,s)=>e+`<li class="category-card" data-name="${s.name}" data-filter="${s.filter}">
      <img class="gallery-image"
           src="${s.imgURL}"
           alt="${s.name}"
           loading="lazy"
           width="335"
           height="225"
           />
            <div class="category-title">
              <h3>${s.name}</h3>
              <p>${s.filter}</p>
            </div>
          </li>`,""),U=async(t,e)=>{try{se();const s=await ye(t,e,Ne()),{page:i,totalPages:r,results:a}=s.data;a.length===0&&(x.innerHTML=""),x.innerHTML=Fe(a),x.addEventListener("click",de),I.classList.add("active"),je(),H(".pagination-container",e,r,U,t,i),e!=1&&I.scrollIntoView({behavior:"smooth"})}catch(s){console.log(s)}finally{L()}},He=()=>{x.innerHTML="",ne(".pagination-container"),x.removeEventListener("click",de),I.classList.remove("active")},de=t=>{if(t.preventDefault(),t.target===t.currentTarget)return;const e=t.target.closest("li"),s=e.getAttribute("data-filter"),i=e.getAttribute("data-name");He(),D(De(s),i),Ve(s,i)},De=t=>{var e=t.toLowerCase();return e==="body parts"&&(e="bodypart"),Object.values(E).find(s=>s===e)};I&&U("Muscles",1);const Q=document.querySelectorAll(".filter-tab-button"),ue=document.querySelector(".filter-form-container"),Z=document.querySelector(".search-button"),R=document.querySelector(".cansel-search-button"),$=document.querySelector(".search-string"),me=document.querySelector(".additional-title-filter"),ge=document.querySelector(".slash-in-filter");var T="",P="",N="";const Ue={"button-muscles":"Muscles","button-bodypart":"Body parts","button-equipment":"Equipment"};$&&$.addEventListener("input",function(){R.style.display=this.value.length>0?"block":"none"});R&&R.addEventListener("click",function(){$.value="",this.style.display="none",D(he(T),P)});Q.forEach(t=>{t.addEventListener("click",e=>{if(e.preventDefault(),Je(),e.target&&e.target.matches("button.filter-tab-button")){Q.forEach(r=>{r.classList.remove("active")}),t.classList.add("active");const s=e.target.id,i=Ue[s];U(i,1)}})});Z&&Z.addEventListener("click",t=>{t.preventDefault(),N=$.value,D(he(T),P,N)});function he(t){var e=t.toLowerCase();return e==="body parts"&&(e="bodypart"),Object.values(E).find(s=>s===e)}function Ge(t){ge.style.display="inline",me.textContent=t}function Je(){ge.style.display="none",ue.style.display="none",me.textContent="",We()}function Ve(t,e){ze(t,e),Ge(e),ue.style.display="block"}function ze(t,e){T=t,P=e}function We(){T="",P="",$.value="",N=""}const X=async t=>await v.get(`https://your-energy.b.goit.study/api/exercises/${t}`),ee=t=>t.map(e=>`<li class="list-card-item" data-id="${e._id}">
        <div class="list-card-wrapper">
          <div class="box-buttons">
            <div class="trash-box">
              <div class="card-name-box">
                <p class="list-card-name">Workout</p>
              </div>
              <button class="btn-trash" type="button">
              <svg class="icon-trash" width="16px" height="16px">
                <use href="${u}#trash"></use>
              </svg>
              </button>
            </div>
            <button class="btn-start" type="button">
              Start
              <svg width="16px" height="16px">
                <use href="${u}#arrow"></use>
              </svg>
            </button>
          </div>
          <div class="icon-run-box">
          <div class="icon-run-wrapper">
          <svg class="icon-run" width="14px" height="16px">
              <use href="${u}#group"></use>
          </svg>
          </div>
          <h3 class="list-title-card">${e.name}</h3>
          </div>
          <div class="info-text-box">
            <p class="list-info-about-body">
              Burned calories:
              <span class="info-text-body"
                >${e.burnedCalories} / ${e.time} min</span
              >
            </p>
            <p class="list-info-about-body">
              Body part: <span class="info-text-body">${e.bodyPart}</span>
            </p>
            <p class="list-info-about-body last-elem-text">
              Target: <span class="info-text-body">${e.target}</span>
            </p>
          </div>
        </div>
      </li>`).join(""),p=document.querySelector(".fav-list-card"),b=document.querySelector(".fav-text-default");let q="",C=[],h=[];window.location.pathname.endsWith("/favorites.html")&&p.addEventListener("click",t=>{if(t.target.nodeName==="use"){const e=t.target.closest(".list-card-item").dataset.id;ae(e)?g.success({title:"OK",message:"Exercise removed!",position:"topRight"}):g.error({title:"Error",message:"Exercise is not removed!",position:"topRight"}),G()}});const G=async(t=1)=>{ie(),h=$e();const e=Math.ceil(h.length/10),s=ce();let i=t,r=(t-1)*s,a=0;if(h.length===0){p.innerHTML="",L(),b.classList.contains("is-visible")&&b.classList.remove("is-visible");return}else try{if(H(".pagination-container",i,e,G,i),h.length<10){C=(await Promise.all(h.map(c=>X(c)))).map(c=>c.data),q=ee(C),b.classList.contains("is-visible")||b.classList.add("is-visible"),L(),p.innerHTML="",p.insertAdjacentHTML("beforeend",q);return}const n=h.length-r;if(n===0)return;a=n<s?n:s;const m=h.slice(r,a+r);r+=a,C=(await Promise.all(m.map(o=>X(o)))).map(o=>o.data),q=ee(C),b.classList.contains("is-visible")||b.classList.add("is-visible"),L(),p.innerHTML="",p.insertAdjacentHTML("beforeend",q)}catch(n){g.error({title:"Error",message:`${n.message}`,position:"topRight"})}};p&&G();function Ke(){const t=document.querySelector(".js-header-nav-list"),e=document.querySelector(".logo"),s=document.querySelector(".menu-btn"),i=document.querySelector(".close-btn-menu"),r=document.querySelector(".mobile-menu-backdrop"),a=document.querySelectorAll(".menu-item");s&&s.addEventListener("click",()=>{r.classList.add("is-open")}),i&&i.addEventListener("click",()=>{r.classList.remove("is-open")}),a&&a.forEach(l=>{l.addEventListener("click",()=>{r.classList.remove("is-open")})});const n=window.location.pathname;(()=>{const l=localStorage.getItem("activePath")||"./index.html";t.querySelectorAll(".nav-link").forEach(o=>{const c=o.closest(".nav-item");o.getAttribute("href")===l||o.getAttribute("href")===n||n==="/"&&o.getAttribute("href")==="./index.html"?(o.classList.add("js-nav-link-active"),c.classList.add("js-nav-item-active")):(o.classList.remove("js-nav-link-active"),c.classList.remove("js-nav-item-active"))})})(),t.addEventListener("click",l=>{const o=l.target.closest(".nav-link");if(!o)return;const c=o.closest(".nav-item");t.querySelectorAll(".js-nav-link-active").forEach(d=>{d.classList.remove("js-nav-link-active")}),t.querySelectorAll(".js-nav-item-active").forEach(d=>{d.classList.remove("js-nav-item-active")}),o.classList.add("js-nav-link-active"),c.classList.add("js-nav-item-active"),localStorage.setItem("activePath",o.getAttribute("href"))}),e.addEventListener("click",()=>{t.querySelectorAll(".js-nav-link-active").forEach(c=>{c.classList.remove("js-nav-link-active")}),t.querySelectorAll(".js-nav-item-active").forEach(c=>{c.classList.remove("js-nav-item-active")});const l=t.querySelector('.nav-link[href="./index.html"]'),o=l==null?void 0:l.closest(".nav-item");l&&o&&(l.classList.add("js-nav-link-active"),o.classList.add("js-nav-item-active")),localStorage.setItem("activePath","./index.html")})}Ke();document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".footer__form");t&&t.addEventListener("submit",async function(e){e.preventDefault();const s=document.querySelector(".footer__input"),i=s.value.trim();if(!/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(i)){g.error({message:"Будь ласка, введіть коректну email адресу.",position:"bottomRight"});return}try{const a=await fetch("https://your-energy.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:i})}),n=await a.json();a.status===201?g.success({message:n.message||"Ви успішно підписались на розсилку!",position:"topRight"}):a.status===400?g.warning({message:n.message||"Некоректні дані. Перевірте ваш email.",position:"topRight"}):a.status===409?g.warning({message:n.message||"Цей email вже підписаний.",position:"topRight"}):g.error({message:n.message||"Сталася помилка. Спробуйте пізніше.",position:"topRight"})}catch{g.error({message:"Не вдалося підключитися до сервера. Спробуйте пізніше.",position:"topRight"})}s.value=""})});const B=document.querySelector(".scroll-up-btn");window.addEventListener("scroll",()=>{window.scrollY>0?B.classList.add("visible"):B.classList.remove("visible")});B.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=main-DMSs8nBs.js.map
