(window.webpackJsonp=window.webpackJsonp||[]).push([[63,4,88],{226:function(t,e,r){var content=r(231);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(69).default)("5749baca",content,!0,{sourceMap:!1})},227:function(t,e,r){var content=r(235);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(69).default)("62c7fa01",content,!0,{sourceMap:!1})},228:function(t,e,r){"use strict";r.r(e);var o={props:{theme:{type:String,default:"dark"}}},n=(r(230),r(13)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"card rounded-md",class:"light"===t.theme?"bg-coolGray-200":"bg-coolGray-800"},[t._t("default")],2)}),[],!1,null,"37ae0a58",null);e.default=component.exports},229:function(t,e,r){"use strict";r.r(e);var o=r(21),n=(r(40),r(168),r(122),r(169),{props:{name:{type:String,default:""},tooltip:{type:[String,Object],default:"",required:!1}},data:function(){return{cssPropNVal:[]}},methods:{toClipboard:function(text){navigator.clipboard.writeText(text),this.$nuxt.$emit("toTooltip",text)},setCss:function(t){if("object"===Object(o.a)(t))console.log(t.text,t.css);else{var e=t.split(" "),r=e.shift(),n=e.join(" ");this.cssPropNVal[0]=r,this.cssPropNVal[1]=n,t.endsWith(";")&&console.log("ends with ;"),this.$nuxt.$emit("mouseOnClass",{prop:r,val:n})}}}}),l=(r(234),r(13)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"tw-class cursor-pointer",on:{click:function(e){return t.toClipboard(t.name)},mouseover:function(e){return t.setCss(t.tooltip)},mouseleave:function(e){return t.$nuxt.$emit("mouseOnClass",!1)}}},[t._t("default")],2)}),[],!1,null,"6ff0f84a",null);e.default=component.exports},230:function(t,e,r){"use strict";r(226)},231:function(t,e,r){var o=r(68),n=r(232),l=r(233),c=o((function(i){return i[1]})),d=n(l);c.push([t.i,'/*purgecss start ignore*/\n.card .prefix[data-v-37ae0a58]{\n  position:relative;\n  width:-webkit-max-content;\n  width:-moz-max-content;\n  width:max-content;\n  white-space:pre;\n  border-top-left-radius:0.375rem;\n  border-bottom-right-radius:0.375rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(75, 85, 99, var(--tw-bg-opacity));\n  padding-left:0.375rem;\n  padding-right:0.375rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.875rem;\n  line-height:1.25rem\n}\n.card .prefix a[data-v-37ae0a58]:after{\n  content:url('+d+');\n  width:1.25rem;\n  height:1.25rem;\n  position:absolute;\n  top:-1px;\n  right:-1.5rem;\n  padding-top:0px;\n  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size:1.125rem;\n  line-height:1.75rem;\n  font-weight:700;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  opacity:0\n}\n.card .prefix a[data-v-37ae0a58]:hover:after{\n  opacity:1\n}\n.card .content[data-v-37ae0a58]{\n  padding:0.5rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.75rem;\n  line-height:1rem\n}\n\n/*purgecss end ignore*/',""]),c.locals={},t.exports=c},232:function(t,e,r){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},233:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSJ3aGl0ZSI+CiAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xMCA2SDZhMiAyIDAgMDAtMiAydjEwYTIgMiAwIDAwMiAyaDEwYTIgMiAwIDAwMi0ydi00TTE0IDRoNm0wIDB2Nm0wLTZMMTAgMTQiIC8+Cjwvc3ZnPgo="},234:function(t,e,r){"use strict";r(227)},235:function(t,e,r){var o=r(68)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},304:function(t,e,r){"use strict";r.r(e);var o={},n=r(13),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Card",[r("div",{staticClass:"prefix"},[r("Lnk",{attrs:{href:"https://tailwindcss.com/docs/order"}},[t._v("order-")])],1),t._v(" "),r("div",{staticClass:"content space-y-2"},[r("div",{staticClass:"grid grid-cols-12 gap-x-1"},[r("TwClass",{staticClass:"bg-coolGray-600 rounded w-full h-6 flex justify-center items-center order-1",attrs:{name:"order-1",tooltip:"order: 1"}},[t._v("1")]),t._v(" "),r("TwClass",{staticClass:"bg-coolGray-600 rounded w-full h-6 flex justify-center items-center order-2",attrs:{name:"order-2",tooltip:"order: 2"}},[t._v("2")]),t._v(" "),r("TwClass",{staticClass:"bg-coolGray-600 rounded w-full h-6 flex justify-center items-center order-3",attrs:{name:"order-3",tooltip:"order: 3"}},[t._v("3")]),t._v(" "),r("TwClass",{staticClass:"bg-coolGray-600 rounded w-full h-6 flex justify-center items-center order-4",attrs:{name:"order-4",tooltip:"order: 4"}},[t._v("4")]),t._v(" "),r("TwClass",{staticClass:"bg-coolGray-600 rounded w-full h-6 flex justify-center items-center order-5",attrs:{name:"order-5",tooltip:"order: 5"}},[t._v("5")]),t._v(" "),r("TwClass",{staticClass:"bg-coolGray-600 rounded w-full h-6 flex justify-center items-center order-6",attrs:{name:"order-6",tooltip:"order: 6"}},[t._v("6")]),t._v(" "),r("TwClass",{staticClass:"bg-coolGray-600 rounded w-full h-6 flex justify-center items-center order-7",attrs:{name:"order-7",tooltip:"order: 7"}},[t._v("7")]),t._v(" "),r("TwClass",{staticClass:"bg-coolGray-600 rounded w-full h-6 flex justify-center items-center order-8",attrs:{name:"order-8",tooltip:"order: 8"}},[t._v("8")]),t._v(" "),r("TwClass",{staticClass:"bg-coolGray-600 rounded w-full h-6 flex justify-center items-center order-9",attrs:{name:"order-9",tooltip:"order: 9"}},[t._v("9")]),t._v(" "),r("TwClass",{staticClass:"bg-coolGray-600 rounded w-full h-6 flex justify-center items-center order-10",attrs:{name:"order-10",tooltip:"order: 10"}},[t._v("10")]),t._v(" "),r("TwClass",{staticClass:"bg-coolGray-600 rounded w-full h-6 flex justify-center items-center order-11",attrs:{name:"order-11",tooltip:"order: 11"}},[t._v("11")]),t._v(" "),r("TwClass",{staticClass:"bg-coolGray-600 rounded w-full h-6 flex justify-center items-center order-12",attrs:{name:"order-12",tooltip:"order: 12"}},[t._v("12")])],1),t._v(" "),r("div",{staticClass:"grid grid-cols-3 gap-x-1"},[r("TwClass",{staticClass:"bg-coolGray-600 rounded h-6 flex justify-center items-center order-first",attrs:{name:"order-first",tooltip:"order: -9999"}},[t._v("first")]),t._v(" "),r("TwClass",{staticClass:"bg-coolGray-600 rounded h-6 flex justify-center items-center order-none",attrs:{name:"order-none",tooltip:"order: 0"}},[t._v("none")]),t._v(" "),r("TwClass",{staticClass:"bg-coolGray-600 rounded h-6 flex justify-center items-center order-last",attrs:{name:"order-last",tooltip:"order: 9999"}},[t._v("last")])],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Lnk:r(167).default,TwClass:r(229).default,Card:r(228).default})}}]);