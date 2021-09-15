<template>
  <Card>
    <div class="flex justify-between items-start">
      <div class="prefix"><Lnk href="https://github.com/tailwindlabs/tailwindcss-typography#usage">prose</Lnk></div>
      <Lnk href="https://github.com/tailwindlabs/tailwindcss-typography#usage" class="pt-1.5 pr-1.5">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      </Lnk>
    </div>
    <div class="content">
      <div class="grid grid-cols-3 gap-2 mb-3">
        <div>
          <TwClass name="prose-sm" class="mb-1 w-max">-sm</TwClass>
          <article class="bg-gray-700 h-20 overflow-hidden font-sans px-0.5 prose-sm">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia voluptatibus dignissimos excepturi nihil, eius ex veniam ab quod, odit facilis officiis dolore praesentium quos earum, repudiandae temporibus nemo expedita quidem?</p>
          </article>
        </div>
        <div>
          <div class="mb-1 invisible">0</div>
          <article class="bg-gray-700 h-20 overflow-hidden font-sans px-0.5 prose text-white">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia voluptatibus dignissimos excepturi nihil, eius ex veniam ab quod, odit facilis officiis dolore praesentium quos earum, repudiandae temporibus nemo expedita quidem?</p>
          </article>
        </div>
        <div>
          <TwClass name="prose-lg" class="mb-1 w-max">-lg</TwClass>
          <article class="bg-gray-700 h-20 overflow-hidden font-sans px-0.5 prose-lg">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia voluptatibus dignissimos excepturi nihil, eius ex veniam ab quod, odit facilis officiis dolore praesentium quos earum, repudiandae temporibus nemo expedita quidem?</p>
          </article>
        </div>
        <div>
          <TwClass name="prose-xl" class="mb-1 w-max">-xl</TwClass>
          <article class="bg-gray-700 h-20 overflow-hidden font-sans px-0.5 prose-xl">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia voluptatibus dignissimos excepturi nihil, eius ex veniam ab quod, odit facilis officiis dolore praesentium quos earum, repudiandae temporibus nemo expedita quidem?</p>
          </article>
        </div>
        <div>
          <TwClass name="prose-2xl" class="mb-1 w-max">-2xl</TwClass>
          <article class="bg-gray-700 h-20 overflow-hidden font-sans px-0.5 prose-2xl">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia voluptatibus dignissimos excepturi nihil, eius ex veniam ab quod, odit facilis officiis dolore praesentium quos earum, repudiandae temporibus nemo expedita quidem?</p>
          </article>
        </div>
      </div>
      <div class="grid grid-cols-4 gap-y-1">
        <div class="flex flex-col">
          <TwClass name="prose-red">-red</TwClass>
          <div class="font-sans prose prose-red"><a href="#">Link</a></div>
        </div>
        <div class="flex flex-col">
          <TwClass name="prose-yellow">-yellow</TwClass>
          <div class="font-sans prose prose-yellow"><a href="#">Link</a></div>
        </div>
        <div class="flex flex-col">
          <TwClass name="prose-green">-green</TwClass>
          <div class="font-sans prose prose-green"><a href="#">Link</a></div>
        </div>
        <div class="flex flex-col">
          <TwClass name="prose-blue">-blue</TwClass>
          <div class="font-sans prose prose-blue"><a href="#">Link</a></div>
        </div>
        <div class="flex flex-col">
          <TwClass name="prose-indigo">-indigo</TwClass>
          <div class="font-sans prose prose-indigo"><a href="#">Link</a></div>
        </div>
        <div class="flex flex-col">
          <TwClass name="prose-purple">-purple</TwClass>
          <div class="font-sans prose prose-purple"><a href="#">Link</a></div>
        </div>
        <div class="flex flex-col">
          <TwClass name="prose-pink">-pink</TwClass>
          <div class="font-sans prose prose-pink"><a href="#">Link</a></div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
