<template>
  <Card>
    <div class="prefix">
      <Lnk href="https://tailwindcss.com/docs/hover-focus-and-other-states#focus-within">focus-within:</Lnk>
    </div>
    <div class="content">
      <div class="flex justify-center">
        <form class="my-3">
          <div class="flex bg-coolGray-900 border border-coolGray-500 focus-within:border-coolGray-300 rounded text-gray-400 focus-within:text-gray-100">
            <div class="mt-1 ml-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <input class="py-1 px-2 font-sans text-base focus:outline-none bg-transparent" placeholder="you@example.com">
          </div>
        </form>
      </div>
      <div class="mt-2">
        <div class="text-coolGray-400 font-sans text-sm">Example:</div>
        <div class="mt-1">focus-within:text-gray-100</div>
        <div class="text-coolGray-400 font-sans text-sm mt-2 mb-1">Utility classes:</div>
        <div class="gap-y-1 grid grid-cols-2">
          <div><NuxtLink to="/interactivity">sr-only <br>not-sr-only</NuxtLink></div>
          <div><NuxtLink to="/style">bg-<span class="text-red-600">{color}</span></NuxtLink></div>
          <div><NuxtLink to="/style">bg-opacity-</NuxtLink></div>
          <div><NuxtLink to="/style">border-<span class="text-red-600">{color}</span></NuxtLink></div>
          <div><NuxtLink to="/style">border-opacity-</NuxtLink></div>
          <div><NuxtLink to="/style">shadow-</NuxtLink></div>
          <div><NuxtLink to="/style">opacity-</NuxtLink></div>
          <div><NuxtLink to="/style">outline-</NuxtLink></div>
          <div><NuxtLink to="/style">ring-<span class="text-red-600">{color}</span></NuxtLink></div>
          <div><NuxtLink to="/style">ring-offset-<span class="text-red-600">{color}</span></NuxtLink></div>
          <div><NuxtLink to="/style">ring-offset-{width}</NuxtLink></div>
          <div><NuxtLink to="/style">ring-opacity-</NuxtLink></div>
          <div><NuxtLink to="/style">ring-{width}</NuxtLink></div>
        </div>
        <div class="gap-y-1 grid grid-cols-2 mt-2.5">
          <div><NuxtLink to="/typography">text-<span class="text-red-600">{color}</span></NuxtLink></div>
          <div><NuxtLink to="/typography">underline <br>no-underline <br>line-through</NuxtLink></div>
          <div><NuxtLink to="/typography">text-opacity-</NuxtLink></div>
        </div>
        <div class="mt-2.5"><NuxtLink to="/layout">z-</NuxtLink></div>
      </div>
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
