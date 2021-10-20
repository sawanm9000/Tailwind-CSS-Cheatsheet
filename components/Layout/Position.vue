<template>
  <Card>
    <div class="content">
      <div class="title">
        <Lnk href="https://tailwindcss.com/docs/position">Position</Lnk>
      </div>
      <div class="grid grid-cols-3 gap-2 mb-3">
        <div>
          <TwClass name="static" tooltip="position: static" class="mb-1 w-max">static</TwClass>
          <div class="h-20 bg-blue-700 flex gap-1 p-1">
            <div class="h-6 w-6 rounded bg-yellow-600"></div>
            <div class="h-6 w-6 rounded bg-emerald-600"></div>
            <div class="h-6 w-6 rounded bg-red-600"></div>
          </div>
        </div>
        <div>
          <TwClass name="relative" tooltip="position: relative" class="mb-1 w-max">relative</TwClass>
          <div class="h-20 bg-blue-700 flex gap-1 p-1">
            <div class="h-6 w-6 rounded bg-yellow-600"></div>
            <div class="h-6 w-6 rounded border border-dashed relative">
              <div class="h-6 w-6 rounded bg-emerald-600 relative top-3 left-3 border border-coolGray-300"></div>
            </div>
            <div class="h-6 w-6 rounded bg-red-600"></div>
          </div>
        </div>
        <div>
          <TwClass name="absolute" tooltip="position: absolute" class="mb-1 w-max">absolute</TwClass>
          <div class="h-20 bg-blue-700 flex gap-1 p-1 border border-dashed">
            <div class="h-6 w-6 rounded bg-yellow-600 relative">
              <div class="h-6 w-6 rounded bg-emerald-600 absolute top-2 left-2 border border-coolGray-300"></div>
            </div>
            <div class="h-6 w-6 rounded bg-red-600">
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-2 mb-3">
        <div>
          <TwClass name="fixed" tooltip="position: fixed" class="mb-1 w-max">fixed</TwClass>
          <Browser height="4.3rem">
            <div class="h-full bg-blue-700 relative p-1">
              <div class="h-8 w-8 rounded bg-emerald-600 absolute top-2 left-2 border border-coolGray-300"></div>
            </div>
          </Browser>
        </div>
        <div>
          <TwClass name="sticky" tooltip="position: sticky" class="mb-1 w-max">sticky</TwClass>
          <div class="text-box-small scroll-box h-20 bg-black overflow-auto flex flex-col gap-1">
            <div>
              <div class="w-full bg-yellow-600 sticky top-0 text-xs pl-1 font-sans">One</div>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus labore molestiae porro ea nisi ipsum perferendis tempore saepe quos iure odit facere, harum voluptates assumenda repellat illum natus hic incidunt!</p>
            </div>
            <div>
              <div class="w-full bg-emerald-600 sticky top-0 text-xs pl-1 font-sans">Two</div>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus labore molestiae porro ea nisi ipsum perferendis tempore saepe quos iure odit facere, harum voluptates assumenda repellat illum natus hic incidunt!</p>
            </div>
            <div>
              <div class="w-full bg-red-600 sticky top-0 text-xs pl-1 font-sans">Three</div>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus labore molestiae porro ea nisi ipsum perferendis tempore saepe quos iure odit facere, harum voluptates assumenda repellat illum natus hic incidunt!</p>
            </div>
            <div>
              <div class="w-full bg-blue-600 sticky top-0 text-xs pl-1 font-sans">Four</div>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus labore molestiae porro ea nisi ipsum perferendis tempore saepe quos iure odit facere, harum voluptates assumenda repellat illum natus hic incidunt!</p>
            </div>
            <div>
              <div class="w-full bg-purple-600 sticky top-0 text-xs pl-1 font-sans">Five</div>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus labore molestiae porro ea nisi ipsum perferendis tempore saepe quos iure odit facere, harum voluptates assumenda repellat illum natus hic incidunt!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
export default {}
</script>

