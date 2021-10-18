<template>
  <Card>
    <div class="prefix whitespace-pre"><Lnk href="https://tailwindcss.com/docs/translate"> translate-x-   translate-y-<br>-translate-x-  -translate-y-</Lnk></div>
    <div class="content">
      <div class="mb-3">
        <a href="layout/#length" class="text-blue-300 cursor-pointer select-none w-max" @click="$nuxt.$emit('blinkLength')">{length}</a>
      </div>
      <div class="grid grid-cols-4 gap-2 mb-3">
        <div>
          <TwClass name="translate-x-full" tooltip="--tw-translate-x: 100%" class="w-max">full</TwClass>
          <div class="mt-1">
            <span class="text-emerald-400">100%</span>
          </div>
        </div>
        <div>
          <TwClass name="translate-x-1/2" tooltip="--tw-translate-x: 50%" class="w-max">1/2</TwClass>
          <div class="mt-1">
            <span class="text-emerald-400">50%</span>
          </div>
        </div>
        <div>
          <TwClass name="translate-x-1/3" tooltip="--tw-translate-x: 33.333333%" class="w-max">1/3</TwClass>
          <div class="mt-1">
            <span class="text-emerald-400">33.333333%</span>
          </div>
        </div>
        <div>
          <TwClass name="translate-x-2/3" tooltip="--tw-translate-x: 66.666667%" class="w-max">2/3</TwClass>
          <div class="mt-1">
            <span class="text-emerald-400">66.666667%</span>
          </div>
        </div>
        <div>
          <TwClass name="translate-x-1/4" tooltip="--tw-translate-x: 25%" class="w-max">1/4</TwClass>
          <div class="mt-1">
            <span class="text-emerald-400">25%</span>
          </div>
        </div>
        <div>
          <TwClass name="translate-x-2/4" tooltip="--tw-translate-x: 50%" class="w-max">2/4</TwClass>
          <div class="mt-1">
            <span class="text-emerald-400">50%</span>
          </div>
        </div>
        <div>
          <TwClass name="translate-x-3/4" tooltip="--tw-translate-x: 75%" class="w-max">3/4</TwClass>
          <div class="mt-1">
            <span class="text-emerald-400">75%</span>
          </div>
        </div>
      </div>
      <div class="font-sans text-coolGray-400 text-sm mb-2">Examples:</div>
      <div class="grid grid-cols-3 gap-x-2 gap-y-4 w-full">
        <div>
          <div>translate-y-0</div>
          <div class="h-20 mt-1 rounded flex justify-center items-center">
            <div class="bg-coolGray-700 relative">
              <img src="jordan-whitt-EerxztHCjM8-unsplash.jpg" class="transform translate-y-0">
            </div>
          </div>
        </div>
        <div>
          <div>-translate-y-6</div>
          <div class="h-20 mt-1 rounded flex justify-center items-center">
            <div class="bg-coolGray-700 relative">
              <img src="jordan-whitt-EerxztHCjM8-unsplash.jpg" class="transform -translate-y-6">
            </div>
          </div>
        </div>
        <div>
          <div>translate-y-6</div>
          <div class="h-20 mt-1 rounded flex justify-center items-center">
            <div class="bg-coolGray-700 relative">
              <img src="jordan-whitt-EerxztHCjM8-unsplash.jpg" class="transform translate-y-6">
            </div>
          </div>
        </div>
        <div>
          <div>-translate-x-full</div>
          <div class="h-20 mt-1 rounded flex justify-center items-center">
            <div class="bg-coolGray-700 relative">
              <img src="jordan-whitt-EerxztHCjM8-unsplash.jpg" class="transform -translate-x-full">
            </div>
          </div>
        </div>
        <div>
          <div>translate-x-5</div>
          <div class="h-20 mt-1 rounded flex justify-center items-center">
            <div class="bg-coolGray-700 relative">
              <img src="jordan-whitt-EerxztHCjM8-unsplash.jpg" class="transform translate-x-5">
            </div>
          </div>
        </div>
        <div>
          <div>translate-x-2 translate-y-4</div>
          <div class="h-20 mt-1 rounded flex justify-center items-center">
            <div class="bg-coolGray-700 relative">
              <img src="jordan-whitt-EerxztHCjM8-unsplash.jpg" class="transform translate-x-2 translate-y-4">
            </div>
          </div>
        </div>
        <div>
          <div>-translate-x-3 <br>-translate-y-1/3</div>
          <div class="h-20 mt-1 rounded flex justify-center items-center">
            <div class="bg-coolGray-700 relative">
              <img src="jordan-whitt-EerxztHCjM8-unsplash.jpg" class="transform -translate-x-3 -translate-y-1/3">
            </div>
          </div>
        </div>
        <div>
          <div>-translate-x-1/2  translate-y-1/2</div>
          <div class="h-20 mt-1 rounded flex justify-center items-center">
            <div class="bg-coolGray-700 relative">
              <img src="jordan-whitt-EerxztHCjM8-unsplash.jpg" class="transform -translate-x-1/2 translate-y-1/2">
            </div>
          </div>
        </div>
        <div>
          <div>translate-x-1/3  translate-y-1/3</div>
          <div class="h-20 mt-1 rounded flex justify-center items-center">
            <div class="bg-coolGray-700 relative">
              <img src="jordan-whitt-EerxztHCjM8-unsplash.jpg" class="transform translate-x-1/3  translate-y-1/3">
            </div>
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
