<template>
  <Card>
    <div class="prefix">
      <Lnk href="https://tailwindcss.com/docs/hover-focus-and-other-states#group-hover">group-hover:</Lnk>
    </div>
    <div class="content">
      <div class="flex justify-center">
        <div class="w-max px-4 py-2 font-sans rounded bg-blue-600 text-coolGray-300 group">
          <h3 class="text-lg font-bold group-hover:underline group-hover:text-white">Hover</h3>
          <div class="text-base group-hover:text-white">Lorem ipsum dolor sit amet</div>
        </div>
      </div>
      <div class="mt-2">
        <div class="text-coolGray-400 font-sans text-sm">Example:</div>
        <div class="mt-1">group-hover:underline</div>
        <div class="text-coolGray-400 font-sans text-sm mt-2 mb-1">Utility classes:</div>
        <div class="gap-y-1 grid grid-cols-2">
          <div><NuxtLink to="/style">bg-<span class="text-red-600">{color}</span></NuxtLink></div>
          <div><NuxtLink to="/style">bg-opacity-</NuxtLink></div>
          <div><NuxtLink to="/style">border-<span class="text-red-600">{color}</span></NuxtLink></div>
          <div><NuxtLink to="/style">border-opacity-</NuxtLink></div>
          <div><NuxtLink to="/style">shadow</NuxtLink></div>
          <div><NuxtLink to="/style">opacity-</NuxtLink></div>
        </div>
        <div class="gap-y-1 grid grid-cols-2 mt-2">
          <div><NuxtLink to="/typography">text-<span class="text-red-600">{color}</span></NuxtLink></div>
          <div><NuxtLink to="/typography">underline <br>no-underline <br>line-through</NuxtLink></div>
          <div><NuxtLink to="/typography">text-opacity-</NuxtLink></div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
