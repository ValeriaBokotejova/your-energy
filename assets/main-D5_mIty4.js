import{a as y,i as h}from"./vendor-Cbhu4xvy.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=a(i);fetch(i.href,r)}})();const V="https://your-energy.b.goit.study/api",W={mobile:9,tablet:12,desktop:12};y.defaults.baseURL=V;const D=(t,e,a)=>{const s={filter:t,page:e,limit:a};return y.get("/filters",{params:s})},J=t=>y.get(`/exercises/${t}`),K=t=>y.get("/exercises",{params:t}),Y=(t,e,a,s)=>{const i={rate:e,email:a,review:s};return y.patch(`/exercises/${t}/rating`,i)},u="/your-energy/assets/sprite-C3g35aWz.svg",Z="/your-energy/assets/no-image-B2yyVwMF.jpg";function Q(t,e){const a="#EEA10C",s="#F4F4F4";let r="";for(let n=0;n<5;n++){const d=`starGradient${n}`,o=n+1<=t?100:n<t?t%1*100:0,c=[{offset:"0%",color:a,opacity:"1"},{offset:`${o}%`,color:a,opacity:"1"},{offset:`${o+1}%`,color:s,opacity:"0.20"}],l=`
            <linearGradient id="${d}" x1="0%" y1="0%" x2="100%" y2="0%">
              ${c.map(g=>`<stop offset="${g.offset}" style="stop-color:${g.color};stop-opacity:${g.opacity}" />`).join("")}
            </linearGradient>
          `,m=`url(#${d})`;r+=`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">${l}<path d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z" fill="${m}" fill-opacity="1"/></svg>`}return r}const R=document.querySelector(".loader"),C=()=>{R.classList.remove("hidden")},_=()=>{R.classList.add("hidden")};class L{constructor(e,a,s,i,r,n,d,o,c,l,m){this.id=e,this.bodyPart=a,this.equipment=s,this.gifUrl=i,this.name=r,this.target=n,this.description=d,this.rating=o,this.burnedCalories=c,this.time=l,this.popularity=m}setRatingVisible(e){this.ratingVisible=e}setTrashVisible(e){this.trashVisible=e}static async fetchById(e){try{C();const s=(await J(e)).data;return new L(s._id,s.bodyPart,s.equipment,s.gifUrl,s.name,s.target,s.description,s.rating,s.burnedCalories,s.time,s.popularity)}catch(a){throw console.error("Error fetching exercise:",a),a}finally{_()}}render(e=!0,a=!1){const s=document.createElement("div");return s.className="exercise-card",s.innerHTML=`  
        <div class="exercise-header">
          <div class="badge">workout</div>
          <div class="rating ${e?"":"hidden"}">
            ${this.formatRating()}
            <svg width="18" height="18">
              <use href="${u}#star-active"></use>
            </svg>
          </div>
          <button type="button" data-exerciseid="${this.id}" class="exercise-card-trash ${a?"":"hidden"}">
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
      `,s}renderCard(){const e=document.createElement("div");e.className="exercise-modal-card";const s=[{name:"Target",value:this.target},{name:"Body Part",value:this.bodyPart},{name:"Equipment",value:this.equipment},{name:"Popular",value:this.popularity},{name:"Burned Calories",value:this.burnedCalories}].filter(i=>i.value).map(i=>`
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
          onerror="this.src='${Z}'"
          loading="lazy" />
      </div>
      <div class="modal-card-data">

      <h3 class="modal-card-title">${this.name}</h3>
      <div class="modal-card-rating">
        <span class="rating-value">${this.formatRating()}</span>
       ${Q(this.rating)}            
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
            <use href="${u}#heart"></use>
          </svg>
        </button>
        <button type="button" data-exerciseid="${this.id}"class="modal-card-button rating-button">Give a rating</button>
      </div>
      </div>
      </div>
    `,e}formatRating(){return this.rating.toFixed(1)}getStarRatingHTML(){let e="";const a='<svg width="18" height="18"><use href="${sprite}#star-active"></use></svg>',s='<svg width="18" height="18"><use href="${sprite}#star-inactive"></use></svg>';return e+=a.repeat(this.rating.toFixed(0)),e+=s.repeat(5-this.rating.toFixed(0)),e}}const X=()=>new URLSearchParams(window.location.search).get("exerciseId");document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".modal-overlay"),e=document.querySelector(".modal-page"),a=document.body;document.addEventListener("click",s=>{if(s.target.closest(".exercise-start-btn")){const i=s.target.closest(".exercise-start-btn").dataset.exerciseid||X();i&&L.fetchById(i).then(r=>{e.innerHTML="",e.append(r.renderCard()),t.classList.remove("hidden"),e.classList.remove("hidden"),a.classList.add("no-scroll")}).catch(r=>{console.error("Error fetching exercise:",r)})}(s.target.classList.contains("modal-overlay")||s.target.closest(".modal-card-close-button"))&&(t.classList.add("hidden"),e.classList.add("hidden"),e.innerHTML="",a.classList.remove("no-scroll"))})});document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".modal-page");document.addEventListener("click",e=>{if(!e.target.matches(".rating-button"))return;const a=e.target.dataset.exerciseid,s=document.querySelector(".exercise-modal-card"),i=te();ee(s),t.append(i);const r=i.querySelectorAll(".rating-modal__stars span"),n=i.querySelector(".rating-modal__value"),d=i.querySelector(".rating-modal__hidden-rating"),o=i.querySelector(".rating-modal__form");let c=0;r.forEach(l=>{l.addEventListener("mouseenter",()=>$(r,parseInt(l.dataset.value,10))),l.addEventListener("mouseleave",()=>$(r,c)),l.addEventListener("click",()=>{c=parseInt(l.dataset.value,10),d.value=c,n.textContent=c.toFixed(1),$(r,c)})}),o.addEventListener("submit",async l=>{var T,k;l.preventDefault();const m=parseInt(d.value),g=o.querySelector(".rating-modal__email").value.trim(),P=o.querySelector(".rating-modal__comment").value.trim();if(!m||!g||!P){h.error({title:"Помилка",message:"Всі поля повинні бути заповнені"});return}try{await Y(a,m,g,P),h.success({title:"Успіх",message:"Ви упсішно відправили рейтинг"}),i.remove(),s.style.display="block"}catch(z){h.error({title:"Помилка",message:((k=(T=z.response)==null?void 0:T.data)==null?void 0:k.message)||"Щось пішло не так"})}})})});function ee(t,e){t.style.display="none"}function $(t,e){t.forEach(a=>{const s=parseInt(a.dataset.value,10);a.querySelector("svg use").setAttribute("href",`${u}#${s<=e?"star-active":"star-inactive"}`)})}function te(){const t=document.createElement("div");return t.className="rating-modal-card",t.innerHTML=`
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
    `,t}const M={0:u+"#two-angle-left",1:u+"#one-angle-left",6:u+"#one-angle-right",7:u+"#two-angle-right"},se=(t,e)=>{const a=[];if(t<4)for(let s=0;s<4;s++)a.push(1+s);if(e-t<3&&a.length===0)for(let s=0;s<4;s++)a.unshift(e-s);if(a.length===0)for(let s=-1;s<3;s++)a.push(t+s);a[3]<e&&(a[3]=0),a[3]===e&&a[0]!=1&&(a[0]=0);for(let s=0;s<4;s++)a[s]>e&&(a[s]=-1);return a.unshift(t>1?t-1:-1),a.unshift(t>1?1:-1),a.push(t<e?t+1:-1),a.push(t<e?e:-1),a},ae=(t,e)=>{const a=se(t,e),s=new Set([0,1]),i=new Set([6,7]),r=s.union(i);return a.map((n,d)=>[d,n,r.has(d)?"":n===0?"...":n>0?n:"",n===t||s.has(d)&&t!=1||i.has(d)&&t!=e,r.has(d)||n===t])},ie=t=>M.hasOwnProperty(t)?`<svg width="20" height="20"><use href="${M[t]}"></use></svg>`:"",re=(t,e,a,s,i)=>`<li class="pagination-item${s?" accent":""}${i?" outline":""}${e===-1&&!i?" hidden-btn":""}" data-page="${e}">${a}${ie(t)}</li>`,ne=(t,e)=>ae(t,e).reduce((s,i)=>s+re(...i),""),oe=(t,e)=>`<ul class="pagination">${ne(t,e)}</ul>`,ce=(t,...e)=>a=>{a.preventDefault();const s=a.currentTarget;if(a.target===a.currentTarget)return;const i=Number(a.target.closest("li").getAttribute("data-page"));if(i==-1)return;s.remove();let r=Array.from(...e);r.splice(-1,1,i),t.apply(null,r)},le=(t,e,a,s,...i)=>{const r=document.querySelector(t);r.innerHTML=oe(e,a),r.firstChild.addEventListener("click",ce(s,i))},de=t=>{document.querySelector(t).firstChild.remove()},ue=()=>{const t=window.innerWidth;return t<768?"mobile":t<1440?"tablet":"desktop"},me=()=>W[ue()];class E{constructor(){this.exercises=[],this.page=0,this.perPage=10,this.totalPages=0}addExercise(e){this.exercises.push(e)}static async fetchWithFilters(e){const s=(await K(e.toParams())).data,i=new E;return i.page=s.page,i.perPage=s.perPage,i.totalPages=s.totalPages,s.results.forEach(r=>{const n=new L(r._id,r.bodyPart,r.equipment,r.gifUrl,r.name,r.target,r.description,r.rating,r.burnedCalories,r.time,r.popularity);i.addExercise(n)}),i}render(e=!0,a=!1){const s=document.createElement("div");return s.className="exercise-list",this.exercises.forEach(i=>{s.appendChild(i.render(e,a))}),s}}const f=Object.freeze({MUSCLES:"muscles",BODY_PART:"bodypart",EQUIPMENT:"equipment"});class he{constructor({bodypart:e,muscles:a,equipment:s,keyword:i,page:r=1,limit:n=10}={}){this.bodypart=e,this.muscles=a,this.equipment=s,this.keyword=i,this.page=r,this.limit=n}addFilter(e,a){switch(e){case f.MUSCLES:this.muscles=a;break;case f.BODY_PART:this.bodypart=a;break;case f.EQUIPMENT:this.equipment=a;break}}addKeyword(e){this.keyword=e}toParams(){const e={};return this.bodypart&&(e.bodypart=this.bodypart),this.muscles&&(e.muscles=this.muscles),this.equipment&&(e.equipment=this.equipment),this.keyword&&(e.keyword=this.keyword),e.page=this.page,e.limit=this.limit,e}}const p=document.querySelector(".exercise-container");let A=new E;const ge=async t=>{try{C(),A=await E.fetchWithFilters(t);const e=A.render(!0,!1);p.innerHTML="",p.appendChild(e)}catch(e){console.error(e)}finally{_()}};function N(t,e,a=null){const s=new he({page:1,limit:10});a&&s.addKeyword(a),s.addFilter(t,e),ge(s),p.classList.remove("hidden")}function pe(){p.innerHTML="",p.classList.contains("hidden")||p.classList.add("hidden")}const b=document.querySelector(".category-list"),F=document.querySelector(".category-container"),fe=t=>t.reduce((e,a)=>e+`<li class="category-card" data-name="${a.name}" data-filter="${a.filter}">
      <img class="gallery-image"
           src="${a.imgURL}"
           alt="${a.name}"
           loading="lazy"/>
            <div class="category-title">
              <h3>${a.name}</h3>
              <p>${a.filter}</p>
            </div>
          </li>`,""),I=async(t,e)=>{try{C();const a=await D(t,e,me()),{page:s,perPage:i,totalPages:r,results:n}=a.data;return n.length===0?(console.log("There are no categories for the specified filter"),{page:s,perPage:i,totalPages:r}):(b.innerHTML=fe(n),b.addEventListener("click",B),F.classList.add("active"),le(".pagination-container",e,r,I,t,s),pe(),{page:s,perPage:i,totalPages:r})}catch(a){console.log(a)}finally{_()}},ve=()=>{b.innerHTML="",de(".pagination-container"),b.removeEventListener("click",B),F.classList.remove("active")},B=t=>{if(t.preventDefault(),t.target===t.currentTarget)return;const e=t.target.closest("li"),a=e.getAttribute("data-filter"),s=e.getAttribute("data-name");ve(),N(ye(a),s),we(a,s)},ye=t=>{const e=t.toLowerCase();return Object.values(f).find(a=>a===e)},j=document.querySelectorAll(".filter-tab-button"),H=document.querySelector(".filter-form-container"),O=document.querySelector(".search-button"),q=document.querySelector(".cansel-search-button"),v=document.querySelector(".search-string"),U=document.querySelector(".additional-title-filter"),G=document.querySelector(".slash-in-filter");var S="",w="",x="";const be={"button-muscles":"Muscles","button-bodypart":"Body parts","button-equipment":"Equipment"};v&&v.addEventListener("input",function(){q.style.display=this.value.length>0?"block":"none"});q&&q.addEventListener("click",function(){v.value="",this.style.display="none"});j.forEach(t=>{t.addEventListener("click",e=>{if(e.preventDefault(),Se(),e.target&&e.target.matches("button.filter-tab-button")){j.forEach(i=>{i.classList.remove("active")}),t.classList.add("active");const a=e.target.id,s=be[a];I(s,1).then(i=>console.log(`Execute function for pagination with parameter ${JSON.stringify(i)}`)).catch(i=>console.log(i))}})});O&&O.addEventListener("click",t=>{t.preventDefault(),x=v.value,N(Le(S),w,x)});function Le(t){var e=t.toLowerCase();return e==="body parts"&&(e="bodypart"),Object.values(f).find(a=>a===e)}function Ee(t){G.style.display="inline",U.textContent=t}function Se(){G.style.display="none",H.style.display="none",U.textContent="",qe()}function we(t,e){$e(t,e),Ee(e),H.style.display="block",console.log(`filterName: ${S}  categoryName: ${w}`)}function $e(t,e){S=t,w=e}function qe(){S="",w="",v.value="",x=""}document.querySelector(".fav-list-card");document.querySelector(".fav-text-default");function xe(){const t=document.querySelector(".js-header-nav-list"),e=document.querySelector(".logo"),a=document.querySelector(".menu-btn"),s=document.querySelector(".close-btn-menu"),i=document.querySelector(".mobile-menu-backdrop"),r=document.querySelectorAll(".menu-item");a&&a.addEventListener("click",()=>{i.classList.add("is-open")}),s&&s.addEventListener("click",()=>{i.classList.remove("is-open")}),r&&r.forEach(o=>{o.addEventListener("click",()=>{i.classList.remove("is-open")})});const n=localStorage.getItem("activePath"),d=window.location.pathname;t.querySelectorAll(".nav-link").forEach(o=>{const c=o.closest(".nav-item");o.getAttribute("href")===n||o.getAttribute("href")===d||d==="/"&&o.getAttribute("href")==="./index.html"?(o.classList.add("js-nav-link-active"),c.classList.add("js-nav-item-active")):(o.classList.remove("js-nav-link-active"),c.classList.remove("js-nav-item-active"))}),t.addEventListener("click",o=>{const c=o.target.closest(".nav-link");if(!c)return;const l=c.closest(".nav-item");t.querySelectorAll(".js-nav-link-active").forEach(m=>{m.classList.remove("js-nav-link-active")}),t.querySelectorAll(".js-nav-item-active").forEach(m=>{m.classList.remove("js-nav-item-active")}),c.classList.add("js-nav-link-active"),l.classList.add("js-nav-item-active"),localStorage.setItem("activePath",c.getAttribute("href"))}),e.addEventListener("click",()=>{t.querySelectorAll(".js-nav-link-active").forEach(l=>{l.classList.remove("js-nav-link-active")}),t.querySelectorAll(".js-nav-item-active").forEach(l=>{l.classList.remove("js-nav-item-active")});const o=t.querySelector('.nav-link[href="./index.html"]'),c=o==null?void 0:o.closest(".nav-item");o&&c&&(o.classList.add("js-nav-link-active"),c.classList.add("js-nav-item-active")),localStorage.setItem("activePath","./index.html")})}xe();document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".footer__form");t&&t.addEventListener("submit",async function(e){e.preventDefault();const a=document.querySelector(".footer__input"),s=a.value.trim();if(!/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(s)){h.error({title:"Помилка",message:"Будь ласка, введіть коректну email адресу.",position:"bottomRight"});return}try{const r=await fetch("https://your-energy.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s})}),n=await r.json();r.status===201?h.success({title:"Успіх",message:n.message||"Ви успішно підписались на розсилку!",position:"topRight"}):r.status===400?h.warning({title:"Увага",message:n.message||"Некоректні дані. Перевірте ваш email.",position:"topRight"}):r.status===409?h.warning({title:"Увага",message:n.message||"Цей email вже підписаний.",position:"topRight"}):h.error({title:"Помилка",message:n.message||"Сталася помилка. Спробуйте пізніше.",position:"topRight"})}catch{h.error({title:"Помилка",message:"Не вдалося підключитися до сервера. Спробуйте пізніше.",position:"topRight"})}a.value=""})});I("Muscles",1).then(t=>console.log(`Execute function for pagination with parameter ${JSON.stringify(t)}`)).catch(t=>console.log(t));
//# sourceMappingURL=main-D5_mIty4.js.map
