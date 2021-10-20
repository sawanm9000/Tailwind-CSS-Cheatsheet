<template>
  <Card>
    <div class="prefix"><Lnk href="https://tailwindcss.com/docs/grid-template-columns">grid-cols-</Lnk></div>
    <div class="content grid grid-cols-2 gap-x-2">
      <div>
        <div class="mb-1">1<span class="font-sans text-sm">,</span> 2<span class="font-sans text-sm">,</span> 3<span class="font-sans text-sm">...</span> 12</div>
        <div class="grid grid-cols-5 grid-rows-1 h-16 w-24 border border-coolGray-400 divide-x divide-coolGray-400">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
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
