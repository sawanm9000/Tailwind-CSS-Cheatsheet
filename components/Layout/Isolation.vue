<template>
  <Card>
    <div class="content">
      <div class="title mb-3">
        <Lnk href="https://tailwindcss.com/docs/isolation">Isolation</Lnk>
      </div>
      <div class="mb-1">
        <TwClass name="isolate" tooltip="isolation: isolate">isolate</TwClass>
      </div>
      <!-- <div class="relative h-12">
        <div class="bg-blue-600 w-16 h-10 absolute rounded-lg shadow-lg z-10"></div>
        <div class="bg-yellow-600 w-16 h-10 absolute rounded-lg shadow-lg left-12 z-50"></div>
        <div class="bg-emerald-600 w-16 h-10 absolute rounded-lg shadow-lg left-24 z-20"></div>
      </div> -->
      <div class="mb-1.5"><span class="text-purple-500">isolation:</span> <span class="text-emerald-400">isolate</span></div>
      <div class="text-coolGray-400 font-sans mb-5 text-sm">Creates a new stacking context</div>
      <div class="mb-1">
        <TwClass name="isolation-auto" tooltip="isolation: auto">isolation-auto</TwClass>
      </div>
      <div class="mb-3"><span class="text-purple-500">isolation:</span> <span class="text-emerald-400">auto</span></div>
    </div>
  </Card>
</template>

<script>
export default {}
</script>
