<template>
  <Card>
    <div class="content">
      <div class="title">
        <Lnk href="https://tailwindcss.com/docs/screen-readers">Screen readers</Lnk>
      </div>
      <div class="grid grid-cols-2 gap-x-2 gap-y-1">
        <div>
          <TwClass name="sr-only" tooltip="" class="w-max">sr-only</TwClass>
          <div class="mt-1 text-sm font-sans text-coolGray-400">Hide element visually without hiding it from screen readers</div>
        </div>
        <div>
          <TwClass name="not-sr-only" tooltip="" class="w-max">not-sr-only</TwClass>
          <div class="mt-1 text-sm font-sans text-coolGray-400">Make element visible to sighted users as well as screen readers</div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
