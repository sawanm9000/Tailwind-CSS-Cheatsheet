<template>
  <Card>
    <div class="pt-1 pl-2">
      <Lnk href="https://tailwindcss.com/docs/transform" class="text-gray-400 font-sans">Transform</Lnk>
    </div>
    <div class="content">
      <div class="grid grid-cols-3 gap-2">
        <div>
          <TwClass name="transform" tooltip="" class="w-max">transform</TwClass>
          <div class="mt-1">
            <span class="text-purple-500">transform:</span> <span class="text-emerald-400">translateX(...) translateY(...) rotate(...) skewX(...) skewY(...) scaleX(...) scaleY(...)</span>
          </div>
        </div>
        <div>
          <TwClass name="transform-gpu" tooltip="" class="w-max">transform-gpu</TwClass>
          <div class="mt-1">
            <span class="text-purple-500">transform:</span> <span class="text-emerald-400">translate3d(<br><span class="pl-3 inline-block">translate... rotate... skew... scale...</span><br>)</span>
          </div>
        </div>
        <div>
          <TwClass name="transform-none" tooltip="" class="w-max">transform-none</TwClass>
          <div class="mt-1">
            <span class="text-purple-500">transform:</span> <span class="text-emerald-400">none</span>
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
