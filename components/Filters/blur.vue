<template>
  <Card>
    <div class="prefix">
      <Lnk href="https://tailwindcss.com/docs/blur">blur</Lnk>
    </div>
    <div class="content">
      <div class="flex gap-2">
        <div class="flex-1">
          <TwClass name="blur-none" tooltip="--tw-blur: blur(0)" class="w-max">-none</TwClass>
          <Img class="h-12 w-full rounded mt-1 filter blur-none"></Img>
        </div>
        <div class="flex-1">
          <TwClass name="blur-sm" tooltip="--tw-blur: blur(4px)" class="w-max">-sm</TwClass>
          <Img class="h-12 w-full rounded mt-1 filter blur-sm"></Img>
        </div>
        <div class="flex-1">
          <TwClass name="blur" tooltip="--tw-blur: blur(8px)" class="opacity-0">.</TwClass>
          <Img class="h-12 w-full rounded mt-1 filter blur"></Img>
        </div>
        <div class="flex-1">
          <TwClass name="blur-md" tooltip="--tw-blur: blur(12px)" class="w-max">-md</TwClass>
          <Img class="h-12 w-full rounded mt-1 filter blur-md"></Img>
        </div>
        <div class="flex-1">
          <TwClass name="blur-lg" tooltip="--tw-blur: blur(16px)" class="w-max">-lg</TwClass>
          <Img class="h-12 w-full rounded mt-1 filter blur-lg"></Img>
        </div>
        <div class="flex-1">
          <TwClass name="blur-xl" tooltip="--tw-blur: blur(24px)" class="w-max">-xl</TwClass>
          <Img class="h-12 w-full rounded mt-1 filter blur-xl"></Img>
        </div>
        <div class="flex-1">
          <TwClass name="blur-2xl" tooltip="--tw-blur: blur(40px)" class="w-max">-2xl</TwClass>
          <Img class="h-12 w-full rounded mt-1 filter blur-2xl"></Img>
        </div>
        <div class="flex-1">
          <TwClass name="blur-3xl" tooltip="--tw-blur: blur(64px)" class="w-max">-3xl</TwClass>
          <Img class="h-12 w-full rounded mt-1 filter blur-3xl"></Img>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
