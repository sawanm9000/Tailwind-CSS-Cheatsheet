(window.webpackJsonp=window.webpackJsonp||[]).push([[96,5,73,91],{220:function(t,e,o){var content=o(226);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(92).default)("5749baca",content,!0,{sourceMap:!1})},221:function(t,e,o){var content=o(230);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(92).default)("62c7fa01",content,!0,{sourceMap:!1})},222:function(t,e,o){"use strict";o.r(e);var n={props:{theme:{type:String,default:"dark"}}},l=(o(225),o(28)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"card rounded-md",class:"light"===t.theme?"bg-coolGray-200":"bg-coolGray-800"},[t._t("default")],2)}),[],!1,null,"37ae0a58",null);e.default=component.exports},223:function(t,e,o){"use strict";o.r(e);var n=o(20),l=(o(40),o(165),o(122),o(166),{props:{name:{type:String,default:""},tooltip:{type:[String,Object],default:"",required:!1}},data:function(){return{cssPropNVal:[]}},methods:{toClipboard:function(text){navigator.clipboard.writeText(text),this.$nuxt.$emit("toTooltip",text)},setCss:function(t){if("object"===Object(n.a)(t))console.log(t.text,t.css);else{var e=t.split(" "),o=e.shift(),l=e.join(" ");this.cssPropNVal[0]=o,this.cssPropNVal[1]=l,t.endsWith(";")&&console.log("ends with ;"),this.$nuxt.$emit("mouseOnClass",{prop:o,val:l})}}}}),r=(o(229),o(28)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"tw-class cursor-pointer",on:{click:function(e){return t.toClipboard(t.name)},mouseover:function(e){return t.setCss(t.tooltip)},mouseleave:function(e){return t.$nuxt.$emit("mouseOnClass",!1)}}},[t._t("default")],2)}),[],!1,null,"6ff0f84a",null);e.default=component.exports},224:function(t,e,o){"use strict";o.r(e);var n={props:{href:{type:String,default:"#"}}},l=o(28),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("a",{attrs:{href:t.href,target:"_blank",rel:"noreferrer noopener"}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},225:function(t,e,o){"use strict";o(220)},226:function(t,e,o){var n=o(91),l=o(227),r=o(228),d=n((function(i){return i[1]})),m=l(r);d.push([t.i,'/*purgecss start ignore*/\n.card .prefix[data-v-37ae0a58]{\n  position:relative;\n  width:-webkit-max-content;\n  width:-moz-max-content;\n  width:max-content;\n  white-space:pre;\n  border-top-left-radius:0.375rem;\n  border-bottom-right-radius:0.375rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(75, 85, 99, var(--tw-bg-opacity));\n  padding-left:0.375rem;\n  padding-right:0.375rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.875rem;\n  line-height:1.25rem\n}\n.card .prefix a[data-v-37ae0a58]:after{\n  content:url('+m+');\n  width:1.25rem;\n  height:1.25rem;\n  position:absolute;\n  top:-1px;\n  right:-1.5rem;\n  padding-top:0px;\n  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size:1.125rem;\n  line-height:1.75rem;\n  font-weight:700;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  opacity:0\n}\n.card .prefix a[data-v-37ae0a58]:hover:after{\n  opacity:1\n}\n.card .content[data-v-37ae0a58]{\n  padding:0.5rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.75rem;\n  line-height:1rem\n}\n\n/*purgecss end ignore*/',""]),d.locals={},t.exports=d},227:function(t,e,o){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},228:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSJ3aGl0ZSI+CiAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xMCA2SDZhMiAyIDAgMDAtMiAydjEwYTIgMiAwIDAwMiAyaDEwYTIgMiAwIDAwMi0ydi00TTE0IDRoNm0wIDB2Nm0wLTZMMTAgMTQiIC8+Cjwvc3ZnPgo="},229:function(t,e,o){"use strict";o(221)},230:function(t,e,o){var n=o(91)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},343:function(t,e,o){"use strict";o.r(e);var n={},l=o(28),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Card",[o("div",{staticClass:"prefix"},[o("Lnk",{attrs:{href:"https://tailwindcss.com/docs/line-height"}},[t._v("leading-")])],1),t._v(" "),o("div",{staticClass:"content grid grid-cols-7 3xl:grid-cols-14 gap-x-1 gap-y-3"},[o("div",{staticClass:"overflow-hidden"},[o("TwClass",{staticClass:"w-max pr-2 mb-1.5",attrs:{name:"leading-3",tooltip:"line-height: .75rem"}},[t._v("3")]),t._v(" "),o("div",{staticClass:"h-28 font-sans overflow-hidden text-xs leading-3"},[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa rem in porro maxime debitis, ullam harum velit voluptas totam iusto libero suscipit quae. Repudiandae, voluptas quo. Impedit enim rerum dolorem.")])],1),t._v(" "),o("div",{staticClass:"overflow-hidden"},[o("TwClass",{staticClass:"w-max pr-2 mb-1.5",attrs:{name:"leading-4",tooltip:"line-height: 1rem"}},[t._v("4")]),t._v(" "),o("div",{staticClass:"h-28 font-sans overflow-hidden text-xs leading-4"},[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa rem in porro maxime debitis, ullam harum velit voluptas totam iusto libero suscipit quae. Repudiandae, voluptas quo. Impedit enim rerum dolorem.")])],1),t._v(" "),o("div",{staticClass:"overflow-hidden"},[o("TwClass",{staticClass:"w-max pr-2 mb-1.5",attrs:{name:"leading-5",tooltip:"line-height: 1.25rem"}},[t._v("5")]),t._v(" "),o("div",{staticClass:"h-28 font-sans overflow-hidden text-xs leading-5"},[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa rem in porro maxime debitis, ullam harum velit voluptas totam iusto libero suscipit quae. Repudiandae, voluptas quo. Impedit enim rerum dolorem.")])],1),t._v(" "),o("div",{staticClass:"overflow-hidden"},[o("TwClass",{staticClass:"w-max pr-2 mb-1.5",attrs:{name:"leading-6",tooltip:"line-height: 1.50rem"}},[t._v("6")]),t._v(" "),o("div",{staticClass:"h-28 font-sans overflow-hidden text-xs leading-6"},[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa rem in porro maxime debitis, ullam harum velit voluptas totam iusto libero suscipit quae. Repudiandae, voluptas quo. Impedit enim rerum dolorem.")])],1),t._v(" "),o("div",{staticClass:"overflow-hidden"},[o("TwClass",{staticClass:"w-max pr-2 mb-1.5",attrs:{name:"leading-7",tooltip:"line-height: 1.75rem"}},[t._v("7")]),t._v(" "),o("div",{staticClass:"h-28 font-sans overflow-hidden text-xs leading-7"},[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa rem in porro maxime debitis, ullam harum velit voluptas totam iusto libero suscipit quae. Repudiandae, voluptas quo. Impedit enim rerum dolorem.")])],1),t._v(" "),o("div",{staticClass:"overflow-hidden"},[o("TwClass",{staticClass:"w-max pr-2 mb-1.5",attrs:{name:"leading-8",tooltip:"line-height: 2rem"}},[t._v("8")]),t._v(" "),o("div",{staticClass:"h-28 font-sans overflow-hidden text-xs leading-8"},[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa rem in porro maxime debitis, ullam harum velit voluptas totam iusto libero suscipit quae. Repudiandae, voluptas quo. Impedit enim rerum dolorem.")])],1),t._v(" "),o("div",{staticClass:"overflow-hidden"},[o("TwClass",{staticClass:"w-max pr-2 mb-1.5",attrs:{name:"leading-9",tooltip:"line-height: 2.25rem"}},[t._v("9")]),t._v(" "),o("div",{staticClass:"h-28 font-sans overflow-hidden text-xs leading-9"},[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa rem in porro maxime debitis, ullam harum velit voluptas totam iusto libero suscipit quae. Repudiandae, voluptas quo. Impedit enim rerum dolorem.")])],1),t._v(" "),o("div",{staticClass:"overflow-hidden"},[o("TwClass",{staticClass:"w-max pr-2 mb-1.5",attrs:{name:"leading-10",tooltip:"line-height: 2.5rem"}},[t._v("10")]),t._v(" "),o("div",{staticClass:"h-28 font-sans overflow-hidden text-xs leading-10"},[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa rem in porro maxime debitis, ullam harum velit voluptas totam iusto libero suscipit quae. Repudiandae, voluptas quo. Impedit enim rerum dolorem.")])],1),t._v(" "),o("div",{staticClass:"overflow-hidden"},[o("TwClass",{staticClass:"w-max pr-2 mb-1.5",attrs:{name:"leading-none",tooltip:"line-height: 1"}},[t._v("none")]),t._v(" "),o("div",{staticClass:"h-28 font-sans overflow-hidden text-xs leading-none"},[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa rem in porro maxime debitis, ullam harum velit voluptas totam iusto libero suscipit quae. Repudiandae, voluptas quo. Impedit enim rerum dolorem.")])],1),t._v(" "),o("div",{staticClass:"overflow-hidden"},[o("TwClass",{staticClass:"w-max pr-2 mb-1.5",attrs:{name:"leading-tight",tooltip:"line-height: 1.25"}},[t._v("tight")]),t._v(" "),o("div",{staticClass:"h-28 font-sans overflow-hidden text-xs leading-tight"},[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa rem in porro maxime debitis, ullam harum velit voluptas totam iusto libero suscipit quae. Repudiandae, voluptas quo. Impedit enim rerum dolorem.")])],1),t._v(" "),o("div",{staticClass:"overflow-hidden"},[o("TwClass",{staticClass:"w-max pr-2 mb-1.5",attrs:{name:"leading-snug",tooltip:"line-height: 1.375"}},[t._v("snug")]),t._v(" "),o("div",{staticClass:"h-28 font-sans overflow-hidden text-xs leading-snug"},[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa rem in porro maxime debitis, ullam harum velit voluptas totam iusto libero suscipit quae. Repudiandae, voluptas quo. Impedit enim rerum dolorem.")])],1),t._v(" "),o("div",{staticClass:"overflow-hidden"},[o("TwClass",{staticClass:"w-max pr-2 mb-1.5",attrs:{name:"leading-normal",tooltip:"line-height: 1.5"}},[t._v("normal")]),t._v(" "),o("div",{staticClass:"h-28 font-sans overflow-hidden text-xs leading-normal"},[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa rem in porro maxime debitis, ullam harum velit voluptas totam iusto libero suscipit quae. Repudiandae, voluptas quo. Impedit enim rerum dolorem.")])],1),t._v(" "),o("div",{staticClass:"overflow-hidden"},[o("TwClass",{staticClass:"w-max pr-2 mb-1.5",attrs:{name:"leading-relaxed",tooltip:"line-height: 1.625"}},[t._v("relaxed")]),t._v(" "),o("div",{staticClass:"h-28 font-sans overflow-hidden text-xs leading-relaxed"},[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa rem in porro maxime debitis, ullam harum velit voluptas totam iusto libero suscipit quae. Repudiandae, voluptas quo. Impedit enim rerum dolorem.")])],1),t._v(" "),o("div",{staticClass:"overflow-hidden"},[o("TwClass",{staticClass:"w-max pr-2 mb-1.5",attrs:{name:"leading-loose",tooltip:"line-height: 2"}},[t._v("loose")]),t._v(" "),o("div",{staticClass:"h-28 font-sans overflow-hidden text-xs leading-loose"},[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa rem in porro maxime debitis, ullam harum velit voluptas totam iusto libero suscipit quae. Repudiandae, voluptas quo. Impedit enim rerum dolorem.")])],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Lnk:o(224).default,TwClass:o(223).default,Card:o(222).default})}}]);