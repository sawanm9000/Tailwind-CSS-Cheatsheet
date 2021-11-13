<template>
  <Card>
    <div class="prefix">
      <Lnk href="https://tailwindcss.com/docs/cursor">cursor-</Lnk>
    </div>
    <div class="content">
      <div class="grid grid-cols-3 gap-2">
        <div>
          <TwClass name="cursor-auto" tooltip="cursor: auto" class="w-max">auto</TwClass>
          <div class="h-14 mt-1 border-2 border-coolGray-500 border-dashed rounded-md font-sans text-sm text-coolGray-400 flex justify-center items-center select-none cursor-auto">Hover</div>
        </div>
        <div>
          <TwClass name="cursor-default" tooltip="cursor: default" class="w-max">default</TwClass>
          <div class="h-14 mt-1 border-2 border-coolGray-500 border-dashed rounded-md font-sans text-sm text-coolGray-400 flex justify-center items-center select-none cursor-default">Hover</div>
        </div>
        <div>
          <TwClass name="cursor-pointer" tooltip="cursor: pointer" class="w-max">pointer</TwClass>
          <div class="h-14 mt-1 border-2 border-coolGray-500 border-dashed rounded-md font-sans text-sm text-coolGray-400 flex justify-center items-center select-none cursor-pointer">Hover</div>
        </div>
        <div>
          <TwClass name="cursor-wait" tooltip="cursor: wait" class="w-max">wait</TwClass>
          <div class="h-14 mt-1 border-2 border-coolGray-500 border-dashed rounded-md font-sans text-sm text-coolGray-400 flex justify-center items-center select-none cursor-wait">Hover</div>
        </div>
        <div>
          <TwClass name="cursor-text" tooltip="cursor: text" class="w-max">text</TwClass>
          <div class="h-14 mt-1 border-2 border-coolGray-500 border-dashed rounded-md font-sans text-sm text-coolGray-400 flex justify-center items-center select-none cursor-text">Hover</div>
        </div>
        <div>
          <TwClass name="cursor-move" tooltip="cursor: move" class="w-max">move</TwClass>
          <div class="h-14 mt-1 border-2 border-coolGray-500 border-dashed rounded-md font-sans text-sm text-coolGray-400 flex justify-center items-center select-none cursor-move">Hover</div>
        </div>
        <div>
          <TwClass name="cursor-help" tooltip="cursor: help" class="w-max">help</TwClass>
          <div class="h-14 mt-1 border-2 border-coolGray-500 border-dashed rounded-md font-sans text-sm text-coolGray-400 flex justify-center items-center select-none cursor-help">Hover</div>
        </div>
        <div>
          <TwClass name="cursor-not-allowed" tooltip="cursor: not-allowed" class="w-max">not-allowed</TwClass>
          <div class="h-14 mt-1 border-2 border-coolGray-500 border-dashed rounded-md font-sans text-sm text-coolGray-400 flex justify-center items-center select-none cursor-not-allowed">Hover</div>
        </div>

      </div>
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
