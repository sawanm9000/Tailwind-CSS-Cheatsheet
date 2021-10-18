<template>
  <Card>
    <div class="prefix"><Lnk href="https://tailwindcss.com/docs/placeholder-color">placeholder-</Lnk></div>
    <div class="content grid grid-cols-3 gap-2">
      <div>
        <a href="/style" class="text-red-600">{color}</a>
        <input class="font-sans text-sm pl-1.5 py-0.5 mt-1 bg-coolGray-700 border border-coolGray-400 rounded w-full placeholder-red-600" placeholder="Type something here" />
      </div>
      <div>
        <TwClass class="w-max" name="placeholder-transparent" tooltip="color: transparent">transparent</TwClass>
        <input class="font-sans text-sm pl-1.5 py-0.5 mt-1 bg-coolGray-700 border border-coolGray-400 rounded w-full placeholder-transparent" placeholder="Type something here" />
      </div>
      <div>
        <TwClass class="w-max" name="placeholder-current" tooltip="color: currentColor">current</TwClass>
        <input class="font-sans text-sm pl-1.5 py-0.5 mt-1 bg-coolGray-700 border border-coolGray-400 rounded w-full text-emerald-400 placeholder-current" placeholder="Type something here" />
      </div>
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
