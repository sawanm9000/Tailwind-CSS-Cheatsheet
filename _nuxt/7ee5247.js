(window.webpackJsonp=window.webpackJsonp||[]).push([[76,5,103],{226:function(t,e,o){var content=o(231);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(69).default)("1bee20f6",content,!0,{sourceMap:!1})},227:function(t,e,o){var content=o(235);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(69).default)("62c7fa01",content,!0,{sourceMap:!1})},228:function(t,e,o){"use strict";o.r(e);var r={props:{theme:{type:String,default:"dark"}}},n=(o(230),o(13)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"card rounded-md",class:"light"===t.theme?"bg-coolGray-200":"bg-coolGray-800"},[t._t("default")],2)}),[],!1,null,"717beaa0",null);e.default=component.exports},229:function(t,e,o){"use strict";o.r(e);var r=o(21),n=(o(35),o(168),o(122),o(169),{props:{name:{type:String,default:""},tooltip:{type:[String,Object],default:"",required:!1}},data:function(){return{cssPropNVal:[]}},methods:{toClipboard:function(text){navigator.clipboard.writeText(text),this.$nuxt.$emit("toTooltip",text)},setCss:function(t){if("object"===Object(r.a)(t))console.log(t.text,t.css);else{var e=t.split(" "),o=e.shift(),n=e.join(" ");this.cssPropNVal[0]=o,this.cssPropNVal[1]=n,t.endsWith(";")&&console.log("ends with ;"),this.$nuxt.$emit("mouseOnClass",{prop:o,val:n})}}}}),l=(o(234),o(13)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"tw-class cursor-pointer",on:{click:function(e){return t.toClipboard(t.name)},mouseover:function(e){return t.setCss(t.tooltip)},mouseleave:function(e){return t.$nuxt.$emit("mouseOnClass",!1)}}},[t._t("default")],2)}),[],!1,null,"6ff0f84a",null);e.default=component.exports},230:function(t,e,o){"use strict";o(226)},231:function(t,e,o){var r=o(68),n=o(232),l=o(233),d=r((function(i){return i[1]})),c=n(l);d.push([t.i,'/*purgecss start ignore*/\n.card .title[data-v-717beaa0]{\n  position:relative;\n  margin-bottom:0.5rem;\n  width:-webkit-max-content;\n  width:-moz-max-content;\n  width:max-content;\n  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size:0.875rem;\n  line-height:1.25rem;\n  --tw-text-opacity:1;\n  color:rgba(156, 163, 175, var(--tw-text-opacity))\n}\n.card .title[data-v-717beaa0]:hover{\n  --tw-text-opacity:1;\n  color:rgba(229, 231, 235, var(--tw-text-opacity))\n}\n.card .title a[data-v-717beaa0]:after{\n  content:url('+c+');\n  width:1.25rem;\n  height:1.25rem;\n  position:absolute;\n  top:-1px;\n  right:-1.5rem;\n  padding-top:0px;\n  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size:1.125rem;\n  line-height:1.75rem;\n  font-weight:700;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  opacity:0\n}\n.card .prefix[data-v-717beaa0]{\n  position:relative;\n  width:-webkit-max-content;\n  width:-moz-max-content;\n  width:max-content;\n  white-space:pre;\n  border-top-left-radius:0.375rem;\n  border-bottom-right-radius:0.375rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(75, 85, 99, var(--tw-bg-opacity));\n  padding-left:0.375rem;\n  padding-right:0.375rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.875rem;\n  line-height:1.25rem\n}\n.card .prefix a[data-v-717beaa0]:after{\n  content:url('+c+');\n  width:1.25rem;\n  height:1.25rem;\n  position:absolute;\n  top:-1px;\n  right:-1.5rem;\n  padding-top:0px;\n  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size:1.125rem;\n  line-height:1.75rem;\n  font-weight:700;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  opacity:0\n}\n.card .prefix a[data-v-717beaa0]:hover:after, .card .title a[data-v-717beaa0]:hover:after{\n  opacity:1\n}\n.card .content[data-v-717beaa0]{\n  padding:0.5rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.75rem;\n  line-height:1rem\n}\n\n/*purgecss end ignore*/',""]),d.locals={},t.exports=d},232:function(t,e,o){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},233:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSJ3aGl0ZSI+CiAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xMCA2SDZhMiAyIDAgMDAtMiAydjEwYTIgMiAwIDAwMiAyaDEwYTIgMiAwIDAwMi0ydi00TTE0IDRoNm0wIDB2Nm0wLTZMMTAgMTQiIC8+Cjwvc3ZnPgo="},234:function(t,e,o){"use strict";o(227)},235:function(t,e,o){var r=o(68)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},332:function(t,e,o){"use strict";o.r(e);var r={},n=o(13),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Card",[o("div",{staticClass:"prefix"},[o("Lnk",{attrs:{href:"https://tailwindcss.com/docs/border-width"}},[t._v("border")])],1),t._v(" "),o("div",{staticClass:"content"},[o("div",{staticClass:"grid grid-cols-5 gap-x-2 mb-3"},[o("div",[o("TwClass",{staticClass:"w-max",attrs:{name:"border-0",tooltip:"border-width: 0px"}},[t._v("-0")]),t._v(" "),o("div",{staticClass:"bg-lightBlue-600 rounded-sm w-9 h-9 border-0"})],1),t._v(" "),o("div",[o("div",{staticClass:"invisible"},[t._v(".")]),t._v(" "),o("div",{staticClass:"bg-lightBlue-600 rounded-sm w-9 h-9 border"})]),t._v(" "),o("div",[o("TwClass",{staticClass:"w-max",attrs:{name:"border-2",tooltip:"border-width: 2px"}},[t._v("-2")]),t._v(" "),o("div",{staticClass:"bg-lightBlue-600 rounded-sm w-9 h-9 border-2"})],1),t._v(" "),o("div",[o("TwClass",{staticClass:"w-max",attrs:{name:"border-4",tooltip:"border-width: 4px"}},[t._v("-4")]),t._v(" "),o("div",{staticClass:"bg-lightBlue-600 rounded-sm w-9 h-9 border-4"})],1),t._v(" "),o("div",[o("TwClass",{staticClass:"w-max",attrs:{name:"border-8",tooltip:"border-width: 8px"}},[t._v("-8")]),t._v(" "),o("div",{staticClass:"bg-lightBlue-600 rounded-sm w-9 h-9 border-8"})],1)]),t._v(" "),o("div",{staticClass:"mb-1"},[t._v("-{ t | r | b | l }-{ size }")]),t._v(" "),o("div",{staticClass:"font-sans text-sm text-coolGray-400"},[t._v("Examples:")]),t._v(" "),o("div",{staticClass:"grid grid-cols-3 gap-y-2 justify-items-center mb-4"},[o("div",{staticClass:" col-start-2 row-start-1"},[o("div",[t._v("-t-4")]),t._v(" "),o("div",{staticClass:"w-9 h-9 bg-lightBlue-600 rounded-sm border-t-4"})]),t._v(" "),o("div",{staticClass:" col-start-1 row-start-2"},[o("div",[t._v("-l-4")]),t._v(" "),o("div",{staticClass:"w-9 h-9 bg-lightBlue-600 rounded-sm border-l-4"})]),t._v(" "),o("div",{staticClass:" col-start-2 row-start-2"},[o("div",[t._v("-4")]),t._v(" "),o("div",{staticClass:"w-9 h-9 bg-lightBlue-600 rounded-sm border-4"})]),t._v(" "),o("div",{staticClass:" col-start-3 row-start-2"},[o("div",[t._v("-r-4")]),t._v(" "),o("div",{staticClass:"w-9 h-9 bg-lightBlue-600 rounded-sm border-r-4"})]),t._v(" "),o("div",{staticClass:" col-start-2 row-start-3"},[o("div",[t._v("-b-4")]),t._v(" "),o("div",{staticClass:"w-9 h-9 bg-lightBlue-600 rounded-sm border-b-4"})])]),t._v(" "),o("div",{staticClass:"grid grid-cols-3 mb-4 gap-x-2"},[o("div",[o("div",{staticClass:"text-red-600 cursor-pointer",on:{mouseover:function(e){return t.$nuxt.$emit("highlightColor",!0)},mouseleave:function(e){return t.$nuxt.$emit("highlightColor",!1)}}},[t._v("-{color}")]),t._v(" "),o("div",{staticClass:"w-9 h-9 bg-lightBlue-600 rounded-sm border-4 mt-1 border-red-600"})]),t._v(" "),o("div",[o("TwClass",{attrs:{name:"border-transparent",tooltip:"border-color: transparent"}},[t._v("-transparent")]),t._v(" "),o("div",{staticClass:"w-9 h-9 bg-lightBlue-600 rounded-sm border-4 border-transparent mt-1"})],1),t._v(" "),o("div",[o("TwClass",{attrs:{name:"border-current",tooltip:"border-color: currentColor"}},[t._v("-current")]),t._v(" "),o("div",{staticClass:"w-9 h-9 bg-lightBlue-600 rounded-sm mt-1 font-sans flex justify-center items-center text-emerald-400 border-4 border-current"},[t._v("Hi")])],1)]),t._v(" "),o("div",{staticClass:"grid grid-cols-4 gap-2 mb-3"},[o("div",[o("TwClass",{attrs:{name:"border-solid",tooltip:"border-style: solid"}},[t._v("-solid")]),t._v(" "),o("div",{staticClass:"w-9 h-9 mt-1 bg-lightBlue-600 rounded-sm border-2 border-solid"})],1),t._v(" "),o("div",[o("TwClass",{attrs:{name:"border-dashed",tooltip:"border-style: dashed"}},[t._v("-dashed")]),t._v(" "),o("div",{staticClass:"w-9 h-9 mt-1 bg-lightBlue-600 rounded-sm border-2 border-dashed"})],1),t._v(" "),o("div",[o("TwClass",{attrs:{name:"border-dotted",tooltip:"border-style: dotted"}},[t._v("-dotted")]),t._v(" "),o("div",{staticClass:"w-9 h-9 mt-1 bg-lightBlue-600 rounded-sm border-2 border-dotted"})],1),t._v(" "),o("div",[o("TwClass",{attrs:{name:"border-double",tooltip:"border-style: double"}},[t._v("-double")]),t._v(" "),o("div",{staticClass:"w-9 h-9 mt-1 bg-lightBlue-600 rounded-sm border-4 border-double"})],1),t._v(" "),o("div",[o("TwClass",{attrs:{name:"border-none",tooltip:"border-style: none"}},[t._v("-none")]),t._v(" "),o("div",{staticClass:"w-9 h-9 mt-1 bg-lightBlue-600 rounded-sm border-2 border-none"})],1)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Lnk:o(167).default,TwClass:o(229).default,Card:o(228).default})}}]);