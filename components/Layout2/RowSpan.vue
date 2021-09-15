<template>
  <Card>
    <div class="prefix"><Lnk href="https://tailwindcss.com/docs/grid-row">row-span-</Lnk></div>
    <div class="content">
      <div class="flex flex-col">
        <div class="flex mb-1">
          <TwClass name="row-span-1" tooltip="grid-row: span 1 / span 1" class="flex-1 text-center w-5">1</TwClass>
          <TwClass name="row-span-2" tooltip="grid-row: span 2 / span 2" class="flex-1 text-center w-5">2</TwClass>
          <TwClass name="row-span-3" tooltip="grid-row: span 3 / span 3" class="flex-1 text-center w-5">3</TwClass>
          <TwClass name="row-span-4" tooltip="grid-row: span 4 / span 4" class="flex-1 text-center w-5">4</TwClass>
          <TwClass name="row-span-5" tooltip="grid-row: span 5 / span 5" class="flex-1 text-center w-5">5</TwClass>
          <TwClass name="row-span-6" tooltip="grid-row: span 6 / span 6" class="flex-1 text-center w-5">6</TwClass>
        </div>
        <div class="grid grid-cols-6 grid-rows-6 bg-gray-400 gap-px p-px">
          <div class="bg-green-600 m-0.5 row-start-1 rounded z-10 col-start-1 row-span-1"></div>
          <div class="bg-gray-800 h-4 row-start-1 col-start-1"></div>
          <div class="bg-gray-800 h-4 row-start-1 col-start-2"></div>
          <div class="bg-gray-800 h-4 row-start-1 col-start-3"></div>
          <div class="bg-gray-800 h-4 row-start-1 col-start-4"></div>
          <div class="bg-gray-800 h-4 row-start-1 col-start-5"></div>
          <div class="bg-gray-800 h-4 row-start-1 col-start-6"></div>

          <div class="bg-green-600 m-0.5 row-start-1 rounded z-10 col-start-2 row-span-2"></div>
          <div class="bg-gray-800 h-4 row-start-2 col-start-1"></div>
          <div class="bg-gray-800 h-4 row-start-2 col-start-2"></div>
          <div class="bg-gray-800 h-4 row-start-2 col-start-3"></div>
          <div class="bg-gray-800 h-4 row-start-2 col-start-4"></div>
          <div class="bg-gray-800 h-4 row-start-2 col-start-5"></div>
          <div class="bg-gray-800 h-4 row-start-2 col-start-6"></div>

          <div class="bg-green-600 m-0.5 row-start-1 rounded z-10 col-start-3 row-span-3"></div>
          <div class="bg-gray-800 h-4 row-start-3 col-start-1"></div>
          <div class="bg-gray-800 h-4 row-start-3 col-start-2"></div>
          <div class="bg-gray-800 h-4 row-start-3 col-start-3"></div>
          <div class="bg-gray-800 h-4 row-start-3 col-start-4"></div>
          <div class="bg-gray-800 h-4 row-start-3 col-start-5"></div>
          <div class="bg-gray-800 h-4 row-start-3 col-start-6"></div>

          <div class="bg-green-600 m-0.5 row-start-1 rounded z-10 col-start-4 row-span-4"></div>
          <div class="bg-gray-800 h-4 row-start-4 col-start-1"></div>
          <div class="bg-gray-800 h-4 row-start-4 col-start-2"></div>
          <div class="bg-gray-800 h-4 row-start-4 col-start-3"></div>
          <div class="bg-gray-800 h-4 row-start-4 col-start-4"></div>
          <div class="bg-gray-800 h-4 row-start-4 col-start-5"></div>
          <div class="bg-gray-800 h-4 row-start-4 col-start-6"></div>

          <div class="bg-green-600 m-0.5 row-start-1 rounded z-10 col-start-5 row-span-5"></div>
          <div class="bg-gray-800 h-4 row-start-5 col-start-1"></div>
          <div class="bg-gray-800 h-4 row-start-5 col-start-2"></div>
          <div class="bg-gray-800 h-4 row-start-5 col-start-3"></div>
          <div class="bg-gray-800 h-4 row-start-5 col-start-4"></div>
          <div class="bg-gray-800 h-4 row-start-5 col-start-5"></div>
          <div class="bg-gray-800 h-4 row-start-5 col-start-6"></div>

          <div class="bg-green-600 m-0.5 row-start-1 rounded z-10 col-start-6 row-span-6"></div>
          <div class="bg-gray-800 h-4 row-start-6 col-start-1"></div>
          <div class="bg-gray-800 h-4 row-start-6 col-start-2"></div>
          <div class="bg-gray-800 h-4 row-start-6 col-start-3"></div>
          <div class="bg-gray-800 h-4 row-start-6 col-start-4"></div>
          <div class="bg-gray-800 h-4 row-start-6 col-start-5"></div>
          <div class="bg-gray-800 h-4 row-start-6 col-start-6"></div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
