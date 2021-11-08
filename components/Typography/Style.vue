<template>
  <Card>
    <div class="content">
      <div class="title"><Lnk href="https://tailwindcss.com/docs/font-style">Font style</Lnk></div>
      <div class="flex gap-x-2 items-center mb-1">
        <TwClass name="italic" tooltip="font-style: italic" class="flex-1 w-max">italic</TwClass>
        <div class="flex-1 font-sans text-base italic">Abcdefgh</div>
      </div>
      <div class="flex gap-x-2 items-center mb-1">
        <TwClass name="not-italic" tooltip="font-style: normal" class="flex-1 w-max">not-italic</TwClass>
        <div class="flex-1 font-sans text-base not-italic">Abcdefgh</div>
      </div>
      <div class="title mt-2"><Lnk href="https://tailwindcss.com/docs/text-decoration">Text decoration</Lnk></div>
      <div class="flex gap-x-2 items-center mb-1">
        <TwClass name="underline" tooltip="text-decoration: underline" class="flex-1 w-max">underline</TwClass>
        <div class="flex-1 font-sans text-base underline">Abcdefgh</div>
      </div>
      <div class="flex gap-x-2 items-center mb-1">
        <TwClass name="no-underline" tooltip="text-decoration: none" class="flex-1 w-max">no-underline</TwClass>
        <div class="flex-1 font-sans text-base no-underline">Abcdefgh</div>
      </div>
      <div class="flex gap-x-2 items-center mb-1">
        <TwClass name="line-through" tooltip="text-decoration: line-through" class="flex-1 w-max">line-through</TwClass>
        <div class="flex-1 font-sans text-base line-through">Abcdefgh</div>
      </div>
      <div class="title mt-2"><Lnk href="https://tailwindcss.com/docs/text-transform">Text transform</Lnk></div>
      <div class="flex gap-x-2 items-center mb-1">
        <TwClass name="uppercase" tooltip="text-transform: uppercase" class="flex-1 w-max">uppercase</TwClass>
        <div class="flex-1 font-sans text-base uppercase">abcdefgh</div>
      </div>
      <div class="flex gap-x-2 items-center mb-1">
        <TwClass name="lowercase" tooltip="text-transform: lowercase" class="flex-1 w-max">lowercase</TwClass>
        <div class="flex-1 font-sans text-base lowercase">Abcdefgh</div>
      </div>
      <div class="flex gap-x-2 items-center mb-1">
        <TwClass name="capitalize" tooltip="text-transform: capitalize" class="flex-1 w-max">capitalize</TwClass>
        <div class="flex-1 font-sans text-base capitalize">abcdefgh</div>
      </div>
      <div class="flex gap-x-2 items-center mb-1">
        <TwClass name="normal-case" tooltip="text-transform: none" class="flex-1 w-max">normal-case</TwClass>
        <div class="flex-1 font-sans text-base normal-case">Abcdefgh</div>
      </div>
      <div class="title mt-2"><Lnk href="https://tailwindcss.com/docs/text-overflow">Text overflow</Lnk></div>
      <div class="flex justify-between gap-x-2 mb-1">
        <TwClass name="truncate" tooltip="overflow: hidden" class="w-max">truncate</TwClass>
        <div class="font-sans text-base w-12 mr-24 truncate">Abcdefgh</div>
      </div>
      <div class="flex justify-between gap-x-2 mb-1">
        <TwClass name="overflow-ellipsis" tooltip="text-overflow: ellipsis" class="w-max">overflow-ellipsis</TwClass>
        <div class="font-sans text-base w-12 mr-24 overflow-hidden overflow-ellipsis">Abcdefgh</div>
      </div>
      <div class="flex justify-between gap-x-2 mb-1">
        <TwClass name="overflow-clip" tooltip="text-overflow: clip" class="w-max">overflow-clip</TwClass>
        <div class="font-sans text-base w-12 mr-24 overflow-hidden overflow-clip">Abcdefgh</div>
      </div>
      <div class="flex gap-x-2 items-center mb-1">
        <TwClass name="max-w-prose" tooltip="max-width: 65ch" class="flex-1 w-max">max-w-prose</TwClass>
        <div class="flex-1 text-sm max-w-prose text-emerald-500">65ch</div>
      </div>
      <div class="title mt-2"><Lnk href="https://tailwindcss.com/docs/font-smoothing">Font smoothing</Lnk></div>
      <div class="flex gap-x-2 items-center mb-1">
        <TwClass name="antialiased" tooltip="-webkit-font-smoothing: antialiased" class="flex-1 w-max">antialiased</TwClass>
        <div class="flex-1 font-sans text-base antialiased">Abcdefgh</div>
      </div>
      <div class="flex gap-x-2 items-center mb-1">
        <TwClass name="subpixel-antialiased" tooltip="	-webkit-font-smoothing: auto" class="flex-1 w-max">subpixel-antialiased</TwClass>
        <div class="flex-1 font-sans text-base subpixel-antialiased">Abcdefgh</div>
      </div>
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
