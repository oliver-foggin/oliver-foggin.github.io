(function(t){function e(e){for(var s,c,i=e[0],l=e[1],o=e[2],f=0,p=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,o||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],s=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(s=!1)}s&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var s={},r={app:0},a=[];function c(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=s,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(n,s,function(e){return t[e]}.bind(null,s));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var o=0;o<i.length;o++)e(i[o]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var s=n("85ec"),r=n.n(s);r.a},"117d":function(t,e,n){"use strict";var s=n("401b"),r=n.n(s);r.a},"401b":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("92c6");var s=n("2b0e"),r=(n("7db0"),n("fa9f")),a=n.n(r),c=n("2f62");s["a"].use(c["a"]);var i=new c["a"].Store({state:{selectedImageUrl:null,focalPoint:{x:.5,y:.5},searchResults:[],searchText:""},getters:{},mutations:{setFocalPoint:function(t,e){t.focalPoint.x=e.x,t.focalPoint.y=e.y},setSelectedImage:function(t,e){t.selectedImageUrl=e.url},setSearchText:function(t,e){t.searchText=e.searchText},setSearchResults:function(t,e){t.searchResults=e.results}},actions:{searchForAssets:function(t){var e=t.commit;console.log("searching"),a.a.init().then((function(t){var e=t.stack.Asset.Query();return e.limit(10).find()})).then((function(t){console.log(t.assets),e({type:"setSearchResults",results:t.assets})}))}}}),l=i,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section",attrs:{id:"app"}},[n("div",{staticClass:"content title"},[t._v("Hello")]),n("SearchPanel")],1)},u=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",attrs:{id:"searchPanel"}},[n("SearchInput",{attrs:{id:"searchInput"}}),n("SearchResults",{attrs:{id:"searchResults"}})],1)},p=[],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"columns is-multiline is-mobile",attrs:{id:"results"}},t._l(t.assets,(function(t){return n("ImageListItem",{key:t,attrs:{blah:t}})})),1)},h=[],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"column is-3"},[n("div",{attrs:{id:"tile"}},[n("figure",{staticClass:"image is-4by3",attrs:{id:"figure"}},[n("img",{attrs:{id:"thumbnail",src:t.asset.url}})]),n("div",{staticClass:"content title"},[t._v(t._s(t.asset.title))])])])},m=[],b={props:{asset:Object}},y=b,g=(n("117d"),n("2877")),x=Object(g["a"])(y,v,m,!1,null,null,null),_=x.exports,O={computed:{assets:function(){return this.$store.state.searchResults}},components:{ImageListItem:_}},S=O,j=Object(g["a"])(S,d,h,!1,null,null,null),w=j.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tile is-parent"},[n("div",{staticClass:"tile is-child"},[n("input",{staticClass:"input",attrs:{type:"text",placeholder:"Search..."},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchForAssets(e)}}})])])},C=[],k={methods:{searchForAssets:function(){this.$store.dispatch({type:"searchForAssets",searchText:"Hello world!"})}}},I=k,R=Object(g["a"])(I,P,C,!1,null,null,null),T=R.exports,$={components:{SearchResults:w,SearchInput:T}},A=$,E=(n("e8c9"),Object(g["a"])(A,f,p,!1,null,null,null)),F=E.exports,M={name:"app",components:{SearchPanel:F},mounted:function(){a.a.init().then((function(t){t.window.enableAutoResizing()}))}},H=M,J=(n("034f"),Object(g["a"])(H,o,u,!1,null,null,null)),L=J.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(L)},store:l}).$mount("#app")},"85ec":function(t,e,n){},d9a5:function(t,e,n){},e8c9:function(t,e,n){"use strict";var s=n("d9a5"),r=n.n(s);r.a}});
//# sourceMappingURL=app.40ef1d5f.js.map