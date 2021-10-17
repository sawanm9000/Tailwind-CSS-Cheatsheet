(window.webpackJsonp=window.webpackJsonp||[]).push([[46,5,73],{220:function(t,e,n){var content=n(226);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(92).default)("5749baca",content,!0,{sourceMap:!1})},222:function(t,e,n){"use strict";n.r(e);var o={props:{theme:{type:String,default:"dark"}}},l=(n(225),n(28)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"card rounded-md",class:"light"===t.theme?"bg-coolGray-200":"bg-coolGray-800"},[t._t("default")],2)}),[],!1,null,"37ae0a58",null);e.default=component.exports},224:function(t,e,n){"use strict";n.r(e);var o={props:{href:{type:String,default:"#"}}},l=n(28),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("a",{attrs:{href:t.href,target:"_blank",rel:"noreferrer noopener"}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},225:function(t,e,n){"use strict";n(220)},226:function(t,e,n){var o=n(91),l=n(227),r=n(228),d=o((function(i){return i[1]})),c=l(r);d.push([t.i,'/*purgecss start ignore*/\n.card .prefix[data-v-37ae0a58]{\n  position:relative;\n  width:-webkit-max-content;\n  width:-moz-max-content;\n  width:max-content;\n  white-space:pre;\n  border-top-left-radius:0.375rem;\n  border-bottom-right-radius:0.375rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(75, 85, 99, var(--tw-bg-opacity));\n  padding-left:0.375rem;\n  padding-right:0.375rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.875rem;\n  line-height:1.25rem\n}\n.card .prefix a[data-v-37ae0a58]:after{\n  content:url('+c+');\n  width:1.25rem;\n  height:1.25rem;\n  position:absolute;\n  top:-1px;\n  right:-1.5rem;\n  padding-top:0px;\n  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size:1.125rem;\n  line-height:1.75rem;\n  font-weight:700;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  opacity:0\n}\n.card .prefix a[data-v-37ae0a58]:hover:after{\n  opacity:1\n}\n.card .content[data-v-37ae0a58]{\n  padding:0.5rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.75rem;\n  line-height:1rem\n}\n\n/*purgecss end ignore*/',""]),d.locals={},t.exports=d},227:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},228:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSJ3aGl0ZSI+CiAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xMCA2SDZhMiAyIDAgMDAtMiAydjEwYTIgMiAwIDAwMiAyaDEwYTIgMiAwIDAwMi0ydi00TTE0IDRoNm0wIDB2Nm0wLTZMMTAgMTQiIC8+Cjwvc3ZnPgo="},294:function(t,e,n){"use strict";n.r(e);var o={},l=n(28),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Card",[n("div",{staticClass:"prefix"},[n("Lnk",{staticClass:"text-xs",attrs:{href:"https://tailwindcss.com/docs/top-right-bottom-left"}},[t._v("top-  right-  bottom-  left-  inset-"),n("br"),t._v("-top- -right- -bottom- -left- -inset-")])],1),t._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"font-sans text-sm text-coolGray-400 mb-2"},[t._v("For absolutely and relatively positioned items")]),t._v(" "),n("div",{staticClass:"mb-2"},[n("div",{staticClass:"text-blue-300 cursor-pointer select-none w-max mb-2",on:{mouseover:function(e){return t.$nuxt.$emit("highlightLength",!0)},mouseleave:function(e){return t.$nuxt.$emit("highlightLength",!1)},click:function(e){return t.$nuxt.$emit("blinkLength")}}},[t._v("{length}")])]),t._v(" "),n("div",{staticClass:"font-sans text-sm mb-2 text-coolGray-400"},[t._v("Examples:")]),t._v(" "),n("div",{staticClass:"grid grid-cols-4 gap-x-2 gap-y-0.5"},[n("div",{staticClass:"flex content-end items-end"},[t._v("inset-x-0 top-0")]),t._v(" "),n("div",{staticClass:"flex content-end items-end"},[t._v("inset-y-0 right-0")]),t._v(" "),n("div",{staticClass:"flex content-end items-end"},[t._v("inset-x-0 bottom-0")]),t._v(" "),n("div",{staticClass:"flex content-end items-end"},[t._v("inset-y-0 left-0")]),t._v(" "),n("div",{staticClass:"relative rounded bg-blue-600 w-full h-16"},[n("div",{staticClass:"absolute rounded bg-red-800 h-8 flex items-center justify-center inset-x-0 top-0"},[t._v("h-8")])]),t._v(" "),n("div",{staticClass:"relative rounded bg-blue-600 w-full h-16"},[n("div",{staticClass:"absolute rounded bg-red-800 w-8 flex items-center justify-center inset-y-0 right-0"},[t._v("w-8")])]),t._v(" "),n("div",{staticClass:"relative rounded bg-blue-600 w-full h-16"},[n("div",{staticClass:"absolute rounded bg-red-800 h-8 flex items-center justify-center inset-x-0 bottom-0"},[t._v("h-8")])]),t._v(" "),n("div",{staticClass:"relative rounded bg-blue-600 w-full h-16"},[n("div",{staticClass:"absolute rounded bg-red-800 w-8 flex items-center justify-center inset-y-0 left-0"},[t._v("w-8")])]),t._v(" "),n("div",{staticClass:"flex content-end items-end"},[t._v("bottom-0 left-0")]),t._v(" "),n("div",{staticClass:"flex content-end items-end"},[t._v("left-0 top-0")]),t._v(" "),n("div",{staticClass:"flex content-end items-end mt-2"},[t._v("right-0 top-0")]),t._v(" "),n("div",{staticClass:"flex content-end items-end"},[t._v("bottom-0 right-0")]),t._v(" "),n("div",{staticClass:"relative rounded bg-blue-600 w-full h-16"},[n("div",{staticClass:"absolute rounded bg-red-800 w-8 h-8 text-center bottom-0 left-0"},[t._v("w-8 h-8")])]),t._v(" "),n("div",{staticClass:"relative rounded bg-blue-600 w-full h-16"},[n("div",{staticClass:"absolute rounded bg-red-800 w-8 h-8 flex text-center left-0 top-0"},[t._v("w-8 h-8")])]),t._v(" "),n("div",{staticClass:"relative rounded bg-blue-600 w-full h-16"},[n("div",{staticClass:"absolute rounded bg-red-800 w-8 h-8 flex text-center top-0 right-0"},[t._v("w-8 h-8")])]),t._v(" "),n("div",{staticClass:"relative rounded bg-blue-600 w-full h-16"},[n("div",{staticClass:"absolute rounded bg-red-800 w-8 h-8 text-center bottom-0 right-0"},[t._v("w-8 h-8")])]),t._v(" "),n("div",{staticClass:"flex content-end items-end"},[t._v("inset-0")]),t._v(" "),n("div",{staticClass:"flex content-end items-end"},[t._v("inset-x-2 bottom-0")]),t._v(" "),n("div",{staticClass:"flex content-end items-end mt-2"},[t._v("-right-1 bottom-3")]),t._v(" "),n("div",{staticClass:"flex content-end items-end"},[t._v("-inset-y-1 right-2")]),t._v(" "),n("div",{staticClass:"relative rounded bg-blue-600 w-full h-16"},[n("div",{staticClass:"absolute rounded bg-red-800 inset-0"})]),t._v(" "),n("div",{staticClass:"relative rounded bg-blue-600 w-full h-16"},[n("div",{staticClass:"absolute rounded bg-red-800 h-8 flex items-center justify-center inset-x-2 bottom-0"},[t._v("h-8")])]),t._v(" "),n("div",{staticClass:"relative rounded bg-blue-600 w-full h-16"},[n("div",{staticClass:"absolute rounded bg-red-800 w-8 h-8 text-center -right-1 bottom-3"},[t._v("w-8 h-8")])]),t._v(" "),n("div",{staticClass:"relative rounded bg-blue-600 w-full h-16"},[n("div",{staticClass:"absolute rounded bg-red-800 w-8 flex items-center justify-center -inset-y-1 right-2"},[t._v("w-8")])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Lnk:n(224).default,Card:n(222).default})}}]);