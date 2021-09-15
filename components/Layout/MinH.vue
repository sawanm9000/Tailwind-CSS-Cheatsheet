<template>
  <Card>
    <div class="prefix">
      <Lnk href="https://tailwindcss.com/docs/min-height">min-h-</Lnk>
    </div>
    <div class="content">
      <div class="grid grid-cols-2 gap-2">
        <div class="space-y-0.5">
          <TwClass name="min-h-full" tooltip="min-height: 100%" class="w-max">full</TwClass>
          <div class="border border-gray-300">
            <div class="bg-blue-600 w-full flex flex-col justify-between items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M7 11l5-5m0 0l5 5m-5-5v12" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17 13l-5 5m0 0l-5-5m5 5V6" />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <TwClass name="min-h-screen" tooltip="min-height: 100vh" class="w-max">screen</TwClass>
          <Browser>
						<div class="w-full">
              <div class="bg-blue-600 w-full flex flex-col justify-between items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M7 11l5-5m0 0l5 5m-5-5v12" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17 13l-5 5m0 0l-5-5m5 5V6" />
                </svg>
              </div>
            </div>
          </Browser>
        </div>
        <div>
          <TwClass name="min-h-0" tooltip="min-height: 0px" class="w-max">0</TwClass>
          <div><span class="text-green-400">0px</span></div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
export default {}
</script>
