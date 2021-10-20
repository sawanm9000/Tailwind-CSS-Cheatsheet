<template>
  <Card>
    <div class="content">
      <div class="title"><Lnk href="https://tailwindcss.com/docs/grayscale">Grayscale</Lnk></div>
      <div class="flex gap-2">
        <div class="flex-1">
          <TwClass name="grayscale-0" tooltip="--tw-grayscale: grayscale(0)" class="w-max">grayscale-0</TwClass>
          <Img class="h-12 rounded mt-1 filter grayscale-0"></Img>
        </div>
        <div class="flex-1">
          <TwClass name="grayscale" tooltip="--tw-grayscale: grayscale(1)" class="w-max">grayscale</TwClass>
          <Img class="h-12 rounded mt-1 filter grayscale"></Img>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
