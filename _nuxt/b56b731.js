(window.webpackJsonp=window.webpackJsonp||[]).push([[48,4,104],{226:function(t,o,r){var content=r(231);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(69).default)("5749baca",content,!0,{sourceMap:!1})},227:function(t,o,r){var content=r(235);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(69).default)("62c7fa01",content,!0,{sourceMap:!1})},228:function(t,o,r){"use strict";r.r(o);var e={props:{theme:{type:String,default:"dark"}}},n=(r(230),r(13)),component=Object(n.a)(e,(function(){var t=this,o=t.$createElement;return(t._self._c||o)("div",{staticClass:"card rounded-md",class:"light"===t.theme?"bg-coolGray-200":"bg-coolGray-800"},[t._t("default")],2)}),[],!1,null,"37ae0a58",null);o.default=component.exports},229:function(t,o,r){"use strict";r.r(o);var e=r(21),n=(r(40),r(168),r(122),r(169),{props:{name:{type:String,default:""},tooltip:{type:[String,Object],default:"",required:!1}},data:function(){return{cssPropNVal:[]}},methods:{toClipboard:function(text){navigator.clipboard.writeText(text),this.$nuxt.$emit("toTooltip",text)},setCss:function(t){if("object"===Object(e.a)(t))console.log(t.text,t.css);else{var o=t.split(" "),r=o.shift(),n=o.join(" ");this.cssPropNVal[0]=r,this.cssPropNVal[1]=n,t.endsWith(";")&&console.log("ends with ;"),this.$nuxt.$emit("mouseOnClass",{prop:r,val:n})}}}}),l=(r(234),r(13)),component=Object(l.a)(n,(function(){var t=this,o=t.$createElement;return(t._self._c||o)("div",{staticClass:"tw-class cursor-pointer",on:{click:function(o){return t.toClipboard(t.name)},mouseover:function(o){return t.setCss(t.tooltip)},mouseleave:function(o){return t.$nuxt.$emit("mouseOnClass",!1)}}},[t._t("default")],2)}),[],!1,null,"6ff0f84a",null);o.default=component.exports},230:function(t,o,r){"use strict";r(226)},231:function(t,o,r){var e=r(68),n=r(232),l=r(233),c=e((function(i){return i[1]})),d=n(l);c.push([t.i,'/*purgecss start ignore*/\n.card .prefix[data-v-37ae0a58]{\n  position:relative;\n  width:-webkit-max-content;\n  width:-moz-max-content;\n  width:max-content;\n  white-space:pre;\n  border-top-left-radius:0.375rem;\n  border-bottom-right-radius:0.375rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(75, 85, 99, var(--tw-bg-opacity));\n  padding-left:0.375rem;\n  padding-right:0.375rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.875rem;\n  line-height:1.25rem\n}\n.card .prefix a[data-v-37ae0a58]:after{\n  content:url('+d+');\n  width:1.25rem;\n  height:1.25rem;\n  position:absolute;\n  top:-1px;\n  right:-1.5rem;\n  padding-top:0px;\n  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size:1.125rem;\n  line-height:1.75rem;\n  font-weight:700;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  opacity:0\n}\n.card .prefix a[data-v-37ae0a58]:hover:after{\n  opacity:1\n}\n.card .content[data-v-37ae0a58]{\n  padding:0.5rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.75rem;\n  line-height:1rem\n}\n\n/*purgecss end ignore*/',""]),c.locals={},t.exports=c},232:function(t,o,r){"use strict";t.exports=function(t,o){return o||(o={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),o.hash&&(t+=o.hash),/["'() \t\n]/.test(t)||o.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},233:function(t,o){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSJ3aGl0ZSI+CiAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xMCA2SDZhMiAyIDAgMDAtMiAydjEwYTIgMiAwIDAwMiAyaDEwYTIgMiAwIDAwMi0ydi00TTE0IDRoNm0wIDB2Nm0wLTZMMTAgMTQiIC8+Cjwvc3ZnPgo="},234:function(t,o,r){"use strict";r(227)},235:function(t,o,r){var e=r(68)((function(i){return i[1]}));e.push([t.i,"/*purgecss start ignore*/\n\n/*purgecss end ignore*/",""]),e.locals={},t.exports=e},309:function(t,o,r){"use strict";r.r(o);var e={},n=r(13),component=Object(n.a)(e,(function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("Card",[r("div",{staticClass:"flex justify-between"},[r("div",{staticClass:"prefix"},[r("Lnk",{attrs:{href:"https://tailwindcss.com/docs/grid-auto-rows"}},[t._v("auto-rows-")])],1),t._v(" "),r("div",{staticClass:"font-sans text-coolGray-400 text-sm pr-2"},[t._v("Size of implicit grid")])]),t._v(" "),r("div",{staticClass:"content grid grid-cols-2 gap-2"},[r("div",[r("TwClass",{staticClass:"mb-1 w-max",attrs:{name:"auto-rows-auto",tooltip:"grid-auto-rows: auto"}},[t._v("auto")]),t._v(" "),r("div",{staticClass:"grid grid-cols-3 auto-rows-auto bg-coolGray-400 gap-px p-px"},[r("div",{staticClass:"bg-emerald-600 m-0.5 row-start-1 rounded z-10 col-start-1 row-span-1 h-3"}),t._v(" "),r("div",{staticClass:"bg-emerald-600 m-0.5 row-start-1 rounded z-10 col-start-2 row-span-1 h-3"}),t._v(" "),r("div",{staticClass:"bg-emerald-600 m-0.5 row-start-1 rounded z-10 col-start-3 row-span-1 h-3"}),t._v(" "),r("div",{staticClass:"m-0.5 row-start-2 col-start-1 row-span-1 flex gap-x-0.5"},[r("div",{staticClass:"bg-emerald-600 rounded z-10 h-3 w-3"}),t._v(" "),r("div",{staticClass:"bg-emerald-600 rounded z-10 h-3 w-3"})]),t._v(" "),r("div",{staticClass:"m-0.5 row-start-2 col-start-2 row-span-1 flex flex-wrap gap-0.5"},[r("div",{staticClass:"bg-emerald-600 rounded z-10 h-3 w-3"}),t._v(" "),r("div",{staticClass:"bg-emerald-600 rounded z-10 h-3 w-3"}),t._v(" "),r("div",{staticClass:"bg-emerald-600 rounded z-10 h-3 w-3"}),t._v(" "),r("div",{staticClass:"bg-emerald-600 rounded z-10 h-3 w-3"})]),t._v(" "),r("div",{staticClass:"m-0.5 row-start-2 col-start-3 row-span-1 flex gap-x-0.5"},[r("div",{staticClass:"bg-emerald-600 rounded z-10 h-3 w-3"})]),t._v(" "),r("div",{staticClass:"bg-coolGray-800 row-start-1 col-start-1"}),t._v(" "),r("div",{staticClass:"bg-coolGray-800 row-start-1 col-start-2"}),t._v(" "),r("div",{staticClass:"bg-coolGray-800 row-start-1 col-start-3"}),t._v(" "),r("div",{staticClass:"bg-coolGray-800 row-start-2 col-start-1"}),t._v(" "),r("div",{staticClass:"bg-coolGray-800 row-start-2 col-start-2"}),t._v(" "),r("div",{staticClass:"bg-coolGray-800 row-start-2 col-start-3"})])],1),t._v(" "),r("div",[r("TwClass",{staticClass:"mb-1 w-max",attrs:{name:"auto-rows-fr",tooltip:"grid-auto-rows: minmax(0, 1fr)"}},[t._v("fr")]),t._v(" "),r("div",{staticClass:"grid grid-cols-3 auto-rows-fr bg-coolGray-400 gap-px p-px"},[r("div",{staticClass:"bg-emerald-600 m-0.5 row-start-1 rounded z-10 col-start-1 row-span-1 h-3"}),t._v(" "),r("div",{staticClass:"bg-emerald-600 m-0.5 row-start-1 rounded z-10 col-start-2 row-span-1 h-3"}),t._v(" "),r("div",{staticClass:"bg-emerald-600 m-0.5 row-start-1 rounded z-10 col-start-3 row-span-1 h-3"}),t._v(" "),r("div",{staticClass:"m-0.5 row-start-2 col-start-1 row-span-1 flex gap-x-0.5"},[r("div",{staticClass:"bg-emerald-600 rounded z-10 h-3 w-3"}),t._v(" "),r("div",{staticClass:"bg-emerald-600 rounded z-10 h-3 w-3"})]),t._v(" "),r("div",{staticClass:"m-0.5 row-start-2 col-start-2 row-span-1 flex flex-wrap gap-0.5"},[r("div",{staticClass:"bg-emerald-600 rounded z-10 h-3 w-3"}),t._v(" "),r("div",{staticClass:"bg-emerald-600 rounded z-10 h-3 w-3"}),t._v(" "),r("div",{staticClass:"bg-emerald-600 rounded z-10 h-3 w-3"}),t._v(" "),r("div",{staticClass:"bg-emerald-600 rounded z-10 h-3 w-3"})]),t._v(" "),r("div",{staticClass:"bg-emerald-600 rounded z-10 h-3 w-3 m-0.5 row-start-2 col-start-3"}),t._v(" "),r("div",{staticClass:"bg-coolGray-800 row-start-1 col-start-1"}),t._v(" "),r("div",{staticClass:"bg-coolGray-800 row-start-1 col-start-2"}),t._v(" "),r("div",{staticClass:"bg-coolGray-800 row-start-1 col-start-3"}),t._v(" "),r("div",{staticClass:"bg-coolGray-800 row-start-2 col-start-1"}),t._v(" "),r("div",{staticClass:"bg-coolGray-800 row-start-2 col-start-2"}),t._v(" "),r("div",{staticClass:"bg-coolGray-800 row-start-2 col-start-3"})])],1),t._v(" "),r("div",[r("TwClass",{staticClass:"mb-1 w-max",attrs:{name:"auto-rows-min",tooltip:"grid-auto-rows: min-content"}},[t._v("min")]),t._v(" "),r("div",{staticClass:"whitespace-pre"},[r("span",{staticClass:"text-purple-500"},[t._v("grid-auto-rows:")]),t._v(" \n"),r("span",{staticClass:"text-emerald-400"},[t._v("min-content")])])],1),t._v(" "),r("div",[r("TwClass",{staticClass:"mb-1 w-max",attrs:{name:"auto-rows-max",tooltip:"grid-auto-rows: max-content"}},[t._v("max")]),t._v(" "),r("div",{staticClass:"whitespace-pre"},[r("span",{staticClass:"text-purple-500"},[t._v("grid-auto-rows:")]),t._v(" \n"),r("span",{staticClass:"text-emerald-400"},[t._v("max-content")])])],1)])])}),[],!1,null,null,null);o.default=component.exports;installComponents(component,{Lnk:r(167).default,TwClass:r(229).default,Card:r(228).default})}}]);