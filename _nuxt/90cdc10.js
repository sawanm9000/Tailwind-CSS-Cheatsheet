(window.webpackJsonp=window.webpackJsonp||[]).push([[91,4,104],{226:function(t,n,o){var content=o(231);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(69).default)("5749baca",content,!0,{sourceMap:!1})},227:function(t,n,o){var content=o(235);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(69).default)("62c7fa01",content,!0,{sourceMap:!1})},228:function(t,n,o){"use strict";o.r(n);var e={props:{theme:{type:String,default:"dark"}}},r=(o(230),o(13)),component=Object(r.a)(e,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{staticClass:"card rounded-md",class:"light"===t.theme?"bg-coolGray-200":"bg-coolGray-800"},[t._t("default")],2)}),[],!1,null,"37ae0a58",null);n.default=component.exports},229:function(t,n,o){"use strict";o.r(n);var e=o(21),r=(o(40),o(168),o(122),o(169),{props:{name:{type:String,default:""},tooltip:{type:[String,Object],default:"",required:!1}},data:function(){return{cssPropNVal:[]}},methods:{toClipboard:function(text){navigator.clipboard.writeText(text),this.$nuxt.$emit("toTooltip",text)},setCss:function(t){if("object"===Object(e.a)(t))console.log(t.text,t.css);else{var n=t.split(" "),o=n.shift(),r=n.join(" ");this.cssPropNVal[0]=o,this.cssPropNVal[1]=r,t.endsWith(";")&&console.log("ends with ;"),this.$nuxt.$emit("mouseOnClass",{prop:o,val:r})}}}}),l=(o(234),o(13)),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{staticClass:"tw-class cursor-pointer",on:{click:function(n){return t.toClipboard(t.name)},mouseover:function(n){return t.setCss(t.tooltip)},mouseleave:function(n){return t.$nuxt.$emit("mouseOnClass",!1)}}},[t._t("default")],2)}),[],!1,null,"6ff0f84a",null);n.default=component.exports},230:function(t,n,o){"use strict";o(226)},231:function(t,n,o){var e=o(68),r=o(232),l=o(233),c=e((function(i){return i[1]})),d=r(l);c.push([t.i,'/*purgecss start ignore*/\n.card .prefix[data-v-37ae0a58]{\n  position:relative;\n  width:-webkit-max-content;\n  width:-moz-max-content;\n  width:max-content;\n  white-space:pre;\n  border-top-left-radius:0.375rem;\n  border-bottom-right-radius:0.375rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(75, 85, 99, var(--tw-bg-opacity));\n  padding-left:0.375rem;\n  padding-right:0.375rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.875rem;\n  line-height:1.25rem\n}\n.card .prefix a[data-v-37ae0a58]:after{\n  content:url('+d+');\n  width:1.25rem;\n  height:1.25rem;\n  position:absolute;\n  top:-1px;\n  right:-1.5rem;\n  padding-top:0px;\n  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size:1.125rem;\n  line-height:1.75rem;\n  font-weight:700;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  opacity:0\n}\n.card .prefix a[data-v-37ae0a58]:hover:after{\n  opacity:1\n}\n.card .content[data-v-37ae0a58]{\n  padding:0.5rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.75rem;\n  line-height:1rem\n}\n\n/*purgecss end ignore*/',""]),c.locals={},t.exports=c},232:function(t,n,o){"use strict";t.exports=function(t,n){return n||(n={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),n.hash&&(t+=n.hash),/["'() \t\n]/.test(t)||n.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},233:function(t,n){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSJ3aGl0ZSI+CiAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xMCA2SDZhMiAyIDAgMDAtMiAydjEwYTIgMiAwIDAwMiAyaDEwYTIgMiAwIDAwMi0ydi00TTE0IDRoNm0wIDB2Nm0wLTZMMTAgMTQiIC8+Cjwvc3ZnPgo="},234:function(t,n,o){"use strict";o(227)},235:function(t,n,o){var e=o(68)((function(i){return i[1]}));e.push([t.i,"/*purgecss start ignore*/\n\n/*purgecss end ignore*/",""]),e.locals={},t.exports=e},345:function(t,n,o){"use strict";o.r(n);var e={},r=o(13),component=Object(r.a)(e,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("Card",[o("div",{staticClass:"prefix"},[o("Lnk",{attrs:{href:"https://tailwindcss.com/docs/transition-duration"}},[t._v("duration-")])],1),t._v(" "),o("div",{staticClass:"content"},[o("div",{staticClass:"grid grid-cols-4 gap-2"},[o("div",[o("TwClass",{staticClass:"w-max",attrs:{name:"duration-75",tooltip:"transition-duration: 75ms"}},[t._v("75")]),t._v(" "),o("div",{staticClass:"h-20 mt-1 bg-coolGray-600 rounded"})],1),t._v(" "),o("div",[o("TwClass",{staticClass:"w-max",attrs:{name:"duration-100",tooltip:"transition-duration: 100ms"}},[t._v("100")]),t._v(" "),o("div",{staticClass:"h-20 mt-1 bg-coolGray-600 rounded"})],1),t._v(" "),o("div",[o("TwClass",{staticClass:"w-max",attrs:{name:"duration-150",tooltip:"transition-duration: 150ms"}},[t._v("150")]),t._v(" "),o("div",{staticClass:"h-20 mt-1 bg-coolGray-600 rounded"})],1),t._v(" "),o("div",[o("TwClass",{staticClass:"w-max",attrs:{name:"duration-200",tooltip:"transition-duration: 200ms"}},[t._v("200")]),t._v(" "),o("div",{staticClass:"h-20 mt-1 bg-coolGray-600 rounded"})],1),t._v(" "),o("div",[o("TwClass",{staticClass:"w-max",attrs:{name:"duration-300",tooltip:"transition-duration: 300ms"}},[t._v("300")]),t._v(" "),o("div",{staticClass:"h-20 mt-1 bg-coolGray-600 rounded"})],1),t._v(" "),o("div",[o("TwClass",{staticClass:"w-max",attrs:{name:"duration-500",tooltip:"transition-duration: 500ms"}},[t._v("500")]),t._v(" "),o("div",{staticClass:"h-20 mt-1 bg-coolGray-600 rounded"})],1),t._v(" "),o("div",[o("TwClass",{staticClass:"w-max",attrs:{name:"duration-700",tooltip:"transition-duration: 700ms"}},[t._v("700")]),t._v(" "),o("div",{staticClass:"h-20 mt-1 bg-coolGray-600 rounded"})],1),t._v(" "),o("div",[o("TwClass",{staticClass:"w-max",attrs:{name:"duration-1000",tooltip:"transition-duration: 1000ms"}},[t._v("1000")]),t._v(" "),o("div",{staticClass:"h-20 mt-1 bg-coolGray-600 rounded"})],1)])])])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Lnk:o(167).default,TwClass:o(229).default,Card:o(228).default})}}]);