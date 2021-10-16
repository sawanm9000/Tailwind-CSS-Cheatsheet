<template>
  <Card>
    <div class="prefix">
      <Lnk href="https://tailwindcss.com/docs/space" class="whitespace-pre">space-  -space-</Lnk>
    </div>
    <div class="content">
      <div class="grid grid-cols-2 gap-x-2 gap-y-1.5 mb-2">
        <div>x-<span class="text-blue-300 cursor-pointer select-none w-max" @mouseover="$nuxt.$emit('highlightLength', true)" @mouseleave="$nuxt.$emit('highlightLength', false)" @click="$nuxt.$emit('blinkLength')">{length}</span></div>
        <div>y-<span class="text-blue-300 cursor-pointer select-none w-max" @mouseover="$nuxt.$emit('highlightLength', true)" @mouseleave="$nuxt.$emit('highlightLength', false)" @click="$nuxt.$emit('blinkLength')">{length}</span></div>

        <div class="grid grid-cols-3 auto-rows-min gap-x-2 w-max">
          <div class="border-r border-blue-500 text-blue-500 flex justify-end h-3 w-8">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 -mr-1 -mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
          <div class="border-l border-r border-blue-500 text-blue-500 flex justify-end h-3 w-8">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 -ml-1 -mt-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 -mr-1 -mt-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
          <div class="border-l border-blue-500 text-blue-500 h-3 w-8">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 -ml-1 -mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
          </div>
          <div class="bg-coolGray-600 h-8 w-8 rounded"></div>
          <div class="bg-coolGray-600 h-8 w-8 rounded"></div>
          <div class="bg-coolGray-600 h-8 w-8 rounded"></div>
        </div>

        <div class="w-max grid grid-flow-col grid-rows-2 auto-cols-min auto-rows-min gap-y-2">
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
          <div class="bg-coolGray-600 h-8 w-8 rounded"></div>
          <div class="bg-coolGray-600 h-8 w-8 rounded"></div>
        </div>
      </div>
      <!-- <div class="bg-coolGray-600 font-mono text-sm px-1.5 w-max mb-1.5 rounded-md mr-2">space-</div> -->
      <div class="font-sans text-coolGray-400 text-sm mb-1.5">For <span class="font-mono text-xs text-coolGray-200">flex-row-reverse</span> & <span class="font-mono text-xs text-coolGray-200">flex-col-reverse</span></div>
    <div class="grid grid-cols-2 gap-x-2 gap-y-1">
      <TwClass name="space-x-reverse" tooltip="--tw-space-x-reverse: 1">space-x-reverse</TwClass>
      <TwClass name="space-y-reverse" tooltip="--tw-space-y-reverse: 1">space-y-reverse</TwClass>

      <div class="h-11 p-1.5 border border-coolGray-400 rounded-md flex flex-row-reverse space-x-1.5 space-x-reverse">
        <div class="h-8 w-8 bg-blue-600 flex items-center justify-center rounded">1</div>
        <div class="h-8 w-8 bg-blue-600 flex items-center justify-center rounded">2</div>
        <div class="h-8 w-8 bg-blue-600 flex items-center justify-center rounded">3</div>
      </div>
      <div class="w-min h-24 p-1 border border-coolGray-400 rounded-md flex flex-col-reverse space-y-1.5 space-y-reverse">
        <div class="w-8 h-8 bg-blue-600 flex items-center justify-center rounded">1</div>
        <div class="w-8 h-8 bg-blue-600 flex items-center justify-center rounded">2</div>
      </div>
    </div>
    </div>
  </Card>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
// * {
//   outline: 1px dashed red;
//   outline-offset: -1px;
// }
</style>
