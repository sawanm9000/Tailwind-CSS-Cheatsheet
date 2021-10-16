<template>
  <Card>
    <div class="prefix">
      <Lnk href="https://tailwindcss.com/docs/box-decoration-break#class-reference">decoration-</Lnk>
    </div>
    <div class="content">
      <div class="grid grid-cols-2 gap-2">
        <div>
          <TwClass class="w-max" name="decoration-slice" tooltip="box-decoration-break: slice">slice</TwClass>
          <div class="mt-1"><span class="bg-clip-text decoration-slice font-sans text-4xl font-black bg-gradient-to-b from-emerald-400 to-red-500 text-transparent">Hello<br>World</span></div>
        </div>
        <div>
          <TwClass class="w-max" name="decoration-clone" tooltip="box-decoration-break: clone">clone</TwClass>
          <div class="mt-1"><span class="bg-clip-text decoration-clone font-sans text-4xl font-black bg-gradient-to-b from-emerald-400 to-red-500 text-transparent">Hello<br>World</span></div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
export default {}
</script>

