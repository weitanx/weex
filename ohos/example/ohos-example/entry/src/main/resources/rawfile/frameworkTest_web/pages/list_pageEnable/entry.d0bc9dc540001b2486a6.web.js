!function(e){function t(t){for(var r,a,l=t[0],s=t[1],c=t[2],d=0,p=[];d<l.length;d++)a=l[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(u&&u(t);p.length;)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var s=n[l];0!==i[s]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},i={6:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=s;o.push([446,0]),n()}({258:function(e,t,n){var r=n(448);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(6).default)("21271dcc",r,!1,{})},446:function(e,t,n){"use strict";n.r(t);n(9),n(11);var r=n(1),i=n(4),o=n.n(i),a=n(12);window.location.href.includes("static")||new a({theme:"dark"}),o.a.init(r.a);var l=n(600).default;new r.a(r.a.util.extend({el:"#root"},l))},447:function(e,t,n){"use strict";n(258)},448:function(e,t,n){(e.exports=n(5)(!1)).push([e.i,"\n.list-wrap[data-v-e20d7e86] {\n  width: 10rem;\n  flex: 1;\n}\n.item[data-v-e20d7e86] {\n  width: 10rem;\n}\n",""])},600:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"full-page weex-ct weex-div",attrs:{"weex-type":"div"}},[t("div",{staticClass:" weex-ct weex-div",style:e._px2rem(e.weexHarmonyDivStyle,75),attrs:{"weex-type":"div"}},[t("list",{staticClass:"list-wrap weex-harmony-register-808090855-2 weex-harmony-register-808090855-3",staticStyle:{overflow:"hidden !important"},attrs:{"show-scrollbar":!1,"paging-enabled":!0}},e._l(e.itemList,(function(n,r){return t("section",{key:r,staticClass:"weex-harmony-register-808090855-1 weex-ct weex-cell",attrs:{item:n,index:r,"weex-type":"cell"}},[t("div",{staticClass:"item weex-ct weex-div",style:{backgroundColor:n,height:e._px2rem(e.fullHeight+"px",75)},attrs:{"weex-type":"div"}})])})),0)],1)])};r._withStripped=!0;n(181);var i=n(7),o={mixins:[n(123).a],data:function(){return{itemList:["red","green","blue","yellow","purple","orange","pink","black","white","gray"],weexHarmonyDivStyle:""}},created:function(){this.setScreen({isOpen:!0,showStatusMsg:!0,statusMsgColor:0})},methods:{onAppear:function(e,t,n){console.log("显示了",e,t,n)},onDisappear:function(e,t,n){console.log("隐藏了",e,t,n)}},mounted:function(){Object(i.a)([{name:"@appear",handler:this.onAppear,params:["event","index","item"],isEvent:!0,modifier:[]},{name:"@disappear",handler:this.onDisappear,params:["event","index","item"],isEvent:!0,modifier:[]}],"weex-harmony-register-808090855-1"),this.weexHarmonyDivStyle={height:"".concat(document.documentElement.clientHeight/parseFloat(document.documentElement.style.fontSize),"rem")},Object(i.a)([{name:"show-scrollbar",handler:!1,params:[],isEvent:!1,modifier:[]}],"weex-harmony-register-808090855-2"),this.weexHarmonyDivStyle={height:"".concat(document.documentElement.clientHeight/parseFloat(document.documentElement.style.fontSize),"rem")},Object(i.a)([{name:":paging-enabled",handler:"",params:[],isEvent:!1,modifier:[]}],"weex-harmony-register-808090855-3"),this.weexHarmonyDivStyle={height:"".concat(document.documentElement.clientHeight/parseFloat(document.documentElement.style.fontSize),"rem")}}},a=(n(447),n(2)),l=Object(a.a)(o,r,[],!1,null,"e20d7e86",null);t.default=l.exports}});