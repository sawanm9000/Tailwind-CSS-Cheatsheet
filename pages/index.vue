<template>
  <div class="min-h-full flex flex-col justify-between items-center">

    <AppBar :hide-hamburger-btn="true" />

    <!-- <input id="search" type="search" name="Search" placeholder="Search (Ctrl+K)" class="w-96 max-w-full px-3 py-2 m-3 bg-coolGray-600"> -->
    <!-- use this: https://github.com/krisk/Fuse -->

    <div class="flex items-center max-w-full px-2 pt-2 pb-10 md:py-10 3xl:py-24">
      <div class="w-full flex justify-center">
        <Nav button="yes" class="overflow-hidden" />
      </div>
    </div>

    <Footer :in-drawer="false" />

  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Tailwind CSS Cheatsheet (WIP)',
    }
  },

  mounted() {
    this.$nuxt.$emit('showDrawer');
  }
}
</script>

<style lang="scss" scoped>
.separator {
  @apply border-r border-coolGray-400;
}
</style>
