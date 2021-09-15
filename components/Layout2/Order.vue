<template>
  <Card>
    <div class="prefix"><Lnk href="https://tailwindcss.com/docs/order">order-</Lnk></div>
    <div class="content space-y-2">
      <div class="grid grid-cols-12 gap-x-1">
        <TwClass name="order-1" tooltip="order: 1" class="bg-gray-600 rounded w-full h-6 flex justify-center items-center order-1">1</TwClass>
        <TwClass name="order-2" tooltip="order: 2" class="bg-gray-600 rounded w-full h-6 flex justify-center items-center order-2">2</TwClass>
        <TwClass name="order-3" tooltip="order: 3" class="bg-gray-600 rounded w-full h-6 flex justify-center items-center order-3">3</TwClass>
        <TwClass name="order-4" tooltip="order: 4" class="bg-gray-600 rounded w-full h-6 flex justify-center items-center order-4">4</TwClass>
        <TwClass name="order-5" tooltip="order: 5" class="bg-gray-600 rounded w-full h-6 flex justify-center items-center order-5">5</TwClass>
        <TwClass name="order-6" tooltip="order: 6" class="bg-gray-600 rounded w-full h-6 flex justify-center items-center order-6">6</TwClass>
        <TwClass name="order-7" tooltip="order: 7" class="bg-gray-600 rounded w-full h-6 flex justify-center items-center order-7">7</TwClass>
        <TwClass name="order-8" tooltip="order: 8" class="bg-gray-600 rounded w-full h-6 flex justify-center items-center order-8">8</TwClass>
        <TwClass name="order-9" tooltip="order: 9" class="bg-gray-600 rounded w-full h-6 flex justify-center items-center order-9">9</TwClass>
        <TwClass name="order-10" tooltip="order: 10" class="bg-gray-600 rounded w-full h-6 flex justify-center items-center order-10">10</TwClass>
        <TwClass name="order-11" tooltip="order: 11" class="bg-gray-600 rounded w-full h-6 flex justify-center items-center order-11">11</TwClass>
        <TwClass name="order-12" tooltip="order: 12" class="bg-gray-600 rounded w-full h-6 flex justify-center items-center order-12">12</TwClass>
      </div>
      <div class="grid grid-cols-3 gap-x-1">
        <TwClass name="order-first" tooltip="order: -9999" class="bg-gray-600 rounded h-6 flex justify-center items-center order-first">first</TwClass>
        <TwClass name="order-none" tooltip="order: 0" class="bg-gray-600 rounded h-6 flex justify-center items-center order-none">none</TwClass>
        <TwClass name="order-last" tooltip="order: 9999" class="bg-gray-600 rounded h-6 flex justify-center items-center order-last">last</TwClass>
      </div>
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
