(window.webpackJsonp=window.webpackJsonp||[]).push([[12,4,102],{226:function(t,o,r){var content=r(231);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(69).default)("5749baca",content,!0,{sourceMap:!1})},227:function(t,o,r){var content=r(235);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(69).default)("62c7fa01",content,!0,{sourceMap:!1})},228:function(t,o,r){"use strict";r.r(o);var e={props:{theme:{type:String,default:"dark"}}},c=(r(230),r(13)),component=Object(c.a)(e,(function(){var t=this,o=t.$createElement;return(t._self._c||o)("div",{staticClass:"card rounded-md",class:"light"===t.theme?"bg-coolGray-200":"bg-coolGray-800"},[t._t("default")],2)}),[],!1,null,"37ae0a58",null);o.default=component.exports},229:function(t,o,r){"use strict";r.r(o);var e=r(21),c=(r(40),r(168),r(122),r(169),{props:{name:{type:String,default:""},tooltip:{type:[String,Object],default:"",required:!1}},data:function(){return{cssPropNVal:[]}},methods:{toClipboard:function(text){navigator.clipboard.writeText(text),this.$nuxt.$emit("toTooltip",text)},setCss:function(t){if("object"===Object(e.a)(t))console.log(t.text,t.css);else{var o=t.split(" "),r=o.shift(),c=o.join(" ");this.cssPropNVal[0]=r,this.cssPropNVal[1]=c,t.endsWith(";")&&console.log("ends with ;"),this.$nuxt.$emit("mouseOnClass",{prop:r,val:c})}}}}),d=(r(234),r(13)),component=Object(d.a)(c,(function(){var t=this,o=t.$createElement;return(t._self._c||o)("div",{staticClass:"tw-class cursor-pointer",on:{click:function(o){return t.toClipboard(t.name)},mouseover:function(o){return t.setCss(t.tooltip)},mouseleave:function(o){return t.$nuxt.$emit("mouseOnClass",!1)}}},[t._t("default")],2)}),[],!1,null,"6ff0f84a",null);o.default=component.exports},230:function(t,o,r){"use strict";r(226)},231:function(t,o,r){var e=r(68),c=r(232),d=r(233),l=e((function(i){return i[1]})),n=c(d);l.push([t.i,'/*purgecss start ignore*/\n.card .prefix[data-v-37ae0a58]{\n  position:relative;\n  width:-webkit-max-content;\n  width:-moz-max-content;\n  width:max-content;\n  white-space:pre;\n  border-top-left-radius:0.375rem;\n  border-bottom-right-radius:0.375rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(75, 85, 99, var(--tw-bg-opacity));\n  padding-left:0.375rem;\n  padding-right:0.375rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.875rem;\n  line-height:1.25rem\n}\n.card .prefix a[data-v-37ae0a58]:after{\n  content:url('+n+');\n  width:1.25rem;\n  height:1.25rem;\n  position:absolute;\n  top:-1px;\n  right:-1.5rem;\n  padding-top:0px;\n  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size:1.125rem;\n  line-height:1.75rem;\n  font-weight:700;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  opacity:0\n}\n.card .prefix a[data-v-37ae0a58]:hover:after{\n  opacity:1\n}\n.card .content[data-v-37ae0a58]{\n  padding:0.5rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.75rem;\n  line-height:1rem\n}\n\n/*purgecss end ignore*/',""]),l.locals={},t.exports=l},232:function(t,o,r){"use strict";t.exports=function(t,o){return o||(o={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),o.hash&&(t+=o.hash),/["'() \t\n]/.test(t)||o.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},233:function(t,o){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSJ3aGl0ZSI+CiAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xMCA2SDZhMiAyIDAgMDAtMiAydjEwYTIgMiAwIDAwMiAyaDEwYTIgMiAwIDAwMi0ydi00TTE0IDRoNm0wIDB2Nm0wLTZMMTAgMTQiIC8+Cjwvc3ZnPgo="},234:function(t,o,r){"use strict";r(227)},235:function(t,o,r){var e=r(68)((function(i){return i[1]}));e.push([t.i,"/*purgecss start ignore*/\n\n/*purgecss end ignore*/",""]),e.locals={},t.exports=e},281:function(t,o,r){"use strict";r.r(o);var e={},c=r(13),component=Object(c.a)(e,(function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("Card",{staticClass:"card-bg-img ring-1 ring-gray-600"},[r("div",{staticClass:"prefix"},[r("Lnk",{attrs:{href:"https://tailwindcss.com/docs/backdrop-opacity"}},[t._v("backdrop-opacity-")])],1),t._v(" "),r("div",{staticClass:"content"},[r("div",{staticClass:"grid grid-cols-8 3xl:flex gap-2"},[r("div",{staticClass:"flex-1"},[r("TwClass",{staticClass:"w-max px-1 rounded backdrop-filter backdrop-blur-sm backdrop-brightness-50",attrs:{name:"backdrop-opacity-0",tooltip:"--tw-backdrop-opacity: opacity(0)"}},[t._v("0")]),t._v(" "),r("div",{staticClass:"h-8 w-full rounded mt-1 border border-opacity-30 backdrop-filter backdrop-invert backdrop-opacity-0"})],1),t._v(" "),r("div",{staticClass:"flex-1"},[r("TwClass",{staticClass:"w-max px-1 rounded backdrop-filter backdrop-blur-sm backdrop-brightness-50",attrs:{name:"backdrop-opacity-5",tooltip:"--tw-backdrop-opacity: opacity(0.05)"}},[t._v("5")]),t._v(" "),r("div",{staticClass:"h-8 w-full rounded mt-1 border border-opacity-30 backdrop-filter backdrop-invert backdrop-opacity-5"})],1),t._v(" "),r("div",{staticClass:"flex-1"},[r("TwClass",{staticClass:"w-max  px-1 rounded backdrop-filter backdrop-blur-sm backdrop-brightness-50",attrs:{name:"backdrop-opacity-10",tooltip:"--tw-backdrop-opacity: opacity(0.1)"}},[t._v("10")]),t._v(" "),r("div",{staticClass:"h-8 w-full rounded mt-1 border border-opacity-30 backdrop-filter backdrop-invert backdrop-opacity-10"})],1),t._v(" "),r("div",{staticClass:"flex-1"},[r("TwClass",{staticClass:"w-max px-1 rounded backdrop-filter backdrop-blur-sm backdrop-brightness-50",attrs:{name:"backdrop-opacity-20",tooltip:"--tw-backdrop-opacity: opacity(0.2)"}},[t._v("20")]),t._v(" "),r("div",{staticClass:"h-8 w-full rounded mt-1 border border-opacity-30 backdrop-filter backdrop-invert backdrop-opacity-20"})],1),t._v(" "),r("div",{staticClass:"flex-1"},[r("TwClass",{staticClass:"w-max px-1 rounded backdrop-filter backdrop-blur-sm backdrop-brightness-50",attrs:{name:"backdrop-opacity-25",tooltip:"--tw-backdrop-opacity: opacity(0.25)"}},[t._v("25")]),t._v(" "),r("div",{staticClass:"h-8 w-full rounded mt-1 border border-opacity-30 backdrop-filter backdrop-invert backdrop-opacity-25"})],1),t._v(" "),r("div",{staticClass:"flex-1"},[r("TwClass",{staticClass:"w-max px-1 rounded backdrop-filter backdrop-blur-sm backdrop-brightness-50",attrs:{name:"backdrop-opacity-30",tooltip:"--tw-backdrop-opacity: opacity(0.3)"}},[t._v("30")]),t._v(" "),r("div",{staticClass:"h-8 w-full rounded mt-1 border border-opacity-30 backdrop-filter backdrop-invert backdrop-opacity-30"})],1),t._v(" "),r("div",{staticClass:"flex-1"},[r("TwClass",{staticClass:"w-max px-1 rounded backdrop-filter backdrop-blur-sm backdrop-brightness-50",attrs:{name:"backdrop-opacity-40",tooltip:"--tw-backdrop-opacity: opacity(0.4)"}},[t._v("40")]),t._v(" "),r("div",{staticClass:"h-8 w-full rounded mt-1 border border-opacity-30 backdrop-filter backdrop-invert backdrop-opacity-40"})],1),t._v(" "),r("div",{staticClass:"flex-1"},[r("TwClass",{staticClass:"w-max px-1 rounded backdrop-filter backdrop-blur-sm backdrop-brightness-50",attrs:{name:"backdrop-opacity-50",tooltip:"--tw-backdrop-opacity: opacity(0.5)"}},[t._v("50")]),t._v(" "),r("div",{staticClass:"h-8 w-full rounded mt-1 border border-opacity-30 backdrop-filter backdrop-invert backdrop-opacity-50"})],1),t._v(" "),r("div",{staticClass:"flex-1"},[r("TwClass",{staticClass:"w-max px-1 rounded backdrop-filter backdrop-blur-sm backdrop-brightness-50",attrs:{name:"backdrop-opacity-60",tooltip:"--tw-backdrop-opacity: opacity(0.6)"}},[t._v("60")]),t._v(" "),r("div",{staticClass:"h-8 w-full rounded mt-1 border border-opacity-30 backdrop-filter backdrop-invert backdrop-opacity-60"})],1),t._v(" "),r("div",{staticClass:"flex-1"},[r("TwClass",{staticClass:"w-max px-1 rounded backdrop-filter backdrop-blur-sm backdrop-brightness-50",attrs:{name:"backdrop-opacity-70",tooltip:"--tw-backdrop-opacity: opacity(0.7)"}},[t._v("70")]),t._v(" "),r("div",{staticClass:"h-8 w-full rounded mt-1 border border-opacity-30 backdrop-filter backdrop-invert backdrop-opacity-70"})],1),t._v(" "),r("div",{staticClass:"flex-1"},[r("TwClass",{staticClass:"w-max px-1 rounded backdrop-filter backdrop-blur-sm backdrop-brightness-50",attrs:{name:"backdrop-opacity-75",tooltip:"--tw-backdrop-opacity: opacity(0.75)"}},[t._v("75")]),t._v(" "),r("div",{staticClass:"h-8 w-full rounded mt-1 border border-opacity-30 backdrop-filter backdrop-invert backdrop-opacity-75"})],1),t._v(" "),r("div",{staticClass:"flex-1"},[r("TwClass",{staticClass:"w-max px-1 rounded backdrop-filter backdrop-blur-sm backdrop-brightness-50",attrs:{name:"backdrop-opacity-80",tooltip:"--tw-backdrop-opacity: opacity(0.8)"}},[t._v("80")]),t._v(" "),r("div",{staticClass:"h-8 w-full rounded mt-1 border border-opacity-30 backdrop-filter backdrop-invert backdrop-opacity-80"})],1),t._v(" "),r("div",{staticClass:"flex-1"},[r("TwClass",{staticClass:"w-max px-1 rounded backdrop-filter backdrop-blur-sm backdrop-brightness-50",attrs:{name:"backdrop-opacity-90",tooltip:"--tw-backdrop-opacity: opacity(0.9)"}},[t._v("90")]),t._v(" "),r("div",{staticClass:"h-8 w-full rounded mt-1 border border-opacity-30 backdrop-filter backdrop-invert backdrop-opacity-90"})],1),t._v(" "),r("div",{staticClass:"flex-1"},[r("TwClass",{staticClass:"w-max px-1 rounded backdrop-filter backdrop-blur-sm backdrop-brightness-50",attrs:{name:"backdrop-opacity-95",tooltip:"--tw-backdrop-opacity: opacity(0.95)"}},[t._v("95")]),t._v(" "),r("div",{staticClass:"h-8 w-full rounded mt-1 border border-opacity-30 backdrop-filter backdrop-invert backdrop-opacity-95"})],1),t._v(" "),r("div",{staticClass:"flex-1"},[r("TwClass",{staticClass:"w-max px-1 rounded backdrop-filter backdrop-blur-sm backdrop-brightness-50",attrs:{name:"backdrop-opacity-100",tooltip:"--tw-backdrop-opacity: opacity(1)"}},[t._v("100")]),t._v(" "),r("div",{staticClass:"h-8 w-full rounded mt-1 border border-opacity-30 backdrop-filter backdrop-invert backdrop-opacity-100"})],1)])])])}),[],!1,null,null,null);o.default=component.exports;installComponents(component,{Lnk:r(167).default,TwClass:r(229).default,Card:r(228).default})}}]);