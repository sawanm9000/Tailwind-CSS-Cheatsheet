<template>
	<Card class="relative">
    <div class="absolute right-0 top-0 pr-2 z-10"><Lnk href="https://tailwindcss.com/docs/width" class="title">Length</Lnk></div>
		<div class="content overflow-x-auto relative">
			<div class="relative h-20 pl-10 pr-6 w-max">
				<div class="top-sizes">
					<div class="w-96 h-4 -mt-4">96</div>
					<div class="w-80 h-4 -mt-4">80</div>
					<div class="w-72 h-4 -mt-4">72</div>
					<div class="w-64 h-4 -mt-4">64</div>
					<div class="w-56 h-4 -mt-4">56</div>
					<div class="w-48 h-4 -mt-4">48</div>
					<div class="w-40 h-4 -mt-4">40</div>
					<div class="w-32 h-4 -mt-4">32</div>
					<div class="w-24 h-4 -mt-4">24</div>
					<div class="w-16 h-16 border-r border-coolGray-500 pr-0.5 -mt-16">16</div>
					<div class="w-14 h-12 border-r border-coolGray-500 pr-0.5 -mt-12">14</div>
					<div class="w-12 h-8 border-r border-coolGray-500 pr-0.5 -mt-8">12</div>
					<div class="w-11 h-4 -mt-4">11</div>
          <div class="w-6 h-12 border-r border-coolGray-500 pr-0.5 -mt-12">6</div>
					<div class="w-5 h-8 border-r border-coolGray-500 pr-0.5 -mt-8">5</div>
					<div class="w-4 h-4 -mt-4">4</div>
          <div class="w-1.5 h-16 border-r border-coolGray-500 pr-0.5 flex content-end justify-end -mt-16">1.5</div>
					<div class="w-1 h-12 border-r border-coolGray-500 pr-0.5 flex content-end justify-end -mt-12">1</div>
					<div class="w-0.5 h-8 border-r border-coolGray-500 pr-0.5 flex content-end justify-end -mt-8">0.5</div>
					<div class="w-px h-4 -mt-4 flex content-end justify-end">px</div>
					<div class="w-0 h-4 flex content-end justify-end">0</div>
				</div>
				<div class="bars w-96">
					<div class="w-96"></div>
					<div class="w-80"></div>
					<div class="w-72"></div>
					<div class="w-64"></div>
					<div class="w-60"></div>
					<div class="w-56"></div>
					<div class="w-52"></div>
					<div class="w-48"></div>
					<div class="w-44"></div>
					<div class="w-40"></div>
					<div class="w-36"></div>
					<div class="w-32"></div>
					<div class="w-28"></div>
					<div class="w-24"></div>
					<div class="w-20"></div>
					<div class="w-16"></div>
					<div class="w-14"></div>
					<div class="w-12"></div>
					<div class="w-11"></div>
					<div class="w-10"></div>
					<div class="w-9"></div>
					<div class="w-8"></div>
					<div class="w-7"></div>
					<div class="w-6"></div>
					<div class="w-5"></div>
					<div class="w-4"></div>
					<div class="w-3.5"></div>
					<div class="w-3"></div>
					<div class="w-2.5"></div>
					<div class="w-2"></div>
					<div class="w-1.5"></div>
					<div class="w-1"></div>
					<div class="w-0.5"></div>
					<div class="w-px"></div>
				</div>
				<div class="bottom-sizes">
					<div class="w-60">60</div>
					<div class="w-52">52</div>
					<div class="w-44">44</div>
					<div class="w-36">36</div>
					<div class="w-28">28</div>
					<div class="w-20">20</div>
          <div class="w-10 h-16 border-r border-coolGray-500 pr-0.5 flex content-end items-end justify-end">10</div>
					<div class="w-9 h-12 border-r border-coolGray-500 pr-0.5 flex content-end items-end justify-end">9</div>
					<div class="w-8 h-8 border-r border-coolGray-500 pr-0.5 flex content-end items-end justify-end">8</div>
					<div class="w-7">7</div>
					<div class="w-3.5 h-16 border-r border-coolGray-500 pr-0.5 flex content-end items-end justify-end">3.5</div>
					<div class="w-3 h-12 border-r border-coolGray-500 pr-0.5 flex content-end items-end justify-end">3</div>
					<div class="w-2.5 h-8 border-r border-coolGray-500 pr-0.5 flex content-end items-end justify-end">2.5</div>
					<div class="w-2">2</div>
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
.top-sizes, .bottom-sizes {
	div {
		@apply absolute text-right;
	}
}

.bars {
	@apply h-4 mt-16;

	div {
		@apply absolute bg-coolGray-600 border-r border-coolGray-800 h-4;
	}
}
</style>
