<template>
  <Card>
    <div class="prefix">
      <Lnk href="https://tailwindcss.com/docs/transition-delay">delay-</Lnk>
    </div>
    <div class="content">
      <div class="grid grid-cols-1 gap-3">
        <div class="flex">
          <TwClass name="delay-75" tooltip="transition-delay: 75ms" class="flex items-center w-14">75</TwClass>
          <div class="rounded flex justify-center items-center">
            <button class="px-4 py-2 rounded bg-blue-600 font-sans text-sm transform transition hover:bg-red-600 hover:text-black hover:scale-125 duration-75 elayn-75">Hover</button>
          </div>
        </div>
        <div class="flex">
          <TwClass name="delay-100" tooltip="transition-delay: 100ms" class="flex items-center w-14">100</TwClass>
          <div class="rounded flex justify-center items-center">
            <button class="px-4 py-2 rounded bg-blue-600 font-sans text-sm transform transition hover:bg-red-600 hover:text-black hover:scale-125 duration-75 delay-100">Hover</button>
          </div>
        </div>
        <div class="flex">
          <TwClass name="delay-150" tooltip="transition-delay: 150ms" class="flex items-center w-14">150</TwClass>
          <div class="rounded flex justify-center items-center">
            <button class="px-4 py-2 rounded bg-blue-600 font-sans text-sm transform transition hover:bg-red-600 hover:text-black hover:scale-125 duration-75 delay-150">Hover</button>
          </div>
        </div>
        <div class="flex">
          <TwClass name="delay-200" tooltip="transition-delay: 200ms" class="flex items-center w-14">200</TwClass>
          <div class="rounded flex justify-center items-center">
            <button class="px-4 py-2 rounded bg-blue-600 font-sans text-sm transform transition hover:bg-red-600 hover:text-black hover:scale-125 duration-75 delay-200">Hover</button>
          </div>
        </div>
        <div class="flex">
          <TwClass name="delay-300" tooltip="transition-delay: 300ms" class="flex items-center w-14">300</TwClass>
          <div class="rounded flex justify-center items-center">
            <button class="px-4 py-2 rounded bg-blue-600 font-sans text-sm transform transition hover:bg-red-600 hover:text-black hover:scale-125 duration-75 delay-300">Hover</button>
          </div>
        </div>
        <div class="flex">
          <TwClass name="delay-500" tooltip="transition-delay: 500ms" class="flex items-center w-14">500</TwClass>
          <div class="rounded flex justify-center items-center">
            <button class="px-4 py-2 rounded bg-blue-600 font-sans text-sm transform transition hover:bg-red-600 hover:text-black hover:scale-125 duration-75 delay-500">Hover</button>
          </div>
        </div>
        <div class="flex">
          <TwClass name="delay-700" tooltip="transition-delay: 700ms" class="flex items-center w-14">700</TwClass>
          <div class="rounded flex justify-center items-center">
            <button class="px-4 py-2 rounded bg-blue-600 font-sans text-sm transform transition hover:bg-red-600 hover:text-black hover:scale-125 duration-75 delay-700">Hover</button>
          </div>
        </div>
        <div class="flex">
          <TwClass name="delay-1000" tooltip="transition-delay: 1000ms" class="flex items-center w-14">1000</TwClass>
          <div class="rounded flex justify-center items-center">
            <button class="px-4 py-2 rounded bg-blue-600 font-sans text-sm transform transition hover:bg-red-600 hover:text-black hover:scale-125 duration-75 delay-1000">Hover</button>
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
