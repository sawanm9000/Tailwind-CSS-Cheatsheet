(window.webpackJsonp=window.webpackJsonp||[]).push([[81,5,103],{227:function(t,e,o){var content=o(232);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(69).default)("1bee20f6",content,!0,{sourceMap:!1})},228:function(t,e,o){var content=o(236);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(69).default)("62c7fa01",content,!0,{sourceMap:!1})},229:function(t,e,o){"use strict";o.r(e);var l={props:{theme:{type:String,default:"dark"}}},n=(o(231),o(9)),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"card rounded-md",class:"light"===t.theme?"bg-coolGray-200":"bg-coolGray-800"},[t._t("default")],2)}),[],!1,null,"717beaa0",null);e.default=component.exports},230:function(t,e,o){"use strict";o.r(e);var l=o(21),n=(o(35),o(169),o(122),o(170),{props:{name:{type:String,default:""},tooltip:{type:[String,Object],default:"",required:!1}},data:function(){return{cssPropNVal:[]}},methods:{toClipboard:function(text){navigator.clipboard.writeText(text),this.$nuxt.$emit("toTooltip",text)},setCss:function(t){if("object"===Object(l.a)(t))console.log(t.text,t.css);else{var e=t.split(" "),o=e.shift(),n=e.join(" ");this.cssPropNVal[0]=o,this.cssPropNVal[1]=n,t.endsWith(";")&&console.log("ends with ;"),this.$nuxt.$emit("mouseOnClass",{prop:o,val:n})}}}}),c=(o(235),o(9)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"tw-class cursor-pointer",on:{click:function(e){return t.toClipboard(t.name)},mouseover:function(e){return t.setCss(t.tooltip)},mouseleave:function(e){return t.$nuxt.$emit("mouseOnClass",!1)}}},[t._t("default")],2)}),[],!1,null,"6ff0f84a",null);e.default=component.exports},231:function(t,e,o){"use strict";o(227)},232:function(t,e,o){var l=o(68),n=o(233),c=o(234),r=l((function(i){return i[1]})),f=n(c);r.push([t.i,'/*purgecss start ignore*/\n.card .title[data-v-717beaa0]{\n  position:relative;\n  margin-bottom:0.5rem;\n  width:-webkit-max-content;\n  width:-moz-max-content;\n  width:max-content;\n  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size:0.875rem;\n  line-height:1.25rem;\n  --tw-text-opacity:1;\n  color:rgba(156, 163, 175, var(--tw-text-opacity))\n}\n.card .title[data-v-717beaa0]:hover{\n  --tw-text-opacity:1;\n  color:rgba(229, 231, 235, var(--tw-text-opacity))\n}\n.card .title a[data-v-717beaa0]:after{\n  content:url('+f+');\n  width:1.25rem;\n  height:1.25rem;\n  position:absolute;\n  top:-1px;\n  right:-1.5rem;\n  padding-top:0px;\n  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size:1.125rem;\n  line-height:1.75rem;\n  font-weight:700;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  opacity:0\n}\n.card .prefix[data-v-717beaa0]{\n  position:relative;\n  width:-webkit-max-content;\n  width:-moz-max-content;\n  width:max-content;\n  white-space:pre;\n  border-top-left-radius:0.375rem;\n  border-bottom-right-radius:0.375rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(75, 85, 99, var(--tw-bg-opacity));\n  padding-left:0.375rem;\n  padding-right:0.375rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.875rem;\n  line-height:1.25rem\n}\n.card .prefix a[data-v-717beaa0]:after{\n  content:url('+f+');\n  width:1.25rem;\n  height:1.25rem;\n  position:absolute;\n  top:-1px;\n  right:-1.5rem;\n  padding-top:0px;\n  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size:1.125rem;\n  line-height:1.75rem;\n  font-weight:700;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  opacity:0\n}\n.card .prefix a[data-v-717beaa0]:hover:after, .card .title a[data-v-717beaa0]:hover:after{\n  opacity:1\n}\n.card .content[data-v-717beaa0]{\n  padding:0.5rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.75rem;\n  line-height:1rem\n}\n\n/*purgecss end ignore*/',""]),r.locals={},t.exports=r},233:function(t,e,o){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},234:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSJ3aGl0ZSI+CiAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xMCA2SDZhMiAyIDAgMDAtMiAydjEwYTIgMiAwIDAwMiAyaDEwYTIgMiAwIDAwMi0ydi00TTE0IDRoNm0wIDB2Nm0wLTZMMTAgMTQiIC8+Cjwvc3ZnPgo="},235:function(t,e,o){"use strict";o(228)},236:function(t,e,o){var l=o(68)((function(i){return i[1]}));l.push([t.i,"/*purgecss start ignore*/\n\n/*purgecss end ignore*/",""]),l.locals={},t.exports=l},342:function(t,e,o){"use strict";o.r(e);var l={},n=o(9),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Card",[o("div",{staticClass:"prefix max-w-full"},[o("div",{staticClass:"whitespace-pre-wrap"},[o("Lnk",{attrs:{href:"https://tailwindcss.com/docs/opacity"}},[t._v("opacity-")]),t._v(" "),o("Lnk",{attrs:{href:"https://tailwindcss.com/docs/background-opacity"}},[t._v("bg-opacity-")]),t._v(" "),o("Lnk",{attrs:{href:"https://tailwindcss.com/docs/border-opacity"}},[t._v("border-opacity-")]),t._v(" "),o("Lnk",{attrs:{href:"https://tailwindcss.com/docs/divide-opacity"}},[t._v("divide-opacity-")]),t._v(" "),o("Lnk",{attrs:{href:"https://tailwindcss.com/docs/ring-opacity"}},[t._v("ring-opacity-")])],1)]),t._v(" "),o("div",{staticClass:"content overflow-auto"},[o("div",{staticClass:"flex gap-2 pr-2 sm:pr-0",staticStyle:{"min-width":"600px"}},[o("div",{staticClass:"flex flex-col flex-1"},[o("TwClass",{staticClass:"w-max",attrs:{name:"opacity-0",tooltip:"opacity: 0"}},[t._v("0")]),t._v(" "),o("div",{staticClass:"h-10 mt-2 font-sans flex flex-col flex-1 justify-center bg-blue-600 rounded border divide-y ring-2 ring-offset-1 ring-offset-coolGray-800 opacity-0 bg-opacity-0 border-opacity-0 divide-opacity-0 ring-opacity-0"},[o("div",{staticClass:"flex justify-center"},[t._v("1")]),t._v(" "),o("div",{staticClass:"flex justify-center"},[t._v("2")])])],1),t._v(" "),o("div",{staticClass:"flex flex-col flex-1"},[o("TwClass",{staticClass:"w-max",attrs:{name:"opacity-5",tooltip:"opacity: 0.05"}},[t._v("5")]),t._v(" "),o("div",{staticClass:"h-10 mt-2 font-sans flex flex-col flex-1 justify-center bg-blue-600 rounded border divide-y ring-2 ring-offset-1 ring-offset-coolGray-800 opacity-5 bg-opacity-5 border-opacity-5 divide-opacity-5 ring-opacity-5"},[o("div",{staticClass:"flex justify-center"},[t._v("1")]),t._v(" "),o("div",{staticClass:"flex justify-center"},[t._v("2")])])],1),t._v(" "),o("div",{staticClass:"flex flex-col flex-1"},[o("TwClass",{staticClass:"w-max",attrs:{name:"opacity-10",tooltip:"opacity: 0.1"}},[t._v("10")]),t._v(" "),o("div",{staticClass:"h-10 mt-2 font-sans flex flex-col flex-1 justify-center bg-blue-600 rounded border divide-y ring-2 ring-offset-1 ring-offset-coolGray-800 opacity-10 bg-opacity-10 border-opacity-10 divide-opacity-10 ring-opacity-10"},[o("div",{staticClass:"flex justify-center"},[t._v("1")]),t._v(" "),o("div",{staticClass:"flex justify-center"},[t._v("2")])])],1),t._v(" "),o("div",{staticClass:"flex flex-col flex-1"},[o("TwClass",{staticClass:"w-max",attrs:{name:"opacity-20",tooltip:"opacity: 0.2"}},[t._v("20")]),t._v(" "),o("div",{staticClass:"h-10 mt-2 font-sans flex flex-col flex-1 justify-center bg-blue-600 rounded border divide-y ring-2 ring-offset-1 ring-offset-coolGray-800 opacity-20 bg-opacity-20 border-opacity-20 divide-opacity-20 ring-opacity-20"},[o("div",{staticClass:"flex justify-center"},[t._v("1")]),t._v(" "),o("div",{staticClass:"flex justify-center"},[t._v("2")])])],1),t._v(" "),o("div",{staticClass:"flex flex-col flex-1"},[o("TwClass",{staticClass:"w-max",attrs:{name:"opacity-25",tooltip:"opacity: 0.25"}},[t._v("25")]),t._v(" "),o("div",{staticClass:"h-10 mt-2 font-sans flex flex-col flex-1 justify-center bg-blue-600 rounded border divide-y ring-2 ring-offset-1 ring-offset-coolGray-800 opacity-25 bg-opacity-25 border-opacity-25 divide-opacity-25 ring-opacity-25"},[o("div",{staticClass:"flex justify-center"},[t._v("1")]),t._v(" "),o("div",{staticClass:"flex justify-center"},[t._v("2")])])],1),t._v(" "),o("div",{staticClass:"flex flex-col flex-1"},[o("TwClass",{staticClass:"w-max",attrs:{name:"opacity-30",tooltip:"opacity: 0.3"}},[t._v("30")]),t._v(" "),o("div",{staticClass:"h-10 mt-2 font-sans flex flex-col flex-1 justify-center bg-blue-600 rounded border divide-y ring-2 ring-offset-1 ring-offset-coolGray-800 opacity-30 bg-opacity-30 border-opacity-30 divide-opacity-30 ring-opacity-30"},[o("div",{staticClass:"flex justify-center"},[t._v("1")]),t._v(" "),o("div",{staticClass:"flex justify-center"},[t._v("2")])])],1),t._v(" "),o("div",{staticClass:"flex flex-col flex-1"},[o("TwClass",{staticClass:"w-max",attrs:{name:"opacity-40",tooltip:"opacity: 0.4"}},[t._v("40")]),t._v(" "),o("div",{staticClass:"h-10 mt-2 font-sans flex flex-col flex-1 justify-center bg-blue-600 rounded border divide-y ring-2 ring-offset-1 ring-offset-coolGray-800 opacity-40 bg-opacity-40 border-opacity-40 divide-opacity-40 ring-opacity-40"},[o("div",{staticClass:"flex justify-center"},[t._v("1")]),t._v(" "),o("div",{staticClass:"flex justify-center"},[t._v("2")])])],1),t._v(" "),o("div",{staticClass:"flex flex-col flex-1"},[o("TwClass",{staticClass:"w-max",attrs:{name:"opacity-50",tooltip:"opacity: 0.5"}},[t._v("50")]),t._v(" "),o("div",{staticClass:"h-10 mt-2 font-sans flex flex-col flex-1 justify-center bg-blue-600 rounded border divide-y ring-2 ring-offset-1 ring-offset-coolGray-800 opacity-50 bg-opacity-50 border-opacity-50 divide-opacity-50 ring-opacity-50"},[o("div",{staticClass:"flex justify-center"},[t._v("1")]),t._v(" "),o("div",{staticClass:"flex justify-center"},[t._v("2")])])],1),t._v(" "),o("div",{staticClass:"flex flex-col flex-1"},[o("TwClass",{staticClass:"w-max",attrs:{name:"opacity-60",tooltip:"opacity: 0.6"}},[t._v("60")]),t._v(" "),o("div",{staticClass:"h-10 mt-2 font-sans flex flex-col flex-1 justify-center bg-blue-600 rounded border divide-y ring-2 ring-offset-1 ring-offset-coolGray-800 opacity-60 bg-opacity-60 border-opacity-60 divide-opacity-60 ring-opacity-60"},[o("div",{staticClass:"flex justify-center"},[t._v("1")]),t._v(" "),o("div",{staticClass:"flex justify-center"},[t._v("2")])])],1),t._v(" "),o("div",{staticClass:"flex flex-col flex-1"},[o("TwClass",{staticClass:"w-max",attrs:{name:"opacity-70",tooltip:"opacity: 0.7"}},[t._v("70")]),t._v(" "),o("div",{staticClass:"h-10 mt-2 font-sans flex flex-col flex-1 justify-center bg-blue-600 rounded border divide-y ring-2 ring-offset-1 ring-offset-coolGray-800 opacity-70 bg-opacity-70 border-opacity-70 divide-opacity-70 ring-opacity-70"},[o("div",{staticClass:"flex justify-center"},[t._v("1")]),t._v(" "),o("div",{staticClass:"flex justify-center"},[t._v("2")])])],1),t._v(" "),o("div",{staticClass:"flex flex-col flex-1"},[o("TwClass",{staticClass:"w-max",attrs:{name:"opacity-75",tooltip:"opacity: 0.75"}},[t._v("75")]),t._v(" "),o("div",{staticClass:"h-10 mt-2 font-sans flex flex-col flex-1 justify-center bg-blue-600 rounded border divide-y ring-2 ring-offset-1 ring-offset-coolGray-800 opacity-75 bg-opacity-75 border-opacity-75 divide-opacity-75 ring-opacity-75"},[o("div",{staticClass:"flex justify-center"},[t._v("1")]),t._v(" "),o("div",{staticClass:"flex justify-center"},[t._v("2")])])],1),t._v(" "),o("div",{staticClass:"flex flex-col flex-1"},[o("TwClass",{staticClass:"w-max",attrs:{name:"opacity-80",tooltip:"opacity: 0.8"}},[t._v("80")]),t._v(" "),o("div",{staticClass:"h-10 mt-2 font-sans flex flex-col flex-1 justify-center bg-blue-600 rounded border divide-y ring-2 ring-offset-1 ring-offset-coolGray-800 opacity-80 bg-opacity-80 border-opacity-80 divide-opacity-80 ring-opacity-80"},[o("div",{staticClass:"flex justify-center"},[t._v("1")]),t._v(" "),o("div",{staticClass:"flex justify-center"},[t._v("2")])])],1),t._v(" "),o("div",{staticClass:"flex flex-col flex-1"},[o("TwClass",{staticClass:"w-max",attrs:{name:"opacity-90",tooltip:"opacity: 0.9"}},[t._v("90")]),t._v(" "),o("div",{staticClass:"h-10 mt-2 font-sans flex flex-col flex-1 justify-center bg-blue-600 rounded border divide-y ring-2 ring-offset-1 ring-offset-coolGray-800 opacity-90 bg-opacity-90 border-opacity-90 divide-opacity-90 ring-opacity-90"},[o("div",{staticClass:"flex justify-center"},[t._v("1")]),t._v(" "),o("div",{staticClass:"flex justify-center"},[t._v("2")])])],1),t._v(" "),o("div",{staticClass:"flex flex-col flex-1"},[o("TwClass",{staticClass:"w-max",attrs:{name:"opacity-95",tooltip:"opacity: 0.95"}},[t._v("95")]),t._v(" "),o("div",{staticClass:"h-10 mt-2 font-sans flex flex-col flex-1 justify-center bg-blue-600 rounded border divide-y ring-2 ring-offset-1 ring-offset-coolGray-800 opacity-95 bg-opacity-95 border-opacity-95 divide-opacity-95 ring-opacity-95"},[o("div",{staticClass:"flex justify-center"},[t._v("1")]),t._v(" "),o("div",{staticClass:"flex justify-center"},[t._v("2")])])],1),t._v(" "),o("div",{staticClass:"flex flex-col flex-1"},[o("TwClass",{staticClass:"w-max",attrs:{name:"opacity-100",tooltip:"opacity: 1"}},[t._v("100")]),t._v(" "),o("div",{staticClass:"h-10 mt-2 font-sans flex flex-col flex-1 justify-center bg-blue-600 rounded border divide-y ring-2 ring-offset-1 ring-offset-coolGray-800 opacity-100 bg-opacity-100 border-opacity-100 divide-opacity-100 ring-opacity-100"},[o("div",{staticClass:"flex justify-center"},[t._v("1")]),t._v(" "),o("div",{staticClass:"flex justify-center"},[t._v("2")])])],1)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Lnk:o(168).default,TwClass:o(230).default,Card:o(229).default})}}]);