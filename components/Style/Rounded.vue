<template>
  <Card>
    <div class="prefix">
      <Lnk href="https://tailwindcss.com/docs/border-radius">rounded</Lnk>
    </div>
    <div class="content">
      <div class="flex justify-center mt-2 mb-4">
        <div class="space-y-1.5">
          <div class="flex space-x-2 items-center">
            <div class="border-t border-l border-r w-14 h-6 rounded-t-none"></div>
            <TwClass name="rounded-none" tooltip="border-radius: 0px" class="w-10">-none</TwClass>
          </div>
          <div class="flex space-x-2 items-center">
            <div class="border-t border-l border-r w-14 h-6 rounded-t-sm"></div>
            <TwClass name="rounded-sm" tooltip="border-radius: 0.125rem" class="w-10">-sm</TwClass>
          </div>
          <div class="flex space-x-2 items-center">
            <div class="border-t border-l border-r w-14 h-6 rounded-t"></div>
            <TwClass name="rounded" tooltip="border-radius: 0.25rem" class="w-10"></TwClass>
          </div>
          <div class="flex space-x-2 items-center">
            <div class="border-t border-l border-r w-14 h-6 rounded-t-md"></div>
            <TwClass name="rounded-md" tooltip="border-radius: 0.375rem" class="w-10">-md</TwClass>
          </div>
          <div class="flex space-x-2 items-center">
            <div class="border-t border-l border-r w-14 h-6 rounded-t-lg"></div>
            <TwClass name="rounded-lg" tooltip="border-radius: 0.5rem" class="w-10">-xl</TwClass>
          </div>
          <div class="flex space-x-2 items-center">
            <div class="border-t border-l border-r w-14 h-6 rounded-t-xl"></div>
            <TwClass name="rounded-xl" tooltip="border-radius: 0.75rem" class="w-10">-xl</TwClass>
          </div>
          <div class="flex space-x-2 items-center">
            <div class="border-t border-l border-r w-14 h-6 rounded-t-2xl"></div>
            <TwClass name="rounded-2xl" tooltip="border-radius: 1rem" class="w-10">-2xl</TwClass>
          </div>
          <div class="flex space-x-2 items-center">
            <div class="border-t border-l border-r w-14 h-6 rounded-t-3xl"></div>
            <TwClass name="rounded-3xl" tooltip="border-radius: 1.5rem" class="w-10">-3xl</TwClass>
          </div>
          <div class="flex space-x-2 items-center">
            <div class="border w-14 h-14 rounded-full"></div>
            <TwClass name="rounded-full" tooltip="border-radius: 9999px" class="w-10">-full</TwClass>
          </div>
        </div>
      </div>
      <div class="mb-1.5">-{ t | r | b | l }-{ size }</div>
      <div class="font-sans text-sm text-coolGray-400 mb-1.5">Examples:</div>
      <div class="grid grid-cols-3 gap-y-3 justify-items-center">
        <div>
          <div>-tl-xl</div>
          <div class="w-10 h-10 mt-1 bg-blue-700 rounded-tl-xl"></div>
        </div>
        <div>
          <div>-t-xl</div>
          <div class="w-10 h-10 mt-1 bg-blue-700 rounded-t-xl"></div>
        </div>
        <div>
          <div>-tr-xl</div>
          <div class="w-10 h-10 mt-1 bg-blue-700 rounded-tr-xl"></div>
        </div>
        <div>
          <div>-l-xl</div>
          <div class="w-10 h-10 mt-1 bg-blue-700 rounded-l-xl"></div>
        </div>
        <div>
          <div>-xl</div>
          <div class="w-10 h-10 mt-1 bg-blue-700 rounded-xl"></div>
        </div>
        <div>
          <div>-r-xl</div>
          <div class="w-10 h-10 mt-1 bg-blue-700 rounded-r-xl"></div>
        </div>
        <div>
          <div>-bl-xl</div>
          <div class="w-10 h-10 mt-1 bg-blue-700 rounded-bl-xl"></div>
        </div>
        <div>
          <div>-b-xl</div>
          <div class="w-10 h-10 mt-1 bg-blue-700 rounded-b-xl"></div>
        </div>
        <div>
          <div>-br-xl</div>
          <div class="w-10 h-10 mt-1 bg-blue-700 rounded-br-xl"></div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
export default {}
</script>

