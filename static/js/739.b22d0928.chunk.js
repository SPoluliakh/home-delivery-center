"use strict";(self.webpackChunkhome_delivery_center=self.webpackChunkhome_delivery_center||[]).push([[739],{6003:function(n,e,t){t.d(e,{a:function(){return m}});var r,i,o,a=t(168),c=t(6444),s=c.ZP.div(r||(r=(0,a.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]))),u=c.ZP.span(i||(i=(0,a.Z)(["\n  display: inline-block;\n  animation: myAnim 1s ease 0.5s infinite normal forwards;\n  font-size: 50px;\n\n  @keyframes myAnim {\n    0% {\n      transform: scale(0.5);\n    }\n    50% {\n      transform: scale(1);\n    }\n    100% {\n      transform: scale(0.5);\n    }\n  }\n"]))),d=c.ZP.span(o||(o=(0,a.Z)(["\n  display: inline-block;\n  animation: myAnim 1s ease 0s infinite normal forwards;\n  font-size: 50px;\n\n  @keyframes myAnim {\n    0% {\n      transform: scale(1);\n    }\n    50% {\n      transform: scale(0.5);\n    }\n    100% {\n      transform: scale(1);\n    }\n  }\n"]))),l=t(3329),m=function(){return(0,l.jsxs)(s,{children:[(0,l.jsx)(u,{children:"\ud83d\udc9b"}),(0,l.jsx)(d,{children:"\ud83d\udc99"})]})}},739:function(n,e,t){t.r(e),t.d(e,{DepartmentsPage:function(){return C}});var r,i,o,a,c,s=t(9439),u=t(2791),d=t(3494),l=t(6003),m=t(3329),p=function(n){var e=n.cityName,t=n.description,r=n.dimensions,i=r.Height,o=r.Length,a=r.Width,c=n.schedule,d=c.Friday,l=c.Monday,p=c.Saturday,f=c.Sunday,h=c.Thursday,x=c.Tuesday,b=c.Wednesday,g=(0,u.useState)(!1),v=(0,s.Z)(g,2),y=v[0],j=v[1];return(0,m.jsxs)("li",{children:[(0,m.jsxs)("p",{children:["\u043c\u0456\u0441\u0442\u043e: ",e]}),(0,m.jsx)("p",{children:t}),(0,m.jsxs)("p",{children:["\u0440\u043e\u0437\u043c\u0456\u0440\u0438 \u043f\u043e\u0441\u0438\u043b\u043a\u0438: \u0432\u0438\u0441\u043e\u0442\u0430 - ",i,", \u0448\u0438\u0440\u0438\u043d\u0430 - ",a,", \u0434\u043e\u0432\u0436\u0438\u043d\u0430 -",o]}),(0,m.jsx)("button",{onClick:function(){j(!y)},type:"button",children:"\u0413\u0440\u0430\u0444\u0456\u043a \u0440\u043e\u0431\u043e\u0442\u0438"}),y&&(0,m.jsxs)("ul",{children:[(0,m.jsxs)("li",{children:["\u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a -",l,","]}),(0,m.jsxs)("li",{children:["\u0432\u0456\u0432\u0442\u043e\u0440\u043e\u043a -",h,","]}),(0,m.jsxs)("li",{children:["\u0441\u0435\u0440\u0435\u0434\u0430 -",b,","]}),(0,m.jsxs)("li",{children:["\u0447\u0435\u0442\u0432\u0435\u0440 -",x,","]}),(0,m.jsxs)("li",{children:["\u043f'\u044f\u0442\u043d\u0438\u0446\u044f -",d,","]}),(0,m.jsxs)("li",{children:["\u0441\u0443\u0431\u043e\u0442\u0430 -",p,","]}),(0,m.jsxs)("li",{children:["\u043d\u0435\u0434\u0456\u043b\u044f -",f]})]})]})},f=t(6549),h=function(n){var e=n.disabled,t=(0,f.E)(),r=t.page,i=t.city,o=t.setSearchParams,a=function(n){var e=n.target.name;o("next"===e?""!==i?{page:(Number(r)+1).toString(),city:i}:{page:(Number(r)+1).toString()}:""!==i?{page:(Number(r)-1).toString(),city:i}:{page:(Number(r)-1).toString()}),window.scrollBy({top:-1e4,behavior:"smooth"})};return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("div",{children:[(0,m.jsx)("button",{name:"prev",type:"button",onClick:a,disabled:"1"===r,children:"\u043f\u043e\u043f\u0435\u0440\u0435\u0434\u043d\u044f"}),(0,m.jsx)("p",{children:r}),(0,m.jsx)("button",{name:"next",type:"button",onClick:a,disabled:e,children:"\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0430"})]})})},x=t(168),b=t(6444),g=b.ZP.ul(r||(r=(0,x.Z)(["\n  list-style: none;\n  text-align: center;\n  /* display: flex;\n  flex-direction: column;\n  align-items: center; */\n\n  /* border: ",";\n  padding: ","px;\n  margin-bottom: ","px;\n  border-radius: ",";\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n    justify-content: center;\n    padding: ","px;\n  } */\n"])),(function(n){return n.theme.borders.statusForm}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.space[4]})),v=function(){var n,e=(0,d.M)(),t=(0,s.Z)(e,2),r=t[0],i=t[1],o=i.data,a=i.isLoading,c=(0,f.E)(),x=c.city,b=c.id,v=c.page;console.log(v),(0,u.useEffect)((function(){r({city:x,id:b,page:v})}),[r,x,b,v]);var y=(null!==(n=null===o||void 0===o?void 0:o.info.totalCount)&&void 0!==n?n:1)<=20*Number(v);return(0,m.jsxs)("section",{children:[(0,m.jsx)("h2",{className:"visually-hidden",children:" \u0421\u043f\u0438\u0441\u043e\u043a \u0432\u0456\u0434\u0434\u0456\u043b\u0435\u043d\u044c "}),a&&(0,m.jsx)(l.a,{}),(0,m.jsx)(g,{children:null===o||void 0===o?void 0:o.data.map((function(n){var e=n.CityDescription,t=n.Description,r=n.ReceivingLimitationsOnDimensions,i=n.Schedule;return(0,m.jsx)(p,{cityName:e,description:t,dimensions:r,schedule:i},t)}))}),(0,m.jsx)(h,{disabled:y})]})},y=t(5861),j=t(4687),Z=t.n(j),k=t(1087),w=b.ZP.form(i||(i=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  border: ",";\n  padding: ","px;\n  margin-bottom: ","px;\n  border-radius: ",";\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n    justify-content: center;\n    padding: ","px;\n  }\n"])),(function(n){return n.theme.borders.statusForm}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.space[4]})),P=b.ZP.label(o||(o=(0,x.Z)(["\n  margin-bottom: ","px;\n\n  @media (min-width: 768px) {\n    margin-bottom: ","px;\n    margin-right: ","px;\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[3]})),S=b.ZP.button(a||(a=(0,x.Z)(["\n  margin-top: ","px;\n  cursor: pointer;\n  padding: ","px ","px;\n  border-radius: ",";\n  background-color: ",";\n  color: ",";\n  transition: 300ms linear;\n\n  :hover {\n    background-color: ",";\n  }\n\n  @media (min-width: 768px) {\n    margin-top: ","px;\n    margin-left: ","px;\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.button}),(function(n){return n.theme.colors.color}),(function(n){return n.theme.colors.hoverBtn}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[3]})),N=b.ZP.input(c||(c=(0,x.Z)(["\n  border: ",";\n  border-bottom: ",";\n  font-size: ","px;\n  background-color: transparent;\n  outline: none;\n  color: ",";\n  margin-bottom: ","px;\n\n  @media (min-width: 768px) {\n    margin-right: ","px;\n    padding: ","px ","px;\n  }\n"])),(function(n){return n.theme.borders.none}),(function(n){return n.theme.borders.statusForm}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[1]}),(function(n){return n.theme.space[2]})),F=function(){var n=(0,d.M)(),e=(0,s.Z)(n,2),t=e[0],r=e[1].isLoading,i=(0,k.lr)(),o=(0,s.Z)(i,2)[1],a=function(){var n=(0,y.Z)(Z().mark((function n(e){var r,i,a,c,s,u;return Z().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),r=e.currentTarget.elements,i=r.city,a=r.id,c={city:i.value,id:a.value},t(c),s=""!==i.value,u=""!==a.value,!s||!u){n.next=11;break}return o({city:i.value,id:a.value}),n.abrupt("return");case 11:if(s||!u){n.next=16;break}return o({id:a.value}),n.abrupt("return");case 16:if(!s||u){n.next=21;break}return o({city:i.value}),n.abrupt("return");case 21:o({});case 22:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,m.jsxs)(m.Fragment,{children:[r&&(0,m.jsx)(l.a,{}),(0,m.jsxs)(w,{onSubmit:a,children:[(0,m.jsx)(P,{htmlFor:"citi",children:"\u041c\u0456\u0441\u0442\u043e"}),(0,m.jsx)(N,{id:"city",type:"text",placeholder:"\u041a\u0438\u0457\u0432",name:"city"}),(0,m.jsx)(P,{htmlFor:"id",children:"\u041d\u043e\u043c\u0435\u0440 \u0432\u0456\u0434\u0434\u0456\u043b\u0435\u043d\u043d\u044f "}),(0,m.jsx)(N,{id:"id",type:"text",placeholder:"151 ",name:"id"}),(0,m.jsx)(S,{type:"submit",children:"\u041f\u043e\u0448\u0443\u043a"})]})]})},C=function(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(F,{}),(0,m.jsx)(v,{})]})}},6549:function(n,e,t){t.d(e,{E:function(){return o}});var r=t(9439),i=t(1087),o=function(){var n,e,t,o,a=(0,i.lr)(),c=(0,r.Z)(a,2),s=c[0],u=c[1],d=null!==(n=s.get("ttnNumber"))&&void 0!==n?n:"";return{city:null!==(e=s.get("city"))&&void 0!==e?e:"",id:null!==(t=s.get("id"))&&void 0!==t?t:"",page:null!==(o=s.get("page"))&&void 0!==o?o:"1",ttnNumber:d,setSearchParams:u}}},5861:function(n,e,t){function r(n,e,t,r,i,o,a){try{var c=n[o](a),s=c.value}catch(u){return void t(u)}c.done?e(s):Promise.resolve(s).then(r,i)}function i(n){return function(){var e=this,t=arguments;return new Promise((function(i,o){var a=n.apply(e,t);function c(n){r(a,i,o,c,s,"next",n)}function s(n){r(a,i,o,c,s,"throw",n)}c(void 0)}))}}t.d(e,{Z:function(){return i}})}}]);
//# sourceMappingURL=739.b22d0928.chunk.js.map