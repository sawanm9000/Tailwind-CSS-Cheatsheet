<template>
  <Card>
    <div class="prefix"><Lnk href="https://tailwindcss.com/docs/grid-template-rows">grid-rows-</Lnk></div>
    <div class="content grid grid-cols-2 gap-x-2">
      <div>
        <div class="mb-1">1<span class="font-sans text-sm">,</span> 2<span class="font-sans text-sm">,</span> 3<span class="font-sans text-sm">,</span> 4<span class="font-sans text-sm">,</span> 5<span class="font-sans text-sm">,</span> 6</div>
        <div class="grid grid-cols-1 grid-rows-4 h-16 w-11 border border-coolGray-400 divide-y divide-coolGray-400">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div>
        <TwClass name="grid-rows-none" tooltip="grid-template-rows: none" class="mb-1 w-max">none</TwClass>
        <div class="mb-3 whitespace-pre"><span class="text-purple-500">grid-template-rows:</span> &#10;<span class="text-emerald-400">none</span></div>
      </div>
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
