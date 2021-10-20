<template>
  <Card>
    <div class="content">
      <div class="flex justify-between">
        <div class="title"><Lnk href="https://tailwindcss.com/docs/display">Display</Lnk></div>
        <Lnk href="https://tailwindcss.com/docs/display" class="flex">
          <div class="font-sans text-sm pr-1">More</div>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </Lnk>
      </div>

      <div class="grid grid-cols-3 gap-y-2.5 gap-x-2 mb-2.5">
        <div>
          <TwClass name="inline" tooltip="display: inline" class="mb-1 w-max">inline</TwClass>
          <div class="pt-2 font-sans text-sm">
            <p class="inline">text</p>
            <div class="bg-emerald-700 rounded px-0.5 leading-4 inline h-8">h8</div>
            <div class="bg-emerald-700 rounded px-0.5 leading-4 inline w-9">w9</div>
            <div class="bg-emerald-700 rounded px-0.5 leading-4 inline w-14 h-7">w14 h7</div>
            <div class="inline">text</div>
          </div>
        </div>
        <div>
          <TwClass name="inline-block" tooltip="display: inline-block" class="mb-1 w-max">inline-block</TwClass>
          <div class="font-sans text-sm">
            <p class="inline">text</p>
            <div class="bg-emerald-700 rounded px-0.5 leading-4 inline-block h-8">h8</div>
            <div class="bg-emerald-700 rounded px-0.5 leading-4 inline-block w-9">w9</div>
            <div class="bg-emerald-700 rounded px-0.5 leading-4 inline-block w-14 h-7">w14 h7</div>
            <div class="inline">text</div>
          </div>
        </div>
        <div>
          <TwClass name="block" tooltip="display: block" class="mb-1 w-max">block</TwClass>
          <div>
            <div class="space-y-1">
              <span class="block bg-emerald-700 rounded p-0.5 text-center">span</span>
              <span class="block bg-emerald-700 rounded p-0.5 text-center">span</span>
              <span class="block bg-emerald-700 rounded p-0.5 text-center">span</span>
            </div>
          </div>
        </div>
        <div>
          <TwClass name="flex" tooltip="display: flex" class="mb-1 w-max">flex</TwClass>
          <div>
            <div class="flex space-x-1">
              <div class="flex-1 bg-emerald-700 rounded p-1 text-center">1</div>
              <div class="flex-1 bg-emerald-700 rounded p-1 text-center">2</div>
              <div class="flex-1 bg-emerald-700 rounded p-1 text-center">3</div>
            </div>
          </div>
        </div>
        <div>
          <TwClass name="grid" tooltip="display: grid" class="mb-1 w-max">grid</TwClass>
          <div>
            <div class="grid gap-1 grid-cols-3">
              <div class="bg-emerald-700 h-7 rounded text-center pt-2">1</div>
              <div class="bg-emerald-700 h-7 rounded text-center pt-2">2</div>
              <div class="bg-emerald-700 h-7 rounded text-center pt-2">3</div>
              <div class="bg-emerald-700 h-7 rounded text-center pt-2">4</div>
              <div class="bg-emerald-700 h-7 rounded text-center pt-2">5</div>
              <div class="bg-emerald-700 h-7 rounded text-center pt-2">6</div>
            </div>
          </div>
        </div>
        <div>
          <TwClass name="table" tooltip="display: table" class="mb-1 w-max">table</TwClass>
          <div>
            <div class="table">
              <div class="table-row-group">
                <div class="table-row">
                  <div class="table-cell text-xs font-sans py-1.5 px-3 bg-emerald-800">1</div>
                  <div class="table-cell text-xs font-sans py-1.5 px-3 bg-emerald-700">2</div>
                  <div class="table-cell text-xs font-sans py-1.5 px-3 bg-emerald-800">3</div>
                </div>
                <div class="table-row">
                  <div class="table-cell text-xs font-sans py-1.5 px-3 bg-emerald-700">4</div>
                  <div class="table-cell text-xs font-sans py-1.5 px-3 bg-emerald-800">5</div>
                  <div class="table-cell text-xs font-sans py-1.5 px-3 bg-emerald-700">6</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <TwClass name="list-item" tooltip="display: list-item" class="mb-1 w-max">list-item</TwClass>
          <div>
            <div class="space-y-1.5">
              <div class="list-item list-inside bg-emerald-700 px-2 py-1 rounded">div</div>
              <div class="list-item list-inside bg-emerald-700 px-2 py-1 rounded">div</div>
              <div class="list-item list-inside bg-emerald-700 px-2 py-1 rounded">div</div>
            </div>
          </div>
        </div>
        <div>
          <TwClass name="contents" tooltip="display: contents" class="mb-1 w-max">contents</TwClass>
          <div>
            <div class="flex gap-1">
              <div class="flex-1 text-center bg-emerald-700 py-0.5 rounded">1</div>
              <div class="contents bg-blue-600 text-red-500">
                <div class="flex-1 text-center py-0.5 rounded" style="background-color: inherit">2</div>
                <div class="flex-1 text-center py-0.5 rounded" style="background-color: inherit">3</div>
              </div>
              <div class="flex-1 text-center bg-emerald-700 py-0.5 rounded">4</div>
            </div>
            <div class="font-sans pl-0.5 pt-1 text-coolGray-400">Container whose children act like direct children of the parent</div>
          </div>
        </div>
        <div>
          <TwClass name="hidden" tooltip="display: none" class="mb-1 w-max">hidden</TwClass>
          <div>
            <div class="flex gap-1">
              <div class="bg-yellow-600 rounded px-2.5 py-1.5">1</div>
              <div class="bg-emerald-700 rounded px-2.5 py-1.5 hidden">2</div>
              <div class="bg-red-600 rounded px-2.5 py-1.5">3</div>
            </div>
          </div>
        </div>
      </div>
      <div class="title">
        <Lnk href="https://tailwindcss.com/docs/visibility" class="font-sans text-sm text-coolGray-400">Visibility</Lnk>
      </div>
      <div class="grid grid-cols-3 gap-2">
        <div>
          <TwClass name="visible" tooltip="visibility: visible" class="mb-1 w-max">visible</TwClass>
          <div class="flex gap-1">
            <div class="px-2.5 py-1.5 rounded bg-yellow-600">1</div>
            <div class="px-2.5 py-1.5 rounded bg-emerald-600">2</div>
            <div class="px-2.5 py-1.5 rounded bg-red-600">3</div>
          </div>
        </div>
        <div>
          <TwClass name="invisible" tooltip="visibility: hidden" class="mb-1 w-max">invisible</TwClass>
          <div class="flex gap-1">
            <div class="px-2.5 py-1.5 rounded bg-yellow-600">1</div>
            <div class="px-2.5 py-1.5 rounded bg-emerald-600 invisible">2</div>
            <div class="px-2.5 py-1.5 rounded bg-red-600">3</div>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
export default {}
</script>

