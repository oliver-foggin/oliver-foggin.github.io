(function(t){function e(e){for(var n,c,r=e[0],o=e[1],l=e[2],d=0,f=[];d<r.length;d++)c=r[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],n=!0,r=1;r<s.length;r++){var o=s[r];0!==a[o]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=s[0]))}return t}var n={},a={app:0},i=[];function c(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.m=t,c.c=n,c.d=function(t,e,s){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(s,n,function(e){return t[e]}.bind(null,n));return s},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=o;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var n=s("85ec"),a=s.n(n);a.a},"4bfe":function(t,e,s){"use strict";var n=s("8319"),a=s.n(n);a.a},"4d75":function(t,e,s){},5442:function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d"),s("92c6");var n=s("2b0e"),a=(s("7db0"),s("ac1f"),s("841c"),s("fa9f")),i=s.n(a),c=s("2f62");n["a"].use(c["a"]);var r=new c["a"].Store({state:{selectedAsset:null,focalPoint:{x:0,y:0},searchResults:[],searchText:"",extension:null},mutations:{loadAllData:function(t,e){t.focalPoint=e.focalPoint,t.selectedAsset=e.asset,t.extension=e.extension},setFocalPoint:function(t,e){t.focalPoint=e.focalPoint,this.dispatch("saveData")},setSelectedAsset:function(t,e){t.selectedAsset=e.asset,this.dispatch("saveData")},setSearchText:function(t,e){t.searchText=e.searchText},setSearchResults:function(t,e){t.searchResults=e.results}},actions:{loadSavedValues:function(t){var e=t.commit;i.a.init().then((function(t){var s=t.field.getData();t.window.updateHeight(600),t.window.enableAutoResizing(),e({type:"loadAllData",focalPoint:s.focal_point||{x:.5,y:.5},selectedAsset:s.asset,extension:t})}))},searchForAssets:function(t,e){var s=t.commit;i.a.init().then((function(t){var s=t.stack.Asset.Query();return e.searchText&&(s=s.search(e.searchText)),s.limit(10).find()})).then((function(t){s({type:"setSearchResults",results:t.assets})}))},saveData:function(t){var e=t.state;i.a.init().then((function(t){t.field.setData({asset:e.selectedAsset,focal_point:e.focalPoint})}))}}}),o=r,l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"section",attrs:{id:"app"}},[t.showImage?s("ImagePanel"):s("SearchPanel")],1)},u=[],d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container",attrs:{id:"searchPanel"}},[s("SearchInput",{attrs:{id:"searchInput"}}),s("SearchResults",{attrs:{id:"searchResults"}})],1)},f=[],h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"columns is-multiline is-mobile"},t._l(t.assets,(function(t){return s("ImageListItem",{key:t.uid,attrs:{asset:t}})})),1)},p=[],m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"column is-3"},[s("div",{attrs:{id:"tile"},on:{click:t.selectImage}},[s("figure",{staticClass:"image is-4by3"},[s("img",{attrs:{id:"thumbnail",src:t.asset.url}})]),s("div",{staticClass:"content title"},[t._v(t._s(t.asset.title))])])])},v=[],g={props:{asset:Object},methods:{selectImage:function(){this.$store.commit({type:"setSelectedAsset",asset:this.asset})}}},x=g,y=(s("711b"),s("2877")),b=Object(y["a"])(x,m,v,!1,null,null,null),_=b.exports,P={computed:{assets:function(){return this.$store.state.searchResults}},components:{ImageListItem:_}},S=P,w=Object(y["a"])(S,h,p,!1,null,null,null),C=w.exports,A=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tile is-parent"},[s("div",{staticClass:"tile is-child"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],staticClass:"input",attrs:{type:"text",placeholder:"Search..."},domProps:{value:t.searchText},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchForAssets(e)},input:function(e){e.target.composing||(t.searchText=e.target.value)}}})])])},I=[],O={data:function(){return{searchText:""}},methods:{searchForAssets:function(){this.$store.dispatch({type:"searchForAssets",searchText:this.searchText})}}},$=O,j=Object(y["a"])($,A,I,!1,null,null,null),T=j.exports,k={components:{SearchResults:C,SearchInput:T}},F=k,M=(s("9945"),Object(y["a"])(F,d,f,!1,null,null,null)),R=M.exports,E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tile is-ancestor is-mobile",attrs:{id:"container"}},[s("div",{staticClass:"tile is-vertical is-parent is-3"},[s("div",{staticClass:"tile is-child box"},[s("div",{staticClass:"title is-4"},[t._v(t._s(t.asset.title))]),s("div",[t._v(t._s(t.asset.uid))])]),s("div",{staticClass:"tile is-child box"},[s("div",{staticClass:"title is-4"},[t._v("Focal Point")]),s("div",[t._v("x: "+t._s(t.focalPoint.x))]),s("div",[t._v("y: "+t._s(t.focalPoint.y))])]),s("div",{staticClass:"button is-danger box",on:{click:t.clearSelectedImage}},[t._v(" Select another image. ")])]),s("div",{staticClass:"tile is-parent"},[s("div",{staticClass:"tile is-child image"},[s("SelectedImage",{attrs:{id:"bigImage"}})],1)])])},D=[],L=(s("b680"),s("acd8"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("img",{attrs:{id:"selectedImage",src:t.imageURL},on:{click:t.getClickLocation}})])}),H=[],W=function(t,e){return{x:Math.abs(t.clientX-e.x),y:Math.abs(t.clientY-e.y)}},J=function(t){return Math.min(t.height/t.naturalHeight,t.width/t.naturalWidth)},U=function(t){return{x:Math.abs(t.naturalWidth*J(t)-t.width)/2,y:Math.abs(t.naturalHeight*J(t)-t.height)/2,width:t.naturalWidth*J(t),height:t.naturalHeight*J(t)}},V=function(t,e){return function(s){return Math.min(e,Math.max(t,s))}},q=V(0,1),z=function(t,e){var s=W(t,e),n=U(e);return{x:s.x-n.x,y:s.y-n.y}},N=function(t,e){var s=U(e),n=z(t,e);return{x:q(n.x/s.width),y:q(n.y/s.height)}},Q={computed:{imageURL:function(){return this.$store.state.selectedAsset.url}},methods:{getClickLocation:function(t){var e=document.querySelector("#selectedImage");this.$store.commit({type:"setFocalPoint",focalPoint:N(t,e)})}}},X=Q,Y=(s("daea"),Object(y["a"])(X,L,H,!1,null,null,null)),B=Y.exports,G={computed:{asset:function(){return this.$store.state.selectedAsset},focalPoint:function(){var t=this.$store.state.focalPoint;return{x:parseFloat(t.x).toFixed(3),y:parseFloat(t.y).toFixed(3)}}},components:{SelectedImage:B},methods:{clearSelectedImage:function(){this.$store.commit({type:"setSelectedAsset",asset:null})}}},K=G,Z=(s("4bfe"),Object(y["a"])(K,E,D,!1,null,null,null)),tt=Z.exports,et={name:"app",computed:{showImage:function(){return console.log("calculating show or not."),console.log(this.$store.state.selectedAsset),this.$store.state.selectedAsset}},components:{SearchPanel:R,ImagePanel:tt},mounted:function(){console.log("21"),this.$store.dispatch({type:"loadSavedValues"})}},st=et,nt=(s("034f"),Object(y["a"])(st,l,u,!1,null,null,null)),at=nt.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(at)},store:o}).$mount("#app")},"711b":function(t,e,s){"use strict";var n=s("7c92"),a=s.n(n);a.a},"7c92":function(t,e,s){},8319:function(t,e,s){},"85ec":function(t,e,s){},9945:function(t,e,s){"use strict";var n=s("4d75"),a=s.n(n);a.a},daea:function(t,e,s){"use strict";var n=s("5442"),a=s.n(n);a.a}});
//# sourceMappingURL=app.f90f6688.js.map