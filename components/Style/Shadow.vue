<template>
  <Card class="overflow-hidden">
    <div class="bg-coolGray-200 rounded-md h-full">
      <div class="prefix">
        <Lnk href="https://tailwindcss.com/docs/box-shadow">shadow</Lnk>
      </div>
      <div class="content">
        <div class="grid grid-cols-6 gap-x-3 gap-y-2 rounded text-coolGray-900">
          <div>
            <TwClass name="shadow-sm" tooltip="" class="w-max">-sm</TwClass>
            <div class="h-10 mt-1 bg-white rounded shadow-sm"></div>
          </div>
          <div>
            <TwClass name="shadow" class="whitespace-pre font-sans text-white opacity-0">. </TwClass>
            <div class="h-10 mt-1 bg-white rounded shadow"></div>
          </div>
          <div>
            <TwClass name="shadow-md" tooltip="" class="w-max">-md</TwClass>
            <div class="h-10 mt-1 bg-white rounded shadow-md"></div>
          </div>
          <div>
            <TwClass name="shadow-lg" tooltip="" class="w-max">-lg</TwClass>
            <div class="h-10 mt-1 bg-white rounded shadow-lg"></div>
          </div>
          <div>
            <TwClass name="shadow-xl" tooltip="" class="w-max">-xl</TwClass>
            <div class="h-10 mt-1 bg-white rounded shadow-xl"></div>
          </div>
          <div>
            <TwClass name="shadow-2xl" tooltip="" class="w-max">-2xl</TwClass>
            <div class="h-10 mt-1 bg-white rounded shadow-2xl"></div>
          </div>
          <div class="col-span-3">
            <TwClass name="shadow-inner" tooltip="" class="w-max">-inner</TwClass>
            <div class="h-10 mt-1 bg-white rounded shadow-inner"></div>
          </div>
          <div class="col-start-4 col-span-3">
            <TwClass name="shadow-none" tooltip="" class="w-max">-none</TwClass>
            <div class="h-10 mt-1 bg-white rounded shadow-none"></div>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
export default {}
</script>

