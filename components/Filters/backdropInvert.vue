<template>
  <Card class="card-bg-img ring-1 ring-gray-600">
    <div class="content">
      <div class="title"><Lnk href="https://tailwindcss.com/docs/backdrop-invert">Backdrop Invert</Lnk></div>
      <div class="flex gap-2">
        <div class="flex-1">
          <TwClass name="backdrop-invert-0" tooltip="--tw-backdrop-invert: invert(0)" class="w-max backdrop-filter backdrop-blur-sm backdrop-brightness-50 rounded px-1">backdrop-invert-0</TwClass>
          <div class="h-12 rounded mt-1 border border-opacity-30 backdrop-filter backdrop-invert-0"></div>
        </div>
        <div class="flex-1">
          <TwClass name="backdrop-invert" tooltip="--tw-backdrop-invert: invert(1)" class="w-max backdrop-filter backdrop-blur-sm backdrop-brightness-50 rounded px-1">backdrop-invert</TwClass>
          <div class="h-12 rounded mt-1 border border-opacity-30 backdrop-filter backdrop-invert"></div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
