import{r as i,j as o,E as B}from"./vendor-react-DpEvKUaE.js";import{C as S}from"./ChartButtonBox-C7S_ychF.js";import{C as H,a as O,S as b}from"./index-BXhbggzP.js";import"./vendor-echarts-BUbrvsb8.js";import"./vendor-@sentry-D7IO1rHj.js";import"./vendor-prosemirror-B74nKu9v.js";import"./vendor-lodash-Cj7XC0Qe.js";const F=300,M=.7,k=.5,w=.3,h=["Recruit","Prospect","Contender","Challenger","Elite","Premier"];function W({playerData:l=[]}){const[v,A]=i.useState([]),[x,L]=i.useState([]),[n,j]=i.useState("mmr"),f=t=>{j(t)},y=i.useCallback((t,e,u,c)=>t>=e||t<=-e?"red":t>=u||t<=-u?"orange":t>=c||t<=-c?"yellow":"green",[]),p=i.useMemo(()=>l.length>0&&l[0].stats?Object.keys(l[0].stats):[],[l]);return i.useEffect(()=>{(async()=>{const t=navigator.hardwareConcurrency||4,e=Math.ceil(h.length/t),c=Array.from({length:t},(r,s)=>h.slice(s*e,s*e+e)).map((r,s)=>{const m=new Worker("./correlation-worker.js");return m.postMessage({playerData:l,tiers:r,statsKeys:p,ratingKey:n}),m}),a=await Promise.all(c.map(r=>new Promise((s,m)=>{const E=d=>{r.removeEventListener("message",E),r.terminate(),Array.isArray(d.data)&&d.data.every(g=>Array.isArray(g)&&g.length===2&&typeof g[0]=="string"&&Array.isArray(g[1])&&g[1].every(R=>typeof R=="number"||R===void 0))?s(d.data):m(new Error("Invalid data format from worker."))},C=d=>{r.removeEventListener("error",C),r.terminate(),m(d.message)};r.addEventListener("message",E),r.addEventListener("error",C)})));L(a.flat())})()},[l,p,n]),i.useEffect(()=>{const t=p.map((e,u)=>{if(e!=="rating"){const c=x.map(([a,r])=>{const s=r[u];if(typeof s=="number")return{value:s,itemStyle:{color:y(s,M,k,w)}}}).filter(a=>a!==void 0);return{title:{text:`Correlation - ${n==="mmr"?n.toUpperCase():n.charAt(0).toUpperCase()+n.slice(1)} and ${e}`,left:"5%",top:"5%",textStyle:{align:"center",color:"#FFFFFF"}},xAxis:{type:"category",data:h,axisLabel:{interval:0,rotate:45}},yAxis:{type:"value",name:""},tooltip:{trigger:"axis",formatter:function(a){return`${a[0].axisValueLabel}: ${a[0].value.toFixed(2)}`}},grid:{left:"5%",right:"5%",top:"20%",bottom:"5%",containLabel:!0},series:[{type:"bar",data:c}]}}return null}).filter(e=>e!==null);A(t)},[x,y,p,n]),o.jsxs(o.Fragment,{children:[o.jsxs(H,{children:[o.jsx(S,{isSelected:n==="mmr",onClick:()=>f("mmr"),children:"MMR"}),o.jsx(S,{isSelected:n==="rating",onClick:()=>f("rating"),children:"Rating"})]}),o.jsx(O,{children:v.map(t=>o.jsx(b,{children:o.jsx(B,{option:t,className:"w-full",style:{height:F},notMerge:!0})},`chart-${t.title.text}`))})]})}export{W as CorrelationByTier};
