(window.webpackJsonp=window.webpackJsonp||[]).push([[108,6,104],{233:function(t,n,o){var content=o(238);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(74).default)("1bee20f6",content,!0,{sourceMap:!1})},234:function(t,n,o){var content=o(242);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(74).default)("62c7fa01",content,!0,{sourceMap:!1})},235:function(t,n,o){"use strict";o.r(n);var e={props:{theme:{type:String,default:"dark"}}},r=(o(237),o(11)),component=Object(r.a)(e,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{staticClass:"card rounded-md",class:"light"===t.theme?"bg-coolGray-200":"bg-coolGray-800"},[t._t("default")],2)}),[],!1,null,"717beaa0",null);n.default=component.exports},236:function(t,n,o){"use strict";o.r(n);var e=o(24),r=(o(22),o(174),o(128),o(175),{props:{name:{type:String,default:""},tooltip:{type:[String,Object],default:"",required:!1}},data:function(){return{cssPropNVal:[]}},methods:{toClipboard:function(text){navigator.clipboard.writeText(text),this.$nuxt.$emit("toTooltip",text)},setCss:function(t){if("object"===Object(e.a)(t))console.log(t.text,t.css);else{var n=t.split(" "),o=n.shift(),r=n.join(" ");this.cssPropNVal[0]=o,this.cssPropNVal[1]=r,t.endsWith(";")&&console.log("ends with ;"),this.$nuxt.$emit("mouseOnClass",{prop:o,val:r})}}}}),l=(o(241),o(11)),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{staticClass:"tw-class cursor-pointer",on:{click:function(n){return t.toClipboard(t.name)},mouseover:function(n){return t.setCss(t.tooltip)},mouseleave:function(n){return t.$nuxt.$emit("mouseOnClass",!1)}}},[t._t("default")],2)}),[],!1,null,"6ff0f84a",null);n.default=component.exports},237:function(t,n,o){"use strict";o(233)},238:function(t,n,o){var e=o(73),r=o(239),l=o(240),c=e((function(i){return i[1]})),m=r(l);c.push([t.i,'/*purgecss start ignore*/\n.card .title[data-v-717beaa0]{\n  position:relative;\n  margin-bottom:0.5rem;\n  width:-webkit-max-content;\n  width:-moz-max-content;\n  width:max-content;\n  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size:0.875rem;\n  line-height:1.25rem;\n  --tw-text-opacity:1;\n  color:rgba(156, 163, 175, var(--tw-text-opacity))\n}\n.card .title[data-v-717beaa0]:hover{\n  --tw-text-opacity:1;\n  color:rgba(229, 231, 235, var(--tw-text-opacity))\n}\n.card .title a[data-v-717beaa0]:after{\n  content:url('+m+');\n  width:1.25rem;\n  height:1.25rem;\n  position:absolute;\n  top:-1px;\n  right:-1.5rem;\n  padding-top:0px;\n  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size:1.125rem;\n  line-height:1.75rem;\n  font-weight:700;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  opacity:0\n}\n.card .prefix[data-v-717beaa0]{\n  position:relative;\n  width:-webkit-max-content;\n  width:-moz-max-content;\n  width:max-content;\n  white-space:pre;\n  border-top-left-radius:0.375rem;\n  border-bottom-right-radius:0.375rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(75, 85, 99, var(--tw-bg-opacity));\n  padding-left:0.375rem;\n  padding-right:0.375rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.875rem;\n  line-height:1.25rem\n}\n.card .prefix a[data-v-717beaa0]:after{\n  content:url('+m+');\n  width:1.25rem;\n  height:1.25rem;\n  position:absolute;\n  top:-1px;\n  right:-1.5rem;\n  padding-top:0px;\n  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size:1.125rem;\n  line-height:1.75rem;\n  font-weight:700;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  opacity:0\n}\n.card .prefix a[data-v-717beaa0]:hover:after, .card .title a[data-v-717beaa0]:hover:after{\n  opacity:1\n}\n.card .content[data-v-717beaa0]{\n  padding:0.5rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.75rem;\n  line-height:1rem\n}\n\n/*purgecss end ignore*/',""]),c.locals={},t.exports=c},239:function(t,n,o){"use strict";t.exports=function(t,n){return n||(n={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),n.hash&&(t+=n.hash),/["'() \t\n]/.test(t)||n.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},240:function(t,n){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSJ3aGl0ZSI+CiAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xMCA2SDZhMiAyIDAgMDAtMiAydjEwYTIgMiAwIDAwMiAyaDEwYTIgMiAwIDAwMi0ydi00TTE0IDRoNm0wIDB2Nm0wLTZMMTAgMTQiIC8+Cjwvc3ZnPgo="},241:function(t,n,o){"use strict";o(234)},242:function(t,n,o){var e=o(73)((function(i){return i[1]}));e.push([t.i,"/*purgecss start ignore*/\n\n/*purgecss end ignore*/",""]),e.locals={},t.exports=e},380:function(t,n,o){"use strict";o.r(n);var e={},r=o(11),component=Object(r.a)(e,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("Card",[o("div",{staticClass:"content"},[o("div",{staticClass:"title"},[o("Lnk",{attrs:{href:"https://tailwindcss.com/docs/font-variant-numeric"}},[t._v("Font variant numeric")])],1),t._v(" "),o("div",{staticClass:"grid grid-cols-2 gap-y-2"},[o("TwClass",{staticClass:"w-max",attrs:{name:"normal-nums",tooltip:"font-variant-numeric: normal"}},[t._v("normal-nums")]),t._v(" "),o("p",{staticClass:"font-sans text-sm normal-nums"},[t._v("1234567890")]),t._v(" "),o("TwClass",{staticClass:"w-max",attrs:{name:"ordinal",tooltip:"font-variant-numeric: ordinal"}},[t._v("ordinal")]),t._v(" "),o("p",{staticClass:"font-sans text-sm ordinal"},[t._v("1st")]),t._v(" "),o("TwClass",{staticClass:"w-max",attrs:{name:"slashed-zero",tooltip:"font-variant-numeric: slashed-zero"}},[t._v("slashed-zero")]),t._v(" "),o("p",{staticClass:"font-sans text-sm slashed-zero"},[t._v("0")]),t._v(" "),o("TwClass",{staticClass:"w-max",attrs:{name:"lining-nums",tooltip:"font-variant-numeric: lining-nums"}},[t._v("lining-nums")]),t._v(" "),o("p",{staticClass:"font-sans text-sm lining-nums"},[t._v("1234567890")]),t._v(" "),o("TwClass",{staticClass:"w-max",attrs:{name:"oldstyle-nums",tooltip:"font-variant-numeric: oldstyle-nums"}},[t._v("oldstyle-nums")]),t._v(" "),o("p",{staticClass:"font-sans text-sm oldstyle-nums"},[t._v("1234567890")]),t._v(" "),o("TwClass",{staticClass:"w-max",attrs:{name:"proportional-nums",tooltip:"font-variant-numeric: proportional-nums"}},[t._v("proportional-nums")]),t._v(" "),o("div",[o("p",{staticClass:"font-sans text-sm proportional-nums"},[t._v("121212")]),t._v(" "),o("p",{staticClass:"font-sans text-sm proportional-nums"},[t._v("909090")])]),t._v(" "),o("TwClass",{staticClass:"w-max",attrs:{name:"tabular-nums",tooltip:"font-variant-numeric: tabular-nums"}},[t._v("tabular-nums")]),t._v(" "),o("div",[o("p",{staticClass:"font-sans text-sm tabular-nums"},[t._v("121212")]),t._v(" "),o("p",{staticClass:"font-sans text-sm tabular-nums"},[t._v("909090")])]),t._v(" "),o("TwClass",{staticClass:"w-max",attrs:{name:"diagonal-fractions",tooltip:"font-variant-numeric: diagonal-fractions"}},[t._v("diagonal-fractions")]),t._v(" "),o("p",{staticClass:"font-sans text-sm diagonal-fractions"},[t._v("1/2 3/4 5/6")]),t._v(" "),o("TwClass",{staticClass:"w-max",attrs:{name:"stacked-fractions",tooltip:"font-variant-numeric: stacked-fractions"}},[t._v("stacked-fractions")]),t._v(" "),o("p",{staticClass:"font-sans text-sm stacked-fractions"},[t._v("1/2 3/4 5/6")])],1)])])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Lnk:o(173).default,TwClass:o(236).default,Card:o(235).default})}}]);