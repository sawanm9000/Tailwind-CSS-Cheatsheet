<template>
	<Card>
		<div class="prefix whitespace-pre"><Lnk href="https://tailwindcss.com/docs/width">w-</Lnk>  <Lnk href="https://tailwindcss.com/docs/height">h-</Lnk></div>
		<div class="content">
      <div class="mb-1.5">
        <a href="#length" class="text-blue-300 cursor-pointer select-none w-max" @mouseover="$nuxt.$emit('highlightLength', true)" @mouseleave="$nuxt.$emit('highlightLength', false)" @click="$nuxt.$emit('blinkLength')">{length}</a>
      </div>
			<div class="widths mb-2 overflow-x-auto">
        <div class="w-120 sm:w-auto">
          <div class="flex">
            <TwClass name="w-full" tooltip="width: 100%" class="w-full">full</TwClass>
          </div>
          <div class="flex">
            <TwClass name="w-1/2" tooltip="width: 50%" class="w-1/2">1/2</TwClass>
            <div class="w-1/2"></div>
          </div>
          <div class="flex">
            <TwClass name="w-1/3" tooltip="width: 33.333333%" class="w-1/3">1/3</TwClass>
            <TwClass name="w-2/3" tooltip="width: 66.666667%" class="w-1/3">2/3</TwClass>
            <div class="w-1/3"></div>
          </div>
          <div class="flex">
            <TwClass name="w-1/4" tooltip="width: 25%" class="w-1/4">1/4</TwClass>
            <TwClass name="w-2/4" tooltip="width: 50%" class="w-1/4">2/4</TwClass>
            <TwClass name="w-3/4" tooltip="width: 75%" class="w-1/4">3/4</TwClass>
            <div class="w-1/4"></div>
          </div>
          <div class="flex">
            <TwClass name="w-1/5" tooltip="width: 20%" class="w-1/5">1/5</TwClass>
            <TwClass name="w-2/5" tooltip="width: 40%" class="w-1/5">2/5</TwClass>
            <TwClass name="w-3/5" tooltip="width: 60%" class="w-1/5">3/5</TwClass>
            <TwClass name="w-4/5" tooltip="width: 80%" class="w-1/5">4/5</TwClass>
            <div class="w-1/5"></div>
          </div>
          <div class="flex">
            <TwClass name="w-1/6" tooltip="width: 16.666667%" class="w-1/6">1/6</TwClass>
            <TwClass name="w-2/6" tooltip="width: 33.333333%" class="w-1/6">2/6</TwClass>
            <TwClass name="w-3/6" tooltip="width: 50%" class="w-1/6">3/6</TwClass>
            <TwClass name="w-4/6" tooltip="width: 66.666667%" class="w-1/6">4/6</TwClass>
            <TwClass name="w-5/6" tooltip="width: 83.333333%" class="w-1/6">5/6</TwClass>
            <div class="w-1/6"></div>
          </div>
          <div class="flex">
            <TwClass name="w-1/12" tooltip="width: 8.333333%" class="w-1/12">1/12</TwClass>
            <TwClass name="w-2/12" tooltip="width: 16.666667%" class="w-1/12">2/12</TwClass>
            <TwClass name="w-3/12" tooltip="width: 25%" class="w-1/12">3/12</TwClass>
            <TwClass name="w-4/12" tooltip="width: 33.333333%" class="w-1/12">4/12</TwClass>
            <TwClass name="w-5/12" tooltip="width: 41.666667%" class="w-1/12">5/12</TwClass>
            <TwClass name="w-6/12" tooltip="width: 50%" class="w-1/12">6/12</TwClass>
            <TwClass name="w-7/12" tooltip="width: 58.333333%" class="w-1/12">7/12</TwClass>
            <TwClass name="w-8/12" tooltip="width: 66.666667%" class="w-1/12">8/12</TwClass>
            <TwClass name="w-9/12" tooltip="width: 75%" class="w-1/12">9/12</TwClass>
            <TwClass name="w-10/12" tooltip="width: 83.333333%" class="w-1/12">10/12</TwClass>
            <TwClass name="w-11/12" tooltip="width: 91.666667%" class="w-1/12">11/12</TwClass>
            <div class="w-1/12"></div>
          </div>
        </div>
			</div>
			<div class="grid grid-cols-4 gap-x-2">
				<div class="space-y-0.5">
					<TwClass name="w-screen" tooltip="width: 100vw" class="w-max">screen</TwClass>
					<Browser>
							<div class="bg-blue-600 w-full flex justify-between items-center">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
								</svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 right-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
							</div>
						</Browser>
				</div>
				<div class="space-y-0.5">
					<TwClass name="w-min" tooltip="width: min-content" class="w-max">min</TwClass>
					<div class="w-min p-1 bg-blue-600">Ab cd e</div>
				</div>
				<div class="space-y-0.5">
					<TwClass name="w-max" tooltip="width: max-content" class="w-max">max</TwClass>
					<div class="w-max p-1 bg-blue-600">Ab cd e</div>
				</div>
				<div class="space-y-0.5">
					<TwClass name="w-auto" tooltip="width: auto" class="w-max">auto</TwClass>
					<div class="w-auto p-1 bg-blue-600">Ab cd e</div>
				</div>
			</div>
		</div>
	</Card>
</template>

<script>
	export default {

	}
</script>

<style lang="scss" scoped>
.widths {
  div {
    div {
      @apply text-center mb-0.5 space-x-0.5;
      div {
        @apply bg-coolGray-600;
      }
    }
  }
}
</style>
