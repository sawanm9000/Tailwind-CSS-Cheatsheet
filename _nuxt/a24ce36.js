(window.webpackJsonp=window.webpackJsonp||[]).push([[0,4,103],{226:function(t,l,e){var content=e(231);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(69).default)("5749baca",content,!0,{sourceMap:!1})},227:function(t,l,e){var content=e(235);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(69).default)("62c7fa01",content,!0,{sourceMap:!1})},228:function(t,l,e){"use strict";e.r(l);var o={props:{theme:{type:String,default:"dark"}}},r=(e(230),e(13)),component=Object(r.a)(o,(function(){var t=this,l=t.$createElement;return(t._self._c||l)("div",{staticClass:"card rounded-md",class:"light"===t.theme?"bg-coolGray-200":"bg-coolGray-800"},[t._t("default")],2)}),[],!1,null,"37ae0a58",null);l.default=component.exports},229:function(t,l,e){"use strict";e.r(l);var o=e(21),r=(e(40),e(168),e(122),e(169),{props:{name:{type:String,default:""},tooltip:{type:[String,Object],default:"",required:!1}},data:function(){return{cssPropNVal:[]}},methods:{toClipboard:function(text){navigator.clipboard.writeText(text),this.$nuxt.$emit("toTooltip",text)},setCss:function(t){if("object"===Object(o.a)(t))console.log(t.text,t.css);else{var l=t.split(" "),e=l.shift(),r=l.join(" ");this.cssPropNVal[0]=e,this.cssPropNVal[1]=r,t.endsWith(";")&&console.log("ends with ;"),this.$nuxt.$emit("mouseOnClass",{prop:e,val:r})}}}}),n=(e(234),e(13)),component=Object(n.a)(r,(function(){var t=this,l=t.$createElement;return(t._self._c||l)("div",{staticClass:"tw-class cursor-pointer",on:{click:function(l){return t.toClipboard(t.name)},mouseover:function(l){return t.setCss(t.tooltip)},mouseleave:function(l){return t.$nuxt.$emit("mouseOnClass",!1)}}},[t._t("default")],2)}),[],!1,null,"6ff0f84a",null);l.default=component.exports},230:function(t,l,e){"use strict";e(226)},231:function(t,l,e){var o=e(68),r=e(232),n=e(233),C=o((function(i){return i[1]})),c=r(n);C.push([t.i,'/*purgecss start ignore*/\n.card .prefix[data-v-37ae0a58]{\n  position:relative;\n  width:-webkit-max-content;\n  width:-moz-max-content;\n  width:max-content;\n  white-space:pre;\n  border-top-left-radius:0.375rem;\n  border-bottom-right-radius:0.375rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(75, 85, 99, var(--tw-bg-opacity));\n  padding-left:0.375rem;\n  padding-right:0.375rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.875rem;\n  line-height:1.25rem\n}\n.card .prefix a[data-v-37ae0a58]:after{\n  content:url('+c+');\n  width:1.25rem;\n  height:1.25rem;\n  position:absolute;\n  top:-1px;\n  right:-1.5rem;\n  padding-top:0px;\n  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size:1.125rem;\n  line-height:1.75rem;\n  font-weight:700;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  opacity:0\n}\n.card .prefix a[data-v-37ae0a58]:hover:after{\n  opacity:1\n}\n.card .content[data-v-37ae0a58]{\n  padding:0.5rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.75rem;\n  line-height:1rem\n}\n\n/*purgecss end ignore*/',""]),C.locals={},t.exports=C},232:function(t,l,e){"use strict";t.exports=function(t,l){return l||(l={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),l.hash&&(t+=l.hash),/["'() \t\n]/.test(t)||l.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},233:function(t,l){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSJ3aGl0ZSI+CiAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xMCA2SDZhMiAyIDAgMDAtMiAydjEwYTIgMiAwIDAwMiAyaDEwYTIgMiAwIDAwMi0ydi00TTE0IDRoNm0wIDB2Nm0wLTZMMTAgMTQiIC8+Cjwvc3ZnPgo="},234:function(t,l,e){"use strict";e(227)},235:function(t,l,e){var o=e(68)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},382:function(t,l,e){"use strict";e.r(l);var o={},r=e(13),component=Object(r.a)(o,(function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("Card",[e("div",{staticClass:"content relative"},[e("div",{staticClass:"absolute top-0 left-0 pl-2 pt-1"},[e("Lnk",{staticClass:"font-sans text-sm text-coolGray-400",attrs:{href:"https://tailwindcss.com/docs/customizing-colors"}},[t._v("Color")])],1),t._v(" "),e("div",{staticClass:"overflow-auto"},[e("div",{staticClass:"grid grid-rows-1 gap-x-0.5",staticStyle:{"grid-template-columns":"35px repeat(5, 1fr) 3px repeat(17, 1fr) 35px","min-width":"600px"}},[e("div",{staticClass:"grid bg-gradient-to-b from-coolGray-600 to-white text-transparent bg-clip-text",staticStyle:{"grid-template-rows":"60px repeat(10, 1fr)"}},[e("div",{staticClass:"h-5"}),t._v(" "),e("div",{staticClass:"h-5 flex justify-end items-center pr-1 font-semibold"},[t._v("900")]),t._v(" "),e("div",{staticClass:"h-5 flex justify-end items-center pr-1 font-semibold"},[t._v("800")]),t._v(" "),e("div",{staticClass:"h-5 flex justify-end items-center pr-1 font-semibold"},[t._v("700")]),t._v(" "),e("div",{staticClass:"h-5 flex justify-end items-center pr-1 font-semibold"},[t._v("600")]),t._v(" "),e("div",{staticClass:"h-5 flex justify-end items-center pr-1 font-semibold"},[t._v("500")]),t._v(" "),e("div",{staticClass:"h-5 flex justify-end items-center pr-1 font-semibold"},[t._v("400")]),t._v(" "),e("div",{staticClass:"h-5 flex justify-end items-center pr-1 font-semibold"},[t._v("300")]),t._v(" "),e("div",{staticClass:"h-5 flex justify-end items-center pr-1 font-semibold"},[t._v("200")]),t._v(" "),e("div",{staticClass:"h-5 flex justify-end items-center pr-1 font-semibold"},[t._v("100")]),t._v(" "),e("div",{staticClass:"h-5 flex justify-end items-center pr-1 font-semibold"},[t._v("50")])]),t._v(" "),e("div",{staticClass:"grid",staticStyle:{"grid-template-rows":"60px repeat(10, 1fr)"}},[e("div",{staticClass:"relative h-5 self-end"},[e("div",{staticClass:"h-5 absolute transform -rotate-45 origin-left left-2.5 top-1 text-blueGray-300"},[t._v("blueGray*")])]),t._v(" "),e("TwClass",{staticClass:"h-5 bg-blueGray-900 rounded-t",attrs:{name:"blueGray-900",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-blueGray-800",attrs:{name:"blueGray-800",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-blueGray-700",attrs:{name:"blueGray-700",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-blueGray-600",attrs:{name:"blueGray-600",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-blueGray-500",attrs:{name:"blueGray-500",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-blueGray-400",attrs:{name:"blueGray-400",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-blueGray-300",attrs:{name:"blueGray-300",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-blueGray-200",attrs:{name:"blueGray-200",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-blueGray-100",attrs:{name:"blueGray-100",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-blueGray-50 rounded-b",attrs:{name:"blueGray-50",tooltip:""}})],1),t._v(" "),e("div",{staticClass:"grid",staticStyle:{"grid-template-rows":"60px repeat(10, 1fr)"}},[e("div",{staticClass:"relative h-5 self-end"},[e("div",{staticClass:"h-5 absolute transform -rotate-45 origin-left left-2.5 top-1 text-coolGray-300"},[t._v("coolGray*")])]),t._v(" "),e("TwClass",{staticClass:"h-5 bg-coolGray-900 rounded-t",attrs:{name:"coolGray-900",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-coolGray-800",attrs:{name:"coolGray-800",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-coolGray-700",attrs:{name:"coolGray-700",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-coolGray-600",attrs:{name:"coolGray-600",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-coolGray-500",attrs:{name:"coolGray-500",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-coolGray-400",attrs:{name:"coolGray-400",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-coolGray-300",attrs:{name:"coolGray-300",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-coolGray-200",attrs:{name:"coolGray-200",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-coolGray-100",attrs:{name:"coolGray-100",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-coolGray-50 rounded-b",attrs:{name:"coolGray-50",tooltip:""}})],1),t._v(" "),e("div",{staticClass:"grid",staticStyle:{"grid-template-rows":"60px repeat(10, 1fr)"}},[e("div",{staticClass:"relative h-5 self-end"},[e("div",{staticClass:"h-5 absolute transform -rotate-45 origin-left left-2.5 top-1 text-gray-300"},[t._v("gray")])]),t._v(" "),e("TwClass",{staticClass:"h-5 bg-gray-900 rounded-t",attrs:{name:"gray-900",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-gray-800",attrs:{name:"gray-800",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-gray-700",attrs:{name:"gray-700",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-gray-600",attrs:{name:"gray-600",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-gray-500",attrs:{name:"gray-500",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-gray-400",attrs:{name:"gray-400",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-gray-300",attrs:{name:"gray-300",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-gray-200",attrs:{name:"gray-200",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-gray-100",attrs:{name:"gray-100",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-gray-50 rounded-b",attrs:{name:"gray-50",tooltip:""}})],1),t._v(" "),e("div",{staticClass:"grid",staticStyle:{"grid-template-rows":"60px repeat(10, 1fr)"}},[e("div",{staticClass:"relative h-5 self-end"},[e("div",{staticClass:"h-5 absolute transform -rotate-45 origin-left left-2.5 top-1 text-trueGray-300"},[t._v("trueGray*")])]),t._v(" "),e("TwClass",{staticClass:"h-5 bg-trueGray-900 rounded-t",attrs:{name:"trueGray-900",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-trueGray-800",attrs:{name:"trueGray-800",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-trueGray-700",attrs:{name:"trueGray-700",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-trueGray-600",attrs:{name:"trueGray-600",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-trueGray-500",attrs:{name:"trueGray-500",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-trueGray-400",attrs:{name:"trueGray-400",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-trueGray-300",attrs:{name:"trueGray-300",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-trueGray-200",attrs:{name:"trueGray-200",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-trueGray-100",attrs:{name:"trueGray-100",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-trueGray-50 rounded-b",attrs:{name:"trueGray-50",tooltip:""}})],1),t._v(" "),e("div",{staticClass:"grid",staticStyle:{"grid-template-rows":"60px repeat(10, 1fr)"}},[e("div",{staticClass:"relative h-5 self-end"},[e("div",{staticClass:"h-5 absolute transform -rotate-45 origin-left left-2.5 top-1 text-warmGray-300"},[t._v("warmGray*")])]),t._v(" "),e("TwClass",{staticClass:"h-5 bg-warmGray-900 rounded-t",attrs:{name:"warmGray-900",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-warmGray-800",attrs:{name:"warmGray-800",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-warmGray-700",attrs:{name:"warmGray-700",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-warmGray-600",attrs:{name:"warmGray-600",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-warmGray-500",attrs:{name:"warmGray-500",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-warmGray-400",attrs:{name:"warmGray-400",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-warmGray-300",attrs:{name:"warmGray-300",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-warmGray-200",attrs:{name:"warmGray-200",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-warmGray-100",attrs:{name:"warmGray-100",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-warmGray-50 rounded-b",attrs:{name:"warmGray-50",tooltip:""}})],1),t._v(" "),e("div"),t._v(" "),e("div",{staticClass:"grid",staticStyle:{"grid-template-rows":"60px repeat(10, 1fr)"}},[e("div",{staticClass:"relative h-5 self-end"},[e("div",{staticClass:"h-5 absolute transform -rotate-45 origin-left left-2.5 top-1 text-red-300"},[t._v("red")])]),t._v(" "),e("TwClass",{staticClass:"h-5 bg-red-900 rounded-t",attrs:{name:"red-900",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-red-800",attrs:{name:"red-800",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-red-700",attrs:{name:"red-700",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-red-600",attrs:{name:"red-600",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-red-500",attrs:{name:"red-500",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-red-400",attrs:{name:"red-400",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-red-300",attrs:{name:"red-300",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-red-200",attrs:{name:"red-200",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-red-100",attrs:{name:"red-100",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-red-50 rounded-b",attrs:{name:"red-50",tooltip:""}})],1),t._v(" "),e("div",{staticClass:"grid",staticStyle:{"grid-template-rows":"60px repeat(10, 1fr)"}},[e("div",{staticClass:"relative h-5 self-end"},[e("div",{staticClass:"h-5 absolute transform -rotate-45 origin-left left-2.5 top-1 text-orange-300"},[t._v("orange*")])]),t._v(" "),e("TwClass",{staticClass:"h-5 bg-orange-900 rounded-t",attrs:{name:"orange-900",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-orange-800",attrs:{name:"orange-800",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-orange-700",attrs:{name:"orange-700",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-orange-600",attrs:{name:"orange-600",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-orange-500",attrs:{name:"orange-500",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-orange-400",attrs:{name:"orange-400",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-orange-300",attrs:{name:"orange-300",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-orange-200",attrs:{name:"orange-200",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-orange-100",attrs:{name:"orange-100",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-orange-50 rounded-b",attrs:{name:"orange-50",tooltip:""}})],1),t._v(" "),e("div",{staticClass:"grid",staticStyle:{"grid-template-rows":"60px repeat(10, 1fr)"}},[e("div",{staticClass:"relative h-5 self-end"},[e("div",{staticClass:"h-5 absolute transform -rotate-45 origin-left left-2.5 top-1 text-amber-300"},[t._v("amber*")])]),t._v(" "),e("TwClass",{staticClass:"h-5 bg-amber-900 rounded-t",attrs:{name:"amber-900",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-amber-800",attrs:{name:"amber-800",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-amber-700",attrs:{name:"amber-700",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-amber-600",attrs:{name:"amber-600",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-amber-500",attrs:{name:"amber-500",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-amber-400",attrs:{name:"amber-400",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-amber-300",attrs:{name:"amber-300",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-amber-200",attrs:{name:"amber-200",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-amber-100",attrs:{name:"amber-100",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-amber-50 rounded-b",attrs:{name:"amber-50",tooltip:""}})],1),t._v(" "),e("div",{staticClass:"grid",staticStyle:{"grid-template-rows":"60px repeat(10, 1fr)"}},[e("div",{staticClass:"relative h-5 self-end"},[e("div",{staticClass:"h-5 absolute transform -rotate-45 origin-left left-2.5 top-1 text-yellow-300"},[t._v("yellow")])]),t._v(" "),e("TwClass",{staticClass:"h-5 bg-yellow-900 rounded-t",attrs:{name:"yellow-900",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-yellow-800",attrs:{name:"yellow-800",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-yellow-700",attrs:{name:"yellow-700",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-yellow-600",attrs:{name:"yellow-600",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-yellow-500",attrs:{name:"yellow-500",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-yellow-400",attrs:{name:"yellow-400",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-yellow-300",attrs:{name:"yellow-300",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-yellow-200",attrs:{name:"yellow-200",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-yellow-100",attrs:{name:"yellow-100",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-yellow-50 rounded-b",attrs:{name:"yellow-50",tooltip:""}})],1),t._v(" "),e("div",{staticClass:"grid",staticStyle:{"grid-template-rows":"60px repeat(10, 1fr)"}},[e("div",{staticClass:"relative h-5 self-end"},[e("div",{staticClass:"h-5 absolute transform -rotate-45 origin-left left-2.5 top-1 text-lime-300"},[t._v("lime*")])]),t._v(" "),e("TwClass",{staticClass:"h-5 bg-lime-900 rounded-t",attrs:{name:"lime-900",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-lime-800",attrs:{name:"lime-800",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-lime-700",attrs:{name:"lime-700",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-lime-600",attrs:{name:"lime-600",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-lime-500",attrs:{name:"lime-500",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-lime-400",attrs:{name:"lime-400",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-lime-300",attrs:{name:"lime-300",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-lime-200",attrs:{name:"lime-200",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-lime-100",attrs:{name:"lime-100",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-lime-50 rounded-b",attrs:{name:"lime-50",tooltip:""}})],1),t._v(" "),e("div",{staticClass:"grid",staticStyle:{"grid-template-rows":"60px repeat(10, 1fr)"}},[e("div",{staticClass:"relative h-5 self-end"},[e("div",{staticClass:"h-5 absolute transform -rotate-45 origin-left left-2.5 top-1 text-green-300"},[t._v("green")])]),t._v(" "),e("TwClass",{staticClass:"h-5 bg-green-900 rounded-t",attrs:{name:"green-900",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-green-800",attrs:{name:"green-800",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-green-700",attrs:{name:"green-700",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-green-600",attrs:{name:"green-600",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-green-500",attrs:{name:"green-500",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-green-400",attrs:{name:"green-400",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-green-300",attrs:{name:"green-300",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-green-200",attrs:{name:"green-200",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-green-100",attrs:{name:"green-100",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-green-50 rounded-b",attrs:{name:"green-50",tooltip:""}})],1),t._v(" "),e("div",{staticClass:"grid",staticStyle:{"grid-template-rows":"60px repeat(10, 1fr)"}},[e("div",{staticClass:"relative h-5 self-end"},[e("div",{staticClass:"h-5 absolute transform -rotate-45 origin-left left-2.5 top-1 text-emerald-300"},[t._v("emerald*")])]),t._v(" "),e("TwClass",{staticClass:"h-5 bg-emerald-900 rounded-t",attrs:{name:"emerald-900",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-emerald-800",attrs:{name:"emerald-800",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-emerald-700",attrs:{name:"emerald-700",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-emerald-600",attrs:{name:"emerald-600",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-emerald-500",attrs:{name:"emerald-500",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-emerald-400",attrs:{name:"emerald-400",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-emerald-300",attrs:{name:"emerald-300",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-emerald-200",attrs:{name:"emerald-200",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-emerald-100",attrs:{name:"emerald-100",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-emerald-50 rounded-b",attrs:{name:"emerald-50",tooltip:""}})],1),t._v(" "),e("div",{staticClass:"grid",staticStyle:{"grid-template-rows":"60px repeat(10, 1fr)"}},[e("div",{staticClass:"relative h-5 self-end"},[e("div",{staticClass:"h-5 absolute transform -rotate-45 origin-left left-2.5 top-1 text-teal-300"},[t._v("teal*")])]),t._v(" "),e("TwClass",{staticClass:"h-5 bg-teal-900 rounded-t",attrs:{name:"teal-900",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-teal-800",attrs:{name:"teal-800",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-teal-700",attrs:{name:"teal-700",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-teal-600",attrs:{name:"teal-600",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-teal-500",attrs:{name:"teal-500",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-teal-400",attrs:{name:"teal-400",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-teal-300",attrs:{name:"teal-300",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-teal-200",attrs:{name:"teal-200",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-teal-100",attrs:{name:"teal-100",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-teal-50 rounded-b",attrs:{name:"teal-50",tooltip:""}})],1),t._v(" "),e("div",{staticClass:"grid",staticStyle:{"grid-template-rows":"60px repeat(10, 1fr)"}},[e("div",{staticClass:"relative h-5 self-end"},[e("div",{staticClass:"h-5 absolute transform -rotate-45 origin-left left-2.5 top-1 text-cyan-300"},[t._v("cyan*")])]),t._v(" "),e("TwClass",{staticClass:"h-5 bg-cyan-900 rounded-t",attrs:{name:"cyan-900",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-cyan-800",attrs:{name:"cyan-800",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-cyan-700",attrs:{name:"cyan-700",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-cyan-600",attrs:{name:"cyan-600",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-cyan-500",attrs:{name:"cyan-500",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-cyan-400",attrs:{name:"cyan-400",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-cyan-300",attrs:{name:"cyan-300",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-cyan-200",attrs:{name:"cyan-200",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-cyan-100",attrs:{name:"cyan-100",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-cyan-50 rounded-b",attrs:{name:"cyan-50",tooltip:""}})],1),t._v(" "),e("div",{staticClass:"grid",staticStyle:{"grid-template-rows":"60px repeat(10, 1fr)"}},[e("div",{staticClass:"relative h-5 self-end"},[e("div",{staticClass:"h-5 absolute transform -rotate-45 origin-left left-2.5 top-1 text-lightBlue-300"},[t._v("lightBlue*")])]),t._v(" "),e("TwClass",{staticClass:"h-5 bg-lightBlue-900 rounded-t",attrs:{name:"lightBlue-900",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-lightBlue-800",attrs:{name:"lightBlue-800",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-lightBlue-700",attrs:{name:"lightBlue-700",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-lightBlue-600",attrs:{name:"lightBlue-600",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-lightBlue-500",attrs:{name:"lightBlue-500",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-lightBlue-400",attrs:{name:"lightBlue-400",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-lightBlue-300",attrs:{name:"lightBlue-300",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-lightBlue-200",attrs:{name:"lightBlue-200",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-lightBlue-100",attrs:{name:"lightBlue-100",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-lightBlue-50 rounded-b",attrs:{name:"lightBlue-50",tooltip:""}})],1),t._v(" "),e("div",{staticClass:"grid",staticStyle:{"grid-template-rows":"60px repeat(10, 1fr)"}},[e("div",{staticClass:"relative h-5 self-end"},[e("div",{staticClass:"h-5 absolute transform -rotate-45 origin-left left-2.5 top-1 text-blue-300"},[t._v("blue")])]),t._v(" "),e("TwClass",{staticClass:"h-5 bg-blue-900 rounded-t",attrs:{name:"blue-900",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-blue-800",attrs:{name:"blue-800",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-blue-700",attrs:{name:"blue-700",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-blue-600",attrs:{name:"blue-600",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-blue-500",attrs:{name:"blue-500",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-blue-400",attrs:{name:"blue-400",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-blue-300",attrs:{name:"blue-300",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-blue-200",attrs:{name:"blue-200",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-blue-100",attrs:{name:"blue-100",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-blue-50 rounded-b",attrs:{name:"blue-50",tooltip:""}})],1),t._v(" "),e("div",{staticClass:"grid",staticStyle:{"grid-template-rows":"60px repeat(10, 1fr)"}},[e("div",{staticClass:"relative h-5 self-end"},[e("div",{staticClass:"h-5 absolute transform -rotate-45 origin-left left-2.5 top-1 text-indigo-300"},[t._v("indigo")])]),t._v(" "),e("TwClass",{staticClass:"h-5 bg-indigo-900 rounded-t",attrs:{name:"indigo-900",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-indigo-800",attrs:{name:"indigo-800",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-indigo-700",attrs:{name:"indigo-700",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-indigo-600",attrs:{name:"indigo-600",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-indigo-500",attrs:{name:"indigo-500",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-indigo-400",attrs:{name:"indigo-400",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-indigo-300",attrs:{name:"indigo-300",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-indigo-200",attrs:{name:"indigo-200",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-indigo-100",attrs:{name:"indigo-100",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-indigo-50 rounded-b",attrs:{name:"indigo-50",tooltip:""}})],1),t._v(" "),e("div",{staticClass:"grid",staticStyle:{"grid-template-rows":"60px repeat(10, 1fr)"}},[e("div",{staticClass:"relative h-5 self-end"},[e("div",{staticClass:"h-5 absolute transform -rotate-45 origin-left left-2.5 top-1 text-violet-300"},[t._v("violet*")])]),t._v(" "),e("TwClass",{staticClass:"h-5 bg-violet-900 rounded-t",attrs:{name:"violet-900",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-violet-800",attrs:{name:"violet-800",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-violet-700",attrs:{name:"violet-700",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-violet-600",attrs:{name:"violet-600",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-violet-500",attrs:{name:"violet-500",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-violet-400",attrs:{name:"violet-400",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-violet-300",attrs:{name:"violet-300",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-violet-200",attrs:{name:"violet-200",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-violet-100",attrs:{name:"violet-100",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-violet-50 rounded-b",attrs:{name:"violet-50",tooltip:""}})],1),t._v(" "),e("div",{staticClass:"grid",staticStyle:{"grid-template-rows":"60px repeat(10, 1fr)"}},[e("div",{staticClass:"relative h-5 self-end"},[e("div",{staticClass:"h-5 absolute transform -rotate-45 origin-left left-2.5 top-1 text-purple-300"},[t._v("purple")])]),t._v(" "),e("TwClass",{staticClass:"h-5 bg-purple-900 rounded-t",attrs:{name:"purple-900",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-purple-800",attrs:{name:"purple-800",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-purple-700",attrs:{name:"purple-700",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-purple-600",attrs:{name:"purple-600",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-purple-500",attrs:{name:"purple-500",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-purple-400",attrs:{name:"purple-400",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-purple-300",attrs:{name:"purple-300",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-purple-200",attrs:{name:"purple-200",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-purple-100",attrs:{name:"purple-100",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-purple-50 rounded-b",attrs:{name:"purple-50",tooltip:""}})],1),t._v(" "),e("div",{staticClass:"grid",staticStyle:{"grid-template-rows":"60px repeat(10, 1fr)"}},[e("div",{staticClass:"relative h-5 self-end"},[e("div",{staticClass:"h-5 absolute transform -rotate-45 origin-left left-2.5 top-1 text-fuchsia-300"},[t._v("fuchsia*")])]),t._v(" "),e("TwClass",{staticClass:"h-5 bg-fuchsia-900 rounded-t",attrs:{name:"fuchsia-900",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-fuchsia-800",attrs:{name:"fuchsia-800",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-fuchsia-700",attrs:{name:"fuchsia-700",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-fuchsia-600",attrs:{name:"fuchsia-600",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-fuchsia-500",attrs:{name:"fuchsia-500",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-fuchsia-400",attrs:{name:"fuchsia-400",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-fuchsia-300",attrs:{name:"fuchsia-300",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-fuchsia-200",attrs:{name:"fuchsia-200",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-fuchsia-100",attrs:{name:"fuchsia-100",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-fuchsia-50 rounded-b",attrs:{name:"fuchsia-50",tooltip:""}})],1),t._v(" "),e("div",{staticClass:"grid",staticStyle:{"grid-template-rows":"60px repeat(10, 1fr)"}},[e("div",{staticClass:"relative h-5 self-end"},[e("div",{staticClass:"h-5 absolute transform -rotate-45 origin-left left-2.5 top-1 text-pink-300"},[t._v("pink")])]),t._v(" "),e("TwClass",{staticClass:"h-5 bg-pink-900 rounded-t",attrs:{name:"pink-900",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-pink-800",attrs:{name:"pink-800",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-pink-700",attrs:{name:"pink-700",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-pink-600",attrs:{name:"pink-600",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-pink-500",attrs:{name:"pink-500",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-pink-400",attrs:{name:"pink-400",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-pink-300",attrs:{name:"pink-300",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-pink-200",attrs:{name:"pink-200",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-pink-100",attrs:{name:"pink-100",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-pink-50 rounded-b",attrs:{name:"pink-50",tooltip:""}})],1),t._v(" "),e("div",{staticClass:"grid",staticStyle:{"grid-template-rows":"60px repeat(10, 1fr)"}},[e("div",{staticClass:"relative h-5 self-end"},[e("div",{staticClass:"h-5 absolute transform -rotate-45 origin-left left-2.5 top-1 text-rose-300"},[t._v("rose*")])]),t._v(" "),e("TwClass",{staticClass:"h-5 bg-rose-900 rounded-t",attrs:{name:"rose-900",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-rose-800",attrs:{name:"rose-800",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-rose-700",attrs:{name:"rose-700",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-rose-600",attrs:{name:"rose-600",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-rose-500",attrs:{name:"rose-500",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-rose-400",attrs:{name:"rose-400",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-rose-300",attrs:{name:"rose-300",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-rose-200",attrs:{name:"rose-200",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-rose-100",attrs:{name:"rose-100",tooltip:""}}),t._v(" "),e("TwClass",{staticClass:"h-5 bg-rose-50 rounded-b",attrs:{name:"rose-50",tooltip:""}})],1),t._v(" "),e("div",{staticClass:"grid bg-gradient-to-b from-coolGray-600 to-white text-transparent bg-clip-text",staticStyle:{"grid-template-rows":"60px repeat(10, 1fr)"}},[e("div",{staticClass:"h-5"}),t._v(" "),e("div",{staticClass:"h-5 flex items-center pl-1 font-semibold"},[t._v("900")]),t._v(" "),e("div",{staticClass:"h-5 flex items-center pl-1 font-semibold"},[t._v("800")]),t._v(" "),e("div",{staticClass:"h-5 flex items-center pl-1 font-semibold"},[t._v("700")]),t._v(" "),e("div",{staticClass:"h-5 flex items-center pl-1 font-semibold"},[t._v("600")]),t._v(" "),e("div",{staticClass:"h-5 flex items-center pl-1 font-semibold"},[t._v("500")]),t._v(" "),e("div",{staticClass:"h-5 flex items-center pl-1 font-semibold"},[t._v("400")]),t._v(" "),e("div",{staticClass:"h-5 flex items-center pl-1 font-semibold"},[t._v("300")]),t._v(" "),e("div",{staticClass:"h-5 flex items-center pl-1 font-semibold"},[t._v("200")]),t._v(" "),e("div",{staticClass:"h-5 flex items-center pl-1 font-semibold"},[t._v("100")]),t._v(" "),e("div",{staticClass:"h-5 flex items-center pl-1 font-semibold"},[t._v("50")])])])])])])}),[],!1,null,null,null);l.default=component.exports;installComponents(component,{Lnk:e(167).default,TwClass:e(229).default,Card:e(228).default})}}]);