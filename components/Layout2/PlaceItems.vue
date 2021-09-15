<template>
  <Card>
    <div class="prefix"><Lnk href="https://tailwindcss.com/docs/place-items">place-items-</Lnk></div>
    <div class="content grid grid-cols-3 gap-2">
      <div>
        <TwClass name="place-items-start" tooltip="place-items: start" class="mb-1 w-max">start</TwClass>
        <div class="h-20 bg-gray-700 grid grid-cols-3 gap-0.5 p-0.5 place-items-start">
          <div class="bg-green-600 rounded flex justify-center items-center font-sans text-sm w-4 h-5">1</div>
          <div class="bg-green-600 rounded flex justify-center items-center font-sans text-sm w-4 h-5">2</div>
          <div class="bg-green-600 rounded flex justify-center items-center font-sans text-sm w-4 h-5">3</div>
          <div class="bg-green-600 rounded flex justify-center items-center font-sans text-sm w-4 h-5">4</div>
          <div class="bg-green-600 rounded flex justify-center items-center font-sans text-sm w-4 h-5">5</div>
          <div class="bg-green-600 rounded flex justify-center items-center font-sans text-sm w-4 h-5">6</div>
        </div>
      </div>
      <div>
        <TwClass name="place-items-center" tooltip="place-items: center" class="mb-1 w-max">center</TwClass>
        <div class="h-20 bg-gray-700 grid grid-cols-3 gap-0.5 p-0.5 place-items-center">
          <div class="bg-green-600 rounded flex justify-center items-center font-sans text-sm w-4 h-5">1</div>
          <div class="bg-green-600 rounded flex justify-center items-center font-sans text-sm w-4 h-5">2</div>
          <div class="bg-green-600 rounded flex justify-center items-center font-sans text-sm w-4 h-5">3</div>
          <div class="bg-green-600 rounded flex justify-center items-center font-sans text-sm w-4 h-5">4</div>
          <div class="bg-green-600 rounded flex justify-center items-center font-sans text-sm w-4 h-5">5</div>
          <div class="bg-green-600 rounded flex justify-center items-center font-sans text-sm w-4 h-5">6</div>
        </div>
      </div>
      <div>
        <TwClass name="place-items-end" tooltip="place-items: end" class="mb-1 w-max">end</TwClass>
        <div class="h-20 bg-gray-700 grid grid-cols-3 gap-0.5 p-0.5 place-items-end">
          <div class="bg-green-600 rounded flex justify-center items-center font-sans text-sm w-4 h-5">1</div>
          <div class="bg-green-600 rounded flex justify-center items-center font-sans text-sm w-4 h-5">2</div>
          <div class="bg-green-600 rounded flex justify-center items-center font-sans text-sm w-4 h-5">3</div>
          <div class="bg-green-600 rounded flex justify-center items-center font-sans text-sm w-4 h-5">4</div>
          <div class="bg-green-600 rounded flex justify-center items-center font-sans text-sm w-4 h-5">5</div>
          <div class="bg-green-600 rounded flex justify-center items-center font-sans text-sm w-4 h-5">6</div>
        </div>
      </div>
      <div>
        <TwClass name="place-items-stretch" tooltip="place-items: stretch" class="mb-1 w-max">stretch</TwClass>
        <div class="h-20 bg-gray-700 grid grid-cols-3 gap-0.5 p-0.5 place-items-stretch">
          <div class="bg-green-600 rounded flex justify-center items-center font-sans text-sm">1</div>
          <div class="bg-green-600 rounded flex justify-center items-center font-sans text-sm">2</div>
          <div class="bg-green-600 rounded flex justify-center items-center font-sans text-sm">3</div>
          <div class="bg-green-600 rounded flex justify-center items-center font-sans text-sm">4</div>
          <div class="bg-green-600 rounded flex justify-center items-center font-sans text-sm">5</div>
          <div class="bg-green-600 rounded flex justify-center items-center font-sans text-sm">6</div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
