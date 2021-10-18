<template>
  <Card>
    <div class="prefix"><Lnk href="https://tailwindcss.com/docs/transition-duration">duration-</Lnk></div>
    <div class="content">
      <div class="grid grid-cols-1 gap-3">
        <div class="flex gap-x-2">
          <TwClass name="duration-75" tooltip="transition-duration: 75ms" class="flex items-center w-12">75</TwClass>
          <div class="rounded flex justify-center items-center">
            <button class="px-4 py-2 rounded bg-blue-600 font-sans text-sm transform transition hover:bg-red-600 hover:text-black hover:scale-125 duration-75">Hover</button>
          </div>
        </div>
        <div class="flex gap-x-2">
          <TwClass name="duration-100" tooltip="transition-duration: 100ms" class="flex items-center w-12">100</TwClass>
          <div class="rounded flex justify-center items-center">
            <button class="px-4 py-2 rounded bg-blue-600 font-sans text-sm transform transition hover:bg-red-600 hover:text-black hover:scale-125 duration-100">Hover</button>
          </div>
        </div>
        <div class="flex gap-x-2">
          <TwClass name="duration-150" tooltip="transition-duration: 150ms" class="flex items-center w-12">150</TwClass>
          <div class="rounded flex justify-center items-center">
            <button class="px-4 py-2 rounded bg-blue-600 font-sans text-sm transform transition hover:bg-red-600 hover:text-black hover:scale-125 duration-150">Hover</button>
          </div>
        </div>
        <div class="flex gap-x-2">
          <TwClass name="duration-200" tooltip="transition-duration: 200ms" class="flex items-center w-12">200</TwClass>
          <div class="rounded flex justify-center items-center">
            <button class="px-4 py-2 rounded bg-blue-600 font-sans text-sm transform transition hover:bg-red-600 hover:text-black hover:scale-125 duration-200">Hover</button>
          </div>
        </div>
        <div class="flex gap-x-2">
          <TwClass name="duration-300" tooltip="transition-duration: 300ms" class="flex items-center w-12">300</TwClass>
          <div class="rounded flex justify-center items-center">
            <button class="px-4 py-2 rounded bg-blue-600 font-sans text-sm transform transition hover:bg-red-600 hover:text-black hover:scale-125 duration-300">Hover</button>
          </div>
        </div>
        <div class="flex gap-x-2">
          <TwClass name="duration-500" tooltip="transition-duration: 500ms" class="flex items-center w-12">500</TwClass>
          <div class="rounded flex justify-center items-center">
            <button class="px-4 py-2 rounded bg-blue-600 font-sans text-sm transform transition hover:bg-red-600 hover:text-black hover:scale-125 duration-500">Hover</button>
          </div>
        </div>
        <div class="flex gap-x-2">
          <TwClass name="duration-700" tooltip="transition-duration: 700ms" class="flex items-center w-12">700</TwClass>
          <div class="rounded flex justify-center items-center">
            <button class="px-4 py-2 rounded bg-blue-600 font-sans text-sm transform transition hover:bg-red-600 hover:text-black hover:scale-125 duration-700">Hover</button>
          </div>
        </div>
        <div class="flex gap-x-2">
          <TwClass name="duration-1000" tooltip="transition-duration: 1000ms" class="flex items-center w-12">1000</TwClass>
          <div class="rounded flex justify-center items-center">
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
