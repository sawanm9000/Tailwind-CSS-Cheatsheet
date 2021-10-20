<template>
  <Card>
    <div class="prefix"><Lnk href="https://tailwindcss.com/docs/flex">flex-</Lnk></div>
    <div class="content grid gap-2">
      <div class="grid grid-cols-4 gap-3">
        <div>
          <TwClass name="flex-row" tooltip="flex-direction: row" class="mb-1">row</TwClass>
          <div class="h-16 flex flex-row gap-1 bg-coolGray-700 p-0.5">
            <div class="bg-lightBlue-400 rounded w-5 h-5 flex items-center justify-center">1</div>
            <div class="bg-lightBlue-500 rounded w-5 h-5 flex items-center justify-center">2</div>
            <div class="bg-lightBlue-600 rounded w-5 h-5 flex items-center justify-center">3</div>
          </div>
        </div>
        <div>
          <TwClass name="flex-col" tooltip="flex-direction: column" class="mb-1">col</TwClass>
          <div class="h-16 flex flex-col gap-1 bg-coolGray-700 p-0.5">
            <div class="bg-lightBlue-400 rounded h-5 w-5 flex items-center justify-center">1</div>
            <div class="bg-lightBlue-500 rounded h-5 w-5 flex items-center justify-center">2</div>
            <div class="bg-lightBlue-600 rounded h-5 w-5 flex items-center justify-center">3</div>
          </div>
        </div>
        <div>
          <TwClass name="flex-wrap" tooltip="flex-wrap: wrap" class="mb-1">wrap</TwClass>
          <div class="h-16 flex flex-wrap gap-1 bg-coolGray-700 p-0.5">
            <div class="bg-lightBlue-400 rounded h-5 w-5 flex items-center justify-center">1</div>
            <div class="bg-lightBlue-500 rounded h-5 w-5 flex items-center justify-center">2</div>
            <div class="bg-lightBlue-600 rounded h-5 w-5 flex items-center justify-center">3</div>
            <div class="bg-lightBlue-700 rounded h-5 w-5 flex items-center justify-center mb-7">4</div>
          </div>
        </div>
        <div>
          <TwClass name="flex-nowrap" tooltip="flex-wrap: nowrap" class="mb-1">nowrap</TwClass>
          <div class="h-16 flex flex-nowrap gap-1 bg-coolGray-700 p-0.5">
            <div class="bg-lightBlue-400 rounded h-5 w-5 flex items-center justify-center">1</div>
            <div class="bg-lightBlue-500 rounded h-5 w-5 flex items-center justify-center">2</div>
            <div class="bg-lightBlue-600 rounded h-5 w-5 flex items-center justify-center">3</div>
            <div class="bg-lightBlue-700 rounded h-5 w-5 flex items-center justify-center">4</div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-2">
        <div>
          <TwClass name="flex-row-reverse" tooltip="flex-direction: row-reverse" class="mb-1">row-reverse</TwClass>
          <div class="h-16 flex flex-row-reverse gap-1 bg-coolGray-700 p-0.5">
            <div class="bg-lightBlue-400 rounded w-5 h-5 flex items-center justify-center">1</div>
            <div class="bg-lightBlue-500 rounded w-5 h-5 flex items-center justify-center">2</div>
            <div class="bg-lightBlue-600 rounded w-5 h-5 flex items-center justify-center">3</div>
          </div>
        </div>
        <div>
          <TwClass name="flex-col-reverse" tooltip="flex-direction: col-reverse" class="mb-1">col-reverse</TwClass>
          <div class="h-16 flex flex-col-reverse gap-1 bg-coolGray-700 p-0.5">
            <div class="bg-lightBlue-400 rounded w-5 h-5 flex items-center justify-center">1</div>
            <div class="bg-lightBlue-500 rounded w-5 h-5 flex items-center justify-center">2</div>
            <div class="bg-lightBlue-600 rounded w-5 h-5 flex items-center justify-center">3</div>
          </div>
        </div>
        <div>
          <TwClass name="flex-wrap-reverse" tooltip="flex-wrap: wrap-reverse" class="mb-1">wrap-reverse</TwClass>
          <div class="h-16 flex flex-wrap-reverse gap-1 bg-coolGray-700 p-0.5">
            <div class="bg-lightBlue-400 rounded h-5 w-5 flex items-center justify-center">1</div>
            <div class="bg-lightBlue-500 rounded h-5 w-5 flex items-center justify-center">2</div>
            <div class="bg-lightBlue-600 rounded h-5 w-5 flex items-center justify-center">3</div>
            <div class="bg-lightBlue-700 rounded h-5 w-5 flex items-center justify-center">4</div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-2">
        <div class="z-50">
          <TwClass name="flex-initial" tooltip="flex: 0 1 auto" class="mb-0.5">initial</TwClass>
          <div class="font-sans text-coolGray-400 mb-0.5">Shrink, not grow</div>
          <div class="h-20 border border-coolGray-400 rounded bg-coolGray-800 flex flex-col resize-x shadow-md overflow-hidden">
            <div class="flex gap-0.5 p-1 mb-px">
              <div class="bg-coolGray-500 text-xs font-sans rounded px-1 py-0.5 flex items-center flex-initial">Abcd</div>
              <div class="bg-lightBlue-600 text-xs font-sans rounded px-1 py-0.5 flex items-center flex-initial">Efgh ijkl</div>
            </div>
            <div class="flex gap-0.5 p-1">
              <div class="bg-coolGray-500 text-xs font-sans rounded px-1 py-0.5 flex items-center flex-initial">Abcd</div>
              <div class="bg-lightBlue-600 text-xs font-sans rounded px-1 py-0.5 flex items-center flex-initial">Efgh ijkl</div>
              <div class="bg-coolGray-500 text-xs font-sans rounded px-1 py-0.5 flex items-center flex-none">Mnop qrst</div>
            </div>
          </div>
        </div>
        <div class="z-40">
          <TwClass name="flex-auto" tooltip="flex: 1 1 auto" class="mb-0.5">auto</TwClass>
          <div class="font-sans text-coolGray-400 mb-0.5">Maintain proportions</div>
          <div class="h-20 border border-coolGray-400 rounded bg-coolGray-800 flex flex-col p-1 resize-x shadow-md overflow-hidden">
            <div class="flex gap-0.5 w-24 mb-2.5">
              <div class="bg-coolGray-500 rounded text-xs font-sans px-1 py-0.5 flex justify-center flex-auto">Ab</div>
              <div class="bg-coolGray-500 rounded text-xs font-sans px-1 py-0.5 flex justify-center flex-auto">Cdefghi</div>
              <div class="bg-coolGray-500 rounded text-xs font-sans px-1 py-0.5 flex justify-center flex-auto">Jklm</div>
            </div>
            <div class="flex gap-0.5">
              <div class="bg-lightBlue-600 rounded text-xs font-sans px-1 py-0.5 flex justify-center flex-auto">Ab</div>
              <div class="bg-lightBlue-600 rounded text-xs font-sans px-1 py-0.5 flex justify-center flex-auto">Cdefghi</div>
              <div class="bg-lightBlue-600 rounded text-xs font-sans px-1 py-0.5 flex justify-center flex-auto">Jklm</div>
            </div>
          </div>
        </div>
        <div class="z-50">
          <TwClass name="flex-none" tooltip="flex: none" class="mb-0.5">none</TwClass>
          <div class="font-sans text-coolGray-400 mb-0.5">No growing or shrinking</div>
          <div class="h-20 border border-coolGray-400 rounded bg-coolGray-800 p-1 flex flex-col resize-x shadow-md overflow-hidden">
            <div class="flex gap-0.5 mb-2.5">
              <div class="bg-coolGray-500 rounded text-xs font-sans px-1 py-0.5 flex justify-center flex-1">Ab</div>
              <div class="bg-lightBlue-600 rounded text-xs font-sans px-1 py-0.5 flex justify-center flex-none items-center">Ij kl mn</div>
              <div class="bg-coolGray-500 rounded text-xs font-sans px-1 py-0.5 flex justify-center flex-1">Op</div>
            </div>
            <div class="flex gap-0.5">
              <div class="bg-coolGray-500 rounded text-xs font-sans px-1 py-0.5 flex justify-center flex-1">Ab cd ef gh</div>
              <div class="bg-lightBlue-600 rounded text-xs font-sans px-1 py-0.5 flex justify-center flex-none items-center">Ij kl mn</div>
              <div class="bg-coolGray-500 rounded text-xs font-sans px-1 py-0.5 flex justify-center flex-1">Op qr st uv</div>
            </div>
          </div>
        </div>
        <div class="z-40">
          <TwClass name="flex-1" tooltip="flex: 1 1 0%" class="mb-0.5">1</TwClass>
          <div class="font-sans text-coolGray-400 mb-0.5">Equal size</div>
          <div class="h-20 border border-coolGray-400 rounded bg-coolGray-800 flex flex-col p-1 resize-x shadow-md overflow-hidden">
            <div class="flex gap-0.5 mb-2.5">
              <div class="bg-coolGray-500 rounded text-xs font-sans px-1 py-0.5 flex justify-center">Ab</div>
              <div class="bg-coolGray-500 rounded text-xs font-sans px-1 py-0.5 flex justify-center">Cdefghi</div>
              <div class="bg-coolGray-500 rounded text-xs font-sans px-1 py-0.5 flex justify-center">Jklm</div>
            </div>
            <div class="flex gap-0.5">
              <div class="bg-lightBlue-600 rounded text-xs font-sans px-1 py-0.5 flex justify-center flex-1">Ab</div>
              <div class="bg-lightBlue-600 rounded text-xs font-sans px-1 py-0.5 flex justify-center flex-1">Cdefg</div>
              <div class="bg-lightBlue-600 rounded text-xs font-sans px-1 py-0.5 flex justify-center flex-1">hij</div>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-2">
        <div class="z-50">
          <div class="flex justify-between">
            <TwClass name="flex-grow" tooltip="flex-grow: 1" class="mb-1 w-max">grow</TwClass>
            <div class="font-sans text-coolGray-400">Grow to fill any available space</div>
          </div>
          <div class="h-9 border border-coolGray-400 rounded bg-coolGray-800 flex resize-x shadow-md overflow-hidden px-1 py-1 gap-1">
            <div class="bg-coolGray-500 rounded flex justify-center items-center px-2 flex-none">none</div>
            <div class="bg-lightBlue-600 rounded flex justify-center items-center px-2 flex-grow">grow</div>
            <div class="bg-coolGray-500 rounded flex justify-center items-center px-2 flex-none">none</div>
          </div>
        </div>
        <div class="z-40">
          <div class="flex justify-between">
            <TwClass name="flex-grow-0" tooltip="flex-grow: 0" class="mb-1 w-max">grow-0</TwClass>
            <div class="font-sans text-coolGray-400">Prevent a flex item from growing</div>
          </div>
          <div class="h-9 border border-coolGray-400 rounded bg-coolGray-800 flex resize-x shadow-md overflow-hidden p-1 gap-1">
            <div class="bg-coolGray-500 rounded flex justify-center items-center px-2 w-8 flex-grow">grow</div>
            <div class="bg-lightBlue-600 rounded flex justify-center items-center px-2 flex-grow-0 w-28">grow-0</div>
            <div class="bg-coolGray-500 rounded flex justify-center items-center px-2 w-8 flex-grow">grow</div>
          </div>
        </div>
        <div class="z-50">
          <div class="flex justify-between">
            <TwClass name="flex-shrink" tooltip="flex-shrink: 1" class="mb-1 w-max">shrink</TwClass>
            <div class="font-sans text-coolGray-400">Allow a flex item to shrink if needed</div>
          </div>
          <div class="h-9 border border-coolGray-400 rounded bg-coolGray-800 flex resize-x shadow-md overflow-hidden p-1 gap-1">
            <div class="bg-coolGray-500 rounded flex justify-center items-center px-2 w-8 flex-grow">grow</div>
            <div class="bg-lightBlue-600 rounded flex justify-center items-center px-2 w-40 flex-shrink">shrink</div>
            <div class="bg-coolGray-500 rounded flex justify-center items-center px-2 w-8 flex-grow">grow</div>
          </div>
        </div>
        <div class="z-40">
          <div class="flex justify-between">
            <TwClass name="flex-shrink-0" tooltip="flex-shrink: 0" class="mb-1 w-max">shrink-0</TwClass>
            <div class="font-sans text-coolGray-400">Prevent a flex item from shrinking</div>
          </div>
          <div class="h-9 border border-coolGray-400 rounded bg-coolGray-800 flex resize-x shadow-md overflow-hidden p-1 gap-1">
            <div class="bg-coolGray-500 rounded flex justify-center items-center px-2 w-8 flex-1">1</div>
            <div class="bg-lightBlue-600 rounded flex justify-center items-center px-2 w-40 flex-shrink-0">shrink-0</div>
            <div class="bg-coolGray-500 rounded flex justify-center items-center px-2 w-8 flex-1">1</div>
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
