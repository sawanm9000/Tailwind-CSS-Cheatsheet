<template>
  <Card>
    <div class="prefix"><Lnk href="https://tailwindcss.com/docs/font-size">text-</Lnk></div>
    <div class="content">
      <div class="flex gap-x-2 sm:w-60 mb-3">
        <div class="flex-1">
          <TwClass name="text-left" tooltip="text-align: left" class="mb-1">left</TwClass>
          <div class="flex flex-wrap gap-y-0.5 ml-0.5 w-4 justify-start">
            <div class="h-px bg-gray-200 w-4"></div>
            <div class="h-px bg-gray-200 w-2.5"></div>
            <div class="h-px bg-gray-200 w-4"></div>
            <div class="h-px bg-gray-200 w-2.5"></div>
            <div class="h-px bg-gray-200 w-4"></div>
          </div>
        </div>
        <div class="flex-1">
          <TwClass name="text-center" tooltip="text-align: center" class="mb-1">center</TwClass>
          <div class="flex flex-wrap gap-y-0.5 ml-0.5 w-4 justify-center">
            <div class="h-px bg-gray-200 w-4"></div>
            <div class="h-px bg-gray-200 w-2.5"></div>
            <div class="h-px bg-gray-200 w-4"></div>
            <div class="h-px bg-gray-200 w-2.5"></div>
            <div class="h-px bg-gray-200 w-4"></div>
          </div>
        </div>
        <div class="flex-1">
          <TwClass name="text-right" tooltip="text-align: right" class="mb-1">right</TwClass>
          <div class="flex flex-wrap gap-y-0.5 ml-0.5 w-4 justify-end">
            <div class="h-px bg-gray-200 w-4"></div>
            <div class="h-px bg-gray-200 w-2.5"></div>
            <div class="h-px bg-gray-200 w-4"></div>
            <div class="h-px bg-gray-200 w-2.5"></div>
            <div class="h-px bg-gray-200 w-4"></div>
          </div>
        </div>
        <div class="flex-1">
          <TwClass name="text-justify" tooltip="text-align: justify" class="mb-1">justify</TwClass>
          <div class="flex flex-wrap gap-y-0.5 ml-0.5 w-4">
            <div class="h-px bg-gray-200 w-4"></div>
            <div class="h-px bg-gray-200 w-4"></div>
            <div class="h-px bg-gray-200 w-4"></div>
            <div class="h-px bg-gray-200 w-4"></div>
            <div class="h-px bg-gray-200 w-4"></div>
          </div>
        </div>
      </div>
      <div class="text-red-600 cursor-pointer">{color}</div>
      <div class="flex gap-x-3 items-end 3xl:-mt-20 flex-wrap 3xl:flex-nowrap">
        <div>
          <div class="font-sans text-xs">Abc</div>
          <TwClass name="text-xs" tooltip="font-size: 0.75rem">xs</TwClass>
        </div>
        <div>
          <div class="font-sans text-sm">Abc</div>
          <TwClass name="text-sm" tooltip="font-size: 0.875rem">sm</TwClass>
        </div>
        <div>
          <div class="font-sans text-base">Abc</div>
          <TwClass name="text-base" tooltip="font-size: 1rem">base</TwClass>
        </div>
        <div>
          <div class="font-sans text-lg">Abc</div>
          <TwClass name="text-lg" tooltip="font-size: 1.125rem">lg</TwClass>
        </div>
        <div>
          <div class="font-sans text-xl">Abc</div>
          <TwClass name="text-xl" tooltip="font-size: 1.25rem">xl</TwClass>
        </div>
        <div>
          <div class="font-sans text-2xl">Abc</div>
          <TwClass name="text-2xl" tooltip="font-size: 1.5rem">2xl</TwClass>
        </div>
        <div>
          <div class="font-sans text-3xl">Abc</div>
          <TwClass name="text-3xl" tooltip="font-size: 1.875rem">3xl</TwClass>
        </div>
        <div>
          <div class="font-sans text-4xl">Abc</div>
          <TwClass name="text-4xl" tooltip="font-size: 2.25rem">4xl</TwClass>
        </div>
        <div>
          <div class="font-sans text-5xl">Abc</div>
          <TwClass name="text-5xl" tooltip="font-size: 3rem">5xl</TwClass>
        </div>
        <div>
          <div class="font-sans text-6xl">Abc</div>
          <TwClass name="text-6xl" tooltip="font-size: 3.75rem">6xl</TwClass>
        </div>
        <div>
          <div class="font-sans text-7xl">Abc</div>
          <TwClass name="text-7xl" tooltip="font-size: 4.5rem">7xl</TwClass>
        </div>
        <div>
          <div class="font-sans text-8xl">Abc</div>
          <TwClass name="text-8xl" tooltip="font-size: 6rem">8xl</TwClass>
        </div>
        <div>
          <div class="font-sans text-9xl">Abc</div>
          <TwClass name="text-9xl" tooltip="font-size: 8rem">9xl</TwClass>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
