(window.webpackJsonp=window.webpackJsonp||[]).push([[63,4,48,67],{220:function(t,e,n){var content=n(226);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(92).default)("81762e40",content,!0,{sourceMap:!1})},221:function(t,e,n){"use strict";n.r(e);var o={},r=(n(225),n(28)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"card bg-gray-800 rounded-md"},[t._t("default")],2)}),[],!1,null,"176aa006",null);e.default=component.exports},222:function(t,e,n){var content=n(230);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(92).default)("62c7fa01",content,!0,{sourceMap:!1})},223:function(t,e,n){"use strict";n.r(e);var o={props:{href:{type:String,default:"#"}}},r=n(28),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("a",{attrs:{href:t.href,target:"_blank",rel:"noreferrer noopener"}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},224:function(t,e,n){"use strict";n.r(e);var o=n(20),r=(n(40),n(165),n(122),n(166),{props:{name:{type:String,default:""},tooltip:{type:[String,Object],default:"",required:!1}},data:function(){return{cssPropNVal:[]}},methods:{toClipboard:function(text){navigator.clipboard.writeText(text),this.$nuxt.$emit("toTooltip",text)},setCss:function(t){if("object"===Object(o.a)(t))console.log(t.text,t.css);else{var e=t.split(" "),n=e.shift(),r=e.join(" ");this.cssPropNVal[0]=n,this.cssPropNVal[1]=r,t.endsWith(";")&&console.log("ends with ;"),this.$nuxt.$emit("mouseOnClass",{prop:n,val:r})}}}}),l=(n(229),n(28)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"tw-class cursor-pointer",on:{click:function(e){return t.toClipboard(t.name)},mouseover:function(e){return t.setCss(t.tooltip)},mouseleave:function(e){return t.$nuxt.$emit("mouseOnClass",!1)}}},[t._t("default")],2)}),[],!1,null,"6ff0f84a",null);e.default=component.exports},225:function(t,e,n){"use strict";n(220)},226:function(t,e,n){var o=n(91),r=n(227),l=n(228),c=o((function(i){return i[1]})),d=r(l);c.push([t.i,'/*purgecss start ignore*/\n.card .prefix[data-v-176aa006]{\n  position:relative;\n  width:-webkit-max-content;\n  width:-moz-max-content;\n  width:max-content;\n  white-space:pre;\n  border-top-left-radius:0.375rem;\n  border-bottom-right-radius:0.375rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(75, 85, 99, var(--tw-bg-opacity));\n  padding-left:0.375rem;\n  padding-right:0.375rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.875rem;\n  line-height:1.25rem\n}\n.card .prefix a[data-v-176aa006]:after{\n  content:url('+d+');\n  width:1.25rem;\n  height:1.25rem;\n  position:absolute;\n  top:-1px;\n  right:-1.5rem;\n  padding-top:0px;\n  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size:1.125rem;\n  line-height:1.75rem;\n  font-weight:700;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  opacity:0\n}\n.card .prefix a[data-v-176aa006]:hover:after{\n  opacity:1\n}\n.card .content[data-v-176aa006]{\n  padding:0.5rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.75rem;\n  line-height:1rem\n}\n\n/*purgecss end ignore*/',""]),c.locals={},t.exports=c},227:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},228:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSJ3aGl0ZSI+CiAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xMCA2SDZhMiAyIDAgMDAtMiAydjEwYTIgMiAwIDAwMiAyaDEwYTIgMiAwIDAwMi0ydi00TTE0IDRoNm0wIDB2Nm0wLTZMMTAgMTQiIC8+Cjwvc3ZnPgo="},229:function(t,e,n){"use strict";n(222)},230:function(t,e,n){var o=n(91)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},313:function(t,e,n){"use strict";n.r(e);var o={},r=n(28),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Card",[n("div",{staticClass:"prefix"},[n("Lnk",{attrs:{href:"https://tailwindcss.com/docs/box-shadow"}},[t._v("shadow")])],1),t._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"grid grid-cols-6 gap-x-3 gap-y-2 px-3 pt-2 pb-3 rounded bg-white text-gray-900"},[n("div",[n("TwClass",{staticClass:"w-max",attrs:{name:"shadow-sm",tooltip:""}},[t._v("sm")]),t._v(" "),n("div",{staticClass:"h-10 mt-1 bg-gray-400 rounded shadow-sm"})],1),t._v(" "),n("div",[n("TwClass",{staticClass:"whitespace-pre font-sans text-white opacity-0",attrs:{name:"shadow"}},[t._v(". ")]),t._v(" "),n("div",{staticClass:"h-10 mt-1 bg-gray-400 rounded shadow"})],1),t._v(" "),n("div",[n("TwClass",{staticClass:"w-max",attrs:{name:"shadow-md",tooltip:""}},[t._v("md")]),t._v(" "),n("div",{staticClass:"h-10 mt-1 bg-gray-400 rounded shadow-md"})],1),t._v(" "),n("div",[n("TwClass",{staticClass:"w-max",attrs:{name:"shadow-lg",tooltip:""}},[t._v("lg")]),t._v(" "),n("div",{staticClass:"h-10 mt-1 bg-gray-400 rounded shadow-lg"})],1),t._v(" "),n("div",[n("TwClass",{staticClass:"w-max",attrs:{name:"shadow-xl",tooltip:""}},[t._v("xl")]),t._v(" "),n("div",{staticClass:"h-10 mt-1 bg-gray-400 rounded shadow-xl"})],1),t._v(" "),n("div",[n("TwClass",{staticClass:"w-max",attrs:{name:"shadow-2xl",tooltip:""}},[t._v("2xl")]),t._v(" "),n("div",{staticClass:"h-10 mt-1 bg-gray-400 rounded shadow-2xl"})],1),t._v(" "),n("div",{staticClass:"col-span-3"},[n("TwClass",{staticClass:"w-max",attrs:{name:"shadow-inner",tooltip:""}},[t._v("inner")]),t._v(" "),n("div",{staticClass:"h-10 mt-1 bg-gray-400 rounded shadow-inner"})],1),t._v(" "),n("div",{staticClass:"col-start-4 col-span-3"},[n("TwClass",{staticClass:"w-max",attrs:{name:"shadow-none",tooltip:""}},[t._v("none")]),t._v(" "),n("div",{staticClass:"h-10 mt-1 bg-gray-400 rounded shadow-none"})],1)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Lnk:n(223).default,TwClass:n(224).default,Card:n(221).default})}}]);