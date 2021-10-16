<template>
  <div class="bg-coolGray-300 rounded-sm px-px pb-px">
    <div class="text-coolGray-900 flex p-0.5 gap-0.5">
      <div class="rounded-full w-1 h-1 bg-coolGray-900"></div>
      <div class="rounded-full w-1 h-1 bg-coolGray-900"></div>
      <div class="rounded-full w-1 h-1 bg-coolGray-900"></div>
    </div>
    <div class="bg-coolGray-800 rounded-sm-b" :style="`height: ${height}`">
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
