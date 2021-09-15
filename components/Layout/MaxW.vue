<template>
  <Card>
    <div class="prefix">
      <Lnk href="https://tailwindcss.com/docs/max-width">max-w-</Lnk>
    </div>
    <div class="content">
      <div class="sm:hidden mb-2.5 grid grid-cols-6 gap-x-1.5 gap-y-3">
        <div>
          <TwClass name="max-w-xs" tooltip="max-width: 20rem" class="mb-0.5 w-max">xs</TwClass>
          <div class="text-green-400">20rem</div>
        </div>
        <div>
          <TwClass name="max-w-sm" tooltip="max-width: 24rem" class="mb-0.5 w-max">sm</TwClass>
          <div class="text-green-400">24rem</div>
        </div>
        <div>
          <TwClass name="max-w-md" tooltip="max-width: 28rem" class="mb-0.5 w-max">md</TwClass>
          <div class="text-green-400">28rem</div>
        </div>
        <div>
          <TwClass name="max-w-lg" tooltip="max-width: 32rem" class="mb-0.5 w-max">lg</TwClass>
          <div class="text-green-400">32rem</div>
        </div>
        <div>
          <TwClass name="max-w-xl" tooltip="max-width: 36rem" class="mb-0.5 w-max">xl</TwClass>
          <div class="text-green-400">36rem</div>
        </div>
        <div>
          <TwClass name="max-w-2xl" tooltip="max-width: 42rem" class="mb-0.5 w-max">2xl</TwClass>
          <div class="text-green-400">42rem</div>
        </div>
        <div>
          <TwClass name="max-w-3xl" tooltip="max-width: 48rem" class="mb-0.5 w-max">3xl</TwClass>
          <div class="text-green-400">48rem</div>
        </div>
        <div>
          <TwClass name="max-w-4xl" tooltip="max-width: 56rem" class="mb-0.5 w-max">4xl</TwClass>
          <div class="text-green-400">56rem</div>
        </div>
        <div>
          <TwClass name="max-w-5xl" tooltip="max-width: 64rem" class="mb-0.5 w-max">5xl</TwClass>
          <div class="text-green-400">64rem</div>
        </div>
        <div>
          <TwClass name="max-w-6xl" tooltip="max-width: 72rem" class="mb-0.5 w-max">6xl</TwClass>
          <div class="text-green-400">72rem</div>
        </div>
        <div>
          <TwClass name="max-w-7xl" tooltip="max-width: 80rem" class="mb-0.5 w-max">7xl</TwClass>
          <div class="text-green-400">80rem</div>
        </div>
      </div>
      <div class="hidden sm:block">
        <div class="flex flex-col mb-3 overflow-x-auto">
          <div style="width: 80rem" class="flex justify-between">
            <div style="width: 72rem" class="flex justify-between">
              <div style="width: 64rem" class="flex justify-between">
                <div style="width: 56rem" class="flex justify-between">
                  <div style="width: 48rem" class="flex justify-between">
                    <div style="width: 42rem" class="flex justify-between">
                      <div style="width: 36rem" class="flex justify-between">
                        <div style="width: 32rem" class="flex justify-between">
                          <div style="width: 28rem" class="flex justify-between">
                            <div style="width: 24rem" class="flex justify-between">
                              <div style="width: 20rem" class="flex justify-end">
                                <TwClass name="max-w-xs" tooltip="max-width: 20rem" class="w-max">xs</TwClass>
                              </div>
                              <TwClass name="max-w-sm" tooltip="max-width: 24rem" class="w-max">sm</TwClass>
                            </div>
                            <TwClass name="max-w-md" tooltip="max-width: 28rem" class="w-max">md</TwClass>
                          </div>
                          <TwClass name="max-w-lg" tooltip="max-width: 32rem" class="w-max">lg</TwClass>
                        </div>
                        <TwClass name="max-w-xl" tooltip="max-width: 36rem" class="w-max">xl</TwClass>
                      </div>
                      <TwClass name="max-w-2xl" tooltip="max-width: 42rem" class="w-max">2xl</TwClass>
                    </div>
                    <TwClass name="max-w-3xl" tooltip="max-width: 48rem" class="w-max">3xl</TwClass>
                  </div>
                  <TwClass name="max-w-4xl" tooltip="max-width: 56rem" class="w-max">4xl</TwClass>
                </div>
                <TwClass name="max-w-5xl" tooltip="max-width: 64rem" class="w-max">5xl</TwClass>
              </div>
              <TwClass name="max-w-6xl" tooltip="max-width: 72rem" class="w-max">6xl</TwClass>
            </div>
            <TwClass name="max-w-7xl" tooltip="max-width: 80rem" class="w-max">7xl</TwClass>
          </div>
          <div class="bars">
            <div style="width: 80rem">
              <div style="width: 72rem">
                <div style="width: 64rem">
                  <div style="width: 56rem">
                    <div style="width: 48rem">
                      <div style="width: 42rem">
                        <div style="width: 36rem">
                          <div style="width: 32rem">
                            <div style="width: 28rem">
                              <div style="width: 24rem">
                                <div style="width: 20rem"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-boxes grid grid-cols-4 sm:grid-cols-5 xl:grid-cols-10 gap-x-2 gap-y-3 max-w-7xl">
        <div>
          <TwClass name="max-w-none" tooltip="max-width: none" class="w-max">none</TwClass>
          <div class="text-green-400">0rem</div>
        </div>
        <div class="flex flex-col space-y-0.5">
          <TwClass name="max-w-min" tooltip="max-width: min-content" class="w-max">min</TwClass>
          <div class="w-min p-1 bg-blue-600">Ab cd e</div>
        </div>
        <div class="flex flex-col space-y-0.5">
          <TwClass name="max-w-max" tooltip="max-width: max-content" class="w-max">max</TwClass>
          <div class="w-max p-1 bg-blue-600">Ab cd e</div>
        </div>
        <div>
          <TwClass name="max-w-full" tooltip="max-width: 100%" class="w-max">full</TwClass>
          <div class="border border-gray-300 h-14">
            <div class="bg-blue-600 w-full flex justify-between items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 right-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <TwClass name="max-w-prose" tooltip="max-width: 65ch" class="w-max">prose</TwClass>
          <div class="text-green-400">65ch</div>
        </div>
        <div>
          <TwClass name="max-w-screen-sm" tooltip="max-width: 640px" class="w-max">screen-sm</TwClass>
          <div class="text-green-400">640px</div>
        </div>
        <div>
          <TwClass name="max-w-screen-md" tooltip="max-width: 768px" class="w-max">screen-md</TwClass>
          <div class="text-green-400">768px</div>
        </div>
        <div>
          <TwClass name="max-w-screen-lg" tooltip="max-width: 1024px" class="w-max">screen-lg</TwClass>
          <div class="text-green-400">1024px</div>
        </div>
        <div>
          <TwClass name="max-w-screen-xl" tooltip="max-width: 1280px" class="w-max">screen-xl</TwClass>
          <div class="text-green-400">1280px</div>
        </div>
        <div>
          <TwClass name="max-w-screen-2xl" tooltip="max-width: 1536px" class="w-max">screen-2xl</TwClass>
          <div class="text-green-400">1536px</div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
// * {
//   outline: 1px dashed red;
//   outline-offset: -1px;
// }

.top-sizes {

	div {
		@apply text-right flex content-end justify-end;
	}
}

.bars {
	@apply h-4;

	div {
		@apply bg-gray-600 border-r border-gray-800 h-4 w-full;
	}
}

.max-w-boxes {
  div {
    @apply space-y-1;
  }
}
</style>
