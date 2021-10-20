<template>
  <Card>
    <div class="content relative">
      <div class="title h-0 absolute top-0 left-0"><Lnk href="https://tailwindcss.com/docs/customizing-colors">Color</Lnk></div>
      <div class="overflow-auto">
        <div class="grid grid-rows-1 gap-x-0.5" style="grid-template-columns: 35px repeat(5, 1fr) 3px repeat(17, 1fr) 35px; min-width: 600px">
          <div class="grid bg-gradient-to-b from-coolGray-600 to-white text-transparent bg-clip-text" style="grid-template-rows: 60px repeat(10, 1fr)">
            <div class="h-5"></div>
            <div class="h-5 flex justify-end items-center pr-1 font-semibold">900</div>
            <div class="h-5 flex justify-end items-center pr-1 font-semibold">800</div>
            <div class="h-5 flex justify-end items-center pr-1 font-semibold">700</div>
            <div class="h-5 flex justify-end items-center pr-1 font-semibold">600</div>
            <div class="h-5 flex justify-end items-center pr-1 font-semibold">500</div>
            <div class="h-5 flex justify-end items-center pr-1 font-semibold">400</div>
            <div class="h-5 flex justify-end items-center pr-1 font-semibold">300</div>
            <div class="h-5 flex justify-end items-center pr-1 font-semibold">200</div>
            <div class="h-5 flex justify-end items-center pr-1 font-semibold">100</div>
            <div class="h-5 flex justify-end items-center pr-1 font-semibold">50</div>
          </div>
          <div class="grid" style="grid-template-rows: 60px repeat(10, 1fr)">
            <div class="relative h-5 self-end">
              <div class="h-5 absolute transform -rotate-45 origin-left left-2.5 top-1 text-blueGray-300">blueGray*</div>
            </div>
            <TwClass name="blueGray-900" tooltip="" class="h-5 bg-blueGray-900 rounded-t"></TwClass>
            <TwClass name="blueGray-800" tooltip="" class="h-5 bg-blueGray-800"></TwClass>
            <TwClass name="blueGray-700" tooltip="" class="h-5 bg-blueGray-700"></TwClass>
            <TwClass name="blueGray-600" tooltip="" class="h-5 bg-blueGray-600"></TwClass>
            <TwClass name="blueGray-500" tooltip="" class="h-5 bg-blueGray-500"></TwClass>
            <TwClass name="blueGray-400" tooltip="" class="h-5 bg-blueGray-400"></TwClass>
            <TwClass name="blueGray-300" tooltip="" class="h-5 bg-blueGray-300"></TwClass>
            <TwClass name="blueGray-200" tooltip="" class="h-5 bg-blueGray-200"></TwClass>
            <TwClass name="blueGray-100" tooltip="" class="h-5 bg-blueGray-100"></TwClass>
            <TwClass name="blueGray-50" tooltip="" class="h-5 bg-blueGray-50 rounded-b"></TwClass>
          </div>
          <div class="grid" style="grid-template-rows: 60px repeat(10, 1fr)">
            <div class="relative h-5 self-end">
              <div class="h-5 absolute transform -rotate-45 origin-left left-2.5 top-1 text-coolGray-300">coolGray*</div>
            </div>
            <TwClass name="coolGray-900" tooltip="" class="h-5 bg-coolGray-900 rounded-t"></TwClass>
            <TwClass name="coolGray-800" tooltip="" class="h-5 bg-coolGray-800"></TwClass>
            <TwClass name="coolGray-700" tooltip="" class="h-5 bg-coolGray-700"></TwClass>
            <TwClass name="coolGray-600" tooltip="" class="h-5 bg-coolGray-600"></TwClass>
            <TwClass name="coolGray-500" tooltip="" class="h-5 bg-coolGray-500"></TwClass>
            <TwClass name="coolGray-400" tooltip="" class="h-5 bg-coolGray-400"></TwClass>
            <TwClass name="coolGray-300" tooltip="" class="h-5 bg-coolGray-300"></TwClass>
            <TwClass name="coolGray-200" tooltip="" class="h-5 bg-coolGray-200"></TwClass>
            <TwClass name="coolGray-100" tooltip="" class="h-5 bg-coolGray-100"></TwClass>
            <TwClass name="coolGray-50" tooltip="" class="h-5 bg-coolGray-50 rounded-b"></TwClass>
          </div>
          <div class="grid" style="grid-template-rows: 60px repeat(10, 1fr)">
            <div class="relative h-5 self-end">
              <div class="h-5 absolute transform -rotate-45 origin-left left-2.5 top-1 text-gray-300">gray</div>
            </div>
            <TwClass name="gray-900" tooltip="" class="h-5 bg-gray-900 rounded-t"></TwClass>
            <TwClass name="gray-800" tooltip="" class="h-5 bg-gray-800"></TwClass>
            <TwClass name="gray-700" tooltip="" class="h-5 bg-gray-700"></TwClass>
            <TwClass name="gray-600" tooltip="" class="h-5 bg-gray-600"></TwClass>
            <TwClass name="gray-500" tooltip="" class="h-5 bg-gray-500"></TwClass>
            <TwClass name="gray-400" tooltip="" class="h-5 bg-gray-400"></TwClass>
            <TwClass name="gray-300" tooltip="" class="h-5 bg-gray-300"></TwClass>
            <TwClass name="gray-200" tooltip="" class="h-5 bg-gray-200"></TwClass>
            <TwClass name="gray-100" tooltip="" class="h-5 bg-gray-100"></TwClass>
            <TwClass name="gray-50" tooltip="" class="h-5 bg-gray-50 rounded-b"></TwClass>
          </div>
          <div class="grid" style="grid-template-rows: 60px repeat(10, 1fr)">
            <div class="relative h-5 self-end">
              <div class="h-5 absolute transform -rotate-45 origin-left left-2.5 top-1 text-trueGray-300">trueGray*</div>
            </div>
            <TwClass name="trueGray-900" tooltip="" class="h-5 bg-trueGray-900 rounded-t"></TwClass>
            <TwClass name="trueGray-800" tooltip="" class="h-5 bg-trueGray-800"></TwClass>
            <TwClass name="trueGray-700" tooltip="" class="h-5 bg-trueGray-700"></TwClass>
            <TwClass name="trueGray-600" tooltip="" class="h-5 bg-trueGray-600"></TwClass>
            <TwClass name="trueGray-500" tooltip="" class="h-5 bg-trueGray-500"></TwClass>
            <TwClass name="trueGray-400" tooltip="" class="h-5 bg-trueGray-400"></TwClass>
            <TwClass name="trueGray-300" tooltip="" class="h-5 bg-trueGray-300"></TwClass>
            <TwClass name="trueGray-200" tooltip="" class="h-5 bg-trueGray-200"></TwClass>
            <TwClass name="trueGray-100" tooltip="" class="h-5 bg-trueGray-100"></TwClass>
            <TwClass name="trueGray-50" tooltip="" class="h-5 bg-trueGray-50 rounded-b"></TwClass>
          </div>
          <div class="grid" style="grid-template-rows: 60px repeat(10, 1fr)">
            <div class="relative h-5 self-end">
              <div class="h-5 absolute transform -rotate-45 origin-left left-2.5 top-1 text-warmGray-300">warmGray*</div>
            </div>
            <TwClass name="warmGray-900" tooltip="" class="h-5 bg-warmGray-900 rounded-t"></TwClass>
            <TwClass name="warmGray-800" tooltip="" class="h-5 bg-warmGray-800"></TwClass>
            <TwClass name="warmGray-700" tooltip="" class="h-5 bg-warmGray-700"></TwClass>
            <TwClass name="warmGray-600" tooltip="" class="h-5 bg-warmGray-600"></TwClass>
            <TwClass name="warmGray-500" tooltip="" class="h-5 bg-warmGray-500"></TwClass>
            <TwClass name="warmGray-400" tooltip="" class="h-5 bg-warmGray-400"></TwClass>
            <TwClass name="warmGray-300" tooltip="" class="h-5 bg-warmGray-300"></TwClass>
            <TwClass name="warmGray-200" tooltip="" class="h-5 bg-warmGray-200"></TwClass>
            <TwClass name="warmGray-100" tooltip="" class="h-5 bg-warmGray-100"></TwClass>
            <TwClass name="warmGray-50" tooltip="" class="h-5 bg-warmGray-50 rounded-b"></TwClass>
          </div>
          <div></div>
          <div class="grid" style="grid-template-rows: 60px repeat(10, 1fr)">
            <div class="relative h-5 self-end">
              <div class="h-5 absolute transform -rotate-45 origin-left left-2.5 top-1 text-red-300">red</div>
            </div>
            <TwClass name="red-900" tooltip="" class="h-5 bg-red-900 rounded-t"></TwClass>
            <TwClass name="red-800" tooltip="" class="h-5 bg-red-800"></TwClass>
            <TwClass name="red-700" tooltip="" class="h-5 bg-red-700"></TwClass>
            <TwClass name="red-600" tooltip="" class="h-5 bg-red-600"></TwClass>
            <TwClass name="red-500" tooltip="" class="h-5 bg-red-500"></TwClass>
            <TwClass name="red-400" tooltip="" class="h-5 bg-red-400"></TwClass>
            <TwClass name="red-300" tooltip="" class="h-5 bg-red-300"></TwClass>
            <TwClass name="red-200" tooltip="" class="h-5 bg-red-200"></TwClass>
            <TwClass name="red-100" tooltip="" class="h-5 bg-red-100"></TwClass>
            <TwClass name="red-50" tooltip="" class="h-5 bg-red-50 rounded-b"></TwClass>
          </div>
          <div class="grid" style="grid-template-rows: 60px repeat(10, 1fr)">
            <div class="relative h-5 self-end">
              <div class="h-5 absolute transform -rotate-45 origin-left left-2.5 top-1 text-orange-300">orange*</div>
            </div>
            <TwClass name="orange-900" tooltip="" class="h-5 bg-orange-900 rounded-t"></TwClass>
            <TwClass name="orange-800" tooltip="" class="h-5 bg-orange-800"></TwClass>
            <TwClass name="orange-700" tooltip="" class="h-5 bg-orange-700"></TwClass>
            <TwClass name="orange-600" tooltip="" class="h-5 bg-orange-600"></TwClass>
            <TwClass name="orange-500" tooltip="" class="h-5 bg-orange-500"></TwClass>
            <TwClass name="orange-400" tooltip="" class="h-5 bg-orange-400"></TwClass>
            <TwClass name="orange-300" tooltip="" class="h-5 bg-orange-300"></TwClass>
            <TwClass name="orange-200" tooltip="" class="h-5 bg-orange-200"></TwClass>
            <TwClass name="orange-100" tooltip="" class="h-5 bg-orange-100"></TwClass>
            <TwClass name="orange-50" tooltip="" class="h-5 bg-orange-50 rounded-b"></TwClass>
          </div>
          <div class="grid" style="grid-template-rows: 60px repeat(10, 1fr)">
            <div class="relative h-5 self-end">
              <div class="h-5 absolute transform -rotate-45 origin-left left-2.5 top-1 text-amber-300">amber*</div>
            </div>
            <TwClass name="amber-900" tooltip="" class="h-5 bg-amber-900 rounded-t"></TwClass>
            <TwClass name="amber-800" tooltip="" class="h-5 bg-amber-800"></TwClass>
            <TwClass name="amber-700" tooltip="" class="h-5 bg-amber-700"></TwClass>
            <TwClass name="amber-600" tooltip="" class="h-5 bg-amber-600"></TwClass>
            <TwClass name="amber-500" tooltip="" class="h-5 bg-amber-500"></TwClass>
            <TwClass name="amber-400" tooltip="" class="h-5 bg-amber-400"></TwClass>
            <TwClass name="amber-300" tooltip="" class="h-5 bg-amber-300"></TwClass>
            <TwClass name="amber-200" tooltip="" class="h-5 bg-amber-200"></TwClass>
            <TwClass name="amber-100" tooltip="" class="h-5 bg-amber-100"></TwClass>
            <TwClass name="amber-50" tooltip="" class="h-5 bg-amber-50 rounded-b"></TwClass>
          </div>
          <div class="grid" style="grid-template-rows: 60px repeat(10, 1fr)">
            <div class="relative h-5 self-end">
              <div class="h-5 absolute transform -rotate-45 origin-left left-2.5 top-1 text-yellow-300">yellow</div>
            </div>
            <TwClass name="yellow-900" tooltip="" class="h-5 bg-yellow-900 rounded-t"></TwClass>
            <TwClass name="yellow-800" tooltip="" class="h-5 bg-yellow-800"></TwClass>
            <TwClass name="yellow-700" tooltip="" class="h-5 bg-yellow-700"></TwClass>
            <TwClass name="yellow-600" tooltip="" class="h-5 bg-yellow-600"></TwClass>
            <TwClass name="yellow-500" tooltip="" class="h-5 bg-yellow-500"></TwClass>
            <TwClass name="yellow-400" tooltip="" class="h-5 bg-yellow-400"></TwClass>
            <TwClass name="yellow-300" tooltip="" class="h-5 bg-yellow-300"></TwClass>
            <TwClass name="yellow-200" tooltip="" class="h-5 bg-yellow-200"></TwClass>
            <TwClass name="yellow-100" tooltip="" class="h-5 bg-yellow-100"></TwClass>
            <TwClass name="yellow-50" tooltip="" class="h-5 bg-yellow-50 rounded-b"></TwClass>
          </div>
          <div class="grid" style="grid-template-rows: 60px repeat(10, 1fr)">
            <div class="relative h-5 self-end">
              <div class="h-5 absolute transform -rotate-45 origin-left left-2.5 top-1 text-lime-300">lime*</div>
            </div>
            <TwClass name="lime-900" tooltip="" class="h-5 bg-lime-900 rounded-t"></TwClass>
            <TwClass name="lime-800" tooltip="" class="h-5 bg-lime-800"></TwClass>
            <TwClass name="lime-700" tooltip="" class="h-5 bg-lime-700"></TwClass>
            <TwClass name="lime-600" tooltip="" class="h-5 bg-lime-600"></TwClass>
            <TwClass name="lime-500" tooltip="" class="h-5 bg-lime-500"></TwClass>
            <TwClass name="lime-400" tooltip="" class="h-5 bg-lime-400"></TwClass>
            <TwClass name="lime-300" tooltip="" class="h-5 bg-lime-300"></TwClass>
            <TwClass name="lime-200" tooltip="" class="h-5 bg-lime-200"></TwClass>
            <TwClass name="lime-100" tooltip="" class="h-5 bg-lime-100"></TwClass>
            <TwClass name="lime-50" tooltip="" class="h-5 bg-lime-50 rounded-b"></TwClass>
          </div>
          <div class="grid" style="grid-template-rows: 60px repeat(10, 1fr)">
            <div class="relative h-5 self-end">
              <div class="h-5 absolute transform -rotate-45 origin-left left-2.5 top-1 text-green-300">green</div>
            </div>
            <TwClass name="green-900" tooltip="" class="h-5 bg-green-900 rounded-t"></TwClass>
            <TwClass name="green-800" tooltip="" class="h-5 bg-green-800"></TwClass>
            <TwClass name="green-700" tooltip="" class="h-5 bg-green-700"></TwClass>
            <TwClass name="green-600" tooltip="" class="h-5 bg-green-600"></TwClass>
            <TwClass name="green-500" tooltip="" class="h-5 bg-green-500"></TwClass>
            <TwClass name="green-400" tooltip="" class="h-5 bg-green-400"></TwClass>
            <TwClass name="green-300" tooltip="" class="h-5 bg-green-300"></TwClass>
            <TwClass name="green-200" tooltip="" class="h-5 bg-green-200"></TwClass>
            <TwClass name="green-100" tooltip="" class="h-5 bg-green-100"></TwClass>
            <TwClass name="green-50" tooltip="" class="h-5 bg-green-50 rounded-b"></TwClass>
          </div>
          <div class="grid" style="grid-template-rows: 60px repeat(10, 1fr)">
            <div class="relative h-5 self-end">
              <div class="h-5 absolute transform -rotate-45 origin-left left-2.5 top-1 text-emerald-300">emerald*</div>
            </div>
            <TwClass name="emerald-900" tooltip="" class="h-5 bg-emerald-900 rounded-t"></TwClass>
            <TwClass name="emerald-800" tooltip="" class="h-5 bg-emerald-800"></TwClass>
            <TwClass name="emerald-700" tooltip="" class="h-5 bg-emerald-700"></TwClass>
            <TwClass name="emerald-600" tooltip="" class="h-5 bg-emerald-600"></TwClass>
            <TwClass name="emerald-500" tooltip="" class="h-5 bg-emerald-500"></TwClass>
            <TwClass name="emerald-400" tooltip="" class="h-5 bg-emerald-400"></TwClass>
            <TwClass name="emerald-300" tooltip="" class="h-5 bg-emerald-300"></TwClass>
            <TwClass name="emerald-200" tooltip="" class="h-5 bg-emerald-200"></TwClass>
            <TwClass name="emerald-100" tooltip="" class="h-5 bg-emerald-100"></TwClass>
            <TwClass name="emerald-50" tooltip="" class="h-5 bg-emerald-50 rounded-b"></TwClass>
          </div>
          <div class="grid" style="grid-template-rows: 60px repeat(10, 1fr)">
            <div class="relative h-5 self-end">
              <div class="h-5 absolute transform -rotate-45 origin-left left-2.5 top-1 text-teal-300">teal*</div>
            </div>
            <TwClass name="teal-900" tooltip="" class="h-5 bg-teal-900 rounded-t"></TwClass>
            <TwClass name="teal-800" tooltip="" class="h-5 bg-teal-800"></TwClass>
            <TwClass name="teal-700" tooltip="" class="h-5 bg-teal-700"></TwClass>
            <TwClass name="teal-600" tooltip="" class="h-5 bg-teal-600"></TwClass>
            <TwClass name="teal-500" tooltip="" class="h-5 bg-teal-500"></TwClass>
            <TwClass name="teal-400" tooltip="" class="h-5 bg-teal-400"></TwClass>
            <TwClass name="teal-300" tooltip="" class="h-5 bg-teal-300"></TwClass>
            <TwClass name="teal-200" tooltip="" class="h-5 bg-teal-200"></TwClass>
            <TwClass name="teal-100" tooltip="" class="h-5 bg-teal-100"></TwClass>
            <TwClass name="teal-50" tooltip="" class="h-5 bg-teal-50 rounded-b"></TwClass>
          </div>
          <div class="grid" style="grid-template-rows: 60px repeat(10, 1fr)">
            <div class="relative h-5 self-end">
              <div class="h-5 absolute transform -rotate-45 origin-left left-2.5 top-1 text-cyan-300">cyan*</div>
            </div>
            <TwClass name="cyan-900" tooltip="" class="h-5 bg-cyan-900 rounded-t"></TwClass>
            <TwClass name="cyan-800" tooltip="" class="h-5 bg-cyan-800"></TwClass>
            <TwClass name="cyan-700" tooltip="" class="h-5 bg-cyan-700"></TwClass>
            <TwClass name="cyan-600" tooltip="" class="h-5 bg-cyan-600"></TwClass>
            <TwClass name="cyan-500" tooltip="" class="h-5 bg-cyan-500"></TwClass>
            <TwClass name="cyan-400" tooltip="" class="h-5 bg-cyan-400"></TwClass>
            <TwClass name="cyan-300" tooltip="" class="h-5 bg-cyan-300"></TwClass>
            <TwClass name="cyan-200" tooltip="" class="h-5 bg-cyan-200"></TwClass>
            <TwClass name="cyan-100" tooltip="" class="h-5 bg-cyan-100"></TwClass>
            <TwClass name="cyan-50" tooltip="" class="h-5 bg-cyan-50 rounded-b"></TwClass>
          </div>
          <div class="grid" style="grid-template-rows: 60px repeat(10, 1fr)">
            <div class="relative h-5 self-end">
              <div class="h-5 absolute transform -rotate-45 origin-left left-2.5 top-1 text-lightBlue-300">lightBlue*</div>
            </div>
            <TwClass name="lightBlue-900" tooltip="" class="h-5 bg-lightBlue-900 rounded-t"></TwClass>
            <TwClass name="lightBlue-800" tooltip="" class="h-5 bg-lightBlue-800"></TwClass>
            <TwClass name="lightBlue-700" tooltip="" class="h-5 bg-lightBlue-700"></TwClass>
            <TwClass name="lightBlue-600" tooltip="" class="h-5 bg-lightBlue-600"></TwClass>
            <TwClass name="lightBlue-500" tooltip="" class="h-5 bg-lightBlue-500"></TwClass>
            <TwClass name="lightBlue-400" tooltip="" class="h-5 bg-lightBlue-400"></TwClass>
            <TwClass name="lightBlue-300" tooltip="" class="h-5 bg-lightBlue-300"></TwClass>
            <TwClass name="lightBlue-200" tooltip="" class="h-5 bg-lightBlue-200"></TwClass>
            <TwClass name="lightBlue-100" tooltip="" class="h-5 bg-lightBlue-100"></TwClass>
            <TwClass name="lightBlue-50" tooltip="" class="h-5 bg-lightBlue-50 rounded-b"></TwClass>
          </div>
          <div class="grid" style="grid-template-rows: 60px repeat(10, 1fr)">
            <div class="relative h-5 self-end">
              <div class="h-5 absolute transform -rotate-45 origin-left left-2.5 top-1 text-blue-300">blue</div>
            </div>
            <TwClass name="blue-900" tooltip="" class="h-5 bg-blue-900 rounded-t"></TwClass>
            <TwClass name="blue-800" tooltip="" class="h-5 bg-blue-800"></TwClass>
            <TwClass name="blue-700" tooltip="" class="h-5 bg-blue-700"></TwClass>
            <TwClass name="blue-600" tooltip="" class="h-5 bg-blue-600"></TwClass>
            <TwClass name="blue-500" tooltip="" class="h-5 bg-blue-500"></TwClass>
            <TwClass name="blue-400" tooltip="" class="h-5 bg-blue-400"></TwClass>
            <TwClass name="blue-300" tooltip="" class="h-5 bg-blue-300"></TwClass>
            <TwClass name="blue-200" tooltip="" class="h-5 bg-blue-200"></TwClass>
            <TwClass name="blue-100" tooltip="" class="h-5 bg-blue-100"></TwClass>
            <TwClass name="blue-50" tooltip="" class="h-5 bg-blue-50 rounded-b"></TwClass>
          </div>
          <div class="grid" style="grid-template-rows: 60px repeat(10, 1fr)">
            <div class="relative h-5 self-end">
              <div class="h-5 absolute transform -rotate-45 origin-left left-2.5 top-1 text-indigo-300">indigo</div>
            </div>
            <TwClass name="indigo-900" tooltip="" class="h-5 bg-indigo-900 rounded-t"></TwClass>
            <TwClass name="indigo-800" tooltip="" class="h-5 bg-indigo-800"></TwClass>
            <TwClass name="indigo-700" tooltip="" class="h-5 bg-indigo-700"></TwClass>
            <TwClass name="indigo-600" tooltip="" class="h-5 bg-indigo-600"></TwClass>
            <TwClass name="indigo-500" tooltip="" class="h-5 bg-indigo-500"></TwClass>
            <TwClass name="indigo-400" tooltip="" class="h-5 bg-indigo-400"></TwClass>
            <TwClass name="indigo-300" tooltip="" class="h-5 bg-indigo-300"></TwClass>
            <TwClass name="indigo-200" tooltip="" class="h-5 bg-indigo-200"></TwClass>
            <TwClass name="indigo-100" tooltip="" class="h-5 bg-indigo-100"></TwClass>
            <TwClass name="indigo-50" tooltip="" class="h-5 bg-indigo-50 rounded-b"></TwClass>
          </div>
          <div class="grid" style="grid-template-rows: 60px repeat(10, 1fr)">
            <div class="relative h-5 self-end">
              <div class="h-5 absolute transform -rotate-45 origin-left left-2.5 top-1 text-violet-300">violet*</div>
            </div>
            <TwClass name="violet-900" tooltip="" class="h-5 bg-violet-900 rounded-t"></TwClass>
            <TwClass name="violet-800" tooltip="" class="h-5 bg-violet-800"></TwClass>
            <TwClass name="violet-700" tooltip="" class="h-5 bg-violet-700"></TwClass>
            <TwClass name="violet-600" tooltip="" class="h-5 bg-violet-600"></TwClass>
            <TwClass name="violet-500" tooltip="" class="h-5 bg-violet-500"></TwClass>
            <TwClass name="violet-400" tooltip="" class="h-5 bg-violet-400"></TwClass>
            <TwClass name="violet-300" tooltip="" class="h-5 bg-violet-300"></TwClass>
            <TwClass name="violet-200" tooltip="" class="h-5 bg-violet-200"></TwClass>
            <TwClass name="violet-100" tooltip="" class="h-5 bg-violet-100"></TwClass>
            <TwClass name="violet-50" tooltip="" class="h-5 bg-violet-50 rounded-b"></TwClass>
          </div>
          <div class="grid" style="grid-template-rows: 60px repeat(10, 1fr)">
            <div class="relative h-5 self-end">
              <div class="h-5 absolute transform -rotate-45 origin-left left-2.5 top-1 text-purple-300">purple</div>
            </div>
            <TwClass name="purple-900" tooltip="" class="h-5 bg-purple-900 rounded-t"></TwClass>
            <TwClass name="purple-800" tooltip="" class="h-5 bg-purple-800"></TwClass>
            <TwClass name="purple-700" tooltip="" class="h-5 bg-purple-700"></TwClass>
            <TwClass name="purple-600" tooltip="" class="h-5 bg-purple-600"></TwClass>
            <TwClass name="purple-500" tooltip="" class="h-5 bg-purple-500"></TwClass>
            <TwClass name="purple-400" tooltip="" class="h-5 bg-purple-400"></TwClass>
            <TwClass name="purple-300" tooltip="" class="h-5 bg-purple-300"></TwClass>
            <TwClass name="purple-200" tooltip="" class="h-5 bg-purple-200"></TwClass>
            <TwClass name="purple-100" tooltip="" class="h-5 bg-purple-100"></TwClass>
            <TwClass name="purple-50" tooltip="" class="h-5 bg-purple-50 rounded-b"></TwClass>
          </div>
          <div class="grid" style="grid-template-rows: 60px repeat(10, 1fr)">
            <div class="relative h-5 self-end">
              <div class="h-5 absolute transform -rotate-45 origin-left left-2.5 top-1 text-fuchsia-300">fuchsia*</div>
            </div>
            <TwClass name="fuchsia-900" tooltip="" class="h-5 bg-fuchsia-900 rounded-t"></TwClass>
            <TwClass name="fuchsia-800" tooltip="" class="h-5 bg-fuchsia-800"></TwClass>
            <TwClass name="fuchsia-700" tooltip="" class="h-5 bg-fuchsia-700"></TwClass>
            <TwClass name="fuchsia-600" tooltip="" class="h-5 bg-fuchsia-600"></TwClass>
            <TwClass name="fuchsia-500" tooltip="" class="h-5 bg-fuchsia-500"></TwClass>
            <TwClass name="fuchsia-400" tooltip="" class="h-5 bg-fuchsia-400"></TwClass>
            <TwClass name="fuchsia-300" tooltip="" class="h-5 bg-fuchsia-300"></TwClass>
            <TwClass name="fuchsia-200" tooltip="" class="h-5 bg-fuchsia-200"></TwClass>
            <TwClass name="fuchsia-100" tooltip="" class="h-5 bg-fuchsia-100"></TwClass>
            <TwClass name="fuchsia-50" tooltip="" class="h-5 bg-fuchsia-50 rounded-b"></TwClass>
          </div>
          <div class="grid" style="grid-template-rows: 60px repeat(10, 1fr)">
            <div class="relative h-5 self-end">
              <div class="h-5 absolute transform -rotate-45 origin-left left-2.5 top-1 text-pink-300">pink</div>
            </div>
            <TwClass name="pink-900" tooltip="" class="h-5 bg-pink-900 rounded-t"></TwClass>
            <TwClass name="pink-800" tooltip="" class="h-5 bg-pink-800"></TwClass>
            <TwClass name="pink-700" tooltip="" class="h-5 bg-pink-700"></TwClass>
            <TwClass name="pink-600" tooltip="" class="h-5 bg-pink-600"></TwClass>
            <TwClass name="pink-500" tooltip="" class="h-5 bg-pink-500"></TwClass>
            <TwClass name="pink-400" tooltip="" class="h-5 bg-pink-400"></TwClass>
            <TwClass name="pink-300" tooltip="" class="h-5 bg-pink-300"></TwClass>
            <TwClass name="pink-200" tooltip="" class="h-5 bg-pink-200"></TwClass>
            <TwClass name="pink-100" tooltip="" class="h-5 bg-pink-100"></TwClass>
            <TwClass name="pink-50" tooltip="" class="h-5 bg-pink-50 rounded-b"></TwClass>
          </div>
          <div class="grid" style="grid-template-rows: 60px repeat(10, 1fr)">
            <div class="relative h-5 self-end">
              <div class="h-5 absolute transform -rotate-45 origin-left left-2.5 top-1 text-rose-300">rose*</div>
            </div>
            <TwClass name="rose-900" tooltip="" class="h-5 bg-rose-900 rounded-t"></TwClass>
            <TwClass name="rose-800" tooltip="" class="h-5 bg-rose-800"></TwClass>
            <TwClass name="rose-700" tooltip="" class="h-5 bg-rose-700"></TwClass>
            <TwClass name="rose-600" tooltip="" class="h-5 bg-rose-600"></TwClass>
            <TwClass name="rose-500" tooltip="" class="h-5 bg-rose-500"></TwClass>
            <TwClass name="rose-400" tooltip="" class="h-5 bg-rose-400"></TwClass>
            <TwClass name="rose-300" tooltip="" class="h-5 bg-rose-300"></TwClass>
            <TwClass name="rose-200" tooltip="" class="h-5 bg-rose-200"></TwClass>
            <TwClass name="rose-100" tooltip="" class="h-5 bg-rose-100"></TwClass>
            <TwClass name="rose-50" tooltip="" class="h-5 bg-rose-50 rounded-b"></TwClass>
          </div>
          <div class="grid bg-gradient-to-b from-coolGray-600 to-white text-transparent bg-clip-text" style="grid-template-rows: 60px repeat(10, 1fr)">
            <div class="h-5"></div>
            <div class="h-5 flex items-center pl-1 font-semibold">900</div>
            <div class="h-5 flex items-center pl-1 font-semibold">800</div>
            <div class="h-5 flex items-center pl-1 font-semibold">700</div>
            <div class="h-5 flex items-center pl-1 font-semibold">600</div>
            <div class="h-5 flex items-center pl-1 font-semibold">500</div>
            <div class="h-5 flex items-center pl-1 font-semibold">400</div>
            <div class="h-5 flex items-center pl-1 font-semibold">300</div>
            <div class="h-5 flex items-center pl-1 font-semibold">200</div>
            <div class="h-5 flex items-center pl-1 font-semibold">100</div>
            <div class="h-5 flex items-center pl-1 font-semibold">50</div>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
export default {}
</script>

