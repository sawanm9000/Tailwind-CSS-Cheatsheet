<template>
  <Card>
    <div class="flex justify-between">
      <div class="prefix"><Lnk href="https://tailwindcss.com/docs/align-items">items-</Lnk></div>
      <div class="font-sans text-sm text-gray-400 px-2">Flex + Grid</div>
    </div>
    <div class="content grid grid-cols-3 gap-2">
      <div>
        <TwClass name="items-start" tooltip="align-items: flex-start" class="mb-1 w-max">start</TwClass>
        <div class="h-20 bg-gray-700 p-0.5 gap-0.5 flex items-start">
          <div class="bg-green-600 rounded flex justify-center items-center flex-1 font-sans text-sm h-6">1</div>
          <div class="bg-green-600 rounded flex justify-center items-center flex-1 font-sans text-sm h-12">2</div>
          <div class="bg-green-600 rounded flex justify-center items-center flex-1 font-sans text-sm h-9">3</div>
        </div>
      </div>
      <div>
        <TwClass name="items-center" tooltip="align-items: center" class="mb-1 w-max">center</TwClass>
        <div class="h-20 bg-gray-700 p-0.5 gap-0.5 flex items-center">
          <div class="bg-green-600 rounded flex justify-center items-center flex-1 font-sans text-sm h-6">1</div>
          <div class="bg-green-600 rounded flex justify-center items-center flex-1 font-sans text-sm h-12">2</div>
          <div class="bg-green-600 rounded flex justify-center items-center flex-1 font-sans text-sm h-9">3</div>
        </div>
      </div>
      <div>
        <TwClass name="items-end" tooltip="align-items: flex-end" class="mb-1 w-max">end</TwClass>
        <div class="h-20 bg-gray-700 p-0.5 gap-0.5 flex items-end">
          <div class="bg-green-600 rounded flex justify-center items-center flex-1 font-sans text-sm h-6">1</div>
          <div class="bg-green-600 rounded flex justify-center items-center flex-1 font-sans text-sm h-12">2</div>
          <div class="bg-green-600 rounded flex justify-center items-center flex-1 font-sans text-sm h-9">3</div>
        </div>
      </div>
      <div>
        <TwClass name="items-stretch" tooltip="align-items: stretch" class="mb-1 w-max">stretch</TwClass>
        <div class="h-20 bg-gray-700 p-0.5 gap-0.5 flex items-stretch">
          <div class="bg-green-600 rounded flex justify-center items-center flex-1 font-sans text-sm py-3">1</div>
          <div class="bg-green-600 rounded flex justify-center items-center flex-1 font-sans text-sm py-6">2</div>
          <div class="bg-green-600 rounded flex justify-center items-center flex-1 font-sans text-sm py-5">3</div>
        </div>
      </div>
      <div>
        <TwClass name="items-baseline" tooltip="align-items: baseline" class="mb-1 w-max">baseline</TwClass>
        <div class="h-20 bg-gray-700 p-0.5 gap-0.5 flex items-baseline">
          <div class="bg-green-600 rounded flex justify-center items-center flex-1 font-sans h-6 pt-2 text-xs">1</div>
          <div class="bg-green-600 rounded flex justify-center items-center flex-1 font-sans h-12 pb-6 text-3xl">2</div>
          <div class="bg-green-600 rounded flex justify-center items-center flex-1 font-sans h-9 pt-4 text-lg">3</div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
