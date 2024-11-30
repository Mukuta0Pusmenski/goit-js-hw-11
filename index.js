import{i as c,S as d}from"./assets/vendor-JrXZsd1Y.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const m="47345734-08f76e4fa789f0ddb3136f311";async function u(n){const r=await fetch(`https://pixabay.com/api/?key=${m}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true`);if(!r.ok)throw new Error("Failed to fetch images");return r.json()}function f(n,r){r.innerHTML=n.map(t=>`
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
    `).join("")}const p=document.getElementById("search-form"),y=document.getElementById("search-input"),l=document.getElementById("image-results"),i=document.getElementById("loader");p.addEventListener("submit",async n=>{n.preventDefault();const r=y.value.trim();if(!r||!/^[a-zA-Z0-9\s]+$/.test(r)){c.error({title:"Error",message:"Invalid search query. Please enter a valid search term."});return}i.style.display="block",l.innerHTML="";try{const s=await u(r);if(s.hits.length===0){c.error({title:"Sorry",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",position:"center",timeout:5e3}),i.style.display="none";return}f(s.hits,l),new d(".image-item a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh(),i.style.display="none"}catch(s){c.error({title:"Error",message:`An error occurred: ${s.message}`}),i.style.display="none"}});
//# sourceMappingURL=index.js.map
