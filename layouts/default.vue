<template>
  <div class="min-h-full h-full overflow-x-hidden relative">
    <Nuxt />

    <!-- SIDEBAR -->
    <div class="fixed md:absolute top-0 left-0 z-50 bg-coolGray-900 ring-2 ring-black ring-offset-0 ring-opacity-50 h-screen overflow-y-scroll md:overflow-hidden max-w-full" :class="drawer ? 'w-max' : 'w-1.5 opacity-0'" @mouseover="toggleDrawer(true)" @mouseleave="toggleDrawer(false)">
      <div class="h-full sm:w-max flex flex-col justify-between">
        <div>
          <NuxtLink to="/" class="flex gap-x-2 justify-center py-4 text-gray-200 hover:text-white">
            <img src="icon.png" alt="Logo" style="height: 32px; width: 32px;">
            <div class="text-xl font-semibold">Tailwind CSS Cheatsheet (WIP)</div>
          </NuxtLink>
          <Nav type="flat" />
        </div>
        <div class="p-3 flex flex-col">
          <div class="mb-4 flex flex-col gap-2">
            <Lnk href="https://tailwindcss.com/docs">Documentation</Lnk>
            <Lnk href="https://github.com/sawanm9000/Tailwind-CSS-Cheatsheet">GitHub</Lnk>
          </div>
          <div class="text-coolGray-400 text-sm">
            <div>Tailwind CSS v2.2</div>
            <div class="text-left">
              <div class="inline">Created & maintained by <a href="https://sawanm9000.github.io" class="text-coolGray-100">Sawan M</a> - </div>
              <div id="donate" class="inline"><span class="w-max whitespace-nowrap"><a href="http://paypal.me/sawanm9000" class="text-red-600 font-medium">❤ Donate</a></span></div>
            </div>
            <div>Tailwind CSS Cheatsheet is not affiliated with Tailwind Labs</div>
          </div>
        </div>
      </div>
    </div>
    <ClipTooltip :class="tooltip ? 'visible' : 'invisible'" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      routes: ['layout', 'layout2', 'typography', 'style', 'filters', 'transform', 'interactivity'],
      mouseButtonDown: false,
      tooltip: false,
      now: 0,
      tooltipTimerRunning: false,
      mouseOnClass: false,
      drawer: false,
    }
  },

  watch: {
    $route() {
      this.drawer = false;
      this.tooltip = false;
    }
  },

  created() {
    this.$nuxt.$on('toTooltip', this.showTooltipForClip);
    this.$nuxt.$on('mouseOnClass', this.showTooltipForClass);
    this.$nuxt.$on('showDrawer', this.toggleDrawer);
  },

  mounted() {
    window.addEventListener('keydown', this.keyNavigation);
    document.addEventListener('mousedown', this.rightMouseBack);
    document.addEventListener('mouseup', this.cancelRightMouseBack)
    document.addEventListener('mousemove', this.setTooltipPos, false);
  },

  beforeDestroy() {
    document.removeEventListener('keydown', this.keyNavigation);
    document.removeEventListener('mousedown', this.rightMouseBack);
    document.removeEventListener('mouseup', this.cancelRightMouseBack);
    document.removeEventListener('mousemove', this.setTooltipPos);
  },

  methods: {
    toggleDrawer(toggle) {
      if (toggle && this.$route.fullPath !== '/') {
        this.drawer = true;
      } else {
        this.drawer = false;
      }
    },

    keyNavigation(e) {
      // Search hotkey
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        console.log('Search feature is coming soon!');
        this.$nuxt.$emit('toTooltip', 'Coming soon!');
      };

      // Keyboard navigation
      if (e.code === 'Escape' || e.code === 'Backspace') this.goTo('/');
      if (e.code === 'Digit1' || e.code === "Numpad1") this.goTo(this.routes[0]);
      if (e.code === 'Digit2' || e.code === "Numpad2") this.goTo(this.routes[1]);
      if (e.code === 'Digit3' || e.code === "Numpad3") this.goTo(this.routes[2]);
      if (e.code === 'Digit4' || e.code === "Numpad4") this.goTo(this.routes[3]);
      if (e.code === 'Digit5' || e.code === "Numpad5") this.goTo(this.routes[4]);
      if (e.code === 'Digit6' || e.code === "Numpad6") this.goTo(this.routes[5]);
      if (e.code === 'Digit7' || e.code === "Numpad7") this.goTo(this.routes[6]);
      if ((e.code === 'ArrowLeft' || e.code === 'ArrowUp') && this.$route.fullPath !== '/') {
        if (this.$route.name !== this.routes[0]) {
          this.goTo(this.routes[this.routes.indexOf(this.$route.name) - 1]);
        }
      }
      if ((e.code === 'ArrowRight' || e.code === 'ArrowDown') && this.$route.fullPath !== '/') {
        if (this.$route.name !== this.routes[this.routes.length - 1]) {
          this.goTo(this.routes[this.routes.indexOf(this.$route.name) + 1]);
        }
      }
    },

    rightMouseBack(e) {
      if (e.button === 2 && this.$route.fullPath !== '/') {
        this.mouseButtonDown = true;
        setTimeout(() => {
          if (this.mouseButtonDown) {
            document.addEventListener('contextmenu', this.prevDef, false);
            this.goTo('/');
          }
        }, 400);
      }
    },

    cancelRightMouseBack(e) {
      if (e.button === 2) {
        this.mouseButtonDown = false;
        setTimeout(() => {
          document.removeEventListener('contextmenu', this.prevDef, false);
        }, 100);
      }
    },

    goTo(path) {
      if (path !== this.$route.name) {

        if (this.$route.fullPath !== '/') {
          if (path === '/') {
            if (window.history.length > 1) {
              // this.$router.back();
              this.$router.replace(path);
            } else {
              this.$router.push(path);
            }
          } else {
            this.$router.replace(path);
          }
        } else {
          this.$router.push(path);
        }

        this.$nuxt.$emit('mouseOnClass', false);
      }
    },

    setTooltipPos(e) {
      this.$nuxt.$emit('tooltipPos', [e.clientX, e.clientY]);
		},

    showTooltipForClip() {
      this.tooltip = true;

      const now = new Date();
      this.now = now.getTime();

      const that = this;

      function timer() {
        that.tooltipTimerRunning = true;
        const now2 = new Date();

        if (now2.getTime() >= that.now + 2000) {
          window.clearInterval(checkTime);
          that.tooltip = false;
          that.tooltipTimerRunning = false;
        }
      }

      const checkTime = window.setInterval(timer, 100);

      if (this.tooltipTimerRunning) {
        window.clearInterval(checkTime);
      }
    },

    showTooltipForClass(obj) {
      if (obj.prop) {
        this.mouseOnClass = true;
        setTimeout(() => {
          if (this.mouseOnClass) {
            this.tooltip = true;
          }
        }, 600);
      } else {
        this.mouseOnClass = false;
        this.tooltip = false;
      }
    },

    prevDef(e) {
      e.preventDefault();
    }
  },
}
</script>

<style lang="scss">
html,
body {
  @apply bg-coolGray-900 text-white;
}

body > * {
  @apply h-screen;
}

#__layout {
  @apply h-full;
}

.nuxt-link-exact-active {
  @apply bg-blue-900;
}

.text-box-small {
  font-size: 0.5rem;
  line-height: 1;

  @apply p-1 text-coolGray-200 font-sans;
}

.scroll-box {
  scrollbar-width: thin;
}

.scroll-box::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

.scroll-box::-webkit-scrollbar-track {
  @apply bg-white;
}

.scroll-box::-webkit-scrollbar-thumb {
  @apply bg-coolGray-500;
}
</style>
