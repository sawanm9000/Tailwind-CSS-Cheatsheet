<template>
  <Card>
    <div class="content">
      <div class="title"><Lnk href="https://tailwindcss.com/docs/sepia">Sepia</Lnk></div>
      <div class="flex gap-2">
        <div class="flex-1">
          <TwClass name="sepia-0" tooltip="--tw-sepia: sepia(0)" class="w-max">sepia-0</TwClass>
          <Img class="h-12 rounded mt-1 filter sepia-0"></Img>
        </div>
        <div class="flex-1">
          <TwClass name="sepia" tooltip="--tw-sepia: sepia(1)" class="w-max">sepia</TwClass>
          <Img class="h-12 rounded mt-1 filter sepia"></Img>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
