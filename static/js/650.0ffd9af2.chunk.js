"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[650],{126:function(e,t,r){var n=r(689),a=r(87),u=r(184);t.Z=function(e){var t=e.movies,r=(0,n.TH)();return(0,u.jsx)("ul",{children:t.map((function(e){var t=e.title,n=e.id;return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"/"===r.pathname?"movies/".concat(n):"".concat(n),state:{from:r},children:t})},n)}))})}},650:function(e,t,r){r.r(t),r.d(t,{default:function(){return p}});var n=r(439),a=r(791),u=r(87),c=r(230),o=r(184),s=function(e){var t=e.fetchData,r=(0,u.lr)(),c=(0,n.Z)(r,2),s=c[0],i=c[1],f=(0,a.useState)((function(){var e;return null!==(e=s.get("query"))&&void 0!==e?e:""})),p=(0,n.Z)(f,2),l=p[0],v=p[1];return(0,o.jsxs)("form",{onSubmit:function(e){e.preventDefault();var r=e.target.input.value.trim();i(r?{query:r}:{}),t(r)},children:[(0,o.jsx)("input",{type:"text",name:"input",value:l,onChange:function(e){return v(e.target.value)}}),(0,o.jsx)("button",{children:"Search"})]})},i=r(126),f=r(577),p=function(){var e=(0,u.lr)(),t=(0,n.Z)(e,1)[0],r=(0,a.useState)(!1),p=(0,n.Z)(r,2),l=p[0],v=p[1];(0,a.useEffect)((function(){var e=t.get("query");e&&(0,c.LI)(e).then(v).catch(console.log)}),[t]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s,{fetchData:function(e){if(!e)return v(!1);(0,c.LI)(e).then(v).catch(console.log)}}),l?(0,o.jsx)(i.Z,{movies:l}):(0,o.jsx)(f.Z,{message:"Please let us know what are you looking for."}),!l.length&&(0,o.jsx)(f.Z,{message:"No movies found, please try different query."})]})}},230:function(e,t,r){r.d(t,{Hx:function(){return v},LI:function(){return f},Y5:function(){return p},uV:function(){return l},wr:function(){return i}});var n=r(861),a=r(757),u=r.n(a),c=r(243);c.Z.defaults.baseURL="";var o="1d78fd1734a54a82c67aadef48a71616",s="https://api.themoviedb.org/3/",i=function(){var e=(0,n.Z)(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s+"trending/movie/day",t={url:"https://api.themoviedb.org/3/trending/movie/day",params:{api_key:o}},e.next=4,(0,c.Z)(t);case 4:return r=e.sent,e.abrupt("return",r.data.results);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s+"search/movie",r={url:"https://api.themoviedb.org/3/search/movie",params:{api_key:o,query:t,language:"en-US",include_adult:!1}},e.next=4,(0,c.Z)(r);case 4:return n=e.sent,e.abrupt("return",n.data.results);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(s,"movie/").concat(t),n={url:r,params:{api_key:o,language:"en-US"}},e.next=4,(0,c.Z)(n);case 4:return a=e.sent,e.abrupt("return",a.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(s,"movie/").concat(t,"/credits"),n={url:r,params:{api_key:o,language:"en-US"}},e.next=4,(0,c.Z)(n);case 4:return a=e.sent,e.abrupt("return",a.data.cast);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(s,"movie/").concat(t,"/reviews"),n={url:r,params:{api_key:o,language:"en-US"}},e.next=4,(0,c.Z)(n);case 4:return a=e.sent,e.abrupt("return",a.data.results);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=650.0ffd9af2.chunk.js.map