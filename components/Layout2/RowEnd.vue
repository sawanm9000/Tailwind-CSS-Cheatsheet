<template>
  <Card>
    <div class="prefix"><Lnk href="https://tailwindcss.com/docs/grid-row">row-end-</Lnk></div>
    <div class="content">
      <div class="flex flex-col">
        <div class="flex mb-1">
          <TwClass name="row-end-1" tooltip="grid-row-end: 1" class="flex-1 text-center w-5">1</TwClass>
          <TwClass name="row-end-2" tooltip="grid-row-end: 2" class="flex-1 text-center w-5">2</TwClass>
          <TwClass name="row-end-3" tooltip="grid-row-end: 3" class="flex-1 text-center w-5">3</TwClass>
          <TwClass name="row-end-4" tooltip="grid-row-end: 4" class="flex-1 text-center w-5">4</TwClass>
          <TwClass name="row-end-5" tooltip="grid-row-end: 5" class="flex-1 text-center w-5">5</TwClass>
          <TwClass name="row-end-6" tooltip="grid-row-end: 6" class="flex-1 text-center w-5">6</TwClass>
          <TwClass name="row-end-7" tooltip="grid-row-end: 7" class="flex-1 text-center w-5">7</TwClass>
        </div>
        <div class="grid grid-cols-7 grid-rows-7 bg-gray-400 gap-px p-px">
          <!-- <div class="bg-green-600 m-0.5 rounded z-10 col-start-1 row-end-1"></div> -->
          <div class="bg-gray-800 h-4 row-start-1 col-start-1 border-t border-red-600"></div>
          <div class="bg-gray-800 h-4 row-start-1 col-start-2 border-b border-red-600"></div>
          <div class="bg-gray-800 h-4 row-start-1 col-start-3"></div>
          <div class="bg-gray-800 h-4 row-start-1 col-start-4"></div>
          <div class="bg-gray-800 h-4 row-start-1 col-start-5"></div>
          <div class="bg-gray-800 h-4 row-start-1 col-start-6"></div>
          <div class="bg-gray-800 h-4 row-start-1 col-start-7"></div>

          <div class="bg-green-600 m-0.5 rounded z-10 col-start-2 row-end-2"></div>
          <div class="bg-gray-800 h-4 row-start-2 col-start-1"></div>
          <div class="bg-gray-800 h-4 row-start-2 col-start-2"></div>
          <div class="bg-gray-800 h-4 row-start-2 col-start-3 border-b border-red-600"></div>
          <div class="bg-gray-800 h-4 row-start-2 col-start-4"></div>
          <div class="bg-gray-800 h-4 row-start-2 col-start-5"></div>
          <div class="bg-gray-800 h-4 row-start-2 col-start-6"></div>
          <div class="bg-gray-800 h-4 row-start-2 col-start-7"></div>

          <div class="bg-green-600 m-0.5 rounded z-10 col-start-3 row-end-3"></div>
          <div class="bg-gray-800 h-4 row-start-3 col-start-1"></div>
          <div class="bg-gray-800 h-4 row-start-3 col-start-2"></div>
          <div class="bg-gray-800 h-4 row-start-3 col-start-3"></div>
          <div class="bg-gray-800 h-4 row-start-3 col-start-4 border-b border-red-600"></div>
          <div class="bg-gray-800 h-4 row-start-3 col-start-5"></div>
          <div class="bg-gray-800 h-4 row-start-3 col-start-6"></div>
          <div class="bg-gray-800 h-4 row-start-3 col-start-7"></div>

          <div class="bg-green-600 m-0.5 rounded z-10 col-start-4 row-end-4"></div>
          <div class="bg-gray-800 h-4 row-start-4 col-start-1"></div>
          <div class="bg-gray-800 h-4 row-start-4 col-start-2"></div>
          <div class="bg-gray-800 h-4 row-start-4 col-start-3"></div>
          <div class="bg-gray-800 h-4 row-start-4 col-start-4"></div>
          <div class="bg-gray-800 h-4 row-start-4 col-start-5 border-b border-red-600"></div>
          <div class="bg-gray-800 h-4 row-start-4 col-start-6"></div>
          <div class="bg-gray-800 h-4 row-start-4 col-start-7"></div>

          <div class="bg-green-600 m-0.5 rounded z-10 col-start-5 row-end-5"></div>
          <div class="bg-gray-800 h-4 row-start-5 col-start-1"></div>
          <div class="bg-gray-800 h-4 row-start-5 col-start-2"></div>
          <div class="bg-gray-800 h-4 row-start-5 col-start-3"></div>
          <div class="bg-gray-800 h-4 row-start-5 col-start-4"></div>
          <div class="bg-gray-800 h-4 row-start-5 col-start-5"></div>
          <div class="bg-gray-800 h-4 row-start-5 col-start-6 border-b border-red-600"></div>
          <div class="bg-gray-800 h-4 row-start-5 col-start-7"></div>

          <div class="bg-green-600 m-0.5 rounded z-10 col-start-6 row-end-6"></div>
          <div class="bg-gray-800 h-4 row-start-6 col-start-1"></div>
          <div class="bg-gray-800 h-4 row-start-6 col-start-2"></div>
          <div class="bg-gray-800 h-4 row-start-6 col-start-3"></div>
          <div class="bg-gray-800 h-4 row-start-6 col-start-4"></div>
          <div class="bg-gray-800 h-4 row-start-6 col-start-5"></div>
          <div class="bg-gray-800 h-4 row-start-6 col-start-6"></div>
          <div class="bg-gray-800 h-4 row-start-6 col-start-7 border-b border-red-600"></div>

          <div class="bg-green-600 m-0.5 rounded z-10 col-start-7 row-end-7"></div>
          <div class="bg-gray-800 h-4 row-start-7 col-start-1"></div>
          <div class="bg-gray-800 h-4 row-start-7 col-start-2"></div>
          <div class="bg-gray-800 h-4 row-start-7 col-start-3"></div>
          <div class="bg-gray-800 h-4 row-start-7 col-start-4"></div>
          <div class="bg-gray-800 h-4 row-start-7 col-start-5"></div>
          <div class="bg-gray-800 h-4 row-start-7 col-start-6"></div>
          <div class="bg-gray-800 h-4 row-start-7 col-start-7"></div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
