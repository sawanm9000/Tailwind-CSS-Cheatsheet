<template>
	<div class="flex flex-col justify-center items-center min-h-screen">
	<!-- <div class="p-1.5 grid grid-cols-12 grid-rows-20 grid-flow-row-dense gap-1.5 min-h-screen"> -->
    <AppBar class="block md:hidden" />
    <div class="p-1.5 grid grid-cols-1 3xl:grid-cols-6 grid-flow-row-dense gap-1.5 container">
      <InteractivityHover class="col-start-1 3xl:col-start-1 row-span-9" />
      <InteractivityFocus class="col-start-1 3xl:col-start-2 row-span-13" />
      <InteractivityFocusVisible class="col-start-1 3xl:col-start-2 row-span-2" />
      <InteractivityDisabled class="col-start-1 3xl:col-start-2 row-span-2" />
      <InteractivityVisited class="col-start-1 3xl:col-start-2 row-span-2" />
      <InteractivityGroupHover class="col-start-1 3xl:col-start-1 row-span-7" />
      <InteractivityGroupFocus class="col-start-1 3xl:col-start-1 row-span-2" />
      <InteractivityActive class="col-start-1 3xl:col-start-1 row-span-2" />
      <InteractivityFocusWithin class="col-start-1 3xl:col-start-3 row-span-10" />
      <InteractivityFirst class="col-start-1 3xl:col-start-3 row-span-2" />
      <InteractivityLast class="col-start-1 3xl:col-start-3 row-span-2" />
      <InteractivityEven class="col-start-1 3xl:col-start-3 row-span-2" />
      <InteractivityOdd class="col-start-1 3xl:col-start-3 row-span-2" />
      <InteractivityChecked class="col-start-1 3xl:col-start-3 row-span-2" />
      <InteractivityDirectives class="col-start-1 3xl:col-start-4 row-span-10" />
      <InteractivityFunctions class="col-start-1 3xl:col-start-4 row-span-6" />
      <InteractivityDark class="col-start-1 3xl:col-start-4 row-span-2" />
      <InteractivityPointer class="col-start-1 3xl:col-start-5 row-span-2" />
      <InteractivityAppearance class="col-start-1 3xl:col-start-5 row-span-2" />
      <InteractivityOutline class="col-start-1 3xl:col-start-5 row-span-2" />
      <InteractivitySelect class="col-start-1 3xl:col-start-5 row-span-3" />
      <InteractivityResize class="col-start-1 3xl:col-start-5 row-span-5" />
      <InteractivityCursor class="col-start-1 3xl:col-start-5 row-span-6" />
      <InteractivityForms class="col-start-1 3xl:col-start-6 row-span-13" />
      <InteractivityMotionSafe class="col-start-1 3xl:col-start-6 row-span-3" />
      <InteractivityMotionReduce class="col-start-1 3xl:col-start-6 row-span-2" />
      <InteractivitySR class="col-start-1 3xl:col-start-6 row-span-1" />
    </div>
    <Footer class="3xl:hidden w-full" :in-drawer="false" />
	</div>
</template>

<script>
	export default {
		head() {
			return {
				title: 'Tailwind CSS Cheatsheet - Interactivity',
			}
		},

	}
</script>
