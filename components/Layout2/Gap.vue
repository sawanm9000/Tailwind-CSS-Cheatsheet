<template>
  <Card>
    <div class="prefix"><Lnk href="https://tailwindcss.com/docs/gap" class="whitespace-pre">gap-  gap-x-  gap-y-</Lnk></div>
    <div class="content grid grid-cols-2">
      <div class="mb-1.5">
        <a href="layout/#length" class="text-blue-300 cursor-pointer select-none w-max" @mouseover="$nuxt.$emit('highlightLength', true)" @mouseleave="$nuxt.$emit('highlightLength', false)" @click="$nuxt.$emit('blinkLength')">{length}</a>
      </div>

      <div class="grid auto-cols-max auto-rows-auto">
        <div class="col-start-1 row-start-2 row-span-2 grid grid-rows-2 gap-2">
          <div class="w-3 relative border-b border-blue-500 text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="absolute bottom-0 h-5 w-5 -mb-1 -ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 13l-5 5m0 0l-5-5m5 5V6" />
            </svg>
          </div>
          <div class="w-3 border-t border-blue-500 text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 -ml-1 -mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 11l5-5m0 0l5 5m-5-5v12" />
            </svg>
          </div>
        </div>
        <!-- <div class="col-start-2 row-start-1 col-span-2 grid gap-2 grid-cols-2">
          <div>a</div>
          <div>b</div>
        </div> -->
        <div class="grid grid-cols-2 col-start-2 row-start-1 col-span-2 gap-x-2">
          <div class="border-r border-blue-500 text-blue-500 flex h-3 w-8 justify-end">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 -mr-1 -mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
          <div class="border-l border-blue-500 text-blue-500 flex h-3 w-8 pl-px">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 -ml-1.5 -mt-1.5 py-px pr-px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
          </div>
        </div>
        <div class="col-start-2 row-start-2 row-span-2 col-span-2 grid grid-cols-2 grid-rows-2 gap-2">
          <div class="bg-gray-600 h-8 w-8 rounded"></div>
          <div class="bg-gray-600 h-8 w-8 rounded"></div>
          <div class="bg-gray-600 h-8 w-8 rounded"></div>
          <div class="bg-gray-600 h-8 w-8 rounded"></div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
