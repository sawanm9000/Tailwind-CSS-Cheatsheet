<template>
	<div class="flex flex-col justify-center items-stretch min-h-screen">
    <AppBar class="block md:hidden" />
    <div class="self-stretch flex flex-col 3xl:flex-row items-center p-1.5 gap-1.5 3xl:container">
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
    <Footer class="3xl:hidden" :in-drawer="false" />
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
  background-image: url('/Tailwind-CSS-Cheatsheet/jordan-whitt-EerxztHCjM8-unsplash-640.jpg');
}
</style>
