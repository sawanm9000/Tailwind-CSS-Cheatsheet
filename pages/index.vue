<template>
  <div class="min-h-full flex flex-col justify-center">
    <header class="w-full max-w-screen-xl fixed top-0 -inset-x-0 mx-auto">
      <div class="flex justify-center sm:justify-between p-4">
        <div class="flex gap-x-2">
          <img src="icon.png" alt="Logo" style="height: 32px; width: 32px;">
          <h1 class="text-2xl text-center font-bold">Tailwind CSS Cheat Sheet (WIP)</h1>
        </div>
        <div class="hidden sm:flex gap-4">
          <!-- <div>Help</div> -->
          <Lnk href="https://tailwindcss.com/docs">Documentation</Lnk>
          <Lnk href="https://github.com/utopianknight/Tailwind-CSS-Cheatsheet">GitHub</Lnk>
          <!-- <div class="separator"></div> -->
        </div>
      </div>
    </header>
    <div class="w-full sm:flex sm:justify-center sm:items-center">
      <Nav />
    </div>
    <footer class="sm:fixed sm:bottom-0 p-5 text-center text-gray-400 text-sm justify-between w-full flex">
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
}
</script>

<style lang="scss" scoped>
.separator {
  @apply border-r border-gray-400;
}
</style>
