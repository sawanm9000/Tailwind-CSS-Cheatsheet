<template>
	<div class="grid justify-center items-center min-h-screen">
	<!-- <div class="p-1.5 grid grid-cols-12 grid-rows-20 grid-flow-row-dense gap-1.5 min-h-screen"> -->
    <div class="p-1.5 grid grid-cols-12 grid-flow-row-dense gap-1.5 3xl:container">
      <Layout2Flex         class="col-start-1 col-span-12 3xl:col-start-1  3xl:col-span-2 row-span-14 z-50" />
      <Layout2Order        class="col-start-1 col-span-12 3xl:col-start-1  3xl:col-span-2 row-span-2" />
      <Layout2Gap          class="col-start-1 col-span-12 3xl:col-start-1  3xl:col-span-2 row-span-3" />
      <Layout2GridRows     class="col-start-1 col-span-12 3xl:col-start-3  3xl:col-span-2 row-span-3" />
      <Layout2GridCols     class="col-start-1 col-span-12 3xl:col-start-5  3xl:col-span-2 row-span-3" />
      <Layout2GridFlow     class="col-start-1 col-span-12 3xl:col-start-11 3xl:col-span-2 row-span-4" />
      <Layout2AutoRows     class="col-start-1 col-span-12 3xl:col-start-7  3xl:col-span-2 row-span-4" />
      <Layout2AutoCols     class="col-start-1 col-span-12 3xl:col-start-9  3xl:col-span-2 row-span-4" />
      <Layout2Row          class="col-start-1 col-span-12 3xl:col-start-3  3xl:col-span-2 row-span-4" />
      <Layout2RowSpan      class="col-start-1 col-span-12 3xl:col-start-3  3xl:col-span-2 row-span-4" />
      <Layout2RowStart     class="col-start-1 col-span-12 3xl:col-start-3  3xl:col-span-2 row-span-4" />
      <Layout2RowEnd       class="col-start-1 col-span-12 3xl:col-start-3  3xl:col-span-2 row-span-4" />
      <Layout2Col          class="col-start-1 col-span-12 3xl:col-start-5  3xl:col-span-1 row-span-8" />
      <Layout2ColSpan      class="col-start-1 col-span-12 3xl:col-start-6  3xl:col-span-1 row-span-8" />
      <Layout2ColStart     class="col-start-1 col-span-12 3xl:col-start-5  3xl:col-span-1 row-span-8" />
      <Layout2ColEnd       class="col-start-1 col-span-12 3xl:col-start-6  3xl:col-span-1 row-span-8" />
      <Layout2Justify      class="col-start-1 col-span-12 3xl:col-start-7  3xl:col-span-2 row-span-5" />
      <Layout2JustifyItems class="col-start-1 col-span-12 3xl:col-start-7  3xl:col-span-2 row-span-5" />
      <Layout2JustifySelf  class="col-start-1 col-span-12 3xl:col-start-7  3xl:col-span-2 row-span-5" />
      <Layout2Content      class="col-start-1 col-span-12 3xl:col-start-9  3xl:col-span-2 row-span-5" />
      <Layout2Items        class="col-start-1 col-span-12 3xl:col-start-9  3xl:col-span-2 row-span-5" />
      <Layout2Self         class="col-start-1 col-span-12 3xl:col-start-9  3xl:col-span-2 row-span-5" />
      <Layout2PlaceContent class="col-start-1 col-span-12 3xl:col-start-11 3xl:col-span-2 row-span-5" />
      <Layout2PlaceItems   class="col-start-1 col-span-12 3xl:col-start-11 3xl:col-span-2 row-span-5" />
      <Layout2PlaceSelf    class="col-start-1 col-span-12 3xl:col-start-11 3xl:col-span-2 row-span-5" />
    </div>
	</div>
</template>

<script>
	export default {
		head() {
			return {
				title: 'Tailwind CSS Cheatsheet - Layout 2',
			}
		},
	}
</script>
