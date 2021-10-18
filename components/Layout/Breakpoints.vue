<template>
  <Card>
    <div class="text-base font-sans text-gray-400 pl-2">
      <Lnk href="https://tailwindcss.com/docs/breakpoints">Breakpoints</Lnk>
    </div>
    <div class="content">
      <div class="grid grid-cols-3 gap-2">
        <div class="content-row">
          <div class="w-max opacity-0">.</div>
          <div class="mt-1 font-sans text-sm">All sizes (default)</div>
        </div>
        <div class="content-row">
          <TwClass name="sm:" tooltip="" class="w-max">sm:</TwClass>
          <div class="mt-1 text-coolGray-300"><span class="text-cyan-400">@media</span> (<br>min-width: <span class="text-yellow-500">640px</span>) {...}</div>
        </div>
        <div class="content-row">
          <TwClass name="md:" tooltip="" class="w-max">md:</TwClass>
          <div class="mt-1 text-coolGray-300"><span class="text-cyan-400">@media</span> (<br>min-width: <span class="text-yellow-500">768px</span>) {...}</div>
        </div>
        <div class="content-row">
          <TwClass name="lg:" tooltip="" class="w-max">lg:</TwClass>
          <div class="mt-1 text-coolGray-300"><span class="text-cyan-400">@media</span> (<br>min-width: <span class="text-yellow-500">1024px</span>) {...}</div>
        </div>
        <div class="content-row">
          <TwClass name="xl:" tooltip="" class="w-max">xl:</TwClass>
          <div class="mt-1 text-coolGray-300"><span class="text-cyan-400">@media</span> (<br>min-width: <span class="text-yellow-500">1280px</span>) {...}</div>
        </div>
        <div class="content-row">
          <TwClass name="2xl:" tooltip="" class="w-max">2xl:</TwClass>
          <div class="mt-1 text-coolGray-300"><span class="text-cyan-400">@media</span> (<br>min-width: <span class="text-yellow-500">1536px</span>) {...}</div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.content {
  .content-row {
    @apply flex flex-col space-y-0.5;
  }
}
</style>
