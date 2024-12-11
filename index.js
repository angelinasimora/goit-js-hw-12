import{a as h,S as b,i as a}from"./assets/vendor-DEenWwFD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const p of o.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function c(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=c(e);fetch(e.href,o)}})();const C=async(s,t,c)=>(await h.get("https://pixabay.com/api/",{params:{key:"47412698-017a3cc161c8c283fa818e1a7",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:c,page:t}})).data,w=s=>s.map(t=>`
    <li class='gallery-item'>
      <a href=${t.largeImageURL}>
        <img alt=${t.tags} src=${t.webformatURL} class='gallery-image'/>
      </a>
      <ul class='list-info'>
        <li class='item-info'>
          <p class='title-info'>Likes</p>
          <p class='count-info'>${t.likes}</p>
        </li>
        <li class='item-info'>
          <p class='title-info'>Views</p>
          <p class='count-info'>${t.views}</p>
        </li>
        <li class='item-info'>
          <p class='title-info'>Comments</p>
          <p class='count-info'>${t.comments}</p>
        </li>
        <li class='item-info'>
          <p class='title-info'>Downloads</p>
          <p class='count-info'>${t.downloads}</p>
        </li>
      </ul>
    </li>
    `).join(""),d="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgBrZXtEcIgDIZTzp5/3URHcSPpJLpBXcVd+FPwiqQt1y+SUNv3DuUkvA+0SQQg5Jx7WOt8zsBYyudEmXsPuijg3bbtB1ipa/jQYQ+UZVmBpHjyprEvyBTGSjf52zwbssdchBxhTkI4c2vtTTJMxcwgw6RObZReXDycMSYBcTWuQX/6RqcMQpCmIOPNHbG30SKAgkjmU8AJBJ3PpQ5GOO2KCYVFGEaFa9J+EbCEDIAsc5SCTCkFPjWXlHWD2Jvw5MNP2b1HBEzN42OZvhMRwmURly1cCvfrszSlC41PxR6SKjQs3g4Qg6z9PpdBxsitIhWDXrPDcZCtWplHHQEhzY+AiOZ7IJz5qg5iWygK/wjfFwD+T18pdfXe37e0j07jTeTBPZYfWztI8097RKsAAAAASUVORK5CYII=",g=document.querySelector(".form"),i=document.querySelector("ul.gallery"),l=document.querySelector(".loader"),n=document.querySelector(".button-search-more");document.querySelector("section");let S=new b(".gallery a",{captionsData:"alt",captionDelay:250});a.settings({timeout:4e3,position:"topRight"});a.show({title:"Hey⭐️",message:"What are you looking?",backgroundColor:"#ffffff",messageColor:"#000",titleColor:"#000",iconColor:"#ffffff",timeout:7e3});let f=1,y=15,m="",u=0;const A=s=>{s&&(f=1),C(m,f,y).then(({hits:t,totalHits:c})=>{u=Math.ceil(c/y),s&&(i.innerHTML="",n.style.visibility="hidden");const r=w(t);if(r&&(l.style.display="none"),t.length===0){a.error({iconUrl:d,iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:"Sorry, there are no images matching your search query. Please try again!"}),l.style.display="none",i.innerHTML="";return}if(s?i.innerHTML=r:i.insertAdjacentHTML("beforeend",r),f+=1,f>u){l.style.display="none",n.style.visibility="hidden",u>0&&a.info({iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:"We're sorry, but you've reached the end of search results."});return}n.style.visibility="visible",n.style.display="block";const e=document.querySelector(".gallery-item");if(e){const{y:o}=e.getBoundingClientRect();window.scrollBy({top:-o*2,behavior:"smooth"})}S.refresh(),g.reset()}).catch(t=>{l.style.display="none",i.innerHTML="",a.error({iconUrl:d,iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:t.message})})},v=s=>{if(s.preventDefault(),i.innerHTML="",l.style.display="block",m=s.target.elements.search.value.trim(),m===""){a.error({iconUrl:d,iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:"Please write a query for search"}),i.innerHTML="",l.style.display="none";return}A(!0),s.target.elements.search.value=""},L=()=>{l.style.display="block",n.style.display="none",A(!1)};g.addEventListener("submit",v);n.addEventListener("click",L);
//# sourceMappingURL=index.js.map
