<template>
  <Card>
    <div class="flex justify-between">
      <div class="prefix">
        <Lnk href="https://tailwindcss.com/docs/hover-focus-and-other-states#first-child">first:</Lnk>
      </div>
      <div class="text-coolGray-400 text-sm mr-2">Disabled by default</div>
    </div>
    <div class="content">
      <div class="grid grid-cols-2">
        <div>
          <div class="text-coolGray-400 font-sans text-sm">Example:</div>
          <div class="mt-1">first:rotate-45</div>
        </div>
        <div class="flex justify-between items-center h-full">
          <div v-for="i in [1,2,3,4]" :key="i" class="h-7 w-7 bg-blue-600 transform first:rotate-45"></div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
