<template>
  <Card>
    <div class="prefix">
      <Lnk href="https://tailwindcss.com/docs/background-origin">bg-origin-</Lnk>
    </div>
    <div class="content">
      <div class="grid grid-cols-3 gap-2">
        <div>
          <TwClass class="w-max" name="bg-origin-border" tooltip="background-origin: border-box">border</TwClass>
          <div class="h-16 mt-1 rounded p-3 bg-no-repeat border-4 border-dashed border-red-500 bg-origin-border" style="background-image: url(placeholder-light-blue.svg)"></div>
        </div>
        <div>
          <TwClass class="w-max" name="bg-origin-padding" tooltip="background-origin: padding-box">padding</TwClass>
          <div class="h-16 mt-1 rounded p-3 bg-no-repeat border-4 border-dashed border-red-500 bg-origin-padding" style="background-image: url(placeholder-light-blue.svg)"></div>
        </div>
        <div>
          <TwClass class="w-max" name="bg-origin-content" tooltip="background-origin: content-box">content</TwClass>
          <div class="h-16 mt-1 rounded p-3 bg-no-repeat border-4 border-dashed border-red-500 bg-origin-content" style="background-image: url(placeholder-light-blue.svg)"></div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
export default {}
</script>

