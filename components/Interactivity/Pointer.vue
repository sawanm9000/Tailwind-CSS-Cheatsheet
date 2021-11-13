<template>
  <Card>
    <div class="prefix">
      <Lnk href="https://tailwindcss.com/docs/pointer-events">pointer-events-</Lnk>
    </div>
    <div class="content">
      <div class="grid grid-cols-2 gap-2">
        <div>
          <TwClass name="pointer-events-auto" tooltip="pointer-events: auto" class="mt-1 w-max">auto</TwClass>
          <div class="relative mt-1">
            <select class="font-sans text-base w-full py-1 bg-coolGray-900">
              <option>Indiana</option>
              <option>Michigan</option>
              <option>Ohio</option>
            </select>
            <div class="absolute right-0 top-0 h-full bg-red-800 rounded-r-sm pointer-events-auto flex items-center">
              <svg class="fill-current h-6 w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg>
            </div>
          </div>
        </div>
        <div>
          <TwClass name="pointer-events-none" tooltip="pointer-events: none" class="mt-1 w-max">none</TwClass>
          <div class="relative mt-1">
            <select class="font-sans text-base w-full py-1 bg-coolGray-900">
              <option>Indiana</option>
              <option>Michigan</option>
              <option>Ohio</option>
            </select>
            <div class="absolute right-0 top-0 h-full bg-blue-600 rounded-r-sm pointer-events-none flex items-center">
              <svg class="fill-current h-6 w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg>
            </div>
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
