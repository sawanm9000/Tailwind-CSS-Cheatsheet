(window.webpackJsonp=window.webpackJsonp||[]).push([[68,5,103],{227:function(t,e,o){var content=o(232);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(69).default)("1bee20f6",content,!0,{sourceMap:!1})},228:function(t,e,o){var content=o(236);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(69).default)("62c7fa01",content,!0,{sourceMap:!1})},229:function(t,e,o){"use strict";o.r(e);var n={props:{theme:{type:String,default:"dark"}}},r=(o(231),o(9)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"card rounded-md",class:"light"===t.theme?"bg-coolGray-200":"bg-coolGray-800"},[t._t("default")],2)}),[],!1,null,"717beaa0",null);e.default=component.exports},230:function(t,e,o){"use strict";o.r(e);var n=o(21),r=(o(35),o(169),o(122),o(170),{props:{name:{type:String,default:""},tooltip:{type:[String,Object],default:"",required:!1}},data:function(){return{cssPropNVal:[]}},methods:{toClipboard:function(text){navigator.clipboard.writeText(text),this.$nuxt.$emit("toTooltip",text)},setCss:function(t){if("object"===Object(n.a)(t))console.log(t.text,t.css);else{var e=t.split(" "),o=e.shift(),r=e.join(" ");this.cssPropNVal[0]=o,this.cssPropNVal[1]=r,t.endsWith(";")&&console.log("ends with ;"),this.$nuxt.$emit("mouseOnClass",{prop:o,val:r})}}}}),l=(o(235),o(9)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"tw-class cursor-pointer",on:{click:function(e){return t.toClipboard(t.name)},mouseover:function(e){return t.setCss(t.tooltip)},mouseleave:function(e){return t.$nuxt.$emit("mouseOnClass",!1)}}},[t._t("default")],2)}),[],!1,null,"6ff0f84a",null);e.default=component.exports},231:function(t,e,o){"use strict";o(227)},232:function(t,e,o){var n=o(68),r=o(233),l=o(234),c=n((function(i){return i[1]})),d=r(l);c.push([t.i,'/*purgecss start ignore*/\n.card .title[data-v-717beaa0]{\n  position:relative;\n  margin-bottom:0.5rem;\n  width:-webkit-max-content;\n  width:-moz-max-content;\n  width:max-content;\n  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size:0.875rem;\n  line-height:1.25rem;\n  --tw-text-opacity:1;\n  color:rgba(156, 163, 175, var(--tw-text-opacity))\n}\n.card .title[data-v-717beaa0]:hover{\n  --tw-text-opacity:1;\n  color:rgba(229, 231, 235, var(--tw-text-opacity))\n}\n.card .title a[data-v-717beaa0]:after{\n  content:url('+d+');\n  width:1.25rem;\n  height:1.25rem;\n  position:absolute;\n  top:-1px;\n  right:-1.5rem;\n  padding-top:0px;\n  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size:1.125rem;\n  line-height:1.75rem;\n  font-weight:700;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  opacity:0\n}\n.card .prefix[data-v-717beaa0]{\n  position:relative;\n  width:-webkit-max-content;\n  width:-moz-max-content;\n  width:max-content;\n  white-space:pre;\n  border-top-left-radius:0.375rem;\n  border-bottom-right-radius:0.375rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(75, 85, 99, var(--tw-bg-opacity));\n  padding-left:0.375rem;\n  padding-right:0.375rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.875rem;\n  line-height:1.25rem\n}\n.card .prefix a[data-v-717beaa0]:after{\n  content:url('+d+');\n  width:1.25rem;\n  height:1.25rem;\n  position:absolute;\n  top:-1px;\n  right:-1.5rem;\n  padding-top:0px;\n  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size:1.125rem;\n  line-height:1.75rem;\n  font-weight:700;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  opacity:0\n}\n.card .prefix a[data-v-717beaa0]:hover:after, .card .title a[data-v-717beaa0]:hover:after{\n  opacity:1\n}\n.card .content[data-v-717beaa0]{\n  padding:0.5rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.75rem;\n  line-height:1rem\n}\n\n/*purgecss end ignore*/',""]),c.locals={},t.exports=c},233:function(t,e,o){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},234:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSJ3aGl0ZSI+CiAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xMCA2SDZhMiAyIDAgMDAtMiAydjEwYTIgMiAwIDAwMiAyaDEwYTIgMiAwIDAwMi0ydi00TTE0IDRoNm0wIDB2Nm0wLTZMMTAgMTQiIC8+Cjwvc3ZnPgo="},235:function(t,e,o){"use strict";o(228)},236:function(t,e,o){var n=o(68)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},316:function(t,e,o){"use strict";o.r(e);var n={},r=o(9),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Card",[o("div",{staticClass:"prefix"},[o("Lnk",{attrs:{href:"https://tailwindcss.com/docs/grid-row"}},[t._v("row-")])],1),t._v(" "),o("div",{staticClass:"content grid grid-cols-2 gap-2"},[o("div",[o("TwClass",{staticClass:"mb-1 w-max",attrs:{name:"row-span-full",tooltip:"grid-row: 1 / -1"}},[t._v("span-full")]),t._v(" "),o("div",{staticClass:"bg-coolGray-400 grid grid-cols-1 grid-rows-4 h-20 p-px gap-px w-11"},[o("div",{staticClass:"bg-emerald-600 row-start-1 col-start-1 rounded-md m-1 row-span-full z-10 grid grid-cols-1 justify-items-center place-content-between"},[o("svg",{staticClass:"h-6 w-6 flex-1",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[o("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M7 11l5-5m0 0l5 5m-5-5v12"}})]),t._v(" "),o("svg",{staticClass:"h-6 w-6 flex-1",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[o("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M17 13l-5 5m0 0l-5-5m5 5V6"}})])]),t._v(" "),o("div",{staticClass:"bg-coolGray-800 row-start-1 col-start-1"}),t._v(" "),o("div",{staticClass:"bg-coolGray-800 row-start-2 col-start-1"}),t._v(" "),o("div",{staticClass:"bg-coolGray-800 row-start-3 col-start-1"}),t._v(" "),o("div",{staticClass:"bg-coolGray-800 row-start-4 col-start-1"})])],1),t._v(" "),o("div",[o("TwClass",{staticClass:"mb-1",attrs:{name:"row-auto",tooltip:"grid-row: auto"}},[t._v("auto")]),t._v(" "),o("div",{staticClass:"mb-3 whitespace-pre"},[o("span",{staticClass:"text-purple-500"},[t._v("grid-row:")]),t._v(" \n"),o("span",{staticClass:"text-emerald-400"},[t._v("auto")])])],1),t._v(" "),o("div",[o("TwClass",{staticClass:"mb-1",attrs:{name:"row-start-auto",tooltip:"grid-row-start: auto"}},[t._v("start-auto")]),t._v(" "),o("div",{staticClass:"mb-3 whitespace-pre"},[o("span",{staticClass:"text-purple-500"},[t._v("grid-row-start:")]),t._v(" \n"),o("span",{staticClass:"text-emerald-400"},[t._v("auto")])])],1),t._v(" "),o("div",[o("TwClass",{staticClass:"mb-1",attrs:{name:"row-end-auto",tooltip:"grid-row-end: auto"}},[t._v("end-auto")]),t._v(" "),o("div",{staticClass:"mb-3 whitespace-pre"},[o("span",{staticClass:"text-purple-500"},[t._v("grid-row-end:")]),t._v(" \n"),o("span",{staticClass:"text-emerald-400"},[t._v("auto")])])],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Lnk:o(168).default,TwClass:o(230).default,Card:o(229).default})}}]);