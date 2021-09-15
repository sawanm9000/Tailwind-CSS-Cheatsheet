<template>
  <Card>
    <div class="prefix"><Lnk href="https://tailwindcss.com/docs/grid-column">col-span-</Lnk></div>
    <div class="content">
      <div class="flex">
        <div class="flex flex-col gap-y-px">
          <TwClass name="col-span-1" tooltip="grid-column: span 1 / span 1" class="w-5 h-7 flex items-center">1</TwClass>
          <TwClass name="col-span-2" tooltip="grid-column: span 2 / span 2" class="w-5 h-7 flex items-center">2</TwClass>
          <TwClass name="col-span-3" tooltip="grid-column: span 3 / span 3" class="w-5 h-7 flex items-center">3</TwClass>
          <TwClass name="col-span-4" tooltip="grid-column: span 4 / span 4" class="w-5 h-7 flex items-center">4</TwClass>
          <TwClass name="col-span-5" tooltip="grid-column: span 5 / span 5" class="w-5 h-7 flex items-center">5</TwClass>
          <TwClass name="col-span-6" tooltip="grid-column: span 6 / span 6" class="w-5 h-7 flex items-center">6</TwClass>
          <TwClass name="col-span-7" tooltip="grid-column: span 7 / span 7" class="w-5 h-7 flex items-center">7</TwClass>
          <TwClass name="col-span-8" tooltip="grid-column: span 8 / span 8" class="w-5 h-7 flex items-center">8</TwClass>
          <TwClass name="col-span-9" tooltip="grid-column: span 9 / span 9" class="w-5 h-7 flex items-center">9</TwClass>
          <TwClass name="col-span-10" tooltip="grid-column: span 10 / span 10" class="w-5 h-7 flex items-center">10</TwClass>
          <TwClass name="col-span-11" tooltip="grid-column: span 11 / span 11" class="w-5 h-7 flex items-center">11</TwClass>
          <TwClass name="col-span-12" tooltip="grid-column: span 12 / span 12" class="w-5 h-7 flex items-center">12</TwClass>
        </div>
        <div class="flex-1 grid grid-cols-12 grid-rows-12 bg-gray-400 gap-px p-px">
          <div class="bg-green-600 row-start-1 col-start-1 rounded z-10 my-0.5 mx-px col-span-1"></div>
          <div class="bg-gray-800 h-7 row-start-1 col-start-1"></div>
          <div class="bg-gray-800 h-7 row-start-1 col-start-2"></div>
          <div class="bg-gray-800 h-7 row-start-1 col-start-3"></div>
          <div class="bg-gray-800 h-7 row-start-1 col-start-4"></div>
          <div class="bg-gray-800 h-7 row-start-1 col-start-5"></div>
          <div class="bg-gray-800 h-7 row-start-1 col-start-6"></div>
          <div class="bg-gray-800 h-7 row-start-1 col-start-7"></div>
          <div class="bg-gray-800 h-7 row-start-1 col-start-8"></div>
          <div class="bg-gray-800 h-7 row-start-1 col-start-9"></div>
          <div class="bg-gray-800 h-7 row-start-1 col-start-10"></div>
          <div class="bg-gray-800 h-7 row-start-1 col-start-11"></div>
          <div class="bg-gray-800 h-7 row-start-1 col-start-12"></div>

          <div class="bg-green-600 row-start-2 col-start-1 rounded z-10 my-0.5 mx-px col-span-2"></div>
          <div class="bg-gray-800 h-7 row-start-2 col-start-1"></div>
          <div class="bg-gray-800 h-7 row-start-2 col-start-2"></div>
          <div class="bg-gray-800 h-7 row-start-2 col-start-3"></div>
          <div class="bg-gray-800 h-7 row-start-2 col-start-4"></div>
          <div class="bg-gray-800 h-7 row-start-2 col-start-5"></div>
          <div class="bg-gray-800 h-7 row-start-2 col-start-6"></div>
          <div class="bg-gray-800 h-7 row-start-2 col-start-7"></div>
          <div class="bg-gray-800 h-7 row-start-2 col-start-8"></div>
          <div class="bg-gray-800 h-7 row-start-2 col-start-9"></div>
          <div class="bg-gray-800 h-7 row-start-2 col-start-10"></div>
          <div class="bg-gray-800 h-7 row-start-2 col-start-11"></div>
          <div class="bg-gray-800 h-7 row-start-2 col-start-12"></div>

          <div class="bg-green-600 row-start-3 col-start-1 rounded z-10 my-0.5 mx-px col-span-3"></div>
          <div class="bg-gray-800 h-7 row-start-3 col-start-1"></div>
          <div class="bg-gray-800 h-7 row-start-3 col-start-2"></div>
          <div class="bg-gray-800 h-7 row-start-3 col-start-3"></div>
          <div class="bg-gray-800 h-7 row-start-3 col-start-4"></div>
          <div class="bg-gray-800 h-7 row-start-3 col-start-5"></div>
          <div class="bg-gray-800 h-7 row-start-3 col-start-6"></div>
          <div class="bg-gray-800 h-7 row-start-3 col-start-7"></div>
          <div class="bg-gray-800 h-7 row-start-3 col-start-8"></div>
          <div class="bg-gray-800 h-7 row-start-3 col-start-9"></div>
          <div class="bg-gray-800 h-7 row-start-3 col-start-10"></div>
          <div class="bg-gray-800 h-7 row-start-3 col-start-11"></div>
          <div class="bg-gray-800 h-7 row-start-3 col-start-12"></div>

          <div class="bg-green-600 row-start-4 col-start-1 rounded z-10 my-0.5 mx-px col-span-4"></div>
          <div class="bg-gray-800 h-7 row-start-4 col-start-1"></div>
          <div class="bg-gray-800 h-7 row-start-4 col-start-2"></div>
          <div class="bg-gray-800 h-7 row-start-4 col-start-3"></div>
          <div class="bg-gray-800 h-7 row-start-4 col-start-4"></div>
          <div class="bg-gray-800 h-7 row-start-4 col-start-5"></div>
          <div class="bg-gray-800 h-7 row-start-4 col-start-6"></div>
          <div class="bg-gray-800 h-7 row-start-4 col-start-7"></div>
          <div class="bg-gray-800 h-7 row-start-4 col-start-8"></div>
          <div class="bg-gray-800 h-7 row-start-4 col-start-9"></div>
          <div class="bg-gray-800 h-7 row-start-4 col-start-10"></div>
          <div class="bg-gray-800 h-7 row-start-4 col-start-11"></div>
          <div class="bg-gray-800 h-7 row-start-4 col-start-12"></div>

          <div class="bg-green-600 row-start-5 col-start-1 rounded z-10 my-0.5 mx-px col-span-5"></div>
          <div class="bg-gray-800 h-7 row-start-5 col-start-1"></div>
          <div class="bg-gray-800 h-7 row-start-5 col-start-2"></div>
          <div class="bg-gray-800 h-7 row-start-5 col-start-3"></div>
          <div class="bg-gray-800 h-7 row-start-5 col-start-4"></div>
          <div class="bg-gray-800 h-7 row-start-5 col-start-5"></div>
          <div class="bg-gray-800 h-7 row-start-5 col-start-6"></div>
          <div class="bg-gray-800 h-7 row-start-5 col-start-7"></div>
          <div class="bg-gray-800 h-7 row-start-5 col-start-8"></div>
          <div class="bg-gray-800 h-7 row-start-5 col-start-9"></div>
          <div class="bg-gray-800 h-7 row-start-5 col-start-10"></div>
          <div class="bg-gray-800 h-7 row-start-5 col-start-11"></div>
          <div class="bg-gray-800 h-7 row-start-5 col-start-12"></div>

          <div class="bg-green-600 row-start-6 col-start-1 rounded z-10 my-0.5 mx-px col-span-6"></div>
          <div class="bg-gray-800 h-7 row-start-6 col-start-1"></div>
          <div class="bg-gray-800 h-7 row-start-6 col-start-2"></div>
          <div class="bg-gray-800 h-7 row-start-6 col-start-3"></div>
          <div class="bg-gray-800 h-7 row-start-6 col-start-4"></div>
          <div class="bg-gray-800 h-7 row-start-6 col-start-5"></div>
          <div class="bg-gray-800 h-7 row-start-6 col-start-6"></div>
          <div class="bg-gray-800 h-7 row-start-6 col-start-7"></div>
          <div class="bg-gray-800 h-7 row-start-6 col-start-8"></div>
          <div class="bg-gray-800 h-7 row-start-6 col-start-9"></div>
          <div class="bg-gray-800 h-7 row-start-6 col-start-10"></div>
          <div class="bg-gray-800 h-7 row-start-6 col-start-11"></div>
          <div class="bg-gray-800 h-7 row-start-6 col-start-12"></div>

          <div class="bg-green-600 row-start-7 col-start-1 rounded z-10 my-0.5 mx-px col-span-7"></div>
          <div class="bg-gray-800 h-7 row-start-7 col-start-1"></div>
          <div class="bg-gray-800 h-7 row-start-7 col-start-2"></div>
          <div class="bg-gray-800 h-7 row-start-7 col-start-3"></div>
          <div class="bg-gray-800 h-7 row-start-7 col-start-4"></div>
          <div class="bg-gray-800 h-7 row-start-7 col-start-5"></div>
          <div class="bg-gray-800 h-7 row-start-7 col-start-6"></div>
          <div class="bg-gray-800 h-7 row-start-7 col-start-7"></div>
          <div class="bg-gray-800 h-7 row-start-7 col-start-8"></div>
          <div class="bg-gray-800 h-7 row-start-7 col-start-9"></div>
          <div class="bg-gray-800 h-7 row-start-7 col-start-10"></div>
          <div class="bg-gray-800 h-7 row-start-7 col-start-11"></div>
          <div class="bg-gray-800 h-7 row-start-7 col-start-12"></div>

          <div class="bg-green-600 row-start-8 col-start-1 rounded z-10 my-0.5 mx-px col-span-8"></div>
          <div class="bg-gray-800 h-7 row-start-8 col-start-1"></div>
          <div class="bg-gray-800 h-7 row-start-8 col-start-2"></div>
          <div class="bg-gray-800 h-7 row-start-8 col-start-3"></div>
          <div class="bg-gray-800 h-7 row-start-8 col-start-4"></div>
          <div class="bg-gray-800 h-7 row-start-8 col-start-5"></div>
          <div class="bg-gray-800 h-7 row-start-8 col-start-6"></div>
          <div class="bg-gray-800 h-7 row-start-8 col-start-7"></div>
          <div class="bg-gray-800 h-7 row-start-8 col-start-8"></div>
          <div class="bg-gray-800 h-7 row-start-8 col-start-9"></div>
          <div class="bg-gray-800 h-7 row-start-8 col-start-10"></div>
          <div class="bg-gray-800 h-7 row-start-8 col-start-11"></div>
          <div class="bg-gray-800 h-7 row-start-8 col-start-12"></div>

          <div class="bg-green-600 row-start-9 col-start-1 rounded z-10 my-0.5 mx-px col-span-9"></div>
          <div class="bg-gray-800 h-7 row-start-9 col-start-1"></div>
          <div class="bg-gray-800 h-7 row-start-9 col-start-2"></div>
          <div class="bg-gray-800 h-7 row-start-9 col-start-3"></div>
          <div class="bg-gray-800 h-7 row-start-9 col-start-4"></div>
          <div class="bg-gray-800 h-7 row-start-9 col-start-5"></div>
          <div class="bg-gray-800 h-7 row-start-9 col-start-6"></div>
          <div class="bg-gray-800 h-7 row-start-9 col-start-7"></div>
          <div class="bg-gray-800 h-7 row-start-9 col-start-8"></div>
          <div class="bg-gray-800 h-7 row-start-9 col-start-9"></div>
          <div class="bg-gray-800 h-7 row-start-9 col-start-10"></div>
          <div class="bg-gray-800 h-7 row-start-9 col-start-11"></div>
          <div class="bg-gray-800 h-7 row-start-9 col-start-12"></div>

          <div class="bg-green-600 row-start-10 col-start-1 rounded z-10 my-0.5 mx-px col-span-10"></div>
          <div class="bg-gray-800 h-7 row-start-10 col-start-1"></div>
          <div class="bg-gray-800 h-7 row-start-10 col-start-2"></div>
          <div class="bg-gray-800 h-7 row-start-10 col-start-3"></div>
          <div class="bg-gray-800 h-7 row-start-10 col-start-4"></div>
          <div class="bg-gray-800 h-7 row-start-10 col-start-5"></div>
          <div class="bg-gray-800 h-7 row-start-10 col-start-6"></div>
          <div class="bg-gray-800 h-7 row-start-10 col-start-7"></div>
          <div class="bg-gray-800 h-7 row-start-10 col-start-8"></div>
          <div class="bg-gray-800 h-7 row-start-10 col-start-9"></div>
          <div class="bg-gray-800 h-7 row-start-10 col-start-10"></div>
          <div class="bg-gray-800 h-7 row-start-10 col-start-11"></div>
          <div class="bg-gray-800 h-7 row-start-10 col-start-12"></div>

          <div class="bg-green-600 row-start-11 col-start-1 rounded z-10 my-0.5 mx-px col-span-11"></div>
          <div class="bg-gray-800 h-7 row-start-11 col-start-1"></div>
          <div class="bg-gray-800 h-7 row-start-11 col-start-2"></div>
          <div class="bg-gray-800 h-7 row-start-11 col-start-3"></div>
          <div class="bg-gray-800 h-7 row-start-11 col-start-4"></div>
          <div class="bg-gray-800 h-7 row-start-11 col-start-5"></div>
          <div class="bg-gray-800 h-7 row-start-11 col-start-6"></div>
          <div class="bg-gray-800 h-7 row-start-11 col-start-7"></div>
          <div class="bg-gray-800 h-7 row-start-11 col-start-8"></div>
          <div class="bg-gray-800 h-7 row-start-11 col-start-9"></div>
          <div class="bg-gray-800 h-7 row-start-11 col-start-10"></div>
          <div class="bg-gray-800 h-7 row-start-11 col-start-11"></div>
          <div class="bg-gray-800 h-7 row-start-11 col-start-12"></div>

          <div class="bg-green-600 row-start-12 col-start-1 rounded z-10 my-0.5 mx-px col-span-12"></div>
          <div class="bg-gray-800 h-7 row-start-12 col-start-1"></div>
          <div class="bg-gray-800 h-7 row-start-12 col-start-2"></div>
          <div class="bg-gray-800 h-7 row-start-12 col-start-3"></div>
          <div class="bg-gray-800 h-7 row-start-12 col-start-4"></div>
          <div class="bg-gray-800 h-7 row-start-12 col-start-5"></div>
          <div class="bg-gray-800 h-7 row-start-12 col-start-6"></div>
          <div class="bg-gray-800 h-7 row-start-12 col-start-7"></div>
          <div class="bg-gray-800 h-7 row-start-12 col-start-8"></div>
          <div class="bg-gray-800 h-7 row-start-12 col-start-9"></div>
          <div class="bg-gray-800 h-7 row-start-12 col-start-10"></div>
          <div class="bg-gray-800 h-7 row-start-12 col-start-11"></div>
          <div class="bg-gray-800 h-7 row-start-12 col-start-12"></div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
