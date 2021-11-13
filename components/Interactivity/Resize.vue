<template>
  <Card>
    <div class="prefix">
      <Lnk href="https://tailwindcss.com/docs/resize">resize</Lnk>
    </div>
    <div class="content">
      <div class="grid grid-cols-2 gap-2">
        <div class="z-20">
          <TwClass name="resize" tooltip="resize: both" class="opacity-0">.</TwClass>
          <div class="h-10">
            <textarea class="w-full px-1 mt-1 font-sans text-sm bg-coolGray-900 resize" placeholder="Resize me"></textarea>
          </div>
        </div>
        <div>
          <TwClass name="resize-x" tooltip="resize: horizontal" class="w-max">-x</TwClass>
          <textarea class="w-full px-1 mt-1 font-sans text-sm bg-coolGray-900 resize-x" placeholder="Resize me"></textarea>
        </div>
        <div class="z-10">
          <TwClass name="resize-y" tooltip="resize: vertical" class="w-max">-y</TwClass>
          <div class="h-10">
            <textarea class="w-full px-1 mt-1 font-sans text-sm bg-coolGray-900 resize-y" placeholder="Resize me"></textarea>
          </div>
        </div>
        <div>
          <TwClass name="resize-none" tooltip="resize: none" class="w-max">-none</TwClass>
          <textarea class="w-full px-1 mt-1 font-sans text-sm bg-coolGray-900 resize-none" placeholder="Resize me"></textarea>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
