(window.webpackJsonp=window.webpackJsonp||[]).push([[19,4,27,104],{226:function(t,e,o){var content=o(231);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(69).default)("5749baca",content,!0,{sourceMap:!1})},227:function(t,e,o){var content=o(235);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(69).default)("62c7fa01",content,!0,{sourceMap:!1})},228:function(t,e,o){"use strict";o.r(e);var n={props:{theme:{type:String,default:"dark"}}},r=(o(230),o(13)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"card rounded-md",class:"light"===t.theme?"bg-coolGray-200":"bg-coolGray-800"},[t._t("default")],2)}),[],!1,null,"37ae0a58",null);e.default=component.exports},229:function(t,e,o){"use strict";o.r(e);var n=o(21),r=(o(40),o(168),o(122),o(169),{props:{name:{type:String,default:""},tooltip:{type:[String,Object],default:"",required:!1}},data:function(){return{cssPropNVal:[]}},methods:{toClipboard:function(text){navigator.clipboard.writeText(text),this.$nuxt.$emit("toTooltip",text)},setCss:function(t){if("object"===Object(n.a)(t))console.log(t.text,t.css);else{var e=t.split(" "),o=e.shift(),r=e.join(" ");this.cssPropNVal[0]=o,this.cssPropNVal[1]=r,t.endsWith(";")&&console.log("ends with ;"),this.$nuxt.$emit("mouseOnClass",{prop:o,val:r})}}}}),l=(o(234),o(13)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"tw-class cursor-pointer",on:{click:function(e){return t.toClipboard(t.name)},mouseover:function(e){return t.setCss(t.tooltip)},mouseleave:function(e){return t.$nuxt.$emit("mouseOnClass",!1)}}},[t._t("default")],2)}),[],!1,null,"6ff0f84a",null);e.default=component.exports},230:function(t,e,o){"use strict";o(226)},231:function(t,e,o){var n=o(68),r=o(232),l=o(233),d=n((function(i){return i[1]})),c=r(l);d.push([t.i,'/*purgecss start ignore*/\n.card .prefix[data-v-37ae0a58]{\n  position:relative;\n  width:-webkit-max-content;\n  width:-moz-max-content;\n  width:max-content;\n  white-space:pre;\n  border-top-left-radius:0.375rem;\n  border-bottom-right-radius:0.375rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(75, 85, 99, var(--tw-bg-opacity));\n  padding-left:0.375rem;\n  padding-right:0.375rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.875rem;\n  line-height:1.25rem\n}\n.card .prefix a[data-v-37ae0a58]:after{\n  content:url('+c+');\n  width:1.25rem;\n  height:1.25rem;\n  position:absolute;\n  top:-1px;\n  right:-1.5rem;\n  padding-top:0px;\n  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size:1.125rem;\n  line-height:1.75rem;\n  font-weight:700;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  opacity:0\n}\n.card .prefix a[data-v-37ae0a58]:hover:after{\n  opacity:1\n}\n.card .content[data-v-37ae0a58]{\n  padding:0.5rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.75rem;\n  line-height:1rem\n}\n\n/*purgecss end ignore*/',""]),d.locals={},t.exports=d},232:function(t,e,o){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},233:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSJ3aGl0ZSI+CiAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xMCA2SDZhMiAyIDAgMDAtMiAydjEwYTIgMiAwIDAwMiAyaDEwYTIgMiAwIDAwMi0ydi00TTE0IDRoNm0wIDB2Nm0wLTZMMTAgMTQiIC8+Cjwvc3ZnPgo="},234:function(t,e,o){"use strict";o(227)},235:function(t,e,o){var n=o(68)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},244:function(t,e,o){"use strict";o.r(e);var n=o(13),component=Object(n.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("img",{staticClass:"w-full object-cover",attrs:{src:"icon.png"}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Img:o(123).default})},280:function(t,e,o){"use strict";o.r(e);var n={},r=o(13),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Card",{attrs:{theme:"light"}},[o("div",{staticClass:"prefix"},[o("Lnk",{attrs:{href:"https://tailwindcss.com/docs/drop-shadow"}},[t._v("drop-shadow")])],1),t._v(" "),o("div",{staticClass:"content"},[o("div",{staticClass:"flex gap-2"},[o("div",{staticClass:"flex-1"},[o("TwClass",{staticClass:"w-max text-black",attrs:{name:"drop-shadow-none",tooltip:"drop-shadow(0 0 #0000)"}},[t._v("-none")]),t._v(" "),o("ImgPng",{staticClass:"h-14 w-full rounded mt-1 filter brightness-200 saturate-50 drop-shadow-none"})],1),t._v(" "),o("div",{staticClass:"flex-1"},[o("TwClass",{staticClass:"w-max text-black",attrs:{name:"drop-shadow-sm",tooltip:"--tw-drop-shadow: drop-shadow(0 1px 1px rgba(0,0,0,0.05))"}},[t._v("-sm")]),t._v(" "),o("ImgPng",{staticClass:"h-14 w-full rounded mt-1 filter brightness-200 saturate-50 drop-shadow-sm"})],1),t._v(" "),o("div",{staticClass:"flex-1"},[o("TwClass",{staticClass:"opacity-0",attrs:{name:"drop-shadow",tooltip:"--tw-drop-shadow: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1)) drop-shadow(0 1px 1px rgba(0, 0, 0, 0.06))"}},[t._v(".")]),t._v(" "),o("ImgPng",{staticClass:"h-14 w-full rounded mt-1 filter brightness-200 saturate-50 drop-shadow"})],1),t._v(" "),o("div",{staticClass:"flex-1"},[o("TwClass",{staticClass:"w-max text-black",attrs:{name:"drop-shadow-md",tooltip:"drop-shadow(0 4px 3px rgba(0, 0, 0, 0.07)) drop-shadow(0 2px 2px rgba(0, 0, 0, 0.06))"}},[t._v("-md")]),t._v(" "),o("ImgPng",{staticClass:"h-14 w-full rounded mt-1 filter brightness-200 saturate-50 drop-shadow-md"})],1),t._v(" "),o("div",{staticClass:"flex-1"},[o("TwClass",{staticClass:"w-max text-black",attrs:{name:"drop-shadow-lg",tooltip:"drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04)) drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1))"}},[t._v("-lg")]),t._v(" "),o("ImgPng",{staticClass:"h-14 w-full rounded mt-1 filter brightness-200 saturate-50 drop-shadow-lg"})],1),t._v(" "),o("div",{staticClass:"flex-1"},[o("TwClass",{staticClass:"w-max text-black",attrs:{name:"drop-shadow-xl",tooltip:"drop-shadow(0 20px 13px rgba(0, 0, 0, 0.03)) drop-shadow(0 8px 5px rgba(0, 0, 0, 0.08))"}},[t._v("-xl")]),t._v(" "),o("ImgPng",{staticClass:"h-14 w-full rounded mt-1 filter brightness-200 saturate-50 drop-shadow-xl"})],1),t._v(" "),o("div",{staticClass:"flex-1"},[o("TwClass",{staticClass:"w-max text-black",attrs:{name:"drop-shadow-2xl",tooltip:"drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15))"}},[t._v("-2xl")]),t._v(" "),o("ImgPng",{staticClass:"h-14 w-full rounded mt-1 filter brightness-200 saturate-50 drop-shadow-2xl"})],1)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Lnk:o(167).default,TwClass:o(229).default,ImgPng:o(244).default,Card:o(228).default})}}]);