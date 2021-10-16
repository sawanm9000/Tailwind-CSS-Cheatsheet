<template>
  <Card>
    <div class="prefix"><Lnk href="https://tailwindcss.com/docs/grid-column">col-end-</Lnk></div>
    <div class="content">
      <div class="flex">
        <div class="flex flex-col gap-y-px">
          <TwClass name="col-end-1" tooltip="grid-column-end: 1" class="w-5 h-7 flex items-center">1</TwClass>
          <TwClass name="col-end-2" tooltip="grid-column-end: 2" class="w-5 h-7 flex items-center">2</TwClass>
          <TwClass name="col-end-3" tooltip="grid-column-end: 3" class="w-5 h-7 flex items-center">3</TwClass>
          <TwClass name="col-end-4" tooltip="grid-column-end: 4" class="w-5 h-7 flex items-center">4</TwClass>
          <TwClass name="col-end-5" tooltip="grid-column-end: 5" class="w-5 h-7 flex items-center">5</TwClass>
          <TwClass name="col-end-6" tooltip="grid-column-end: 6" class="w-5 h-7 flex items-center">6</TwClass>
          <TwClass name="col-end-7" tooltip="grid-column-end: 7" class="w-5 h-7 flex items-center">7</TwClass>
          <TwClass name="col-end-8" tooltip="grid-column-end: 8" class="w-5 h-7 flex items-center">8</TwClass>
          <TwClass name="col-end-9" tooltip="grid-column-end: 9" class="w-5 h-7 flex items-center">9</TwClass>
          <TwClass name="col-end-10" tooltip="grid-column-end: 10" class="w-5 h-7 flex items-center">10</TwClass>
          <TwClass name="col-end-11" tooltip="grid-column-end: 11" class="w-5 h-7 flex items-center">11</TwClass>
          <TwClass name="col-end-12" tooltip="grid-column-end: 12" class="w-5 h-7 flex items-center">12</TwClass>
        </div>
        <div class="flex-1 grid grid-cols-12 grid-rows-12 bg-coolGray-400 gap-px p-px">
          <!-- <div class="bg-emerald-600 row-start-1 my-0.5 mx-px rounded z-10 col-end-1"></ border-r border-red-600div> -->
          <div class="bg-coolGray-800 h-7 row-start-1 col-start-1 border-l border-red-600"></div>
          <div class="bg-coolGray-800 h-7 row-start-1 col-start-2"></div>
          <div class="bg-coolGray-800 h-7 row-start-1 col-start-3"></div>
          <div class="bg-coolGray-800 h-7 row-start-1 col-start-4"></div>
          <div class="bg-coolGray-800 h-7 row-start-1 col-start-5"></div>
          <div class="bg-coolGray-800 h-7 row-start-1 col-start-6"></div>
          <div class="bg-coolGray-800 h-7 row-start-1 col-start-7"></div>
          <div class="bg-coolGray-800 h-7 row-start-1 col-start-8"></div>
          <div class="bg-coolGray-800 h-7 row-start-1 col-start-9"></div>
          <div class="bg-coolGray-800 h-7 row-start-1 col-start-10"></div>
          <div class="bg-coolGray-800 h-7 row-start-1 col-start-11"></div>
          <div class="bg-coolGray-800 h-7 row-start-1 col-start-12"></div>

          <div class="bg-emerald-600 row-start-2 my-0.5 mx-px rounded z-10 col-end-2"></div>
          <div class="bg-coolGray-800 h-7 row-start-2 col-start-1 border-r border-red-600"></div>
          <div class="bg-coolGray-800 h-7 row-start-2 col-start-2"></div>
          <div class="bg-coolGray-800 h-7 row-start-2 col-start-3"></div>
          <div class="bg-coolGray-800 h-7 row-start-2 col-start-4"></div>
          <div class="bg-coolGray-800 h-7 row-start-2 col-start-5"></div>
          <div class="bg-coolGray-800 h-7 row-start-2 col-start-6"></div>
          <div class="bg-coolGray-800 h-7 row-start-2 col-start-7"></div>
          <div class="bg-coolGray-800 h-7 row-start-2 col-start-8"></div>
          <div class="bg-coolGray-800 h-7 row-start-2 col-start-9"></div>
          <div class="bg-coolGray-800 h-7 row-start-2 col-start-10"></div>
          <div class="bg-coolGray-800 h-7 row-start-2 col-start-11"></div>
          <div class="bg-coolGray-800 h-7 row-start-2 col-start-12"></div>

          <div class="bg-emerald-600 row-start-3 my-0.5 mx-px rounded z-10 col-end-3"></div>
          <div class="bg-coolGray-800 h-7 row-start-3 col-start-1"></div>
          <div class="bg-coolGray-800 h-7 row-start-3 col-start-2 border-r border-red-600"></div>
          <div class="bg-coolGray-800 h-7 row-start-3 col-start-3"></div>
          <div class="bg-coolGray-800 h-7 row-start-3 col-start-4"></div>
          <div class="bg-coolGray-800 h-7 row-start-3 col-start-5"></div>
          <div class="bg-coolGray-800 h-7 row-start-3 col-start-6"></div>
          <div class="bg-coolGray-800 h-7 row-start-3 col-start-7"></div>
          <div class="bg-coolGray-800 h-7 row-start-3 col-start-8"></div>
          <div class="bg-coolGray-800 h-7 row-start-3 col-start-9"></div>
          <div class="bg-coolGray-800 h-7 row-start-3 col-start-10"></div>
          <div class="bg-coolGray-800 h-7 row-start-3 col-start-11"></div>
          <div class="bg-coolGray-800 h-7 row-start-3 col-start-12"></div>

          <div class="bg-emerald-600 row-start-4 my-0.5 mx-px rounded z-10 col-end-4"></div>
          <div class="bg-coolGray-800 h-7 row-start-4 col-start-1"></div>
          <div class="bg-coolGray-800 h-7 row-start-4 col-start-2"></div>
          <div class="bg-coolGray-800 h-7 row-start-4 col-start-3 border-r border-red-600"></div>
          <div class="bg-coolGray-800 h-7 row-start-4 col-start-4"></div>
          <div class="bg-coolGray-800 h-7 row-start-4 col-start-5"></div>
          <div class="bg-coolGray-800 h-7 row-start-4 col-start-6"></div>
          <div class="bg-coolGray-800 h-7 row-start-4 col-start-7"></div>
          <div class="bg-coolGray-800 h-7 row-start-4 col-start-8"></div>
          <div class="bg-coolGray-800 h-7 row-start-4 col-start-9"></div>
          <div class="bg-coolGray-800 h-7 row-start-4 col-start-10"></div>
          <div class="bg-coolGray-800 h-7 row-start-4 col-start-11"></div>
          <div class="bg-coolGray-800 h-7 row-start-4 col-start-12"></div>

          <div class="bg-emerald-600 row-start-5 my-0.5 mx-px rounded z-10 col-end-5"></div>
          <div class="bg-coolGray-800 h-7 row-start-5 col-start-1"></div>
          <div class="bg-coolGray-800 h-7 row-start-5 col-start-2"></div>
          <div class="bg-coolGray-800 h-7 row-start-5 col-start-3"></div>
          <div class="bg-coolGray-800 h-7 row-start-5 col-start-4 border-r border-red-600"></div>
          <div class="bg-coolGray-800 h-7 row-start-5 col-start-5"></div>
          <div class="bg-coolGray-800 h-7 row-start-5 col-start-6"></div>
          <div class="bg-coolGray-800 h-7 row-start-5 col-start-7"></div>
          <div class="bg-coolGray-800 h-7 row-start-5 col-start-8"></div>
          <div class="bg-coolGray-800 h-7 row-start-5 col-start-9"></div>
          <div class="bg-coolGray-800 h-7 row-start-5 col-start-10"></div>
          <div class="bg-coolGray-800 h-7 row-start-5 col-start-11"></div>
          <div class="bg-coolGray-800 h-7 row-start-5 col-start-12"></div>

          <div class="bg-emerald-600 row-start-6 my-0.5 mx-px rounded z-10 col-end-6"></div>
          <div class="bg-coolGray-800 h-7 row-start-6 col-start-1"></div>
          <div class="bg-coolGray-800 h-7 row-start-6 col-start-2"></div>
          <div class="bg-coolGray-800 h-7 row-start-6 col-start-3"></div>
          <div class="bg-coolGray-800 h-7 row-start-6 col-start-4"></div>
          <div class="bg-coolGray-800 h-7 row-start-6 col-start-5 border-r border-red-600"></div>
          <div class="bg-coolGray-800 h-7 row-start-6 col-start-6"></div>
          <div class="bg-coolGray-800 h-7 row-start-6 col-start-7"></div>
          <div class="bg-coolGray-800 h-7 row-start-6 col-start-8"></div>
          <div class="bg-coolGray-800 h-7 row-start-6 col-start-9"></div>
          <div class="bg-coolGray-800 h-7 row-start-6 col-start-10"></div>
          <div class="bg-coolGray-800 h-7 row-start-6 col-start-11"></div>
          <div class="bg-coolGray-800 h-7 row-start-6 col-start-12"></div>

          <div class="bg-emerald-600 row-start-7 my-0.5 mx-px rounded z-10 col-end-7"></div>
          <div class="bg-coolGray-800 h-7 row-start-7 col-start-1"></div>
          <div class="bg-coolGray-800 h-7 row-start-7 col-start-2"></div>
          <div class="bg-coolGray-800 h-7 row-start-7 col-start-3"></div>
          <div class="bg-coolGray-800 h-7 row-start-7 col-start-4"></div>
          <div class="bg-coolGray-800 h-7 row-start-7 col-start-5"></div>
          <div class="bg-coolGray-800 h-7 row-start-7 col-start-6 border-r border-red-600"></div>
          <div class="bg-coolGray-800 h-7 row-start-7 col-start-7"></div>
          <div class="bg-coolGray-800 h-7 row-start-7 col-start-8"></div>
          <div class="bg-coolGray-800 h-7 row-start-7 col-start-9"></div>
          <div class="bg-coolGray-800 h-7 row-start-7 col-start-10"></div>
          <div class="bg-coolGray-800 h-7 row-start-7 col-start-11"></div>
          <div class="bg-coolGray-800 h-7 row-start-7 col-start-12"></div>

          <div class="bg-emerald-600 row-start-8 my-0.5 mx-px rounded z-10 col-end-8"></div>
          <div class="bg-coolGray-800 h-7 row-start-8 col-start-1"></div>
          <div class="bg-coolGray-800 h-7 row-start-8 col-start-2"></div>
          <div class="bg-coolGray-800 h-7 row-start-8 col-start-3"></div>
          <div class="bg-coolGray-800 h-7 row-start-8 col-start-4"></div>
          <div class="bg-coolGray-800 h-7 row-start-8 col-start-5"></div>
          <div class="bg-coolGray-800 h-7 row-start-8 col-start-6"></div>
          <div class="bg-coolGray-800 h-7 row-start-8 col-start-7 border-r border-red-600"></div>
          <div class="bg-coolGray-800 h-7 row-start-8 col-start-8"></div>
          <div class="bg-coolGray-800 h-7 row-start-8 col-start-9"></div>
          <div class="bg-coolGray-800 h-7 row-start-8 col-start-10"></div>
          <div class="bg-coolGray-800 h-7 row-start-8 col-start-11"></div>
          <div class="bg-coolGray-800 h-7 row-start-8 col-start-12"></div>

          <div class="bg-emerald-600 row-start-9 my-0.5 mx-px rounded z-10 col-end-9"></div>
          <div class="bg-coolGray-800 h-7 row-start-9 col-start-1"></div>
          <div class="bg-coolGray-800 h-7 row-start-9 col-start-2"></div>
          <div class="bg-coolGray-800 h-7 row-start-9 col-start-3"></div>
          <div class="bg-coolGray-800 h-7 row-start-9 col-start-4"></div>
          <div class="bg-coolGray-800 h-7 row-start-9 col-start-5"></div>
          <div class="bg-coolGray-800 h-7 row-start-9 col-start-6"></div>
          <div class="bg-coolGray-800 h-7 row-start-9 col-start-7"></div>
          <div class="bg-coolGray-800 h-7 row-start-9 col-start-8 border-r border-red-600"></div>
          <div class="bg-coolGray-800 h-7 row-start-9 col-start-9"></div>
          <div class="bg-coolGray-800 h-7 row-start-9 col-start-10"></div>
          <div class="bg-coolGray-800 h-7 row-start-9 col-start-11"></div>
          <div class="bg-coolGray-800 h-7 row-start-9 col-start-12"></div>

          <div class="bg-emerald-600 row-start-10 my-0.5 mx-px rounded z-10 col-end-10"></div>
          <div class="bg-coolGray-800 h-7 row-start-10 col-start-1"></div>
          <div class="bg-coolGray-800 h-7 row-start-10 col-start-2"></div>
          <div class="bg-coolGray-800 h-7 row-start-10 col-start-3"></div>
          <div class="bg-coolGray-800 h-7 row-start-10 col-start-4"></div>
          <div class="bg-coolGray-800 h-7 row-start-10 col-start-5"></div>
          <div class="bg-coolGray-800 h-7 row-start-10 col-start-6"></div>
          <div class="bg-coolGray-800 h-7 row-start-10 col-start-7"></div>
          <div class="bg-coolGray-800 h-7 row-start-10 col-start-8"></div>
          <div class="bg-coolGray-800 h-7 row-start-10 col-start-9 border-r border-red-600"></div>
          <div class="bg-coolGray-800 h-7 row-start-10 col-start-10"></div>
          <div class="bg-coolGray-800 h-7 row-start-10 col-start-11"></div>
          <div class="bg-coolGray-800 h-7 row-start-10 col-start-12"></div>

          <div class="bg-emerald-600 row-start-11 my-0.5 mx-px rounded z-10 col-end-11"></div>
          <div class="bg-coolGray-800 h-7 row-start-11 col-start-1"></div>
          <div class="bg-coolGray-800 h-7 row-start-11 col-start-2"></div>
          <div class="bg-coolGray-800 h-7 row-start-11 col-start-3"></div>
          <div class="bg-coolGray-800 h-7 row-start-11 col-start-4"></div>
          <div class="bg-coolGray-800 h-7 row-start-11 col-start-5"></div>
          <div class="bg-coolGray-800 h-7 row-start-11 col-start-6"></div>
          <div class="bg-coolGray-800 h-7 row-start-11 col-start-7"></div>
          <div class="bg-coolGray-800 h-7 row-start-11 col-start-8"></div>
          <div class="bg-coolGray-800 h-7 row-start-11 col-start-9"></div>
          <div class="bg-coolGray-800 h-7 row-start-11 col-start-10 border-r border-red-600"></div>
          <div class="bg-coolGray-800 h-7 row-start-11 col-start-11"></div>
          <div class="bg-coolGray-800 h-7 row-start-11 col-start-12"></div>

          <div class="bg-emerald-600 row-start-12 my-0.5 mx-px rounded z-10 col-end-12"></div>
          <div class="bg-coolGray-800 h-7 row-start-12 col-start-1"></div>
          <div class="bg-coolGray-800 h-7 row-start-12 col-start-2"></div>
          <div class="bg-coolGray-800 h-7 row-start-12 col-start-3"></div>
          <div class="bg-coolGray-800 h-7 row-start-12 col-start-4"></div>
          <div class="bg-coolGray-800 h-7 row-start-12 col-start-5"></div>
          <div class="bg-coolGray-800 h-7 row-start-12 col-start-6"></div>
          <div class="bg-coolGray-800 h-7 row-start-12 col-start-7"></div>
          <div class="bg-coolGray-800 h-7 row-start-12 col-start-8"></div>
          <div class="bg-coolGray-800 h-7 row-start-12 col-start-9"></div>
          <div class="bg-coolGray-800 h-7 row-start-12 col-start-10"></div>
          <div class="bg-coolGray-800 h-7 row-start-12 col-start-11 border-r border-red-600"></div>
          <div class="bg-coolGray-800 h-7 row-start-12 col-start-12"></div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
