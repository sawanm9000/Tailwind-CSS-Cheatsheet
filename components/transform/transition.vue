<template>
  <Card>
    <div class="prefix">
      <Lnk href="https://tailwindcss.com/docs/transition-property">transition</Lnk>
    </div>
    <div class="content">
      <div class="grid grid-cols-4 gap-2">
        <div>
          <TwClass name="transition-none" tooltip="transition-property: none" class="w-max">-none</TwClass>
          <div class="h-20 mt-1 rounded flex justify-center items-center">
            <button class="px-4 py-2 rounded bg-blue-600 font-sans text-sm transition-none hover:bg-red-600">Hover</button>
          </div>
        </div>
        <div>
          <TwClass name="transition-all" tooltip="transition-property: all" class="w-max">-all</TwClass>
          <div class="h-20 mt-1 rounded flex justify-center items-center">
            <button class="px-4 py-2 rounded bg-blue-600 font-sans text-sm transform transition-all hover:bg-red-600 hover:text-black hover:opacity-75 hover:shadow-lg hover:scale-110 hover:rotate-6 hover:translate-x-2 hover:-translate-y-2">Hover</button>
          </div>
        </div>
        <div>
          <TwClass name="transition" tooltip="transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter" class="text-coolGray-600 text-opacity-0">.</TwClass>
          <div class="h-20 mt-1 rounded flex justify-center items-center">
            <button class="px-4 py-2 rounded bg-blue-600 font-sans text-sm transform transition-all hover:bg-red-600 hover:text-black hover:opacity-75 hover:shadow-lg hover:scale-110 hover:rotate-6 hover:translate-x-2 hover:-translate-y-2">Hover</button>
          </div>
        </div>
        <div>
          <TwClass name="transition-colors" tooltip="transition-property: background-color, border-color, color, fill, stroke" class="w-max">-colors</TwClass>
          <div class="h-20 mt-1 rounded flex justify-center items-center">
            <button class="px-4 py-2 rounded bg-blue-600 font-sans text-sm transition-colors hover:bg-red-600">Hover</button>
          </div>
        </div>
        <div>
          <TwClass name="transition-opacity" tooltip="transition-property: opacity" class="w-max">-opacity</TwClass>
          <div class="h-20 mt-1 rounded flex justify-center items-center">
            <button class="px-4 py-2 rounded bg-blue-600 font-sans text-sm transition-opacity hover:opacity-75">Hover</button>
          </div>
        </div>
        <div>
          <TwClass name="transition-shadow" tooltip="transition-property: box-shadow" class="w-max">-shadow</TwClass>
          <div class="h-20 mt-1 rounded flex justify-center items-center">
            <button class="px-4 py-2 rounded bg-blue-600 font-sans text-sm transition-shadow hover:shadow-lg">Hover</button>
          </div>
        </div>
        <div>
          <TwClass name="transition-transform" tooltip="transition-property: transform" class="w-max">-transform</TwClass>
          <div class="h-20 mt-1 rounded flex justify-center items-center">
            <button class="px-4 py-2 rounded bg-blue-600 font-sans text-sm transform transition-transform hover:scale-110 hover:rotate-6 hover:translate-x-2 hover:-translate-y-2">Hover</button>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
