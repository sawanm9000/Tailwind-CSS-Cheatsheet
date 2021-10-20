<template>
	<div class="flex flex-col justify-center min-h-screen">
    <AppBar class="block md:hidden" />

		<div class="w-screen fixed top-0 h-16 max-h-16 bg-blue-500 overflow-y-hidden overflow-x-auto 3xl:overflow-x-hidden text-sm hidden md:block 3xl:hidden whitespace-pre z-50 isolate">
			<div class="flex h-full pl-3 items-center">All sizes (default)</div>
			<div class="sm-breakpoint absolute bottom-0 bg-blue-600 h-14 pl-3 rounded-tl-xl"><div class="flex h-full items-center"><span class="font-mono">sm: </span>&#8805; 640px</div></div>
			<div class="md-breakpoint absolute bottom-0 bg-blue-700 h-12 pl-3 rounded-tl-xl"><div class="flex h-full items-center"><span class="font-mono">md: </span>&#8805; 768px</div></div>
			<div class="lg-breakpoint absolute bottom-0 bg-blue-800 h-10 pl-3 rounded-tl-xl"><div class="flex h-full items-center"><span class="font-mono">lg: </span>&#8805; 1024px</div></div>
			<div class="xl-breakpoint absolute bottom-0 bg-blue-900 h-8 pl-3 rounded-tl-xl"><div class="flex h-full items-center"><span class="font-mono">xl: </span>&#8805; 1280px</div></div>
			<div class="xl2-breakpoint absolute bottom-0 h-6 pl-3 rounded-tl-xl" style="background-color: rgb(30, 49, 104)"><div class="flex h-full items-center"><span class="font-mono">2xl: </span>&#8805; 1536px</div></div>
    </div>

		<div class="w-screen relative top-0 h-16 max-h-16 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 text-sm hidden 3xl:flex justify-center items-end">
      <div class="absolute h-full left-2 flex items-center w-max">All sizes (default)</div>
      <div class="w-screen max-w-screen-2xl h-14 rounded-t-xl bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 relative flex justify-center items-end border-l border-r shadow-md border-blue-700">
        <TwClass name="2xl:" class="absolute h-full left-2 flex flex-col justify-center leading-tight"><span class="font-mono">2xl:</span> ≥ 1536px</TwClass>
        <div class="w-screen max-w-screen-xl h-12 rounded-t-xl bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 border-l border-r shadow-md border-blue-800 relative flex justify-center items-end">
          <TwClass name="xl:" class="absolute h-full left-2 flex flex-col justify-center leading-tight"><span class="font-mono">xl:</span> ≥ 1280px</TwClass>
          <div class="w-screen max-w-screen-lg h-10 rounded-t-xl bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800 border-l border-r shadow-md border-blue-900 relative flex justify-center items-end">
            <TwClass name="lg:" class="absolute h-full left-2 flex flex-col justify-center leading-tight"><span class="font-mono">lg:</span> ≥ 1024px</TwClass>
            <div class="w-screen max-w-screen-md h-8 rounded-t-xl bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 border-l border-r shadow-md border-coolGray-800 relative flex justify-center items-end">
              <TwClass name="md:" class="absolute h-full left-2 flex justify-center text-xs w-14 flex-col leading-3"><span class="font-mono">md:</span> <span>≥ 768px</span></TwClass>
              <div class="w-screen max-w-screen-sm h-6 rounded-t-xl bg-gradient-to-r from-coolGray-800 via-blue-900 to-coolGray-800 border-l border-r shadow-md border-coolGray-900 relative flex items-center pl-2">
                <TwClass name="sm:" tooltip="" class="absolute h-full left-2 flex items-center w-max"><span class="font-mono">sm:</span> ≥ 640px</TwClass>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex-grow flex justify-center items-center md:pt-16 3xl:pt-0">
      <div class="grid justify-center items-center z-10 isolate">
        <div class="p-1.5 grid grid-cols-12 grid-flow-row-dense gap-1.5 3xl:container">
          <LayoutLength id="length" class="col-span-12 lg:col-span-6 3xl:col-span-3     col-start-1      row-start-1  row-span-4 ring-red-500" :class="lengthRing ? 'ring-2' : ''" />
          <LayoutWh             class="col-start-1 row-start-5 col-span-12 lg:col-span-6 3xl:col-span-3           3xl:row-start-5  row-span-6" />
          <LayoutMinW           class="col-start-1 row-start-15 col-span-12 lg:col-span-6 3xl:col-span-3           3xl:row-start-11 row-span-3" />
          <LayoutMaxW           class="col-start-1 row-start-11 col-span-12 lg:col-span-6 3xl:col-span-9  lg:col-start-7      lg:row-start-1 3xl:col-start-4 row-span-4"/>
          <LayoutMinH           class="col-start-1 row-start-18 col-span-6  lg:col-span-3 3xl:col-span-1       3xl:row-start-14 row-span-3" />
          <LayoutMaxH           class="col-start-7 row-start-18 col-span-6  lg:col-span-3 2xl:col-span-1 3xl:col-start-2  3xl:row-start-14 row-span-3" />
          <LayoutContainer      class="col-start-1 col-span-6  lg:col-span-3 3xl:col-span-1 3xl:col-start-3  3xl:row-start-14 row-span-3 3xl:row-span-2" />
          <LayoutBreakpoints class="md:hidden col-start-1 col-span-12 row-span-4" />
          <LayoutMmx            class="col-start-1 col-span-12 lg:col-span-6 3xl:col-span-2 3xl:col-start-1  3xl:row-start-17 row-span-2" />
          <LayoutBox            class="col-start-7 col-span-6  lg:col-span-3 3xl:col-span-1 3xl:col-start-3  3xl:row-start-16 row-span-3" />
          <LayoutPosition       class="col-start-1 col-span-12 lg:col-span-6 3xl:col-span-2 3xl:col-start-4 3xl:row-start-5  row-span-5" />
          <LayoutDisplay        class="col-start-1 col-span-12 lg:col-span-6 3xl:col-span-2 3xl:col-start-4 3xl:row-start-10 row-span-9" />

          <LayoutTop            class="col-start-1 col-span-12 lg:col-span-6 3xl:col-span-2 3xl:col-start-6  3xl:row-start-5  row-span-9" />
          <LayoutSpace          class="col-start-1 col-span-12 lg:col-span-6 3xl:col-span-2 3xl:col-start-6  3xl:row-start-14 row-span-5" />
          <LayoutOverflow       class="col-start-1 col-span-12 lg:col-span-6 3xl:col-span-2 3xl:col-start-8  3xl:row-start-5  row-span-10" />
          <LayoutOverscroll     class="col-start-1 col-span-12 lg:col-span-6 3xl:col-span-2 3xl:col-start-10  3xl:row-start-5  row-span-8" />
          <LayoutClear          class="col-start-1 col-span-12 lg:col-span-6 3xl:col-span-2 3xl:col-start-10  3xl:row-start-13 row-span-6" />
          <LayoutFloat          class="col-start-1 col-span-12 lg:col-span-6 3xl:col-span-2 3xl:col-start-8  3xl:row-start-15 row-span-4" />
          <LayoutZIndex         class="col-start-1 col-span-6  lg:col-span-3 3xl:col-span-1 3xl:col-start-12 3xl:row-start-5  row-span-6" />
          <LayoutIsolation      class="col-start-7 col-span-6  lg:col-span-3 3xl:col-span-1 3xl:col-start-12 3xl:row-start-11 row-span-5" />
        </div>
      </div>
    </div>

    <Footer class="3xl:hidden" :in-drawer="false" />
	</div>
</template>

<script>
	export default {
    data() {
      return {
        lengthRing: false
      }
    },

		head() {
			return {
				title: 'Tailwind CSS Cheatsheet - Layout',
			}
		},

    created() {
      this.$nuxt.$on('highlightLength', this.highlightLength);
      this.$nuxt.$on('blinkLength', this.blinkLength);
    },

		mounted() {
      if (this.$route.hash === '#length') {
        this.blinkLength();
			}
		},

		methods: {
			blinkLength() {
				this.lengthRing = true;
				setTimeout(() => {
					this.lengthRing = false;
				}, 200);
				setTimeout(() => {
					this.lengthRing = true;
				}, 400);
				setTimeout(() => {
					this.lengthRing = false;
				}, 600);
				setTimeout(() => {
					this.lengthRing = true;
				}, 800);
				setTimeout(() => {
					this.lengthRing = false;
          // history.pushState(null, '', '/layout')
          // if (this.$route.name !== 'layout' || this.$route.hash) {
            // // this.$router.go(-1);
            // this.$router.replace('layout')
          // }
				}, 1000);
			},

      highlightLength(yes) {
        if (yes) {
          this.lengthRing = true;
        } else {
          this.lengthRing = false;
        }
      }
		}
	}
</script>

<style lang="scss" scoped>
.sm-breakpoint {
	left: 640px;
	width: 3200px;
}

.md-breakpoint {
	left: 768px;
	width: 3072px;
}

.lg-breakpoint {
	left: 1024px;
	width: 2816px;
}

.xl-breakpoint {
	left: 1280px;
	width: 2560px;
}

.xl2-breakpoint {
	left: 1536px;
	width: 2304px;
}
</style>
