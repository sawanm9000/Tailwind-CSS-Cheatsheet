<template>
  <Card>
    <div class="prefix"><Lnk href="https://tailwindcss.com/docs/list-style-type">list-</Lnk></div>
    <div class="content grid grid-cols-1 gap-y-3">
      <div>
        <TwClass class="mb-1 w-max" name="list-none" tooltip="list-style-type: none">none</TwClass>
        <ul class="text-xs font-sans list-none">
          <li>Lorem ipsum dolor sit</li>
          <li>Assumenda, quia</li>
          <li>Quidem, ipsam illum quis</li>
        </ul>
      </div>
      <div>
        <TwClass class="mb-1 w-max" name="list-disc" tooltip="list-style-type: disc">disc</TwClass>
        <ul class="text-xs font-sans list-inside list-disc">
          <li>Lorem ipsum dolor sit</li>
          <li>Assumenda, quia</li>
          <li>Quidem, ipsam illum</li>
        </ul>
      </div>
      <div>
        <TwClass class="mb-1 w-max" name="list-decimal" tooltip="list-style-type: decimal">decimal</TwClass>
        <ol class="text-xs font-sans list-inside list-decimal">
          <li>Lorem ipsum dolor sit</li>
          <li>Assumenda, quia</li>
          <li>Quidem, ipsam illum</li>
        </ol>
      </div>
      <div>
        <TwClass class="mb-1 w-max" name="list-inside" tooltip="list-style-position: inside">inside</TwClass>
        <ul class="text-xs font-sans list-disc list-inside">
          <li>Lorem ipsum dolor sit</li>
          <li>Assumenda, quia</li>
          <li>Quidem, ipsam illum</li>
        </ul>
      </div>
      <div>
        <TwClass class="mb-1 w-max" name="list-outside" tooltip="list-style-position: outside">outside</TwClass>
        <ul class="text-xs font-sans list-disc list-outside">
          <li>Lorem ipsum dolor sit</li>
          <li>Assumenda, quia</li>
          <li>Quidem, ipsam illum quis</li>
        </ul>
      </div>
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
