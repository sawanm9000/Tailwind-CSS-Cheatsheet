<template>
  <Card>
    <div class="prefix"><Lnk href="https://tailwindcss.com/docs/placeholder-color">placeholder-</Lnk></div>
    <div class="content grid grid-cols-2 gap-y-3">
      <TwClass class="w-max" name="placeholder-transparent" tooltip="color: transparent">transparent</TwClass>
      <input class="font-sans text-sm pl-2 bg-gray-700 border rounded placeholder-transparent" placeholder="Abcdefgh" />
      <TwClass class="w-max" name="placeholder-current" tooltip="color: currentColor">current</TwClass>
      <input class="font-sans text-sm pl-2 bg-gray-700 border rounded placeholder-current" placeholder="Abcdefgh" />
      <div class="text-red-600">{color}</div>
      <input class="font-sans text-sm pl-2 bg-gray-700 border rounded placeholder-red-600" placeholder="Abcdefgh" />
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
