<template>
  <div class="min-h-full flex flex-col justify-between items-center">

    <header class="w-full flex justify-center">
      <div class="flex justify-center container max-w-screen-xl sm:justify-between p-4">
        <div class="flex gap-x-2 items-center">
          <img src="icon.png" alt="Logo" style="height: 32px; width: 32px;">
          <h1 class="text-2xl text-center font-bold">Tailwind CSS Cheat Sheet (WIP)</h1>
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

    <div class="flex items-center max-w-full">
      <div class="w-full flex justify-center">
        <Nav class="border-t border-b-4 border-l border-r border-opacity-30 rounded overflow-hidden bg-coolGray-800" />
      </div>
    </div>

    <footer class="p-5 text-center text-coolGray-400 text-sm w-full md:flex md:justify-between">
      <div>Optimized for 1080p displays</div>
      <div>Tailwind CSS v2.1</div>
      <div>Tailwind CSS Cheat Sheet is not affiliated with Tailwind Labs</div>
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
