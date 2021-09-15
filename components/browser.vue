<template>
  <div class="bg-gray-300 rounded-sm px-px pb-px">
    <div class="text-gray-900 flex p-0.5 gap-0.5">
      <div class="rounded-full w-1 h-1 bg-gray-900"></div>
      <div class="rounded-full w-1 h-1 bg-gray-900"></div>
      <div class="rounded-full w-1 h-1 bg-gray-900"></div>
    </div>
    <div class="bg-gray-800 rounded-sm-b" :style="`height: ${height}`">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      height: {
        type: String,
        default: '3rem'
      }
    }
  }
</script>
