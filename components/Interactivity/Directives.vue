<template>
  <Card>
    <div class="content">
      <div class="title">
        <Lnk href="https://tailwindcss.com/docs/functions-and-directives">Directives</Lnk>
      </div>
      <div class="mt-2 grid grid-cols-2 gap-y-1">
        <div>
          <div>@tailwind</div>
          <div class="text-coolGray-400 font-sans text-sm">Insert Tailwind’s base, components, utilities and screens styles</div>
        </div>
        <div class="whitespace-pre"><span class="text-cyan-400">@tailwind</span> base;
<span class="text-cyan-400">@tailwind</span> components;
<span class="text-cyan-400">@tailwind</span> utilities;
<span class="text-cyan-400">@tailwind</span> screens;</div>
        <div>
          <div>@layer</div>
          <div class="text-coolGray-400 font-sans text-sm">Tell Tailwind which “bucket” a set of custom styles belong to</div>
        </div>
        <div class="whitespace-pre"><span class="text-cyan-400">@layer</span> components {
  <span class="text-purple-400">.btn-blue</span> {
    @apply rounded;
  }
}</div>
        <div>
          <div>@apply</div>
          <div class="text-coolGray-400 font-sans text-sm">Inline any existing utility classes into your own custom CSS</div>
        </div>
        <div class="whitespace-pre"><span class="text-purple-400">.btn</span> {
  <span class="text-cyan-400">@apply</span> font-bold;
}</div>
        <div>
          <div>@variants</div>
          <div class="text-coolGray-400 font-sans text-sm">Generate responsive, hover, focus, active, and other variants of your own utilities</div>
        </div>
        <div class="whitespace-pre"><span class="text-cyan-400">@variants</span> hover {
  <span class="text-purple-400">.banana</span> {
    color: <span class="text-lime-400">yellow</span>;
  }
}</div>
        <div>
          <div>@responsive</div>
          <div class="text-coolGray-400 font-sans text-sm">Generate responsive variants of your own classes</div>
        </div>
        <div><span class="text-cyan-400">@responsive</span> {
  <span class="text-purple-400">.bg-gradient-brand</span> {
    background-color: <span class="text-lime-400">red</span>;
  }
}</div>
        <div>
          <div>@screen</div>
          <div class="text-coolGray-400 font-sans text-sm">Create media queries that reference your breakpoints by name</div>
        </div>
        <div class="whitespace-pre"><span class="text-cyan-400">@screen</span> sm {
  <span class="text-coolGray-500">/* ... */</span>
}</div>
      </div>
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
