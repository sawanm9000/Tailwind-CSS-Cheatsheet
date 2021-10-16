<template>
  <Card>
    <div class="prefix">
      <Lnk href="https://tailwindcss.com/docs/top-right-bottom-left" class="text-xs">top-  right-  bottom-  left-  inset-<br>-top- -right- -bottom- -left- -inset-</Lnk>
    </div>
    <div class="content">
      <div class="font-sans text-sm text-coolGray-400 mb-2">For absolutely and relatively positioned items</div>
      <div class="mb-2">
        <a href="#length" class="text-blue-300 cursor-pointer select-none w-max mb-2" @mouseover="$nuxt.$emit('highlightLength', true)" @mouseleave="$nuxt.$emit('highlightLength', false)" @click="$nuxt.$emit('blinkLength')">{length}</a>
      </div>
      <div class="font-sans text-sm mb-2 text-coolGray-400">Examples:</div>
      <div class="grid grid-cols-4 gap-x-2 gap-y-0.5">
        <div class="flex content-end items-end">inset-x-0 top-0</div>
        <div class="flex content-end items-end">inset-y-0 right-0</div>
        <div class="flex content-end items-end">inset-x-0 bottom-0</div>
        <div class="flex content-end items-end">inset-y-0 left-0</div>
        <div class="relative rounded bg-blue-600 w-full h-16">
          <div class="absolute rounded bg-red-800 h-8 flex items-center justify-center inset-x-0 top-0">h-8</div>
        </div>
        <div class="relative rounded bg-blue-600 w-full h-16">
          <div class="absolute rounded bg-red-800 w-8 flex items-center justify-center inset-y-0 right-0">w-8</div>
        </div>
        <div class="relative rounded bg-blue-600 w-full h-16">
          <div class="absolute rounded bg-red-800 h-8 flex items-center justify-center inset-x-0 bottom-0">h-8</div>
        </div>
        <div class="relative rounded bg-blue-600 w-full h-16">
          <div class="absolute rounded bg-red-800 w-8 flex items-center justify-center inset-y-0 left-0">w-8</div>
        </div>
        <div class="flex content-end items-end">bottom-0 left-0</div>
        <div class="flex content-end items-end">left-0 top-0</div>
        <div class="flex content-end items-end mt-2">right-0 top-0</div>
        <div class="flex content-end items-end">bottom-0 right-0</div>
        <div class="relative rounded bg-blue-600 w-full h-16">
          <div class="absolute rounded bg-red-800 w-8 h-8 text-center bottom-0 left-0">w-8 h-8</div>
        </div>
        <div class="relative rounded bg-blue-600 w-full h-16">
          <div class="absolute rounded bg-red-800 w-8 h-8 flex text-center left-0 top-0">w-8 h-8</div>
        </div>
        <div class="relative rounded bg-blue-600 w-full h-16">
          <div class="absolute rounded bg-red-800 w-8 h-8 flex text-center top-0 right-0">w-8 h-8</div>
        </div>
        <div class="relative rounded bg-blue-600 w-full h-16">
          <div class="absolute rounded bg-red-800 w-8 h-8 text-center bottom-0 right-0">w-8 h-8</div>
        </div>

        <div class="flex content-end items-end">inset-0</div>
        <div class="flex content-end items-end">inset-x-2 bottom-0</div>
        <div class="flex content-end items-end mt-2">-right-1 bottom-3</div>
        <div class="flex content-end items-end">-inset-y-1 right-2</div>

        <div class="relative rounded bg-blue-600 w-full h-16">
          <div class="absolute rounded bg-red-800 inset-0"></div>
        </div>
        <div class="relative rounded bg-blue-600 w-full h-16">
          <div class="absolute rounded bg-red-800 h-8 flex items-center justify-center inset-x-2 bottom-0">h-8</div>
        </div>
        <div class="relative rounded bg-blue-600 w-full h-16">
          <div class="absolute rounded bg-red-800 w-8 h-8 text-center -right-1 bottom-3">w-8 h-8</div>
        </div>
        <div class="relative rounded bg-blue-600 w-full h-16">
          <div class="absolute rounded bg-red-800 w-8 flex items-center justify-center -inset-y-1 right-2">w-8</div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
export default {}
</script>

