<template>
  <Card>
    <div class="prefix">
      <Lnk href="https://tailwindcss.com/docs/background-clip">bg-clip-</Lnk>
    </div>
    <div class="content">
      <div class="grid grid-cols-4 gap-2">
        <div>
          <TwClass class="w-max" name="bg-clip-border" tooltip="background-clip: border-box">border</TwClass>
          <div class="mt-1 bg-blue-700 h-16 border-4 border-dashed border-blue-500 p-2 rounded bg-clip-border"></div>
        </div>
        <div>
          <TwClass class="w-max" name="bg-clip-padding" tooltip="background-clip: padding-box">padding</TwClass>
          <div class="mt-1 bg-blue-700 h-16 border-4 border-dashed border-blue-500 p-2 rounded bg-clip-padding"></div>
        </div>
        <div>
          <TwClass class="w-max" name="bg-clip-content" tooltip="background-clip: content-box">content</TwClass>
          <div class="mt-1 bg-blue-700 h-16 border-4 border-dashed border-blue-500 p-2 rounded bg-clip-content"></div>
        </div>
        <div>
          <TwClass class="w-max" name="bg-clip-text" tooltip="background-clip: text">text</TwClass>
          <div class="mt-1 bg-blue-700 bg-gradient-to-r from-emerald-400 to-blue-500 h-16 rounded bg-clip-text text-transparent font-sans text-3xl font-black">Abc</div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
export default {}
</script>

