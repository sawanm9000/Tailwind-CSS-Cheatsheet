<template>
  <div class="flex flex-col w-max max-w-full divide-y divide-white divide-opacity-30">
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
	@apply flex-1 h-24 px-3 py-2;

  div:first-child {
    @apply text-lg text-coolGray-200 font-semibold mb-1.5 whitespace-nowrap;
  }

  div:nth-child(2) {
    @apply text-coolGray-400;
  }
}

.nav-button:hover {
  @apply backdrop-filter backdrop-brightness-200;

  div:first-child {
    @apply text-white;
  }

  div:nth-child(2) {
    @apply text-coolGray-300;
  }
}
</style>
