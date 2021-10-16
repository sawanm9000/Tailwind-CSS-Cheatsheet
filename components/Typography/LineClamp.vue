<template>
  <Card>
    <div class="flex justify-between items-start">
      <div class="prefix"><Lnk href="https://github.com/tailwindlabs/tailwindcss-line-clamp#usage">line-clamp-</Lnk></div>
      <Lnk href="https://github.com/tailwindlabs/tailwindcss-line-clamp#usage" class="pt-1.5 pr-1.5" title="Requires plugin">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      </Lnk>
    </div>
    <div class="content grid grid-cols-7 gap-x-1">
      <div>
        <TwClass name="line-clamp-1" tooltip="-webkit-line-clamp: 1" class="mb-1 w-max">1</TwClass>
        <div class="font-sans text-xs line-clamp-1">Et molestiae hic earum repellat aliquid est doloribus delectus. Enim illum odio porro ut omnis</div>
      </div>
      <div>
        <TwClass name="line-clamp-2" tooltip="-webkit-line-clamp: 2" class="mb-1 w-max">2</TwClass>
        <div class="font-sans text-xs line-clamp-2">Et molestiae hic earum repellat aliquid est doloribus delectus. Enim illum odio porro ut omnis</div>
      </div>
      <div>
        <TwClass name="line-clamp-3" tooltip="-webkit-line-clamp: 3" class="mb-1 w-max">3</TwClass>
        <div class="font-sans text-xs line-clamp-3">Et molestiae hic earum repellat aliquid est doloribus delectus. Enim illum odio porro ut omnis</div>
      </div>
      <div>
        <TwClass name="line-clamp-4" tooltip="-webkit-line-clamp: 4" class="mb-1 w-max">4</TwClass>
        <div class="font-sans text-xs line-clamp-4">Et molestiae hic earum repellat aliquid est doloribus delectus. Enim illum odio porro ut omnis</div>
      </div>
      <div>
        <TwClass name="line-clamp-5" tooltip="-webkit-line-clamp: 5" class="mb-1 w-max">5</TwClass>
        <div class="font-sans text-xs line-clamp-5">Et molestiae hic earum repellat aliquid est doloribus delectus. Enim illum odio porro ut omnis</div>
      </div>
      <div>
        <TwClass name="line-clamp-6" tooltip="-webkit-line-clamp: 6" class="mb-1 w-max">6</TwClass>
        <div class="font-sans text-xs line-clamp-6">Et molestiae hic earum repellat aliquid est doloribus delectus. Enim illum odio porro ut omnis</div>
      </div>
      <div>
        <TwClass name="line-clamp-none" tooltip="-webkit-line-clamp: unset" class="mb-1 w-max">none</TwClass>
        <div class="font-sans text-xs line-clamp-none">Et molestiae hic earum repellat aliquid est doloribus delectus. Enim illum odio porro ut omnis</div>
      </div>
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
