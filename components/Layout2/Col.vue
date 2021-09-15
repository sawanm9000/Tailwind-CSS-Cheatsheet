<template>
  <Card>
    <div class="prefix"><Lnk href="https://tailwindcss.com/docs/grid-column">col-</Lnk></div>
    <div class="content grid grid-cols-2 3xl:grid-cols-1 gap-2">
      <div>
        <TwClass name="col-span-full" tooltip="grid-column: 1 / -1" class="mb-1">span-full</TwClass>
        <div class="bg-gray-400 grid grid-cols-5 grid-rows-1 h-16 p-px gap-px w-24">
          <div class="bg-green-600 row-start-1 col-start-1 rounded z-10 my-1 mx-1 col-span-full flex justify-between items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 right-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
          <div class="bg-gray-800 row-start-1 col-start-1"></div>
          <div class="bg-gray-800 row-start-1 col-start-2"></div>
          <div class="bg-gray-800 row-start-1 col-start-3"></div>
          <div class="bg-gray-800 row-start-1 col-start-4"></div>
          <div class="bg-gray-800 row-start-1 col-start-5"></div>
        </div>
      </div>
      <div>
        <TwClass name="col-auto" tooltip="grid-column: auto" class="mb-1">auto</TwClass>
        <div class="mb-3 whitespace-pre"><span class="text-purple-500">grid-column:</span> &#10;<span class="text-green-400">auto</span></div>
      </div>
      <div>
        <TwClass name="col-start-auto" tooltip="grid-column-start: auto" class="mb-1">start-auto</TwClass>
        <div class="mb-3 whitespace-pre"><span class="text-purple-500">grid-column-start:</span> &#10;<span class="text-green-400">auto</span></div>
      </div>
      <div>
        <TwClass name="col-end-auto" tooltip="grid-column-end: auto" class="mb-1">end-auto</TwClass>
        <div class="mb-3 whitespace-pre"><span class="text-purple-500">grid-column-end:</span> &#10;<span class="text-green-400">auto</span></div>
      </div>
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
