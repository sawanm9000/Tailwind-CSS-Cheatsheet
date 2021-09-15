<template>
  <Card>
    <div class="prefix">
      <Lnk href="https://tailwindcss.com/docs/margin">m-  mx-  my-  mt-  mr-  mb-  ml-<br>-m- -mx- -my- -mt- -mr- -mb- -ml-</Lnk><br><Lnk href="https://tailwindcss.com/docs/padding">p-  px-  py-  pt-  pr-  pb-  pl-</Lnk>
    </div>
    <div class="content">
      <div class="grid grid-cols-2 gap-2">
        <a href="#length" class="text-blue-300 cursor-pointer select-none w-max" @mouseover="$nuxt.$emit('highlightLength', true)" @mouseleave="$nuxt.$emit('highlightLength', false)" @click="$nuxt.$emit('blinkLength')">{length}</a>
        <TwClass name="mx-auto" tooltip="margin-left/right: auto" class="w-max">auto</TwClass>
      </div>
    </div>
  </Card>
</template>

<script>
export default {}
</script>
