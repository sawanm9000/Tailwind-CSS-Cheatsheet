<template>
  <Card>
    <div class="prefix"><Lnk href="https://tailwindcss.com/docs/vertical-align">align-</Lnk></div>
    <div class="content grid grid-cols-2 gap-y-0.5">
      <TwClass class="w-max" name="align-baseline" tooltip="vertical-align: baseline">baseline</TwClass>
      <div class="font-sans text-sm h-9 border border-coolGray-400 px-1.5 inline-block align-baseline">Abcdefgh</div>
      <TwClass class="w-max" name="align-top" tooltip="vertical-align: top">top</TwClass>
      <div class="font-sans text-sm h-9 border border-coolGray-400 px-1.5 inline-block align-top">Abcdefgh</div>
      <TwClass class="w-max" name="align-middle" tooltip="vertical-align: middle">middle</TwClass>
      <div class="font-sans text-sm h-9 border border-coolGray-400 px-1.5 inline-block align-middle">Abcdefgh</div>
      <TwClass class="w-max" name="align-bottom" tooltip="vertical-align: bottom">bottom</TwClass>
      <div class="font-sans text-sm h-9 border border-coolGray-400 px-1.5 inline-block align-bottom">Abcdefgh</div>
      <TwClass class="w-max" name="align-text-top" tooltip="vertical-align: text-top">text-top</TwClass>
      <div class="font-sans text-sm h-9 border border-coolGray-400 px-1.5 inline-block align-text-top">Abcdefgh</div>
      <TwClass class="w-max" name="align-text-bottom" tooltip="vertical-align: text-bottom">text-bottom</TwClass>
      <div class="font-sans text-sm h-9 border border-coolGray-400 px-1.5 inline-block align-text-bottom">Abcdefgh</div>
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
