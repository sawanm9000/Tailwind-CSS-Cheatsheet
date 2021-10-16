<template>
  <Card>
    <div class="prefix">
      <Lnk href="https://tailwindcss.com/docs/gradient-color-stops" class="whitespace-pre">from-  via-  to-</Lnk>
    </div>
    <div class="content">
      <div class="grid grid-cols-3 gap-2">
        <div>
          <div class="text-red-600">{color}</div>
          <div class="h-14 mt-1 rounded bg-gradient-to-r from-blue-700 to-red-600"></div>
        </div>
        <div>
          <TwClass name="to-transparent" tooltip="--tw-gradient-to: transparent">transparent</TwClass>
          <div class="h-14 mt-1 rounded bg-gradient-to-r from-blue-700 to-transparent"></div>
        </div>
        <div>
          <TwClass name="to-current" tooltip="--tw-gradient-to: currentColor">current</TwClass>
          <div class="h-14 mt-1 rounded flex justify-center items-center font-sans text-base font-bold bg-gradient-to-r from-blue-700 to-current text-emerald-400">Hi</div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
export default {}
</script>

