<template>
  <Card>
    <div class="prefix">
      <Lnk href="https://www.example.com">object-</Lnk>
    </div>
    <div class="content">
      <div class="grid grid-cols-3 gap-2">
        <div>
          <TwClass name="object-contain" tooltip="object-fit: contain" class="w-max">contain</TwClass>
          <img src="jordan-whitt-EerxztHCjM8-unsplash.jpg" class="h-12 w-full mt-1 rounded bg-gray-700 object-contain">
        </div>
        <div>
          <TwClass name="object-cover" tooltip="object-fit: cover" class="w-max">cover</TwClass>
          <img src="jordan-whitt-EerxztHCjM8-unsplash.jpg" class="h-12 w-full mt-1 rounded bg-gray-700 object-cover">
        </div>
        <div>
          <TwClass name="object-fill" tooltip="object-fit: fill" class="w-max">fill</TwClass>
          <img src="jordan-whitt-EerxztHCjM8-unsplash.jpg" class="h-12 w-full mt-1 rounded bg-gray-700 object-fill">
        </div>
        <div>
          <TwClass name="object-scale-down" tooltip="object-fit: scale-down" class="w-max">scale-down</TwClass>
          <img src="jordan-whitt-EerxztHCjM8-unsplash.jpg" class="h-12 w-full mt-1 rounded bg-gray-700 object-scale-down">
        </div>
        <div>
          <TwClass name="object-none" tooltip="object-fit: none" class="w-max">none</TwClass>
          <img src="jordan-whitt-EerxztHCjM8-unsplash.jpg" class="h-12 w-full mt-1 rounded bg-gray-700 object-none">
        </div>
      </div>
      <div class="grid grid-cols-3 gap-2 mt-2">
        <div>
          <TwClass name="object-left-top" tooltip="object-position: left top" class="w-max">left-top</TwClass>
          <img src="jordan-whitt-EerxztHCjM8-unsplash.jpg" class="mt-1 w-full h-14 bg-gray-700 rounded object-none object-left-top">
        </div>
        <div>
          <TwClass name="object-top" tooltip="object-position: top" class="w-max">top</TwClass>
          <img src="jordan-whitt-EerxztHCjM8-unsplash.jpg" class="mt-1 w-full h-14 bg-gray-700 rounded object-none object-top">
        </div>
        <div>
          <TwClass name="object-right-top" tooltip="object-position: right top" class="w-max">right-top</TwClass>
          <img src="jordan-whitt-EerxztHCjM8-unsplash.jpg" class="mt-1 w-full h-14 bg-gray-700 rounded object-none object-right-top">
        </div>
        <div>
          <TwClass name="object-left" tooltip="object-position: left" class="w-max">left</TwClass>
          <img src="jordan-whitt-EerxztHCjM8-unsplash.jpg" class="mt-1 w-full h-14 bg-gray-700 rounded object-none object-left">
        </div>
        <div>
          <TwClass name="object-center" tooltip="object-position: center" class="w-max">center</TwClass>
          <img src="jordan-whitt-EerxztHCjM8-unsplash.jpg" class="mt-1 w-full h-14 bg-gray-700 rounded object-none object-center">
        </div>
        <div>
          <TwClass name="object-right" tooltip="object-position: right" class="w-max">right</TwClass>
          <img src="jordan-whitt-EerxztHCjM8-unsplash.jpg" class="mt-1 w-full h-14 bg-gray-700 rounded object-none object-right">
        </div>
        <div>
          <TwClass name="object-left-bottom" tooltip="object-position: left bottom" class="w-max">left-bottom</TwClass>
          <img src="jordan-whitt-EerxztHCjM8-unsplash.jpg" class="mt-1 w-full h-14 bg-gray-700 rounded object-none object-left-bottom">
        </div>
        <div>
          <TwClass name="object-bottom" tooltip="object-position: bottom" class="w-max">bottom</TwClass>
          <img src="jordan-whitt-EerxztHCjM8-unsplash.jpg" class="mt-1 w-full h-14 bg-gray-700 rounded object-none object-bottom">
        </div>
        <div>
          <TwClass name="object-right-bottom" tooltip="object-position: right bottom" class="w-max">right-bottom</TwClass>
          <img src="jordan-whitt-EerxztHCjM8-unsplash.jpg" class="mt-1 w-full h-14 bg-gray-700 rounded object-none object-right-bottom">
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
export default {}
</script>

