(this.webpackJsonpcypherverse=this.webpackJsonpcypherverse||[]).push([[8],{44:function(e,t,n){"use strict";n.r(t);var i,a,c,r,s,o,l=n(2),h=n(6),d=n(0),p=n.p+"static/media/Malarian.fbff1a56.mp4",g=n.p+"static/media/Hash.3c8534cc.mp4",b=n.p+"static/media/hash.3ca1da96.gif",u=n.p+"static/media/malarian.18dde1e5.gif",f=n(3),m=n(39),v=n(5),j=n(18),O=n(1),y=f.a.div(i||(i=Object(l.a)(["\n  visibility: hidden;\n  width: 100%;\n  height: 100vh;\n  background: url(",") no-repeat center center/cover;\n  position: fixed;\n  top: 0;\n  left: 0;\n"])),(function(e){return e.color})),x=f.a.div(a||(a=Object(l.a)(["\n  width: 100%;\n  height: 100%;\n  @media only screen and (max-width: 1050px) {\n    background: ",";\n  }\n"])),v.a.black),S=f.a.div(c||(c=Object(l.a)(["\n  position: fixed;\n  z-index: 20;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  margin: 0 auto;\n"]))),w=f.a.div(r||(r=Object(l.a)(["\n  position: relative;\n  width: 100%;\n  height: 100vh;\n\n  video {\n    position: absolute;\n    /* width: 100%; */\n    height: 100%;\n    top: 0;\n    left: 0;\n    object-fit: contain;\n    opacity: 1;\n    width: calc(var(--vh, 1vw) * 100);\n  }\n\n  .image-cover {\n    width: 100%;\n    height: 100%;\n    min-height: 100vh;\n    max-width: 1438px;\n  }\n"]))),I=f.a.div(s||(s=Object(l.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 50;\n  transform: translate(-50%, -50%);\n  width: 80px;\n  height: 64px;\n  background: rgba(255, 255, 255, 0.3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 24px;\n  cursor: pointer;\n"]))),J=Object(f.a)(m.c)(o||(o=Object(l.a)(["\n  width: 32px;\n  height: 32px;\n"])));t.default=function(){var e=[{id:1,image:p},{id:2,image:g}],t=Object(d.useState)(e[0]),n=Object(h.a)(t,2),i=n[0],a=n[1],c=Object(d.useState)(null),r=Object(h.a)(c,2),s=r[0],o=r[1],l=Object(d.useState)(!1),f=Object(h.a)(l,2),m=f[0],v=f[1],k=Object(d.useRef)(null),N=function(e){"play"===e?(k.current.play(),v(!0)):"pause"===e&&v(!1)};Object(d.useEffect)((function(){j.a.to(".image_bg_gif",0,{css:{visibility:"visible"}}),document.title="Home - Cypherverse",null===localStorage.getItem("cypherverse")?(localStorage.setItem("cypherverse",JSON.stringify("loaded")),localStorage.setItem("cyphervisits",JSON.stringify(0)),a(e[0]),o(u)):parseInt(JSON.parse(localStorage.getItem("cyphervisits")))===e.length||1===parseInt(JSON.parse(localStorage.getItem("cyphervisits")))?(a(e[0]),localStorage.setItem("cyphervisits",JSON.stringify(0)),o(u)):(a(e[1]),localStorage.setItem("cyphervisits",JSON.stringify(1)),o(b))}),[]);return Object(O.jsx)(y,{className:"image_bg_gif",color:s,children:Object(O.jsx)(x,{children:Object(O.jsx)(S,{children:Object(O.jsxs)(w,{children:[!m&&Object(O.jsx)(I,{children:Object(O.jsx)(J,{onClick:function(){return N("play")}})}),Object(O.jsx)("video",{autoPlay:!0,onEnded:function(){1===i.id?a(e[1]):2===i.id&&a(e[0])},playing:!0,src:i.image,volume:1,muted:!1,ref:k,controls:!1})]})})})})}}}]);
//# sourceMappingURL=8.da3f4bb2.chunk.js.map