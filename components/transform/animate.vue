<template>
  <Card>
    <div class="prefix"><Lnk href="https://tailwindcss.com/docs/animation">animate-</Lnk></div>
    <div class="content">
      <div class="grid grid-cols-3 gap-2">
        <div>
          <TwClass name="animate-none" tooltip="">none</TwClass>
          <div class="h-20 pt-3">
            <div class="w-14 h-14 mt-1 bg-coolGray-600 rounded animate-none"></div>
          </div>
        </div>
        <div>
          <TwClass name="animate-spin" tooltip="">spin</TwClass>
          <div class="h-20 pt-3">
            <svg class="animate-spin -ml-1 mr-3 w-14 h-14 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-darkreader-inline-fill="" style="--darkreader-inline-fill:none;">
              <circle class="opacity-0" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke:currentColor;"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-darkreader-inline-fill="" style="--darkreader-inline-fill:currentColor;"></path>
            </svg>
          </div>
        </div>
        <div>
          <TwClass name="animate-ping" tooltip="">ping</TwClass>
          <div class="h-20 pt-3">
            <div class="w-6 h-6 mt-1 bg-red-600 rounded-full animate-ping"></div>
          </div>
        </div>
        <div>
          <TwClass name="animate-pulse" tooltip="">pulse</TwClass>
          <div class="h-20 pt-3">
            <div class="w-14 h-14 mt-1 bg-coolGray-600 rounded animate-pulse"></div>
          </div>
        </div>
        <div>
          <TwClass name="animate-bounce" tooltip="">bounce</TwClass>
          <div class="h-20 pt-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-14 h-14 animate-bounce text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
