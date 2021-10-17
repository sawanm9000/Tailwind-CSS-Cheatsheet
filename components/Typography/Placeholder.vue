<template>
  <Card>
    <div class="prefix"><Lnk href="https://tailwindcss.com/docs/placeholder-color">placeholder-</Lnk></div>
    <div class="content grid grid-cols-2 gap-y-3">
      <a href="/style" class="text-red-600">{color}</a>
      <input class="font-sans text-sm pl-2 bg-coolGray-700 border rounded placeholder-red-600" placeholder="Abcdefgh" />
      <TwClass class="w-max" name="placeholder-transparent" tooltip="color: transparent">transparent</TwClass>
      <input class="font-sans text-sm pl-2 bg-coolGray-700 border rounded placeholder-transparent" placeholder="Abcdefgh" />
      <TwClass class="w-max" name="placeholder-current" tooltip="color: currentColor">current</TwClass>
      <input class="font-sans text-sm pl-2 bg-coolGray-700 border rounded text-emerald-400 placeholder-current" placeholder="Abcdefgh" />
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
