(window.webpackJsonp=window.webpackJsonp||[]).push([[59,6,132],{233:function(t,e,n){var content=n(238);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(74).default)("1bee20f6",content,!0,{sourceMap:!1})},234:function(t,e,n){"use strict";n.r(e);var o={props:{theme:{type:String,default:"dark"}}},r=(n(237),n(11)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"card rounded-md",class:"light"===t.theme?"bg-coolGray-200":"bg-coolGray-800"},[t._t("default")],2)}),[],!1,null,"717beaa0",null);e.default=component.exports},235:function(t,e,n){var content=n(242);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(74).default)("62c7fa01",content,!0,{sourceMap:!1})},236:function(t,e,n){"use strict";n.r(e);var o=n(24),r=(n(22),n(174),n(128),n(175),{props:{name:{type:String,default:""},tooltip:{type:[String,Object],default:"",required:!1}},data:function(){return{cssPropNVal:[]}},methods:{toClipboard:function(text){navigator.clipboard.writeText(text),this.$nuxt.$emit("toTooltip",text)},setCss:function(t){if("object"===Object(o.a)(t))console.log(t.text,t.css);else{var e=t.split(" "),n=e.shift(),r=e.join(" ");this.cssPropNVal[0]=n,this.cssPropNVal[1]=r,t.endsWith(";")&&console.log("ends with ;"),this.$nuxt.$emit("mouseOnClass",{prop:n,val:r})}}}}),l=(n(241),n(11)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"tw-class cursor-pointer",on:{click:function(e){return t.toClipboard(t.name)},mouseover:function(e){return t.setCss(t.tooltip)},mouseleave:function(e){return t.$nuxt.$emit("mouseOnClass",!1)}}},[t._t("default")],2)}),[],!1,null,"6ff0f84a",null);e.default=component.exports},237:function(t,e,n){"use strict";n(233)},238:function(t,e,n){var o=n(73),r=n(239),l=n(240),c=o((function(i){return i[1]})),d=r(l);c.push([t.i,'/*purgecss start ignore*/\n.card .title[data-v-717beaa0]{\n  position:relative;\n  margin-bottom:0.5rem;\n  width:-webkit-max-content;\n  width:-moz-max-content;\n  width:max-content;\n  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size:0.875rem;\n  line-height:1.25rem;\n  --tw-text-opacity:1;\n  color:rgba(156, 163, 175, var(--tw-text-opacity))\n}\n.card .title[data-v-717beaa0]:hover{\n  --tw-text-opacity:1;\n  color:rgba(229, 231, 235, var(--tw-text-opacity))\n}\n.card .title a[data-v-717beaa0]:after{\n  content:url('+d+');\n  width:1.25rem;\n  height:1.25rem;\n  position:absolute;\n  top:-1px;\n  right:-1.5rem;\n  padding-top:0px;\n  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size:1.125rem;\n  line-height:1.75rem;\n  font-weight:700;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  opacity:0\n}\n.card .prefix[data-v-717beaa0]{\n  position:relative;\n  width:-webkit-max-content;\n  width:-moz-max-content;\n  width:max-content;\n  white-space:pre;\n  border-top-left-radius:0.375rem;\n  border-bottom-right-radius:0.375rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(75, 85, 99, var(--tw-bg-opacity));\n  padding-left:0.375rem;\n  padding-right:0.375rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.875rem;\n  line-height:1.25rem\n}\n.card .prefix a[data-v-717beaa0]:after{\n  content:url('+d+');\n  width:1.25rem;\n  height:1.25rem;\n  position:absolute;\n  top:-1px;\n  right:-1.5rem;\n  padding-top:0px;\n  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size:1.125rem;\n  line-height:1.75rem;\n  font-weight:700;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  opacity:0\n}\n.card .prefix a[data-v-717beaa0]:hover:after, .card .title a[data-v-717beaa0]:hover:after{\n  opacity:1\n}\n.card .content[data-v-717beaa0]{\n  padding:0.5rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.75rem;\n  line-height:1rem\n}\n\n/*purgecss end ignore*/',""]),c.locals={},t.exports=c},239:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},240:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSJ3aGl0ZSI+CiAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xMCA2SDZhMiAyIDAgMDAtMiAydjEwYTIgMiAwIDAwMiAyaDEwYTIgMiAwIDAwMi0ydi00TTE0IDRoNm0wIDB2Nm0wLTZMMTAgMTQiIC8+Cjwvc3ZnPgo="},241:function(t,e,n){"use strict";n(235)},242:function(t,e,n){var o=n(73)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},252:function(t,e,n){var content=n(266);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(74).default)("0411ac22",content,!0,{sourceMap:!1})},265:function(t,e,n){"use strict";n(252)},266:function(t,e,n){var o=n(73)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\n.content .content-row[data-v-26d51352]{\n  display:flex;\n  flex-direction:column\n}\n.content .content-row[data-v-26d51352] > :not([hidden]) ~ :not([hidden]){\n  --tw-space-y-reverse:0;\n  margin-top:calc(0.125rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom:calc(0.125rem * var(--tw-space-y-reverse))\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},332:function(t,e,n){"use strict";n.r(e);var o={},r=(n(265),n(11)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Card",[n("div",{staticClass:"content"},[n("Lnk",{staticClass:"title",attrs:{href:"https://tailwindcss.com/docs/breakpoints"}},[t._v("Breakpoints")]),t._v(" "),n("div",{staticClass:"grid grid-cols-3 gap-2"},[n("div",{staticClass:"content-row"},[n("div",{staticClass:"w-max opacity-0"},[t._v(".")]),t._v(" "),n("div",{staticClass:"mt-1 font-sans text-sm"},[t._v("All sizes (default)")])]),t._v(" "),n("div",{staticClass:"content-row"},[n("TwClass",{staticClass:"w-max",attrs:{name:"sm:",tooltip:""}},[t._v("sm:")]),t._v(" "),n("div",{staticClass:"mt-1 text-coolGray-300"},[n("span",{staticClass:"text-cyan-400"},[t._v("@media")]),t._v(" ("),n("br"),t._v("min-width: "),n("span",{staticClass:"text-yellow-500"},[t._v("640px")]),t._v(") {...}")])],1),t._v(" "),n("div",{staticClass:"content-row"},[n("TwClass",{staticClass:"w-max",attrs:{name:"md:",tooltip:""}},[t._v("md:")]),t._v(" "),n("div",{staticClass:"mt-1 text-coolGray-300"},[n("span",{staticClass:"text-cyan-400"},[t._v("@media")]),t._v(" ("),n("br"),t._v("min-width: "),n("span",{staticClass:"text-yellow-500"},[t._v("768px")]),t._v(") {...}")])],1),t._v(" "),n("div",{staticClass:"content-row"},[n("TwClass",{staticClass:"w-max",attrs:{name:"lg:",tooltip:""}},[t._v("lg:")]),t._v(" "),n("div",{staticClass:"mt-1 text-coolGray-300"},[n("span",{staticClass:"text-cyan-400"},[t._v("@media")]),t._v(" ("),n("br"),t._v("min-width: "),n("span",{staticClass:"text-yellow-500"},[t._v("1024px")]),t._v(") {...}")])],1),t._v(" "),n("div",{staticClass:"content-row"},[n("TwClass",{staticClass:"w-max",attrs:{name:"xl:",tooltip:""}},[t._v("xl:")]),t._v(" "),n("div",{staticClass:"mt-1 text-coolGray-300"},[n("span",{staticClass:"text-cyan-400"},[t._v("@media")]),t._v(" ("),n("br"),t._v("min-width: "),n("span",{staticClass:"text-yellow-500"},[t._v("1280px")]),t._v(") {...}")])],1),t._v(" "),n("div",{staticClass:"content-row"},[n("TwClass",{staticClass:"w-max",attrs:{name:"2xl:",tooltip:""}},[t._v("2xl:")]),t._v(" "),n("div",{staticClass:"mt-1 text-coolGray-300"},[n("span",{staticClass:"text-cyan-400"},[t._v("@media")]),t._v(" ("),n("br"),t._v("min-width: "),n("span",{staticClass:"text-yellow-500"},[t._v("1536px")]),t._v(") {...}")])],1)])],1)])}),[],!1,null,"26d51352",null);e.default=component.exports;installComponents(component,{Lnk:n(173).default,TwClass:n(236).default,Card:n(234).default})}}]);