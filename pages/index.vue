<template>
  <div class="min-h-full flex flex-col justify-between items-center">

    <header class="w-full flex justify-center">
      <div class="flex justify-center container sm:justify-between p-4">
        <div class="flex gap-x-2 items-center">
          <img src="icon.png" alt="Logo" style="height: 32px; width: 32px;">
          <h1 class="text-2xl text-center font-bold">Tailwind CSS Cheatsheet (WIP)</h1>
        </div>
        <div class="hidden sm:flex gap-4">
          <!-- <div>Help</div> -->
          <Lnk href="https://tailwindcss.com/docs">Documentation</Lnk>
          <Lnk href="https://github.com/sawanm9000/Tailwind-CSS-Cheatsheet">GitHub</Lnk>
          <!-- <div class="separator"></div> -->
        </div>
      </div>
    </header>

    <!-- <input id="search" type="search" name="Search" placeholder="Search (Ctrl+K)" class="w-96 max-w-full px-3 py-2 m-3 bg-coolGray-600"> -->
    <!-- use this: https://github.com/krisk/Fuse -->

    <div class="flex items-center max-w-full px-2 py-10 3xl:py-24">
      <div class="w-full flex justify-center">
        <Nav button="yes" class="overflow-hidden" />
      </div>
    </div>

    <footer class="p-5 bg-black bg-opacity-50 text-coolGray-400 text-center text-sm w-full md:flex md:justify-center">
      <div class="container flex gap-x-3 justify-center md:justify-between text-center">
        <div class="text-left">
          <div class="inline">Created & maintained by <a href="https://sawanm9000.github.io" class="text-coolGray-100">Sawan M</a> - </div>
          <div id="donate" class="inline"><span class="w-max whitespace-nowrap"><a href="http://paypal.me/sawanm9000" class="text-red-600 font-medium">❤ Donate</a></span></div>
        </div>
        <div>Tailwind CSS v2.2</div>
        <div class="text-right">Tailwind CSS Cheatsheet is not affiliated with Tailwind Labs</div>
      </div>
    </footer>

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
