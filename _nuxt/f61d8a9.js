(window.webpackJsonp=window.webpackJsonp||[]).push([[33,6,132],{233:function(t,e,o){var content=o(238);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(74).default)("1bee20f6",content,!0,{sourceMap:!1})},234:function(t,e,o){"use strict";o.r(e);var r={props:{theme:{type:String,default:"dark"}}},n=(o(237),o(11)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"card rounded-md",class:"light"===t.theme?"bg-coolGray-200":"bg-coolGray-800"},[t._t("default")],2)}),[],!1,null,"717beaa0",null);e.default=component.exports},235:function(t,e,o){var content=o(242);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(74).default)("62c7fa01",content,!0,{sourceMap:!1})},236:function(t,e,o){"use strict";o.r(e);var r=o(24),n=(o(22),o(174),o(128),o(175),{props:{name:{type:String,default:""},tooltip:{type:[String,Object],default:"",required:!1}},data:function(){return{cssPropNVal:[]}},methods:{toClipboard:function(text){navigator.clipboard.writeText(text),this.$nuxt.$emit("toTooltip",text)},setCss:function(t){if("object"===Object(r.a)(t))console.log(t.text,t.css);else{var e=t.split(" "),o=e.shift(),n=e.join(" ");this.cssPropNVal[0]=o,this.cssPropNVal[1]=n,t.endsWith(";")&&console.log("ends with ;"),this.$nuxt.$emit("mouseOnClass",{prop:o,val:n})}}}}),l=(o(241),o(11)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"tw-class cursor-pointer",on:{click:function(e){return t.toClipboard(t.name)},mouseover:function(e){return t.setCss(t.tooltip)},mouseleave:function(e){return t.$nuxt.$emit("mouseOnClass",!1)}}},[t._t("default")],2)}),[],!1,null,"6ff0f84a",null);e.default=component.exports},237:function(t,e,o){"use strict";o(233)},238:function(t,e,o){var r=o(73),n=o(239),l=o(240),c=r((function(i){return i[1]})),d=n(l);c.push([t.i,'/*purgecss start ignore*/\n.card .title[data-v-717beaa0]{\n  position:relative;\n  margin-bottom:0.5rem;\n  width:-webkit-max-content;\n  width:-moz-max-content;\n  width:max-content;\n  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size:0.875rem;\n  line-height:1.25rem;\n  --tw-text-opacity:1;\n  color:rgba(156, 163, 175, var(--tw-text-opacity))\n}\n.card .title[data-v-717beaa0]:hover{\n  --tw-text-opacity:1;\n  color:rgba(229, 231, 235, var(--tw-text-opacity))\n}\n.card .title a[data-v-717beaa0]:after{\n  content:url('+d+');\n  width:1.25rem;\n  height:1.25rem;\n  position:absolute;\n  top:-1px;\n  right:-1.5rem;\n  padding-top:0px;\n  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size:1.125rem;\n  line-height:1.75rem;\n  font-weight:700;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  opacity:0\n}\n.card .prefix[data-v-717beaa0]{\n  position:relative;\n  width:-webkit-max-content;\n  width:-moz-max-content;\n  width:max-content;\n  white-space:pre;\n  border-top-left-radius:0.375rem;\n  border-bottom-right-radius:0.375rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(75, 85, 99, var(--tw-bg-opacity));\n  padding-left:0.375rem;\n  padding-right:0.375rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.875rem;\n  line-height:1.25rem\n}\n.card .prefix a[data-v-717beaa0]:after{\n  content:url('+d+');\n  width:1.25rem;\n  height:1.25rem;\n  position:absolute;\n  top:-1px;\n  right:-1.5rem;\n  padding-top:0px;\n  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size:1.125rem;\n  line-height:1.75rem;\n  font-weight:700;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  opacity:0\n}\n.card .prefix a[data-v-717beaa0]:hover:after, .card .title a[data-v-717beaa0]:hover:after{\n  opacity:1\n}\n.card .content[data-v-717beaa0]{\n  padding:0.5rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.75rem;\n  line-height:1rem\n}\n\n/*purgecss end ignore*/',""]),c.locals={},t.exports=c},239:function(t,e,o){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},240:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSJ3aGl0ZSI+CiAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xMCA2SDZhMiAyIDAgMDAtMiAydjEwYTIgMiAwIDAwMiAyaDEwYTIgMiAwIDAwMi0ydi00TTE0IDRoNm0wIDB2Nm0wLTZMMTAgMTQiIC8+Cjwvc3ZnPgo="},241:function(t,e,o){"use strict";o(235)},242:function(t,e,o){var r=o(73)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},320:function(t,e,o){"use strict";o.r(e);var r={},n=o(11),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Card",[o("div",{staticClass:"prefix"},[o("Lnk",{attrs:{href:"https://tailwindcss.com/docs/cursor"}},[t._v("cursor-")])],1),t._v(" "),o("div",{staticClass:"content"},[o("div",{staticClass:"grid grid-cols-3 gap-2"},[o("div",[o("TwClass",{staticClass:"w-max",attrs:{name:"cursor-auto",tooltip:"cursor: auto"}},[t._v("auto")]),t._v(" "),o("div",{staticClass:"h-14 mt-1 border-2 border-coolGray-500 border-dashed rounded-md font-sans text-sm text-coolGray-400 flex justify-center items-center select-none cursor-auto"},[t._v("Hover")])],1),t._v(" "),o("div",[o("TwClass",{staticClass:"w-max",attrs:{name:"cursor-default",tooltip:"cursor: default"}},[t._v("default")]),t._v(" "),o("div",{staticClass:"h-14 mt-1 border-2 border-coolGray-500 border-dashed rounded-md font-sans text-sm text-coolGray-400 flex justify-center items-center select-none cursor-default"},[t._v("Hover")])],1),t._v(" "),o("div",[o("TwClass",{staticClass:"w-max",attrs:{name:"cursor-pointer",tooltip:"cursor: pointer"}},[t._v("pointer")]),t._v(" "),o("div",{staticClass:"h-14 mt-1 border-2 border-coolGray-500 border-dashed rounded-md font-sans text-sm text-coolGray-400 flex justify-center items-center select-none cursor-pointer"},[t._v("Hover")])],1),t._v(" "),o("div",[o("TwClass",{staticClass:"w-max",attrs:{name:"cursor-wait",tooltip:"cursor: wait"}},[t._v("wait")]),t._v(" "),o("div",{staticClass:"h-14 mt-1 border-2 border-coolGray-500 border-dashed rounded-md font-sans text-sm text-coolGray-400 flex justify-center items-center select-none cursor-wait"},[t._v("Hover")])],1),t._v(" "),o("div",[o("TwClass",{staticClass:"w-max",attrs:{name:"cursor-text",tooltip:"cursor: text"}},[t._v("text")]),t._v(" "),o("div",{staticClass:"h-14 mt-1 border-2 border-coolGray-500 border-dashed rounded-md font-sans text-sm text-coolGray-400 flex justify-center items-center select-none cursor-text"},[t._v("Hover")])],1),t._v(" "),o("div",[o("TwClass",{staticClass:"w-max",attrs:{name:"cursor-move",tooltip:"cursor: move"}},[t._v("move")]),t._v(" "),o("div",{staticClass:"h-14 mt-1 border-2 border-coolGray-500 border-dashed rounded-md font-sans text-sm text-coolGray-400 flex justify-center items-center select-none cursor-move"},[t._v("Hover")])],1),t._v(" "),o("div",[o("TwClass",{staticClass:"w-max",attrs:{name:"cursor-help",tooltip:"cursor: help"}},[t._v("help")]),t._v(" "),o("div",{staticClass:"h-14 mt-1 border-2 border-coolGray-500 border-dashed rounded-md font-sans text-sm text-coolGray-400 flex justify-center items-center select-none cursor-help"},[t._v("Hover")])],1),t._v(" "),o("div",[o("TwClass",{staticClass:"w-max",attrs:{name:"cursor-not-allowed",tooltip:"cursor: not-allowed"}},[t._v("not-allowed")]),t._v(" "),o("div",{staticClass:"h-14 mt-1 border-2 border-coolGray-500 border-dashed rounded-md font-sans text-sm text-coolGray-400 flex justify-center items-center select-none cursor-not-allowed"},[t._v("Hover")])],1)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Lnk:o(173).default,TwClass:o(236).default,Card:o(234).default})}}]);