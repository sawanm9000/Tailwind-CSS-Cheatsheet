<template>
  <Card>
    <div class="flex justify-between">
      <div class="title ml-2 mt-1">
        <Lnk href="https://github.com/tailwindlabs/tailwindcss-forms">Forms</Lnk>
      </div>
      <Lnk href="https://github.com/tailwindlabs/tailwindcss-forms" class="pt-1.5 pr-1.5" title="Requires plugin">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      </Lnk>
    </div>
    <div class="content">
      <div class="grid grid-cols-2 gap-x-2 gap-y-2">
        <div>
          <TwClass name='<input type="text" />' tooltip='<input type="text" />' class="w-max">text</TwClass>
          <input type="text" class="mt-1 font-sans text-sm w-full h-7 bg-coolGray-900">
        </div>
        <div>
          <TwClass name='<input type="password" />' tooltip='<input type="password" />' class="w-max">password</TwClass>
          <input type="password" class="mt-1 font-sans text-sm w-full h-7 bg-coolGray-900" placeholder="Type password">
        </div>
        <div>
          <TwClass name='<input type="email" />' tooltip='<input type="email" />' class="w-max">email</TwClass>
          <input type="email" class="mt-1 font-sans text-sm w-full h-7 bg-coolGray-900">
        </div>
        <div>
          <TwClass name='<input type="number" />' tooltip='<input type="number" />' class="w-max">number</TwClass>
          <input type="number" class="mt-1 font-sans text-sm w-full h-7 bg-coolGray-900">
        </div>
        <div>
          <TwClass name='<input type="url" />' tooltip='<input type="url" />' class="w-max">url</TwClass>
          <input type="url" class="mt-1 font-sans text-sm w-full h-7 bg-coolGray-900">
        </div>
        <div>
          <TwClass name='<input type="date" />' tooltip='<input type="date" />' class="w-max">date</TwClass>
          <input type="date" class="mt-1 font-sans text-sm w-full h-7 bg-coolGray-900">
        </div>
        <div>
          <TwClass name='<input type="datetime-local" />' tooltip='<input type="datetime-local" />' class="w-max">datetime-local</TwClass>
          <input type="datetime-local" class="mt-1 font-sans text-sm w-full h-7 bg-coolGray-900">
        </div>
        <div>
          <TwClass name='<input type="month" />' tooltip='<input type="month" />' class="w-max">month</TwClass>
          <input type="month" class="mt-1 font-sans text-sm w-full h-7 bg-coolGray-900">
        </div>
        <div>
          <TwClass name='<input type="week" />' tooltip='<input type="week" />' class="w-max">week</TwClass>
          <input type="week" class="mt-1 font-sans text-sm w-full h-7 bg-coolGray-900">
        </div>
        <div>
          <TwClass name='<input type="time" />' tooltip='<input type="time" />' class="w-max">time</TwClass>
          <input type="time" class="mt-1 font-sans text-sm w-full h-7 bg-coolGray-900">
        </div>
        <div>
          <TwClass name='<input type="search" />' tooltip='<input type="search" />' class="w-max">search</TwClass>
          <input type="search" class="mt-1 font-sans text-sm w-full h-7 bg-coolGray-900">
        </div>
        <div>
          <TwClass name='<input type="tel" />' tooltip='<input type="tel" />' class="w-max">tel</TwClass>
          <input type="tel" class="mt-1 font-sans text-sm w-full h-7 bg-coolGray-900">
        </div>
        <div>
          <TwClass name='<input type="checkbox" />' tooltip='<input type="checkbox" />' class="w-max">checkbox</TwClass>
          <input type="checkbox" name="checkbox" class="mt-1">
          <input type="checkbox" name="checkbox" class="mt-1">
        </div>
        <div>
          <TwClass name='<input type="radio" />' tooltip='<input type="radio" />' class="w-max">radio</TwClass>
          <input type="radio" name="radio" class="mt-1 font-sans text-sm bg-coolGray-900">
          <input type="radio" name="radio" class="mt-1 font-sans text-sm bg-coolGray-900">
        </div>
        <div>
          <TwClass name='<select multiple><option>Pizza</option><option>Spaghetti</option></select>' tooltip="" class="w-max">select[multiple]</TwClass>
          <select multiple class="font-sans text-sm mt-1 w-full p-0 bg-coolGray-900">
            <option>Pizza</option>
            <option>Spaghetti</option>
            <option>Burger</option>
          </select>
        </div>
        <div>
          <TwClass name="<textarea></textarea>" tooltip="<textarea></textarea>" class="w-max">textarea</TwClass>
          <div class="h-14">
            <textarea class="w-full px-1 mt-1 font-sans text-sm bg-coolGray-900" placeholder=""></textarea>
          </div>
        </div>
        <div>
          <TwClass name='<select><option>Yes</option><option>No</option></select>' tooltip="" class="w-max">select</TwClass>
          <select class="font-sans mt-1 py-1 pl-2 w-full bg-coolGray-900">
            <option>Yes</option>
            <option>No</option>
            <option>Maybe</option>
          </select>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
  export default {

  }
</script>
