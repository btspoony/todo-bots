(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{339:function(t,e,r){var content=r(341);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(161).default)("e58a1128",content,!0,{sourceMap:!1})},340:function(t,e,r){"use strict";var n=r(339);r.n(n).a},341:function(t,e,r){(e=r(160)(!1)).push([t.i,".quest-item[data-v-3f55b144]{border-bottom:1px solid hsla(0,9.8%,90%,.48);margin-bottom:10px}.quest-item[data-v-3f55b144]:last-child{border-bottom:none;margin-bottom:0}",""]),t.exports=e},348:function(t,e,r){"use strict";r.r(e);r(60),r(9),r(76),r(19),r(18);var n=r(2),o=r(26),c=r(27),l=r(39),f=r(38),m=r(16),d=r(11),h=r(31),v=r(217);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(m.a)(t);if(e){var o=Object(m.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var _=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},D=function(t){Object(l.a)(m,t);var e,r,f=y(m);function m(){var t;return Object(o.a)(this,m),(t=f.apply(this,arguments)).formData={amount:100,max:100,onlyAdd:!1},t}return Object(c.a)(m,[{key:"mounted",value:(r=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)}))),function(){return r.apply(this,arguments)})},{key:"onGenerate",value:(e=Object(n.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=this.formData.amount,this.$store.dispatch("math/buildQuests",{strategy:v.b.ADD_AND_SUB,amount:e,options:{max:this.formData.max,onlyAdd:this.formData.onlyAdd}});case 2:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"currentQuestSet",get:function(){return this.$store.getters["math/currentQuestSet"]}},{key:"currentQuests",get:function(){return this.currentQuestSet?this.currentQuestSet.quests:[]}}]),m}(h.b),x=D=_([h.a],D),w=(r(340),r(25)),component=Object(w.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.currentQuestSet?r("el-row",{attrs:{gutter:12}},t._l(t.currentQuests,(function(e,i){return r("el-col",{key:t.currentQuestSet.name+"_quest_"+i,staticClass:"mb-1 pb-1 quest-item",attrs:{span:12}},[r("el-row",[r("el-col",{attrs:{span:4,offset:2}},[r("h2",[t._v(t._s(e.getParameter(0)))])]),t._v(" "),r("el-col",{attrs:{span:4}},[r("h2",[t._v(t._s(e.getParameter(2)))])]),t._v(" "),r("el-col",{attrs:{span:4}},[r("h2",[t._v(t._s(e.getParameter(1)))])]),t._v(" "),r("el-col",{attrs:{span:4}},[t._v("\n          =\n        ")])],1)],1)})),1):t._e(),t._v(" "),r("el-row",{attrs:{gutter:12}},[r("el-col",{attrs:{span:20,offset:2}},[r("el-form",{attrs:{inline:!0,model:t.formData}},[r("el-form-item",{attrs:{label:"加和上限"}},[r("el-input-number",{attrs:{min:1,max:1e8,placeholder:"加和上限"},model:{value:t.formData.max,callback:function(e){t.$set(t.formData,"max",e)},expression:"formData.max"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"题目数量"}},[r("el-input-number",{attrs:{min:1,max:1e3,placeholder:"题目数量"},model:{value:t.formData.amount,callback:function(e){t.$set(t.formData,"amount",e)},expression:"formData.amount"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"仅加法"}},[r("el-switch",{model:{value:t.formData.onlyAdd,callback:function(e){t.$set(t.formData,"onlyAdd",e)},expression:"formData.onlyAdd"}})],1),t._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:t.onGenerate}},[t._v("生成")])],1)],1)],1)],1)],1)}),[],!1,null,"3f55b144",null);e.default=component.exports}}]);