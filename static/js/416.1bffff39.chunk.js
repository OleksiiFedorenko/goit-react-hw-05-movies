"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[416],{416:function(t,r,e){e.r(r),e.d(r,{default:function(){return I}});var n=e(439),a=e(791),A=e(689),u=e(230),s=e(577),i=e(184),I=function(){var t=(0,A.UO)().movieId,r=(0,a.useState)([]),e=(0,n.Z)(r,2),I=e[0],g=e[1];return(0,a.useEffect)((function(){(0,u.uV)(t).then(g).catch(console.log)}),[t]),I.length?(0,i.jsx)("ul",{children:I.map((function(t){var r=t.name,e=t.character,n=t.profile_path,a=n?"https://www.themoviedb.org/t/p/w300_and_h450_bestv2".concat(n):"data:image/png;base64,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";return(0,i.jsxs)("li",{children:[(0,i.jsx)("img",{src:a,alt:r,width:"150"}),(0,i.jsxs)("div",{children:["Acthor name: ",r]}),(0,i.jsxs)("div",{children:["Character: ",e]})]},r)}))}):(0,i.jsx)(s.Z,{message:"No cast info found"})}},230:function(t,r,e){e.d(r,{Hx:function(){return m},LI:function(){return g},Y5:function(){return c},uV:function(){return B},wr:function(){return I}});var n=e(861),a=e(757),A=e.n(a),u=e(243);u.Z.defaults.baseURL="";var s="1d78fd1734a54a82c67aadef48a71616",i="https://api.themoviedb.org/3/",I=function(){var t=(0,n.Z)(A().mark((function t(){var r,e;return A().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i+"trending/movie/day",r={url:"https://api.themoviedb.org/3/trending/movie/day",params:{api_key:s}},t.next=4,(0,u.Z)(r);case 4:return e=t.sent,t.abrupt("return",e.data.results);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),g=function(){var t=(0,n.Z)(A().mark((function t(r){var e,n;return A().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i+"search/movie",e={url:"https://api.themoviedb.org/3/search/movie",params:{api_key:s,query:r,language:"en-US",include_adult:!1}},t.next=4,(0,u.Z)(e);case 4:return n=t.sent,t.abrupt("return",n.data.results);case 6:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),c=function(){var t=(0,n.Z)(A().mark((function t(r){var e,n,a;return A().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(i,"movie/").concat(r),n={url:e,params:{api_key:s,language:"en-US"}},t.next=4,(0,u.Z)(n);case 4:return a=t.sent,t.abrupt("return",a.data);case 6:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),B=function(){var t=(0,n.Z)(A().mark((function t(r){var e,n,a;return A().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(i,"movie/").concat(r,"/credits"),n={url:e,params:{api_key:s,language:"en-US"}},t.next=4,(0,u.Z)(n);case 4:return a=t.sent,t.abrupt("return",a.data.cast);case 6:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),m=function(){var t=(0,n.Z)(A().mark((function t(r){var e,n,a;return A().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(i,"movie/").concat(r,"/reviews"),n={url:e,params:{api_key:s,language:"en-US"}},t.next=4,(0,u.Z)(n);case 4:return a=t.sent,t.abrupt("return",a.data.results);case 6:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=416.1bffff39.chunk.js.map