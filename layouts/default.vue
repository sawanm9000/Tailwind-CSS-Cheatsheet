<template>
  <div class="min-h-full h-full overflow-x-hidden relative">
    <Nuxt />

    <!-- DRAWER -->
    <div class="fixed md:absolute top-0 left-0 z-50 bg-coolGray-900 ring-2 ring-black ring-offset-0 ring-opacity-50 h-screen overflow-y-scroll md:overflow-hidden max-w-full transition-all duration-100 ease-out" :class="drawer ? 'w-96' : 'w-1.5 opacity-0'" @mouseover="toggleDrawer(true)" @mouseleave="toggleDrawer(false)">
      <div class="h-full w-screen sm:w-96 flex flex-col justify-between">
        <div class="mb-4">
          <NuxtLink to="/" class="flex gap-x-2 px-3 py-4 text-gray-200 hover:text-white">
            <img src="icon.png" alt="Logo" style="height: 32px; width: 32px;">
            <div class="text-xl font-semibold">Tailwind CSS Cheatsheet (WIP)</div>
          </NuxtLink>
          <Nav type="flat" />
        </div>
        <div class="p-3 flex flex-col">
          <div class="mb-4 3xl:flex flex-col gap-2 hidden">
            <Lnk href="https://tailwindcss.com/docs">Documentation</Lnk>
            <Lnk href="https://github.com/sawanm9000/Tailwind-CSS-Cheatsheet">GitHub</Lnk>
          </div>
          <Footer :in-drawer="true" />
        </div>
      </div>
    </div>

    <ClipTooltip :class="tooltip ? 'visible' : 'invisible'" />
    <div v-if="popup" class="fixed hidden sm:flex 3xl:hidden top-0 left-0 w-full h-full z-50 justify-center items-center bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm">
      <div class="w-max leading-relaxed p-6 bg-coolGray-900 rounded-lg">
        <div class="mb-5">Unfortunately, Tailwind CSS Cheatsheet is not optimized for your screen size.</div>
        <div>Here's what you can try:</div>
        <ul>
          <li>Maximize this window</li>
          <li>Zoom out</li>
          <li>Resize this window to make it narrower</li>
          <li>Continue anyway for a subpar experience</li>
        </ul>
        <div class="flex justify-center mt-7">
          <button class="bg-blue-600 hover:bg-blue-500 text-white py-2 px-3 uppercase font-medium text-sm tracking-wider" @click="togglePopup()">Continue anyway</button>
        </div>
      </div>
    </div>
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
      popup: true
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
    togglePopup() {

      this.popup = !this.popup;
    },

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
