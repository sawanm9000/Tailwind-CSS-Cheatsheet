<template>
  <Card>
    <div class="prefix">
      <Lnk href="https://tailwindcss.com/docs/appearance">appearance-none</Lnk>
    </div>
    <div class="content">
      <div class="grid grid-cols-2 gap-2">
        <div>
          <div class="opacity-0 invisible">.</div>
          <div class="relative mt-1">
            <select class="font-sans w-full py-1 pl-2 bg-coolGray-900">
              <option>Yes</option>
              <option>No</option>
              <option>Maybe</option>
            </select>
          </div>
        </div>
        <div>
          <TwClass name="appearance-none" tooltip="appearance: none" class="w-max">appearance-none</TwClass>
          <div class="relative mt-1">
            <select class="font-sans w-full py-1 pl-2 bg-coolGray-900 appearance-none">
              <option>Yes</option>
              <option>No</option>
              <option>Maybe</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
