(window.webpackJsonp=window.webpackJsonp||[]).push([[117,5,103],{227:function(e,t,n){var content=n(232);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(69).default)("1bee20f6",content,!0,{sourceMap:!1})},228:function(e,t,n){var content=n(236);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(69).default)("62c7fa01",content,!0,{sourceMap:!1})},229:function(e,t,n){"use strict";n.r(t);var o={props:{theme:{type:String,default:"dark"}}},r=(n(231),n(9)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"card rounded-md",class:"light"===e.theme?"bg-coolGray-200":"bg-coolGray-800"},[e._t("default")],2)}),[],!1,null,"717beaa0",null);t.default=component.exports},230:function(e,t,n){"use strict";n.r(t);var o=n(21),r=(n(35),n(169),n(122),n(170),{props:{name:{type:String,default:""},tooltip:{type:[String,Object],default:"",required:!1}},data:function(){return{cssPropNVal:[]}},methods:{toClipboard:function(text){navigator.clipboard.writeText(text),this.$nuxt.$emit("toTooltip",text)},setCss:function(e){if("object"===Object(o.a)(e))console.log(e.text,e.css);else{var t=e.split(" "),n=t.shift(),r=t.join(" ");this.cssPropNVal[0]=n,this.cssPropNVal[1]=r,e.endsWith(";")&&console.log("ends with ;"),this.$nuxt.$emit("mouseOnClass",{prop:n,val:r})}}}}),l=(n(235),n(9)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"tw-class cursor-pointer",on:{click:function(t){return e.toClipboard(e.name)},mouseover:function(t){return e.setCss(e.tooltip)},mouseleave:function(t){return e.$nuxt.$emit("mouseOnClass",!1)}}},[e._t("default")],2)}),[],!1,null,"6ff0f84a",null);t.default=component.exports},231:function(e,t,n){"use strict";n(227)},232:function(e,t,n){var o=n(68),r=n(233),l=n(234),c=o((function(i){return i[1]})),m=r(l);c.push([e.i,'/*purgecss start ignore*/\n.card .title[data-v-717beaa0]{\n  position:relative;\n  margin-bottom:0.5rem;\n  width:-webkit-max-content;\n  width:-moz-max-content;\n  width:max-content;\n  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size:0.875rem;\n  line-height:1.25rem;\n  --tw-text-opacity:1;\n  color:rgba(156, 163, 175, var(--tw-text-opacity))\n}\n.card .title[data-v-717beaa0]:hover{\n  --tw-text-opacity:1;\n  color:rgba(229, 231, 235, var(--tw-text-opacity))\n}\n.card .title a[data-v-717beaa0]:after{\n  content:url('+m+');\n  width:1.25rem;\n  height:1.25rem;\n  position:absolute;\n  top:-1px;\n  right:-1.5rem;\n  padding-top:0px;\n  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size:1.125rem;\n  line-height:1.75rem;\n  font-weight:700;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  opacity:0\n}\n.card .prefix[data-v-717beaa0]{\n  position:relative;\n  width:-webkit-max-content;\n  width:-moz-max-content;\n  width:max-content;\n  white-space:pre;\n  border-top-left-radius:0.375rem;\n  border-bottom-right-radius:0.375rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(75, 85, 99, var(--tw-bg-opacity));\n  padding-left:0.375rem;\n  padding-right:0.375rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.875rem;\n  line-height:1.25rem\n}\n.card .prefix a[data-v-717beaa0]:after{\n  content:url('+m+');\n  width:1.25rem;\n  height:1.25rem;\n  position:absolute;\n  top:-1px;\n  right:-1.5rem;\n  padding-top:0px;\n  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size:1.125rem;\n  line-height:1.75rem;\n  font-weight:700;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  opacity:0\n}\n.card .prefix a[data-v-717beaa0]:hover:after, .card .title a[data-v-717beaa0]:hover:after{\n  opacity:1\n}\n.card .content[data-v-717beaa0]{\n  padding:0.5rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.75rem;\n  line-height:1rem\n}\n\n/*purgecss end ignore*/',""]),c.locals={},e.exports=c},233:function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},234:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSJ3aGl0ZSI+CiAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xMCA2SDZhMiAyIDAgMDAtMiAydjEwYTIgMiAwIDAwMiAyaDEwYTIgMiAwIDAwMi0ydi00TTE0IDRoNm0wIDB2Nm0wLTZMMTAgMTQiIC8+Cjwvc3ZnPgo="},235:function(e,t,n){"use strict";n(228)},236:function(e,t,n){var o=n(68)((function(i){return i[1]}));o.push([e.i,"/*purgecss start ignore*/\n\n/*purgecss end ignore*/",""]),o.locals={},e.exports=o},365:function(e,t,n){"use strict";n.r(t);var o={},r=n(9),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Card",[n("div",{staticClass:"prefix"},[n("Lnk",{attrs:{href:"https://tailwindcss.com/docs/whitespace"}},[e._v("whitespace-")])],1),e._v(" "),n("div",{staticClass:"content grid 3xl:grid-cols-5 grid-cols-3 gap-2"},[n("div",[n("TwClass",{staticClass:"mb-1 w-max",attrs:{name:"whitespace-normal",tooltip:"white-space: normal"}},[e._v("normal")]),e._v(" "),n("div",{staticClass:"overflow-hidden h-28 w-36 bg-coolGray-700 px-0.5 font-sans text-xs whitespace-normal"},[e._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque asperiores ex porro dignissimos dolores eaque natus, consequuntur nulla saepe aspernatur in ipsa. Adipisci illo sapiente temporibus minima enim rem aspernatur.")])],1),e._v(" "),n("div",[n("TwClass",{staticClass:"mb-1 w-max",attrs:{name:"whitespace-nowrap",tooltip:"white-space: nowrap"}},[e._v("nowrap")]),e._v(" "),n("div",{staticClass:"overflow-hidden h-28 w-36 bg-coolGray-700 px-0.5 font-sans text-xs whitespace-nowrap"},[e._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque asperiores ex porro dignissimos dolores eaque natus, consequuntur nulla saepe aspernatur in ipsa. Adipisci illo sapiente temporibus minima enim rem aspernatur.")])],1),e._v(" "),n("div",[n("TwClass",{staticClass:"mb-1 w-max",attrs:{name:"whitespace-pre",tooltip:"white-space: pre"}},[e._v("pre")]),e._v(" "),n("div",{staticClass:"overflow-hidden h-28 w-36 bg-coolGray-700 px-0.5 font-sans text-xs whitespace-pre"},[e._v("Lorem ipsum dolor sit      amet consectetur\n\nadipisicing            elit.\n\nAtque asperiores    ex porro dignissimos dolores eaque natus, consequuntur nulla saepe aspernatur in ipsa.\n\nAdipisci illo sapiente temporibus minima enim rem aspernatur.")])],1),e._v(" "),n("div",[n("TwClass",{staticClass:"mb-1 w-max",attrs:{name:"whitespace-pre-line",tooltip:"white-space: pre-line"}},[e._v("pre-line")]),e._v(" "),n("div",{staticClass:"overflow-hidden h-28 w-36 bg-coolGray-700 px-0.5 font-sans text-xs whitespace-pre-line"},[e._v("Lorem ipsum dolor sit      amet consectetur\n\nadipisicing            elit.\n\nAtque asperiores    ex porro dignissimos dolores eaque natus, consequuntur nulla saepe aspernatur in ipsa.\n\nAdipisci illo sapiente temporibus minima enim rem aspernatur.")])],1),e._v(" "),n("div",[n("TwClass",{staticClass:"mb-1 w-max",attrs:{name:"whitespace-pre-wrap",tooltip:"white-space: pre-wrap"}},[e._v("pre-wrap")]),e._v(" "),n("div",{staticClass:"overflow-hidden h-28 w-36 bg-coolGray-700 px-0.5 font-sans text-xs whitespace-pre-wrap"},[e._v("Lorem ipsum dolor sit      amet consectetur\n\nadipisicing            elit.\n\nAtque asperiores    ex porro dignissimos dolores eaque natus, consequuntur nulla saepe aspernatur in ipsa.\n\nAdipisci illo sapiente temporibus minima enim rem aspernatur.")])],1)])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Lnk:n(168).default,TwClass:n(230).default,Card:n(229).default})}}]);