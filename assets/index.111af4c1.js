import{c as k,p,s as u,T as I,F as L,S as C,r as f,a as R,h as E,j as b,b as M,d as n,G as O,e as W,f as _,g as T,v as j,n as N,R as F,i as P}from"./vendor.782ff5c9.js";const A=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}};A();var $="./assets/timer.77629890.mp3",z="./assets/icon-128.bd0cbde7.png";const B=k({palette:{primary:{main:p[500]}}}),D=u("div")({height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}),G=u("div")({userSelect:"none"}),K=u(I)({userSelect:"none",fontWeight:"normal",fontFamily:"'Roboto Mono', mono-space"}),U=u(L)({marginTop:"1em",background:p[500],"&:hover":{background:p[700]}}),v="0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)",q=u(C)(()=>({color:"#3880ff",height:10,width:"80%",maxWidth:"600px",padding:"40px 0","& .MuiSlider-thumb":{height:28,width:28,backgroundColor:"#fff",boxShadow:v,"&:focus, &:hover, &.Mui-active":{boxShadow:"0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)","@media (hover: none)":{boxShadow:v}}},"& .MuiSlider-track":{height:10,opacity:.7,border:"none",borderRadius:4,backgroundColor:p[500]},"& .MuiSlider-rail":{height:10,opacity:.5,backgroundColor:"#bfbfbf",borderRadius:4}})),H=()=>{const[s,c]=f.exports.useState(18e4),[i,a]=f.exports.useState(!1),[e,t]=f.exports.useState(!1),o=new R,d=new E.Howl({src:$}),g=()=>c(l=>l-1e3),r=l=>{const m=Math.floor(l/36e5),x=Math.floor((l-36e5*m)/6e4),S=("00"+x).slice(-2),w=("00000"+l%6e4).slice(-5);return`${S}:${w.slice(0,2)}`},h=(l,m)=>{l.target&&c(Number(m))},y=()=>{!e&&s<=0||(!i&&!e?(a(!0),o.enable()):(a(!1),o.disable(),console.log("Wake Lock disabled.")),e&&(t(!1),d.stop()))};return f.exports.useEffect(()=>{if(i&&s>0){const l=setInterval(()=>g(),1e3);return()=>clearInterval(l)}}),f.exports.useEffect(()=>{i&&s<=0&&(t(!0),a(!1))},[i,s]),f.exports.useEffect(()=>{e&&d.play()}),b(M,{theme:B,children:[n(O,{styles:{body:{margin:0,color:"#fff",backgroundColor:"#4a148c"}}}),b(D,{children:[n(G,{children:n("img",{src:z,alt:""})}),n(K,{variant:"h1",children:r(s)}),n(q,{max:1e3*60*6,min:0,step:5e3,value:s,onChange:h}),n("div",{children:n(U,{"aria-label":"start",color:"secondary",onClick:y,children:i?n(W,{fontSize:"large"}):e?n(_,{fontSize:"large"}):n(T,{fontSize:"large"})})})]})]})};function J(s={}){const{immediate:c=!1,onNeedRefresh:i,onOfflineReady:a,onRegistered:e,onRegisterError:t}=s;let o,d;const g=async(r=!0)=>{r&&(o==null||o.addEventListener("controlling",h=>{h.isUpdate&&window.location.reload()})),d&&d.waiting&&await N(d.waiting,{type:"SKIP_WAITING"})};if("serviceWorker"in navigator){o=new j("./sw.js",{scope:"./",type:"classic"}),o.addEventListener("activated",r=>{r.isUpdate||a==null||a()});{const r=()=>{i==null||i()};o.addEventListener("waiting",r),o.addEventListener("externalwaiting",r)}o.register({immediate:c}).then(r=>{d=r,e==null||e(r)}).catch(r=>{t==null||t(r)})}return g}F.render(n(P.StrictMode,{children:n(H,{})}),document.getElementById("root"));J();
