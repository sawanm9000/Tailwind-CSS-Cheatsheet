<template>
  <Card>
    <div class="content">
      <div class="grid grid-cols-2 gap-2">
        <div>
          <TwClass name="filter" tooltip="filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)">filter</TwClass>
          <div class="mt-1 font-sans text-sm text-gray-400">Enable filters on an element</div>
        </div>
        <div>
          <TwClass name="filter-none" tooltip="filter: none">filter-none</TwClass>
          <div class="mt-1 font-sans text-sm text-gray-400">Disable filters on an element</div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
