import{i as a}from"./assets/vendor-BYmtYhA6.js";import"jquery";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const c="47345734-08f76e4fa789f0ddb3136f311";async function l(n){const r=await fetch(`https://pixabay.com/api/?key=${c}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true`);if(!r.ok)throw new Error("Failed to fetch images");return r.json()}function d(n,r){r.innerHTML=n.map(t=>`
        <div class="image-item">
            <a href="${t.largeImageURL}" data-lightbox="image-gallery" data-title="Likes: ${t.likes}, Views: ${t.views}, Comments: ${t.comments}, Downloads: ${t.downloads}">
                <img src="${t.webformatURL}" alt="${t.tags}">
            </a>
            <div class="image-stats">
                <p>Likes: ${t.likes}</p>
                <p>Views: ${t.views}</p>
                <p>Comments: ${t.comments}</p>
                <p>Downloads: ${t.downloads}</p>
            </div>
        </div>
    `).join("")}const u=document.getElementById("search-form"),m=document.getElementById("search-input"),f=document.getElementById("image-results");u.addEventListener("submit",async n=>{n.preventDefault();const r=m.value.trim();if(!r||!/^[a-zA-Z0-9\s]+$/.test(r)){a.error({title:"Error",message:"Invalid search query. Please enter a valid search term."});return}try{const s=await l(r);if(console.log(s),s.hits.length===0){a.error({title:"Sorry",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",position:"center",timeout:5e3});return}d(s.hits,f)}catch(s){a.error({title:"Error",message:`An error occurred: ${s.message}`})}});
//# sourceMappingURL=index.js.map
