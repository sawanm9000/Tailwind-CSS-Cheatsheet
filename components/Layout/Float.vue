<template>
  <Card>
    <div class="prefix">
      <Lnk href="https://tailwindcss.com/docs/float" class="whitespace-pre">float-</Lnk>
    </div>
    <div class="content">
      <div class="font-sans text-sm text-coolGray-400 mb-2">On box</div>
      <div class="grid grid-cols-3 gap-2">
        <div>
          <TwClass name="float-left" tooltip="float: left" class="mb-1 w-max">left</TwClass>
          <div class="text-box-small bg-black h-20 p-1 overflow-hidden">
            <div class="w-9 h-9 bg-coolGray-700 mb-1 mr-1 rounded float-left"></div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam deserunt doloremque obcaecati ad adipisci ipsa sint deleniti consectetur! Eum rerum quidem quia cum at consectetur laborum eius qui debitis alias.
            Aliquid architecto neque ad quam doloribus, culpa veritatis est illo, beatae eveniet non labore harum officia voluptas nihil eaque porro, maxime sequi omnis consequuntur doloremque similique itaque magni? Sequi, dolores?</p>
          </div>
        </div>
        <div>
          <TwClass name="float-right" tooltip="float: right" class="mb-1 w-max">right</TwClass>
          <div class="text-box-small bg-black h-20 p-1 overflow-hidden">
            <div class="w-9 h-9 bg-coolGray-700 mb-1 ml-1 rounded float-right"></div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam deserunt doloremque obcaecati ad adipisci ipsa sint deleniti consectetur! Eum rerum quidem quia cum at consectetur laborum eius qui debitis alias.
            Aliquid architecto neque ad quam doloribus, culpa veritatis est illo, beatae eveniet non labore harum officia voluptas nihil eaque porro, maxime sequi omnis consequuntur doloremque similique itaque magni? Sequi, dolores?</p>
          </div>
        </div>
        <div>
          <TwClass name="float-none" tooltip="float: none" class="mb-1 w-max">none</TwClass>
          <div class="text-box-small bg-black h-20 p-1 overflow-hidden">
            <div class="w-9 h-9 bg-coolGray-700 mb-1 rounded float-none"></div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam deserunt doloremque obcaecati ad adipisci ipsa sint deleniti consectetur! Eum rerum quidem quia cum at consectetur laborum eius qui debitis alias.
            Aliquid architecto neque ad quam doloribus, culpa veritatis est illo, beatae eveniet non labore harum officia voluptas nihil eaque porro, maxime sequi omnis consequuntur doloremque similique itaque magni? Sequi, dolores?</p>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
export default {}
</script>

