<template>
  <Card>
    <div class="flex justify-between items-start">
      <div class="prefix">
        <Lnk href="https://github.com/tailwindlabs/tailwindcss-aspect-ratio#readme" class="w-min">aspect-w-<br>aspect-h-</Lnk>
      </div>
      <Lnk href="https://github.com/tailwindlabs/tailwindcss-aspect-ratio#readme" class="pt-1.5 pr-1.5" title="Requires plugin">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      </Lnk>
    </div>
    <div class="content">
      <div class="flex">
        <div>{1, 2, 3... 16}</div>
      </div>
      <div class="text-coolGray-400 font-sans text-sm mt-2">Examples:</div>
      <div>aspect-w-4 <br>aspect-h-3</div>
      <div class="flex justify-center mt-1">
        <div class="w-7">
          <div class="bg-coolGray-600 aspect-w-4 aspect-h-3"></div>
        </div>
      </div>
      <div class="mt-2">aspect-w-16 <br>aspect-h-9</div>
      <div class="flex justify-center mt-1">
        <div class="w-9">
          <div class="bg-coolGray-600 aspect-w-16 aspect-h-9"></div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
export default {}
</script>
