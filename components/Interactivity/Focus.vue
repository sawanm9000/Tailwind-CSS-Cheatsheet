<template>
  <Card>
    <div class="prefix">
      <Lnk href="https://tailwindcss.com/docs/hover-focus-and-other-states#focus">focus:</Lnk>
    </div>
    <div class="content">
      <div class="flex justify-center">
        <button class="w-max px-4 py-2 font-sans text-base rounded bg-blue-600 ring-white ring-offset-2 ring-offset-coolGray-800 focus:ring">Click</button>
      </div>
      <div class="mt-2">
        <div class="text-coolGray-400 font-sans text-sm">Example:</div>
        <div class="mt-1">focus:ring</div>
        <div class="text-coolGray-400 font-sans text-sm mt-2 mb-1">Utility classes:</div>
        <div class="gap-y-1 grid grid-cols-2">
          <div><NuxtLink to="/interactivity">sr-only <br>not-sr-only</NuxtLink></div>
          <div><NuxtLink to="/style">bg-<span class="text-red-600">{color}</span></NuxtLink></div>
          <div><NuxtLink to="/style">bg-opacity-</NuxtLink></div>
          <div><NuxtLink to="/style">border-<span class="text-red-600">{color}</span></NuxtLink></div>
          <div><NuxtLink to="/style">border-opacity-</NuxtLink></div>
          <div><NuxtLink to="/style">shadow-</NuxtLink></div>
          <div><NuxtLink to="/style">from- via- to-</NuxtLink></div>
          <div><NuxtLink to="/style">opacity-</NuxtLink></div>
          <div><NuxtLink to="/style">placeholder-<span class="text-red-600">{color}</span></NuxtLink></div>
          <div><NuxtLink to="/style">placeholder-opacity-</NuxtLink></div>
          <div><NuxtLink to="/style">ring-<span class="text-red-600">{color}</span></NuxtLink></div>
          <div><NuxtLink to="/style">ring-offset-<span class="text-red-600">{color}</span></NuxtLink></div>
          <div><NuxtLink to="/style">ring-offset-{width}</NuxtLink></div>
          <div><NuxtLink to="/style">ring-opacity-</NuxtLink></div>
          <div><NuxtLink to="/style">ring-{width}</NuxtLink></div>
        </div>
        <div class="gap-y-1 grid grid-cols-2 mt-2.5">
          <div><NuxtLink to="/transform">rotate-</NuxtLink></div>
          <div><NuxtLink to="/transform">scale- scale-x- scale-y-</NuxtLink></div>
          <div><NuxtLink to="/transform">skew-x- skew-y-</NuxtLink></div>
          <div><NuxtLink to="/transform">translate-x- translate-y- <br>-translate-x- <br>-translate-y-</NuxtLink></div>
          <div><NuxtLink to="/layout">z-</NuxtLink></div>
        </div>
        <div class="gap-y-1 grid grid-cols-2 mt-2.5">
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
