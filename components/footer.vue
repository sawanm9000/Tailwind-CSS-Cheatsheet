<template>
  <footer class="text-coolGray-400 text-center text-sm w-full md:flex md:justify-center" :class="inDrawer ? '' : 'p-5 bg-black bg-opacity-50'">
    <div class="container flex gap-x-3 justify-center md:justify-between" :class="inDrawer ? 'flex-col' : ''">
      <div class="order-2 text-left">
        <div class="inline">Created & maintained by <a href="https://sawanm9000.github.io" class="text-coolGray-100">Sawan M</a> - </div>
        <div id="donate" class="inline"><span class="w-max whitespace-nowrap"><a href="http://paypal.me/sawanm9000" class="text-red-600 font-medium">❤ Donate</a></span></div>
      </div>
      <div class="text-left" :class="inDrawer ? 'order-1' : 'order-3'">Tailwind CSS v2.2</div>
      <div class="order-4 text-right">Tailwind CSS Cheatsheet is not affiliated with Tailwind Labs</div>
    </div>
  </footer>
</template>

<script>
  export default {
    props: {
      inDrawer: {
        type: Boolean,
        default: true
      }
    }
  }
</script>
