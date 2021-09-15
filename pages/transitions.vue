<template>
	<div class="w-screen h-screen flex justify-center items-center overflow-hidden">
    <div class="text-center space-y-5">
      <h1 class="text-5xl font-bold">Coming soon!</h1>
      <div>
        <NuxtLink to="/" class="text-blue-400">← Home page</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		head() {
			return {
				title: 'Tailwind CSS Cheatsheet - Transitions',
			}
		},

	}
</script>
