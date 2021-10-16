<template>
  <Card>
    <div class="flex justify-between">
      <div class="prefix"><Lnk href="https://tailwindcss.com/docs/justify-content">justify-</Lnk></div>
      <div class="font-sans text-sm text-coolGray-400 px-2">Flex + Grid</div>
    </div>
    <div class="content grid grid-cols-3 gap-2">
      <div>
        <TwClass name="justify-start" tooltip="justify-content: flex-start" class="mb-1 w-max">start</TwClass>
        <div class="h-20 bg-coolGray-700 flex justify-start gap-0.5 p-0.5">
          <div class="bg-emerald-600 w-4 h-6 rounded flex justify-center items-center font-sans text-sm">1</div>
          <div class="bg-emerald-600 w-4 h-6 rounded flex justify-center items-center font-sans text-sm">2</div>
          <div class="bg-emerald-600 w-4 h-6 rounded flex justify-center items-center font-sans text-sm">3</div>
        </div>
      </div>
      <div>
        <TwClass name="justify-center" tooltip="justify-content: center" class="mb-1 w-max">center</TwClass>
        <div class="h-20 bg-coolGray-700 flex justify-center gap-0.5 p-0.5">
          <div class="bg-emerald-600 w-4 h-6 rounded flex justify-center items-center font-sans text-sm">1</div>
          <div class="bg-emerald-600 w-4 h-6 rounded flex justify-center items-center font-sans text-sm">2</div>
          <div class="bg-emerald-600 w-4 h-6 rounded flex justify-center items-center font-sans text-sm">3</div>
        </div>
      </div>
      <div>
        <TwClass name="justify-end" tooltip="justify-content: flex-end" class="mb-1 w-max">end</TwClass>
        <div class="h-20 bg-coolGray-700 flex justify-end gap-0.5 p-0.5">
          <div class="bg-emerald-600 w-4 h-6 rounded flex justify-center items-center font-sans text-sm">1</div>
          <div class="bg-emerald-600 w-4 h-6 rounded flex justify-center items-center font-sans text-sm">2</div>
          <div class="bg-emerald-600 w-4 h-6 rounded flex justify-center items-center font-sans text-sm">3</div>
        </div>
      </div>
      <div>
        <TwClass name="justify-between" tooltip="justify-content: space-between" class="mb-1 w-max">between</TwClass>
        <div class="h-20 bg-coolGray-700 flex justify-between gap-0.5 p-0.5">
          <div class="bg-emerald-600 w-4 h-6 rounded flex justify-center items-center font-sans text-sm">1</div>
          <div class="bg-emerald-600 w-4 h-6 rounded flex justify-center items-center font-sans text-sm">2</div>
          <div class="bg-emerald-600 w-4 h-6 rounded flex justify-center items-center font-sans text-sm">3</div>
        </div>
      </div>
      <div>
        <TwClass name="justify-around" tooltip="justify-content: space-around" class="mb-1 w-max">around</TwClass>
        <div class="h-20 bg-coolGray-700 flex justify-around gap-0.5 p-0.5">
          <div class="bg-emerald-600 w-4 h-6 rounded flex justify-center items-center font-sans text-sm">1</div>
          <div class="bg-emerald-600 w-4 h-6 rounded flex justify-center items-center font-sans text-sm">2</div>
          <div class="bg-emerald-600 w-4 h-6 rounded flex justify-center items-center font-sans text-sm">3</div>
        </div>
      </div>
      <div>
        <TwClass name="justify-evenly" tooltip="justify-content: space-evenly" class="mb-1 w-max">evenly</TwClass>
        <div class="h-20 bg-coolGray-700 flex justify-evenly gap-0.5 p-0.5">
          <div class="bg-emerald-600 w-4 h-6 rounded flex justify-center items-center font-sans text-sm">1</div>
          <div class="bg-emerald-600 w-4 h-6 rounded flex justify-center items-center font-sans text-sm">2</div>
          <div class="bg-emerald-600 w-4 h-6 rounded flex justify-center items-center font-sans text-sm">3</div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
