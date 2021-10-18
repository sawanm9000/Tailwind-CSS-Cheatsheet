<template>
  <Card>
    <div class="prefix">
      <Lnk href="https://tailwindcss.com/docs/transform-origin">origin-</Lnk></div>
    <div class="content">
      <div class="grid grid-cols-3 gap-2">
        <div>
          <TwClass name="origin-top-left" tooltip="transform-origin: top left" class="w-max">top-left</TwClass>
          <div class="h-20 mt-1 bg-coolGray-600 rounded flex justify-center items-center">
            <div class="bg-blue-800 relative">
              <img src="jordan-whitt-EerxztHCjM8-unsplash.jpg" class="transform rotate-45 origin-top-left">
              <div class="w-1.5 h-1.5 absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"></div>
            </div>
          </div>
        </div>
        <div>
          <TwClass name="origin-top" tooltip="transform-origin: top" class="w-max">top</TwClass>
          <div class="h-20 mt-1 bg-coolGray-600 rounded flex justify-center items-center">
            <div class="bg-blue-800 relative">
              <img src="jordan-whitt-EerxztHCjM8-unsplash.jpg" class="transform rotate-45 origin-top">
              <div class="w-1.5 h-1.5 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"></div>
            </div>
          </div>
        </div>
        <div>
          <TwClass name="origin-top-right" tooltip="transform-origin: top right" class="w-max">top-right</TwClass>
          <div class="h-20 mt-1 bg-coolGray-600 rounded flex justify-center items-center">
            <div class="bg-blue-800 relative">
              <img src="jordan-whitt-EerxztHCjM8-unsplash.jpg" class="transform rotate-45 origin-top-right">
              <div class="w-1.5 h-1.5 absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"></div>
            </div>
          </div>
        </div>
        <div>
          <TwClass name="origin-left" tooltip="transform-origin: left" class="w-max">left</TwClass>
          <div class="h-20 mt-1 bg-coolGray-600 rounded flex justify-center items-center">
            <div class="bg-blue-800 relative">
              <img src="jordan-whitt-EerxztHCjM8-unsplash.jpg" class="transform rotate-45 origin-left">
              <div class="w-1.5 h-1.5 absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"></div>
            </div>
          </div>
        </div>
        <div>
          <TwClass name="origin-center" tooltip="transform-origin: center" class="w-max">center</TwClass>
          <div class="h-20 mt-1 bg-coolGray-600 rounded flex justify-center items-center">
            <div class="bg-blue-800 relative">
              <img src="jordan-whitt-EerxztHCjM8-unsplash.jpg" class="transform rotate-45 origin-center">
              <div class="w-1.5 h-1.5 absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"></div>
            </div>
          </div>
        </div>
        <div>
          <TwClass name="origin-right" tooltip="transform-origin: right" class="w-max">right</TwClass>
          <div class="h-20 mt-1 bg-coolGray-600 rounded flex justify-center items-center">
            <div class="bg-blue-800 relative">
              <img src="jordan-whitt-EerxztHCjM8-unsplash.jpg" class="transform rotate-45 origin-right">
              <div class="w-1.5 h-1.5 absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"></div>
            </div>
          </div>
        </div>
        <div>
          <TwClass name="origin-bottom-left" tooltip="transform-origin: bottom left" class="w-max">bottom-left</TwClass>
          <div class="h-20 mt-1 bg-coolGray-600 rounded flex justify-center items-center">
            <div class="bg-blue-800 relative">
              <img src="jordan-whitt-EerxztHCjM8-unsplash.jpg" class="transform rotate-45 origin-bottom-left">
              <div class="w-1.5 h-1.5 absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 bg-red-600 rounded-full"></div>
            </div>
          </div>
        </div>
        <div>
          <TwClass name="origin-bottom" tooltip="transform-origin: bottom" class="w-max">bottom</TwClass>
          <div class="h-20 mt-1 bg-coolGray-600 rounded flex justify-center items-center">
            <div class="bg-blue-800 relative">
              <img src="jordan-whitt-EerxztHCjM8-unsplash.jpg" class="transform rotate-45 origin-bottom">
              <div class="w-1.5 h-1.5 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-red-600 rounded-full"></div>
            </div>
          </div>
        </div>
        <div>
          <TwClass name="origin-bottom-right" tooltip="transform-origin: bottom right" class="w-max">bottom-right</TwClass>
          <div class="h-20 mt-1 bg-coolGray-600 rounded flex justify-center items-center">
            <div class="bg-blue-800 relative">
              <img src="jordan-whitt-EerxztHCjM8-unsplash.jpg" class="transform rotate-45 origin-bottom-right">
              <div class="w-1.5 h-1.5 absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 bg-red-600 rounded-full"></div>
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
