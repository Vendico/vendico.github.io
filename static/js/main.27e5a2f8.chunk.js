(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{148:function(e){e.exports=JSON.parse('{"title":"welcome"}')},218:function(e,n,t){"use strict";var r;t.d(n,"a",(function(){return r})),function(e){e.NAV_BAR_HEIGHT="10px"}(r||(r={}))},482:function(e,n,t){"use strict";t.r(n);t(245),t(255);var r,a,c,o=t(0),i=t.n(o),l=t(108),u=t(45),s=(t(450),t(89)),d=t(150),m=t(15),f=t(85),b=t(32),h=t(218),g=Object(b.b)(r||(r=Object(f.a)(["\n  html,\n  body {\n    // width: 900px;\n    // min-height: 800px;\n    line-height: 1.5;\n  }\n\n  body {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    // padding-top: ",";\n    background-color: ",";\n  }\n\n  body.fontLoaded {\n    font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  }\n  \n  p,\n  label {\n    line-height: 1.5em;\n  }\n\n  input, select, button {\n    font-family: inherit;\n    font-size: inherit;\n  }\n\n  .icon {\n    width: 1.5rem;\n    height: 1.5rem;\n  }\n"])),h.a.NAV_BAR_HEIGHT,(function(e){return e.theme.background})),v=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{fallback:null},r=e;n&&(r=function(){return e().then((function(e){return{default:n(e)}}))});var a=Object(o.lazy)(r);return function(e){return i.a.createElement(o.Suspense,{fallback:t.fallback},i.a.createElement(a,e))}},p=function(e){return o.createElement(E,{viewBox:"-24 -24 48 48",small:e.small},o.createElement(j,{cx:"0",cy:"0",r:"20",fill:"none",strokeWidth:"4"}))},y=Object(b.d)(a||(a=Object(f.a)(["\n  100% {\n    transform: rotate(360deg);\n  }\n"]))),k=Object(b.d)(c||(c=Object(f.a)(["\n  0% {\n    stroke-dasharray: 0, 150;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 100, 150;\n    stroke-dashoffset: -24;\n  }\n  100% {\n    stroke-dasharray: 0, 150;\n    stroke-dashoffset: -124;\n  }\n"]))),E=b.c.svg.withConfig({componentId:"sc-1vgihoy-0"})(["animation:"," ","s linear infinite;height:",";width:",";transform-origin:center;"],y,2.625,(function(e){return e.small?"1.25rem":"3rem"}),(function(e){return e.small?"1.25rem":"3rem"})),j=b.c.circle.withConfig({componentId:"sc-1vgihoy-1"})(["animation:"," ","s ease-in-out infinite;stroke:",";stroke-linecap:round;"],k,1.5,(function(e){return e.theme.primary})),O=b.c.div.withConfig({componentId:"alrfv-0"})(["width:100%;height:100vh;display:flex;align-items:center;justify-content:center;"]),w=v((function(){return t.e(4).then(t.bind(null,489))}),(function(e){return e.HomePage}),{fallback:o.createElement(O,null,o.createElement(p,null))}),x=v((function(){return t.e(3).then(t.bind(null,488))}),(function(e){return e.Filmogrophy})),S=v((function(){return t.e(5).then(t.bind(null,490))}),(function(e){return e.NotFoundPage}),{fallback:o.createElement(p,null)}),H=t(483);function I(){var e=Object(H.a)().i18n;return o.createElement(d.a,null,o.createElement(s.a,{titleTemplate:"%s - Luxferous Productions",defaultTitle:"Luxferous Productions2",htmlAttributes:{lang:e.language}},o.createElement("meta",{name:"description",content:"Luxferous Productions"})),o.createElement(m.c,null,o.createElement(m.a,{exact:!0,path:"/",component:w}),o.createElement(m.a,{exact:!0,path:"/filmogrophy",component:x}),o.createElement(m.a,{component:S})),o.createElement(g,null))}var L=t(233),T=t(63),A=t(87),C=t(242),P=t(231),F=t(24);function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return 0===Object.keys(e).length?function(e){return e}:Object(F.c)(Object(P.a)({},e))}var B,V;var _=(null===(B=window)||void 0===B?void 0:B.matchMedia)?null===(V=window.matchMedia("(prefers-color-scheme: dark)"))||void 0===V?void 0:V.matches:void 0;var J,M={selected:window.localStorage&&localStorage.getItem("selectedTheme")||"system"},R=(J={name:"theme",initialState:M,reducers:{changeTheme:function(e,n){e.selected=n.payload}}},Object(T.b)(J)),z=(R.actions,R.reducer,function(){var e;return e={key:R.name,reducer:R.reducer},Object(A.b)(e),{actions:R.actions}}),G=t(109),D={light:{primary:"rgba(215,113,88,1)",text:"rgba(58,52,51,1)",textSecondary:"rgba(58,52,51,0.7)",background:"rgba(255,255,255,1)",backgroundVariant:"rgba(251,249,249,1)",border:"rgba(58,52,51,0.12)",borderLight:"rgba(58,52,51,0.05)"},dark:{primary:"rgba(220,120,95,1)",text:"rgba(241,233,231,1)",textSecondary:"rgba(241,233,231,0.6)",background:"rgba(0,0,0,1)",backgroundVariant:"rgba(28,26,26,1)",border:"rgba(241,233,231,0.15)",borderLight:"rgba(241,233,231,0.05)"}},W=Object(G.a)([function(e){return e.theme||M}],(function(e){return"system"===e.selected?_?D.dark:D.light:D[e.selected]})),q=(Object(G.a)([function(e){return e.theme||M}],(function(e){return e.selected})),function(e){z();var n=Object(u.c)(W);return o.createElement(b.a,{theme:n},o.Children.only(e.children))}),K=function(e){e&&e instanceof Function&&t.e(6).then(t.bind(null,487)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,c=n.getLCP,o=n.getTTFB;t(e),r(e),a(e),c(e),o(e)}))},Q=t(243),U=t(88),X=t(241),Y=t(148),Z={},$={en:{translation:Y}};!function e(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Z,r=arguments.length>2?arguments[2]:void 0;Object.keys(n).forEach((function(a){var c=r?"".concat(r,".").concat(a):a;"object"===typeof n[a]?(t[a]={},e(n[a],t[a],c)):t[a]=c}))}(Y);Q.a.use(U.e).use(X.a).init({resources:$,fallbackLng:"en",debug:!1,interpolation:{escapeValue:!1}});var ee=function(){var e=Object(C.a)({}),n=e.run,t=[e],r=[Object(A.a)({createReducer:N,runSaga:n})];return Object(T.a)({reducer:N(),middleware:[].concat(Object(L.a)(Object(T.c)()),t),devTools:!1,enhancers:r})}(),ne=document.getElementById("root");l.render(o.createElement(u.a,{store:ee},o.createElement(q,null,o.createElement(s.b,null,o.createElement(o.StrictMode,null,o.createElement(I,null))))),ne),K()}},[[482,1,2]]]);