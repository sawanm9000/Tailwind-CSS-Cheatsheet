<template>
  <div class="grid grid-cols-2 grid-rows-4 sm:grid-cols-3 sm:grid-rows-3 md:grid-cols-4 md:grid-rows-2 xl:grid-cols-7 xl:grid-rows-1 gap-y-5 gap-x-5 sm:gap-y-5 sm:gap-5 justify-items-stretch md:justify-items-center sm:h-auto p-5 sm:p-0">
    <NuxtLink to="/layout" class="nav-button">
      <div>1. Layout</div>
      <div>Box size, positioning, margin, overflow, and over scroll</div>
    </NuxtLink>
    <NuxtLink to="/layout2" class="nav-button">
      <div>2. Layout 2</div>
      <div>Flexbox and CSS Grid</div>
    </NuxtLink>
    <NuxtLink to="/typography" class="nav-button">
        <div>3. Typography</div>
        <div>Text, font, leading, whitespace</div>
    </NuxtLink>
    <NuxtLink to="/style" class="nav-button">
      <div>4. Style</div>
      <div>Color, background color, border, object, shadow</div>
    </NuxtLink>
    <NuxtLink to="/filters" class="nav-button">
      <div>5. Filters</div>
      <div>Filters and color blend</div>
    </NuxtLink>
    <NuxtLink to="/transitions" class="nav-button">
      <div>6. Transition</div>
      <div>Transition, animation and transform</div>
    </NuxtLink>
    <NuxtLink to="/interactivity" class="nav-button">
      <div>7. Interactivity</div>
      <div>Forms, pseudo classes and accessibility</div>
    </NuxtLink>
  </div>
</template>

<script>
export default {

}

</script>

<style lang="scss" scoped>
.nav-button {
	@apply sm:w-40 h-40 px-3 py-1.5 bg-gray-800 rounded-lg border-2 border-gray-700 hover:bg-gray-700 hover:border-gray-600;

  div:first-child {
    @apply text-lg font-semibold mb-1.5 whitespace-nowrap;
  }

  div:nth-child(2) {
    @apply text-gray-300;
  }
}
</style>
