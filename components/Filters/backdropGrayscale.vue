<template>
  <Card class="card-bg-img ring-1 ring-gray-600">
    <div class="content">
      <div class="title"><Lnk href="https://tailwindcss.com/docs/backdrop-grayscale">Backdrop Grayscale</Lnk></div>
      <div class="flex gap-2">
        <div class="flex-1">
          <TwClass name="backdrop-grayscale-0" tooltip="--tw-backdrop-grayscale: grayscale(0)" class="w-max backdrop-filter backdrop-blur-sm backdrop-brightness-50 rounded px-1">backdrop-grayscale-0</TwClass>
          <div class="h-12 rounded mt-1 border border-opacity-30 backdrop-filter backdrop-grayscale-0"></div>
        </div>
        <div class="flex-1">
          <TwClass name="backdrop-grayscale" tooltip="--tw-backdrop-grayscale: grayscale(1)" class="w-max backdrop-filter backdrop-blur-sm backdrop-brightness-50 rounded px-1">backdrop-grayscale</TwClass>
          <div class="h-12 rounded mt-1 border border-opacity-30 backdrop-filter backdrop-grayscale"></div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
