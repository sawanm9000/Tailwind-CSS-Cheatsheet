<template>
  <Card>
    <div class="flex justify-between">
      <div class="prefix"><Lnk href="https://tailwindcss.com/docs/grid-auto-rows">auto-rows-</Lnk></div>
      <div class="font-sans text-gray-400 text-sm pr-2">Size of implicit grid</div>
    </div>
    <div class="content grid grid-cols-2 gap-2">
      <div>
        <TwClass name="auto-rows-auto" tooltip="grid-auto-rows: auto" class="mb-1 w-max">auto</TwClass>
        <!-- <div class="whitespace-pre"><span class="text-purple-500">grid-auto-rows:</span> &#10;<span class="text-green-400">auto</span></div> -->
        <div class="grid grid-cols-3 auto-rows-auto bg-gray-400 gap-px p-px">
          <div class="bg-green-600 m-0.5 row-start-1 rounded z-10 col-start-1 row-span-1 h-3"></div>
          <div class="bg-green-600 m-0.5 row-start-1 rounded z-10 col-start-2 row-span-1 h-3"></div>
          <div class="bg-green-600 m-0.5 row-start-1 rounded z-10 col-start-3 row-span-1 h-3"></div>
          <div class="m-0.5 row-start-2 col-start-1 row-span-1 flex gap-x-0.5">
            <div class="bg-green-600 rounded z-10 h-3 w-3"></div>
            <div class="bg-green-600 rounded z-10 h-3 w-3"></div>
          </div>
          <div class="m-0.5 row-start-2 col-start-2 row-span-1 flex flex-wrap gap-0.5">
            <div class="bg-green-600 rounded z-10 h-3 w-3"></div>
            <div class="bg-green-600 rounded z-10 h-3 w-3"></div>
            <div class="bg-green-600 rounded z-10 h-3 w-3"></div>
            <div class="bg-green-600 rounded z-10 h-3 w-3"></div>
          </div>
          <div class="m-0.5 row-start-2 col-start-3 row-span-1 flex gap-x-0.5">
            <div class="bg-green-600 rounded z-10 h-3 w-3"></div>
          </div>

          <div class="bg-gray-800 row-start-1 col-start-1"></div>
          <div class="bg-gray-800 row-start-1 col-start-2"></div>
          <div class="bg-gray-800 row-start-1 col-start-3"></div>
          <div class="bg-gray-800 row-start-2 col-start-1"></div>
          <div class="bg-gray-800 row-start-2 col-start-2"></div>
          <div class="bg-gray-800 row-start-2 col-start-3"></div>
        </div>
      </div>
      <div>
        <TwClass name="auto-rows-fr" tooltip="grid-auto-rows: minmax(0, 1fr)" class="mb-1 w-max">fr</TwClass>
        <div class="grid grid-cols-3 auto-rows-fr bg-gray-400 gap-px p-px">
          <div class="bg-green-600 m-0.5 row-start-1 rounded z-10 col-start-1 row-span-1 h-3"></div>
          <div class="bg-green-600 m-0.5 row-start-1 rounded z-10 col-start-2 row-span-1 h-3"></div>
          <div class="bg-green-600 m-0.5 row-start-1 rounded z-10 col-start-3 row-span-1 h-3"></div>
          <div class="m-0.5 row-start-2 col-start-1 row-span-1 flex gap-x-0.5">
            <div class="bg-green-600 rounded z-10 h-3 w-3"></div>
            <div class="bg-green-600 rounded z-10 h-3 w-3"></div>
          </div>
          <div class="m-0.5 row-start-2 col-start-2 row-span-1 flex flex-wrap gap-0.5">
            <div class="bg-green-600 rounded z-10 h-3 w-3"></div>
            <div class="bg-green-600 rounded z-10 h-3 w-3"></div>
            <div class="bg-green-600 rounded z-10 h-3 w-3"></div>
            <div class="bg-green-600 rounded z-10 h-3 w-3"></div>
          </div>
          <!-- <div class="m-0.5 row-start-2 col-start-3 row-span-1 flex gap-x-0.5">
            <div class="bg-green-600 rounded z-10 h-3 w-3"></div>
          </div> -->
          <div class="bg-green-600 rounded z-10 h-3 w-3 m-0.5 row-start-2 col-start-3"></div>

          <div class="bg-gray-800 row-start-1 col-start-1"></div>
          <div class="bg-gray-800 row-start-1 col-start-2"></div>
          <div class="bg-gray-800 row-start-1 col-start-3"></div>
          <div class="bg-gray-800 row-start-2 col-start-1"></div>
          <div class="bg-gray-800 row-start-2 col-start-2"></div>
          <div class="bg-gray-800 row-start-2 col-start-3"></div>
        </div>
      </div>
      <div>
        <TwClass name="auto-rows-min" tooltip="grid-auto-rows: min-content" class="mb-1 w-max">min</TwClass>
        <div class="whitespace-pre"><span class="text-purple-500">grid-auto-rows:</span> &#10;<span class="text-green-400">min-content</span></div>
      </div>
      <div>
        <TwClass name="auto-rows-max" tooltip="grid-auto-rows: max-content" class="mb-1 w-max">max</TwClass>
        <div class="whitespace-pre"><span class="text-purple-500">grid-auto-rows:</span> &#10;<span class="text-green-400">max-content</span></div>
      </div>
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
