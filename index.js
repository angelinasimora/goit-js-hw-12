import{a as h,S as b,i as a}from"./assets/vendor-DEenWwFD.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function c(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=c(t);fetch(t.href,o)}})();const C=async(s,e,c)=>(await h.get("https://pixabay.com/api/",{params:{key:"47412698-017a3cc161c8c283fa818e1a7",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:c,page:e}})).data,S=s=>s.map(e=>`
    <li class='gallery-item'>
      <a href=${e.largeImageURL}>
        <img alt=${e.tags} src=${e.webformatURL} class='gallery-image'/>
      </a>
      <ul class='list-info'>
        <li class='item-info'>
          <p class='title-info'>Likes</p>
          <p class='count-info'>${e.likes}</p>
        </li>
        <li class='item-info'>
          <p class='title-info'>Views</p>
          <p class='count-info'>${e.views}</p>
        </li>
        <li class='item-info'>
          <p class='title-info'>Comments</p>
          <p class='count-info'>${e.comments}</p>
        </li>
        <li class='item-info'>
          <p class='title-info'>Downloads</p>
          <p class='count-info'>${e.downloads}</p>
        </li>
      </ul>
    </li>
    `).join(""),u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgBrZXtEcIgDIZTzp5/3URHcSPpJLpBXcVd+FPwiqQt1y+SUNv3DuUkvA+0SQQg5Jx7WOt8zsBYyudEmXsPuijg3bbtB1ipa/jQYQ+UZVmBpHjyprEvyBTGSjf52zwbssdchBxhTkI4c2vtTTJMxcwgw6RObZReXDycMSYBcTWuQX/6RqcMQpCmIOPNHbG30SKAgkjmU8AJBJ3PpQ5GOO2KCYVFGEaFa9J+EbCEDIAsc5SCTCkFPjWXlHWD2Jvw5MNP2b1HBEzN42OZvhMRwmURly1cCvfrszSlC41PxR6SKjQs3g4Qg6z9PpdBxsitIhWDXrPDcZCtWplHHQEhzY+AiOZ7IJz5qg5iWygK/wjfFwD+T18pdfXe37e0j07jTeTBPZYfWztI8097RKsAAAAASUVORK5CYII=",g=document.querySelector(".form"),n=document.querySelector("ul.gallery"),r=document.querySelector(".loader"),l=document.querySelector(".button-search-more"),w=document.querySelector("section");let L=new b(".galery a",{captionsData:"alt",captionDelay:250});a.settings({timeout:4e3,position:"topRight"});a.show({title:"Hey!",message:"What are you looking?",backgroundColor:"#ffffff",messageColor:"#000",titleColor:"#000",iconColor:"#ffffff",timeout:7e3,onOpening:function(){document.querySelector(".iziToast").classList.add("heart-toast")}});let f=1,y=15,m="",p=0;const A=s=>{s&&(f=1),C(m,f,y).then(({hits:e,totalHits:c})=>{p=Math.ceil(c/y),s&&(n.innerHTML="",l.style.visibility="hidden");const i=S(e);if(i&&(r.style.display="none"),e.length===0&&(a.error({iconUrl:u,iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:"Sorry, there are no images matching your search query. Please try again!"}),r.style.display="none",n.innerHTML=""),f+=1,s?n.innerHTML=i:n.insertAdjacentHTML("beforeend",i),l.style.visibility="visible",l.style.display="block",f+1>p)return r.style.display="none",l.style.visibility="hidden",p===0?void 0:a.info({iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:"We're sorry, but you've reached the end of search results."});const t=document.querySelector(".gallery-item"),{y:o}=t.getBoundingClientRect();window.scrollBy({top:-o*2,behavior:"smooth"}),L.refresh(),g.reset()}).catch(e=>{r.style.display="none",n.innerHTML="",a.error({iconUrl:u,iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:e.message})})},v=s=>{if(s.preventDefault(),n.innerHTML="",r.style.display="block",m=s.target.elements.search.value.trim(),m===""){a.error({iconUrl:u,iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:"Please write a query for search"}),n.innerHTML="",r.style.display="none";return}A("first")},T=()=>{l.style.display="none",r.style.display="block",w.insertAdjacentElement("beforeend",r),A()};g.addEventListener("submit",v);l.addEventListener("click",T);
//# sourceMappingURL=index.js.map
