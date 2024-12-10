import{a as h,S as b,i as a}from"./assets/vendor-DEenWwFD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function c(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=c(e);fetch(e.href,o)}})();const C=async(s,t,c)=>(await h.get("https://pixabay.com/api/",{params:{key:"47412698-017a3cc161c8c283fa818e1a7",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:c,page:t}})).data,w=s=>s.map(t=>`
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
    `).join(""),u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgBrZXtEcIgDIZTzp5/3URHcSPpJLpBXcVd+FPwiqQt1y+SUNv3DuUkvA+0SQQg5Jx7WOt8zsBYyudEmXsPuijg3bbtB1ipa/jQYQ+UZVmBpHjyprEvyBTGSjf52zwbssdchBxhTkI4c2vtTTJMxcwgw6RObZReXDycMSYBcTWuQX/6RqcMQpCmIOPNHbG30SKAgkjmU8AJBJ3PpQ5GOO2KCYVFGEaFa9J+EbCEDIAsc5SCTCkFPjWXlHWD2Jvw5MNP2b1HBEzN42OZvhMRwmURly1cCvfrszSlC41PxR6SKjQs3g4Qg6z9PpdBxsitIhWDXrPDcZCtWplHHQEhzY+AiOZ7IJz5qg5iWygK/wjfFwD+T18pdfXe37e0j07jTeTBPZYfWztI8097RKsAAAAASUVORK5CYII=",g=document.querySelector(".form"),n=document.querySelector("ul.gallery"),r=document.querySelector(".loader"),l=document.querySelector(".button-search-more"),S=document.querySelector("section");let v=new b(".galery a",{captionsData:"alt",captionDelay:250});a.settings({timeout:4e3,position:"topRight"});a.show({title:"Hey⭐️",message:"What are you looking?",backgroundColor:"#ffffff",messageColor:"#000",titleColor:"#000",iconColor:"#ffffff",timeout:7e3});let f=1,y=15,m="",p=0;const A=s=>{s&&(f=1),C(m,f,y).then(({hits:t,totalHits:c})=>{p=Math.ceil(c/y),s&&(n.innerHTML="",l.style.visibility="hidden");const i=w(t);if(i&&(r.style.display="none"),t.length===0){a.error({iconUrl:u,iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:"Sorry, there are no images matching your search query. Please try again!"}),r.style.display="none",n.innerHTML="";return}if(s?n.innerHTML=i:n.insertAdjacentHTML("beforeend",i),f+=1,f>p){r.style.display="none",l.style.visibility="hidden",p>0&&a.info({iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:"We're sorry, but you've reached the end of search results."});return}l.style.visibility="visible",l.style.display="block";const e=document.querySelector(".gallery-item");if(e){const{y:o}=e.getBoundingClientRect();window.scrollBy({top:-o*2,behavior:"smooth"})}v.refresh(),g.reset()}).catch(t=>{r.style.display="none",n.innerHTML="",a.error({iconUrl:u,iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:t.message})})},L=s=>{if(s.preventDefault(),n.innerHTML="",r.style.display="block",m=s.target.elements.search.value.trim(),m===""){a.error({iconUrl:u,iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:"Please write a query for search"}),n.innerHTML="",r.style.display="none";return}A(!0),s.target.elements.search.value=""},T=()=>{l.style.display="none",r.style.display="block",S.insertAdjacentElement("beforeend",r),A(!1)};g.addEventListener("submit",L);l.addEventListener("click",T);
//# sourceMappingURL=index.js.map
