(window.webpackJsonp=window.webpackJsonp||[]).push([[113,4,104],{226:function(t,e,o){var content=o(231);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(69).default)("5749baca",content,!0,{sourceMap:!1})},227:function(t,e,o){var content=o(235);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(69).default)("62c7fa01",content,!0,{sourceMap:!1})},228:function(t,e,o){"use strict";o.r(e);var n={props:{theme:{type:String,default:"dark"}}},r=(o(230),o(13)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"card rounded-md",class:"light"===t.theme?"bg-coolGray-200":"bg-coolGray-800"},[t._t("default")],2)}),[],!1,null,"37ae0a58",null);e.default=component.exports},229:function(t,e,o){"use strict";o.r(e);var n=o(21),r=(o(40),o(168),o(122),o(169),{props:{name:{type:String,default:""},tooltip:{type:[String,Object],default:"",required:!1}},data:function(){return{cssPropNVal:[]}},methods:{toClipboard:function(text){navigator.clipboard.writeText(text),this.$nuxt.$emit("toTooltip",text)},setCss:function(t){if("object"===Object(n.a)(t))console.log(t.text,t.css);else{var e=t.split(" "),o=e.shift(),r=e.join(" ");this.cssPropNVal[0]=o,this.cssPropNVal[1]=r,t.endsWith(";")&&console.log("ends with ;"),this.$nuxt.$emit("mouseOnClass",{prop:o,val:r})}}}}),l=(o(234),o(13)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"tw-class cursor-pointer",on:{click:function(e){return t.toClipboard(t.name)},mouseover:function(e){return t.setCss(t.tooltip)},mouseleave:function(e){return t.$nuxt.$emit("mouseOnClass",!1)}}},[t._t("default")],2)}),[],!1,null,"6ff0f84a",null);e.default=component.exports},230:function(t,e,o){"use strict";o(226)},231:function(t,e,o){var n=o(68),r=o(232),l=o(233),c=n((function(i){return i[1]})),d=r(l);c.push([t.i,'/*purgecss start ignore*/\n.card .prefix[data-v-37ae0a58]{\n  position:relative;\n  width:-webkit-max-content;\n  width:-moz-max-content;\n  width:max-content;\n  white-space:pre;\n  border-top-left-radius:0.375rem;\n  border-bottom-right-radius:0.375rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(75, 85, 99, var(--tw-bg-opacity));\n  padding-left:0.375rem;\n  padding-right:0.375rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.875rem;\n  line-height:1.25rem\n}\n.card .prefix a[data-v-37ae0a58]:after{\n  content:url('+d+');\n  width:1.25rem;\n  height:1.25rem;\n  position:absolute;\n  top:-1px;\n  right:-1.5rem;\n  padding-top:0px;\n  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size:1.125rem;\n  line-height:1.75rem;\n  font-weight:700;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  opacity:0\n}\n.card .prefix a[data-v-37ae0a58]:hover:after{\n  opacity:1\n}\n.card .content[data-v-37ae0a58]{\n  padding:0.5rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.75rem;\n  line-height:1rem\n}\n\n/*purgecss end ignore*/',""]),c.locals={},t.exports=c},232:function(t,e,o){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},233:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSJ3aGl0ZSI+CiAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xMCA2SDZhMiAyIDAgMDAtMiAydjEwYTIgMiAwIDAwMiAyaDEwYTIgMiAwIDAwMi0ydi00TTE0IDRoNm0wIDB2Nm0wLTZMMTAgMTQiIC8+Cjwvc3ZnPgo="},234:function(t,e,o){"use strict";o(227)},235:function(t,e,o){var n=o(68)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},372:function(t,e,o){"use strict";o.r(e);var n={},r=o(13),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Card",[o("div",{staticClass:"flex justify-between items-start"},[o("div",{staticClass:"prefix"},[o("Lnk",{attrs:{href:"https://github.com/tailwindlabs/tailwindcss-typography#usage"}},[t._v("prose")])],1),t._v(" "),o("Lnk",{staticClass:"pt-1.5 pr-1.5",attrs:{href:"https://github.com/tailwindlabs/tailwindcss-typography#usage",title:"Requires plugin"}},[o("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[o("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"}})])])],1),t._v(" "),o("div",{staticClass:"content"},[o("div",{staticClass:"grid grid-cols-3 gap-2 mb-3"},[o("div",[o("TwClass",{staticClass:"mb-1 w-max",attrs:{name:"prose-sm"}},[t._v("-sm")]),t._v(" "),o("article",{staticClass:"bg-coolGray-700 h-20 overflow-hidden font-sans px-0.5 prose-sm"},[o("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia voluptatibus dignissimos excepturi nihil, eius ex veniam ab quod, odit facilis officiis dolore praesentium quos earum, repudiandae temporibus nemo expedita quidem?")])])],1),t._v(" "),o("div",[o("div",{staticClass:"mb-1 invisible"},[t._v("0")]),t._v(" "),o("article",{staticClass:"bg-coolGray-700 h-20 overflow-hidden font-sans px-0.5 prose text-white"},[o("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia voluptatibus dignissimos excepturi nihil, eius ex veniam ab quod, odit facilis officiis dolore praesentium quos earum, repudiandae temporibus nemo expedita quidem?")])])]),t._v(" "),o("div",[o("TwClass",{staticClass:"mb-1 w-max",attrs:{name:"prose-lg"}},[t._v("-lg")]),t._v(" "),o("article",{staticClass:"bg-coolGray-700 h-20 overflow-hidden font-sans px-0.5 prose-lg"},[o("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia voluptatibus dignissimos excepturi nihil, eius ex veniam ab quod, odit facilis officiis dolore praesentium quos earum, repudiandae temporibus nemo expedita quidem?")])])],1),t._v(" "),o("div",[o("TwClass",{staticClass:"mb-1 w-max",attrs:{name:"prose-xl"}},[t._v("-xl")]),t._v(" "),o("article",{staticClass:"bg-coolGray-700 h-20 overflow-hidden font-sans px-0.5 prose-xl"},[o("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia voluptatibus dignissimos excepturi nihil, eius ex veniam ab quod, odit facilis officiis dolore praesentium quos earum, repudiandae temporibus nemo expedita quidem?")])])],1),t._v(" "),o("div",[o("TwClass",{staticClass:"mb-1 w-max",attrs:{name:"prose-2xl"}},[t._v("-2xl")]),t._v(" "),o("article",{staticClass:"bg-coolGray-700 h-20 overflow-hidden font-sans px-0.5 prose-2xl"},[o("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia voluptatibus dignissimos excepturi nihil, eius ex veniam ab quod, odit facilis officiis dolore praesentium quos earum, repudiandae temporibus nemo expedita quidem?")])])],1)]),t._v(" "),o("div",{staticClass:"grid grid-cols-4 gap-y-1"},[o("div",{staticClass:"flex flex-col"},[o("TwClass",{attrs:{name:"prose-red"}},[t._v("-red")]),t._v(" "),o("div",{staticClass:"font-sans prose prose-red"},[o("a",{attrs:{href:"#"}},[t._v("Link")])])],1),t._v(" "),o("div",{staticClass:"flex flex-col"},[o("TwClass",{attrs:{name:"prose-yellow"}},[t._v("-yellow")]),t._v(" "),o("div",{staticClass:"font-sans prose prose-yellow"},[o("a",{attrs:{href:"#"}},[t._v("Link")])])],1),t._v(" "),o("div",{staticClass:"flex flex-col"},[o("TwClass",{attrs:{name:"prose-green"}},[t._v("-green")]),t._v(" "),o("div",{staticClass:"font-sans prose prose-green"},[o("a",{attrs:{href:"#"}},[t._v("Link")])])],1),t._v(" "),o("div",{staticClass:"flex flex-col"},[o("TwClass",{attrs:{name:"prose-blue"}},[t._v("-blue")]),t._v(" "),o("div",{staticClass:"font-sans prose prose-blue"},[o("a",{attrs:{href:"#"}},[t._v("Link")])])],1),t._v(" "),o("div",{staticClass:"flex flex-col"},[o("TwClass",{attrs:{name:"prose-indigo"}},[t._v("-indigo")]),t._v(" "),o("div",{staticClass:"font-sans prose prose-indigo"},[o("a",{attrs:{href:"#"}},[t._v("Link")])])],1),t._v(" "),o("div",{staticClass:"flex flex-col"},[o("TwClass",{attrs:{name:"prose-purple"}},[t._v("-purple")]),t._v(" "),o("div",{staticClass:"font-sans prose prose-purple"},[o("a",{attrs:{href:"#"}},[t._v("Link")])])],1),t._v(" "),o("div",{staticClass:"flex flex-col"},[o("TwClass",{attrs:{name:"prose-pink"}},[t._v("-pink")]),t._v(" "),o("div",{staticClass:"font-sans prose prose-pink"},[o("a",{attrs:{href:"#"}},[t._v("Link")])])],1)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Lnk:o(167).default,TwClass:o(229).default,Card:o(228).default})}}]);