<template>
  <Card>
    <div class="prefix">
      <Lnk href="https://tailwindcss.com/docs/background-attachment">bg-</Lnk>
    </div>
    <div class="content">
      <div class="grid grid-cols-3 gap-2">
        <div>
          <TwClass class="w-max" name="bg-fixed" tooltip="background-attachment: fixed">fixed</TwClass>
          <div class="scroll-box h-14 w-full mt-1 rounded overflow-y-scroll bg-fixed" style="background-image: url(placeholder-light-blue.svg)">
            <div class="h-52"></div>
          </div>
        </div>
        <div>
          <TwClass class="w-max" name="bg-local" tooltip="background-attachment: local">local</TwClass>
          <div class="scroll-box h-14 w-full mt-1 rounded overflow-y-scroll bg-local" style="background-image: url(placeholder-light-blue.svg)">
            <div class="h-52"></div>
          </div>
        </div>
        <div>
          <TwClass class="w-max" name="bg-scroll" tooltip="background-attachment: scroll">scroll</TwClass>
          <div class="scroll-box h-14 w-full mt-1 rounded overflow-y-scroll bg-scroll" style="background-image: url(placeholder-light-blue.svg)">
            <div class="h-52"></div>
          </div>
        </div>
        <div>
          <TwClass class="w-max" name="bg-auto" tooltip="background-size: auto">auto</TwClass>
          <div class="bg-no-repeat h-14 w-full mt-1 rounded bg-auto" style="background-image: url(placeholder-light-blue.svg)"></div>
        </div>
        <div>
          <TwClass class="w-max" name="bg-cover" tooltip="background-size: cover">cover</TwClass>
          <div class="bg-no-repeat h-14 w-full mt-1 rounded bg-cover" style="background-image: url(placeholder-light-blue.svg)"></div>
        </div>
        <div>
          <TwClass class="w-max" name="bg-contain" tooltip="background-size: contain">contain</TwClass>
          <div class="bg-no-repeat h-14 w-full mt-1 rounded bg-contain" style="background-image: url(placeholder-light-blue.svg)"></div>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-2 mt-2">
        <div>
          <TwClass class="w-max" name="bg-repeat" tooltip="background-repeat: repeat">repeat</TwClass>
          <div class="h-16 mt-1 rounded bg-coolGray-700 bg-repeat" style="background-image: url(jordan-whitt-EerxztHCjM8-unsplash.jpg)"></div>
        </div>
        <div>
          <TwClass class="w-max" name="bg-no-repeat" tooltip="background-repeat: no-repeat">no-repeat</TwClass>
          <div class="h-16 mt-1 rounded bg-coolGray-700 bg-no-repeat" style="background-image: url(jordan-whitt-EerxztHCjM8-unsplash.jpg)"></div>
        </div>
        <div>
          <TwClass class="w-max" name="bg-repeat-x" tooltip="background-repeat: repeat-x">repeat-x</TwClass>
          <div class="h-16 mt-1 rounded bg-coolGray-700 bg-repeat-x" style="background-image: url(jordan-whitt-EerxztHCjM8-unsplash.jpg)"></div>
        </div>
        <div>
          <TwClass class="w-max" name="bg-repeat-y" tooltip="background-repeat: repeat-y">repeat-y</TwClass>
          <div class="h-16 mt-1 rounded bg-coolGray-700 bg-repeat-y" style="background-image: url(jordan-whitt-EerxztHCjM8-unsplash.jpg)"></div>
        </div>
        <div>
          <TwClass class="w-max" name="bg-repeat-round" tooltip="background-repeat: round">repeat-round</TwClass>
          <div class="h-16 mt-1 rounded bg-coolGray-700 bg-repeat-round" style="background-image: url(jordan-whitt-EerxztHCjM8-unsplash.jpg)"></div>
        </div>
        <div>
          <TwClass class="w-max" name="bg-repeat-space" tooltip="background-repeat: space">repeat-space</TwClass>
          <div class="h-16 mt-1 rounded bg-coolGray-700 bg-repeat-space" style="background-image: url(jordan-whitt-EerxztHCjM8-unsplash.jpg)"></div>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-2 mt-2">
        <div>
          <TwClass class="w-max" name="bg-left-top" tooltip="background-position: left top">left-top</TwClass>
          <div class="mt-1 h-14 rounded bg-no-repeat bg-coolGray-700 bg-left-top" style="background-image: url(jordan-whitt-EerxztHCjM8-unsplash.jpg)"></div>
        </div>
        <div>
          <TwClass class="w-max" name="bg-top" tooltip="background-position: top">top</TwClass>
          <div class="mt-1 h-14 rounded bg-no-repeat bg-coolGray-700 bg-top" style="background-image: url(jordan-whitt-EerxztHCjM8-unsplash.jpg)"></div>
        </div>
        <div>
          <TwClass class="w-max" name="bg-right-top" tooltip="background-position: right top">right-top</TwClass>
          <div class="mt-1 h-14 rounded bg-no-repeat bg-coolGray-700 bg-right-top" style="background-image: url(jordan-whitt-EerxztHCjM8-unsplash.jpg)"></div>
        </div>
        <div>
          <TwClass class="w-max" name="bg-left" tooltip="background-position: left">left</TwClass>
          <div class="mt-1 h-14 rounded bg-no-repeat bg-coolGray-700 bg-left" style="background-image: url(jordan-whitt-EerxztHCjM8-unsplash.jpg)"></div>
        </div>
        <div>
          <TwClass class="w-max" name="bg-center" tooltip="background-position: center">center</TwClass>
          <div class="mt-1 h-14 rounded bg-no-repeat bg-coolGray-700 bg-center" style="background-image: url(jordan-whitt-EerxztHCjM8-unsplash.jpg)"></div>
        </div>
        <div>
          <TwClass class="w-max" name="bg-right" tooltip="background-position: right">right</TwClass>
          <div class="mt-1 h-14 rounded bg-no-repeat bg-coolGray-700 bg-right" style="background-image: url(jordan-whitt-EerxztHCjM8-unsplash.jpg)"></div>
        </div>
        <div>
          <TwClass class="w-max" name="bg-left-bottom" tooltip="background-position: left bottom">left-bottom</TwClass>
          <div class="mt-1 h-14 rounded bg-no-repeat bg-coolGray-700 bg-left-bottom" style="background-image: url(jordan-whitt-EerxztHCjM8-unsplash.jpg)"></div>
        </div>
        <div>
          <TwClass class="w-max" name="bg-bottom" tooltip="background-position: bottom">bottom</TwClass>
          <div class="mt-1 h-14 rounded bg-no-repeat bg-coolGray-700 bg-bottom" style="background-image: url(jordan-whitt-EerxztHCjM8-unsplash.jpg)"></div>
        </div>
        <div>
          <TwClass class="w-max" name="bg-right-bottom" tooltip="background-position: right bottom">right-bottom</TwClass>
          <div class="mt-1 h-14 rounded bg-no-repeat bg-coolGray-700 bg-right-bottom" style="background-image: url(jordan-whitt-EerxztHCjM8-unsplash.jpg)"></div>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-2 mt-2">
        <div>
          <TwClass name="bg-gradient-to-tl" tooltip="background-image: linear-gradient(to top left, var(--tw-gradient-stops))" class="text-xs">gradient-to-tl</TwClass>
          <div class="rounded mt-1 h-12 bg-gradient-to-tl from-yellow-400 via-red-500 to-pink-500"></div>
        </div>
        <div>
          <TwClass name="bg-gradient-to-t" tooltip="background-image: linear-gradient(to top, var(--tw-gradient-stops))" class="text-xs">gradient-to-t</TwClass>
          <div class="rounded mt-1 h-12 bg-gradient-to-t from-yellow-400 via-red-500 to-pink-500"></div>
        </div>
        <div>
          <TwClass name="bg-gradient-to-tr" tooltip="background-image: linear-gradient(to top right, var(--tw-gradient-stops))" class="text-xs">gradient-to-tr</TwClass>
          <div class="rounded mt-1 h-12 bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500"></div>
        </div>
        <div>
          <TwClass name="bg-gradient-to-l" tooltip="background-image: linear-gradient(to left, var(--tw-gradient-stops))" class="text-xs">gradient-to-l</TwClass>
          <div class="rounded mt-1 h-12 bg-gradient-to-l from-yellow-400 via-red-500 to-pink-500"></div>
        </div>
        <div>
          <TwClass name="bg-none" tooltip="background-image: none" class="text-xs">none</TwClass>
          <div class="rounded mt-1 h-12 bg-none from-yellow-400 via-red-500 to-pink-500"></div>
        </div>
        <div>
          <TwClass name="bg-gradient-to-r" tooltip="background-image: linear-gradient(to right, var(--tw-gradient-stops))" class="text-xs">gradient-to-r</TwClass>
          <div class="rounded mt-1 h-12 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"></div>
        </div>
        <div>
          <TwClass name="bg-gradient-to-bl" tooltip="background-image: linear-gradient(to bottom left, var(--tw-gradient-stops))" class="text-xs">gradient-to-bl</TwClass>
          <div class="rounded mt-1 h-12 bg-gradient-to-bl from-yellow-400 via-red-500 to-pink-500"></div>
        </div>
        <div>
          <TwClass name="bg-gradient-to-b" tooltip="background-image: linear-gradient(to bottom, var(--tw-gradient-stops))" class="text-xs">gradient-to-b</TwClass>
          <div class="rounded mt-1 h-12 bg-gradient-to-b from-yellow-400 via-red-500 to-pink-500"></div>
        </div>
        <div>
          <TwClass name="bg-gradient-to-br" tooltip="background-image: linear-gradient(to bottom right, var(--tw-gradient-stops))" class="text-xs">gradient-to-br</TwClass>
          <div class="rounded mt-1 h-12 bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500"></div>
        </div>
      </div>
      <div class="mt-2 grid grid-cols-3 gap-2">
        <div>
          <div class="text-red-600 w-max">{color}</div>
          <div class="rounded mt-1 h-7 bg-red-600"></div>
        </div>
        <div>
          <TwClass name="bg-transparent" tooltip="background-color: transparent" class="w-max">transparent</TwClass>
          <div class="rounded mt-1 h-7 bg-transparent"></div>
        </div>
        <div>
          <TwClass name="bg-current" tooltip="background-color: currentColor" class="w-max">current</TwClass>
          <div class="rounded mt-1 h-7 bg-current text-emerald-400 font-sans flex justify-center items-center">Hi</div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
export default {}
</script>

