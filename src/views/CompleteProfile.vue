<template>
  <div class="w-full h-full bg-cover bg-main bg-no-repeat flex justify-end">
    <div class="w-logo h-screen bg-gray-900 bg-opacity-90 overflow-y-auto">
      <div class="flex mt-14 justify-between">
        <div class="flex ml-3">
          <div class="mt-0.5">
            <img src="../assets/arrow_back_ios_24px.png" alt="">
          </div>
          <div class="text-gray-400 ml-1">Back</div>
          <img src="../assets/Artboard.png" alt="logo" class="ml-2 -mt-4 mr-4 mb-10"/>
        </div>
        
        <div class="mr-12">
          <div class="text-gray-400 ml-5 text-xs">STEP 03/03</div>
          <div class="text-gray-500">Verification</div>
        </div>
      </div>
      <div class="text-white text-3xl ml-24 font-bold">Complete Your Profile!</div>
      <div class="ml-24 mr-12 mt-6">
        <div class="w-full h-px bg-white"></div>
        <div class="text-white mt-12">Mobile Verification Code</div>
        <div class="flex">
          <input type="text" value="090912345567" class="p-4 text-white w-4/5 border-theme border mt-2 rounded bg-transparent border-solid rounded-r-none border-r-0">
          <button class="p-4 text-white border-theme border mt-2 w-1/5 rounded bg-transparent border-solid rounded-l-none border-l-0"><img src="../assets/circlecheckfull.png" class="ml-8" alt=""></button>
        </div>
        <button class="bg-theme rounded w-full p-4 mt-10 mb-6">Save & Continue</button>
        <div class="flex justify-center">
          <div>
            <img src="../assets/lock_24px1.png" class="mt-1.5 mr-2" alt="">
          </div>
          <div class="text-gray-500">Your Info is safely secured</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "CompleteProfile",
  components: {
    
  },
  methods: {
    
  },
};
</script>