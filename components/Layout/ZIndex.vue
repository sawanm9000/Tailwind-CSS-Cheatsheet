<template>
  <Card>
    <div class="prefix">
      <Lnk href="https://tailwindcss.com/docs/z-index">z-</Lnk>
    </div>
    <div class="content">
      <div class="flex mb-5">
        <TwClass name="z-auto" tooltip="z-index: 0" class="flex-1">auto</TwClass>
        <div class="flex-1 text-emerald-400">auto</div>
      </div>
      <div class="flex flex-col h-52">
        <div class="flex items-center h-9 z-50">
          <TwClass name="z-50" tooltip="z-index: 50" class="mr-3 pr-3 w-6">50</TwClass>
          <div class="relative">
            <div class="absolute -top-7 bg-blue-600 trapezium rounded shadow-lg h-10 w-24"></div>
          </div>
        </div>
        <div class="flex items-center h-9 z-40">
          <TwClass name="z-40" tooltip="z-index: 40" class="mr-3 pr-3 w-6">40</TwClass>
          <div class="relative">
            <div class="absolute -top-7 bg-blue-600 trapezium rounded shadow-lg h-10 w-24"></div>
          </div>
        </div>
        <div class="flex items-center h-9 z-30">
          <TwClass name="z-30" tooltip="z-index: 30" class="mr-3 pr-3 w-6">30</TwClass>
          <div class="relative">
            <div class="absolute -top-7 bg-blue-600 trapezium rounded shadow-lg h-10 w-24"></div>
          </div>
        </div>
        <div class="flex items-center h-9 z-20">
          <TwClass name="z-20" tooltip="z-index: 20" class="mr-3 pr-3 w-6">20</TwClass>
          <div class="relative">
            <div class="absolute -top-7 bg-blue-600 trapezium rounded shadow-lg h-10 w-24"></div>
          </div>
        </div>
        <div class="flex items-center h-9 z-10">
          <TwClass name="z-10" tooltip="z-index: 10" class="mr-3 pr-3 w-6">10</TwClass>
          <div class="relative">
            <div class="absolute -top-7 bg-blue-600 trapezium rounded shadow-lg h-10 w-24"></div>
          </div>
        </div>
        <div class="flex items-center h-9 z-0">
          <TwClass name="z-0" tooltip="z-index: 0" class="mr-3 pr-3 w-6">0</TwClass>
          <div class="relative">
            <div class="absolute -top-7 bg-blue-600 trapezium rounded shadow-lg h-10 w-24"></div>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.trapezium {
  transform: perspective(10px) rotateX(2deg);
}
</style>
