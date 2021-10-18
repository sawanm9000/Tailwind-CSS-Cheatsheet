<template>
  <Card>
    <div class="prefix"><Lnk href="https://tailwindcss.com/docs/transition-duration">duration-</Lnk></div>
    <div class="content">
      <div class="grid grid-cols-4 gap-2">
        <div>
          <TwClass name="duration-75" tooltip="transition-duration: 75ms" class="w-max">75</TwClass>
          <div class="h-20 mt-1 rounded flex justify-center items-center">
            <button class="px-4 py-2 rounded bg-blue-600 font-sans text-sm transform transition hover:bg-red-600 hover:text-black hover:scale-125 duration-75">Hover</button>
          </div>
        </div>
        <div>
          <TwClass name="duration-100" tooltip="transition-duration: 100ms" class="w-max">100</TwClass>
          <div class="h-20 mt-1 rounded flex justify-center items-center">
            <button class="px-4 py-2 rounded bg-blue-600 font-sans text-sm transform transition hover:bg-red-600 hover:text-black hover:scale-125 duration-100">Hover</button>
          </div>
        </div>
        <div>
          <TwClass name="duration-150" tooltip="transition-duration: 150ms" class="w-max">150</TwClass>
          <div class="h-20 mt-1 rounded flex justify-center items-center">
            <button class="px-4 py-2 rounded bg-blue-600 font-sans text-sm transform transition hover:bg-red-600 hover:text-black hover:scale-125 duration-150">Hover</button>
          </div>
        </div>
        <div>
          <TwClass name="duration-200" tooltip="transition-duration: 200ms" class="w-max">200</TwClass>
          <div class="h-20 mt-1 rounded flex justify-center items-center">
            <button class="px-4 py-2 rounded bg-blue-600 font-sans text-sm transform transition hover:bg-red-600 hover:text-black hover:scale-125 duration-200">Hover</button>
          </div>
        </div>
        <div>
          <TwClass name="duration-300" tooltip="transition-duration: 300ms" class="w-max">300</TwClass>
          <div class="h-20 mt-1 rounded flex justify-center items-center">
            <button class="px-4 py-2 rounded bg-blue-600 font-sans text-sm transform transition hover:bg-red-600 hover:text-black hover:scale-125 duration-300">Hover</button>
          </div>
        </div>
        <div>
          <TwClass name="duration-500" tooltip="transition-duration: 500ms" class="w-max">500</TwClass>
          <div class="h-20 mt-1 rounded flex justify-center items-center">
            <button class="px-4 py-2 rounded bg-blue-600 font-sans text-sm transform transition hover:bg-red-600 hover:text-black hover:scale-125 duration-500">Hover</button>
          </div>
        </div>
        <div>
          <TwClass name="duration-700" tooltip="transition-duration: 700ms" class="w-max">700</TwClass>
          <div class="h-20 mt-1 rounded flex justify-center items-center">
            <button class="px-4 py-2 rounded bg-blue-600 font-sans text-sm transform transition hover:bg-red-600 hover:text-black hover:scale-125 duration-700">Hover</button>
          </div>
        </div>
        <div>
          <TwClass name="duration-1000" tooltip="transition-duration: 1000ms" class="w-max">1000</TwClass>
          <div class="h-20 mt-1 rounded flex justify-center items-center">
            <button class="px-4 py-2 rounded bg-blue-600 font-sans text-sm transform transition hover:bg-red-600 hover:text-black hover:scale-125 duration-1000">Hover</button>
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
