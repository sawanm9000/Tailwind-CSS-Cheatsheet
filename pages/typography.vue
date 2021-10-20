<template>
	<div class="grid justify-center items-center min-h-screen">
    <div class="p-1.5 grid grid-cols-12 grid-flow-row-dense gap-1.5 3xl:container">
      <TypographyText        class="col-start-1 col-span-12 3xl:row-start-1 row-span-4 3xl:col-span-8" />
      <TypographyLeading     class="col-start-1 col-span-12 3xl:row-start-5 row-span-4 3xl:col-span-7" />
      <TypographyTextOpacity class="col-start-1 col-span-12 3xl:row-start-9 row-span-2 3xl:col-span-5" />
      <TypographyWhitespace  class="col-start-1 col-span-12 3xl:row-start-11 row-span-4 3xl:col-span-5" />
      <TypographyBreak       class="col-start-1 col-span-12 3xl:col-start-7 3xl:row-start-14 row-span-4 3xl:col-span-2" />
      <TypographyAlign       class="col-start-1 col-span-12 3xl:row-start-15 row-span-6 3xl:col-span-2" />

      <TypographyPlaceholder class="col-start-1 col-span-12 3xl:col-start-7 3xl:row-start-18 row-span-3 3xl:col-span-2" />
      <TypographyTracking    class="col-start-1 col-span-12 3xl:col-start-6 3xl:row-start-9 row-span-5 3xl:col-span-2" />
      <TypographyFontVariantNumeric class="col-start-1 col-span-12 3xl:col-start-9 3xl:row-start-13 row-span-7 3xl:col-span-2" />
      <TypographyList        class="col-start-1 col-span-12 3xl:col-start-8 3xl:row-start-5 row-span-9 3xl:col-span-1" />
      <TypographyFont        class="col-start-1 col-span-12 3xl:col-start-9 3xl:row-start-1 row-span-12 3xl:col-span-2" />
      <TypographyStyle       class="col-start-1 col-span-12 3xl:col-start-11 3xl:row-start-1 row-span-12 3xl:col-span-2" />
      <TypographyProse       class="col-start-1 col-span-12 3xl:col-start-11 3xl:row-start-13 row-span-8 3xl:col-span-2" />

      <TypographyLineClamp   class="col-start-1 col-span-12 3xl:col-start-3 3xl:row-start-15 row-span-4 3xl:col-span-4" />
    </div>
    <Footer class="3xl:hidden" :in-drawer="false" />
	</div>
</template>

<script>
	export default {
		head() {
			return {
				title: 'Tailwind CSS Cheatsheet - Typography',
			}
		},

	}
</script>
