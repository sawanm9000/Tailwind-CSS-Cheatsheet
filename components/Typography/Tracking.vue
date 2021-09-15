<template>
  <Card>
    <div class="prefix"><Lnk href="https://tailwindcss.com/docs/letter-spacing">tracking-</Lnk></div>
    <div class="content grid grid-cols-2 gap-y-2.5">
      <TwClass class="w-max" name="tracking-tighter" tooltip="letter-spacing: -0.05em">tighter</TwClass>
      <div class="font-sans text-sm tracking-tighter">Abcdefgh</div>
      <TwClass class="w-max" name="tracking-tight" tooltip="letter-spacing: -0.025em">tight</TwClass>
      <div class="font-sans text-sm tracking-tight">Abcdefgh</div>
      <TwClass class="w-max" name="tracking-normal" tooltip="letter-spacing: 0em">normal</TwClass>
      <div class="font-sans text-sm tracking-normal">Abcdefgh</div>
      <TwClass class="w-max" name="tracking-wide" tooltip="letter-spacing: 0.025em">wide</TwClass>
      <div class="font-sans text-sm tracking-wide">Abcdefgh</div>
      <TwClass class="w-max" name="tracking-wider" tooltip="letter-spacing: 0.05em">wider</TwClass>
      <div class="font-sans text-sm tracking-wider">Abcdefgh</div>
      <TwClass class="w-max" name="tracking-widest" tooltip="letter-spacing: 0.1em">widest</TwClass>
      <div class="font-sans text-sm tracking-widest">Abcdefgh</div>
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
