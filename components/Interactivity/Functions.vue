<template>
  <Card>
    <div class="content">
      <div class="title">
        <Lnk href="https://tailwindcss.com/docs/functions-and-directives">Functions</Lnk>
      </div>
      <div class="mt-2">
        <div>screen()</div>
        <div class="mt-1 grid grid-cols-2 gap-1.5">
          <div>
            <div class="text-coolGray-400 font-sans text-sm">Input</div>
            <div class="whitespace-pre-wrap"><span class="text-green-600">@media</span> screen(sm) {
  <span class="text-coolGray-400">/* ... */</span>
}</div>
          </div>
          <div>
            <div class="text-coolGray-400 font-sans text-sm">Output</div>
            <div class="whitespace-pre-wrap"><span class="text-green-600">@media</span> (min-width: <span class="text-yellow-500">640px</span>) {
  <span class="text-coolGray-400">/* ... */</span>
}</div>
          </div>
        </div>

        <div class="mt-4">theme()</div>
        <div class="text-coolGray-400 font-sans text-sm">Access config values using dot notation</div>
        <div class="whitespace-pre-wrap"><span class="text-purple-500">.btn-blue</span> {
  background-color: theme(<span class="text-yellow-500">'colors.blue.500'</span>);
}</div>
      </div>
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
