<template>
  <div class="nav flex flex-col w-max max-w-full" :class="type === 'button' ? 'button gap-y-2' : type === 'flat' ? 'divide-y divide-white divide-opacity-20' : ''">
    <div class="nav-button cursor-pointer" @click="goTo('layout')">
      <div>1. Layout</div>
      <div>Box size, positioning, margin, overflow, and over scroll</div>
    </div>
    <div class="nav-button cursor-pointer" @click="goTo('layout2')">
      <div>2. Layout 2</div>
      <div>Flexbox and CSS Grid</div>
    </div>
    <div class="nav-button cursor-pointer" @click="goTo('typography')">
        <div>3. Typography</div>
        <div>Text, font, leading, whitespace</div>
    </div>
    <div class="nav-button cursor-pointer" @click="goTo('style')">
      <div>4. Style</div>
      <div>Color, background color, border, object, shadow</div>
    </div>
    <div class="nav-button cursor-pointer" @click="goTo('filters')">
      <div>5. Filters</div>
      <div>Filters and color blend</div>
    </div>
    <div class="nav-button cursor-pointer" @click="goTo('transform')">
      <div>6. Transform</div>
      <div>Transform, animation and transition</div>
    </div>
    <div class="nav-button cursor-pointer" @click="goTo('interactivity')">
      <div>7. Interactivity</div>
      <div>Forms, pseudo classes and accessibility</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'button'
    }
  },

  methods: {
    goTo(path) {
      if (this.$route.fullPath !== '/' + path) {
        if (this.$route.fullPath === '/') {
          this.$router.push(path);
        }
        else {
          this.$router.replace(path);
        }
      }
    }
  }
}

</script>

<style lang="scss" scoped>
.nav-button {
	@apply flex-1 h-24 px-3 py-2;

  div:first-child {
    @apply text-xl text-coolGray-200 font-semibold mb-1 whitespace-nowrap;
  }

  div:nth-child(2) {
    @apply text-coolGray-400;
  }
}

.nav-button:hover {
  @apply backdrop-filter backdrop-brightness-200;

  div:first-child {
    @apply text-white;
  }

  div:nth-child(2) {
    @apply text-coolGray-300;
  }
}

.button {
  .nav-button {
    @apply border-2 border-opacity-20 rounded-md backdrop-filter backdrop-brightness-150;
  }

  .nav-button:hover {
    @apply border-opacity-30 backdrop-brightness-200;
  }
}
</style>
