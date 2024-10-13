import{j as e}from"./vendor-react-DpEvKUaE.js";import{S as o}from"./stats-DGwt89KP.js";import{_ as r}from"./index-BXhbggzP.js";import"./vendor-echarts-BUbrvsb8.js";import"./vendor-@sentry-D7IO1rHj.js";import"./vendor-prosemirror-B74nKu9v.js";import"./vendor-lodash-Cj7XC0Qe.js";function y(s,a,c){return{player:s,value:s.stats[c]}}function V({players:s,limit:a}){const c=r(s,"stats.gameCount",a,"desc").map(t=>y(t,"Games Played","gameCount")),i=r(s,"stats.kills",a,"desc").map(t=>({player:t,value:t.stats.kills})),u=s.sort((t,l)=>t.stats.kills/t.stats.deaths<l.stats.kills/l.stats.deaths?1:-1).slice(0,a).map(t=>({player:t,value:(t.stats.kills/t.stats.deaths).toFixed(2)})),d=s.sort((t,l)=>t.stats.fiveK<l.stats.fiveK?1:-1).slice(0,a).map(t=>({player:t,value:t.stats.fiveK})),h=s.sort((t,l)=>t.stats.twoK<l.stats.twoK?1:-1).slice(0,a).map(t=>({player:t,value:t.stats.twoK})),x=s.sort((t,l)=>t.stats.threeK<l.stats.threeK?1:-1).slice(0,a).map(t=>({player:t,value:t.stats.threeK})),w=s.sort((t,l)=>t.stats.fourK<l.stats.fourK?1:-1).slice(0,a).map(t=>({player:t,value:t.stats.fourK})),v=r(s,"stats.adr",a,"desc").map(t=>({player:t,value:t.stats.adr.toFixed(2)})),m=r(s,"stats.awpR",a,"desc").map(t=>({player:t,value:t.stats.awpR.toFixed(2)})),j=r(s,"stats.utilDmg",a,"desc").map(t=>({player:t,value:t.stats.utilDmg.toFixed(2)})),g=r(s,"stats.ctRating",a,"desc").map(t=>({player:t,value:t.stats.ctRating.toFixed(2)})),K=r(s,"stats.TRating",a,"desc").map(t=>({player:t,value:t.stats.TRating.toFixed(2)})),p=r(s,"stats.kast",a,"desc").map(t=>({player:t,value:t.stats.kast.toFixed(2)})),n=r(s,"stats.util"),R=n.map(t=>({player:t,value:t.stats.util})).reverse().splice(0,a),F=n.map(t=>({player:t,value:t.stats.util})).splice(0,a),f=r(s,"stats.hs",a,"desc").map(t=>({player:t,value:t.stats.hs})),P=r(s,"stats.clutchR",a,"desc").map(t=>({player:t,value:t.stats.clutchR.toFixed(2)})),M=r(s,"stats.cl_2",a,"desc").map(t=>({player:t,value:t.stats.cl_2.toFixed(2)})),T=r(s,"stats.cl_3",a,"desc").map(t=>({player:t,value:t.stats.cl_3.toFixed(2)})),k=r(s,"stats.cl_4",a,"desc").map(t=>({player:t,value:t.stats.cl_4.toFixed(2)})),A=r(s,"stats.odr",a,"desc").map(t=>({player:t,value:t.stats.odr.toFixed(2)})),D=r(s,"stats.fAssists",a,"desc").map(t=>({player:t,value:t.stats.fAssists.toFixed(2)})),_=r(s,"stats.ef",a,"desc").map(t=>({player:t,value:t.stats.ef.toFixed(2)}));return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Games Played",rows:c}),e.jsx(o,{title:"Most Kills",rows:i}),e.jsx(o,{title:"Highest K/D Ratio",rows:u}),e.jsx(o,{title:"Most Aces",rows:d}),e.jsx(o,{title:"Damager Per Round",rows:v}),e.jsx(o,{title:"Most 2K's",rows:h}),e.jsx(o,{title:"Most 3K's",rows:x}),e.jsx(o,{title:"Most 4K's",rows:w}),e.jsx(o,{title:"Flash Assists per Match",rows:D}),e.jsx(o,{title:"Awp Kills per Round",rows:m}),e.jsx(o,{title:"Utility Damage per Match",rows:j}),e.jsx(o,{title:"CT-Side Rating",rows:g}),e.jsx(o,{title:"T-Side Rating",rows:K}),e.jsx(o,{title:"Kill/Assist/Survive/Traded",rows:p}),e.jsx(o,{title:"Utility Thrown Per Match",rows:R}),e.jsx(o,{title:"Least Utility Thrown Per Match",rows:F}),e.jsx(o,{title:"Highest Headshot Percentage",rows:f}),e.jsx(o,{title:"Clutch Points Average per Match",rows:P}),e.jsx(o,{title:"One vs Two Clutch",rows:M}),e.jsx(o,{title:"One vs Three Clutch",rows:T}),e.jsx(o,{title:"One vs Four Clutch",rows:k}),e.jsx(o,{title:"Open Duels Per Round",rows:A}),e.jsx(o,{title:"Enemies Flashed per Match",rows:_})]})}export{V as GeneralLeaderBoards};
