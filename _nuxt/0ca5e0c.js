(window.webpackJsonp=window.webpackJsonp||[]).push([[114,4,103],{226:function(t,e,o){var content=o(231);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(69).default)("5749baca",content,!0,{sourceMap:!1})},227:function(t,e,o){var content=o(235);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(69).default)("62c7fa01",content,!0,{sourceMap:!1})},228:function(t,e,o){"use strict";o.r(e);var n={props:{theme:{type:String,default:"dark"}}},l=(o(230),o(13)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"card rounded-md",class:"light"===t.theme?"bg-coolGray-200":"bg-coolGray-800"},[t._t("default")],2)}),[],!1,null,"37ae0a58",null);e.default=component.exports},229:function(t,e,o){"use strict";o.r(e);var n=o(21),l=(o(35),o(168),o(122),o(169),{props:{name:{type:String,default:""},tooltip:{type:[String,Object],default:"",required:!1}},data:function(){return{cssPropNVal:[]}},methods:{toClipboard:function(text){navigator.clipboard.writeText(text),this.$nuxt.$emit("toTooltip",text)},setCss:function(t){if("object"===Object(n.a)(t))console.log(t.text,t.css);else{var e=t.split(" "),o=e.shift(),l=e.join(" ");this.cssPropNVal[0]=o,this.cssPropNVal[1]=l,t.endsWith(";")&&console.log("ends with ;"),this.$nuxt.$emit("mouseOnClass",{prop:o,val:l})}}}}),r=(o(234),o(13)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"tw-class cursor-pointer",on:{click:function(e){return t.toClipboard(t.name)},mouseover:function(e){return t.setCss(t.tooltip)},mouseleave:function(e){return t.$nuxt.$emit("mouseOnClass",!1)}}},[t._t("default")],2)}),[],!1,null,"6ff0f84a",null);e.default=component.exports},230:function(t,e,o){"use strict";o(226)},231:function(t,e,o){var n=o(68),l=o(232),r=o(233),c=n((function(i){return i[1]})),v=l(r);c.push([t.i,'/*purgecss start ignore*/\n.card .prefix[data-v-37ae0a58]{\n  position:relative;\n  width:-webkit-max-content;\n  width:-moz-max-content;\n  width:max-content;\n  white-space:pre;\n  border-top-left-radius:0.375rem;\n  border-bottom-right-radius:0.375rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(75, 85, 99, var(--tw-bg-opacity));\n  padding-left:0.375rem;\n  padding-right:0.375rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.875rem;\n  line-height:1.25rem\n}\n.card .prefix a[data-v-37ae0a58]:after{\n  content:url('+v+');\n  width:1.25rem;\n  height:1.25rem;\n  position:absolute;\n  top:-1px;\n  right:-1.5rem;\n  padding-top:0px;\n  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size:1.125rem;\n  line-height:1.75rem;\n  font-weight:700;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  opacity:0\n}\n.card .prefix a[data-v-37ae0a58]:hover:after{\n  opacity:1\n}\n.card .content[data-v-37ae0a58]{\n  padding:0.5rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.75rem;\n  line-height:1rem\n}\n\n/*purgecss end ignore*/',""]),c.locals={},t.exports=c},232:function(t,e,o){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},233:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSJ3aGl0ZSI+CiAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xMCA2SDZhMiAyIDAgMDAtMiAydjEwYTIgMiAwIDAwMiAyaDEwYTIgMiAwIDAwMi0ydi00TTE0IDRoNm0wIDB2Nm0wLTZMMTAgMTQiIC8+Cjwvc3ZnPgo="},234:function(t,e,o){"use strict";o(227)},235:function(t,e,o){var n=o(68)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},362:function(t,e,o){"use strict";o.r(e);var n={},l=o(13),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Card",[o("div",{staticClass:"prefix"},[o("Lnk",{attrs:{href:"https://tailwindcss.com/docs/font-size"}},[t._v("text-")])],1),t._v(" "),o("div",{staticClass:"content"},[o("div",{staticClass:"flex gap-x-2 max-w-sm mb-3"},[o("div",{staticClass:"flex-1"},[o("TwClass",{staticClass:"mb-1",attrs:{name:"text-left",tooltip:"text-align: left"}},[t._v("left")]),t._v(" "),o("div",{staticClass:"flex flex-wrap gap-y-0.5 ml-0.5 w-4 justify-start"},[o("div",{staticClass:"h-px bg-coolGray-200 w-4"}),t._v(" "),o("div",{staticClass:"h-px bg-coolGray-200 w-2.5"}),t._v(" "),o("div",{staticClass:"h-px bg-coolGray-200 w-4"}),t._v(" "),o("div",{staticClass:"h-px bg-coolGray-200 w-2.5"}),t._v(" "),o("div",{staticClass:"h-px bg-coolGray-200 w-4"})])],1),t._v(" "),o("div",{staticClass:"flex-1"},[o("TwClass",{staticClass:"mb-1",attrs:{name:"text-center",tooltip:"text-align: center"}},[t._v("center")]),t._v(" "),o("div",{staticClass:"flex flex-wrap gap-y-0.5 ml-0.5 w-4 justify-center"},[o("div",{staticClass:"h-px bg-coolGray-200 w-4"}),t._v(" "),o("div",{staticClass:"h-px bg-coolGray-200 w-2.5"}),t._v(" "),o("div",{staticClass:"h-px bg-coolGray-200 w-4"}),t._v(" "),o("div",{staticClass:"h-px bg-coolGray-200 w-2.5"}),t._v(" "),o("div",{staticClass:"h-px bg-coolGray-200 w-4"})])],1),t._v(" "),o("div",{staticClass:"flex-1"},[o("TwClass",{staticClass:"mb-1",attrs:{name:"text-right",tooltip:"text-align: right"}},[t._v("right")]),t._v(" "),o("div",{staticClass:"flex flex-wrap gap-y-0.5 ml-0.5 w-4 justify-end"},[o("div",{staticClass:"h-px bg-coolGray-200 w-4"}),t._v(" "),o("div",{staticClass:"h-px bg-coolGray-200 w-2.5"}),t._v(" "),o("div",{staticClass:"h-px bg-coolGray-200 w-4"}),t._v(" "),o("div",{staticClass:"h-px bg-coolGray-200 w-2.5"}),t._v(" "),o("div",{staticClass:"h-px bg-coolGray-200 w-4"})])],1),t._v(" "),o("div",{staticClass:"flex-1"},[o("TwClass",{staticClass:"mb-1",attrs:{name:"text-justify",tooltip:"text-align: justify"}},[t._v("justify")]),t._v(" "),o("div",{staticClass:"flex flex-wrap gap-y-0.5 ml-0.5 w-4"},[o("div",{staticClass:"h-px bg-coolGray-200 w-4"}),t._v(" "),o("div",{staticClass:"h-px bg-coolGray-200 w-4"}),t._v(" "),o("div",{staticClass:"h-px bg-coolGray-200 w-4"}),t._v(" "),o("div",{staticClass:"h-px bg-coolGray-200 w-4"}),t._v(" "),o("div",{staticClass:"h-px bg-coolGray-200 w-4"})])],1)]),t._v(" "),o("div",{staticClass:"grid grid-cols-3 gap-2 mt-2 max-w-xs"},[o("div",[o("NuxtLink",{staticClass:"text-red-600 cursor-pointer",attrs:{to:"/style"}},[t._v("{color}")]),t._v(" "),o("div",{staticClass:"mt-1 font-sans text-red-600"},[t._v("Abc")])],1),t._v(" "),o("div",[o("TwClass",{attrs:{name:"text-transparent",tooltip:"color: transparent"}},[t._v("transparent")]),t._v(" "),o("div",{staticClass:"mt-1 font-sans text-transparent"},[t._v("Abc")])],1),t._v(" "),o("div",[o("TwClass",{attrs:{name:"text-current",tooltip:"color: currentColor"}},[t._v("current")]),t._v(" "),o("div",{staticClass:"mt-1 font-sans text-current text-emerald-400"},[t._v("Abc")])],1)]),t._v(" "),o("div",{staticClass:"flex gap-x-3 items-end 3xl:-mt-20 flex-wrap 3xl:flex-nowrap"},[o("div",[o("div",{staticClass:"font-sans text-xs"},[t._v("Abc")]),t._v(" "),o("TwClass",{attrs:{name:"text-xs",tooltip:"font-size: 0.75rem"}},[t._v("xs")])],1),t._v(" "),o("div",[o("div",{staticClass:"font-sans text-sm"},[t._v("Abc")]),t._v(" "),o("TwClass",{attrs:{name:"text-sm",tooltip:"font-size: 0.875rem"}},[t._v("sm")])],1),t._v(" "),o("div",[o("div",{staticClass:"font-sans text-base"},[t._v("Abc")]),t._v(" "),o("TwClass",{attrs:{name:"text-base",tooltip:"font-size: 1rem"}},[t._v("base")])],1),t._v(" "),o("div",[o("div",{staticClass:"font-sans text-lg"},[t._v("Abc")]),t._v(" "),o("TwClass",{attrs:{name:"text-lg",tooltip:"font-size: 1.125rem"}},[t._v("lg")])],1),t._v(" "),o("div",[o("div",{staticClass:"font-sans text-xl"},[t._v("Abc")]),t._v(" "),o("TwClass",{attrs:{name:"text-xl",tooltip:"font-size: 1.25rem"}},[t._v("xl")])],1),t._v(" "),o("div",[o("div",{staticClass:"font-sans text-2xl"},[t._v("Abc")]),t._v(" "),o("TwClass",{attrs:{name:"text-2xl",tooltip:"font-size: 1.5rem"}},[t._v("2xl")])],1),t._v(" "),o("div",[o("div",{staticClass:"font-sans text-3xl"},[t._v("Abc")]),t._v(" "),o("TwClass",{attrs:{name:"text-3xl",tooltip:"font-size: 1.875rem"}},[t._v("3xl")])],1),t._v(" "),o("div",[o("div",{staticClass:"font-sans text-4xl"},[t._v("Abc")]),t._v(" "),o("TwClass",{attrs:{name:"text-4xl",tooltip:"font-size: 2.25rem"}},[t._v("4xl")])],1),t._v(" "),o("div",[o("div",{staticClass:"font-sans text-5xl"},[t._v("Abc")]),t._v(" "),o("TwClass",{attrs:{name:"text-5xl",tooltip:"font-size: 3rem"}},[t._v("5xl")])],1),t._v(" "),o("div",[o("div",{staticClass:"font-sans text-6xl"},[t._v("Abc")]),t._v(" "),o("TwClass",{attrs:{name:"text-6xl",tooltip:"font-size: 3.75rem"}},[t._v("6xl")])],1),t._v(" "),o("div",[o("div",{staticClass:"font-sans text-7xl"},[t._v("Abc")]),t._v(" "),o("TwClass",{attrs:{name:"text-7xl",tooltip:"font-size: 4.5rem"}},[t._v("7xl")])],1),t._v(" "),o("div",[o("div",{staticClass:"font-sans text-8xl"},[t._v("Abc")]),t._v(" "),o("TwClass",{attrs:{name:"text-8xl",tooltip:"font-size: 6rem"}},[t._v("8xl")])],1),t._v(" "),o("div",[o("div",{staticClass:"font-sans text-9xl"},[t._v("Abc")]),t._v(" "),o("TwClass",{attrs:{name:"text-9xl",tooltip:"font-size: 8rem"}},[t._v("9xl")])],1)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Lnk:o(167).default,TwClass:o(229).default,Card:o(228).default})}}]);