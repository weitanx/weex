!function(e){function t(t){for(var a,o,i=t[0],n=t[1],c=t[2],w=0,x=[];w<i.length;w++)o=i[w],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&x.push(r[o][0]),r[o]=0;for(a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);for(d&&d(t);x.length;)x.shift()();return l.push.apply(l,c||[]),s()}function s(){for(var e,t=0;t<l.length;t++){for(var s=l[t],a=!0,i=1;i<s.length;i++){var n=s[i];0!==r[n]&&(a=!1)}a&&(l.splice(t--,1),e=o(o.s=s[0]))}return e}var a={},r={7:0},l=[];function o(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=a,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(s,a,function(t){return e[t]}.bind(null,a));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var i=window.webpackJsonp=window.webpackJsonp||[],n=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var d=n;l.push([449,0]),s()}({259:function(e,t,s){var a=s(451);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,s(6).default)("0b0a67a9",a,!1,{})},449:function(e,t,s){"use strict";s.r(t);s(9),s(11);var a=s(1),r=s(4),l=s.n(r),o=s(12);window.location.href.includes("static")||new o({theme:"dark"}),l.a.init(a.a);var i=s(601).default;new a.a(a.a.util.extend({el:"#root"},i))},450:function(e,t,s){"use strict";s(259)},451:function(e,t,s){(e.exports=s(5)(!1)).push([e.i,"\n.top {\n    height: 0.8rem;\n    overflow-x: scroll;\n    display: flex;\n}\n.tilte {\n    font-weight: 700;\n}\n.list {\n  background-color: beige;\n  width: 10rem;\n  height: 12rem;\n}\n.marg {\n  margin-top: 0.53333rem;\n  margin-bottom: 0.13333rem;\n}\n",""])},601:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:" weex-ct weex-div",attrs:{"weex-type":"div"}},[t("div",{staticClass:"marg weex-ct weex-div",attrs:{"weex-type":"div"}}),e._v(" "),t("div",{staticClass:"tilte weex-ct weex-div",attrs:{"weex-type":"div"}},[e._v(':show-scrollbar="false" ')]),e._v(" "),t("list",{staticClass:"list weex-harmony-register--1590753875-1",attrs:{"offset-accuracy":"10","show-scrollbar":!1,loadmoreoffset:900,scrollable:!0,"data-evt-scroll":"","data-evt-loadmore":""},nativeOn:{loadmore:e.onloadmore,weex$scroll:function(t){return t.stopPropagation(),e.onscroll.apply(null,arguments)}}},[t("header",[t("p",{ref:"status1",staticClass:" weex-el weex-text",staticStyle:{"font-size":"0.53333rem"},attrs:{"test-id":"status1","weex-type":"text"}},[e._v(e._s(e.status))])]),e._v(" "),e._l(e.rows,(function(s){return t("section",{key:s.index,staticClass:" weex-ct weex-cell",staticStyle:{padding:"0.13333rem"},attrs:{"weex-type":"cell"}},[t("p",{staticClass:" weex-el weex-text",staticStyle:{width:"10rem",height:"2rem","background-color":"aqua"},attrs:{"weex-type":"text"}},[e._v("\n        "+e._s(s.id)+"\n      ")])])}))],2),e._v(" "),t("div",{staticClass:"marg weex-ct weex-div",attrs:{"weex-type":"div"}}),e._v(" "),t("div",{staticClass:"tilte weex-ct weex-div",attrs:{"weex-type":"div"}},[e._v(':show-scrollbar="true"')]),e._v(" "),t("list",{staticClass:"weex-harmony-register--1590753875-2",staticStyle:{"background-color":"beige",width:"10rem",height:"12rem"},attrs:{"offset-accuracy":"10","show-scrollbar":!0,loadmoreoffset:10,scrollable:!0,"data-evt-scroll":"","data-evt-loadmore":""},nativeOn:{loadmore:e.onloadmore,weex$scroll:function(t){return t.stopPropagation(),e.onscroll.apply(null,arguments)}}},[t("header",[t("p",{ref:"status2",staticClass:" weex-el weex-text",staticStyle:{"font-size":"0.53333rem"},attrs:{"test-id":"status2","weex-type":"text"}},[e._v(e._s(e.status))])]),e._v(" "),e._l(e.rows,(function(s){return t("section",{key:s.index,staticClass:" weex-ct weex-cell",staticStyle:{padding:"0.13333rem"},attrs:{"weex-type":"cell"}},[t("p",{staticClass:" weex-el weex-text",staticStyle:{width:"10rem",height:"2rem","background-color":"aqua"},attrs:{"weex-type":"text"}},[e._v("\n        "+e._s(s.id)+"\n      ")])])}))],2),e._v(" "),t("div",{staticClass:"marg weex-ct weex-div",attrs:{"weex-type":"div"}}),e._v(" "),t("div",{staticClass:"tilte weex-ct weex-div",attrs:{"weex-type":"div"}},[e._v("show-scrollbar")]),e._v(" "),t("list",{staticClass:"weex-harmony-register--1590753875-3",staticStyle:{"background-color":"beige",width:"10rem",height:"12rem"},attrs:{"offset-accuracy":"10","show-scrollbar":"",loadmoreoffset:10,scrollable:!0,"data-evt-scroll":"","data-evt-loadmore":""},nativeOn:{loadmore:e.onloadmore,weex$scroll:function(t){return t.stopPropagation(),e.onscroll.apply(null,arguments)}}},[t("header",[t("p",{ref:"status2",staticClass:" weex-el weex-text",staticStyle:{"font-size":"0.53333rem"},attrs:{"test-id":"status2","weex-type":"text"}},[e._v(e._s(e.status))])]),e._v(" "),e._l(e.rows,(function(s){return t("section",{key:s.index,staticClass:" weex-ct weex-cell",staticStyle:{padding:"0.13333rem"},attrs:{"weex-type":"cell"}},[t("p",{staticClass:" weex-el weex-text",staticStyle:{width:"10rem",height:"2rem","background-color":"aqua"},attrs:{"weex-type":"text"}},[e._v("\n        "+e._s(s.id)+"\n      ")])])}))],2),e._v(" "),t("div",{staticClass:"marg weex-ct weex-div",attrs:{"weex-type":"div"}}),e._v(" "),t("div",{staticClass:"tilte weex-ct weex-div",attrs:{"weex-type":"div"}},[e._v(':show-scrollbar="showScrollbar"')]),e._v(" "),t("list",{staticClass:"weex-harmony-register--1590753875-4",staticStyle:{"background-color":"beige",width:"10rem",height:"12rem"},attrs:{"offset-accuracy":"10","show-scrollbar":e.showScrollbar,loadmoreoffset:10,scrollable:!0,"data-evt-scroll":"","data-evt-loadmore":""},nativeOn:{loadmore:e.onloadmore,weex$scroll:function(t){return t.stopPropagation(),e.onscroll.apply(null,arguments)}}},[t("header",[t("p",{ref:"status2",staticClass:" weex-el weex-text",staticStyle:{"font-size":"0.53333rem"},attrs:{"test-id":"status2","weex-type":"text"}},[e._v(e._s(e.status))])]),e._v(" "),e._l(e.rows,(function(s){return t("section",{key:s.index,staticClass:" weex-ct weex-cell",staticStyle:{padding:"0.13333rem"},attrs:{"weex-type":"cell"}},[t("p",{staticClass:" weex-el weex-text",staticStyle:{width:"10rem",height:"2rem","background-color":"aqua"},attrs:{"weex-type":"text"}},[e._v("\n        "+e._s(s.id)+"\n      ")])])}))],2),e._v(" "),t("div",{staticClass:"marg weex-ct weex-div",attrs:{"weex-type":"div"}}),e._v(" "),t("div",{staticClass:"tilte weex-ct weex-div",attrs:{"weex-type":"div"}},[e._v('show-scrollbar=""')]),e._v(" "),t("list",{staticClass:"weex-harmony-register--1590753875-5",staticStyle:{"background-color":"beige",width:"10rem",height:"12rem"},attrs:{"offset-accuracy":"10","show-scrollbar":"",loadmoreoffset:10,scrollable:!0,"data-evt-scroll":"","data-evt-loadmore":""},nativeOn:{loadmore:e.onloadmore,weex$scroll:function(t){return t.stopPropagation(),e.onscroll.apply(null,arguments)}}},[t("header",[t("p",{ref:"status2",staticClass:" weex-el weex-text",staticStyle:{"font-size":"0.53333rem"},attrs:{"test-id":"status2","weex-type":"text"}},[e._v(e._s(e.status))])]),e._v(" "),e._l(e.rows,(function(s){return t("section",{key:s.index,staticClass:" weex-ct weex-cell",staticStyle:{padding:"0.13333rem"},attrs:{"weex-type":"cell"}},[t("p",{staticClass:" weex-el weex-text",staticStyle:{width:"10rem",height:"2rem","background-color":"aqua"},attrs:{"weex-type":"text"}},[e._v("\n        "+e._s(s.id)+"\n      ")])])}))],2),e._v(" "),t("div",{staticClass:"marg weex-ct weex-div",attrs:{"weex-type":"div"}}),e._v(" "),t("div",{staticClass:"tilte weex-ct weex-div",attrs:{"weex-type":"div"}},[e._v("show-scrollbar='true'")]),e._v(" "),t("list",{staticClass:"weex-harmony-register--1590753875-6",staticStyle:{"background-color":"beige",width:"10rem",height:"12rem"},attrs:{"offset-accuracy":"10","show-scrollbar":"true",loadmoreoffset:10,scrollable:!0,"data-evt-scroll":"","data-evt-loadmore":""},nativeOn:{loadmore:e.onloadmore,weex$scroll:function(t){return t.stopPropagation(),e.onscroll.apply(null,arguments)}}},[t("header",[t("p",{ref:"status2",staticClass:" weex-el weex-text",staticStyle:{"font-size":"0.53333rem"},attrs:{"test-id":"status2","weex-type":"text"}},[e._v(e._s(e.status))])]),e._v(" "),e._l(e.rows,(function(s){return t("section",{key:s.index,staticClass:" weex-ct weex-cell",staticStyle:{padding:"0.13333rem"},attrs:{"weex-type":"cell"}},[t("p",{staticClass:" weex-el weex-text",staticStyle:{width:"10rem",height:"2rem","background-color":"aqua"},attrs:{"weex-type":"text"}},[e._v("\n        "+e._s(s.id)+"\n      ")])])}))],2),e._v(" "),t("div",{staticClass:"marg weex-ct weex-div",attrs:{"weex-type":"div"}}),e._v(" "),t("div",{staticClass:"tilte weex-ct weex-div",attrs:{"weex-type":"div"}},[e._v("show-scrollbar=' '")]),e._v(" "),t("list",{staticClass:"weex-harmony-register--1590753875-7",staticStyle:{"background-color":"beige",width:"10rem",height:"12rem"},attrs:{"offset-accuracy":"10","show-scrollbar":" ",loadmoreoffset:10,scrollable:!0,"data-evt-scroll":"","data-evt-loadmore":""},nativeOn:{loadmore:e.onloadmore,weex$scroll:function(t){return t.stopPropagation(),e.onscroll.apply(null,arguments)}}},[t("header",[t("p",{ref:"status2",staticClass:" weex-el weex-text",staticStyle:{"font-size":"0.53333rem"},attrs:{"test-id":"status2","weex-type":"text"}},[e._v(e._s(e.status))])]),e._v(" "),e._l(e.rows,(function(s){return t("section",{key:s.index,staticClass:" weex-ct weex-cell",staticStyle:{padding:"0.13333rem"},attrs:{"weex-type":"cell"}},[t("p",{staticClass:" weex-el weex-text",staticStyle:{width:"10rem",height:"2rem","background-color":"aqua"},attrs:{"weex-type":"text"}},[e._v("\n        "+e._s(s.id)+"\n      ")])])}))],2)],1)};a._withStripped=!0;var r=s(7),l={data:function(){return{rows:[],status:"-",showScrollbar:!0}},created:function(){for(var e=0;e<20;e++)this.rows.push({id:"Cell "+e})},mounted:function(){Object(r.a)([{name:"show-scrollbar",handler:!1,params:[],isEvent:!1,modifier:[]}],"weex-harmony-register--1590753875-1"),Object(r.a)([{name:"show-scrollbar",handler:!0,params:[],isEvent:!1,modifier:[]}],"weex-harmony-register--1590753875-2"),Object(r.a)([{name:"show-scrollbar",handler:null,params:[],isEvent:!1,modifier:[]}],"weex-harmony-register--1590753875-3"),Object(r.a)([{name:"show-scrollbar",handler:this.showScrollbar,params:[],isEvent:!1,modifier:[]}],"weex-harmony-register--1590753875-4"),Object(r.a)([{name:"show-scrollbar",handler:"",params:[],isEvent:!1,modifier:[]}],"weex-harmony-register--1590753875-5"),Object(r.a)([{name:"show-scrollbar",handler:"true",params:[],isEvent:!1,modifier:[]}],"weex-harmony-register--1590753875-6"),Object(r.a)([{name:"show-scrollbar",handler:" ",params:[],isEvent:!1,modifier:[]}],"weex-harmony-register--1590753875-7")},computed:{},methods:{onscroll:function(e){this.status=e.contentOffset.y},onloadmore:function(e){var t=document.getElementsByClassName("list")[0].children[0].clientHeight+this.status;console.log("列表在"+t+"触底了。。。")}}},o=(s(450),s(2)),i=Object(o.a)(l,a,[],!1,null,null,null);t.default=i.exports}});