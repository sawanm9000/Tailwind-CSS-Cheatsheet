<template>
  <Card>
    <div class="prefix">
      <Lnk href="https://tailwindcss.com/docs/divide-width">divide-</Lnk>
    </div>
    <div class="content">
      <div class="grid grid-cols-5 gap-2">
        <div>
          <TwClass name="divide-x-0" tooltip="" class="w-max">x-0</TwClass>
          <div class="mt-1 h-8 bg-coolGray-700 rounded grid grid-cols-3 divide-x-0 font-sans">
            <div class="text-center flex justify-center items-center">1</div>
            <div class="text-center flex justify-center items-center">2</div>
            <div class="text-center flex justify-center items-center">3</div>
          </div>
        </div>
        <div>
          <TwClass name="divide-x" tooltip="" class="w-max">x</TwClass>
          <div class="mt-1 h-8 bg-coolGray-700 rounded grid grid-cols-3 divide-x font-sans">
            <div class="text-center flex justify-center items-center">1</div>
            <div class="text-center flex justify-center items-center">2</div>
            <div class="text-center flex justify-center items-center">3</div>
          </div>
        </div>
        <div>
          <TwClass name="divide-x-2" tooltip="" class="w-max">x-2</TwClass>
          <div class="mt-1 h-8 bg-coolGray-700 rounded grid grid-cols-3 divide-x-2 font-sans">
            <div class="text-center flex justify-center items-center">1</div>
            <div class="text-center flex justify-center items-center">2</div>
            <div class="text-center flex justify-center items-center">3</div>
          </div>
        </div>
        <div>
          <TwClass name="divide-x-4" tooltip="" class="w-max">x-4</TwClass>
          <div class="mt-1 h-8 bg-coolGray-700 rounded grid grid-cols-3 divide-x-4 font-sans">
            <div class="text-center flex justify-center items-center">1</div>
            <div class="text-center flex justify-center items-center">2</div>
            <div class="text-center flex justify-center items-center">3</div>
          </div>
        </div>
        <div>
          <TwClass name="divide-x-8" tooltip="" class="w-max">x-8</TwClass>
          <div class="mt-1 h-8 bg-coolGray-700 rounded grid grid-cols-3 divide-x-8 font-sans">
            <div class="text-center flex justify-center items-center">1</div>
            <div class="text-center flex justify-center items-center">2</div>
            <div class="text-center flex justify-center items-center">3</div>
          </div>
        </div>
        <div>
          <TwClass name="divide-y-0" tooltip="" class="w-max">y-0</TwClass>
          <div class="mt-1 h-16 bg-coolGray-700 rounded grid grid-rows-2 divide-y-0 font-sans">
            <div class="text-center flex justify-center items-center">1</div>
            <div class="text-center flex justify-center items-center">2</div>
            <div class="text-center flex justify-center items-center">3</div>
          </div>
        </div>
        <div>
          <TwClass name="divide-y" tooltip="" class="w-max">y</TwClass>
          <div class="mt-1 h-16 bg-coolGray-700 rounded grid grid-rows-2 divide-y font-sans">
            <div class="text-center flex justify-center items-center">1</div>
            <div class="text-center flex justify-center items-center">2</div>
            <div class="text-center flex justify-center items-center">3</div>
          </div>
        </div>
        <div>
          <TwClass name="divide-y-2" tooltip="" class="w-max">y-2</TwClass>
          <div class="mt-1 h-16 bg-coolGray-700 rounded grid grid-rows-2 divide-y-2 font-sans">
            <div class="text-center flex justify-center items-center">1</div>
            <div class="text-center flex justify-center items-center">2</div>
            <div class="text-center flex justify-center items-center">3</div>
          </div>
        </div>
        <div>
          <TwClass name="divide-y-4" tooltip="" class="w-max">y-4</TwClass>
          <div class="mt-1 h-16 bg-coolGray-700 rounded grid grid-rows-2 divide-y-4 font-sans">
            <div class="text-center flex justify-center items-center">1</div>
            <div class="text-center flex justify-center items-center">2</div>
            <div class="text-center flex justify-center items-center">3</div>
          </div>
        </div>
        <div>
          <TwClass name="divide-y-8" tooltip="" class="w-max">y-8</TwClass>
          <div class="mt-1 h-16 bg-coolGray-700 rounded grid grid-rows-2 divide-y-8 font-sans">
            <div class="text-center flex justify-center items-center">1</div>
            <div class="text-center flex justify-center items-center">2</div>
            <div class="text-center flex justify-center items-center">3</div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-2 mt-2">
        <div>
          <TwClass name="divide-x-reverse" tooltip="" class="w-max">x-reverse</TwClass>
          <div class="grid grid-cols-2 gap-2">
            <div class="mt-1 bg-coolGray-700 rounded h-8 flex flex-row-reverse divide-x divide-x-reverse font-sans">
              <div class="text-center flex-grow flex justify-center items-center">1</div>
              <div class="text-center flex-grow flex justify-center items-center">2</div>
              <div class="text-center flex-grow flex justify-center items-center">3</div>
            </div>
            <div></div>
          </div>

        </div>
        <div>
          <TwClass name="divide-y-reverse" tooltip="" class="w-max">y-reverse</TwClass>
          <div class="grid grid-cols-2 gap-2">
            <div class="mt-1 bg-coolGray-700 rounded h-8 flex flex-col-reverse divide-y divide-y-reverse font-sans">
              <div class="text-center flex-grow flex justify-center items-center">1</div>
              <div class="text-center flex-grow flex justify-center items-center">2</div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-2 mt-2">
        <div>
          <div class="text-red-600 w-max">{color}</div>
          <div class="mt-1 h-8 bg-coolGray-700 rounded grid grid-cols-3 divide-x divide-red-600 font-sans">
            <div class="text-center flex justify-center items-center">1</div>
            <div class="text-center flex justify-center items-center">2</div>
            <div class="text-center flex justify-center items-center">3</div>
          </div>
        </div>
        <div>
          <TwClass name="divide-transparent" tooltip="" class="w-max">transparent</TwClass>
          <div class="mt-1 h-8 bg-coolGray-700 rounded grid grid-cols-3 divide-x divide-transparent font-sans">
            <div class="text-center flex justify-center items-center">1</div>
            <div class="text-center flex justify-center items-center">2</div>
            <div class="text-center flex justify-center items-center">3</div>
          </div>
        </div>
        <div>
          <TwClass name="divide-current" tooltip="" class="w-max">current</TwClass>
          <div class="mt-1 h-8 bg-coolGray-700 rounded grid grid-cols-3 divide-x divide-current font-sans text-emerald-400">
            <div class="text-center flex justify-center items-center">1</div>
            <div class="text-center flex justify-center items-center">2</div>
            <div class="text-center flex justify-center items-center">3</div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-2 mt-2">
        <div>
          <TwClass name="divide-solid" tooltip="" class="w-max">solid</TwClass>
          <div class="mt-1 h-8 bg-coolGray-700 rounded grid grid-cols-3 divide-x divide-solid font-sans">
            <div class="text-center flex justify-center items-center">1</div>
            <div class="text-center flex justify-center items-center">2</div>
            <div class="text-center flex justify-center items-center">3</div>
          </div>
        </div>
        <div>
          <TwClass name="divide-dashed" tooltip="" class="w-max">dashed</TwClass>
          <div class="mt-1 h-8 bg-coolGray-700 rounded grid grid-cols-3 divide-x divide-dashed font-sans">
            <div class="text-center flex justify-center items-center">1</div>
            <div class="text-center flex justify-center items-center">2</div>
            <div class="text-center flex justify-center items-center">3</div>
          </div>
        </div>
        <div>
          <TwClass name="divide-dotted" tooltip="" class="w-max">dotted</TwClass>
          <div class="mt-1 h-8 bg-coolGray-700 rounded grid grid-cols-3 divide-x divide-dotted font-sans">
            <div class="text-center flex justify-center items-center">1</div>
            <div class="text-center flex justify-center items-center">2</div>
            <div class="text-center flex justify-center items-center">3</div>
          </div>
        </div>
        <div>
          <TwClass name="divide-double" tooltip="" class="w-max">double</TwClass>
          <div class="mt-1 h-8 bg-coolGray-700 rounded grid grid-cols-3 divide-x-4 divide-double font-sans">
            <div class="text-center flex justify-center items-center">1</div>
            <div class="text-center flex justify-center items-center">2</div>
            <div class="text-center flex justify-center items-center">3</div>
          </div>
        </div>
        <div>
          <TwClass name="divide-none" tooltip="" class="w-max">none</TwClass>
          <div class="mt-1 h-8 bg-coolGray-700 rounded grid grid-cols-3 divide-x divide-none font-sans">
            <div class="text-center flex justify-center items-center">1</div>
            <div class="text-center flex justify-center items-center">2</div>
            <div class="text-center flex justify-center items-center">3</div>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
export default {}
</script>

