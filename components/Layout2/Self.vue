<template>
  <Card>
    <div class="prefix"><Lnk href="https://tailwindcss.com/docs/align-self">self-</Lnk></div>
    <div class="content grid grid-cols-3 gap-2">
      <div>
        <TwClass name="self-start" tooltip="align-self: flex-start" class="mb-1 w-max">start</TwClass>
        <div class="h-20 bg-coolGray-700 flex items-stretch gap-0.5 p-0.5">
          <div class="font-sans text-sm flex justify-center items-center rounded flex-1 bg-coolGray-500"></div>
          <div class="font-sans text-sm flex justify-center items-center rounded flex-1 bg-emerald-600 py-1 self-start">1</div>
          <div class="font-sans text-sm flex justify-center items-center rounded flex-1 bg-coolGray-500"></div>
        </div>
      </div>
      <div>
        <TwClass name="self-center" tooltip="align-self: center" class="mb-1 w-max">center</TwClass>
        <div class="h-20 bg-coolGray-700 flex items-stretch gap-0.5 p-0.5">
          <div class="font-sans text-sm flex justify-center items-center rounded flex-1 bg-coolGray-500"></div>
          <div class="font-sans text-sm flex justify-center items-center rounded flex-1 bg-emerald-600 py-1 self-center">1</div>
          <div class="font-sans text-sm flex justify-center items-center rounded flex-1 bg-coolGray-500"></div>
        </div>
      </div>
      <div>
        <TwClass name="self-end" tooltip="align-self: flex-end" class="mb-1 w-max">end</TwClass>
        <div class="h-20 bg-coolGray-700 flex items-stretch gap-0.5 p-0.5">
          <div class="font-sans text-sm flex justify-center items-center rounded flex-1 bg-coolGray-500"></div>
          <div class="font-sans text-sm flex justify-center items-center rounded flex-1 bg-emerald-600 py-1 self-end">1</div>
          <div class="font-sans text-sm flex justify-center items-center rounded flex-1 bg-coolGray-500"></div>
        </div>
      </div>
      <div>
        <TwClass name="self-stretch" tooltip="align-self: stretch" class="mb-1 w-max">stretch</TwClass>
        <div class="h-20 bg-coolGray-700 flex items-stretch gap-0.5 p-0.5">
          <div class="font-sans text-sm flex justify-center items-center rounded flex-1 bg-coolGray-500"></div>
          <div class="font-sans text-sm flex justify-center items-center rounded flex-1 bg-emerald-600">1</div>
          <div class="font-sans text-sm flex justify-center items-center rounded flex-1 bg-coolGray-500"></div>
        </div>
      </div>
      <div>
        <TwClass name="self-auto" tooltip="align-self: auto" class="mb-1 w-max">auto</TwClass>
        <div class="h-20 bg-coolGray-700 flex items-stretch gap-0.5 p-0.5">
          <div class="font-sans text-sm flex justify-center items-center rounded flex-1 bg-coolGray-500 "></div>
          <div class="font-sans text-sm flex justify-center items-center rounded flex-1 bg-emerald-600 self-auto">1</div>
          <div class="font-sans text-sm flex justify-center items-center rounded flex-1 bg-coolGray-500 "></div>
        </div>
      </div>
      <div>
        <TwClass name="self-baseline" tooltip="align-self: baseline" class="mb-1 w-max">baseline</TwClass>
        <div class="h-20 bg-coolGray-700 flex items-stretch gap-0.5 p-0.5">
          <div class="font-sans text-sm flex justify-center items-center rounded flex-1 bg-coolGray-500 "></div>
          <div class="font-sans text-sm flex justify-center items-center rounded flex-1 bg-emerald-600 py-1 self-baseline">1</div>
          <div class="font-sans text-sm flex justify-center items-center rounded flex-1 bg-coolGray-500 "></div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
