<template>
	<div class="flex justify-center items-stretch min-h-screen">
    <div class="self-stretch flex items-center p-1.5 gap-1.5 3xl:container">
      <div class="flex-1 flex-grow flex flex-col gap-y-1.5">
        <FiltersFilter />
        <FiltersBlur />
        <FiltersBrightness />
        <FiltersContrast />
        <FiltersGrayscale />
        <FiltersHueRotate />
        <FiltersInvert />
        <FiltersSaturate />
        <FiltersSepia />
      </div>
      <div class="flex-1 flex-grow flex flex-col gap-y-1.5">
        <FiltersBackdropFilter />
        <FiltersBackdropBlur />
        <FiltersBackdropBrightness />
        <FiltersBackdropContrast />
        <FiltersBackdropGrayscale />
        <FiltersBackdropHueRotate />
        <FiltersBackdropInvert />
        <FiltersBackdropSaturate />
        <FiltersBackdropSepia />
      </div>
      <div class="flex-1 flex-grow flex flex-col gap-y-1.5">
        <FiltersDropShadow />
        <FiltersBackdropOpacity />
        <FiltersMixBlend />
        <FiltersBgBlend />
      </div>
    </div>
	</div>
</template>

<script>
	export default {
		head() {
			return {
				title: 'Tailwind CSS Cheatsheet - Filters',
			}
		},
	}
</script>

<style lang="scss" scoped>
.card-bg-img {
  background-image: url('/jordan-whitt-EerxztHCjM8-unsplash-640.jpg');
}
</style>
