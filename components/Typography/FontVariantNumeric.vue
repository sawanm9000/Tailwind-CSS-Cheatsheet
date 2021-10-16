<template>
  <Card>
    <div><Lnk href="https://tailwindcss.com/docs/font-variant-numeric" class="font-sans text-sm text-gray-400 m-2">Font variant numeric</Lnk></div>
    <div class="content grid grid-cols-2 gap-y-2">
      <TwClass class="w-max" name="normal-nums" tooltip="font-variant-numeric: normal">normal-nums</TwClass>
      <p class="font-sans text-sm normal-nums">1234567890</p>
      <TwClass class="w-max" name="ordinal" tooltip="font-variant-numeric: ordinal">ordinal</TwClass>
      <p class="font-sans text-sm ordinal">1st</p>
      <TwClass class="w-max" name="slashed-zero" tooltip="font-variant-numeric: slashed-zero">slashed-zero</TwClass>
      <p class="font-sans text-sm slashed-zero">0</p>
      <TwClass class="w-max" name="lining-nums" tooltip="font-variant-numeric: lining-nums">lining-nums</TwClass>
      <p class="font-sans text-sm lining-nums">1234567890</p>
      <TwClass class="w-max" name="oldstyle-nums" tooltip="font-variant-numeric: oldstyle-nums">oldstyle-nums</TwClass>
      <p class="font-sans text-sm oldstyle-nums">1234567890</p>
      <TwClass class="w-max" name="proportional-nums" tooltip="font-variant-numeric: proportional-nums">proportional-nums</TwClass>
      <div>
        <p class="font-sans text-sm proportional-nums">121212</p>
        <p class="font-sans text-sm proportional-nums">909090</p>
      </div>
      <TwClass class="w-max" name="tabular-nums" tooltip="font-variant-numeric: tabular-nums">tabular-nums</TwClass>
      <div>
        <p class="font-sans text-sm tabular-nums">121212</p>
        <p class="font-sans text-sm tabular-nums">909090</p>
      </div>
      <TwClass class="w-max" name="diagonal-fractions" tooltip="font-variant-numeric: diagonal-fractions">diagonal-fractions</TwClass>
      <p class="font-sans text-sm diagonal-fractions">1/2 3/4 5/6</p>
      <TwClass class="w-max" name="stacked-fractions" tooltip="font-variant-numeric: stacked-fractions">stacked-fractions</TwClass>
      <p class="font-sans text-sm stacked-fractions">1/2 3/4 5/6</p>
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
