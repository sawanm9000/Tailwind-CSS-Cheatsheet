<template>
  <Card>
    <div class="prefix"><Lnk href="https://tailwindcss.com/docs/place-content">place-content-</Lnk></div>
    <div class="content grid grid-rows-2 gap-2">
      <div class="grid grid-cols-3 gap-2">
        <div>
          <TwClass name="place-content-start" tooltip="place-content: start" class="mb-1 w-max">start</TwClass>
          <div class="h-20 bg-coolGray-700 grid grid-cols-3 gap-0.5 p-0.5 place-content-start">
            <div class="bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded">1</div>
            <div class="bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded">2</div>
            <div class="bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded">3</div>
            <div class="bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded">4</div>
            <div class="bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded">5</div>
            <div class="bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded">6</div>
          </div>
        </div>
        <div>
          <TwClass name="place-content-center" tooltip="place-content: center" class="mb-1 w-max">center</TwClass>
          <div class="h-20 bg-coolGray-700 grid grid-cols-3 gap-0.5 p-0.5 place-content-center">
            <div class="bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded">1</div>
            <div class="bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded">2</div>
            <div class="bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded">3</div>
            <div class="bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded">4</div>
            <div class="bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded">5</div>
            <div class="bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded">6</div>
          </div>
        </div>
        <div>
          <TwClass name="place-content-end" tooltip="place-content: end" class="mb-1 w-max">end</TwClass>
          <div class="h-20 bg-coolGray-700 grid grid-cols-3 gap-0.5 p-0.5 place-content-end">
            <div class="bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded">1</div>
            <div class="bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded">2</div>
            <div class="bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded">3</div>
            <div class="bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded">4</div>
            <div class="bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded">5</div>
            <div class="bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded">6</div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-4 gap-2">
        <div>
          <TwClass name="place-content-stretch" tooltip="place-content: stretch" class="mb-1 w-max">stretch</TwClass>
          <div class="h-20 bg-coolGray-700 grid grid-cols-3 gap-0.5 p-0.5 place-content-stretch">
            <div class="bg-emerald-600 font-sans text-sm flex justify-center items-center rounded">1</div>
            <div class="bg-emerald-600 font-sans text-sm flex justify-center items-center rounded">2</div>
            <div class="bg-emerald-600 font-sans text-sm flex justify-center items-center rounded">3</div>
            <div class="bg-emerald-600 font-sans text-sm flex justify-center items-center rounded">4</div>
            <div class="bg-emerald-600 font-sans text-sm flex justify-center items-center rounded">5</div>
            <div class="bg-emerald-600 font-sans text-sm flex justify-center items-center rounded">6</div>
          </div>
        </div>
        <div>
          <TwClass name="place-content-between" tooltip="place-content: space-between" class="mb-1 w-max">between</TwClass>
          <div class="h-20 bg-coolGray-700 grid grid-cols-3 gap-0.5 p-0.5 place-content-between">
            <div class="bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded">1</div>
            <div class="bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded">2</div>
            <div class="bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded">3</div>
            <div class="bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded">4</div>
            <div class="bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded">5</div>
            <div class="bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded">6</div>
          </div>
        </div>
        <div>
          <TwClass name="place-content-around" tooltip="place-content: space-around" class="mb-1 w-max">around</TwClass>
          <div class="h-20 bg-coolGray-700 grid grid-cols-3 gap-0.5 px-0.5 place-content-around">
            <div class="bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded">1</div>
            <div class="bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded">2</div>
            <div class="bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded">3</div>
            <div class="bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded">4</div>
            <div class="bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded">5</div>
            <div class="bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded">6</div>
          </div>
        </div>
        <div>
          <TwClass name="place-content-evenly" tooltip="place-content: space-evenly" class="mb-1 w-max">evenly</TwClass>
          <div class="h-20 bg-coolGray-700 grid grid-cols-3 gap-0.5 p-0.5 place-content-evenly">
            <div class="bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded">1</div>
            <div class="bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded">2</div>
            <div class="bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded">3</div>
            <div class="bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded">4</div>
            <div class="bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded">5</div>
            <div class="bg-emerald-600 font-sans text-sm flex justify-center items-center h-5 rounded">6</div>
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
