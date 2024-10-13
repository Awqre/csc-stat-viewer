import{r as m,j as t,P as f}from"./vendor-react-DpEvKUaE.js";import{u as g,n as u,m as N,T as F,b,o as d}from"./index-BXhbggzP.js";import"./vendor-echarts-BUbrvsb8.js";import"./vendor-@sentry-D7IO1rHj.js";import"./vendor-prosemirror-B74nKu9v.js";import"./vendor-lodash-Cj7XC0Qe.js";function v({selectedPlayers:c}){const[s,o]=m.useState(!1),{players:r,tiers:x}=g(),h=m.useMemo(()=>Array.from(c.filter(e=>e.stats).values()).map(e=>({...e,percentile:Object.assign({},...Object.keys(e.stats).map(i=>({[i]:+u(e,r,i)})))})),[c,r]),n=x.find(e=>{var i;return e.tier.name===((i=c[0])==null?void 0:i.tier.name)}),a=c.reduce((e,i)=>e+((i==null?void 0:i.mmr)??0),0),j=a>((n==null?void 0:n.tier.mmrCap)??0);return t.jsxs(N,{children:[t.jsxs("div",{className:"flex flex-row justify-end m-1 text-sm",children:[t.jsx(F,{checked:s,onChange:()=>o(!s)}),"Show Percentiles"]}),t.jsx("div",{className:"w-full flex flex-row",children:t.jsxs("table",{className:"table-auto w-full font-light",children:[t.jsx("thead",{className:"text-left underline decoration-yellow-400",children:t.jsxs("tr",{children:[t.jsx("td",{children:"Name"}),t.jsx("td",{children:"Role"}),t.jsxs("td",{children:["MMR"," ",t.jsxs("span",{className:`${j?"text-red-500":""}`,children:["(",(a/((n==null?void 0:n.tier.mmrCap)||1)*100).toFixed(1),"% Cap)"]})]}),t.jsx("td",{children:"Games"}),t.jsx("td",{children:"Rating"}),t.jsx("td",{children:"Pit"}),t.jsx("td",{children:"KAST"}),t.jsx("td",{children:"ADR"}),t.jsx("td",{children:"K/R"}),t.jsx("td",{children:"HS%"}),t.jsx("td",{children:"UtilDmg"}),t.jsx("td",{children:"EF"})]})}),t.jsx("tbody",{children:Array.from(h).map((e,i)=>{var l;return t.jsxs("tr",{className:`${i%2===1?"bg-midnight1":"bg-midnight2"} rounded h-8`,children:[t.jsxs("td",{children:[((l=e.team)==null?void 0:l.franchise.prefix)??""," ",e.name," ",t.jsx(b,{className:"inline hover:text-blue-400",target:"_blank",rel:"noreferrer",href:`/players/${encodeURIComponent(e.name)}`,children:t.jsx(f,{size:12,className:"inline leading-4"})})]}),t.jsx("td",{children:e.role}),t.jsxs("td",{children:[e.mmr!==0?e.mmr:"???"," ",e.mmr&&n&&t.jsxs("span",{children:["(",(e.mmr/(n.tier.mmrCap||1)*100).toFixed(1),"%)"]})]}),t.jsx("td",{children:e.stats.gameCount}),t.jsx("td",{className:`${d(e.percentile.rating)}`,children:(s?e.percentile:e.stats).rating.toFixed(s?0:2)}),t.jsx("td",{className:`${d(e.percentile.pit)}`,children:(s?e.percentile:e.stats).pit.toFixed(s?0:2)}),t.jsx("td",{className:`${d(e.percentile.kast)}`,children:(s?e.percentile:e.stats).kast.toFixed(s?0:2)}),t.jsx("td",{className:`${d(e.percentile.adr)}`,children:(s?e.percentile:e.stats).adr.toFixed(s?0:2)}),t.jsx("td",{className:`${d(e.percentile.kr)}`,children:(s?e.percentile:e.stats).kr.toFixed(s?0:2)}),t.jsx("td",{className:`${d(e.percentile.hs)}`,children:(s?e.percentile:e.stats).hs.toFixed(s?0:2)}),t.jsx("td",{className:`${d(e.percentile.utilDmg)}`,children:(s?e.percentile:e.stats).utilDmg.toFixed(s?0:2)}),t.jsx("td",{className:`${d(e.percentile.ef)}`,children:(s?e.percentile:e.stats).ef.toFixed(s?0:2)})]},e.name.concat(e.tier.name))})})]})})]})}export{v as ComparisonTable};
