<template>
  <Card>
    <div class="flex justify-between">
      <div class="prefix"><Lnk href="https://tailwindcss.com/docs/grid-auto-columns">auto-cols-</Lnk></div>
      <div class="font-sans text-gray-400 text-sm pr-2">Size of implicit grid</div>
    </div>
    <div class="content grid grid-cols-2 gap-2">
      <div>
        <TwClass name="auto-cols-auto" tooltip="grid-auto-columns: auto" class="mb-1 w-max">auto</TwClass>
        <div class="grid grid-rows-2 auto-cols-auto bg-gray-400 gap-px p-px">
          <div class="bg-green-600 m-0.5 row-start-1 rounded z-10 col-start-1 row-span-1 h-3 w-3"></div>
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
        <TwClass name="auto-cols-fr" tooltip="grid-auto-columns: minmax(0, 1fr)" class="mb-1 w-max">fr</TwClass>
        <div class="grid grid-rows-2 auto-cols-fr bg-gray-400 gap-px p-px">
          <div class="bg-green-600 m-0.5 row-start-1 rounded z-10 col-start-1 row-span-1 h-3 w-3"></div>
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
        <TwClass name="auto-cols-min" tooltip="grid-auto-columns: min-content" class="mb-1 w-max">min</TwClass>
        <div class="grid grid-rows-2 auto-cols-min bg-gray-400 gap-px p-px w-max">
          <div class="bg-green-600 m-0.5 row-start-1 rounded z-10 col-start-2 row-span-1 h-3"></div>
          <div class="bg-green-600 m-0.5 row-start-1 rounded z-10 col-start-3 row-span-1 h-3 w-3"></div>
          <div class="bg-green-600 rounded z-10 h-3 w-3 m-0.5 row-start-2 col-start-1 row-span-1"></div>
          <div class="m-0.5 row-start-2 col-start-2 row-span-1 flex flex-wrap gap-0.5">
            <div class="bg-green-600 rounded z-10 h-3 w-3"></div>
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
        <TwClass name="auto-cols-max" tooltip="grid-auto-columns: max-content" class="mb-1 w-max">max</TwClass>
        <div class="grid grid-rows-2 auto-cols-max bg-gray-400 gap-px p-px w-max">
          <div class="bg-green-600 m-0.5 row-start-1 rounded z-10 col-start-1 row-span-1 h-3 w-3"></div>
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
          <div class="bg-green-600 rounded z-10 h-3 w-3 m-0.5 row-start-2 col-start-3"></div>

          <div class="bg-gray-800 row-start-1 col-start-1"></div>
          <div class="bg-gray-800 row-start-1 col-start-2"></div>
          <div class="bg-gray-800 row-start-1 col-start-3"></div>
          <div class="bg-gray-800 row-start-2 col-start-1"></div>
          <div class="bg-gray-800 row-start-2 col-start-2"></div>
          <div class="bg-gray-800 row-start-2 col-start-3"></div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
