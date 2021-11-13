<template>
  <Card>
    <div class="prefix">
      <Lnk href="https://tailwindcss.com/docs/outline">outline-</Lnk>
    </div>
    <div class="content">
      <div class="grid grid-cols-3 gap-2">
        <div>
          <TwClass name="outline-none" tooltip="outline: 2px solid transparent" class="w-max">none</TwClass>
          <div class="relative mt-1">
            <input type="text" placeholder="Text" class="w-full px-1 h-7 font-sans text-base bg-coolGray-900 outline-none" />
          </div>
        </div>
        <div>
          <TwClass name="outline-white" tooltip="outline: 2px dotted white" class="w-max">white</TwClass>
          <div class="relative mt-1">
            <input type="text" placeholder="Text" class="w-full px-1 h-7 font-sans text-base bg-coolGray-900 outline-white" />
          </div>
        </div>
        <div>
          <TwClass name="outline-black" tooltip="outline: 2px dotted black" class="w-max">black</TwClass>
          <div class="relative mt-1">
            <input type="text" placeholder="Text" class="w-full px-1 h-7 font-sans text-base bg-coolGray-900 outline-black" />
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
