(window.webpackJsonp=window.webpackJsonp||[]).push([[8,5,103],{227:function(t,o,e){var content=e(232);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(69).default)("1bee20f6",content,!0,{sourceMap:!1})},228:function(t,o,e){var content=e(236);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(69).default)("62c7fa01",content,!0,{sourceMap:!1})},229:function(t,o,e){"use strict";e.r(o);var r={props:{theme:{type:String,default:"dark"}}},n=(e(231),e(9)),component=Object(n.a)(r,(function(){var t=this,o=t.$createElement;return(t._self._c||o)("div",{staticClass:"card rounded-md",class:"light"===t.theme?"bg-coolGray-200":"bg-coolGray-800"},[t._t("default")],2)}),[],!1,null,"717beaa0",null);o.default=component.exports},230:function(t,o,e){"use strict";e.r(o);var r=e(21),n=(e(35),e(169),e(122),e(170),{props:{name:{type:String,default:""},tooltip:{type:[String,Object],default:"",required:!1}},data:function(){return{cssPropNVal:[]}},methods:{toClipboard:function(text){navigator.clipboard.writeText(text),this.$nuxt.$emit("toTooltip",text)},setCss:function(t){if("object"===Object(r.a)(t))console.log(t.text,t.css);else{var o=t.split(" "),e=o.shift(),n=o.join(" ");this.cssPropNVal[0]=e,this.cssPropNVal[1]=n,t.endsWith(";")&&console.log("ends with ;"),this.$nuxt.$emit("mouseOnClass",{prop:e,val:n})}}}}),c=(e(235),e(9)),component=Object(c.a)(n,(function(){var t=this,o=t.$createElement;return(t._self._c||o)("div",{staticClass:"tw-class cursor-pointer",on:{click:function(o){return t.toClipboard(t.name)},mouseover:function(o){return t.setCss(t.tooltip)},mouseleave:function(o){return t.$nuxt.$emit("mouseOnClass",!1)}}},[t._t("default")],2)}),[],!1,null,"6ff0f84a",null);o.default=component.exports},231:function(t,o,e){"use strict";e(227)},232:function(t,o,e){var r=e(68),n=e(233),c=e(234),l=r((function(i){return i[1]})),d=n(c);l.push([t.i,'/*purgecss start ignore*/\n.card .title[data-v-717beaa0]{\n  position:relative;\n  margin-bottom:0.5rem;\n  width:-webkit-max-content;\n  width:-moz-max-content;\n  width:max-content;\n  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size:0.875rem;\n  line-height:1.25rem;\n  --tw-text-opacity:1;\n  color:rgba(156, 163, 175, var(--tw-text-opacity))\n}\n.card .title[data-v-717beaa0]:hover{\n  --tw-text-opacity:1;\n  color:rgba(229, 231, 235, var(--tw-text-opacity))\n}\n.card .title a[data-v-717beaa0]:after{\n  content:url('+d+');\n  width:1.25rem;\n  height:1.25rem;\n  position:absolute;\n  top:-1px;\n  right:-1.5rem;\n  padding-top:0px;\n  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size:1.125rem;\n  line-height:1.75rem;\n  font-weight:700;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  opacity:0\n}\n.card .prefix[data-v-717beaa0]{\n  position:relative;\n  width:-webkit-max-content;\n  width:-moz-max-content;\n  width:max-content;\n  white-space:pre;\n  border-top-left-radius:0.375rem;\n  border-bottom-right-radius:0.375rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(75, 85, 99, var(--tw-bg-opacity));\n  padding-left:0.375rem;\n  padding-right:0.375rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.875rem;\n  line-height:1.25rem\n}\n.card .prefix a[data-v-717beaa0]:after{\n  content:url('+d+');\n  width:1.25rem;\n  height:1.25rem;\n  position:absolute;\n  top:-1px;\n  right:-1.5rem;\n  padding-top:0px;\n  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size:1.125rem;\n  line-height:1.75rem;\n  font-weight:700;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  opacity:0\n}\n.card .prefix a[data-v-717beaa0]:hover:after, .card .title a[data-v-717beaa0]:hover:after{\n  opacity:1\n}\n.card .content[data-v-717beaa0]{\n  padding:0.5rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.75rem;\n  line-height:1rem\n}\n\n/*purgecss end ignore*/',""]),l.locals={},t.exports=l},233:function(t,o,e){"use strict";t.exports=function(t,o){return o||(o={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),o.hash&&(t+=o.hash),/["'() \t\n]/.test(t)||o.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},234:function(t,o){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSJ3aGl0ZSI+CiAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xMCA2SDZhMiAyIDAgMDAtMiAydjEwYTIgMiAwIDAwMiAyaDEwYTIgMiAwIDAwMi0ydi00TTE0IDRoNm0wIDB2Nm0wLTZMMTAgMTQiIC8+Cjwvc3ZnPgo="},235:function(t,o,e){"use strict";e(228)},236:function(t,o,e){var r=e(68)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},278:function(t,o,e){"use strict";e.r(o);var r={},n=e(9),component=Object(n.a)(r,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("Card",{staticClass:"card-bg-img ring-1 ring-gray-600"},[e("div",{staticClass:"prefix"},[e("Lnk",{attrs:{href:"https://tailwindcss.com/docs/backdrop-contrast"}},[t._v("backdrop-contrast-")])],1),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"flex gap-2"},[e("div",{staticClass:"flex-1"},[e("TwClass",{staticClass:"w-max px-1 backdrop-filter backdrop-brightness-50 backdrop-blur-sm rounded",attrs:{name:"backdrop-contrast-0",tooltip:"--tw-backdrop-contrast: contrast(0)"}},[t._v("0")]),t._v(" "),e("div",{staticClass:"h-12 rounded mt-1 border border-opacity-30 backdrop-filter backdrop-contrast-0"})],1),t._v(" "),e("div",{staticClass:"flex-1"},[e("TwClass",{staticClass:"w-max px-1 backdrop-filter backdrop-brightness-50 backdrop-blur-sm rounded",attrs:{name:"backdrop-contrast-50",tooltip:"--tw-backdrop-contrast: contrast(.5)"}},[t._v("50")]),t._v(" "),e("div",{staticClass:"h-12 rounded mt-1 border border-opacity-30 backdrop-filter backdrop-contrast-50"})],1),t._v(" "),e("div",{staticClass:"flex-1"},[e("TwClass",{staticClass:"w-max px-1 backdrop-filter backdrop-brightness-50 backdrop-blur-sm rounded",attrs:{name:"backdrop-contrast-75",tooltip:"--tw-backdrop-contrast: contrast(.75)"}},[t._v("75")]),t._v(" "),e("div",{staticClass:"h-12 rounded mt-1 border border-opacity-30 backdrop-filter backdrop-contrast-75"})],1),t._v(" "),e("div",{staticClass:"flex-1"},[e("TwClass",{staticClass:"w-max px-1 backdrop-filter backdrop-brightness-50 backdrop-blur-sm rounded",attrs:{name:"backdrop-contrast-100",tooltip:"--tw-backdrop-contrast: contrast(1)"}},[t._v("100")]),t._v(" "),e("div",{staticClass:"h-12 rounded mt-1 border border-opacity-30 backdrop-filter backdrop-contrast-100"})],1),t._v(" "),e("div",{staticClass:"flex-1"},[e("TwClass",{staticClass:"w-max px-1 backdrop-filter backdrop-brightness-50 backdrop-blur-sm rounded",attrs:{name:"backdrop-contrast-125",tooltip:"--tw-backdrop-contrast: contrast(1.25)"}},[t._v("125")]),t._v(" "),e("div",{staticClass:"h-12 rounded mt-1 border border-opacity-30 backdrop-filter backdrop-contrast-125"})],1),t._v(" "),e("div",{staticClass:"flex-1"},[e("TwClass",{staticClass:"w-max px-1 backdrop-filter backdrop-brightness-50 backdrop-blur-sm rounded",attrs:{name:"backdrop-contrast-150",tooltip:"--tw-backdrop-contrast: contrast(1.5)"}},[t._v("150")]),t._v(" "),e("div",{staticClass:"h-12 rounded mt-1 border border-opacity-30 backdrop-filter backdrop-contrast-150"})],1),t._v(" "),e("div",{staticClass:"flex-1"},[e("TwClass",{staticClass:"w-max px-1 backdrop-filter backdrop-brightness-50 backdrop-blur-sm rounded",attrs:{name:"backdrop-contrast-200",tooltip:"--tw-backdrop-contrast: contrast(2)"}},[t._v("200")]),t._v(" "),e("div",{staticClass:"h-12 rounded mt-1 border border-opacity-30 backdrop-filter backdrop-contrast-200"})],1)])])])}),[],!1,null,null,null);o.default=component.exports;installComponents(component,{Lnk:e(168).default,TwClass:e(230).default,Card:e(229).default})}}]);