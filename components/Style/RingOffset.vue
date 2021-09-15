<template>
  <Card>
    <div class="prefix">
      <Lnk href="https://tailwindcss.com/docs/ring-offset-width">ring-offset-</Lnk>
    </div>
    <div class="content">
      <div class="grid grid-cols-5 mb-3.5">
        <div>
          <TwClass name="ring-offset-0" tooltip="--tw-ring-offset-width: 0px" class="w-max">0</TwClass>
          <div class="bg-blue-700 w-9 h-9 mt-3 rounded ring ring-offset-0"></div>
        </div>
        <div>
          <TwClass name="ring-offset-1" tooltip="--tw-ring-offset-width: 1px" class="w-max">1</TwClass>
          <div class="bg-blue-700 w-9 h-9 mt-3 rounded ring ring-offset-1"></div>
        </div>
        <div>
          <TwClass name="ring-offset-2" tooltip="--tw-ring-offset-width: 2px" class="w-max">2</TwClass>
          <div class="bg-blue-700 w-9 h-9 mt-3 rounded ring ring-offset-2"></div>
        </div>
        <div>
          <TwClass name="ring-offset-4" tooltip="--tw-ring-offset-width: 4px" class="w-max">4</TwClass>
          <div class="bg-blue-700 w-9 h-9 mt-3 rounded ring ring-offset-4"></div>
        </div>
        <div>
          <TwClass name="ring-offset-8" tooltip="--tw-ring-offset-width: 8px" class="w-max">8</TwClass>
          <div class="bg-blue-700 w-9 h-9 mt-3 rounded ring ring-offset-8"></div>
        </div>
      </div>
      <div class="grid grid-cols-3">
        <div>
          <div class="text-red-600">{color}</div>
          <div class="bg-blue-700 w-9 h-9 mt-2 rounded ring ring-offset-2 ring-offset-red-600"></div>
        </div>
        <div>
          <TwClass name="ring-offset-transparent" tooltip="--tw-ring-offset-color: transparent" class="w-max">transparent</TwClass>
          <div class="bg-blue-700 w-9 h-9 mt-2 rounded ring ring-offset-2 ring-offset-transparent"></div>
        </div>
        <div>
          <TwClass name="ring-offset-current" tooltip="--tw-ring-offset-color: currentColor" class="w-max">current</TwClass>
          <div class="bg-blue-700 w-9 h-9 mt-2 rounded ring ring-offset-2 ring-offset-current"></div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
export default {}
</script>

