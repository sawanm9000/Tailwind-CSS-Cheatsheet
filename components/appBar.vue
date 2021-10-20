<template>
  <header class="w-full flex justify-center">
    <div class="flex justify-between w-full">

      <div class="relative flex-grow md:flex-grow-0 flex justify-center p-4">
        <div class="absolute top-0 left-0 h-4 flex justify-center md:hidden pt-6 px-6 pb-10" :class="hideHamburgerBtn === true ? 'hidden' : ''" @click="$nuxt.$emit('showDrawer', true)">
          <div class="hamburger-icon"></div>
        </div>

        <NuxtLink to="/" class="flex gap-x-2 items-center">
          <img src="icon.png" alt="Logo" style="height: 32px; width: 32px;">
          <h1 class="text-base md:text-2xl text-center font-bold">Tailwind CSS Cheatsheet<span class="hidden md:inline"> (WIP)</span></h1>
        </NuxtLink>
      </div>

      <div class="hidden md:flex md:items-center gap-4 p-4">
        <!-- <div>Help</div> -->
        <Lnk href="https://tailwindcss.com/docs">Documentation</Lnk>
        <Lnk href="https://github.com/sawanm9000/Tailwind-CSS-Cheatsheet">GitHub</Lnk>
        <!-- <div class="separator"></div> -->
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    props: {
      hideHamburgerBtn: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss" scoped>
.hamburger-icon {
  @apply relative w-5 h-px bg-white;

  &::before {
    content: '';
    @apply absolute top-0 left-0 w-full h-px bg-white mt-2;
  }

  &::after {
    content: '';
    @apply absolute top-0 left-0 w-full h-px bg-white mt-4;
  }
}
</style>
