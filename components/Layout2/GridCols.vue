<template>
  <Card>
    <div class="prefix"><Lnk href="https://tailwindcss.com/docs/grid-template-columns">grid-cols-</Lnk></div>
    <div class="content grid grid-cols-2 gap-x-2">
      <div>
        <div class="mb-1">1<span class="font-sans text-sm">,</span> 2<span class="font-sans text-sm">,</span> 3<span class="font-sans text-sm">...</span> 12</div>
        <div class="bg-coolGray-400 grid grid-cols-5 grid-rows-1 h-16 p-px gap-px w-24">
          <div class="bg-coolGray-800 row-start-1 col-start-1"></div>
          <div class="bg-coolGray-800 row-start-1 col-start-2"></div>
          <div class="bg-coolGray-800 row-start-1 col-start-3"></div>
          <div class="bg-coolGray-800 row-start-1 col-start-4"></div>
          <div class="bg-coolGray-800 row-start-1 col-start-5"></div>
        </div>
      </div>
      <div>
        <TwClass name="grid-cols-none" tooltip="grid-template-cols: none" class="mb-1 w-max">none</TwClass>
        <div class="mb-3 whitespace-pre"><span class="text-purple-500">grid-template-cols:</span> &#10;<span class="text-emerald-400">none</span></div>
      </div>
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
