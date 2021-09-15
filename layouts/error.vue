<template>
  <div class="w-screen h-screen flex justify-center items-center overflow-hidden">
    <div class="text-center space-y-5">
      <h1 v-if="error.statusCode === 404" class="text-5xl font-bold">Page not found</h1>
      <h1 v-else class="text-5xl">An error occurred</h1>
      <div>
        <NuxtLink to="/" class="text-blue-400">← Home page</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    // layout: 'default' // you can set a custom layout for the error page
  }
</script>
