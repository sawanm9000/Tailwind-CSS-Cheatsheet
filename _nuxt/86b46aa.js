(window.webpackJsonp=window.webpackJsonp||[]).push([[64,4,104],{226:function(t,e,n){var content=n(231);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(69).default)("5749baca",content,!0,{sourceMap:!1})},227:function(t,e,n){var content=n(235);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(69).default)("62c7fa01",content,!0,{sourceMap:!1})},228:function(t,e,n){"use strict";n.r(e);var r={props:{theme:{type:String,default:"dark"}}},o=(n(230),n(13)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"card rounded-md",class:"light"===t.theme?"bg-coolGray-200":"bg-coolGray-800"},[t._t("default")],2)}),[],!1,null,"37ae0a58",null);e.default=component.exports},229:function(t,e,n){"use strict";n.r(e);var r=n(21),o=(n(40),n(168),n(122),n(169),{props:{name:{type:String,default:""},tooltip:{type:[String,Object],default:"",required:!1}},data:function(){return{cssPropNVal:[]}},methods:{toClipboard:function(text){navigator.clipboard.writeText(text),this.$nuxt.$emit("toTooltip",text)},setCss:function(t){if("object"===Object(r.a)(t))console.log(t.text,t.css);else{var e=t.split(" "),n=e.shift(),o=e.join(" ");this.cssPropNVal[0]=n,this.cssPropNVal[1]=o,t.endsWith(";")&&console.log("ends with ;"),this.$nuxt.$emit("mouseOnClass",{prop:n,val:o})}}}}),c=(n(234),n(13)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"tw-class cursor-pointer",on:{click:function(e){return t.toClipboard(t.name)},mouseover:function(e){return t.setCss(t.tooltip)},mouseleave:function(e){return t.$nuxt.$emit("mouseOnClass",!1)}}},[t._t("default")],2)}),[],!1,null,"6ff0f84a",null);e.default=component.exports},230:function(t,e,n){"use strict";n(226)},231:function(t,e,n){var r=n(68),o=n(232),c=n(233),l=r((function(i){return i[1]})),d=o(c);l.push([t.i,'/*purgecss start ignore*/\n.card .prefix[data-v-37ae0a58]{\n  position:relative;\n  width:-webkit-max-content;\n  width:-moz-max-content;\n  width:max-content;\n  white-space:pre;\n  border-top-left-radius:0.375rem;\n  border-bottom-right-radius:0.375rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(75, 85, 99, var(--tw-bg-opacity));\n  padding-left:0.375rem;\n  padding-right:0.375rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.875rem;\n  line-height:1.25rem\n}\n.card .prefix a[data-v-37ae0a58]:after{\n  content:url('+d+');\n  width:1.25rem;\n  height:1.25rem;\n  position:absolute;\n  top:-1px;\n  right:-1.5rem;\n  padding-top:0px;\n  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size:1.125rem;\n  line-height:1.75rem;\n  font-weight:700;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  opacity:0\n}\n.card .prefix a[data-v-37ae0a58]:hover:after{\n  opacity:1\n}\n.card .content[data-v-37ae0a58]{\n  padding:0.5rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.75rem;\n  line-height:1rem\n}\n\n/*purgecss end ignore*/',""]),l.locals={},t.exports=l},232:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},233:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSJ3aGl0ZSI+CiAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xMCA2SDZhMiAyIDAgMDAtMiAydjEwYTIgMiAwIDAwMiAyaDEwYTIgMiAwIDAwMi0ydi00TTE0IDRoNm0wIDB2Nm0wLTZMMTAgMTQiIC8+Cjwvc3ZnPgo="},234:function(t,e,n){"use strict";n(227)},235:function(t,e,n){var r=n(68)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},325:function(t,e,n){"use strict";n.r(e);var r={},o=n(13),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Card",[n("div",{staticClass:"prefix"},[n("Lnk",{attrs:{href:"https://tailwindcss.com/docs/place-content"}},[t._v("place-content-")])],1),t._v(" "),n("div",{staticClass:"content grid grid-rows-2 gap-2"},[n("div",{staticClass:"grid grid-cols-3 gap-2"},[n("div",[n("TwClass",{staticClass:"mb-1 w-max",attrs:{name:"place-content-start",tooltip:"place-content: start"}},[t._v("start")]),t._v(" "),n("div",{staticClass:"h-20 bg-coolGray-700 grid grid-cols-3 gap-0.5 p-0.5 place-content-start"},[n("div",{staticClass:"bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded"},[t._v("1")]),t._v(" "),n("div",{staticClass:"bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded"},[t._v("2")]),t._v(" "),n("div",{staticClass:"bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded"},[t._v("3")]),t._v(" "),n("div",{staticClass:"bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded"},[t._v("4")]),t._v(" "),n("div",{staticClass:"bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded"},[t._v("5")]),t._v(" "),n("div",{staticClass:"bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded"},[t._v("6")])])],1),t._v(" "),n("div",[n("TwClass",{staticClass:"mb-1 w-max",attrs:{name:"place-content-center",tooltip:"place-content: center"}},[t._v("center")]),t._v(" "),n("div",{staticClass:"h-20 bg-coolGray-700 grid grid-cols-3 gap-0.5 p-0.5 place-content-center"},[n("div",{staticClass:"bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded"},[t._v("1")]),t._v(" "),n("div",{staticClass:"bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded"},[t._v("2")]),t._v(" "),n("div",{staticClass:"bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded"},[t._v("3")]),t._v(" "),n("div",{staticClass:"bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded"},[t._v("4")]),t._v(" "),n("div",{staticClass:"bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded"},[t._v("5")]),t._v(" "),n("div",{staticClass:"bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded"},[t._v("6")])])],1),t._v(" "),n("div",[n("TwClass",{staticClass:"mb-1 w-max",attrs:{name:"place-content-end",tooltip:"place-content: end"}},[t._v("end")]),t._v(" "),n("div",{staticClass:"h-20 bg-coolGray-700 grid grid-cols-3 gap-0.5 p-0.5 place-content-end"},[n("div",{staticClass:"bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded"},[t._v("1")]),t._v(" "),n("div",{staticClass:"bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded"},[t._v("2")]),t._v(" "),n("div",{staticClass:"bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded"},[t._v("3")]),t._v(" "),n("div",{staticClass:"bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded"},[t._v("4")]),t._v(" "),n("div",{staticClass:"bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded"},[t._v("5")]),t._v(" "),n("div",{staticClass:"bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded"},[t._v("6")])])],1)]),t._v(" "),n("div",{staticClass:"grid grid-cols-4 gap-2"},[n("div",[n("TwClass",{staticClass:"mb-1 w-max",attrs:{name:"place-content-stretch",tooltip:"place-content: stretch"}},[t._v("stretch")]),t._v(" "),n("div",{staticClass:"h-20 bg-coolGray-700 grid grid-cols-3 gap-0.5 p-0.5 place-content-stretch"},[n("div",{staticClass:"bg-emerald-600 font-sans text-sm flex justify-center items-center rounded"},[t._v("1")]),t._v(" "),n("div",{staticClass:"bg-emerald-600 font-sans text-sm flex justify-center items-center rounded"},[t._v("2")]),t._v(" "),n("div",{staticClass:"bg-emerald-600 font-sans text-sm flex justify-center items-center rounded"},[t._v("3")]),t._v(" "),n("div",{staticClass:"bg-emerald-600 font-sans text-sm flex justify-center items-center rounded"},[t._v("4")]),t._v(" "),n("div",{staticClass:"bg-emerald-600 font-sans text-sm flex justify-center items-center rounded"},[t._v("5")]),t._v(" "),n("div",{staticClass:"bg-emerald-600 font-sans text-sm flex justify-center items-center rounded"},[t._v("6")])])],1),t._v(" "),n("div",[n("TwClass",{staticClass:"mb-1 w-max",attrs:{name:"place-content-between",tooltip:"place-content: space-between"}},[t._v("between")]),t._v(" "),n("div",{staticClass:"h-20 bg-coolGray-700 grid grid-cols-3 gap-0.5 p-0.5 place-content-between"},[n("div",{staticClass:"bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded"},[t._v("1")]),t._v(" "),n("div",{staticClass:"bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded"},[t._v("2")]),t._v(" "),n("div",{staticClass:"bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded"},[t._v("3")]),t._v(" "),n("div",{staticClass:"bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded"},[t._v("4")]),t._v(" "),n("div",{staticClass:"bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded"},[t._v("5")]),t._v(" "),n("div",{staticClass:"bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded"},[t._v("6")])])],1),t._v(" "),n("div",[n("TwClass",{staticClass:"mb-1 w-max",attrs:{name:"place-content-around",tooltip:"place-content: space-around"}},[t._v("around")]),t._v(" "),n("div",{staticClass:"h-20 bg-coolGray-700 grid grid-cols-3 gap-0.5 p-0.5 place-content-around"},[n("div",{staticClass:"bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded"},[t._v("1")]),t._v(" "),n("div",{staticClass:"bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded"},[t._v("2")]),t._v(" "),n("div",{staticClass:"bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded"},[t._v("3")]),t._v(" "),n("div",{staticClass:"bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded"},[t._v("4")]),t._v(" "),n("div",{staticClass:"bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded"},[t._v("5")]),t._v(" "),n("div",{staticClass:"bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded"},[t._v("6")])])],1),t._v(" "),n("div",[n("TwClass",{staticClass:"mb-1 w-max",attrs:{name:"place-content-evenly",tooltip:"place-content: space-evenly"}},[t._v("evenly")]),t._v(" "),n("div",{staticClass:"h-20 bg-coolGray-700 grid grid-cols-3 gap-0.5 p-0.5 place-content-evenly"},[n("div",{staticClass:"bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded"},[t._v("1")]),t._v(" "),n("div",{staticClass:"bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded"},[t._v("2")]),t._v(" "),n("div",{staticClass:"bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded"},[t._v("3")]),t._v(" "),n("div",{staticClass:"bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded"},[t._v("4")]),t._v(" "),n("div",{staticClass:"bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded"},[t._v("5")]),t._v(" "),n("div",{staticClass:"bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded"},[t._v("6")])])],1)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Lnk:n(167).default,TwClass:n(229).default,Card:n(228).default})}}]);