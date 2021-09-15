<template>
  <Card>
    <div class="prefix"><Lnk href="https://tailwindcss.com/docs/grid-template-rows">grid-rows-</Lnk></div>
    <div class="content grid grid-cols-2 gap-x-2">
      <div>
        <div class="mb-1">1<span class="font-sans text-sm">,</span> 2<span class="font-sans text-sm">,</span> 3<span class="font-sans text-sm">,</span> 4<span class="font-sans text-sm">,</span> 5<span class="font-sans text-sm">,</span> 6</div>
        <div class="bg-gray-400 grid grid-cols-1 grid-rows-4 h-16 p-px gap-px w-11">
          <div class="bg-gray-800 row-start-1 col-start-1"></div>
          <div class="bg-gray-800 row-start-2 col-start-1"></div>
          <div class="bg-gray-800 row-start-3 col-start-1"></div>
          <div class="bg-gray-800 row-start-4 col-start-1"></div>
        </div>
      </div>
      <div>
        <TwClass name="grid-rows-none" tooltip="grid-template-rows: none" class="mb-1 w-max">none</TwClass>
        <div class="mb-3 whitespace-pre"><span class="text-purple-500">grid-template-rows:</span> &#10;<span class="text-green-400">none</span></div>
      </div>
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
