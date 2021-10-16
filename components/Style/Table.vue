<template>
  <Card>
    <div class="content">
      <div><Lnk href="https://tailwindcss.com/docs/border-collapse" class="font-sans text-sm text-coolGray-400">Table border</Lnk></div>
      <div class="grid grid-cols-2 gap-x-2 mb-3 mt-1">
        <div>
          <TwClass name="border-collapse" tooltip="border-collapse: collapse">border-collapse</TwClass>
          <table class="border-collapse border border-emerald-800 h-16 mt-1 bg-coolGray-700 rounded-sm font-sans">
            <thead>
              <tr>
                <th class="border border-emerald-600 px-2">State</th>
                <th class="border border-emerald-600 px-2">City</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-emerald-600 px-2">Indiana</td>
                <td class="border border-emerald-600 px-2">Ohio</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <TwClass name="border-separate" tooltip="border-collapse: separate">border-separate</TwClass>
          <table class="border-separate border border-emerald-600 h-16 mt-1 bg-coolGray-700 rounded-sm font-sans">
            <thead>
              <tr>
                <th class="border border-emerald-600 px-2">State</th>
                <th class="border border-emerald-600 px-2">City</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-emerald-600 px-2">Indiana</td>
                <td class="border border-emerald-600 px-2">Ohio</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div><Lnk href="https://tailwindcss.com/docs/table-layout" class="font-sans text-sm text-coolGray-400">Table layout</Lnk></div>
      <div class="grid grid-cols-2 gap-x-2 mt-1">
        <div>
          <TwClass name="table-auto" tooltip="table-layout: auto">table-auto</TwClass>
          <table class="border-collapse border border-emerald-800 h-16 mt-1 bg-coolGray-700 rounded-sm font-sans table-auto">
            <thead>
              <tr>
                <th class="border border-emerald-600 px-2">Col 1</th>
                <th class="border border-emerald-600 px-2">Col 2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-emerald-600 px-2">This is a long sentence</td>
                <td class="border border-emerald-600 px-2">Word</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <TwClass name="table-fixed" tooltip="table-layout: fixed">table-fixed</TwClass>
          <table class="border-collapse border border-emerald-600 h-16 mt-1 bg-coolGray-700 rounded-sm font-sans table-fixed">
            <thead>
              <tr>
                <th class="border border-emerald-600 px-2 w-1/2">Col 1</th>
                <th class="border border-emerald-600 px-2 w-1/2">Col 2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-emerald-600 px-2">This is a long sentence</td>
                <td class="border border-emerald-600 px-2">Word</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
export default {}
</script>

