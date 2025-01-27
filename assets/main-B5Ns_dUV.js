import{a as f,i as g}from"./vendor-Cbhu4xvy.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=s(r);fetch(r.href,i)}})();const ee="https://your-energy.b.goit.study/api",ve={mobile:9,tablet:12,desktop:12},fe={mobile:8,tablet:10,desktop:10};f.defaults.baseURL=ee;const ye=(t,e,s)=>{const a={filter:t,page:e,limit:s};return f.get("/filters",{params:a})},be=t=>f.get(`/exercises/${t}`),Le=t=>f.get("/exercises",{params:t}),Se=(t,e,s,a)=>{const r={rate:e,email:s,review:a};return f.patch(`/exercises/${t}/rating`,r)},m="/your-energy/assets/sprite-D8xu5p1j.svg",Ee="/your-energy/assets/no-image-B2yyVwMF.jpg";function we(t,e){const s="#EEA10C",a="#F4F4F4";let i="";for(let n=0;n<5;n++){const u=`starGradient${n}`,l=n+1<=t?100:n<t?t%1*100:0,o=[{offset:"0%",color:s,opacity:"1"},{offset:`${l}%`,color:s,opacity:"1"},{offset:`${l+1}%`,color:a,opacity:"0.20"}],c=`
            <linearGradient id="${u}" x1="0%" y1="0%" x2="100%" y2="0%">
              ${o.map(y=>`<stop offset="${y.offset}" style="stop-color:${y.color};stop-opacity:${y.opacity}" />`).join("")}
            </linearGradient>
          `,d=`url(#${u})`;i+=`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">${c}<path d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z" fill="${d}" fill-opacity="1"/></svg>`}return i}const _=document.querySelector(".loader"),z=document.querySelector(".loader-container"),xe=document.querySelector(".exercise-loader-container");function A(){const t=xe.getBoundingClientRect(),e=z.getBoundingClientRect(),s=Math.max(t.top,Math.min(t.bottom-e.height,(window.innerHeight-e.height)/2));z.style.top=`${s-t.top}px`}const te=()=>{_.classList.remove("hidden"),A(),window.addEventListener("scroll",A),window.addEventListener("resize",A)},se=()=>{_.classList.add("hidden")},ae=()=>{_.classList.remove("hidden")},I=()=>{_.classList.add("hidden")},L="favorite-exercises";function $e(t){try{const e=JSON.parse(localStorage.getItem(L)||"[]");return e.includes(t)?!1:(e.push(t),localStorage.setItem(L,JSON.stringify(e)),!0)}catch(e){return console.error("Error adding ID to localStorage:",e),!1}}function re(t){try{const e=JSON.parse(localStorage.getItem(L)||"[]"),s=e.indexOf(t);return s!==-1?(e.splice(s,1),localStorage.setItem(L,JSON.stringify(e)),!0):!1}catch(e){return console.error("Error removing ID from localStorage:",e),!1}}function ie(t){try{return JSON.parse(localStorage.getItem(L)||"[]").includes(t)}catch(e){return console.error("Error checking ID in localStorage:",e),!1}}function qe(){return JSON.parse(localStorage.getItem(L)||"[]")}class ${constructor(e,s,a,r,i,n,u,l,o,c,d){this.id=e,this.bodyPart=s,this.equipment=a,this.gifUrl=r,this.name=i,this.target=n,this.description=u,this.rating=l,this.burnedCalories=o,this.time=c,this.popularity=d}setRatingVisible(e){this.ratingVisible=e}setTrashVisible(e){this.trashVisible=e}static async fetchById(e){try{ae();const a=(await be(e)).data;return new $(a._id,a.bodyPart,a.equipment,a.gifUrl,a.name,a.target,a.description,a.rating,a.burnedCalories,a.time,a.popularity)}catch(s){throw console.error("Error fetching exercise:",s),s}finally{I()}}render(e=!0,s=!1){const a=document.createElement("div");return a.className="exercise-card",a.innerHTML=`  
        <div class="exercise-header">
          <div class="badge">workout</div>
          <div class="rating ${e?"":"hidden"}">
            ${this.formatRating()}
            <svg width="18" height="18">
              <use href="${m}#star-active"></use>
            </svg>
          </div>
          <button type="button" data-exerciseid="${this.id}" class="exercise-card-trash ${s?"":"hidden"}">
            <svg width="16" height="16">
              <use href="${m}#trash"></use>
            </svg>
          </button>
          <button type="button" data-exerciseid="${this.id}" class="exercise-start-btn">
            Start
            <svg width="16" height="16">
              <use href="${m}#arrow"></use>
            </svg>
          </button>
        </div>
        <div class="exercise-title-container">
          <div class="exercise-icon">
            <svg width="18" height="18">
              <use href="${m}#group"></use>
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
          
        </div>`).join("");var r=ie(this.id);return e.innerHTML=`
      <button type="button" class="modal-card-close-button">
       <svg width="24" height="24">
              <use href="${m}#close"></use>
            </svg>
        </button>
      <div class="modal-card-header">
      
      <div class="image-container">
        <img 
          src="${this.gifUrl}"
          alt="${this.name}"
          onerror="this.src='${Ee}'"
          loading="lazy" />
      </div>
      <div class="modal-card-data">

      <h3 class="modal-card-title">${this.name}</h3>
      <div class="modal-card-rating">
        <span class="rating-value">${this.formatRating()}</span>
       ${we(this.rating)}            
      </div>
      <hr class="divider" />
      <div class="modal-card-properties">
        ${a}
      </div>
      <hr class="divider" />
      <p class="modal-card-description">${this.description}</p>
      <div class="modal-card-buttons">
        <button type="button" data-exerciseid="${this.id}" class="modal-card-button favorite-button">
        <span>${r?"Remove favorite":"Add to favorites"}</span>
        <svg width="18" height="18">
            <use href="${m}#heart" fill="${r?"black":"none"}"></use>
          </svg>
        </button>
        <button type="button" data-exerciseid="${this.id}"class="modal-card-button rating-button">Give a rating</button>
      </div>
      </div>
      </div>
    `,e}formatRating(){return this.rating.toFixed(1)}getStarRatingHTML(){let e="";const s='<svg width="18" height="18"><use href="${sprite}#star-active"></use></svg>',a='<svg width="18" height="18"><use href="${sprite}#star-inactive"></use></svg>';return e+=s.repeat(this.rating.toFixed(0)),e+=a.repeat(5-this.rating.toFixed(0)),e}}const Ce=()=>new URLSearchParams(window.location.search).get("exerciseId");document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".modal-overlay"),e=document.querySelector(".modal-page"),s=document.body,a=()=>{t.classList.add("hidden"),e.classList.add("hidden"),e.innerHTML="",s.classList.remove("no-scroll")};document.addEventListener("click",r=>{if(r.target.closest(".exercise-start-btn")){r.target.closest(".exercise-start-btn").blur();const n=r.target.closest(".exercise-start-btn").dataset.exerciseid||Ce();n&&$.fetchById(n).then(u=>{e.innerHTML="",e.append(u.renderCard()),t.classList.remove("hidden"),e.classList.remove("hidden"),s.classList.add("no-scroll")}).catch(u=>{console.error("Error fetching exercise:",u)})}(r.target.classList.contains("modal-overlay")||r.target.closest(".modal-card-close-button"))&&a()}),document.addEventListener("keydown",r=>{r.key==="Escape"&&!t.classList.contains("hidden")&&a()})});document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".modal-page");document.addEventListener("click",e=>{const s=t.querySelector(".favorite-button");if(s&&(e.target===s||s.contains(e.target))){const d=s.getAttribute("data-exerciseid");d&&(ie(d)?(re(d),s.querySelector("span").textContent="Add to favorites",s.querySelector("use").setAttribute("fill","none")):($e(d),s.querySelector("span").textContent="Remove favorite",s.querySelector("use").setAttribute("fill","black")))}if(!e.target.matches(".rating-button"))return;const a=e.target.dataset.exerciseid,r=document.querySelector(".exercise-modal-card"),i=Te();Ie(r),t.append(i);const n=i.querySelectorAll(".rating-modal__stars span"),u=i.querySelector(".rating-modal__value"),l=i.querySelector(".rating-modal__hidden-rating"),o=i.querySelector(".rating-modal__form");let c=0;n.forEach(d=>{d.addEventListener("mouseenter",()=>O(n,parseInt(d.dataset.value,10))),d.addEventListener("mouseleave",()=>O(n,c)),d.addEventListener("click",()=>{c=parseInt(d.dataset.value,10),l.value=c,u.textContent=c.toFixed(1),O(n,c)})}),o.addEventListener("submit",async d=>{var J,V;d.preventDefault();const y=parseInt(l.value),U=o.querySelector(".rating-modal__email").value.trim(),G=o.querySelector(".rating-modal__comment").value.trim();if(!y||!U||!G){g.error({title:"Помилка",message:"Всі поля повинні бути заповнені"});return}try{await Se(a,y,U,G),g.success({title:"Успіх",message:"Ви упсішно відправили рейтинг"}),i.remove(),r.style.display="block"}catch(pe){g.error({title:"Помилка",message:((V=(J=pe.response)==null?void 0:J.data)==null?void 0:V.message)||"Щось пішло не так"})}})})});function Ie(t,e){t.style.display="none"}function O(t,e){t.forEach(s=>{const a=parseInt(s.dataset.value,10);s.querySelector("svg use").setAttribute("href",`${m}#${a<=e?"star-active":"star-inactive"}`)})}function Te(){const t=document.createElement("div");return t.className="rating-modal-card",t.innerHTML=`
      <button type="button" class="modal-card-close-button">
        <svg width="24" height="24">
          <use href="${m}#close"></use>
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
                      <use href="${m}#star-inactive"></use>
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
    `,t}async function _e(){const t=JSON.parse(localStorage.getItem("quoteDay")),e=new Date().toISOString().split("T")[0];if((t==null?void 0:t.currentDate)===e){K(t.data);return}try{const{data:s}=await f.get(`${ee}/quote`),a={data:s,currentDate:e};localStorage.setItem("quoteDay",JSON.stringify(a)),K(s)}catch(s){console.error("Error fetching the quote:",s)}}function K({quote:t,author:e}){document.querySelector(".js-quote").innerHTML=`
    <p class="quote-text">"${t}"</p>
    <p class="quote-signature">- ${e}</p>
  `}document.addEventListener("DOMContentLoaded",_e);const W={0:m+"#two-angle-left",1:m+"#one-angle-left",6:m+"#one-angle-right",7:m+"#two-angle-right"},Me=(t,e)=>{const s=[];if(t<4)for(let a=0;a<4;a++)s.push(1+a);if(e-t<3&&s.length===0)for(let a=0;a<4;a++)s.unshift(e-a);if(s.length===0)for(let a=-1;a<3;a++)s.push(t+a);s[3]<e&&(s[3]=0),s[3]===e&&s[0]!=1&&(s[0]=0);for(let a=0;a<4;a++)s[a]>e&&(s[a]=-1);return s.unshift(t>1?t-1:-1),s.unshift(t>1?1:-1),s.push(t<e?t+1:-1),s.push(t<e?e:-1),s},ke=(t,e)=>{const s=Me(t,e),a=new Set([0,1]),r=new Set([6,7]),i=a.union(r);return s.map((n,u)=>[u,n,i.has(u)?"":n===0?"...":n>0?n:"",n===t||a.has(u)&&t!=1||r.has(u)&&t!=e,i.has(u)||n===t])},Pe=t=>W.hasOwnProperty(t)?`<svg width="20" height="20"><use href="${W[t]}"></use></svg>`:"",Ae=(t,e,s,a,r)=>`<li class="pagination-item${a?" accent":""}${r?" outline":""}${e===-1&&!r?" hidden-btn":""}" data-page="${e}">${s}${Pe(t)}</li>`,Oe=(t,e)=>e<2?"":ke(t,e).reduce((a,r)=>a+Ae(...r),""),Re=(t,e)=>`<ul class="pagination">${Oe(t,e)}</ul>`,Ne=(t,...e)=>s=>{s.preventDefault();const a=s.currentTarget;if(s.target===s.currentTarget)return;const r=Number(s.target.closest("li").getAttribute("data-page"));if(r<1)return;a.remove();let i=Array.from(...e);i.splice(-1,1,r),t.apply(null,i)},j=(t,e,s,a,...r)=>{const i=document.querySelector(t);i.innerHTML=Re(e,s),i.firstChild.addEventListener("click",Ne(a,r))},ne=t=>{const e=document.querySelector(t);e.firstChild&&e.firstChild.remove()},oe=()=>{const t=window.innerWidth;return t<768?"mobile":t<1440?"tablet":"desktop"},Be=()=>ve[oe()],ce=()=>fe[oe()];class M{constructor(){this.exercises=[],this.page=0,this.perPage=10,this.totalPages=0}addExercise(e){this.exercises.push(e)}static async fetchWithFilters(e){const a=(await Le(e.toParams())).data,r=new M;return r.page=a.page,r.perPage=a.perPage,r.totalPages=a.totalPages,a.results.forEach(i=>{const n=new $(i._id,i.bodyPart,i.equipment,i.gifUrl,i.name,i.target,i.description,i.rating,i.burnedCalories,i.time,i.popularity);r.addExercise(n)}),r}render(e=!0,s=!1){const a=document.createElement("div");return a.className="exercise-list",this.exercises.forEach(r=>{a.appendChild(r.render(e,s))}),a}}const E=Object.freeze({MUSCLES:"muscles",BODY_PART:"bodypart",EQUIPMENT:"equipment"});class je{constructor({bodypart:e,muscles:s,equipment:a,keyword:r,page:i=1,limit:n=10}={}){this.bodypart=e,this.muscles=s,this.equipment=a,this.keyword=r,this.page=i,this.limit=n}addFilter(e,s){switch(e){case E.MUSCLES:this.muscles=s;break;case E.BODY_PART:this.bodypart=s;break;case E.EQUIPMENT:this.equipment=s;break}}addKeyword(e){this.keyword=e}toParams(){const e={};return this.bodypart&&(e.bodypart=this.bodypart),this.muscles&&(e.muscles=this.muscles),this.equipment&&(e.equipment=this.equipment),this.keyword&&(e.keyword=this.keyword),e.page=this.page,e.limit=this.limit,e}}const v=document.querySelector(".exercise-container");let S=new M;const le=async(t,e=1)=>{try{te(),t.page=e,S=await M.fetchWithFilters(t);const s=S.render(!0,!1);v.innerHTML="",v.appendChild(s),j(".pagination-container",S.page,S.totalPages,le,t,S.page),e!=1&&v.scrollIntoView({behavior:"smooth"})}catch(s){console.error(s)}finally{se()}};function F(t,e,s=null){const a=new je({page:1,limit:ce()});s&&a.addKeyword(s),a.addFilter(t,e),le(a),v.classList.add("active")}function Fe(){v.innerHTML="",v.classList.contains("active")&&v.classList.remove("active"),ne(".pagination-container")}const w=document.querySelector(".category-list"),T=document.querySelector(".category-container"),He=t=>t.reduce((e,s)=>e+`<li class="category-card" data-name="${s.name}" data-filter="${s.filter}">
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
          </li>`,""),H=async(t,e)=>{try{te();const s=await ye(t,e,Be()),{page:a,totalPages:r,results:i}=s.data;i.length===0&&(w.innerHTML=""),w.innerHTML=He(i),w.addEventListener("click",de),T.classList.add("active"),Fe(),j(".pagination-container",e,r,H,t,a),e!=1&&T.scrollIntoView({behavior:"smooth"})}catch(s){console.log(s)}finally{se()}},De=()=>{w.innerHTML="",ne(".pagination-container"),w.removeEventListener("click",de),T.classList.remove("active")},de=t=>{if(t.preventDefault(),t.target===t.currentTarget)return;const e=t.target.closest("li"),s=e.getAttribute("data-filter"),a=e.getAttribute("data-name");De(),F(Ue(s),a),ze(s,a)},Ue=t=>{var e=t.toLowerCase();return e==="body parts"&&(e="bodypart"),Object.values(E).find(s=>s===e)};T&&H("Muscles",1);const Y=document.querySelectorAll(".filter-tab-button"),ue=document.querySelector(".filter-form-container"),Q=document.querySelector(".search-button"),R=document.querySelector(".cansel-search-button"),x=document.querySelector(".search-string"),me=document.querySelector(".additional-title-filter"),ge=document.querySelector(".slash-in-filter");var k="",P="",N="";const Ge={"button-muscles":"Muscles","button-bodypart":"Body parts","button-equipment":"Equipment"};x&&x.addEventListener("input",function(){R.style.display=this.value.length>0?"block":"none"});R&&R.addEventListener("click",function(){x.value="",this.style.display="none",F(he(k),P)});Y.forEach(t=>{t.addEventListener("click",e=>{if(e.preventDefault(),Ve(),e.target&&e.target.matches("button.filter-tab-button")){Y.forEach(r=>{r.classList.remove("active")}),t.classList.add("active");const s=e.target.id,a=Ge[s];H(a,1)}})});Q&&Q.addEventListener("click",t=>{t.preventDefault(),N=x.value,F(he(k),P,N)});function he(t){var e=t.toLowerCase();return e==="body parts"&&(e="bodypart"),Object.values(E).find(s=>s===e)}function Je(t){ge.style.display="inline",me.textContent=t}function Ve(){ge.style.display="none",ue.style.display="none",me.textContent="",We()}function ze(t,e){Ke(t,e),Je(e),ue.style.display="block"}function Ke(t,e){k=t,P=e}function We(){k="",P="",x.value="",N=""}const Z=async t=>await f.get(`https://your-energy.b.goit.study/api/exercises/${t}`),X=t=>t.map(e=>`<li class="list-card-item" data-id="${e._id}">
        <div class="list-card-wrapper">
          <div class="box-buttons">
            <div class="trash-box">
              <div class="card-name-box">
                <p class="list-card-name">Workout</p>
              </div>
              <button class="btn-trash" type="button">
              <svg class="icon-trash" width="16px" height="16px">
                <use href="${m}#trash"></use>
              </svg>
              </button>
            </div>
            <button class="exercise-start-btn" type="button">
              Start
              <svg width="16px" height="16px">
                <use href="${m}#arrow"></use>
              </svg>
            </button>
          </div>
          <div class="icon-run-box">
          <div class="icon-run-wrapper">
          <svg class="icon-run" width="14px" height="16px">
              <use href="${m}#group"></use>
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
      </li>`).join(""),p=document.querySelector(".fav-list-card"),b=document.querySelector(".fav-text-default");let q="",C=[],h=[];window.location.pathname.endsWith("/favorites.html")&&p.addEventListener("click",t=>{if(t.target.closest(".btn-trash")){const e=t.target.closest(".list-card-item").dataset.id;re(e)?g.success({title:"OK",message:"Exercise removed!",position:"topRight"}):g.error({title:"Error",message:"Exercise is not removed!",position:"topRight"}),D()}});const D=async(t=1)=>{ae(),h=qe();const e=Math.ceil(h.length/10),s=ce();let a=t,r=(t-1)*s,i=0;if(h.length===0){p.innerHTML="",I(),b.classList.contains("is-visible")&&b.classList.remove("is-visible");return}else try{if(j(".pagination-container",a,e,D,a),h.length<10){C=(await Promise.all(h.map(c=>Z(c)))).map(c=>c.data),q=X(C),b.classList.contains("is-visible")||b.classList.add("is-visible"),I(),p.innerHTML="",p.insertAdjacentHTML("beforeend",q);return}const n=h.length-r;if(n===0)return;i=n<s?n:s;const u=h.slice(r,i+r);r+=i,C=(await Promise.all(u.map(o=>Z(o)))).map(o=>o.data),q=X(C),b.classList.contains("is-visible")||b.classList.add("is-visible"),I(),p.innerHTML="",p.insertAdjacentHTML("beforeend",q)}catch(n){g.error({title:"Error",message:`${n.message}`,position:"topRight"})}};p&&D();document.addEventListener("click",t=>{if(t.target.closest(".exercise-start-btn")){const e=t.target.closest(".list-card-item").dataset.id;e&&$.fetchById(e).then(s=>{const a=document.querySelector(".modal-overlay"),r=document.querySelector(".modal-page"),i=document.body;r.innerHTML="",r.append(s.renderCard()),a.classList.remove("hidden"),r.classList.remove("hidden"),i.classList.add("no-scroll")}).catch(s=>{console.error("Error fetching exercise:",s)})}});document.addEventListener("click",t=>{if(t.target.classList.contains("modal-overlay")||t.target.closest(".modal-card-close-button")){const e=document.querySelector(".modal-overlay"),s=document.querySelector(".modal-page"),a=document.body;e.classList.add("hidden"),s.classList.add("hidden"),s.innerHTML="",a.classList.remove("no-scroll")}});function Ye(){const t=document.querySelector(".js-header-nav-list"),e=document.querySelector(".logo"),s=document.querySelector(".menu-btn"),a=document.querySelector(".close-btn-menu"),r=document.querySelector(".mobile-menu-backdrop"),i=document.querySelectorAll(".menu-item");s&&s.addEventListener("click",()=>{r.classList.add("is-open")}),a&&a.addEventListener("click",()=>{r.classList.remove("is-open")}),i&&i.forEach(l=>{l.addEventListener("click",()=>{r.classList.remove("is-open")})});const n=window.location.pathname;(()=>{const l=localStorage.getItem("activePath")||"./index.html";t.querySelectorAll(".nav-link").forEach(o=>{const c=o.closest(".nav-item");o.getAttribute("href")===l||o.getAttribute("href")===n||n==="/"&&o.getAttribute("href")==="./index.html"?(o.classList.add("js-nav-link-active"),c.classList.add("js-nav-item-active")):(o.classList.remove("js-nav-link-active"),c.classList.remove("js-nav-item-active"))})})(),t.addEventListener("click",l=>{const o=l.target.closest(".nav-link");if(!o)return;const c=o.closest(".nav-item");t.querySelectorAll(".js-nav-link-active").forEach(d=>{d.classList.remove("js-nav-link-active")}),t.querySelectorAll(".js-nav-item-active").forEach(d=>{d.classList.remove("js-nav-item-active")}),o.classList.add("js-nav-link-active"),c.classList.add("js-nav-item-active"),localStorage.setItem("activePath",o.getAttribute("href"))}),e.addEventListener("click",()=>{t.querySelectorAll(".js-nav-link-active").forEach(c=>{c.classList.remove("js-nav-link-active")}),t.querySelectorAll(".js-nav-item-active").forEach(c=>{c.classList.remove("js-nav-item-active")});const l=t.querySelector('.nav-link[href="./index.html"]'),o=l==null?void 0:l.closest(".nav-item");l&&o&&(l.classList.add("js-nav-link-active"),o.classList.add("js-nav-item-active")),localStorage.setItem("activePath","./index.html")})}Ye();document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".footer__form");t&&t.addEventListener("submit",async function(e){e.preventDefault();const s=document.querySelector(".footer__input"),a=s.value.trim();if(!/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(a)){g.error({message:"Будь ласка, введіть коректну email адресу.",position:"bottomRight"});return}try{const i=await fetch("https://your-energy.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a})}),n=await i.json();i.status===201?g.success({message:n.message||"Ви успішно підписались на розсилку!",position:"topRight"}):i.status===400?g.warning({message:n.message||"Некоректні дані. Перевірте ваш email.",position:"topRight"}):i.status===409?g.warning({message:n.message||"Цей email вже підписаний.",position:"topRight"}):g.error({message:n.message||"Сталася помилка. Спробуйте пізніше.",position:"topRight"})}catch{g.error({message:"Не вдалося підключитися до сервера. Спробуйте пізніше.",position:"topRight"})}s.value=""})});const B=document.querySelector(".scroll-up-btn");window.addEventListener("scroll",()=>{window.scrollY>0?B.classList.add("visible"):B.classList.remove("visible")});B.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=main-B5Ns_dUV.js.map
