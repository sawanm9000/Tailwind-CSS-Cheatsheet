<template>
  <Card class="card-bg-img ring-1 ring-gray-600">
    <div class="content">
      <div class="title"><Lnk href="https://tailwindcss.com/docs/backdrop-sepia">Backdrop Sepia</Lnk></div>
      <div class="flex gap-2">
        <div class="flex-1">
          <TwClass name="backdrop-sepia-0" tooltip="--tw-backdrop-sepia: sepia(0)" class="w-max backdrop-filter backdrop-brightness-50 backdrop-blur-sm rounded px-1">backdrop-sepia-0</TwClass>
          <div class="h-12 rounded mt-1 border border-opacity-30 backdrop-filter backdrop-sepia-0"></div>
        </div>
        <div class="flex-1">
          <TwClass name="backdrop-sepia" tooltip="--tw-backdrop-sepia: sepia(1)" class="w-max backdrop-filter backdrop-brightness-50 backdrop-blur-sm rounded px-1">backdrop-sepia</TwClass>
          <div class="h-12 rounded mt-1 border border-opacity-30 backdrop-filter backdrop-sepia"></div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
