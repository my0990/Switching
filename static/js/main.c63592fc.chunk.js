(this.webpackJsonpswitching=this.webpackJsonpswitching||[]).push([[0],{45:function(n,e,t){},46:function(n,e,t){},53:function(n,e,t){},54:function(n,e,t){},57:function(n,e,t){"use strict";t.r(e);var i,c,r,a=t(1),s=t.n(a),o=t(23),d=t.n(o),l=(t(45),t.p,t(46),t(3)),j=t(6),u=t(7),b=t(14),h=(t(56),t(8)),p=t(2),x=u.a.div(i||(i=Object(j.a)(["\n    width: 100%;\n    height: 100%;\n    display: block;\n    background: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n   \n"]))),O=u.a.div(c||(c=Object(j.a)(["\n    width: 60px;\n    height: 35px;\n    background: skyblue;\n    border-radius: 5px;\n    &:hover {\n        cursor: pointer\n    }\n    margin: 5px;\n \n"]))),f=u.a.div(r||(r=Object(j.a)(["\n    width: 60px;\n    height: 35px;\n    background: white;\n    border-radius: 5px;\n    &:hover {\n        cursor: pointer\n    }\n    margin: 5px;\n"])));var g,v=function(n){var e=Object(a.useState)(n.arr),t=Object(l.a)(e,2),i=t[0],c=t[1],r=function(n,e){var t=Object(h.a)(i);1===t[n][e]?t[n].splice(e,1,0):t[n].splice(e,1,1),c(Object(h.a)(t)),console.log(i)};return Object(p.jsx)(x,{children:Object(p.jsx)("table",{children:i.map((function(n,e){return Object(p.jsx)("tr",{children:i[e].map((function(n,t){return 1===n?Object(p.jsx)("td",{children:Object(p.jsx)(O,{onClick:function(){r(e,t)}})}):Object(p.jsx)("td",{children:Object(p.jsx)(f,{onClick:function(){r(e,t)}})})}))})}))})})};u.a.div(g||(g=Object(j.a)(["\n    display: flex;\n    height: 500px;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n\n"])));var m,y,w,k,S,C=t(59),N=(t(53),u.a.div(m||(m=Object(j.a)(["\n    width: 100%;\n    position: relative;\n    min-width: 600px;\n    \n    background: #eee; \n    \n    \n"])))),I=u.a.div(y||(y=Object(j.a)(["\n    width: 100%;\n    background: white;\n    margin: 0 auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 5px;\n"]))),F=Object(u.a)(b.animated.div)(w||(w=Object(j.a)(["\n    width: 140px;\n    height: 70px;\n    background: skyblue;\n    border-radius: 5px;\n    margin: 10px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.5em;\n"]))),R=u.a.div(k||(k=Object(j.a)(["\n    width: 140px;\n    height: 70px;\n    background: white;\n    border-radius: 5px;\n    margin: 10px;\n"]))),T=u.a.div(S||(S=Object(j.a)(["\n    width: 90%;\n    height: 50%;\n    display: block;\n    background: white;\n    margin: 40px auto;\n    border-radius: 10px;\n    h4 {\n        text-align: left;\n        padding-left: 20px;\n        \n    }\n    \n    div div{\n        font-size: 1.5em;\n        width: 610px;\n        overflow: overlay;\n        height: 60%;\n        margin: 10px;\n        word-break:break-all;\n    }\n    \n"])));var z,B,D,H=function(){var n=0,e=Object(a.useState)(),t=Object(l.a)(e,2),i=(t[0],t[1]),c=Object(a.useState)(),r=Object(l.a)(c,2),s=r[0],o=r[1],d=Object(a.useRef)(),j=Object(a.useRef)(),u=Object(a.useState)([]),x=Object(l.a)(u,2),O=x[0],f=x[1],g=Object(a.useState)(!1),m=Object(l.a)(g,2),y=m[0],w=m[1],k=Object(a.useRef)(),S=Object(a.useRef)(),z=Object(a.useRef)(),B=Object(a.useState)([]),D=Object(l.a)(B,2),H=D[0],J=D[1],L=Object(a.useState)([]),M=Object(l.a)(L,2),P=M[0],W=M[1],X=Object(a.useState)([]),A=Object(l.a)(X,2),E=A[0],q=A[1],G=function(){w(!1);var n=[];f([].concat(n)),q([].concat(n)),J([].concat(n)),W([].concat(n))},K=Object(a.useState)(0),Q=Object(l.a)(K,2),U=Q[0],V=Q[1],Y=Object(b.useTransition)(U,{from:{x:100,opacity:0,position:"absolute"},enter:{x:0,opacity:1},leave:{x:-50,opacity:0}});function Z(n){V((function(n){return(n+1)%2}))}var $=[function(n){n.style;return Object(p.jsxs)("div",{className:"item1",style:{transform:"translateX("+(window.innerWidth/2-500)+"px)"},children:[Object(p.jsxs)("div",{style:{padding:"20px"},children:[Object(p.jsx)("div",{children:Object(p.jsx)("input",{ref:d,id:"col",placeholder:"col"})}),Object(p.jsx)("div",{children:Object(p.jsx)("input",{ref:j,id:"row",placeholder:"row"})})]}),Object(p.jsx)(C.a,{variant:"danger",onClick:function(){!function(){if(!y)if(d.current.value>10||j.current.value>10)alert("10\uc774\ud558 \uc22b\uc790\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"),d.current.value="",j.current.value="";else{for(var n=[],e=0;e<d.current.value;++e){for(var t=[],c=0;c<j.current.value;++c)t[c]=1;n[e]=t}f([].concat(n)),i(parseInt(d.current.value)),o(parseInt(j.current.value))}}()},children:"\ucc45\uc0c1\uc0dd\uc131"}),Object(p.jsx)("div",{className:"smallDesk",children:Object(p.jsx)(v,{arr:O,propsFunction:Z})}),Object(p.jsx)(C.a,{variant:"danger",onClick:function(){Z()},children:"\ub2e4\uc74c"})]})},function(n){n.style;return Object(p.jsxs)("div",{className:"item2",style:{transform:"translateX("+(window.innerWidth/2-350)+"px)"},children:[Object(p.jsx)("div",{children:Object(p.jsxs)("div",{style:{padding:"25px 50px",display:"flex",justifyContent:"space-between"},children:[Object(p.jsx)("input",{id:"start",placeholder:"\uc2dc\uc791\ubc88\ud638",ref:k}),Object(p.jsx)("input",{id:"end",placeholder:"\ub05d\ubc88\ud638",ref:S}),Object(p.jsx)("input",{id:"ex",placeholder:"\uc81c\uc678\ubc88\ud638 \ucf64\ub9c8\ub85c \uad6c\ubd84",ref:z})]})}),Object(p.jsx)(C.a,{variant:"danger",onClick:function(){return function(){if(!y){var n,e=z.current.value.split(",").map(Number);(n=console).log.apply(n,Object(h.a)(e)),q(Object(h.a)(e));for(var t=[],i=k.current.value;i<parseInt(S.current.value)+1;++i)e.includes(i)||t.push(parseInt(i));W([].concat(t)),t.sort((function(){return Math.random()-.5})),J([].concat(t))}}()},children:"\ubc88\ud638\uc0dd\uc131"}),Object(p.jsxs)(T,{children:[Object(p.jsxs)("div",{style:{height:"50%"},children:[Object(p.jsx)("h4",{children:"\uc0dd\uc131\ub41c \ubc88\ud638"}),Object(p.jsx)("div",{children:P.map((function(n,e){return e!=P.length-1?n+",":n}))})]}),Object(p.jsxs)("div",{style:{height:"50%"},children:[Object(p.jsx)("h4",{children:"\uc81c\uc678\ub41c \ubc88\ud638"}),Object(p.jsx)("div",{children:E.map((function(n,e){return 0===n?"\uc5c6\uc74c":e!=E.length-1?n+",":n}))})]})]}),Object(p.jsx)(C.a,{variant:"danger",onClick:function(){cn(!0)},children:"\ud655\uc778"})]})}],_=Object(a.useState)(!1),nn=Object(l.a)(_,2),en=nn[0],tn=nn[1],cn=function(){tn(!0)},rn=Object(b.useTransition)(en,{enter:{opacity:1},leave:{opacity:0}}),an=Object(b.useTransition)(y,{from:{opacity:0},enter:{opacity:1}});return Object(p.jsxs)(N,{style:{height:window.innerHeight},children:[rn((function(n,e){return e?y?Object(p.jsx)(C.a,{className:"btnStyle",variant:"danger",onClick:function(){window.confirm("\uc815\ub9d0 \ucd08\uae30\ud654\ud558\uc2e4\uac70\uc5d0\uc694?")?(G(),window.location.reload()):console.log("\ubcc0\ud654\uc5c6\uc74c")},children:"reset"}):Object(p.jsx)(C.a,{className:"btnStyle",variant:"danger",onClick:function(){0!=O.length&&0!=H.length?w(!0):alert("\ucc45\uc0c1\uacfc \ubc88\ud638\ub97c \uc0dd\uc131\ud574\uc8fc\uc138\uc694~")},children:"start"}):Object(p.jsx)(b.animated.div,{style:n,children:Y((function(n,e){var t=$[e];return Object(p.jsx)(b.animated.div,{style:n,children:Object(p.jsx)(t,{})})}))})})),en?Object(p.jsx)(I,{style:{height:9*window.innerHeight/10},children:Object(p.jsx)("table",{children:O.map((function(e,t){return Object(p.jsx)("tr",{children:O[t].map((function(e,i){return 1===e?Object(p.jsx)("td",{children:Object(p.jsx)(F,{children:an((function(e,c){return c?Object(p.jsx)(b.animated.div,{style:e,children:H[t*s+i-n]}):null}))})}):(n++,Object(p.jsx)("td",{children:Object(p.jsx)(R,{})}))}))})}))})}):"",Object(p.jsx)("div",{})]})};t(54),u.a.div(z||(z=Object(j.a)(["\n    \n    width: 100%;\n    height: 1000px;\n    min-width: 1300px;\n    background: gray;\n    margin: auto;\n"]))),u.a.div(B||(B=Object(j.a)(["\n    width: 50%;\n    height: 100px;\n    background: white;\n    float: left;\n    background: skyblue;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    button {\n        width: 50px;\n        height: 70px;\n        position: relative;\n        top: -5px;\n    }\n    \n"]))),u.a.div(D||(D=Object(j.a)(["\n    width: 50%;\n    height: 100px;\n    background: white;\n    float: left;\n    background: green;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    button {\n        width: 50px;\n        height: 70px;\n        position: relative;\n        top: -10px;\n    }\n"])));t(55);var J=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(H,{})})},L=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,60)).then((function(e){var t=e.getCLS,i=e.getFID,c=e.getFCP,r=e.getLCP,a=e.getTTFB;t(n),i(n),c(n),r(n),a(n)}))};d.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(J,{})}),document.getElementById("root")),L()}},[[57,1,2]]]);
//# sourceMappingURL=main.c63592fc.chunk.js.map