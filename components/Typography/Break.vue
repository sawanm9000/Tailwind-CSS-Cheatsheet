<template>
  <Card>
    <div class="prefix"><Lnk href="https://tailwindcss.com/docs/word-break">break-</Lnk></div>
    <div class="content flex gap-x-1">
      <div class="flex-1">
        <TwClass name="break-normal" tooltip="overflow-wrap: normal" class="mb-1 w-max">normal</TwClass>
        <div class="h-28 w-24 px-0.5 overflow-hidden font-sans text-xs bg-gray-700 break-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <span class="text-red-300">Blanditiisitaquequodpraesentiumexplicaboincidunt?</span> Dolores beatae nam at sed dolorum ratione dolorem nisi velit cum. </div>
      </div>
      <div class="flex-1">
        <TwClass name="break-words" tooltip="overflow-wrap: break-word" class="mb-1 w-max">words</TwClass>
        <div class="h-28 w-24 px-0.5 overflow-hidden font-sans text-xs bg-gray-700 break-words">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <span class="text-red-300">Blanditiisitaquequodpraesentiumexplicaboincidunt?</span> Dolores beatae nam at sed dolorum ratione dolorem nisi velit cum. </div>
      </div>
      <div class="flex-1">
        <TwClass name="break-all" tooltip="word-break: break-all" class="mb-1 w-max">all</TwClass>
        <div class="h-28 w-24 px-0.5 overflow-hidden font-sans text-xs bg-gray-700 break-all">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores beatae nam at sed dolorum ratione dolorem nisi velit cum. </div>
      </div>
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
