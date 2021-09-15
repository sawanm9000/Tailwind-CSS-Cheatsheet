<template>
  <div
    class="tw-class cursor-pointer"
    @click="toClipboard(name)"
    @mouseover="setCss(tooltip)"
    @mouseleave="$nuxt.$emit('mouseOnClass', false)"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    tooltip: {
      type: [String, Object],
      default: '',
      required: false
    },
  },

  data() {
    return {
      cssPropNVal: []
    }
  },

  methods: {
    toClipboard(text) {
      navigator.clipboard.writeText(text)
      this.$nuxt.$emit('toTooltip', text)
    },
    setCss(cssPropNVal) {
      if (typeof cssPropNVal === 'object') {
        console.log(cssPropNVal.text, cssPropNVal.css);
      } else {
        const arr = cssPropNVal.split(' ');
        const prop = arr.shift();
        const val = arr.join(' ');
        this.cssPropNVal[0] = prop;
        this.cssPropNVal[1] = val;
        if (cssPropNVal.endsWith(';')) {
          console.log('ends with ;');
        }
        this.$nuxt.$emit('mouseOnClass', { prop, val });
      }

    }
  },
}
</script>

<style lang="scss" scoped>
.tw-class {
  // &::after {
  //   content: '📋';

  //   @apply opacity-0 absolute;
  // }

  // &:hover::after {
  //   @apply opacity-100;
  // }
}
</style>
