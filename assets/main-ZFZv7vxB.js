import{a as f,i as g}from"./vendor-Cbhu4xvy.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=s(a);fetch(a.href,i)}})();const ee="https://your-energy.b.goit.study/api",ve={mobile:9,tablet:12,desktop:12},fe={mobile:8,tablet:10,desktop:10};f.defaults.baseURL=ee;const ye=(t,e,s)=>{const r={filter:t,page:e,limit:s};return f.get("/filters",{params:r})},be=t=>f.get(`/exercises/${t}`),Le=t=>f.get("/exercises",{params:t}),Ee=(t,e,s,r)=>{const a={rate:e,email:s,review:r};return f.patch(`/exercises/${t}/rating`,a)},m="/your-energy/assets/sprite-D8xu5p1j.svg",Se="/your-energy/assets/no-image-B2yyVwMF.jpg";function we(t,e){const s="#EEA10C",r="#F4F4F4";let i="";for(let n=0;n<5;n++){const u=`starGradient${n}`,l=n+1<=t?100:n<t?t%1*100:0,o=[{offset:"0%",color:s,opacity:"1"},{offset:`${l}%`,color:s,opacity:"1"},{offset:`${l+1}%`,color:r,opacity:"0.20"}],c=`
            <linearGradient id="${u}" x1="0%" y1="0%" x2="100%" y2="0%">
              ${o.map(y=>`<stop offset="${y.offset}" style="stop-color:${y.color};stop-opacity:${y.opacity}" />`).join("")}
            </linearGradient>
          `,d=`url(#${u})`;i+=`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">${c}<path d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z" fill="${d}" fill-opacity="1"/></svg>`}return i}const P=document.querySelector(".loader"),W=document.querySelector(".loader-container"),xe=document.querySelector(".exercise-loader-container");function A(){const t=xe.getBoundingClientRect(),e=W.getBoundingClientRect(),s=Math.max(t.top,Math.min(t.bottom-e.height,(window.innerHeight-e.height)/2));W.style.top=`${s-t.top}px`}const te=()=>{P.classList.remove("hidden"),A(),window.addEventListener("scroll",A),window.addEventListener("resize",A)},se=()=>{P.classList.add("hidden")},re=()=>{P.classList.remove("hidden")},I=()=>{P.classList.add("hidden")},L="favorite-exercises";function $e(t){try{const e=JSON.parse(localStorage.getItem(L)||"[]");return e.includes(t)?!1:(e.push(t),localStorage.setItem(L,JSON.stringify(e)),!0)}catch(e){return console.error("Error adding ID to localStorage:",e),!1}}function ae(t){try{const e=JSON.parse(localStorage.getItem(L)||"[]"),s=e.indexOf(t);return s!==-1?(e.splice(s,1),localStorage.setItem(L,JSON.stringify(e)),!0):!1}catch(e){return console.error("Error removing ID from localStorage:",e),!1}}function ie(t){try{return JSON.parse(localStorage.getItem(L)||"[]").includes(t)}catch(e){return console.error("Error checking ID in localStorage:",e),!1}}function qe(){return JSON.parse(localStorage.getItem(L)||"[]")}class ${constructor(e,s,r,a,i,n,u,l,o,c,d){this.id=e,this.bodyPart=s,this.equipment=r,this.gifUrl=a,this.name=i,this.target=n,this.description=u,this.rating=l,this.burnedCalories=o,this.time=c,this.popularity=d}setRatingVisible(e){this.ratingVisible=e}setTrashVisible(e){this.trashVisible=e}static async fetchById(e){try{re();const r=(await be(e)).data;return new $(r._id,r.bodyPart,r.equipment,r.gifUrl,r.name,r.target,r.description,r.rating,r.burnedCalories,r.time,r.popularity)}catch(s){throw console.error("Error fetching exercise:",s),s}finally{I()}}render(e=!0,s=!1){const r=document.createElement("div");return r.className="exercise-card",r.innerHTML=`  
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
      `,r}renderCard(){const e=document.createElement("div");e.className="exercise-modal-card";const r=[{name:"Target",value:this.target},{name:"Body Part",value:this.bodyPart},{name:"Equipment",value:this.equipment},{name:"Popular",value:this.popularity},{name:"Burned Calories",value:this.burnedCalories}].filter(i=>i.value).map(i=>`
        <div class="modal-card-property">
        <span class="modal-card-property-name">${i.name}</span>
          <span class="modal-card-property-value">${i.value}</span>
          
        </div>`).join("");var a=ie(this.id);return e.innerHTML=`
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
          onerror="this.src='${Se}'"
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
        ${r}
      </div>
      <hr class="divider" />
      <p class="modal-card-description">${this.description}</p>
      <div class="modal-card-buttons">
        <button type="button" data-exerciseid="${this.id}" class="modal-card-button favorite-button">
        <span>${a?"Remove favorite":"Add to favorites"}</span>
        <svg width="18" height="18">
            <use href="${m}#heart" fill="${a?"black":"none"}"></use>
          </svg>
        </button>
        <button type="button" data-exerciseid="${this.id}"class="modal-card-button rating-button">Give a rating</button>
      </div>
      </div>
      </div>
    `,e}formatRating(){return this.rating.toFixed(1)}getStarRatingHTML(){let e="";const s='<svg width="18" height="18"><use href="${sprite}#star-active"></use></svg>',r='<svg width="18" height="18"><use href="${sprite}#star-inactive"></use></svg>';return e+=s.repeat(this.rating.toFixed(0)),e+=r.repeat(5-this.rating.toFixed(0)),e}}const Ce=()=>new URLSearchParams(window.location.search).get("exerciseId");document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".modal-overlay"),e=document.querySelector(".modal-page"),s=document.body,r=()=>{t.classList.add("hidden"),e.classList.add("hidden"),e.innerHTML="",s.classList.remove("no-scroll")};document.addEventListener("click",a=>{if(a.target.closest(".exercise-start-btn")){a.target.closest(".exercise-start-btn").blur();const n=a.target.closest(".exercise-start-btn").dataset.exerciseid||Ce();n&&$.fetchById(n).then(u=>{e.innerHTML="",e.append(u.renderCard()),t.classList.remove("hidden"),e.classList.remove("hidden"),s.classList.add("no-scroll")}).catch(u=>{console.error("Error fetching exercise:",u)})}(a.target.classList.contains("modal-overlay")||a.target.closest(".modal-card-close-button"))&&r()}),document.addEventListener("keydown",a=>{a.key==="Escape"&&!t.classList.contains("hidden")&&r()})});document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".modal-page");document.addEventListener("click",e=>{const s=t.querySelector(".favorite-button");if(s&&(e.target===s||s.contains(e.target))){const d=s.getAttribute("data-exerciseid");d&&(ie(d)?(ae(d),s.querySelector("span").textContent="Add to favorites",s.querySelector("use").setAttribute("fill","none")):($e(d),s.querySelector("span").textContent="Remove favorite",s.querySelector("use").setAttribute("fill","black")))}if(!e.target.matches(".rating-button"))return;const r=e.target.dataset.exerciseid,a=document.querySelector(".exercise-modal-card"),i=Te();Ie(a),t.append(i);const n=i.querySelectorAll(".rating-modal__stars span"),u=i.querySelector(".rating-modal__value"),l=i.querySelector(".rating-modal__hidden-rating"),o=i.querySelector(".rating-modal__form");let c=0;n.forEach(d=>{d.addEventListener("mouseenter",()=>O(n,parseInt(d.dataset.value,10))),d.addEventListener("mouseleave",()=>O(n,c)),d.addEventListener("click",()=>{c=parseInt(d.dataset.value,10),l.value=c,u.textContent=c.toFixed(1),O(n,c)})}),o.addEventListener("submit",async d=>{var J,V;d.preventDefault();const y=parseInt(l.value),U=o.querySelector(".rating-modal__email").value.trim(),G=o.querySelector(".rating-modal__comment").value.trim();if(!y||!U||!G){g.error({title:"Помилка",message:"Всі поля повинні бути заповнені"});return}try{await Ee(r,y,U,G),g.success({title:"Успіх",message:"Ви упсішно відправили рейтинг"}),i.remove(),a.style.display="block"}catch(pe){g.error({title:"Помилка",message:((V=(J=pe.response)==null?void 0:J.data)==null?void 0:V.message)||"Щось пішло не так"})}})})});function Ie(t,e){t.style.display="none"}function O(t,e){t.forEach(s=>{const r=parseInt(s.dataset.value,10);s.querySelector("svg use").setAttribute("href",`${m}#${r<=e?"star-active":"star-inactive"}`)})}function Te(){const t=document.createElement("div");return t.className="rating-modal-card",t.innerHTML=`
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
    `,t}async function Pe(){const t=JSON.parse(localStorage.getItem("quoteDay")),e=new Date().toISOString().split("T")[0];if((t==null?void 0:t.currentDate)===e){z(t.data);return}try{const{data:s}=await f.get(`${ee}/quote`),r={data:s,currentDate:e};localStorage.setItem("quoteDay",JSON.stringify(r)),z(s)}catch(s){console.error("Error fetching the quote:",s)}}function z({quote:t,author:e}){document.querySelector(".js-quote").innerHTML=`
    <p class="quote-text">"${t}"</p>
    <p class="quote-signature">- ${e}</p>
  `}document.addEventListener("DOMContentLoaded",Pe);const Y={0:m+"#two-angle-left",1:m+"#one-angle-left",6:m+"#one-angle-right",7:m+"#two-angle-right"},ke=(t,e)=>{const s=[];if(t<4)for(let r=0;r<4;r++)s.push(1+r);if(e-t<3&&s.length===0)for(let r=0;r<4;r++)s.unshift(e-r);if(s.length===0)for(let r=-1;r<3;r++)s.push(t+r);s[3]<e&&(s[3]=0),s[3]===e&&s[0]!=1&&(s[0]=0);for(let r=0;r<4;r++)s[r]>e&&(s[r]=-1);return s.unshift(t>1?t-1:-1),s.unshift(t>1?1:-1),s.push(t<e?t+1:-1),s.push(t<e?e:-1),s},_e=(t,e)=>{const s=ke(t,e),r=new Set([0,1]),a=new Set([6,7]),i=r.union(a);return s.map((n,u)=>[u,n,i.has(u)?"":n===0?"...":n>0?n:"",n===t||r.has(u)&&t!=1||a.has(u)&&t!=e,i.has(u)||n===t])},Me=t=>Y.hasOwnProperty(t)?`<svg width="20" height="20"><use href="${Y[t]}"></use></svg>`:"",Ae=(t,e,s,r,a)=>`<li class="pagination-item${r?" accent":""}${a?" outline":""}${e===-1&&!a?" hidden-btn":""}" data-page="${e}">${s}${Me(t)}</li>`,Oe=(t,e)=>e<2?"":_e(t,e).reduce((r,a)=>r+Ae(...a),""),Re=(t,e)=>`<ul class="pagination">${Oe(t,e)}</ul>`,Ne=(t,...e)=>s=>{s.preventDefault();const r=s.currentTarget;if(s.target===s.currentTarget)return;const a=Number(s.target.closest("li").getAttribute("data-page"));if(a<1)return;r.remove();let i=Array.from(...e);i.splice(-1,1,a),t.apply(null,i)},j=(t,e,s,r,...a)=>{const i=document.querySelector(t);i.innerHTML=Re(e,s),i.firstChild.addEventListener("click",Ne(r,a))},ne=t=>{const e=document.querySelector(t);e.firstChild&&e.firstChild.remove()},oe=()=>{const t=window.innerWidth;return t<768?"mobile":t<1440?"tablet":"desktop"},Be=()=>ve[oe()],ce=()=>fe[oe()];class k{constructor(){this.exercises=[],this.page=0,this.perPage=10,this.totalPages=0}addExercise(e){this.exercises.push(e)}static async fetchWithFilters(e){const r=(await Le(e.toParams())).data,a=new k;return a.page=r.page,a.perPage=r.perPage,a.totalPages=r.totalPages,r.results.forEach(i=>{const n=new $(i._id,i.bodyPart,i.equipment,i.gifUrl,i.name,i.target,i.description,i.rating,i.burnedCalories,i.time,i.popularity);a.addExercise(n)}),a}render(e=!0,s=!1){const r=document.createElement("div");return r.className="exercise-list",this.exercises.forEach(a=>{r.appendChild(a.render(e,s))}),r}}const S=Object.freeze({MUSCLES:"muscles",BODY_PART:"bodypart",EQUIPMENT:"equipment"});class je{constructor({bodypart:e,muscles:s,equipment:r,keyword:a,page:i=1,limit:n=10}={}){this.bodypart=e,this.muscles=s,this.equipment=r,this.keyword=a,this.page=i,this.limit=n}addFilter(e,s){switch(e){case S.MUSCLES:this.muscles=s;break;case S.BODY_PART:this.bodypart=s;break;case S.EQUIPMENT:this.equipment=s;break}}addKeyword(e){this.keyword=e}toParams(){const e={};return this.bodypart&&(e.bodypart=this.bodypart),this.muscles&&(e.muscles=this.muscles),this.equipment&&(e.equipment=this.equipment),this.keyword&&(e.keyword=this.keyword),e.page=this.page,e.limit=this.limit,e}}const v=document.querySelector(".exercise-container");let E=new k;const le=async(t,e=1)=>{try{te(),t.page=e,E=await k.fetchWithFilters(t);const s=E.render(!0,!1);v.innerHTML="",v.appendChild(s),j(".pagination-container",E.page,E.totalPages,le,t,E.page),e!=1&&v.scrollIntoView({behavior:"smooth"})}catch(s){console.error(s)}finally{se()}};function F(t,e,s=null){const r=new je({page:1,limit:ce()});s&&r.addKeyword(s),r.addFilter(t,e),le(r),v.classList.add("active")}function Fe(){v.innerHTML="",v.classList.contains("active")&&v.classList.remove("active"),ne(".pagination-container")}const w=document.querySelector(".category-list"),T=document.querySelector(".category-container"),He=t=>t.reduce((e,s)=>e+`<li class="category-card" data-name="${s.name}" data-filter="${s.filter}">
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
          </li>`,""),H=async(t,e)=>{try{te();const s=await ye(t,e,Be()),{page:r,totalPages:a,results:i}=s.data;i.length===0&&(w.innerHTML=""),w.innerHTML=He(i),w.addEventListener("click",de),T.classList.add("active"),Fe(),j(".pagination-container",e,a,H,t,r),e!=1&&T.scrollIntoView({behavior:"smooth"})}catch(s){console.log(s)}finally{se()}},De=()=>{w.innerHTML="",ne(".pagination-container"),w.removeEventListener("click",de),T.classList.remove("active")},de=t=>{if(t.preventDefault(),t.target===t.currentTarget)return;const e=t.target.closest("li"),s=e.getAttribute("data-filter"),r=e.getAttribute("data-name");De(),F(Ue(s),r),We(s,r)},Ue=t=>{var e=t.toLowerCase();return e==="body parts"&&(e="bodypart"),Object.values(S).find(s=>s===e)};T&&H("Muscles",1);const K=document.querySelectorAll(".filter-tab-button"),ue=document.querySelector(".filter-form-container"),Q=document.querySelector(".search-button"),R=document.querySelector(".cansel-search-button"),x=document.querySelector(".search-string"),me=document.querySelector(".additional-title-filter"),ge=document.querySelector(".slash-in-filter");var _="",M="",N="";const Ge={"button-muscles":"Muscles","button-bodypart":"Body parts","button-equipment":"Equipment"};x&&x.addEventListener("input",function(){R.style.display=this.value.length>0?"block":"none"});R&&R.addEventListener("click",function(){x.value="",this.style.display="none",F(he(_),M)});K.forEach(t=>{t.addEventListener("click",e=>{if(e.preventDefault(),Ve(),e.target&&e.target.matches("button.filter-tab-button")){K.forEach(a=>{a.classList.remove("active")}),t.classList.add("active");const s=e.target.id,r=Ge[s];H(r,1)}})});Q&&Q.addEventListener("click",t=>{t.preventDefault(),N=x.value,F(he(_),M,N)});function he(t){var e=t.toLowerCase();return e==="body parts"&&(e="bodypart"),Object.values(S).find(s=>s===e)}function Je(t){ge.style.display="inline",me.textContent=t}function Ve(){ge.style.display="none",ue.style.display="none",me.textContent="",Ye()}function We(t,e){ze(t,e),Je(e),ue.style.display="block"}function ze(t,e){_=t,M=e}function Ye(){_="",M="",x.value="",N=""}const Z=async t=>await f.get(`https://your-energy.b.goit.study/api/exercises/${t}`),X=t=>t.map(e=>`<li class="list-card-item" data-id="${e._id}">
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
      </li>`).join(""),p=document.querySelector(".fav-list-card"),b=document.querySelector(".fav-text-default");let q="",C=[],h=[];window.location.pathname.endsWith("/favorites.html")&&p.addEventListener("click",t=>{if(t.target.closest(".btn-trash")){const e=t.target.closest(".list-card-item").dataset.id;ae(e)?g.success({title:"OK",message:"Exercise removed!",position:"topRight"}):g.error({title:"Error",message:"Exercise is not removed!",position:"topRight"}),D()}});const D=async(t=1)=>{re(),h=qe();const e=Math.ceil(h.length/10),s=ce();let r=t,a=(t-1)*s,i=0;if(h.length===0){p.innerHTML="",I(),b.classList.contains("is-visible")&&b.classList.remove("is-visible");return}else try{if(j(".pagination-container",r,e,D,r),h.length<10){C=(await Promise.all(h.map(c=>Z(c)))).map(c=>c.data),q=X(C),b.classList.contains("is-visible")||b.classList.add("is-visible"),I(),p.innerHTML="",p.insertAdjacentHTML("beforeend",q);return}const n=h.length-a;if(n===0)return;i=n<s?n:s;const u=h.slice(a,i+a);a+=i,C=(await Promise.all(u.map(o=>Z(o)))).map(o=>o.data),q=X(C),b.classList.contains("is-visible")||b.classList.add("is-visible"),I(),p.innerHTML="",p.insertAdjacentHTML("beforeend",q)}catch(n){g.error({title:"Error",message:`${n.message}`,position:"topRight"})}};p&&D();document.addEventListener("click",t=>{if(t.target.closest(".exercise-start-btn")){const e=t.target.closest(".list-card-item").dataset.id;e&&$.fetchById(e).then(s=>{const r=document.querySelector(".modal-overlay"),a=document.querySelector(".modal-page"),i=document.body;a.innerHTML="",a.append(s.renderCard()),r.classList.remove("hidden"),a.classList.remove("hidden"),i.classList.add("no-scroll")}).catch(s=>{console.error("Error fetching exercise:",s)})}});document.addEventListener("click",t=>{if(t.target.classList.contains("modal-overlay")||t.target.closest(".modal-card-close-button")){const e=document.querySelector(".modal-overlay"),s=document.querySelector(".modal-page"),r=document.body;e.classList.add("hidden"),s.classList.add("hidden"),s.innerHTML="",r.classList.remove("no-scroll")}});function Ke(){const t=document.querySelector(".js-header-nav-list"),e=document.querySelector(".logo"),s=document.querySelector(".menu-btn"),r=document.querySelector(".close-btn-menu"),a=document.querySelector(".mobile-menu-backdrop"),i=document.querySelectorAll(".menu-item");s&&s.addEventListener("click",()=>{a.classList.add("is-open")}),r&&r.addEventListener("click",()=>{a.classList.remove("is-open")}),i&&i.forEach(l=>{l.addEventListener("click",()=>{a.classList.remove("is-open")})});const n=window.location.pathname;(()=>{const l=localStorage.getItem("activePath")||"./index.html";t.querySelectorAll(".nav-link").forEach(o=>{const c=o.closest(".nav-item");o.getAttribute("href")===l||o.getAttribute("href")===n||n==="/"&&o.getAttribute("href")==="./index.html"?(o.classList.add("js-nav-link-active"),c.classList.add("js-nav-item-active")):(o.classList.remove("js-nav-link-active"),c.classList.remove("js-nav-item-active"))})})(),t.addEventListener("click",l=>{const o=l.target.closest(".nav-link");if(!o)return;const c=o.closest(".nav-item");t.querySelectorAll(".js-nav-link-active").forEach(d=>{d.classList.remove("js-nav-link-active")}),t.querySelectorAll(".js-nav-item-active").forEach(d=>{d.classList.remove("js-nav-item-active")}),o.classList.add("js-nav-link-active"),c.classList.add("js-nav-item-active"),localStorage.setItem("activePath",o.getAttribute("href"))}),e.addEventListener("click",()=>{t.querySelectorAll(".js-nav-link-active").forEach(c=>{c.classList.remove("js-nav-link-active")}),t.querySelectorAll(".js-nav-item-active").forEach(c=>{c.classList.remove("js-nav-item-active")});const l=t.querySelector('.nav-link[href="./index.html"]'),o=l==null?void 0:l.closest(".nav-item");l&&o&&(l.classList.add("js-nav-link-active"),o.classList.add("js-nav-item-active")),localStorage.setItem("activePath","./index.html")})}Ke();document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".footer__form");t&&t.addEventListener("submit",async function(e){e.preventDefault();const s=document.querySelector(".footer__input"),r=s.value.trim();if(!/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(r)){g.error({title:"Error",message:"Please enter a valid email address.",position:"bottomRight"});return}try{const i=await fetch("https://your-energy.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:r})}),n=await i.json();i.status===201?g.success({title:"Success",message:n.message||"We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Your Energy. You've just taken a significant step towards improving your fitness and well-being.",position:"topRight"}):i.status===400?g.warning({title:"Warning",message:n.message||"Incorrect data. Please check your email.",position:"topRight"}):i.status===409?g.warning({title:"Warning",message:n.message||"This email has already been subscribed.",position:"topRight"}):g.error({title:"Error",message:n.message||"There was an error. Please try again later.",position:"topRight"})}catch{g.error({title:"Error",message:"Could not connect to the server. Please try again later.",position:"topRight"})}s.value=""})});const B=document.querySelector(".scroll-up-btn");window.addEventListener("scroll",()=>{window.scrollY>0?B.classList.add("visible"):B.classList.remove("visible")});B.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=main-ZFZv7vxB.js.map
