(window.webpackJsonp=window.webpackJsonp||[]).push([[44,4,5,103],{226:function(t,e,o){var content=o(231);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(69).default)("1bee20f6",content,!0,{sourceMap:!1})},227:function(t,e,o){var content=o(235);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(69).default)("62c7fa01",content,!0,{sourceMap:!1})},228:function(t,e,o){"use strict";o.r(e);var n={props:{theme:{type:String,default:"dark"}}},r=(o(230),o(13)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"card rounded-md",class:"light"===t.theme?"bg-coolGray-200":"bg-coolGray-800"},[t._t("default")],2)}),[],!1,null,"717beaa0",null);e.default=component.exports},229:function(t,e,o){"use strict";o.r(e);var n=o(21),r=(o(35),o(168),o(122),o(169),{props:{name:{type:String,default:""},tooltip:{type:[String,Object],default:"",required:!1}},data:function(){return{cssPropNVal:[]}},methods:{toClipboard:function(text){navigator.clipboard.writeText(text),this.$nuxt.$emit("toTooltip",text)},setCss:function(t){if("object"===Object(n.a)(t))console.log(t.text,t.css);else{var e=t.split(" "),o=e.shift(),r=e.join(" ");this.cssPropNVal[0]=o,this.cssPropNVal[1]=r,t.endsWith(";")&&console.log("ends with ;"),this.$nuxt.$emit("mouseOnClass",{prop:o,val:r})}}}}),l=(o(234),o(13)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"tw-class cursor-pointer",on:{click:function(e){return t.toClipboard(t.name)},mouseover:function(e){return t.setCss(t.tooltip)},mouseleave:function(e){return t.$nuxt.$emit("mouseOnClass",!1)}}},[t._t("default")],2)}),[],!1,null,"6ff0f84a",null);e.default=component.exports},230:function(t,e,o){"use strict";o(226)},231:function(t,e,o){var n=o(68),r=o(232),l=o(233),c=n((function(i){return i[1]})),d=r(l);c.push([t.i,'/*purgecss start ignore*/\n.card .title[data-v-717beaa0]{\n  position:relative;\n  margin-bottom:0.5rem;\n  width:-webkit-max-content;\n  width:-moz-max-content;\n  width:max-content;\n  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size:0.875rem;\n  line-height:1.25rem;\n  --tw-text-opacity:1;\n  color:rgba(156, 163, 175, var(--tw-text-opacity))\n}\n.card .title[data-v-717beaa0]:hover{\n  --tw-text-opacity:1;\n  color:rgba(229, 231, 235, var(--tw-text-opacity))\n}\n.card .title a[data-v-717beaa0]:after{\n  content:url('+d+');\n  width:1.25rem;\n  height:1.25rem;\n  position:absolute;\n  top:-1px;\n  right:-1.5rem;\n  padding-top:0px;\n  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size:1.125rem;\n  line-height:1.75rem;\n  font-weight:700;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  opacity:0\n}\n.card .prefix[data-v-717beaa0]{\n  position:relative;\n  width:-webkit-max-content;\n  width:-moz-max-content;\n  width:max-content;\n  white-space:pre;\n  border-top-left-radius:0.375rem;\n  border-bottom-right-radius:0.375rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(75, 85, 99, var(--tw-bg-opacity));\n  padding-left:0.375rem;\n  padding-right:0.375rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.875rem;\n  line-height:1.25rem\n}\n.card .prefix a[data-v-717beaa0]:after{\n  content:url('+d+');\n  width:1.25rem;\n  height:1.25rem;\n  position:absolute;\n  top:-1px;\n  right:-1.5rem;\n  padding-top:0px;\n  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size:1.125rem;\n  line-height:1.75rem;\n  font-weight:700;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  opacity:0\n}\n.card .prefix a[data-v-717beaa0]:hover:after, .card .title a[data-v-717beaa0]:hover:after{\n  opacity:1\n}\n.card .content[data-v-717beaa0]{\n  padding:0.5rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.75rem;\n  line-height:1rem\n}\n\n/*purgecss end ignore*/',""]),c.locals={},t.exports=c},232:function(t,e,o){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},233:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSJ3aGl0ZSI+CiAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xMCA2SDZhMiAyIDAgMDAtMiAydjEwYTIgMiAwIDAwMiAyaDEwYTIgMiAwIDAwMi0ydi00TTE0IDRoNm0wIDB2Nm0wLTZMMTAgMTQiIC8+Cjwvc3ZnPgo="},234:function(t,e,o){"use strict";o(227)},235:function(t,e,o){var n=o(68)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},236:function(t,e,o){"use strict";o.r(e);var n={props:{height:{type:String,default:"3rem"}}},r=o(13),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"bg-coolGray-300 rounded-sm px-px pb-px"},[t._m(0),t._v(" "),o("div",{staticClass:"bg-coolGray-800 rounded-sm-b",style:"height: "+t.height},[t._t("default")],2)])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"text-coolGray-900 flex p-0.5 gap-0.5"},[o("div",{staticClass:"rounded-full w-1 h-1 bg-coolGray-900"}),t._v(" "),o("div",{staticClass:"rounded-full w-1 h-1 bg-coolGray-900"}),t._v(" "),o("div",{staticClass:"rounded-full w-1 h-1 bg-coolGray-900"})])}],!1,null,null,null);e.default=component.exports},297:function(t,e,o){"use strict";o.r(e);var n={},r=o(13),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Card",[o("div",{staticClass:"content"},[o("div",{staticClass:"title"},[o("Lnk",{attrs:{href:"https://tailwindcss.com/docs/position"}},[t._v("Position")])],1),t._v(" "),o("div",{staticClass:"grid grid-cols-3 gap-2 mb-3"},[o("div",[o("TwClass",{staticClass:"mb-1 w-max",attrs:{name:"static",tooltip:"position: static"}},[t._v("static")]),t._v(" "),o("div",{staticClass:"h-20 bg-blue-700 flex gap-1 p-1"},[o("div",{staticClass:"h-6 w-6 rounded bg-yellow-600"}),t._v(" "),o("div",{staticClass:"h-6 w-6 rounded bg-emerald-600"}),t._v(" "),o("div",{staticClass:"h-6 w-6 rounded bg-red-600"})])],1),t._v(" "),o("div",[o("TwClass",{staticClass:"mb-1 w-max",attrs:{name:"relative",tooltip:"position: relative"}},[t._v("relative")]),t._v(" "),o("div",{staticClass:"h-20 bg-blue-700 flex gap-1 p-1"},[o("div",{staticClass:"h-6 w-6 rounded bg-yellow-600"}),t._v(" "),o("div",{staticClass:"h-6 w-6 rounded border border-dashed relative"},[o("div",{staticClass:"h-6 w-6 rounded bg-emerald-600 relative top-3 left-3 border border-coolGray-300"})]),t._v(" "),o("div",{staticClass:"h-6 w-6 rounded bg-red-600"})])],1),t._v(" "),o("div",[o("TwClass",{staticClass:"mb-1 w-max",attrs:{name:"absolute",tooltip:"position: absolute"}},[t._v("absolute")]),t._v(" "),o("div",{staticClass:"h-20 bg-blue-700 flex gap-1 p-1 border border-dashed"},[o("div",{staticClass:"h-6 w-6 rounded bg-yellow-600 relative"},[o("div",{staticClass:"h-6 w-6 rounded bg-emerald-600 absolute top-2 left-2 border border-coolGray-300"})]),t._v(" "),o("div",{staticClass:"h-6 w-6 rounded bg-red-600"})])],1)]),t._v(" "),o("div",{staticClass:"grid grid-cols-2 gap-2 mb-3"},[o("div",[o("TwClass",{staticClass:"mb-1 w-max",attrs:{name:"fixed",tooltip:"position: fixed"}},[t._v("fixed")]),t._v(" "),o("Browser",{attrs:{height:"4.3rem"}},[o("div",{staticClass:"h-full bg-blue-700 relative p-1"},[o("div",{staticClass:"h-8 w-8 rounded bg-emerald-600 absolute top-2 left-2 border border-coolGray-300"})])])],1),t._v(" "),o("div",[o("TwClass",{staticClass:"mb-1 w-max",attrs:{name:"sticky",tooltip:"position: sticky"}},[t._v("sticky")]),t._v(" "),o("div",{staticClass:"text-box-small scroll-box h-20 bg-black overflow-auto flex flex-col gap-1"},[o("div",[o("div",{staticClass:"w-full bg-yellow-600 sticky top-0 text-xs pl-1 font-sans"},[t._v("One")]),t._v(" "),o("p",[t._v("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus labore molestiae porro ea nisi ipsum perferendis tempore saepe quos iure odit facere, harum voluptates assumenda repellat illum natus hic incidunt!")])]),t._v(" "),o("div",[o("div",{staticClass:"w-full bg-emerald-600 sticky top-0 text-xs pl-1 font-sans"},[t._v("Two")]),t._v(" "),o("p",[t._v("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus labore molestiae porro ea nisi ipsum perferendis tempore saepe quos iure odit facere, harum voluptates assumenda repellat illum natus hic incidunt!")])]),t._v(" "),o("div",[o("div",{staticClass:"w-full bg-red-600 sticky top-0 text-xs pl-1 font-sans"},[t._v("Three")]),t._v(" "),o("p",[t._v("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus labore molestiae porro ea nisi ipsum perferendis tempore saepe quos iure odit facere, harum voluptates assumenda repellat illum natus hic incidunt!")])]),t._v(" "),o("div",[o("div",{staticClass:"w-full bg-blue-600 sticky top-0 text-xs pl-1 font-sans"},[t._v("Four")]),t._v(" "),o("p",[t._v("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus labore molestiae porro ea nisi ipsum perferendis tempore saepe quos iure odit facere, harum voluptates assumenda repellat illum natus hic incidunt!")])]),t._v(" "),o("div",[o("div",{staticClass:"w-full bg-purple-600 sticky top-0 text-xs pl-1 font-sans"},[t._v("Five")]),t._v(" "),o("p",[t._v("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus labore molestiae porro ea nisi ipsum perferendis tempore saepe quos iure odit facere, harum voluptates assumenda repellat illum natus hic incidunt!")])])])],1)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Lnk:o(167).default,TwClass:o(229).default,Browser:o(236).default,Card:o(228).default})}}]);