<template>
  <Card>
    <div class="prefix">
      <Lnk href="https://tailwindcss.com/docs/transition-timing-function">ease-</Lnk>
    </div>
    <div class="content">
      <div class="grid grid-cols-4 gap-2">
        <div>
          <TwClass name="ease-linear" tooltip="transition-timing-function: linear" class="w-max">linear</TwClass>
          <div class="h-20 mt-1 rounded flex justify-center items-center">
            <button class="px-4 py-2 rounded bg-blue-600 font-sans text-sm transform transition hover:bg-red-600 hover:text-black hover:scale-125 duration-300 ease-linear">Hover</button>
          </div>
        </div>
        <div>
          <TwClass name="ease-in" tooltip="transition-timing-function: cubic-bezier(0.4, 0, 1, 1)" class="w-max">in</TwClass>
          <div class="h-20 mt-1 rounded flex justify-center items-center">
            <button class="px-4 py-2 rounded bg-blue-600 font-sans text-sm transform transition hover:bg-red-600 hover:text-black hover:scale-125 duration-300 ease-in">Hover</button>
          </div>
        </div>
        <div>
          <TwClass name="ease-out" tooltip="transition-timing-function: cubic-bezier(0, 0, 0.2, 1)" class="w-max">out</TwClass>
          <div class="h-20 mt-1 rounded flex justify-center items-center">
            <button class="px-4 py-2 rounded bg-blue-600 font-sans text-sm transform transition hover:bg-red-600 hover:text-black hover:scale-125 duration-300 ease-out">Hover</button>
          </div>
        </div>
        <div>
          <TwClass name="ease-in-out" tooltip="transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)" class="w-max">in-out</TwClass>
          <div class="h-20 mt-1 rounded flex justify-center items-center">
            <button class="px-4 py-2 rounded bg-blue-600 font-sans text-sm transform transition hover:bg-red-600 hover:text-black hover:scale-125 duration-300 ease-in-out">Hover</button>
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
