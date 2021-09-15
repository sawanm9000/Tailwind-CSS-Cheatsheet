<template>
  <div class="min-h-full h-full overflow-x-hidden">
    <Nuxt />
    <ClipTooltip :class="tooltip ? 'visible' : 'invisible'" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      routes: ['layout', 'layout2', 'typography', 'style', 'filters', 'transitions', 'interactivity'],
      mouseButtonDown: false,
      tooltip: false,
      now: 0,
      tooltipTimerRunning: false,
      mouseOnClass: false,
    }
  },

  created() {
    this.$nuxt.$on('toTooltip', this.showTooltipForClip);
    this.$nuxt.$on('mouseOnClass', this.showTooltipForClass);
  },

  mounted() {
    window.addEventListener('keydown', (e) => {
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
    });

    // Mouse
    document.addEventListener('mousedown', e => {
      if (e.button === 2 && this.$route.fullPath !== '/') {
        this.mouseButtonDown = true;
        setTimeout(() => {
          if (this.mouseButtonDown) {
            document.addEventListener('contextmenu', this.prevDef, false);
            this.goTo('/');
          }
        }, 400);
      }
    });

    document.addEventListener('mouseup', e => {
      if (e.button === 2) {
        this.mouseButtonDown = false;
        setTimeout(() => {
          document.removeEventListener('contextmenu', this.prevDef, false);
        }, 100);
      }
    })

    // Set tooltip position
    document.addEventListener('mousemove', this.setTooltipPos, false);
  },

  methods: {
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
  @apply bg-gray-900 text-white;
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
  scrollbar-width: thin;

  @apply p-1 text-gray-200 font-sans;
}

.text-box-small::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

.text-box-small::-webkit-scrollbar-track {
  @apply bg-white;
}

.text-box-small::-webkit-scrollbar-thumb {
  @apply bg-gray-500;
}
</style>
