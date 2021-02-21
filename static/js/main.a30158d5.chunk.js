(this["webpackJsonpdino-game"]=this["webpackJsonpdino-game"]||[]).push([[0],{12:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r,c=n(1),a=(n(12),n(0)),o=n.n(a),u=n(7),i=n.n(u),s=n(6),f=n(2),l=n(8),j=function(e,t){return Math.max(e.x,t.x)<Math.min(e.x+e.width,t.x+t.width)&&Math.max(e.y,t.y)<Math.min(e.y+e.height,t.y+t.height)},d=function(e){var t=e.gameState,n=e.dinoRef,o=Object(a.useState)(!0),u=Object(f.a)(o,2),i=u[0],s=u[1],l=Object(a.useState)(-1),j=Object(f.a)(l,2),d=j[0],b=j[1];Object(a.useEffect)((function(){if(d>=500)b(-1);else if(!(d<0)){var e=setTimeout((function(){return b(d+25)}),25);return function(){return clearTimeout(e)}}}),[d]),Object(a.useEffect)((function(){if(!(d>0)){var e=setTimeout((function(){return s(!i)}),150);return function(){return clearTimeout(e)}}}),[i,d]),Object(a.useEffect)((function(){var e=function(e){" "!==e.key&&"ArrowUp"!==e.key||h()};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[d]);var h=Object(a.useCallback)((function(){d>0||b(0)}),[d]),m=t===r.InProgress?i?"-1":"-2":"";return Object(a.useMemo)((function(){return Object(c.jsx)("div",{ref:n,className:"absolute left-4 z-10 transform h-12 w-12",style:{bottom:d<0?12:(e=d,12+.7*e-.0014*e*e),transition:"25ms bottom linear"},children:Object(c.jsx)("img",{src:"./dinosaur".concat(m,".png"),className:"fill"})});var e}),[i,d,t])},b=function(e){var t=e.gameState,n=e.gameLevel,o=Object(a.useState)(0),u=Object(f.a)(o,2),i=u[0],s=u[1];return Object(a.useEffect)((function(){if(t===r.InProgress){var e=setTimeout((function(){s(i>=680?0:i+10)}),30-3*n);return function(){return clearTimeout(e)}}s(0)}),[i,t,n]),Object(a.useMemo)((function(){return Object(c.jsx)("div",{className:"relative w-full h-10 mt-auto overflow-hidden whitespace-nowrap",children:Object(c.jsxs)("div",{className:"absolute bottom-0 left-0 flex",style:{left:-i,transition:"".concat(30-3*n," left linear")},children:[Object(c.jsx)("img",{className:"h-10 object-cover m-0",src:"./ground.png",width:680}),Object(c.jsx)("img",{className:"h-10 object-cover m-0",src:"./ground.png",width:680})]})})}),[i,t])},h=function(e){var t=e.gameState;if(t===r.InProgress)return null;var n,a="";return t===r.NotStarted?(a="Hit space or \u2191 to start",n="Jump using space or \u2191 and avoid the obstacles"):t===r.Dead&&(a="Game Over",n="Hit space or \u2191 to restart"),Object(c.jsxs)("div",{className:"z-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase flex flex-col items-center",children:[Object(c.jsx)("h2",{className:"text-center text-2xl",children:a}),Object(c.jsx)("p",{className:"text-center text-sm",children:n})]})},m=n(9),O=function(e){var t=e.gameState,n=e.gameLevel,o=e.obstacleRef,u=e.numObstacles,i=Object(a.useState)(!0),s=Object(f.a)(i,2),l=s[0],j=s[1],d=Object(a.useState)(700),b=Object(f.a)(d,2),h=b[0],O=b[1];return Object(a.useEffect)((function(){var e=setTimeout((function(){return j(!1)}),85*(30-3*n));return function(){return clearTimeout(e)}}),[]),Object(a.useEffect)((function(){if(l&&t){var e=setTimeout((function(){O(h-10)}),30-3*n);return function(){return clearTimeout(e)}}}),[h,l,t,n]),Object(a.useMemo)((function(){return l&&t===r.InProgress?Object(c.jsx)("div",{ref:o,className:"".concat(t!==r.InProgress?"hidden":""," absolute bottom-2 z-10 h-12 mt-auto flex flex-row"),style:{left:h,transition:"".concat(30-3*n," left linear")},children:new Array(u).fill(void 0).map((function(e,t){return Object(c.jsx)(m.a,{className:"text-gray-600 w-12 h-12"},t)}))}):null}),[l,h,t])},v=function(e,t){for(var n="",r=0;r<t;r++)n+="0";return"".concat(n).concat(e).slice(-t)},g=function(e){var t=e.score,n=e.highScore;return Object(c.jsxs)("div",{className:"absolute right-0",children:[Object(c.jsxs)("span",{children:["HIGH SCORE: ",v(Math.max(t,n),5)]}),Object(c.jsxs)("span",{className:"mx-10",children:["SCORE: ",v(t,5)]})]})};!function(e){e.NotStarted="NotStarted",e.InProgress="InProgress",e.Dead="Dead"}(r||(r={}));var x=function(){var e=Object(a.useState)([]),t=Object(f.a)(e,2),n=t[0],u=t[1],i=Object(a.useState)([]),m=Object(f.a)(i,2),v=m[0],x=m[1],w=Object(a.useState)(r.NotStarted),S=Object(f.a)(w,2),p=S[0],y=S[1],T=Object(a.useState)(0),E=Object(f.a)(T,2),L=E[0],N=E[1],I=Object(a.useState)(0),M=Object(f.a)(I,2),P=M[0],k=M[1],H=Object(a.useState)(0),R=Object(f.a)(H,2),C=R[0],D=R[1],F=Object(a.useRef)(null),W=function(e){var t,n,r=Object(a.useState)(null===e.current?{x:0,y:0,width:0,height:0}:{x:e.current.offsetLeft,y:e.current.offsetTop,width:e.current.clientWidth,height:e.current.clientHeight}),c=Object(f.a)(r,2),o=c[0],u=c[1];return Object(a.useEffect)((function(){null!==e.current&&u({x:e.current.offsetLeft,y:e.current.offsetTop,width:e.current.offsetWidth,height:e.current.offsetHeight})}),[null===(t=e.current)||void 0===t?void 0:t.offsetTop,null===(n=e.current)||void 0===n?void 0:n.offsetLeft]),o}(F),z=function(e){var t,n,r,c,o,u,i=Object(a.useState)(e.map((function(e){return null===e.current?{x:0,y:0,width:0,height:0}:{x:e.current.offsetLeft,y:e.current.offsetTop,width:e.current.clientWidth,height:e.current.clientHeight}}))),s=Object(f.a)(i,2),l=s[0],j=s[1];return Object(a.useEffect)((function(){var t=e.map((function(e){return null===e.current?{x:0,y:0,width:0,height:0}:{x:e.current.offsetLeft,y:e.current.offsetTop,width:e.current.clientWidth,height:e.current.clientHeight}}));j(t)}),[e,null===(t=e[0])||void 0===t||null===(n=t.current)||void 0===n?void 0:n.offsetLeft,null===(r=e[1])||void 0===r||null===(c=r.current)||void 0===c?void 0:c.offsetLeft,null===(o=e[2])||void 0===o||null===(u=o.current)||void 0===u?void 0:u.offsetLeft]),l}(v);return Object(a.useEffect)((function(){p===r.InProgress&&function(e,t){var n,r=Object(l.a)(t);try{for(r.s();!(n=r.n()).done;){var c=n.value;if(j(e,c))return!0}}catch(a){r.e(a)}finally{r.f()}return!1}(W,z)&&y(r.Dead)}),[W,z,p]),Object(a.useEffect)((function(){p===r.Dead&&(D(Math.max(C,P)),u([]),N(0));var e=function(e){" "!==e.key&&"ArrowUp"!==e.key||p!==r.InProgress&&(k(0),y(r.InProgress))};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[p]),Object(a.useEffect)((function(){if(p===r.InProgress){N(Math.min(5,Math.floor(P/100)));var e=setTimeout((function(){return k(P+1)}),100-10*L);return function(){return clearTimeout(e)}}}),[P,p,L]),Object(a.useEffect)((function(){if(p===r.InProgress){var e=setTimeout((function(){var e=o.a.createRef(),t=[].concat(Object(s.a)(n.slice(-2)),[Object(c.jsx)(O,{obstacleRef:e,gameState:p,gameLevel:L,numObstacles:Math.random()>.75?2:1},P)]);u(t),x([].concat(Object(s.a)(v.slice(-2)),[e]))}),(5e3*Math.random()+2e3)*(7-L)/7);return function(){return clearTimeout(e)}}}),[n,p]),Object(c.jsxs)("div",{className:"relative flex h-60 mx-auto my-4 overflow-hidden",style:{width:680},children:[Object(c.jsx)(h,{gameState:p}),Object(c.jsx)(g,{score:P,highScore:C}),n,Object(c.jsx)(d,{dinoRef:F,gameState:p}),Object(c.jsx)(b,{gameState:p,gameLevel:L})]})};var w=function(){return Object(c.jsx)(x,{})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))};i.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(w,{})}),document.getElementById("root")),S()}},[[16,1,2]]]);
//# sourceMappingURL=main.a30158d5.chunk.js.map