(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{123:function(t,o,e){"use strict";e.r(o);var n=e(13),component=Object(n.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("img",{staticClass:"w-full object-cover",attrs:{src:"jordan-whitt-EerxztHCjM8-unsplash-640.jpg"}})}),[],!1,null,null,null);o.default=component.exports;installComponents(component,{Img:e(123).default})},158:function(t,o,e){var content=e(219);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(69).default)("438e1f7c",content,!0,{sourceMap:!1})},159:function(t,o,e){var content=e(221);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(69).default)("40fbde71",content,!0,{sourceMap:!1})},166:function(t,o,e){"use strict";e(24),e(41),e(40),e(67);var n={data:function(){return{routes:["layout","layout2","typography","style","filters","transitions","interactivity"],mouseButtonDown:!1,tooltip:!1,now:0,tooltipTimerRunning:!1,mouseOnClass:!1,drawer:!1}},watch:{$route:function(){this.drawer=!1}},created:function(){this.$nuxt.$on("toTooltip",this.showTooltipForClip),this.$nuxt.$on("mouseOnClass",this.showTooltipForClass),this.$nuxt.$on("showDrawer",this.toggleDrawer)},mounted:function(){window.addEventListener("keydown",this.keyNavigation),document.addEventListener("mousedown",this.rightMouseBack),document.addEventListener("mouseup",this.cancelRightMouseBack),document.addEventListener("mousemove",this.setTooltipPos,!1)},beforeDestroy:function(){document.removeEventListener("keydown",this.keyNavigation),document.removeEventListener("mousedown",this.rightMouseBack),document.removeEventListener("mouseup",this.cancelRightMouseBack),document.removeEventListener("mousemove",this.setTooltipPos)},methods:{toggleDrawer:function(t){t&&"/"!==this.$route.fullPath?this.drawer=!0:this.drawer=!1},keyNavigation:function(t){t.ctrlKey&&"k"===t.key&&(t.preventDefault(),console.log("Search feature is coming soon!"),this.$nuxt.$emit("toTooltip","Coming soon!")),"Escape"!==t.code&&"Backspace"!==t.code||this.goTo("/"),"Digit1"!==t.code&&"Numpad1"!==t.code||this.goTo(this.routes[0]),"Digit2"!==t.code&&"Numpad2"!==t.code||this.goTo(this.routes[1]),"Digit3"!==t.code&&"Numpad3"!==t.code||this.goTo(this.routes[2]),"Digit4"!==t.code&&"Numpad4"!==t.code||this.goTo(this.routes[3]),"Digit5"!==t.code&&"Numpad5"!==t.code||this.goTo(this.routes[4]),"Digit6"!==t.code&&"Numpad6"!==t.code||this.goTo(this.routes[5]),"Digit7"!==t.code&&"Numpad7"!==t.code||this.goTo(this.routes[6]),"ArrowLeft"!==t.code&&"ArrowUp"!==t.code||"/"===this.$route.fullPath||this.$route.name!==this.routes[0]&&this.goTo(this.routes[this.routes.indexOf(this.$route.name)-1]),"ArrowRight"!==t.code&&"ArrowDown"!==t.code||"/"===this.$route.fullPath||this.$route.name!==this.routes[this.routes.length-1]&&this.goTo(this.routes[this.routes.indexOf(this.$route.name)+1])},rightMouseBack:function(t){var o=this;2===t.button&&"/"!==this.$route.fullPath&&(this.mouseButtonDown=!0,setTimeout((function(){o.mouseButtonDown&&(document.addEventListener("contextmenu",o.prevDef,!1),o.goTo("/"))}),400))},cancelRightMouseBack:function(t){var o=this;2===t.button&&(this.mouseButtonDown=!1,setTimeout((function(){document.removeEventListener("contextmenu",o.prevDef,!1)}),100))},goTo:function(path){path!==this.$route.name&&("/"!==this.$route.fullPath?"/"===path?window.history.length>1?this.$router.replace(path):this.$router.push(path):this.$router.replace(path):this.$router.push(path),this.$nuxt.$emit("mouseOnClass",!1))},setTooltipPos:function(t){this.$nuxt.$emit("tooltipPos",[t.clientX,t.clientY])},showTooltipForClip:function(){this.tooltip=!0;var t=new Date;this.now=t.getTime();var o=this;var e=window.setInterval((function(){o.tooltipTimerRunning=!0,(new Date).getTime()>=o.now+2e3&&(window.clearInterval(e),o.tooltip=!1,o.tooltipTimerRunning=!1)}),100);this.tooltipTimerRunning&&window.clearInterval(e)},showTooltipForClass:function(t){var o=this;t.prop?(this.mouseOnClass=!0,setTimeout((function(){o.mouseOnClass&&(o.tooltip=!0)}),600)):(this.mouseOnClass=!1,this.tooltip=!1)},prevDef:function(t){t.preventDefault()}}},r=(e(218),e(13)),component=Object(r.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"min-h-full h-full overflow-x-hidden relative"},[e("Nuxt"),t._v(" "),e("div",{staticClass:"fixed md:absolute top-0 left-0 z-50 bg-coolGray-900 ring-2 ring-black ring-offset-0 ring-opacity-50 h-screen overflow-y-scroll md:overflow-hidden flex flex-col justify-between max-w-full",class:t.drawer?"w-max":"w-0.5 z-0 opacity-0",on:{mouseenter:function(o){return t.toggleDrawer(!0)},mouseleave:function(o){return t.toggleDrawer(!1)}}},[e("div",[e("NuxtLink",{staticClass:"flex gap-x-2 justify-center py-4",attrs:{to:"/"}},[e("img",{staticStyle:{height:"32px",width:"32px"},attrs:{src:"icon.png",alt:"Logo"}}),t._v(" "),e("div",{staticClass:"text-xl font-semibold"},[t._v("Tailwind CSS Cheatsheet (WIP)")])]),t._v(" "),e("Nav")],1),t._v(" "),e("div",{staticClass:"p-3 flex flex-col"},[e("div",{staticClass:"mb-4 flex flex-col gap-2"},[e("Lnk",{attrs:{href:"https://tailwindcss.com/docs"}},[t._v("Documentation")]),t._v(" "),e("Lnk",{attrs:{href:"https://github.com/sawanm9000/Tailwind-CSS-Cheatsheet"}},[t._v("GitHub")])],1),t._v(" "),t._m(0)])]),t._v(" "),e("ClipTooltip",{class:t.tooltip?"visible":"invisible"})],1)}),[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"text-coolGray-400 text-sm"},[e("div",[t._v("Optimized for 1080p displays")]),t._v(" "),e("div",[t._v("Tailwind CSS v2.1")]),t._v(" "),e("div",[t._v("Tailwind CSS Cheat Sheet is not affiliated with Tailwind Labs")])])}],!1,null,null,null);o.a=component.exports;installComponents(component,{Img:e(123).default,Nav:e(170).default,Lnk:e(167).default,ClipTooltip:e(224).default})},167:function(t,o,e){"use strict";e.r(o);var n={props:{href:{type:String,default:"#"}}},r=e(13),component=Object(r.a)(n,(function(){var t=this,o=t.$createElement;return(t._self._c||o)("a",{attrs:{href:t.href,target:"_blank",rel:"noreferrer noopener"}},[t._t("default")],2)}),[],!1,null,null,null);o.default=component.exports},170:function(t,o,e){"use strict";e.r(o);var n={},r=(e(220),e(13)),component=Object(r.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"flex flex-col w-max max-w-full divide-y divide-white divide-opacity-30"},[e("NuxtLink",{staticClass:"nav-button",attrs:{to:"/layout"}},[e("div",[t._v("1. Layout")]),t._v(" "),e("div",[t._v("Box size, positioning, margin, overflow, and over scroll")])]),t._v(" "),e("NuxtLink",{staticClass:"nav-button",attrs:{to:"/layout2"}},[e("div",[t._v("2. Layout 2")]),t._v(" "),e("div",[t._v("Flexbox and CSS Grid")])]),t._v(" "),e("NuxtLink",{staticClass:"nav-button",attrs:{to:"/typography"}},[e("div",[t._v("3. Typography")]),t._v(" "),e("div",[t._v("Text, font, leading, whitespace")])]),t._v(" "),e("NuxtLink",{staticClass:"nav-button",attrs:{to:"/style"}},[e("div",[t._v("4. Style")]),t._v(" "),e("div",[t._v("Color, background color, border, object, shadow")])]),t._v(" "),e("NuxtLink",{staticClass:"nav-button",attrs:{to:"/filters"}},[e("div",[t._v("5. Filters")]),t._v(" "),e("div",[t._v("Filters and color blend")])]),t._v(" "),e("NuxtLink",{staticClass:"nav-button",attrs:{to:"/transitions"}},[e("div",[t._v("6. Transition")]),t._v(" "),e("div",[t._v("Transition, animation and transform")])]),t._v(" "),e("NuxtLink",{staticClass:"nav-button",attrs:{to:"/interactivity"}},[e("div",[t._v("7. Interactivity")]),t._v(" "),e("div",[t._v("Forms, pseudo classes and accessibility")])])],1)}),[],!1,null,"c60538d0",null);o.default=component.exports},171:function(t,o,e){e(172),t.exports=e(173)},218:function(t,o,e){"use strict";e(158)},219:function(t,o,e){var n=e(68)((function(i){return i[1]}));n.push([t.i,'/*purgecss start ignore*/\nbody, html{\n  --tw-bg-opacity:1;\n  background-color:rgba(17, 24, 39, var(--tw-bg-opacity));\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity))\n}\nbody>*{\n  height:100vh\n}\n#__layout{\n  height:100%\n}\n.text-box-small{\n  font-size:.5rem;\n  line-height:1;\n  padding:0.25rem;\n  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  --tw-text-opacity:1;\n  color:rgba(229, 231, 235, var(--tw-text-opacity))\n}\n.scroll-box{\n  scrollbar-width:thin\n}\n.scroll-box::-webkit-scrollbar{\n  width:10px;\n  height:10px\n}\n.scroll-box::-webkit-scrollbar-track{\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 255, 255, var(--tw-bg-opacity))\n}\n.scroll-box::-webkit-scrollbar-thumb{\n  --tw-bg-opacity:1;\n  background-color:rgba(107, 114, 128, var(--tw-bg-opacity))\n}\n\n/*purgecss end ignore*/',""]),n.locals={},t.exports=n},220:function(t,o,e){"use strict";e(159)},221:function(t,o,e){var n=e(68)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\n.nav-button[data-v-c60538d0]{\n  height:6rem;\n  flex:1 1 0%\n}\n.nav-button[data-v-c60538d0]:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(55, 65, 81, var(--tw-bg-opacity))\n}\n.nav-button[data-v-c60538d0]{\n  padding-left:0.75rem;\n  padding-right:0.75rem;\n  padding-top:0.5rem;\n  padding-bottom:0.5rem\n}\n.nav-button div[data-v-c60538d0]:first-child{\n  margin-bottom:0.375rem;\n  white-space:nowrap;\n  font-size:1.125rem;\n  line-height:1.75rem;\n  font-weight:600;\n  --tw-text-opacity:1;\n  color:rgba(229, 231, 235, var(--tw-text-opacity))\n}\n.nav-button div[data-v-c60538d0]:nth-child(2){\n  --tw-text-opacity:1;\n  color:rgba(156, 163, 175, var(--tw-text-opacity))\n}\n.nav-button:hover div[data-v-c60538d0]:first-child{\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity))\n}\n.nav-button:hover div[data-v-c60538d0]:nth-child(2){\n  --tw-text-opacity:1;\n  color:rgba(209, 213, 219, var(--tw-text-opacity))\n}\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},224:function(t,o,e){"use strict";e.r(o);var n={data:function(){return{tooltipText:"",tooltipTextCSS:{prop:"",val:""},toShow:""}},created:function(){this.$nuxt.$on("tooltipPos",this.moveTooltip),this.$nuxt.$on("toTooltip",this.setTooltipText),this.$nuxt.$on("mouseOnClass",this.setTooltipTextCSS)},methods:{moveTooltip:function(t){this.$refs.tooltip&&(this.$refs.tooltip.style.left=12+t[0]+"px",this.$refs.tooltip.style.top=10+t[1]+"px")},setTooltipText:function(text){this.tooltipText=text,this.toShow="class"},setTooltipTextCSS:function(t){this.toShow="css",t?(this.tooltipTextCSS.prop=t.prop,this.tooltipTextCSS.val=t.val):(this.tooltipTextCSS.prop="",this.tooltipTextCSS.val="")}}},r=e(13),component=Object(r.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{ref:"tooltip",staticClass:"fixed bg-coolGray-900 border-coolGray-500 border w-max px-2 py-1 rounded-md text-sm text-right font-mono z-50"},["class"===t.toShow?e("div",[t._v(t._s(t.tooltipText))]):e("div",[e("span",{staticClass:"text-purple-500"},[t._v(t._s(t.tooltipTextCSS.prop))]),t._v(" "),e("span",{staticClass:"text-emerald-400"},[t._v(t._s(t.tooltipTextCSS.val))])])])}),[],!1,null,null,null);o.default=component.exports},34:function(t,o,e){"use strict";var n={props:["error"]},r=e(13),component=Object(r.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"w-screen h-screen flex justify-center items-center overflow-hidden"},[e("div",{staticClass:"text-center space-y-5"},[404===t.error.statusCode?e("h1",{staticClass:"text-5xl font-bold"},[t._v("Page not found")]):e("h1",{staticClass:"text-5xl"},[t._v("An error occurred")]),t._v(" "),e("div",[e("NuxtLink",{staticClass:"text-blue-400",attrs:{to:"/"}},[t._v("← Home page")])],1)])])}),[],!1,null,null,null);o.a=component.exports}},[[171,111,2,112]]]);