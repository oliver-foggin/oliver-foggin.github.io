(function(e){function t(t){for(var s,c,i=t[0],o=t[1],l=t[2],f=0,p=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],s=!0,i=1;i<n.length;i++){var o=n[i];0!==r[o]&&(s=!1)}s&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var s={},r={app:0},a=[];function c(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=s,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)c.d(n,s,function(t){return e[t]}.bind(null,s));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=o;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var s=n("85ec"),r=n.n(s);r.a},"117d":function(e,t,n){"use strict";var s=n("401b"),r=n.n(s);r.a},"401b":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("92c6");var s=n("2b0e"),r=(n("7db0"),n("ac1f"),n("841c"),n("fa9f")),a=n.n(r),c=n("2f62");s["a"].use(c["a"]);var i=new c["a"].Store({state:{selectedImageUrl:null,focalPoint:{x:.5,y:.5},searchResults:[],searchText:""},getters:{},mutations:{setFocalPoint:function(e,t){e.focalPoint.x=t.x,e.focalPoint.y=t.y},setSelectedImage:function(e,t){e.selectedImageUrl=t.url},setSearchText:function(e,t){e.searchText=t.searchText},setSearchResults:function(e,t){e.searchResults=t.results}},actions:{searchForAssets:function(e,t){var n=e.commit;console.log("searching"),console.log(t.searchText),a.a.init().then((function(e){var n=e.stack.Asset.Query();return t.searchText&&(n=n.search(t.searchText)),n.limit(10).find()})).then((function(e){console.log(e.assets),n({type:"setSearchResults",results:e.assets})}))}}}),o=i,l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"section",attrs:{id:"app"}},[n("SearchPanel")],1)},u=[],f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",attrs:{id:"searchPanel"}},[n("SearchInput",{attrs:{id:"searchInput"}}),n("SearchResults",{attrs:{id:"searchResults"}})],1)},p=[],h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"columns is-multiline is-mobile",attrs:{id:"results"}},e._l(e.assets,(function(e){return n("ImageListItem",{key:e.uid,attrs:{asset:e}})})),1)},d=[],m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"column is-3"},[n("div",{attrs:{id:"tile"}},[n("figure",{staticClass:"image is-4by3",attrs:{id:"figure"}},[n("img",{attrs:{id:"thumbnail",src:e.asset.url}})]),n("div",{staticClass:"content title"},[e._v(e._s(e.asset.title))])])])},v=[],b={props:{asset:Object}},x=b,y=(n("117d"),n("2877")),g=Object(y["a"])(x,m,v,!1,null,null,null),_=g.exports,O={computed:{assets:function(){return this.$store.state.searchResults}},components:{ImageListItem:_}},S=O,T=Object(y["a"])(S,h,d,!1,null,null,null),j=T.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tile is-parent"},[n("div",{staticClass:"tile is-child"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchText,expression:"searchText"}],staticClass:"input",attrs:{type:"text",placeholder:"Search..."},domProps:{value:e.searchText},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchForAssets(t)},input:function(t){t.target.composing||(e.searchText=t.target.value)}}})])])},P=[],k={data:function(){return{searchText:""}},methods:{searchForAssets:function(){this.$store.dispatch({type:"searchForAssets",searchText:this.searchText})}}},C=k,I=Object(y["a"])(C,w,P,!1,null,null,null),R=I.exports,$={components:{SearchResults:j,SearchInput:R}},A=$,E=(n("e8c9"),Object(y["a"])(A,f,p,!1,null,null,null)),F=E.exports,M={name:"app",components:{SearchPanel:F},mounted:function(){a.a.init().then((function(e){e.window.enableAutoResizing()}))}},J=M,L=(n("034f"),Object(y["a"])(J,l,u,!1,null,null,null)),U=L.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(U)},store:o}).$mount("#app")},"85ec":function(e,t,n){},d9a5:function(e,t,n){},e8c9:function(e,t,n){"use strict";var s=n("d9a5"),r=n.n(s);r.a}});
//# sourceMappingURL=app.0de36510.js.map