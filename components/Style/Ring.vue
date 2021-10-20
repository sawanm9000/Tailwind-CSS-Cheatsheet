<template>
  <Card>
    <div class="prefix">
      <Lnk href="https://tailwindcss.com/docs/ring-width">ring</Lnk>
    </div>
    <div class="content">
      <div class="grid grid-cols-6 gap-1 mb-3">
        <div>
          <TwClass name="ring-0" tooltip="box-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color)" class="w-max">-0</TwClass>
          <div class="bg-lightBlue-600 mt-1.5 w-8 h-8 rounded-sm ring-0"></div>
        </div>
        <div>
          <TwClass name="ring-1" tooltip="box-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)" class="w-max">-1</TwClass>
          <div class="bg-lightBlue-600 mt-1.5 w-8 h-8 rounded-sm ring-1"></div>
        </div>
        <div>
          <TwClass name="ring-2" tooltip="box-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)" class="w-max">-2</TwClass>
          <div class="bg-lightBlue-600 mt-1.5 w-8 h-8 rounded-sm ring-2"></div>
        </div>
        <div>
          <div class="invisible">3</div>
          <div class="bg-lightBlue-600 mt-1.5 w-8 h-8 rounded-sm ring"></div>
        </div>
        <div>
          <TwClass name="ring-4" tooltip="box-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color)" class="w-max">-4</TwClass>
          <div class="bg-lightBlue-600 mt-1.5 w-8 h-8 rounded-sm ring-4"></div>
        </div>
        <div>
          <TwClass name="ring-8" tooltip="box-shadow: var(--tw-ring-inset) 0 0 0 calc(8px + var(--tw-ring-offset-width)) var(--tw-ring-color)" class="w-max">-8</TwClass>
          <div class="bg-lightBlue-600 mt-1.5 w-8 h-8 rounded-sm ring-8"></div>
        </div>
        <div>
          <TwClass name="ring-inset" tooltip="--tw-ring-inset: inset" class="w-max">-inset</TwClass>
          <div class="bg-lightBlue-600 mt-1.5 w-8 h-8 rounded-sm ring-4 ring-inset"></div>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-x-2">
        <div>
          <div class="text-red-600 cursor-pointer" @mouseover="$nuxt.$emit('highlightColor', true)" @mouseleave="$nuxt.$emit('highlightColor', false)">-{color}</div>
          <div class="bg-lightBlue-600 rounded-sm mt-1.5 w-8 h-8 ring ring-red-600"></div>
        </div>
        <div>
          <TwClass name="ring-transparent" tooltip="--tw-ring-color: transparent" class="w-max">-transparent</TwClass>
          <div class="bg-lightBlue-600 rounded-sm mt-1.5 w-8 h-8 ring ring-transparent"></div>
        </div>
        <div>
          <TwClass name="ring-current" tooltip="--tw-ring-color: currentColor" class="w-max">-current</TwClass>
          <div class="bg-lightBlue-600 rounded-sm mt-1.5 w-8 h-8 flex justify-center items-center font-sans text-emerald-400 ring ring-current">Hi</div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
export default {}
</script>

