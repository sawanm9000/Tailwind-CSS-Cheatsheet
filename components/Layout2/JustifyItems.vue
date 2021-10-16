<template>
  <Card>
    <div class="flex justify-between">
      <div class="prefix"><Lnk href="https://tailwindcss.com/docs/justify-items">justify-items-</Lnk></div>
      <div class="font-sans text-sm text-coolGray-400 px-2">Grid</div>
    </div>
    <div class="content grid grid-cols-3 gap-2">
      <div>
        <TwClass name="justify-items-start" tooltip="justify-items: start" class="mb-1 w-max">start</TwClass>
        <div class="h-20 bg-coolGray-700 grid grid-cols-3 p-0.5 gap-0.5 justify-items-start">
          <div class="bg-emerald-600 rounded p-1 h-6 flex justify-center items-center font-sans text-sm">1</div>
          <div class="bg-emerald-600 rounded p-1 h-6 flex justify-center items-center font-sans text-sm">2</div>
          <div class="bg-emerald-600 rounded p-1 h-6 flex justify-center items-center font-sans text-sm">3</div>
          <div class="bg-emerald-600 rounded p-1 h-6 flex justify-center items-center font-sans text-sm">4</div>
          <div class="bg-emerald-600 rounded p-1 h-6 flex justify-center items-center font-sans text-sm">5</div>
          <div class="bg-emerald-600 rounded p-1 h-6 flex justify-center items-center font-sans text-sm">6</div>
        </div>
      </div>
      <div>
        <TwClass name="justify-items-center" tooltip="justify-items: center" class="mb-1 w-max">center</TwClass>
        <div class="h-20 bg-coolGray-700 grid grid-cols-3 p-0.5 gap-0.5 justify-items-center">
          <div class="bg-emerald-600 rounded p-1 h-6 flex justify-center items-center font-sans text-sm">1</div>
          <div class="bg-emerald-600 rounded p-1 h-6 flex justify-center items-center font-sans text-sm">2</div>
          <div class="bg-emerald-600 rounded p-1 h-6 flex justify-center items-center font-sans text-sm">3</div>
          <div class="bg-emerald-600 rounded p-1 h-6 flex justify-center items-center font-sans text-sm">4</div>
          <div class="bg-emerald-600 rounded p-1 h-6 flex justify-center items-center font-sans text-sm">5</div>
          <div class="bg-emerald-600 rounded p-1 h-6 flex justify-center items-center font-sans text-sm">6</div>
        </div>
      </div>
      <div>
        <TwClass name="justify-items-end" tooltip="justify-items: end" class="mb-1 w-max">end</TwClass>
        <div class="h-20 bg-coolGray-700 grid grid-cols-3 p-0.5 gap-0.5 justify-items-end">
          <div class="bg-emerald-600 rounded p-1 h-6 flex justify-center items-center font-sans text-sm">1</div>
          <div class="bg-emerald-600 rounded p-1 h-6 flex justify-center items-center font-sans text-sm">2</div>
          <div class="bg-emerald-600 rounded p-1 h-6 flex justify-center items-center font-sans text-sm">3</div>
          <div class="bg-emerald-600 rounded p-1 h-6 flex justify-center items-center font-sans text-sm">4</div>
          <div class="bg-emerald-600 rounded p-1 h-6 flex justify-center items-center font-sans text-sm">5</div>
          <div class="bg-emerald-600 rounded p-1 h-6 flex justify-center items-center font-sans text-sm">6</div>
        </div>
      </div>
      <div>
        <TwClass name="justify-items-stretch" tooltip="justify-items: stretch" class="mb-1 w-max">stretch</TwClass>
        <div class="h-20 bg-coolGray-700 grid grid-cols-3 p-0.5 gap-0.5 justify-items-stretch">
          <div class="bg-emerald-600 rounded p-1 h-6 flex justify-center items-center font-sans text-sm">1</div>
          <div class="bg-emerald-600 rounded p-1 h-6 flex justify-center items-center font-sans text-sm">2</div>
          <div class="bg-emerald-600 rounded p-1 h-6 flex justify-center items-center font-sans text-sm">3</div>
          <div class="bg-emerald-600 rounded p-1 h-6 flex justify-center items-center font-sans text-sm">4</div>
          <div class="bg-emerald-600 rounded p-1 h-6 flex justify-center items-center font-sans text-sm">5</div>
          <div class="bg-emerald-600 rounded p-1 h-6 flex justify-center items-center font-sans text-sm">6</div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
