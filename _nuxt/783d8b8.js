(window.webpackJsonp=window.webpackJsonp||[]).push([[47,4,5,103],{227:function(t,e,o){var content=o(232);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(69).default)("1bee20f6",content,!0,{sourceMap:!1})},228:function(t,e,o){var content=o(236);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(69).default)("62c7fa01",content,!0,{sourceMap:!1})},229:function(t,e,o){"use strict";o.r(e);var n={props:{theme:{type:String,default:"dark"}}},l=(o(231),o(9)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"card rounded-md",class:"light"===t.theme?"bg-coolGray-200":"bg-coolGray-800"},[t._t("default")],2)}),[],!1,null,"717beaa0",null);e.default=component.exports},230:function(t,e,o){"use strict";o.r(e);var n=o(21),l=(o(35),o(169),o(122),o(170),{props:{name:{type:String,default:""},tooltip:{type:[String,Object],default:"",required:!1}},data:function(){return{cssPropNVal:[]}},methods:{toClipboard:function(text){navigator.clipboard.writeText(text),this.$nuxt.$emit("toTooltip",text)},setCss:function(t){if("object"===Object(n.a)(t))console.log(t.text,t.css);else{var e=t.split(" "),o=e.shift(),l=e.join(" ");this.cssPropNVal[0]=o,this.cssPropNVal[1]=l,t.endsWith(";")&&console.log("ends with ;"),this.$nuxt.$emit("mouseOnClass",{prop:o,val:l})}}}}),r=(o(235),o(9)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"tw-class cursor-pointer",on:{click:function(e){return t.toClipboard(t.name)},mouseover:function(e){return t.setCss(t.tooltip)},mouseleave:function(e){return t.$nuxt.$emit("mouseOnClass",!1)}}},[t._t("default")],2)}),[],!1,null,"6ff0f84a",null);e.default=component.exports},231:function(t,e,o){"use strict";o(227)},232:function(t,e,o){var n=o(68),l=o(233),r=o(234),c=n((function(i){return i[1]})),w=l(r);c.push([t.i,'/*purgecss start ignore*/\n.card .title[data-v-717beaa0]{\n  position:relative;\n  margin-bottom:0.5rem;\n  width:-webkit-max-content;\n  width:-moz-max-content;\n  width:max-content;\n  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size:0.875rem;\n  line-height:1.25rem;\n  --tw-text-opacity:1;\n  color:rgba(156, 163, 175, var(--tw-text-opacity))\n}\n.card .title[data-v-717beaa0]:hover{\n  --tw-text-opacity:1;\n  color:rgba(229, 231, 235, var(--tw-text-opacity))\n}\n.card .title a[data-v-717beaa0]:after{\n  content:url('+w+');\n  width:1.25rem;\n  height:1.25rem;\n  position:absolute;\n  top:-1px;\n  right:-1.5rem;\n  padding-top:0px;\n  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size:1.125rem;\n  line-height:1.75rem;\n  font-weight:700;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  opacity:0\n}\n.card .prefix[data-v-717beaa0]{\n  position:relative;\n  width:-webkit-max-content;\n  width:-moz-max-content;\n  width:max-content;\n  white-space:pre;\n  border-top-left-radius:0.375rem;\n  border-bottom-right-radius:0.375rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(75, 85, 99, var(--tw-bg-opacity));\n  padding-left:0.375rem;\n  padding-right:0.375rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.875rem;\n  line-height:1.25rem\n}\n.card .prefix a[data-v-717beaa0]:after{\n  content:url('+w+');\n  width:1.25rem;\n  height:1.25rem;\n  position:absolute;\n  top:-1px;\n  right:-1.5rem;\n  padding-top:0px;\n  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size:1.125rem;\n  line-height:1.75rem;\n  font-weight:700;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  opacity:0\n}\n.card .prefix a[data-v-717beaa0]:hover:after, .card .title a[data-v-717beaa0]:hover:after{\n  opacity:1\n}\n.card .content[data-v-717beaa0]{\n  padding:0.5rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.75rem;\n  line-height:1rem\n}\n\n/*purgecss end ignore*/',""]),c.locals={},t.exports=c},233:function(t,e,o){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},234:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSJ3aGl0ZSI+CiAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xMCA2SDZhMiAyIDAgMDAtMiAydjEwYTIgMiAwIDAwMiAyaDEwYTIgMiAwIDAwMi0ydi00TTE0IDRoNm0wIDB2Nm0wLTZMMTAgMTQiIC8+Cjwvc3ZnPgo="},235:function(t,e,o){"use strict";o(228)},236:function(t,e,o){var n=o(68)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},237:function(t,e,o){"use strict";o.r(e);var n={props:{height:{type:String,default:"3rem"}}},l=o(9),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"bg-coolGray-300 rounded-sm px-px pb-px"},[t._m(0),t._v(" "),o("div",{staticClass:"bg-coolGray-800 rounded-sm-b",style:"height: "+t.height},[t._t("default")],2)])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"text-coolGray-900 flex p-0.5 gap-0.5"},[o("div",{staticClass:"rounded-full w-1 h-1 bg-coolGray-900"}),t._v(" "),o("div",{staticClass:"rounded-full w-1 h-1 bg-coolGray-900"}),t._v(" "),o("div",{staticClass:"rounded-full w-1 h-1 bg-coolGray-900"})])}],!1,null,null,null);e.default=component.exports},239:function(t,e,o){var content=o(250);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(69).default)("57f1a13d",content,!0,{sourceMap:!1})},249:function(t,e,o){"use strict";o(239)},250:function(t,e,o){var n=o(68)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\n.widths div div[data-v-3552cf2b]{\n  margin-bottom:0.125rem\n}\n.widths div div[data-v-3552cf2b] > :not([hidden]) ~ :not([hidden]){\n  --tw-space-x-reverse:0;\n  margin-right:calc(0.125rem * var(--tw-space-x-reverse));\n  margin-left:calc(0.125rem * calc(1 - var(--tw-space-x-reverse)))\n}\n.widths div div[data-v-3552cf2b]{\n  text-align:center\n}\n.widths div div div[data-v-3552cf2b]{\n  --tw-bg-opacity:1;\n  background-color:rgba(75, 85, 99, var(--tw-bg-opacity))\n}\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},289:function(t,e,o){"use strict";o.r(e);var n={},l=(o(249),o(9)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Card",[o("div",{staticClass:"prefix whitespace-pre"},[o("Lnk",{attrs:{href:"https://tailwindcss.com/docs/width"}},[t._v("w-")]),t._v(" "),o("Lnk",{attrs:{href:"https://tailwindcss.com/docs/height"}},[t._v("h-")])],1),t._v(" "),o("div",{staticClass:"content"},[o("div",{staticClass:"mb-1.5"},[o("div",{staticClass:"text-blue-300 cursor-pointer select-none w-max",on:{mouseover:function(e){return t.$nuxt.$emit("highlightLength",!0)},mouseleave:function(e){return t.$nuxt.$emit("highlightLength",!1)},click:function(e){return t.$nuxt.$emit("blinkLength")}}},[t._v("{length}")])]),t._v(" "),o("div",{staticClass:"widths mb-2 overflow-x-auto"},[o("div",{staticClass:"w-120 sm:w-auto"},[o("div",{staticClass:"flex"},[o("TwClass",{staticClass:"w-full",attrs:{name:"w-full",tooltip:"width: 100%"}},[t._v("full")])],1),t._v(" "),o("div",{staticClass:"flex"},[o("TwClass",{staticClass:"w-1/2",attrs:{name:"w-1/2",tooltip:"width: 50%"}},[t._v("1/2")]),t._v(" "),o("div",{staticClass:"w-1/2"})],1),t._v(" "),o("div",{staticClass:"flex"},[o("TwClass",{staticClass:"w-1/3",attrs:{name:"w-1/3",tooltip:"width: 33.333333%"}},[t._v("1/3")]),t._v(" "),o("TwClass",{staticClass:"w-1/3",attrs:{name:"w-2/3",tooltip:"width: 66.666667%"}},[t._v("2/3")]),t._v(" "),o("div",{staticClass:"w-1/3"})],1),t._v(" "),o("div",{staticClass:"flex"},[o("TwClass",{staticClass:"w-1/4",attrs:{name:"w-1/4",tooltip:"width: 25%"}},[t._v("1/4")]),t._v(" "),o("TwClass",{staticClass:"w-1/4",attrs:{name:"w-2/4",tooltip:"width: 50%"}},[t._v("2/4")]),t._v(" "),o("TwClass",{staticClass:"w-1/4",attrs:{name:"w-3/4",tooltip:"width: 75%"}},[t._v("3/4")]),t._v(" "),o("div",{staticClass:"w-1/4"})],1),t._v(" "),o("div",{staticClass:"flex"},[o("TwClass",{staticClass:"w-1/5",attrs:{name:"w-1/5",tooltip:"width: 20%"}},[t._v("1/5")]),t._v(" "),o("TwClass",{staticClass:"w-1/5",attrs:{name:"w-2/5",tooltip:"width: 40%"}},[t._v("2/5")]),t._v(" "),o("TwClass",{staticClass:"w-1/5",attrs:{name:"w-3/5",tooltip:"width: 60%"}},[t._v("3/5")]),t._v(" "),o("TwClass",{staticClass:"w-1/5",attrs:{name:"w-4/5",tooltip:"width: 80%"}},[t._v("4/5")]),t._v(" "),o("div",{staticClass:"w-1/5"})],1),t._v(" "),o("div",{staticClass:"flex"},[o("TwClass",{staticClass:"w-1/6",attrs:{name:"w-1/6",tooltip:"width: 16.666667%"}},[t._v("1/6")]),t._v(" "),o("TwClass",{staticClass:"w-1/6",attrs:{name:"w-2/6",tooltip:"width: 33.333333%"}},[t._v("2/6")]),t._v(" "),o("TwClass",{staticClass:"w-1/6",attrs:{name:"w-3/6",tooltip:"width: 50%"}},[t._v("3/6")]),t._v(" "),o("TwClass",{staticClass:"w-1/6",attrs:{name:"w-4/6",tooltip:"width: 66.666667%"}},[t._v("4/6")]),t._v(" "),o("TwClass",{staticClass:"w-1/6",attrs:{name:"w-5/6",tooltip:"width: 83.333333%"}},[t._v("5/6")]),t._v(" "),o("div",{staticClass:"w-1/6"})],1),t._v(" "),o("div",{staticClass:"flex"},[o("TwClass",{staticClass:"w-1/12",attrs:{name:"w-1/12",tooltip:"width: 8.333333%"}},[t._v("1/12")]),t._v(" "),o("TwClass",{staticClass:"w-1/12",attrs:{name:"w-2/12",tooltip:"width: 16.666667%"}},[t._v("2/12")]),t._v(" "),o("TwClass",{staticClass:"w-1/12",attrs:{name:"w-3/12",tooltip:"width: 25%"}},[t._v("3/12")]),t._v(" "),o("TwClass",{staticClass:"w-1/12",attrs:{name:"w-4/12",tooltip:"width: 33.333333%"}},[t._v("4/12")]),t._v(" "),o("TwClass",{staticClass:"w-1/12",attrs:{name:"w-5/12",tooltip:"width: 41.666667%"}},[t._v("5/12")]),t._v(" "),o("TwClass",{staticClass:"w-1/12",attrs:{name:"w-6/12",tooltip:"width: 50%"}},[t._v("6/12")]),t._v(" "),o("TwClass",{staticClass:"w-1/12",attrs:{name:"w-7/12",tooltip:"width: 58.333333%"}},[t._v("7/12")]),t._v(" "),o("TwClass",{staticClass:"w-1/12",attrs:{name:"w-8/12",tooltip:"width: 66.666667%"}},[t._v("8/12")]),t._v(" "),o("TwClass",{staticClass:"w-1/12",attrs:{name:"w-9/12",tooltip:"width: 75%"}},[t._v("9/12")]),t._v(" "),o("TwClass",{staticClass:"w-1/12",attrs:{name:"w-10/12",tooltip:"width: 83.333333%"}},[t._v("10/12")]),t._v(" "),o("TwClass",{staticClass:"w-1/12",attrs:{name:"w-11/12",tooltip:"width: 91.666667%"}},[t._v("11/12")]),t._v(" "),o("div",{staticClass:"w-1/12"})],1)])]),t._v(" "),o("div",{staticClass:"grid grid-cols-4 gap-x-2"},[o("div",{staticClass:"space-y-0.5"},[o("TwClass",{staticClass:"w-max",attrs:{name:"w-screen",tooltip:"width: 100vw"}},[t._v("screen")]),t._v(" "),o("Browser",[o("div",{staticClass:"bg-blue-600 w-full flex justify-between items-center"},[o("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[o("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M11 17l-5-5m0 0l5-5m-5 5h12"}})]),t._v(" "),o("svg",{staticClass:"h-6 w-6 right-0",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[o("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M13 7l5 5m0 0l-5 5m5-5H6"}})])])])],1),t._v(" "),o("div",{staticClass:"space-y-0.5"},[o("TwClass",{staticClass:"w-max",attrs:{name:"w-min",tooltip:"width: min-content"}},[t._v("min")]),t._v(" "),o("div",{staticClass:"w-min p-1 bg-blue-600"},[t._v("Ab cd e")])],1),t._v(" "),o("div",{staticClass:"space-y-0.5"},[o("TwClass",{staticClass:"w-max",attrs:{name:"w-max",tooltip:"width: max-content"}},[t._v("max")]),t._v(" "),o("div",{staticClass:"w-max p-1 bg-blue-600"},[t._v("Ab cd e")])],1),t._v(" "),o("div",{staticClass:"space-y-0.5"},[o("TwClass",{staticClass:"w-max",attrs:{name:"w-auto",tooltip:"width: auto"}},[t._v("auto")]),t._v(" "),o("div",{staticClass:"w-auto p-1 bg-blue-600"},[t._v("Ab cd e")])],1)])])])}),[],!1,null,"3552cf2b",null);e.default=component.exports;installComponents(component,{Lnk:o(168).default,TwClass:o(230).default,Browser:o(237).default,Card:o(229).default})}}]);