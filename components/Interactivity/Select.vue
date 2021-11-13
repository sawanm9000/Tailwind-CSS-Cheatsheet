<template>
  <Card>
    <div class="prefix">
      <Lnk href="https://tailwindcss.com/docs/user-select">select-</Lnk>
    </div>
    <div class="content">
      <div class="grid grid-cols-2 gap-2">
        <div>
          <TwClass name="select-none" tooltip="user-select: none" class="w-max">none</TwClass>
          <div class="mt-1 py-0.5 font-sans text-sm bg-coolGray-700 text-center select-none">Not selectable</div>
        </div>
        <div>
          <TwClass name="select-text" tooltip="user-select: text" class="w-max">text</TwClass>
          <div class="mt-1 py-0.5 font-sans text-sm bg-coolGray-700 text-center select-text">Selectable</div>
        </div>
        <div>
          <TwClass name="select-all" tooltip="user-select: all" class="w-max">all</TwClass>
          <div class="mt-1 py-0.5 font-sans text-sm bg-coolGray-700 text-center select-all">Click to select all</div>
        </div>
        <div>
          <TwClass name="select-auto" tooltip="user-select: auto" class="w-max">auto</TwClass>
          <div class="mt-1 py-0.5 font-sans text-sm bg-coolGray-700 text-center select-auto">Browser behavior</div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
