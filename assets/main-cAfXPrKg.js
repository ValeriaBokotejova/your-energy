import{a as d}from"./vendor-N5iQpiFS.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const e of s)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function a(s){const e={};return s.integrity&&(e.integrity=s.integrity),s.referrerPolicy&&(e.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?e.credentials="include":s.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(s){if(s.ep)return;s.ep=!0;const e=a(s);fetch(s.href,e)}})();const v="https://your-energy.b.goit.study/api",g={mobile:9,tablet:12,desktop:12};d.defaults.baseURL=v;const p=(t,o,a)=>{const i={filter:t,page:o,limit:a};return d.get("/filters",{params:i})},u=()=>{const t=window.innerWidth;return t<768?"mobile":t<1440?"tablet":"desktop"},y=()=>g[u()],n=document.querySelector(".category-list"),m=document.querySelector(".category-container"),h=t=>t.reduce((o,a)=>o+`<li class="category-card" data-name="${a.name}" data-filter="${a.filter}">
      <img class="gallery-image"
           src="${a.imgURL}"
           alt="${a.name}"/>
            <div class="category-title">
              <h3>${a.name}</h3>
              <p>${a.filter}</p>
            </div>
          </li>`,""),b=async(t,o)=>{try{const a=await p(t,o,y()),{page:i,perPage:s,totalPages:e,results:r}=a.data;return r.length===0?(console.log("There are no categories for the specified filter"),{page:i,perPage:s,totalPages:e}):(n.innerHTML=h(r),n.addEventListener("click",f),m.classList.add("active"),{page:i,perPage:s,totalPages:e})}catch(a){console.log(a)}},L=()=>{n.innerHTML="",n.removeEventListener("click",f),m.classList.remove("active")},f=t=>{if(t.preventDefault(),console.log(u()),t.target===t.currentTarget)return;const o=t.target.closest("li"),a=o.getAttribute("data-filter"),i=o.getAttribute("data-name");L(),console.log(`Execute function for rendering exercises (${a}; ${i})`)},E=document.querySelector(".fav-list-card"),j=[1,2,3,4,5,6,7,8],S=j.map(t=>`<li class="list-card-item" data-id="${t}">
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
              </li>`);E.insertAdjacentHTML("beforeend",S.join(""));function A(){const t=document.querySelector(".js-header-nav-list"),o=document.querySelector(".logo");document.querySelector(".menu-btn").addEventListener("click",()=>{alert("Mobile menu will be added soon, enjoy ;)")});const i=localStorage.getItem("activePath"),s=window.location.pathname;t.querySelectorAll(".nav-link").forEach(e=>{const r=e.closest(".nav-item");e.getAttribute("href")===i||e.getAttribute("href")===s||s==="/"&&e.getAttribute("href")==="./index.html"?(e.classList.add("js-nav-link-active"),r.classList.add("js-nav-item-active")):(e.classList.remove("js-nav-link-active"),r.classList.remove("js-nav-item-active"))}),t.addEventListener("click",e=>{const r=e.target.closest(".nav-link");if(!r)return;const c=r.closest(".nav-item");t.querySelectorAll(".js-nav-link-active").forEach(l=>{l.classList.remove("js-nav-link-active")}),t.querySelectorAll(".js-nav-item-active").forEach(l=>{l.classList.remove("js-nav-item-active")}),r.classList.add("js-nav-link-active"),c.classList.add("js-nav-item-active"),localStorage.setItem("activePath",r.getAttribute("href"))}),o.addEventListener("click",()=>{t.querySelectorAll(".js-nav-link-active").forEach(c=>{c.classList.remove("js-nav-link-active")}),t.querySelectorAll(".js-nav-item-active").forEach(c=>{c.classList.remove("js-nav-item-active")});const e=t.querySelector('.nav-link[href="./index.html"]'),r=e==null?void 0:e.closest(".nav-item");e&&r&&(e.classList.add("js-nav-link-active"),r.classList.add("js-nav-item-active")),localStorage.setItem("activePath","./index.html")})}A();b("Muscles",1).then(t=>console.log(`Execute function for pagination with parameter ${JSON.stringify(t)}`)).catch(t=>console.log(t));
//# sourceMappingURL=main-cAfXPrKg.js.map
