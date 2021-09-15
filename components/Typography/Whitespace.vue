<template>
  <Card>
    <div class="prefix"><Lnk href="https://tailwindcss.com/docs/whitespace">whitespace-</Lnk></div>
    <div class="content flex gap-x-1.5">
      <div>
        <TwClass name="whitespace-normal" tooltip="white-space: normal" class="mb-1 w-max">normal</TwClass>
        <div class="overflow-hidden h-28 w-36 bg-gray-700 px-0.5 font-sans text-xs whitespace-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque asperiores ex porro dignissimos dolores eaque natus, consequuntur nulla saepe aspernatur in ipsa. Adipisci illo sapiente temporibus minima enim rem aspernatur.</div>
      </div>
      <div>
        <TwClass name="whitespace-nowrap" tooltip="white-space: nowrap" class="mb-1 w-max">nowrap</TwClass>
        <div class="overflow-hidden h-28 w-36 bg-gray-700 px-0.5 font-sans text-xs whitespace-nowrap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque asperiores ex porro dignissimos dolores eaque natus, consequuntur nulla saepe aspernatur in ipsa. Adipisci illo sapiente temporibus minima enim rem aspernatur.</div>
      </div>
      <div>
        <TwClass name="whitespace-pre" tooltip="white-space: pre" class="mb-1 w-max">pre</TwClass>
        <div class="overflow-hidden h-28 w-36 bg-gray-700 px-0.5 font-sans text-xs whitespace-pre">Lorem ipsum dolor sit      amet consectetur

adipisicing            elit.

Atque asperiores    ex porro dignissimos dolores eaque natus, consequuntur nulla saepe aspernatur in ipsa.

Adipisci illo sapiente temporibus minima enim rem aspernatur.</div>
      </div>
      <div>
        <TwClass name="whitespace-pre-line" tooltip="white-space: pre-line" class="mb-1 w-max">pre-line</TwClass>
        <div class="overflow-hidden h-28 w-36 bg-gray-700 px-0.5 font-sans text-xs whitespace-pre-line">Lorem ipsum dolor sit      amet consectetur

adipisicing            elit.

Atque asperiores    ex porro dignissimos dolores eaque natus, consequuntur nulla saepe aspernatur in ipsa.

Adipisci illo sapiente temporibus minima enim rem aspernatur.</div>
      </div>
      <div>
        <TwClass name="whitespace-pre-wrap" tooltip="white-space: pre-wrap" class="mb-1 w-max">pre-wrap</TwClass>
        <div class="overflow-hidden h-28 w-36 bg-gray-700 px-0.5 font-sans text-xs whitespace-pre-wrap">Lorem ipsum dolor sit      amet consectetur

adipisicing            elit.

Atque asperiores    ex porro dignissimos dolores eaque natus, consequuntur nulla saepe aspernatur in ipsa.

Adipisci illo sapiente temporibus minima enim rem aspernatur.</div>
      </div>
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
