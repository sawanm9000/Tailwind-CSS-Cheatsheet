<template>
	<div class="grid justify-center items-center min-h-screen">
    <div class="p-1.5 grid grid-cols-6 grid-rows-20 grid-flow-row-dense gap-1.5 3xl:container min-h-screen">
      <StyleRounded    class="col-start-1 col-span-6 row-span-13 3xl:col-start-1 3xl:col-span-1" />
      <StyleBorder     class="col-start-1 col-span-6 row-span-12 3xl:col-start-2 3xl:col-span-1" />
      <StyleRing       class="col-start-1 col-span-6 row-span-5  3xl:col-start-1 3xl:col-span-1" />
      <StyleRingOffset class="col-start-1 col-span-6 row-span-4  3xl:col-start-2 3xl:col-span-1" />
      <StyleBg         class="col-start-1 col-span-6 row-span-20 3xl:col-start-3 3xl:col-span-1" />
      <StyleFrom       class="col-start-1 col-span-6 row-span-3  3xl:col-start-2 3xl:col-span-1" />
      <StyleBgClip     class="col-start-1 col-span-6 row-span-3  3xl:col-start-4 3xl:col-span-1" />
      <StyleBgOrigin   class="col-start-1 col-span-6 row-span-3  3xl:col-start-4 3xl:col-span-1" />
      <StyleDecoration class="col-start-1 col-span-6 row-span-3  3xl:col-start-4 3xl:col-span-1" />
      <StyleDivide     class="col-start-1 col-span-6 row-span-9  3xl:col-start-5 3xl:col-span-1" />
      <StyleColor      class="col-start-1 col-span-6 row-span-6  3xl:col-start-4 3xl:col-span-2" />
      <StyleOpacity    class="col-start-1 col-span-6 row-span-3  3xl:col-start-4 3xl:col-span-2" />
      <StyleStroke     class="col-start-1 col-span-6 row-span-2  3xl:col-start-4 3xl:col-span-1" />
      <StyleSvgFill    class="col-start-1 col-span-6 row-span-2  3xl:col-start-5 3xl:col-span-1" />
      <StyleObject     class="col-start-1 col-span-6 row-span-10  3xl:col-start-6 3xl:col-span-1" />
      <StyleShadow     class="col-start-1 col-span-6 row-span-4  3xl:col-start-6 3xl:col-span-1" />
      <StyleTable      class="col-start-1 col-span-6 row-span-6  3xl:col-start-6 3xl:col-span-1" />
    </div>
	</div>
</template>

<script>
	export default {
		head() {
			return {
				title: 'Tailwind CSS Cheatsheet - Style',
			}
		},
	}
</script>
