(window.webpackJsonp=window.webpackJsonp||[]).push([[6,5,73,91],{220:function(t,r,e){var content=e(226);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(92).default)("5749baca",content,!0,{sourceMap:!1})},221:function(t,r,e){var content=e(230);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(92).default)("62c7fa01",content,!0,{sourceMap:!1})},222:function(t,r,e){"use strict";e.r(r);var o={props:{theme:{type:String,default:"dark"}}},l=(e(225),e(28)),component=Object(l.a)(o,(function(){var t=this,r=t.$createElement;return(t._self._c||r)("div",{staticClass:"card rounded-md",class:"light"===t.theme?"bg-coolGray-200":"bg-coolGray-800"},[t._t("default")],2)}),[],!1,null,"37ae0a58",null);r.default=component.exports},223:function(t,r,e){"use strict";e.r(r);var o=e(20),l=(e(40),e(165),e(122),e(166),{props:{name:{type:String,default:""},tooltip:{type:[String,Object],default:"",required:!1}},data:function(){return{cssPropNVal:[]}},methods:{toClipboard:function(text){navigator.clipboard.writeText(text),this.$nuxt.$emit("toTooltip",text)},setCss:function(t){if("object"===Object(o.a)(t))console.log(t.text,t.css);else{var r=t.split(" "),e=r.shift(),l=r.join(" ");this.cssPropNVal[0]=e,this.cssPropNVal[1]=l,t.endsWith(";")&&console.log("ends with ;"),this.$nuxt.$emit("mouseOnClass",{prop:e,val:l})}}}}),n=(e(229),e(28)),component=Object(n.a)(l,(function(){var t=this,r=t.$createElement;return(t._self._c||r)("div",{staticClass:"tw-class cursor-pointer",on:{click:function(r){return t.toClipboard(t.name)},mouseover:function(r){return t.setCss(t.tooltip)},mouseleave:function(r){return t.$nuxt.$emit("mouseOnClass",!1)}}},[t._t("default")],2)}),[],!1,null,"6ff0f84a",null);r.default=component.exports},224:function(t,r,e){"use strict";e.r(r);var o={props:{href:{type:String,default:"#"}}},l=e(28),component=Object(l.a)(o,(function(){var t=this,r=t.$createElement;return(t._self._c||r)("a",{attrs:{href:t.href,target:"_blank",rel:"noreferrer noopener"}},[t._t("default")],2)}),[],!1,null,null,null);r.default=component.exports},225:function(t,r,e){"use strict";e(220)},226:function(t,r,e){var o=e(91),l=e(227),n=e(228),c=o((function(i){return i[1]})),d=l(n);c.push([t.i,'/*purgecss start ignore*/\n.card .prefix[data-v-37ae0a58]{\n  position:relative;\n  width:-webkit-max-content;\n  width:-moz-max-content;\n  width:max-content;\n  white-space:pre;\n  border-top-left-radius:0.375rem;\n  border-bottom-right-radius:0.375rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(75, 85, 99, var(--tw-bg-opacity));\n  padding-left:0.375rem;\n  padding-right:0.375rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.875rem;\n  line-height:1.25rem\n}\n.card .prefix a[data-v-37ae0a58]:after{\n  content:url('+d+');\n  width:1.25rem;\n  height:1.25rem;\n  position:absolute;\n  top:-1px;\n  right:-1.5rem;\n  padding-top:0px;\n  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size:1.125rem;\n  line-height:1.75rem;\n  font-weight:700;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  opacity:0\n}\n.card .prefix a[data-v-37ae0a58]:hover:after{\n  opacity:1\n}\n.card .content[data-v-37ae0a58]{\n  padding:0.5rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.75rem;\n  line-height:1rem\n}\n\n/*purgecss end ignore*/',""]),c.locals={},t.exports=c},227:function(t,r,e){"use strict";t.exports=function(t,r){return r||(r={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),r.hash&&(t+=r.hash),/["'() \t\n]/.test(t)||r.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},228:function(t,r){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSJ3aGl0ZSI+CiAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xMCA2SDZhMiAyIDAgMDAtMiAydjEwYTIgMiAwIDAwMiAyaDEwYTIgMiAwIDAwMi0ydi00TTE0IDRoNm0wIDB2Nm0wLTZMMTAgMTQiIC8+Cjwvc3ZnPgo="},229:function(t,r,e){"use strict";e(221)},230:function(t,r,e){var o=e(91)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},271:function(t,r,e){"use strict";e.r(r);var o={},l=e(28),component=Object(l.a)(o,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("Card",{staticClass:"card-bg-img ring-1 ring-gray-600"},[e("div",{staticClass:"prefix"},[e("Lnk",{attrs:{href:"https://tailwindcss.com/docs/backdrop-blur"}},[t._v("backdrop-blur")])],1),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"flex gap-2"},[e("div",{staticClass:"flex-1"},[e("TwClass",{staticClass:"w-max px-1 rounded backdrop-filter backdrop-blur-sm backdrop-brightness-50",attrs:{name:"backdrop-blur-none",tooltip:"--tw-backdrop-blur: blur(0)"}},[t._v("-none")]),t._v(" "),e("div",{staticClass:"h-12 w-full rounded mt-1 border border-opacity-30 backdrop-filter backdrop-blur-none"})],1),t._v(" "),e("div",{staticClass:"flex-1"},[e("TwClass",{staticClass:"w-max px-1 rounded backdrop-filter backdrop-blur-sm backdrop-brightness-50",attrs:{name:"backdrop-blur-sm",tooltip:"--tw-backdrop-blur: blur(4px)"}},[t._v("-sm")]),t._v(" "),e("div",{staticClass:"h-12 w-full rounded mt-1 border border-opacity-30 backdrop-filter backdrop-blur-sm"})],1),t._v(" "),e("div",{staticClass:"flex-1"},[e("TwClass",{staticClass:"opacity-0",attrs:{name:"blur",tooltip:"--tw-backdrop-blur: blur(8px)"}},[t._v(".")]),t._v(" "),e("div",{staticClass:"h-12 w-full rounded mt-1 border border-opacity-30 backdrop-filter backdrop-blur"})],1),t._v(" "),e("div",{staticClass:"flex-1"},[e("TwClass",{staticClass:"w-max px-1 rounded backdrop-filter backdrop-blur-sm backdrop-brightness-50",attrs:{name:"backdrop-blur-md",tooltip:"--tw-backdrop-blur: blur(12px)"}},[t._v("-md")]),t._v(" "),e("div",{staticClass:"h-12 w-full rounded mt-1 border border-opacity-30 backdrop-filter backdrop-blur-md"})],1),t._v(" "),e("div",{staticClass:"flex-1"},[e("TwClass",{staticClass:"w-max px-1 rounded backdrop-filter backdrop-blur-sm backdrop-brightness-50",attrs:{name:"backdrop-blur-lg",tooltip:"--tw-backdrop-blur: blur(16px)"}},[t._v("-lg")]),t._v(" "),e("div",{staticClass:"h-12 w-full rounded mt-1 border border-opacity-30 backdrop-filter backdrop-blur-lg"})],1),t._v(" "),e("div",{staticClass:"flex-1"},[e("TwClass",{staticClass:"w-max px-1 rounded backdrop-filter backdrop-blur-sm backdrop-brightness-50",attrs:{name:"backdrop-blur-xl",tooltip:"--tw-backdrop-blur: blur(24px)"}},[t._v("-xl")]),t._v(" "),e("div",{staticClass:"h-12 w-full rounded mt-1 border border-opacity-30 backdrop-filter backdrop-blur-xl"})],1),t._v(" "),e("div",{staticClass:"flex-1"},[e("TwClass",{staticClass:"w-max px-1 rounded backdrop-filter backdrop-blur-sm backdrop-brightness-50",attrs:{name:"backdrop-blur-2xl",tooltip:"--tw-backdrop-blur: blur(40px)"}},[t._v("-2xl")]),t._v(" "),e("div",{staticClass:"h-12 w-full rounded mt-1 border border-opacity-30 backdrop-filter backdrop-blur-2xl"})],1),t._v(" "),e("div",{staticClass:"flex-1"},[e("TwClass",{staticClass:"w-max px-1 rounded backdrop-filter backdrop-blur-sm backdrop-brightness-50",attrs:{name:"backdrop-blur-3xl",tooltip:"--tw-backdrop-blur: blur(64px)"}},[t._v("-3xl")]),t._v(" "),e("div",{staticClass:"h-12 w-full rounded mt-1 border border-opacity-30 backdrop-filter backdrop-blur-3xl"})],1)])])])}),[],!1,null,null,null);r.default=component.exports;installComponents(component,{Lnk:e(224).default,TwClass:e(223).default,Card:e(222).default})}}]);