<template>
	<div class="flex justify-items-stretch items-center min-h-screen">
    <div class="p-1.5 grid grid-cols-2 3xl:grid-cols-10 grid-rows-18 grid-flow-row-dense gap-1.5 3xl:container w-full">
      <TransformTransition class="col-start-1 3xl:col-start-1 col-span-2 row-span-5" />
      <TransformDuration class="col-start-1 3xl:col-start-1 col-span-2 row-span-5" />
      <TransformEase class="col-start-1 3xl:col-start-1 col-span-2 row-span-3" />
      <TransformDelay class="col-start-1 3xl:col-start-1 col-span-2 row-span-5" />
      <TransformAnimate class="col-start-1 3xl:col-start-3 col-span-2 row-span-5" />
      <TransformCardTransform class="col-start-1 3xl:col-start-3 col-span-2 row-span-4" />
      <TransformOrigin class="col-start-1 3xl:col-start-3 col-span-2 row-span-7" />
      <TransformScale class="col-start-1 3xl:col-start-5 3xl:col-span-4 row-span-3 col-span-2" />
      <TransformScaleY class="col-start-1 3xl:col-start-5 3xl:col-span-4 row-span-3 col-span-2" />
      <TransformSkewX class="col-start-1 3xl:col-start-5 col-span-2 row-span-3" />
      <TransformSkewXN class="col-start-1 3xl:col-start-7 col-span-2 row-span-3" />
      <TransformRotate class="col-start-1 3xl:col-start-5 3xl:col-span-4 row-span-3 col-span-2" />
      <TransformTranslate class="col-start-1 3xl:col-start-5 3xl:col-span-4 row-span-4 col-span-2" />
      <TransformScaleX class="col-start-2 3xl:col-start-9 col-span-1 row-span-15" />
      <TransformSkewY class="col-start-1 3xl:col-start-10 col-span-1 row-span-9" />
      <TransformSkewYN class="col-start-1 3xl:col-start-10 col-span-1 row-span-9" />
    </div>
	</div>
</template>

<script>
	export default {
		head() {
			return {
				title: 'Tailwind CSS Cheatsheet - Transform',
			}
		},

	}
</script>
