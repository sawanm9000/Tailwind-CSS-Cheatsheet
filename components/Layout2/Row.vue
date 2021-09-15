<template>
  <Card>
    <div class="prefix"><Lnk href="https://tailwindcss.com/docs/grid-row">row-</Lnk></div>
    <div class="content grid grid-cols-2 gap-2">
      <div>
        <TwClass name="row-span-full" tooltip="grid-row: 1 / -1" class="mb-1 w-max">span-full</TwClass>
        <div class="bg-gray-400 grid grid-cols-1 grid-rows-4 h-20 p-px gap-px w-11">
          <div class="bg-green-600 row-start-1 col-start-1 rounded-md m-1 row-span-full z-10 grid grid-cols-1 justify-items-center place-content-between">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 flex-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M7 11l5-5m0 0l5 5m-5-5v12" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 flex-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17 13l-5 5m0 0l-5-5m5 5V6" />
            </svg>
          </div>
          <div class="bg-gray-800 row-start-1 col-start-1"></div>
          <div class="bg-gray-800 row-start-2 col-start-1"></div>
          <div class="bg-gray-800 row-start-3 col-start-1"></div>
          <div class="bg-gray-800 row-start-4 col-start-1"></div>
        </div>
      </div>
      <div>
        <TwClass name="row-auto" tooltip="grid-row: auto" class="mb-1">auto</TwClass>
        <div class="mb-3 whitespace-pre"><span class="text-purple-500">grid-row:</span> &#10;<span class="text-green-400">auto</span></div>
      </div>
      <div>
        <TwClass name="row-start-auto" tooltip="grid-row-start: auto" class="mb-1">start-auto</TwClass>
        <div class="mb-3 whitespace-pre"><span class="text-purple-500">grid-row-start:</span> &#10;<span class="text-green-400">auto</span></div>
      </div>
      <div>
        <TwClass name="row-end-auto" tooltip="grid-row-end: auto" class="mb-1">end-auto</TwClass>
        <div class="mb-3 whitespace-pre"><span class="text-purple-500">grid-row-end:</span> &#10;<span class="text-green-400">auto</span></div>
      </div>
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
