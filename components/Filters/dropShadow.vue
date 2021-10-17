<template>
  <Card theme="light">
    <div class="prefix">
      <Lnk href="https://tailwindcss.com/docs/drop-shadow">drop-shadow</Lnk>
    </div>
    <div class="content">
      <div class="flex gap-2">
        <div class="flex-1">
          <TwClass name="drop-shadow-none" tooltip="drop-shadow(0 0 #0000)" class="w-max text-black">-none</TwClass>
          <ImgPng class="h-14 w-full rounded mt-1 filter drop-shadow-none"></ImgPng>
        </div>
        <div class="flex-1">
          <TwClass name="drop-shadow-sm" tooltip="--tw-drop-shadow: drop-shadow(0 1px 1px rgba(0,0,0,0.05))" class="w-max text-black">-sm</TwClass>
          <ImgPng class="h-14 w-full rounded mt-1 filter drop-shadow-sm"></ImgPng>
        </div>
        <div class="flex-1">
          <TwClass name="drop-shadow" tooltip="--tw-drop-shadow: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1)) drop-shadow(0 1px 1px rgba(0, 0, 0, 0.06))" class="opacity-0">.</TwClass>
          <ImgPng class="h-14 w-full rounded mt-1 filter drop-shadow"></ImgPng>
        </div>
        <div class="flex-1">
          <TwClass name="drop-shadow-md" tooltip="drop-shadow(0 4px 3px rgba(0, 0, 0, 0.07)) drop-shadow(0 2px 2px rgba(0, 0, 0, 0.06))" class="w-max text-black">-md</TwClass>
          <ImgPng class="h-14 w-full rounded mt-1 filter drop-shadow-md"></ImgPng>
        </div>
        <div class="flex-1">
          <TwClass name="drop-shadow-lg" tooltip="drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04)) drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1))" class="w-max text-black">-lg</TwClass>
          <ImgPng class="h-14 w-full rounded mt-1 filter drop-shadow-lg"></ImgPng>
        </div>
        <div class="flex-1">
          <TwClass name="drop-shadow-xl" tooltip="drop-shadow(0 20px 13px rgba(0, 0, 0, 0.03)) drop-shadow(0 8px 5px rgba(0, 0, 0, 0.08))" class="w-max text-black">-xl</TwClass>
          <ImgPng class="h-14 w-full rounded mt-1 filter drop-shadow-xl"></ImgPng>
        </div>
        <div class="flex-1">
          <TwClass name="drop-shadow-2xl" tooltip="drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15))" class="w-max text-black">-2xl</TwClass>
          <ImgPng class="h-14 w-full rounded mt-1 filter drop-shadow-2xl"></ImgPng>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
