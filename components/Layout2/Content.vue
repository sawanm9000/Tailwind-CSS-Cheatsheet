<template>
  <Card>
    <div class="flex justify-between">
      <div class="prefix"><Lnk href="https://tailwindcss.com/docs/align-content">content-</Lnk></div>
      <div class="font-sans text-sm text-gray-400 px-2">Flex + Grid</div>
    </div>
    <div class="content grid grid-cols-3 gap-2">
      <div>
        <TwClass name="content-start" tooltip="align-content: flex-start" class="mb-1 w-max">start</TwClass>
        <div class="h-20 bg-gray-700 flex flex-wrap p-0.5 gap-0.5 content-start">
          <div class="bg-green-600 rounded w-7 h-5 flex justify-center items-center font-sans text-sm">1</div>
          <div class="bg-green-600 rounded w-7 h-5 flex justify-center items-center font-sans text-sm">2</div>
          <div class="bg-green-600 rounded w-7 h-5 flex justify-center items-center font-sans text-sm">3</div>
          <div class="bg-green-600 rounded w-7 h-5 flex justify-center items-center font-sans text-sm">4</div>
          <div class="bg-green-600 rounded w-7 h-5 flex justify-center items-center font-sans text-sm">5</div>
          <div class="bg-green-600 rounded w-7 h-5 flex justify-center items-center font-sans text-sm">6</div>
        </div>
      </div>
      <div>
        <TwClass name="content-center" tooltip="align-content: center" class="mb-1 w-max">center</TwClass>
        <div class="h-20 bg-gray-700 flex flex-wrap p-0.5 gap-0.5 content-center">
          <div class="bg-green-600 rounded w-7 h-5 flex justify-center items-center font-sans text-sm">1</div>
          <div class="bg-green-600 rounded w-7 h-5 flex justify-center items-center font-sans text-sm">2</div>
          <div class="bg-green-600 rounded w-7 h-5 flex justify-center items-center font-sans text-sm">3</div>
          <div class="bg-green-600 rounded w-7 h-5 flex justify-center items-center font-sans text-sm">4</div>
          <div class="bg-green-600 rounded w-7 h-5 flex justify-center items-center font-sans text-sm">5</div>
          <div class="bg-green-600 rounded w-7 h-5 flex justify-center items-center font-sans text-sm">6</div>
        </div>
      </div>
      <div>
        <TwClass name="content-end" tooltip="align-content: flex-end" class="mb-1 w-max">end</TwClass>
        <div class="h-20 bg-gray-700 flex flex-wrap p-0.5 gap-0.5 content-end">
          <div class="bg-green-600 rounded w-7 h-5 flex justify-center items-center font-sans text-sm">1</div>
          <div class="bg-green-600 rounded w-7 h-5 flex justify-center items-center font-sans text-sm">2</div>
          <div class="bg-green-600 rounded w-7 h-5 flex justify-center items-center font-sans text-sm">3</div>
          <div class="bg-green-600 rounded w-7 h-5 flex justify-center items-center font-sans text-sm">4</div>
          <div class="bg-green-600 rounded w-7 h-5 flex justify-center items-center font-sans text-sm">5</div>
          <div class="bg-green-600 rounded w-7 h-5 flex justify-center items-center font-sans text-sm">6</div>
        </div>
      </div>
      <div>
        <TwClass name="content-between" tooltip="align-content: space-between" class="mb-1 w-max">between</TwClass>
        <div class="h-20 bg-gray-700 flex flex-wrap p-0.5 gap-0.5 content-between">
          <div class="bg-green-600 rounded w-7 h-5 flex justify-center items-center font-sans text-sm">1</div>
          <div class="bg-green-600 rounded w-7 h-5 flex justify-center items-center font-sans text-sm">2</div>
          <div class="bg-green-600 rounded w-7 h-5 flex justify-center items-center font-sans text-sm">3</div>
          <div class="bg-green-600 rounded w-7 h-5 flex justify-center items-center font-sans text-sm">4</div>
          <div class="bg-green-600 rounded w-7 h-5 flex justify-center items-center font-sans text-sm">5</div>
          <div class="bg-green-600 rounded w-7 h-5 flex justify-center items-center font-sans text-sm">6</div>
        </div>
      </div>
      <div>
        <TwClass name="content-around" tooltip="align-content: space-around" class="mb-1 w-max">around</TwClass>
        <div class="h-20 bg-gray-700 flex flex-wrap p-0.5 gap-0.5 content-around">
          <div class="bg-green-600 rounded w-7 h-5 flex justify-center items-center font-sans text-sm">1</div>
          <div class="bg-green-600 rounded w-7 h-5 flex justify-center items-center font-sans text-sm">2</div>
          <div class="bg-green-600 rounded w-7 h-5 flex justify-center items-center font-sans text-sm">3</div>
          <div class="bg-green-600 rounded w-7 h-5 flex justify-center items-center font-sans text-sm">4</div>
          <div class="bg-green-600 rounded w-7 h-5 flex justify-center items-center font-sans text-sm">5</div>
          <div class="bg-green-600 rounded w-7 h-5 flex justify-center items-center font-sans text-sm">6</div>
        </div>
      </div>
      <div>
        <TwClass name="content-evenly" tooltip="align-content: space-evenly" class="mb-1 w-max">evenly</TwClass>
        <div class="h-20 bg-gray-700 flex flex-wrap p-0.5 gap-0.5 content-evenly">
          <div class="bg-green-600 rounded w-7 h-5 flex justify-center items-center font-sans text-sm">1</div>
          <div class="bg-green-600 rounded w-7 h-5 flex justify-center items-center font-sans text-sm">2</div>
          <div class="bg-green-600 rounded w-7 h-5 flex justify-center items-center font-sans text-sm">3</div>
          <div class="bg-green-600 rounded w-7 h-5 flex justify-center items-center font-sans text-sm">4</div>
          <div class="bg-green-600 rounded w-7 h-5 flex justify-center items-center font-sans text-sm">5</div>
          <div class="bg-green-600 rounded w-7 h-5 flex justify-center items-center font-sans text-sm">6</div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
