<template>
  <Card>
    <div class="prefix">
      <Lnk href="https://tailwindcss.com/docs/border-width">border</Lnk>
    </div>
    <div class="content">
      <div class="grid grid-cols-5 gap-x-2 mb-3">
        <div>
          <TwClass name="border-0" tooltip="border-width: 0px" class="w-max">-0</TwClass>
          <div class="bg-blue-700 rounded-sm w-9 h-9 border-0"></div>
        </div>
        <div>
          <div class="invisible">.</div>
          <div class="bg-blue-700 rounded-sm w-9 h-9 border"></div>
        </div>
        <div>
          <TwClass name="border-2" tooltip="border-width: 2px" class="w-max">-2</TwClass>
          <div class="bg-blue-700 rounded-sm w-9 h-9 border-2"></div>
        </div>
        <div>
          <TwClass name="border-4" tooltip="border-width: 4px" class="w-max">-4</TwClass>
          <div class="bg-blue-700 rounded-sm w-9 h-9 border-4"></div>
        </div>
        <div>
          <TwClass name="border-8" tooltip="border-width: 8px" class="w-max">-8</TwClass>
          <div class="bg-blue-700 rounded-sm w-9 h-9 border-8"></div>
        </div>
      </div>
      <div class="mb-1">-{ t | r | b | l }-{ size }</div>
      <div class="font-sans text-sm text-coolGray-400">Examples:</div>
      <div class="grid grid-cols-3 gap-y-2 justify-items-center mb-4">
        <div class=" col-start-2 row-start-1">
          <div>-t-4</div>
          <div class="w-9 h-9 bg-blue-700 rounded-sm border-t-4"></div>
        </div>
        <div class=" col-start-1 row-start-2">
          <div>-l-4</div>
          <div class="w-9 h-9 bg-blue-700 rounded-sm border-l-4"></div>
        </div>
        <div class=" col-start-2 row-start-2">
          <div>-4</div>
          <div class="w-9 h-9 bg-blue-700 rounded-sm border-4"></div>
        </div>
        <div class=" col-start-3 row-start-2">
          <div>-r-4</div>
          <div class="w-9 h-9 bg-blue-700 rounded-sm border-r-4"></div>
        </div>
        <div class=" col-start-2 row-start-3">
          <div>-b-4</div>
          <div class="w-9 h-9 bg-blue-700 rounded-sm border-b-4"></div>
        </div>
      </div>
      <div class="grid grid-cols-3 mb-4 gap-x-2">
        <div>
          <div class="text-red-600">-{color}</div>
          <div class="w-9 h-9 bg-blue-700 rounded-sm border-4 mt-1 border-red-600"></div>
        </div>
        <div>
          <TwClass name="border-transparent" tooltip="border-color: transparent">-transparent</TwClass>
          <div class="w-9 h-9 bg-blue-700 rounded-sm border-4 border-transparent mt-1"></div>
        </div>
        <div>
          <TwClass name="border-current" tooltip="border-color: currentColor">-current</TwClass>
          <div class="w-9 h-9 bg-blue-700 rounded-sm mt-1 font-sans flex justify-center items-center text-emerald-400 border-4 border-current">Hi</div>
        </div>
      </div>
      <div class="grid grid-cols-4 gap-2 mb-3">
        <div>
          <TwClass name="border-solid" tooltip="border-style: solid">-solid</TwClass>
          <div class="w-9 h-9 mt-1 bg-blue-700 rounded-sm border-2 border-solid"></div>
        </div>
        <div>
          <TwClass name="border-dashed" tooltip="border-style: dashed">-dashed</TwClass>
          <div class="w-9 h-9 mt-1 bg-blue-700 rounded-sm border-2 border-dashed"></div>
        </div>
        <div>
          <TwClass name="border-dotted" tooltip="border-style: dotted">-dotted</TwClass>
          <div class="w-9 h-9 mt-1 bg-blue-700 rounded-sm border-2 border-dotted"></div>
        </div>
        <div>
          <TwClass name="border-double" tooltip="border-style: double">-double</TwClass>
          <div class="w-9 h-9 mt-1 bg-blue-700 rounded-sm border-4 border-double"></div>
        </div>
        <div>
          <TwClass name="border-none" tooltip="border-style: none">-none</TwClass>
          <div class="w-9 h-9 mt-1 bg-blue-700 rounded-sm border-2 border-none"></div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
export default {}
</script>

