<template>
  <Card>
    <div class="prefix">
      <Lnk href="https://tailwindcss.com/docs/box-sizing" class="whitespace-pre">box-</Lnk>
    </div>
    <div class="content grid grid-cols-2 w-full gap-x-0.5">
      <div>
        <TwClass name="box-border" tooltip="box-sizing: border-box" class="mb-1">border</TwClass>
        <div class="h-20 p-3">
          <div class="bg-gray-600 h-full p-3 relative">
            <div class="h-full bg-black"></div>
            <div class="h-2 w-2 rounded-full bg-red-600 absolute -top-1 -left-1"></div>
            <div class="h-2 w-2 rounded-full bg-red-600 absolute -top-1 -right-1"></div>
            <div class="h-2 w-2 rounded-full bg-red-600 absolute -bottom-1 -left-1"></div>
            <div class="h-2 w-2 rounded-full bg-red-600 absolute -bottom-1 -right-1"></div>
          </div>
        </div>
      </div>
      <div>
        <TwClass name="box-content" tooltip="box-sizing: content-box" class="mb-1">content</TwClass>
        <div class="bg-gray-600 h-20 p-3">
          <div class="bg-black h-full relative">
            <div class="h-2 w-2 rounded-full bg-red-600 absolute -top-1 -left-1"></div>
            <div class="h-2 w-2 rounded-full bg-red-600 absolute -top-1 -right-1"></div>
            <div class="h-2 w-2 rounded-full bg-red-600 absolute -bottom-1 -left-1"></div>
            <div class="h-2 w-2 rounded-full bg-red-600 absolute -bottom-1 -right-1"></div>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
export default {}
</script>

