(this["webpackJsonpcrypto-currency"]=this["webpackJsonpcrypto-currency"]||[]).push([[0],{48:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var c,r=n(0),i=n.n(r),a=n(14),s=n.n(a),l=n(16),o=(n(48),n(49),n(21)),j=n(6),u=n(61),d=n(62),b=n(58),h=n(30),O=n(3),m=function(e){var t=e.isAuthenticated,n=e.handleLogin;return Object(O.jsxs)(u.a,{bg:"dark",variant:"dark",children:[Object(O.jsx)(u.a.Brand,{children:"Navbar"}),Object(O.jsxs)(d.a,{className:"mr-auto",children:[Object(O.jsx)(h.LinkContainer,{exact:!0,to:"/",children:Object(O.jsx)(d.a.Link,{children:"Home"})}),t?Object(O.jsx)(h.LinkContainer,{to:"/profile",children:Object(O.jsx)(d.a.Link,{children:"Profile"})}):null]}),t?null:Object(O.jsx)(b.a,{variant:"primary",onClick:n,children:"Login"})]})},x=n(59),p=n(60),y=n(18),f=Object(y.b)({name:"cripto",initialState:{BTCUSD:null,BTCEUR:null,ETHUSD:null,ETHEUR:null,EOSUSD:null},reducers:{updateCrypto:function(e,t){e[t.payload.currency]=t.payload.currencyDetails}}}),v=f.actions.updateCrypto,g=f.reducer,S=Object(y.b)({name:"auth",initialState:{isAuthenticated:!1},reducers:{authenticateUser:function(e){e.isAuthenticated=!0}}}),C=S.actions.authenticateUser,D=S.reducer,w=Object(y.a)({reducer:{auth:D,crypto:g}}),T=function(){return Object(l.b)()},k=w,E=function(e,t){return new Intl.NumberFormat("en-US",t).format(e)},U=["BTCUSD","BTCEUR","ETHUSD","ETHEUR","EOSUSD"],F=function(){var e=T(),t=Object(l.c)((function(e){return e})).crypto;Object(r.useEffect)((function(){var t=new WebSocket("wss://api-pub.bitfinex.com/ws/2"),n={};return t.onopen=function(){U.forEach((function(e){t.send(JSON.stringify({event:"subscribe",channel:"ticker",symbol:"t".concat(e)}))}))},t.onmessage=function(t){var c=JSON.parse(t.data);if(Array.isArray(c)){var r=n[c[0]];if("hb"!==c[1]){var i=function(e){return{dailyChange:E(e[5],{style:"percent",signDisplay:"always",minimumFractionDigits:2,maximumFractionDigits:2}),volume:E(e[7],{maximumFractionDigits:0}),lastPrice:E(e[6],{minimumFractionDigits:2,maximumFractionDigits:2})}}(c[1]);e(v({currency:r,currencyDetails:i}))}}else n[c.chanId]=c.pair},function(){t.close()}}),[e]);var n=Object(O.jsx)(x.a,{"data-testid":"spinner",animation:"border",variant:"primary"});return Object.values(Object.values(t)).every((function(e){return null!==e}))&&(n=Object(O.jsxs)(p.a,{bordered:!0,hover:!0,responsive:!0,children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{style:{width:"5%",textAlign:"center"},children:"#"}),Object(O.jsx)("th",{style:{width:"35%"},children:"Symbol"}),Object(O.jsx)("th",{style:{width:"20%"},children:"Daily change"}),Object(O.jsx)("th",{style:{width:"20%"},children:"Volume"}),Object(O.jsx)("th",{style:{width:"20%"},children:"Last price"})]})}),Object(O.jsx)("tbody",{children:Object.keys(t).map((function(e,n){var c,r,i,a=e;return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{style:{textAlign:"center",fontWeight:"bold"},children:n+1}),Object(O.jsx)("td",{children:e}),Object(O.jsx)("td",{children:null===(c=t[a])||void 0===c?void 0:c.dailyChange}),Object(O.jsx)("td",{children:null===(r=t[a])||void 0===r?void 0:r.volume}),Object(O.jsx)("td",{children:null===(i=t[a])||void 0===i?void 0:i.lastPrice})]},n)}))})]})),Object(O.jsx)("div",{className:"pt-4 px-2 p-md-5",style:{display:"flex",justifyContent:"center",alignItems:"center"},children:n})},L=n(33),A=n(63),B=n.p+"static/media/profile.ca184021.jpg";c=B,(new Image).src=c;var I=function(){var e=Object(r.useState)(B),t=Object(L.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)("primary"),a=Object(L.a)(i,2),s=a[0],l=a[1];return Object(O.jsx)("div",{className:"pt-4 px-4 p-md-5",children:Object(O.jsxs)(A.a,{style:{width:"18rem"},children:[Object(O.jsx)(A.a.Img,{variant:"top",src:n}),Object(O.jsxs)(A.a.Body,{children:[Object(O.jsx)(A.a.Title,{children:"Jelena Strbac"}),Object(O.jsx)(A.a.Text,{children:"strbac.jelena.js@gmail.com"}),Object(O.jsx)(A.a.Text,{children:"https://github.com/JelenaStrbac"}),Object(O.jsx)(b.a,{variant:s,onClick:function(){c((function(e){return e===B?"https://api.hello-avatar.com/adorables/285/strbac.jelena.js@gmail.com":B})),l((function(e){return"primary"===e?"info":"primary"}))},children:"Toggle avatar"})]})]})})},N=function(){var e=T(),t=Object(l.c)((function(e){return e.auth})).isAuthenticated;return Object(O.jsxs)(o.BrowserRouter,{basename:"/crypto-currency",children:[Object(O.jsx)(m,{isAuthenticated:t,handleLogin:function(){e(C())}}),Object(O.jsxs)(j.g,{children:[Object(O.jsx)(j.d,{exact:!0,path:"/",component:F}),Object(O.jsx)(j.d,{path:"/profile",component:I})]}),Object(O.jsx)(j.c,{to:"/"})]})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))};s.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(l.a,{store:k,children:Object(O.jsx)(N,{})})}),document.getElementById("root")),J()}},[[56,1,2]]]);
//# sourceMappingURL=main.1a4f2dc6.chunk.js.map