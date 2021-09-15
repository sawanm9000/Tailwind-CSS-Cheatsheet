<template>
  <Card>
    <div class="prefix"><Lnk href="https://tailwindcss.com/docs/grid-auto-flow">grid-flow-</Lnk></div>
    <div class="content grid grid-cols-2 gap-2">
      <div>
        <TwClass name="grid-flow-row" tooltip="grid-auto-flow: row" class="mb-1 w-max">row</TwClass>
        <div class="h-16 bg-gray-700 grid grid-cols-3 grid-rows-3 gap-0.5 p-0.5 grid-flow-row">
          <div class="bg-green-600 rounded flex justify-center items-center font-sans text-sm">1</div>
          <div class="bg-green-600 rounded flex justify-center items-center font-sans text-sm">2</div>
          <div class="bg-green-500 rounded flex justify-center items-center font-sans text-sm col-span-2">3</div>
          <div class="bg-green-600 rounded flex justify-center items-center font-sans text-sm">4</div>
          <div class="bg-green-600 rounded flex justify-center items-center font-sans text-sm">5</div>
          <div class="bg-green-600 rounded flex justify-center items-center font-sans text-sm">6</div>
          <div class="bg-green-600 rounded flex justify-center items-center font-sans text-sm">7</div>
        </div>
      </div>
      <div>
        <TwClass name="grid-flow-col" tooltip="grid-auto-flow: column" class="mb-1 w-max">col</TwClass>
        <div class="h-16 bg-gray-700 grid grid-cols-3 grid-rows-3 gap-0.5 p-0.5 grid-flow-col">
          <div class="bg-green-600 rounded flex justify-center items-center font-sans text-sm">1</div>
          <div class="bg-green-600 rounded flex justify-center items-center font-sans text-sm">2</div>
          <div class="bg-green-500 rounded flex justify-center items-center font-sans text-sm row-span-2">3</div>
          <div class="bg-green-600 rounded flex justify-center items-center font-sans text-sm">4</div>
          <div class="bg-green-600 rounded flex justify-center items-center font-sans text-sm">5</div>
          <div class="bg-green-600 rounded flex justify-center items-center font-sans text-sm">6</div>
          <div class="bg-green-600 rounded flex justify-center items-center font-sans text-sm">7</div>
        </div>
      </div>
      <div>
        <TwClass name="grid-flow-row-dense" tooltip="grid-auto-flow: row dense" class="mb-1 w-max">row-dense</TwClass>
        <div class="h-16 bg-gray-700 grid grid-cols-3 grid-rows-3 gap-0.5 p-0.5 grid-flow-row-dense">
          <div class="bg-green-600 rounded flex justify-center items-center font-sans text-sm">1</div>
          <div class="bg-green-600 rounded flex justify-center items-center font-sans text-sm">2</div>
          <div class="bg-green-500 rounded flex justify-center items-center font-sans text-sm col-span-2">3</div>
          <div class="bg-green-600 rounded flex justify-center items-center font-sans text-sm">4</div>
          <div class="bg-green-600 rounded flex justify-center items-center font-sans text-sm">5</div>
          <div class="bg-green-600 rounded flex justify-center items-center font-sans text-sm">6</div>
          <div class="bg-green-600 rounded flex justify-center items-center font-sans text-sm">7</div>
        </div>
      </div>
      <div>
        <TwClass name="grid-flow-col-dense" tooltip="grid-auto-flow: column dense" class="mb-1 w-max">col-dense</TwClass>
        <div class="h-16 bg-gray-700 grid grid-cols-3 grid-rows-3 gap-0.5 p-0.5 grid-flow-col-dense">
          <div class="bg-green-600 rounded flex justify-center items-center font-sans text-sm">1</div>
          <div class="bg-green-600 rounded flex justify-center items-center font-sans text-sm">2</div>
          <div class="bg-green-500 rounded flex justify-center items-center font-sans text-sm row-span-2">3</div>
          <div class="bg-green-600 rounded flex justify-center items-center font-sans text-sm">4</div>
          <div class="bg-green-600 rounded flex justify-center items-center font-sans text-sm">5</div>
          <div class="bg-green-600 rounded flex justify-center items-center font-sans text-sm">6</div>
          <div class="bg-green-600 rounded flex justify-center items-center font-sans text-sm">7</div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
