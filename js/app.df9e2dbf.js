(function(t){function e(e){for(var n,r,c=e[0],o=e[1],l=e[2],d=0,h=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&h.push(a[r][0]),a[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(e);while(h.length)h.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],n=!0,c=1;c<s.length;c++){var o=s[c];0!==a[o]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=s[0]))}return t}var n={},a={app:0},i=[];function r(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=n,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(s,n,function(e){return t[e]}.bind(null,n));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var n=s("85ec"),a=s.n(n);a.a},"4bfe":function(t,e,s){"use strict";var n=s("8319"),a=s.n(n);a.a},"4d75":function(t,e,s){},5442:function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d"),s("92c6");var n=s("2b0e"),a=(s("7db0"),s("ac1f"),s("841c"),s("fa9f")),i=s.n(a),r=s("2f62");n["a"].use(r["a"]);var c=new r["a"].Store({state:{selectedAsset:null,focalPoint:{x:.5,y:.5},searchResults:[],searchText:"",extension:null},mutations:{loadAllData:function(t,e){t.focalPoint=e.focalPoint,t.selectedAsset=e.selectedAsset,t.extension=e.extension},setFocalPoint:function(t,e){t.focalPoint=e.focalPoint,this.dispatch("saveData")},setSelectedAsset:function(t,e){t.selectedAsset=e.asset,t.focalPoint={x:.5,y:.5},this.dispatch("saveData")},setSearchText:function(t,e){t.searchText=e.searchText},setSearchResults:function(t,e){t.searchResults=e.results}},actions:{loadSavedValues:function(t){var e=t.commit;try{i.a.init().then((function(t){var s=t.field.getData();t.window.updateHeight(600),t.window.enableAutoResizing(),e({type:"loadAllData",focalPoint:s.focal_point||{x:.5,y:.5},selectedAsset:s.asset,extension:t})}))}catch(s){}},searchForAssets:function(t,e){var s=t.state,n=t.commit;try{var a=s.extension.stack.Asset.Query();e.searchText&&(a=a.search(e.searchText)),a.limit(10).find().then((function(t){n({type:"setSearchResults",results:t.assets})}))}catch(i){}},saveData:function(t){var e=t.state;try{e.extension.field.setData({asset:e.selectedAsset,focal_point:e.focalPoint})}catch(s){}}}}),o=c,l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"section",attrs:{id:"app"}},[t.showImage?s("ImagePanel"):s("SearchPanel")],1)},u=[],d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tile is-ancestor is-vertical",attrs:{id:"searchPanel"}},[s("div",[s("SearchInput",{attrs:{id:"searchInput"}})],1),s("div",{staticClass:"tile is-parent is-vertical",attrs:{id:"searchResults"}},t._l(t.assets,(function(t){return s("div",{key:t.uid,staticClass:"tile is-child"},[s("ImageListItem",{attrs:{asset:t}})],1)})),0)])},h=[],f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tile is-parent"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],staticClass:"input",attrs:{type:"text",placeholder:"Search..."},domProps:{value:t.searchText},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchForAssets(e)},input:function(e){e.target.composing||(t.searchText=e.target.value)}}})])},p=[],m={data:function(){return{searchText:""}},methods:{searchForAssets:function(){this.$store.dispatch({type:"searchForAssets",searchText:this.searchText})}}},v=m,x=s("2877"),g=Object(x["a"])(v,f,p,!1,null,null,null),y=g.exports,b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"media",attrs:{id:"tile"},on:{click:t.selectImage}},[s("figure",{staticClass:"media-left"},[s("p",{staticClass:"image is-64x64"},[s("img",{attrs:{id:"thumbnail",src:t.asset.url}})])]),s("div",{staticClass:"media-content"},[s("div",{staticClass:"title is-6"},[t._v(t._s(t.asset.title)+" : "+t._s(t.asset.uid))])])])},P=[],_={props:{asset:Object},methods:{selectImage:function(){this.$store.commit({type:"setSelectedAsset",asset:this.asset})}}},S=_,w=(s("711b"),Object(x["a"])(S,b,P,!1,null,null,null)),C=w.exports,I={computed:{assets:function(){return this.$store.state.searchResults}},components:{SearchInput:y,ImageListItem:C}},$=I,k=(s("9945"),Object(x["a"])($,d,h,!1,null,null,null)),A=k.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tile is-ancestor",attrs:{id:"container"}},[s("div",{staticClass:"tile is-parent is-vertical"},[s("div",{staticClass:"tile is-child"},[s("SelectedImage",{attrs:{id:"bigImage"}})],1),s("div",{staticClass:"tile is-child"},[s("div",{staticClass:"title is-6"},[t._v(t._s(t.asset.title)+": "+t._s(t.asset.uid))])]),s("div",{staticClass:"tile is-child"},[s("div",{staticClass:"title is-6"},[t._v("Focal Point: { x: "+t._s(t.focalPoint.x)+", y: "+t._s(t.focalPoint.y)+" }")])]),s("button",{staticClass:"button is-danger",on:{click:t.clearSelectedImage}},[t._v(" Select another image. ")])])])},T=[],j=(s("b680"),s("acd8"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("img",{attrs:{id:"selectedImage",src:t.imageURL},on:{click:t.getClickLocation,load:t.loaded}}),s("canvas",{attrs:{id:"crosshair",focalPoint:t.updateCrosshair}})])}),F=[],M=s("2ef0"),R=function(t,e){return{x:Math.abs(t.clientX-e.x),y:Math.abs(t.clientY-e.y)}},D=function(t){return Math.min(t.height/t.naturalHeight,t.width/t.naturalWidth)},E=function(t){return{x:Math.abs(t.naturalWidth*D(t)-t.width)/2,y:Math.abs(t.naturalHeight*D(t)-t.height)/2,width:t.naturalWidth*D(t),height:t.naturalHeight*D(t)}},L=function(t,e){return function(s){return Math.min(e,Math.max(t,s))}},q=L(0,1),H=function(t,e){var s=R(t,e),n=E(e);return{x:s.x-n.x,y:s.y-n.y}},W=function(t,e){var s=E(e),n=H(t,e);return{x:q(n.x/s.width),y:q(n.y/s.height)}},J=function(t,e){var s=E(e);return{x:s.x+s.width*t.x,y:s.y+s.height*t.y}},U=function(t){var e=document.querySelector("#selectedImage"),s=document.querySelector("#crosshair"),n=J(t,e),a=s.getContext("2d");a.clearRect(0,0,s.width,s.height),a.beginPath(),a.strokeStyle="#f00",a.lineWidth=3,a.rect(n.x-15,n.y-15,30,30),a.stroke()},V={computed:{imageURL:function(){return this.$store.state.selectedAsset.url},updateCrosshair:function(){return this.$store.state.focalPoint}},methods:{getClickLocation:function(t){var e=document.querySelector("#selectedImage");this.$store.commit({type:"setFocalPoint",focalPoint:W(t,e)})},refresh:function(){var t=this;Object(M["debounce"])((function(){var e=document.querySelector("#crosshair"),s=document.querySelector("#selectedImage");e.width=s.clientWidth,e.height=s.clientHeight,e.top=s.clientLeft,e.left=s.clientTop,U(t.$store.state.focalPoint)}),100)()},loaded:function(){this.refresh()}},updated:function(){var t=this;this.$nextTick((function(){return t.refresh()}))},mounted:function(){var t=this;this.$nextTick((function(){return t.refresh()}))}},z=V,N=(s("daea"),Object(x["a"])(z,j,F,!1,null,null,null)),Q=N.exports,X={computed:{asset:function(){return this.$store.state.selectedAsset},focalPoint:function(){var t=this.$store.state.focalPoint;return{x:parseFloat(t.x).toFixed(3),y:parseFloat(t.y).toFixed(3)}}},components:{SelectedImage:Q},methods:{clearSelectedImage:function(){this.$store.commit({type:"setSelectedAsset",asset:null})}}},Y=X,B=(s("4bfe"),Object(x["a"])(Y,O,T,!1,null,null,null)),G=B.exports,K={name:"app",computed:{showImage:function(){return this.$store.state.selectedAsset}},components:{SearchPanel:A,ImagePanel:G},mounted:function(){var t=this;this.$nextTick((function(){t.$store.dispatch("loadSavedValues")}))}},Z=K,tt=(s("034f"),Object(x["a"])(Z,l,u,!1,null,null,null)),et=tt.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(et)},store:o}).$mount("#app")},"711b":function(t,e,s){"use strict";var n=s("7c92"),a=s.n(n);a.a},"7c92":function(t,e,s){},8319:function(t,e,s){},"85ec":function(t,e,s){},9945:function(t,e,s){"use strict";var n=s("4d75"),a=s.n(n);a.a},daea:function(t,e,s){"use strict";var n=s("5442"),a=s.n(n);a.a}});
//# sourceMappingURL=app.df9e2dbf.js.map