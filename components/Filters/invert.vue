<template>
  <Card>
    <div class="content">
      <div class="title"><Lnk href="https://tailwindcss.com/docs/invert">Invert</Lnk></div>
      <div class="flex gap-2">
        <div class="flex-1">
          <TwClass name="invert-0" tooltip="--tw-invert: invert(0)" class="w-max">invert-0</TwClass>
          <Img class="h-12 rounded mt-1 filter invert-0"></Img>
        </div>
        <div class="flex-1">
          <TwClass name="invert" tooltip="--tw-invert: invert(1)" class="w-max">invert</TwClass>
          <Img class="h-12 rounded mt-1 filter invert"></Img>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
