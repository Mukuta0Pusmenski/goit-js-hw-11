import{i as a}from"./assets/vendor-BYmtYhA6.js";import"jquery";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const c="47345734-08f76e4fa789f0ddb3136f311";async function l(n){const t=await fetch(`https://pixabay.com/api/?key=${c}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true`);if(!t.ok)throw new Error("Failed to fetch images");return t.json()}function u(n,t){t.innerHTML=n.map(o=>`
        <div class="image-item">
            <img src="${o.webformatURL}" alt="${o.tags}">
            <div class="image-stats">
                <p>Likes: ${o.likes}</p>
                <p>Views: ${o.views}</p>
                <p>Comments: ${o.comments}</p>
                <p>Downloads: ${o.downloads}</p>
            </div>
        </div>
    `).join("")}const d=document.getElementById("search-form"),m=document.getElementById("search-input"),f=document.getElementById("image-results");d.addEventListener("submit",async n=>{n.prevent.preventDefault();const t=m.value.trim();if(!t||!/^[a-zA-Z0-9\s]+$/.test(t)){a.error({title:"Error",message:"Invalid search query. Please enter a valid search term."});return}try{const s=await l(t);if(console.log(s),s.hits.length===0){a.error({title:"Sorry",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",position:"center",timeout:5e3});return}u(s.hits,f)}catch(s){a.error({title:"Error",message:`An error occurred: ${s.message}`})}});
//# sourceMappingURL=index.js.map
