<template>
  <Card>
    <div class="content relative">
      <div class="absolute top-0 left-0 pl-2 pt-1"><Lnk href="https://tailwindcss.com/docs/customizing-colors" class="font-sans text-sm text-coolGray-400">Color</Lnk></div>
      <div class="grid grid-rows-1 gap-x-0.5" style="grid-template-columns: 35px repeat(5, 1fr) 3px repeat(17, 1fr) 35px;">
        <div class="grid" style="grid-template-rows: 60px repeat(10, 1fr)">
          <div class="h-5"></div>
          <div class="h-5 flex justify-end items-center pr-1">900</div>
          <div class="h-5 flex justify-end items-center pr-1">800</div>
          <div class="h-5 flex justify-end items-center pr-1">700</div>
          <div class="h-5 flex justify-end items-center pr-1">600</div>
          <div class="h-5 flex justify-end items-center pr-1">500</div>
          <div class="h-5 flex justify-end items-center pr-1">400</div>
          <div class="h-5 flex justify-end items-center pr-1">300</div>
          <div class="h-5 flex justify-end items-center pr-1">200</div>
          <div class="h-5 flex justify-end items-center pr-1">100</div>
          <div class="h-5 flex justify-end items-center pr-1">50</div>
        </div>
        <div class="grid" style="grid-template-rows: 60px repeat(10, 1fr)">
          <div class="relative h-5 self-end">
            <div class="h-5 absolute transform -rotate-45 origin-left left-2.5 top-1">blueGray*</div>
          </div>
          <div class="h-5 rounded-t bg-blueGray-900"></div>
          <div class="h-5 bg-blueGray-800"></div>
          <div class="h-5 bg-blueGray-700"></div>
          <div class="h-5 bg-blueGray-600"></div>
          <div class="h-5 bg-blueGray-500"></div>
          <div class="h-5 bg-blueGray-400"></div>
          <div class="h-5 bg-blueGray-300"></div>
          <div class="h-5 bg-blueGray-200"></div>
          <div class="h-5 bg-blueGray-100"></div>
          <div class="h-5 rounded-b bg-blueGray-50"></div>
        </div>
        <div class="grid" style="grid-template-rows: 60px repeat(10, 1fr)">
          <div class="relative h-5 self-end">
            <div class="h-5 absolute transform -rotate-45 origin-left left-2.5 top-1">coolGray*</div>
          </div>
          <div class="h-5 rounded-t bg-coolGray-900"></div>
          <div class="h-5 bg-coolGray-800"></div>
          <div class="h-5 bg-coolGray-700"></div>
          <div class="h-5 bg-coolGray-600"></div>
          <div class="h-5 bg-coolGray-500"></div>
          <div class="h-5 bg-coolGray-400"></div>
          <div class="h-5 bg-coolGray-300"></div>
          <div class="h-5 bg-coolGray-200"></div>
          <div class="h-5 bg-coolGray-100"></div>
          <div class="h-5 rounded-b bg-coolGray-50"></div>
        </div>
        <div class="grid" style="grid-template-rows: 60px repeat(10, 1fr)">
          <div class="relative h-5 self-end">
            <div class="h-5 absolute transform -rotate-45 origin-left left-2.5 top-1">gray</div>
          </div>
          <div class="h-5 rounded-t bg-gray-900"></div>
          <div class="h-5 bg-gray-800"></div>
          <div class="h-5 bg-gray-700"></div>
          <div class="h-5 bg-gray-600"></div>
          <div class="h-5 bg-gray-500"></div>
          <div class="h-5 bg-gray-400"></div>
          <div class="h-5 bg-gray-300"></div>
          <div class="h-5 bg-gray-200"></div>
          <div class="h-5 bg-gray-100"></div>
          <div class="h-5 rounded-b bg-gray-50"></div>
        </div>
        <div class="grid" style="grid-template-rows: 60px repeat(10, 1fr)">
          <div class="relative h-5 self-end">
            <div class="h-5 absolute transform -rotate-45 origin-left left-2.5 top-1">trueGray*</div>
          </div>
          <div class="h-5 rounded-t bg-trueGray-900"></div>
          <div class="h-5 bg-trueGray-800"></div>
          <div class="h-5 bg-trueGray-700"></div>
          <div class="h-5 bg-trueGray-600"></div>
          <div class="h-5 bg-trueGray-500"></div>
          <div class="h-5 bg-trueGray-400"></div>
          <div class="h-5 bg-trueGray-300"></div>
          <div class="h-5 bg-trueGray-200"></div>
          <div class="h-5 bg-trueGray-100"></div>
          <div class="h-5 rounded-b bg-trueGray-50"></div>
        </div>
        <div class="grid" style="grid-template-rows: 60px repeat(10, 1fr)">
          <div class="relative h-5 self-end">
            <div class="h-5 absolute transform -rotate-45 origin-left left-2.5 top-1">warmGray*</div>
          </div>
          <div class="h-5 rounded-t bg-warmGray-900"></div>
          <div class="h-5 bg-warmGray-800"></div>
          <div class="h-5 bg-warmGray-700"></div>
          <div class="h-5 bg-warmGray-600"></div>
          <div class="h-5 bg-warmGray-500"></div>
          <div class="h-5 bg-warmGray-400"></div>
          <div class="h-5 bg-warmGray-300"></div>
          <div class="h-5 bg-warmGray-200"></div>
          <div class="h-5 bg-warmGray-100"></div>
          <div class="h-5 rounded-b bg-warmGray-50"></div>
        </div>
        <div></div>
        <div class="grid" style="grid-template-rows: 60px repeat(10, 1fr)">
          <div class="relative h-5 self-end">
            <div class="h-5 absolute transform -rotate-45 origin-left left-2.5 top-1">red</div>
          </div>
          <div class="h-5 rounded-t bg-red-900"></div>
          <div class="h-5 bg-red-800"></div>
          <div class="h-5 bg-red-700"></div>
          <div class="h-5 bg-red-600"></div>
          <div class="h-5 bg-red-500"></div>
          <div class="h-5 bg-red-400"></div>
          <div class="h-5 bg-red-300"></div>
          <div class="h-5 bg-red-200"></div>
          <div class="h-5 bg-red-100"></div>
          <div class="h-5 rounded-b bg-red-50"></div>
        </div>
        <div class="grid" style="grid-template-rows: 60px repeat(10, 1fr)">
          <div class="relative h-5 self-end">
            <div class="h-5 absolute transform -rotate-45 origin-left left-2.5 top-1">orange*</div>
          </div>
          <div class="h-5 rounded-t bg-orange-900"></div>
          <div class="h-5 bg-orange-800"></div>
          <div class="h-5 bg-orange-700"></div>
          <div class="h-5 bg-orange-600"></div>
          <div class="h-5 bg-orange-500"></div>
          <div class="h-5 bg-orange-400"></div>
          <div class="h-5 bg-orange-300"></div>
          <div class="h-5 bg-orange-200"></div>
          <div class="h-5 bg-orange-100"></div>
          <div class="h-5 rounded-b bg-orange-50"></div>
        </div>
        <div class="grid" style="grid-template-rows: 60px repeat(10, 1fr)">
          <div class="relative h-5 self-end">
            <div class="h-5 absolute transform -rotate-45 origin-left left-2.5 top-1">amber*</div>
          </div>
          <div class="h-5 rounded-t bg-amber-900"></div>
          <div class="h-5 bg-amber-800"></div>
          <div class="h-5 bg-amber-700"></div>
          <div class="h-5 bg-amber-600"></div>
          <div class="h-5 bg-amber-500"></div>
          <div class="h-5 bg-amber-400"></div>
          <div class="h-5 bg-amber-300"></div>
          <div class="h-5 bg-amber-200"></div>
          <div class="h-5 bg-amber-100"></div>
          <div class="h-5 rounded-b bg-amber-50"></div>
        </div>
        <div class="grid" style="grid-template-rows: 60px repeat(10, 1fr)">
          <div class="relative h-5 self-end">
            <div class="h-5 absolute transform -rotate-45 origin-left left-2.5 top-1">yellow</div>
          </div>
          <div class="h-5 rounded-t bg-yellow-900"></div>
          <div class="h-5 bg-yellow-800"></div>
          <div class="h-5 bg-yellow-700"></div>
          <div class="h-5 bg-yellow-600"></div>
          <div class="h-5 bg-yellow-500"></div>
          <div class="h-5 bg-yellow-400"></div>
          <div class="h-5 bg-yellow-300"></div>
          <div class="h-5 bg-yellow-200"></div>
          <div class="h-5 bg-yellow-100"></div>
          <div class="h-5 rounded-b bg-yellow-50"></div>
        </div>
        <div class="grid" style="grid-template-rows: 60px repeat(10, 1fr)">
          <div class="relative h-5 self-end">
            <div class="h-5 absolute transform -rotate-45 origin-left left-2.5 top-1">lime*</div>
          </div>
          <div class="h-5 rounded-t bg-lime-900"></div>
          <div class="h-5 bg-lime-800"></div>
          <div class="h-5 bg-lime-700"></div>
          <div class="h-5 bg-lime-600"></div>
          <div class="h-5 bg-lime-500"></div>
          <div class="h-5 bg-lime-400"></div>
          <div class="h-5 bg-lime-300"></div>
          <div class="h-5 bg-lime-200"></div>
          <div class="h-5 bg-lime-100"></div>
          <div class="h-5 rounded-b bg-lime-50"></div>
        </div>
        <div class="grid" style="grid-template-rows: 60px repeat(10, 1fr)">
          <div class="relative h-5 self-end">
            <div class="h-5 absolute transform -rotate-45 origin-left left-2.5 top-1">green</div>
          </div>
          <div class="h-5 rounded-t bg-green-900"></div>
          <div class="h-5 bg-green-800"></div>
          <div class="h-5 bg-green-700"></div>
          <div class="h-5 bg-green-600"></div>
          <div class="h-5 bg-green-500"></div>
          <div class="h-5 bg-green-400"></div>
          <div class="h-5 bg-green-300"></div>
          <div class="h-5 bg-green-200"></div>
          <div class="h-5 bg-green-100"></div>
          <div class="h-5 rounded-b bg-green-50"></div>
        </div>
        <div class="grid" style="grid-template-rows: 60px repeat(10, 1fr)">
          <div class="relative h-5 self-end">
            <div class="h-5 absolute transform -rotate-45 origin-left left-2.5 top-1">emerald*</div>
          </div>
          <div class="h-5 rounded-t bg-emerald-900"></div>
          <div class="h-5 bg-emerald-800"></div>
          <div class="h-5 bg-emerald-700"></div>
          <div class="h-5 bg-emerald-600"></div>
          <div class="h-5 bg-emerald-500"></div>
          <div class="h-5 bg-emerald-400"></div>
          <div class="h-5 bg-emerald-300"></div>
          <div class="h-5 bg-emerald-200"></div>
          <div class="h-5 bg-emerald-100"></div>
          <div class="h-5 rounded-b bg-emerald-50"></div>
        </div>
        <div class="grid" style="grid-template-rows: 60px repeat(10, 1fr)">
          <div class="relative h-5 self-end">
            <div class="h-5 absolute transform -rotate-45 origin-left left-2.5 top-1">teal*</div>
          </div>
          <div class="h-5 rounded-t bg-teal-900"></div>
          <div class="h-5 bg-teal-800"></div>
          <div class="h-5 bg-teal-700"></div>
          <div class="h-5 bg-teal-600"></div>
          <div class="h-5 bg-teal-500"></div>
          <div class="h-5 bg-teal-400"></div>
          <div class="h-5 bg-teal-300"></div>
          <div class="h-5 bg-teal-200"></div>
          <div class="h-5 bg-teal-100"></div>
          <div class="h-5 rounded-b bg-teal-50"></div>
        </div>
        <div class="grid" style="grid-template-rows: 60px repeat(10, 1fr)">
          <div class="relative h-5 self-end">
            <div class="h-5 absolute transform -rotate-45 origin-left left-2.5 top-1">cyan*</div>
          </div>
          <div class="h-5 rounded-t bg-cyan-900"></div>
          <div class="h-5 bg-cyan-800"></div>
          <div class="h-5 bg-cyan-700"></div>
          <div class="h-5 bg-cyan-600"></div>
          <div class="h-5 bg-cyan-500"></div>
          <div class="h-5 bg-cyan-400"></div>
          <div class="h-5 bg-cyan-300"></div>
          <div class="h-5 bg-cyan-200"></div>
          <div class="h-5 bg-cyan-100"></div>
          <div class="h-5 rounded-b bg-cyan-50"></div>
        </div>
        <div class="grid" style="grid-template-rows: 60px repeat(10, 1fr)">
          <div class="relative h-5 self-end">
            <div class="h-5 absolute transform -rotate-45 origin-left left-2.5 top-1">lightBlue*</div>
          </div>
          <div class="h-5 rounded-t bg-lightBlue-900"></div>
          <div class="h-5 bg-lightBlue-800"></div>
          <div class="h-5 bg-lightBlue-700"></div>
          <div class="h-5 bg-lightBlue-600"></div>
          <div class="h-5 bg-lightBlue-500"></div>
          <div class="h-5 bg-lightBlue-400"></div>
          <div class="h-5 bg-lightBlue-300"></div>
          <div class="h-5 bg-lightBlue-200"></div>
          <div class="h-5 bg-lightBlue-100"></div>
          <div class="h-5 rounded-b bg-lightBlue-50"></div>
        </div>
        <div class="grid" style="grid-template-rows: 60px repeat(10, 1fr)">
          <div class="relative h-5 self-end">
            <div class="h-5 absolute transform -rotate-45 origin-left left-2.5 top-1">blue</div>
          </div>
          <div class="h-5 rounded-t bg-blue-900"></div>
          <div class="h-5 bg-blue-800"></div>
          <div class="h-5 bg-blue-700"></div>
          <div class="h-5 bg-blue-600"></div>
          <div class="h-5 bg-blue-500"></div>
          <div class="h-5 bg-blue-400"></div>
          <div class="h-5 bg-blue-300"></div>
          <div class="h-5 bg-blue-200"></div>
          <div class="h-5 bg-blue-100"></div>
          <div class="h-5 rounded-b bg-blue-50"></div>
        </div>
        <div class="grid" style="grid-template-rows: 60px repeat(10, 1fr)">
          <div class="relative h-5 self-end">
            <div class="h-5 absolute transform -rotate-45 origin-left left-2.5 top-1">indigo</div>
          </div>
          <div class="h-5 rounded-t bg-indigo-900"></div>
          <div class="h-5 bg-indigo-800"></div>
          <div class="h-5 bg-indigo-700"></div>
          <div class="h-5 bg-indigo-600"></div>
          <div class="h-5 bg-indigo-500"></div>
          <div class="h-5 bg-indigo-400"></div>
          <div class="h-5 bg-indigo-300"></div>
          <div class="h-5 bg-indigo-200"></div>
          <div class="h-5 bg-indigo-100"></div>
          <div class="h-5 rounded-b bg-indigo-50"></div>
        </div>
        <div class="grid" style="grid-template-rows: 60px repeat(10, 1fr)">
          <div class="relative h-5 self-end">
            <div class="h-5 absolute transform -rotate-45 origin-left left-2.5 top-1">violet*</div>
          </div>
          <div class="h-5 rounded-t bg-violet-900"></div>
          <div class="h-5 bg-violet-800"></div>
          <div class="h-5 bg-violet-700"></div>
          <div class="h-5 bg-violet-600"></div>
          <div class="h-5 bg-violet-500"></div>
          <div class="h-5 bg-violet-400"></div>
          <div class="h-5 bg-violet-300"></div>
          <div class="h-5 bg-violet-200"></div>
          <div class="h-5 bg-violet-100"></div>
          <div class="h-5 rounded-b bg-violet-50"></div>
        </div>
        <div class="grid" style="grid-template-rows: 60px repeat(10, 1fr)">
          <div class="relative h-5 self-end">
            <div class="h-5 absolute transform -rotate-45 origin-left left-2.5 top-1">purple</div>
          </div>
          <div class="h-5 rounded-t bg-purple-900"></div>
          <div class="h-5 bg-purple-800"></div>
          <div class="h-5 bg-purple-700"></div>
          <div class="h-5 bg-purple-600"></div>
          <div class="h-5 bg-purple-500"></div>
          <div class="h-5 bg-purple-400"></div>
          <div class="h-5 bg-purple-300"></div>
          <div class="h-5 bg-purple-200"></div>
          <div class="h-5 bg-purple-100"></div>
          <div class="h-5 rounded-b bg-purple-50"></div>
        </div>
        <div class="grid" style="grid-template-rows: 60px repeat(10, 1fr)">
          <div class="relative h-5 self-end">
            <div class="h-5 absolute transform -rotate-45 origin-left left-2.5 top-1">fuchsia*</div>
          </div>
          <div class="h-5 rounded-t bg-fuchsia-900"></div>
          <div class="h-5 bg-fuchsia-800"></div>
          <div class="h-5 bg-fuchsia-700"></div>
          <div class="h-5 bg-fuchsia-600"></div>
          <div class="h-5 bg-fuchsia-500"></div>
          <div class="h-5 bg-fuchsia-400"></div>
          <div class="h-5 bg-fuchsia-300"></div>
          <div class="h-5 bg-fuchsia-200"></div>
          <div class="h-5 bg-fuchsia-100"></div>
          <div class="h-5 rounded-b bg-fuchsia-50"></div>
        </div>
        <div class="grid" style="grid-template-rows: 60px repeat(10, 1fr)">
          <div class="relative h-5 self-end">
            <div class="h-5 absolute transform -rotate-45 origin-left left-2.5 top-1">pink</div>
          </div>
          <div class="h-5 rounded-t bg-pink-900"></div>
          <div class="h-5 bg-pink-800"></div>
          <div class="h-5 bg-pink-700"></div>
          <div class="h-5 bg-pink-600"></div>
          <div class="h-5 bg-pink-500"></div>
          <div class="h-5 bg-pink-400"></div>
          <div class="h-5 bg-pink-300"></div>
          <div class="h-5 bg-pink-200"></div>
          <div class="h-5 bg-pink-100"></div>
          <div class="h-5 rounded-b bg-pink-50"></div>
        </div>
        <div class="grid" style="grid-template-rows: 60px repeat(10, 1fr)">
          <div class="relative h-5 self-end">
            <div class="h-5 absolute transform -rotate-45 origin-left left-2.5 top-1">rose*</div>
          </div>
          <div class="h-5 rounded-t bg-rose-900"></div>
          <div class="h-5 bg-rose-800"></div>
          <div class="h-5 bg-rose-700"></div>
          <div class="h-5 bg-rose-600"></div>
          <div class="h-5 bg-rose-500"></div>
          <div class="h-5 bg-rose-400"></div>
          <div class="h-5 bg-rose-300"></div>
          <div class="h-5 bg-rose-200"></div>
          <div class="h-5 bg-rose-100"></div>
          <div class="h-5 rounded-b bg-rose-50"></div>
        </div>
        <div class="grid" style="grid-template-rows: 60px repeat(10, 1fr)">
          <div class="h-5"></div>
          <div class="h-5 flex items-center pl-1">900</div>
          <div class="h-5 flex items-center pl-1">800</div>
          <div class="h-5 flex items-center pl-1">700</div>
          <div class="h-5 flex items-center pl-1">600</div>
          <div class="h-5 flex items-center pl-1">500</div>
          <div class="h-5 flex items-center pl-1">400</div>
          <div class="h-5 flex items-center pl-1">300</div>
          <div class="h-5 flex items-center pl-1">200</div>
          <div class="h-5 flex items-center pl-1">100</div>
          <div class="h-5 flex items-center pl-1">50</div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
export default {}
</script>

