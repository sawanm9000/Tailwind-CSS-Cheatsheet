<template>
  <Card>
    <div class="prefix">
      <Lnk href="https://tailwindcss.com/docs/transition-timing-function">ease-</Lnk>
    </div>
    <div class="content">
      <div class="grid grid-cols-4 gap-2">
        <div>
          <TwClass name="ease-linear" tooltip="transition-timing-function: linear" class="w-max">linear</TwClass>
          <div class="h-20 mt-1 bg-coolGray-600 rounded"></div>
        </div>
        <div>
          <TwClass name="ease-in" tooltip="transition-timing-function: cubic-bezier(0.4, 0, 1, 1)" class="w-max">in</TwClass>
          <div class="h-20 mt-1 bg-coolGray-600 rounded"></div>
        </div>
        <div>
          <TwClass name="ease-out" tooltip="transition-timing-function: cubic-bezier(0, 0, 0.2, 1)" class="w-max">out</TwClass>
          <div class="h-20 mt-1 bg-coolGray-600 rounded"></div>
        </div>
        <div>
          <TwClass name="ease-in-out" tooltip="transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)" class="w-max">in-out</TwClass>
          <div class="h-20 mt-1 bg-coolGray-600 rounded"></div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
