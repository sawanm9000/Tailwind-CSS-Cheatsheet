(window.webpackJsonp=window.webpackJsonp||[]).push([[79,4,48,67],{220:function(t,e,o){var content=o(226);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(92).default)("81762e40",content,!0,{sourceMap:!1})},221:function(t,e,o){"use strict";o.r(e);var n={},c=(o(225),o(28)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"card bg-gray-800 rounded-md"},[t._t("default")],2)}),[],!1,null,"176aa006",null);e.default=component.exports},222:function(t,e,o){"use strict";o.r(e);var n={props:{href:{type:String,default:"#"}}},c=o(28),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("a",{attrs:{href:t.href,target:"_blank",rel:"noreferrer noopener"}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},223:function(t,e,o){var content=o(230);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(92).default)("62c7fa01",content,!0,{sourceMap:!1})},224:function(t,e,o){"use strict";o.r(e);var n=o(20),c=(o(40),o(165),o(122),o(166),{props:{name:{type:String,default:""},tooltip:{type:[String,Object],default:"",required:!1}},data:function(){return{cssPropNVal:[]}},methods:{toClipboard:function(text){navigator.clipboard.writeText(text),this.$nuxt.$emit("toTooltip",text)},setCss:function(t){if("object"===Object(n.a)(t))console.log(t.text,t.css);else{var e=t.split(" "),o=e.shift(),c=e.join(" ");this.cssPropNVal[0]=o,this.cssPropNVal[1]=c,t.endsWith(";")&&console.log("ends with ;"),this.$nuxt.$emit("mouseOnClass",{prop:o,val:c})}}}}),r=(o(229),o(28)),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"tw-class cursor-pointer",on:{click:function(e){return t.toClipboard(t.name)},mouseover:function(e){return t.setCss(t.tooltip)},mouseleave:function(e){return t.$nuxt.$emit("mouseOnClass",!1)}}},[t._t("default")],2)}),[],!1,null,"6ff0f84a",null);e.default=component.exports},225:function(t,e,o){"use strict";o(220)},226:function(t,e,o){var n=o(91),c=o(227),r=o(228),l=n((function(i){return i[1]})),v=c(r);l.push([t.i,'/*purgecss start ignore*/\n.card .prefix[data-v-176aa006]{\n  position:relative;\n  width:-webkit-max-content;\n  width:-moz-max-content;\n  width:max-content;\n  white-space:pre;\n  border-top-left-radius:0.375rem;\n  border-bottom-right-radius:0.375rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(75, 85, 99, var(--tw-bg-opacity));\n  padding-left:0.375rem;\n  padding-right:0.375rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.875rem;\n  line-height:1.25rem\n}\n.card .prefix a[data-v-176aa006]:after{\n  content:url('+v+');\n  width:1.25rem;\n  height:1.25rem;\n  position:absolute;\n  top:-1px;\n  right:-1.5rem;\n  padding-top:0px;\n  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size:1.125rem;\n  line-height:1.75rem;\n  font-weight:700;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  opacity:0\n}\n.card .prefix a[data-v-176aa006]:hover:after{\n  opacity:1\n}\n.card .content[data-v-176aa006]{\n  padding:0.5rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.75rem;\n  line-height:1rem\n}\n\n/*purgecss end ignore*/',""]),l.locals={},t.exports=l},227:function(t,e,o){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},228:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSJ3aGl0ZSI+CiAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xMCA2SDZhMiAyIDAgMDAtMiAydjEwYTIgMiAwIDAwMiAyaDEwYTIgMiAwIDAwMi0ydi00TTE0IDRoNm0wIDB2Nm0wLTZMMTAgMTQiIC8+Cjwvc3ZnPgo="},229:function(t,e,o){"use strict";o(223)},230:function(t,e,o){var n=o(91)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},317:function(t,e,o){"use strict";o.r(e);var n={},c=o(28),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Card",[o("div",{staticClass:"prefix whitespace-pre"},[o("Lnk",{attrs:{href:"https://tailwindcss.com/docs/text-opacity"}},[t._v("text-opacity-")]),t._v(" "),o("Lnk",{attrs:{href:"https://tailwindcss.com/docs/placeholder-opacity"}},[t._v("placeholder-opacity-")])],1),t._v(" "),o("div",{staticClass:"content flex gap-x-4 flex-wrap"},[o("div",[o("TwClass",{staticClass:"w-max pr-1",attrs:{name:"text-opacity-0",tooltip:"--tw-text-opacity: 0"}},[t._v("0")]),t._v(" "),o("div",{staticClass:"font-sans text-base text-white text-opacity-0"},[t._v("Abc")])],1),t._v(" "),o("div",[o("TwClass",{staticClass:"w-max pr-1",attrs:{name:"text-opacity-5",tooltip:"--tw-text-opacity: 0.05"}},[t._v("5")]),t._v(" "),o("div",{staticClass:"font-sans text-base text-white text-opacity-5"},[t._v("Abc")])],1),t._v(" "),o("div",[o("TwClass",{staticClass:"w-max pr-1",attrs:{name:"text-opacity-10",tooltip:"--tw-text-opacity: 0.1"}},[t._v("10")]),t._v(" "),o("div",{staticClass:"font-sans text-base  text-white text-opacity-10"},[t._v("Abc")])],1),t._v(" "),o("div",[o("TwClass",{staticClass:"w-max pr-1",attrs:{name:"text-opacity-20",tooltip:"--tw-text-opacity: 0.2"}},[t._v("20")]),t._v(" "),o("div",{staticClass:"font-sans text-base  text-white text-opacity-20"},[t._v("Abc")])],1),t._v(" "),o("div",[o("TwClass",{staticClass:"w-max pr-1",attrs:{name:"text-opacity-25",tooltip:"--tw-text-opacity: 0.25"}},[t._v("25")]),t._v(" "),o("div",{staticClass:"font-sans text-base  text-white text-opacity-25"},[t._v("Abc")])],1),t._v(" "),o("div",[o("TwClass",{staticClass:"w-max pr-1",attrs:{name:"text-opacity-30",tooltip:"--tw-text-opacity: 0.3"}},[t._v("30")]),t._v(" "),o("div",{staticClass:"font-sans text-base  text-white text-opacity-30"},[t._v("Abc")])],1),t._v(" "),o("div",[o("TwClass",{staticClass:"w-max pr-1",attrs:{name:"text-opacity-40",tooltip:"--tw-text-opacity: 0.4"}},[t._v("40")]),t._v(" "),o("div",{staticClass:"font-sans text-base  text-white text-opacity-40"},[t._v("Abc")])],1),t._v(" "),o("div",[o("TwClass",{staticClass:"w-max pr-1",attrs:{name:"text-opacity-50",tooltip:"--tw-text-opacity: 0.5"}},[t._v("50")]),t._v(" "),o("div",{staticClass:"font-sans text-base  text-white text-opacity-50"},[t._v("Abc")])],1),t._v(" "),o("div",[o("TwClass",{staticClass:"w-max pr-1",attrs:{name:"text-opacity-60",tooltip:"--tw-text-opacity: 0.6"}},[t._v("60")]),t._v(" "),o("div",{staticClass:"font-sans text-base  text-white text-opacity-60"},[t._v("Abc")])],1),t._v(" "),o("div",[o("TwClass",{staticClass:"w-max pr-1",attrs:{name:"text-opacity-70",tooltip:"--tw-text-opacity: 0.7"}},[t._v("70")]),t._v(" "),o("div",{staticClass:"font-sans text-base  text-white text-opacity-70"},[t._v("Abc")])],1),t._v(" "),o("div",[o("TwClass",{staticClass:"w-max pr-1",attrs:{name:"text-opacity-75",tooltip:"--tw-text-opacity: 0.75"}},[t._v("75")]),t._v(" "),o("div",{staticClass:"font-sans text-base  text-white text-opacity-75"},[t._v("Abc")])],1),t._v(" "),o("div",[o("TwClass",{staticClass:"w-max pr-1",attrs:{name:"text-opacity-80",tooltip:"--tw-text-opacity: 0.8"}},[t._v("80")]),t._v(" "),o("div",{staticClass:"font-sans text-base  text-white text-opacity-80"},[t._v("Abc")])],1),t._v(" "),o("div",[o("TwClass",{staticClass:"w-max pr-1",attrs:{name:"text-opacity-90",tooltip:"--tw-text-opacity: 0.9"}},[t._v("90")]),t._v(" "),o("div",{staticClass:"font-sans text-base  text-white text-opacity-90"},[t._v("Abc")])],1),t._v(" "),o("div",[o("TwClass",{staticClass:"w-max pr-1",attrs:{name:"text-opacity-95",tooltip:"--tw-text-opacity: 0.95"}},[t._v("95")]),t._v(" "),o("div",{staticClass:"font-sans text-base  text-white text-opacity-95"},[t._v("Abc")])],1),t._v(" "),o("div",[o("TwClass",{staticClass:"w-max pr-1",attrs:{name:"text-opacity-100",tooltip:"--tw-text-opacity: 1"}},[t._v("100")]),t._v(" "),o("div",{staticClass:"font-sans text-base t text-white ext-opacity-100"},[t._v("Abc")])],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Lnk:o(222).default,TwClass:o(224).default,Card:o(221).default})}}]);