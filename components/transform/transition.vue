<template>
  <Card>
    <div class="prefix">
      <Lnk href="https://tailwindcss.com/docs/transition-property">transition</Lnk>
    </div>
    <div class="content">
      <div class="grid grid-cols-4 gap-2">
        <div>
          <TwClass name="transition-none" tooltip="" class="w-max">-none</TwClass>
          <div class="h-20 mt-1 bg-coolGray-600 rounded"></div>
        </div>
        <div>
          <TwClass name="transition-all" tooltip="" class="w-max">-all</TwClass>
          <div class="h-20 mt-1 bg-coolGray-600 rounded"></div>
        </div>
        <div>
          <TwClass name="transition" tooltip="" class="text-coolGray-600 text-opacity-0">.</TwClass>
          <div class="h-20 mt-1 bg-coolGray-600 rounded"></div>
        </div>
        <div>
          <TwClass name="transition-colors" tooltip="" class="w-max">-colors</TwClass>
          <div class="h-20 mt-1 bg-coolGray-600 rounded"></div>
        </div>
        <div>
          <TwClass name="transition-opacity" tooltip="" class="w-max">-opacity</TwClass>
          <div class="h-20 mt-1 bg-coolGray-600 rounded"></div>
        </div>
        <div>
          <TwClass name="transition-shadow" tooltip="" class="w-max">-shadow</TwClass>
          <div class="h-20 mt-1 bg-coolGray-600 rounded"></div>
        </div>
        <div class="col-span-2">
          <TwClass name="transition-transform" tooltip="" class="w-max">-transform</TwClass>
          <div class="h-20 mt-1 bg-coolGray-600 rounded"></div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
