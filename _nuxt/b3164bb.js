(window.webpackJsonp=window.webpackJsonp||[]).push([[73,5,103],{227:function(t,o,e){var content=e(232);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(69).default)("1bee20f6",content,!0,{sourceMap:!1})},228:function(t,o,e){var content=e(236);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(69).default)("62c7fa01",content,!0,{sourceMap:!1})},229:function(t,o,e){"use strict";e.r(o);var r={props:{theme:{type:String,default:"dark"}}},n=(e(231),e(9)),component=Object(n.a)(r,(function(){var t=this,o=t.$createElement;return(t._self._c||o)("div",{staticClass:"card rounded-md",class:"light"===t.theme?"bg-coolGray-200":"bg-coolGray-800"},[t._t("default")],2)}),[],!1,null,"717beaa0",null);o.default=component.exports},230:function(t,o,e){"use strict";e.r(o);var r=e(21),n=(e(35),e(169),e(122),e(170),{props:{name:{type:String,default:""},tooltip:{type:[String,Object],default:"",required:!1}},data:function(){return{cssPropNVal:[]}},methods:{toClipboard:function(text){navigator.clipboard.writeText(text),this.$nuxt.$emit("toTooltip",text)},setCss:function(t){if("object"===Object(r.a)(t))console.log(t.text,t.css);else{var o=t.split(" "),e=o.shift(),n=o.join(" ");this.cssPropNVal[0]=e,this.cssPropNVal[1]=n,t.endsWith(";")&&console.log("ends with ;"),this.$nuxt.$emit("mouseOnClass",{prop:e,val:n})}}}}),l=(e(235),e(9)),component=Object(l.a)(n,(function(){var t=this,o=t.$createElement;return(t._self._c||o)("div",{staticClass:"tw-class cursor-pointer",on:{click:function(o){return t.toClipboard(t.name)},mouseover:function(o){return t.setCss(t.tooltip)},mouseleave:function(o){return t.$nuxt.$emit("mouseOnClass",!1)}}},[t._t("default")],2)}),[],!1,null,"6ff0f84a",null);o.default=component.exports},231:function(t,o,e){"use strict";e(227)},232:function(t,o,e){var r=e(68),n=e(233),l=e(234),d=r((function(i){return i[1]})),c=n(l);d.push([t.i,'/*purgecss start ignore*/\n.card .title[data-v-717beaa0]{\n  position:relative;\n  margin-bottom:0.5rem;\n  width:-webkit-max-content;\n  width:-moz-max-content;\n  width:max-content;\n  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size:0.875rem;\n  line-height:1.25rem;\n  --tw-text-opacity:1;\n  color:rgba(156, 163, 175, var(--tw-text-opacity))\n}\n.card .title[data-v-717beaa0]:hover{\n  --tw-text-opacity:1;\n  color:rgba(229, 231, 235, var(--tw-text-opacity))\n}\n.card .title a[data-v-717beaa0]:after{\n  content:url('+c+');\n  width:1.25rem;\n  height:1.25rem;\n  position:absolute;\n  top:-1px;\n  right:-1.5rem;\n  padding-top:0px;\n  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size:1.125rem;\n  line-height:1.75rem;\n  font-weight:700;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  opacity:0\n}\n.card .prefix[data-v-717beaa0]{\n  position:relative;\n  width:-webkit-max-content;\n  width:-moz-max-content;\n  width:max-content;\n  white-space:pre;\n  border-top-left-radius:0.375rem;\n  border-bottom-right-radius:0.375rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(75, 85, 99, var(--tw-bg-opacity));\n  padding-left:0.375rem;\n  padding-right:0.375rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.875rem;\n  line-height:1.25rem\n}\n.card .prefix a[data-v-717beaa0]:after{\n  content:url('+c+');\n  width:1.25rem;\n  height:1.25rem;\n  position:absolute;\n  top:-1px;\n  right:-1.5rem;\n  padding-top:0px;\n  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size:1.125rem;\n  line-height:1.75rem;\n  font-weight:700;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  opacity:0\n}\n.card .prefix a[data-v-717beaa0]:hover:after, .card .title a[data-v-717beaa0]:hover:after{\n  opacity:1\n}\n.card .content[data-v-717beaa0]{\n  padding:0.5rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.75rem;\n  line-height:1rem\n}\n\n/*purgecss end ignore*/',""]),d.locals={},t.exports=d},233:function(t,o,e){"use strict";t.exports=function(t,o){return o||(o={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),o.hash&&(t+=o.hash),/["'() \t\n]/.test(t)||o.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},234:function(t,o){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSJ3aGl0ZSI+CiAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xMCA2SDZhMiAyIDAgMDAtMiAydjEwYTIgMiAwIDAwMiAyaDEwYTIgMiAwIDAwMi0ydi00TTE0IDRoNm0wIDB2Nm0wLTZMMTAgMTQiIC8+Cjwvc3ZnPgo="},235:function(t,o,e){"use strict";e(228)},236:function(t,o,e){var r=e(68)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},245:function(t,o,e){var content=e(262);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(69).default)("9aace52e",content,!0,{sourceMap:!1})},261:function(t,o,e){"use strict";e(245)},262:function(t,o,e){var r=e(68)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.bg-img[data-v-09339d1f]{\n  background-image:url(/Tailwind-CSS-Cheatsheet/jordan-whitt-EerxztHCjM8-unsplash.jpg)\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},336:function(t,o,e){"use strict";e.r(o);var r={},n=(e(261),e(9)),component=Object(n.a)(r,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("Card",[e("div",{staticClass:"prefix"},[e("Lnk",{attrs:{href:"https://tailwindcss.com/docs/background-attachment"}},[t._v("bg-")])],1),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"grid grid-cols-3 gap-2"},[e("div",[e("TwClass",{staticClass:"w-max",attrs:{name:"bg-fixed",tooltip:"background-attachment: fixed"}},[t._v("fixed")]),t._v(" "),e("div",{staticClass:"scroll-box h-14 w-full mt-1 rounded overflow-y-scroll bg-fixed",staticStyle:{"background-image":"url(placeholder-light-blue.svg)"}},[e("div",{staticClass:"h-52"})])],1),t._v(" "),e("div",[e("TwClass",{staticClass:"w-max",attrs:{name:"bg-local",tooltip:"background-attachment: local"}},[t._v("local")]),t._v(" "),e("div",{staticClass:"scroll-box h-14 w-full mt-1 rounded overflow-y-scroll bg-local",staticStyle:{"background-image":"url(placeholder-light-blue.svg)"}},[e("div",{staticClass:"h-52"})])],1),t._v(" "),e("div",[e("TwClass",{staticClass:"w-max",attrs:{name:"bg-scroll",tooltip:"background-attachment: scroll"}},[t._v("scroll")]),t._v(" "),e("div",{staticClass:"scroll-box h-14 w-full mt-1 rounded overflow-y-scroll bg-scroll",staticStyle:{"background-image":"url(placeholder-light-blue.svg)"}},[e("div",{staticClass:"h-52"})])],1),t._v(" "),e("div",[e("TwClass",{staticClass:"w-max",attrs:{name:"bg-auto",tooltip:"background-size: auto"}},[t._v("auto")]),t._v(" "),e("div",{staticClass:"bg-no-repeat h-14 w-full mt-1 rounded bg-auto",staticStyle:{"background-image":"url(placeholder-light-blue.svg)"}})],1),t._v(" "),e("div",[e("TwClass",{staticClass:"w-max",attrs:{name:"bg-cover",tooltip:"background-size: cover"}},[t._v("cover")]),t._v(" "),e("div",{staticClass:"bg-no-repeat h-14 w-full mt-1 rounded bg-cover",staticStyle:{"background-image":"url(placeholder-light-blue.svg)"}})],1),t._v(" "),e("div",[e("TwClass",{staticClass:"w-max",attrs:{name:"bg-contain",tooltip:"background-size: contain"}},[t._v("contain")]),t._v(" "),e("div",{staticClass:"bg-no-repeat h-14 w-full mt-1 rounded bg-contain",staticStyle:{"background-image":"url(placeholder-light-blue.svg)"}})],1)]),t._v(" "),e("div",{staticClass:"grid grid-cols-3 gap-2 mt-2"},[e("div",[e("TwClass",{staticClass:"w-max",attrs:{name:"bg-repeat",tooltip:"background-repeat: repeat"}},[t._v("repeat")]),t._v(" "),e("div",{staticClass:"bg-img h-16 mt-1 rounded bg-coolGray-700 bg-repeat"})],1),t._v(" "),e("div",[e("TwClass",{staticClass:"w-max",attrs:{name:"bg-no-repeat",tooltip:"background-repeat: no-repeat"}},[t._v("no-repeat")]),t._v(" "),e("div",{staticClass:"bg-img h-16 mt-1 rounded bg-coolGray-700 bg-no-repeat"})],1),t._v(" "),e("div",[e("TwClass",{staticClass:"w-max",attrs:{name:"bg-repeat-x",tooltip:"background-repeat: repeat-x"}},[t._v("repeat-x")]),t._v(" "),e("div",{staticClass:"bg-img h-16 mt-1 rounded bg-coolGray-700 bg-repeat-x"})],1),t._v(" "),e("div",[e("TwClass",{staticClass:"w-max",attrs:{name:"bg-repeat-y",tooltip:"background-repeat: repeat-y"}},[t._v("repeat-y")]),t._v(" "),e("div",{staticClass:"bg-img h-16 mt-1 rounded bg-coolGray-700 bg-repeat-y"})],1),t._v(" "),e("div",[e("TwClass",{staticClass:"w-max",attrs:{name:"bg-repeat-round",tooltip:"background-repeat: round"}},[t._v("repeat-round")]),t._v(" "),e("div",{staticClass:"bg-img h-16 mt-1 rounded bg-coolGray-700 bg-repeat-round"})],1),t._v(" "),e("div",[e("TwClass",{staticClass:"w-max",attrs:{name:"bg-repeat-space",tooltip:"background-repeat: space"}},[t._v("repeat-space")]),t._v(" "),e("div",{staticClass:"bg-img h-16 mt-1 rounded bg-coolGray-700 bg-repeat-space"})],1)]),t._v(" "),e("div",{staticClass:"grid grid-cols-3 gap-2 mt-2"},[e("div",[e("TwClass",{staticClass:"w-max",attrs:{name:"bg-left-top",tooltip:"background-position: left top"}},[t._v("left-top")]),t._v(" "),e("div",{staticClass:"bg-img mt-1 h-14 rounded bg-no-repeat bg-coolGray-700 bg-left-top"})],1),t._v(" "),e("div",[e("TwClass",{staticClass:"w-max",attrs:{name:"bg-top",tooltip:"background-position: top"}},[t._v("top")]),t._v(" "),e("div",{staticClass:"bg-img mt-1 h-14 rounded bg-no-repeat bg-coolGray-700 bg-top"})],1),t._v(" "),e("div",[e("TwClass",{staticClass:"w-max",attrs:{name:"bg-right-top",tooltip:"background-position: right top"}},[t._v("right-top")]),t._v(" "),e("div",{staticClass:"bg-img mt-1 h-14 rounded bg-no-repeat bg-coolGray-700 bg-right-top"})],1),t._v(" "),e("div",[e("TwClass",{staticClass:"w-max",attrs:{name:"bg-left",tooltip:"background-position: left"}},[t._v("left")]),t._v(" "),e("div",{staticClass:"bg-img mt-1 h-14 rounded bg-no-repeat bg-coolGray-700 bg-left"})],1),t._v(" "),e("div",[e("TwClass",{staticClass:"w-max",attrs:{name:"bg-center",tooltip:"background-position: center"}},[t._v("center")]),t._v(" "),e("div",{staticClass:"bg-img mt-1 h-14 rounded bg-no-repeat bg-coolGray-700 bg-center"})],1),t._v(" "),e("div",[e("TwClass",{staticClass:"w-max",attrs:{name:"bg-right",tooltip:"background-position: right"}},[t._v("right")]),t._v(" "),e("div",{staticClass:"bg-img mt-1 h-14 rounded bg-no-repeat bg-coolGray-700 bg-right"})],1),t._v(" "),e("div",[e("TwClass",{staticClass:"w-max",attrs:{name:"bg-left-bottom",tooltip:"background-position: left bottom"}},[t._v("left-bottom")]),t._v(" "),e("div",{staticClass:"bg-img mt-1 h-14 rounded bg-no-repeat bg-coolGray-700 bg-left-bottom"})],1),t._v(" "),e("div",[e("TwClass",{staticClass:"w-max",attrs:{name:"bg-bottom",tooltip:"background-position: bottom"}},[t._v("bottom")]),t._v(" "),e("div",{staticClass:"bg-img mt-1 h-14 rounded bg-no-repeat bg-coolGray-700 bg-bottom"})],1),t._v(" "),e("div",[e("TwClass",{staticClass:"w-max",attrs:{name:"bg-right-bottom",tooltip:"background-position: right bottom"}},[t._v("right-bottom")]),t._v(" "),e("div",{staticClass:"bg-img mt-1 h-14 rounded bg-no-repeat bg-coolGray-700 bg-right-bottom"})],1)]),t._v(" "),e("div",{staticClass:"grid grid-cols-3 gap-2 mt-2"},[e("div",[e("TwClass",{staticClass:"text-xs",attrs:{name:"bg-gradient-to-tl",tooltip:"background-image: linear-gradient(to top left, var(--tw-gradient-stops))"}},[t._v("gradient-to-tl")]),t._v(" "),e("div",{staticClass:"rounded mt-1 h-12 bg-gradient-to-tl from-yellow-400 via-red-500 to-pink-500"})],1),t._v(" "),e("div",[e("TwClass",{staticClass:"text-xs",attrs:{name:"bg-gradient-to-t",tooltip:"background-image: linear-gradient(to top, var(--tw-gradient-stops))"}},[t._v("gradient-to-t")]),t._v(" "),e("div",{staticClass:"rounded mt-1 h-12 bg-gradient-to-t from-yellow-400 via-red-500 to-pink-500"})],1),t._v(" "),e("div",[e("TwClass",{staticClass:"text-xs",attrs:{name:"bg-gradient-to-tr",tooltip:"background-image: linear-gradient(to top right, var(--tw-gradient-stops))"}},[t._v("gradient-to-tr")]),t._v(" "),e("div",{staticClass:"rounded mt-1 h-12 bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500"})],1),t._v(" "),e("div",[e("TwClass",{staticClass:"text-xs",attrs:{name:"bg-gradient-to-l",tooltip:"background-image: linear-gradient(to left, var(--tw-gradient-stops))"}},[t._v("gradient-to-l")]),t._v(" "),e("div",{staticClass:"rounded mt-1 h-12 bg-gradient-to-l from-yellow-400 via-red-500 to-pink-500"})],1),t._v(" "),e("div",[e("TwClass",{staticClass:"text-xs",attrs:{name:"bg-none",tooltip:"background-image: none"}},[t._v("none")]),t._v(" "),e("div",{staticClass:"rounded mt-1 h-12 bg-none from-yellow-400 via-red-500 to-pink-500"})],1),t._v(" "),e("div",[e("TwClass",{staticClass:"text-xs",attrs:{name:"bg-gradient-to-r",tooltip:"background-image: linear-gradient(to right, var(--tw-gradient-stops))"}},[t._v("gradient-to-r")]),t._v(" "),e("div",{staticClass:"rounded mt-1 h-12 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"})],1),t._v(" "),e("div",[e("TwClass",{staticClass:"text-xs",attrs:{name:"bg-gradient-to-bl",tooltip:"background-image: linear-gradient(to bottom left, var(--tw-gradient-stops))"}},[t._v("gradient-to-bl")]),t._v(" "),e("div",{staticClass:"rounded mt-1 h-12 bg-gradient-to-bl from-yellow-400 via-red-500 to-pink-500"})],1),t._v(" "),e("div",[e("TwClass",{staticClass:"text-xs",attrs:{name:"bg-gradient-to-b",tooltip:"background-image: linear-gradient(to bottom, var(--tw-gradient-stops))"}},[t._v("gradient-to-b")]),t._v(" "),e("div",{staticClass:"rounded mt-1 h-12 bg-gradient-to-b from-yellow-400 via-red-500 to-pink-500"})],1),t._v(" "),e("div",[e("TwClass",{staticClass:"text-xs",attrs:{name:"bg-gradient-to-br",tooltip:"background-image: linear-gradient(to bottom right, var(--tw-gradient-stops))"}},[t._v("gradient-to-br")]),t._v(" "),e("div",{staticClass:"rounded mt-1 h-12 bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500"})],1)]),t._v(" "),e("div",{staticClass:"mt-2 grid grid-cols-3 gap-2"},[e("div",[e("div",{staticClass:"text-red-600 w-max cursor-pointer",on:{mouseover:function(o){return t.$nuxt.$emit("highlightColor",!0)},mouseleave:function(o){return t.$nuxt.$emit("highlightColor",!1)}}},[t._v("{color}")]),t._v(" "),e("div",{staticClass:"rounded mt-1 h-7 bg-red-600"})]),t._v(" "),e("div",[e("TwClass",{staticClass:"w-max",attrs:{name:"bg-transparent",tooltip:"background-color: transparent"}},[t._v("transparent")]),t._v(" "),e("div",{staticClass:"rounded mt-1 h-7 bg-transparent"})],1),t._v(" "),e("div",[e("TwClass",{staticClass:"w-max",attrs:{name:"bg-current",tooltip:"background-color: currentColor"}},[t._v("current")]),t._v(" "),e("div",{staticClass:"rounded mt-1 h-7 bg-current text-emerald-400 font-sans flex justify-center items-center"},[t._v("Hi")])],1)])])])}),[],!1,null,"09339d1f",null);o.default=component.exports;installComponents(component,{Lnk:e(168).default,TwClass:e(230).default,Card:e(229).default})}}]);