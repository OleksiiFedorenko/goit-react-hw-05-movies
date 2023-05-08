"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[836],{836:function(e,r,n){n.r(r),n.d(r,{default:function(){return f}});var t,a=n(439),s=n(791),i=n(689),c=n(87),u=n(230),o=n(168),d=n(444).ZP.div(t||(t=(0,o.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 10px;\n"]))),p=n(184),l=function(e){var r=e.data,n=r.poster_path,t=r.original_title,a=r.release_date,s=r.vote_average,i=r.overview,c=r.genres,u="https://image.tmdb.org/t/p/w600_and_h900_bestv2".concat(n),o="Poster of ".concat(t),l="".concat(t," (").concat(a.slice(0,4),")"),h=c.map((function(e){return e.name})).join(", ");return(0,p.jsxs)(d,{children:[(0,p.jsx)("img",{src:u,alt:o,width:"200",height:"300"}),(0,p.jsxs)("div",{children:[(0,p.jsx)("h1",{children:l}),(0,p.jsxs)("p",{children:["User Score: ",s]}),(0,p.jsx)("h2",{children:"Overview"}),(0,p.jsx)("p",{children:i}),(0,p.jsx)("h3",{children:"Genres"}),(0,p.jsx)("p",{children:h})]})]})},h=n(577),f=function(){var e,r,n=(0,i.TH)(),t=(0,s.useRef)(null!==(e=null===(r=n.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/movies"),o=(0,i.UO)().movieId,d=(0,s.useState)(),f=(0,a.Z)(d,2),v=f[0],x=f[1],m=(0,s.useState)(!1),g=(0,a.Z)(m,2),j=g[0],w=g[1];return(0,s.useEffect)((function(){(0,u.Y5)(o).then(x).catch(w)}),[o]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(c.rU,{to:t.current,children:"Go back"}),v&&(0,p.jsx)(l,{data:v}),v&&(0,p.jsxs)("div",{children:[(0,p.jsx)("h4",{children:"Additional info"}),(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:(0,p.jsx)(c.rU,{to:"cast",children:"Cast"})}),(0,p.jsx)("li",{children:(0,p.jsx)(c.rU,{to:"reviews",children:"Reviews"})})]})]}),j&&(0,p.jsx)(h.Z,{message:"This page doesn't exist or something went wrong. Please try different page or try again later."}),(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)("div",{children:"Loading..."}),children:(0,p.jsx)(i.j3,{})})]})}},230:function(e,r,n){n.d(r,{Hx:function(){return h},LI:function(){return d},Y5:function(){return p},uV:function(){return l},wr:function(){return o}});var t=n(861),a=n(757),s=n.n(a),i=n(243);i.Z.defaults.baseURL="";var c="1d78fd1734a54a82c67aadef48a71616",u="https://api.themoviedb.org/3/",o=function(){var e=(0,t.Z)(s().mark((function e(){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u+"trending/movie/day",r={url:"https://api.themoviedb.org/3/trending/movie/day",params:{api_key:c}},e.next=4,(0,i.Z)(r);case 4:return n=e.sent,e.abrupt("return",n.data.results);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u+"search/movie",n={url:"https://api.themoviedb.org/3/search/movie",params:{api_key:c,query:r,language:"en-US",include_adult:!1}},e.next=4,(0,i.Z)(n);case 4:return t=e.sent,e.abrupt("return",t.data.results);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(u,"movie/").concat(r),t={url:n,params:{api_key:c,language:"en-US"}},e.next=4,(0,i.Z)(t);case 4:return a=e.sent,e.abrupt("return",a.data);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(u,"movie/").concat(r,"/credits"),t={url:n,params:{api_key:c,language:"en-US"}},e.next=4,(0,i.Z)(t);case 4:return a=e.sent,e.abrupt("return",a.data.cast);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(u,"movie/").concat(r,"/reviews"),t={url:n,params:{api_key:c,language:"en-US"}},e.next=4,(0,i.Z)(t);case 4:return a=e.sent,e.abrupt("return",a.data.results);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=836.2085ee3f.chunk.js.map