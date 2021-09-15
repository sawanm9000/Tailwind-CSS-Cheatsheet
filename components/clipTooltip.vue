<template>
  <div ref="tooltip" class="fixed bg-gray-900 border-gray-500 border w-max px-2 py-1 rounded-md text-sm text-right font-mono z-50">
    <div v-if="toShow === 'class'">{{tooltipText}}</div>
    <div v-else>
      <span class="text-purple-500">{{tooltipTextCSS.prop}}</span> <span class="text-green-400">{{tooltipTextCSS.val}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tooltipText: '',
      tooltipTextCSS: {prop: '', val: ''},
      toShow: ''
    }
  },

  created() {
    this.$nuxt.$on('tooltipPos', this.moveTooltip);
    this.$nuxt.$on('toTooltip', this.setTooltipText);
    this.$nuxt.$on('mouseOnClass', this.setTooltipTextCSS);
  },

  methods: {
    moveTooltip(pos) {
      if (this.$refs.tooltip) {
        this.$refs.tooltip.style.left = 12 + pos[0] + 'px';
        this.$refs.tooltip.style.top = 10 + pos[1] + 'px';
      }
    },

    setTooltipText(text) {
      // this.tooltipText = '📋: ' + text;
      this.tooltipText = text;
      this.toShow = 'class';
    },

    setTooltipTextCSS(obj) {
      this.toShow = 'css';
      if (obj) {
        this.tooltipTextCSS.prop = obj.prop;
        this.tooltipTextCSS.val = obj.val;
      } else {
        this.tooltipTextCSS.prop = '';
        this.tooltipTextCSS.val = '';
      }
    },
  },
}
</script>
