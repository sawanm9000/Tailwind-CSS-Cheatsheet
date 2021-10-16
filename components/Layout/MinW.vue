<template>
  <Card>
    <div class="prefix">
      <Lnk href="https://tailwindcss.com/docs/min-width">min-w-</Lnk>
    </div>
    <div class="content">
      <div class="grid grid-cols-4 gap-x-3">
        <div class="content-row">
          <TwClass name="min-w-0" tooltip="min-width: 0px" class="w-max">0</TwClass>
          <div><span class="text-emerald-400">0px</span></div>
        </div>
        <div class="content-row">
          <TwClass name="min-w-min" tooltip="min-width: min-content" class="w-max">min</TwClass>
          <div class="w-min p-1 bg-blue-600">Ab cd e</div>
        </div>
        <div class="content-row">
          <TwClass name="min-w-max" tooltip="min-width: max-content" class="w-max">max</TwClass>
          <div class="w-max p-1 bg-blue-600">Ab cd e</div>
        </div>
        <div class="content-row">
          <TwClass name="min-w-full" tooltip="min-width: 100%" class="w-max">full</TwClass>
          <div class="border border-coolGray-300 h-14">
            <div class="bg-blue-600 w-full flex justify-between items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 right-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
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
.content {
  .content-row {
    @apply flex flex-col space-y-0.5;
  }
}
</style>
