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
          <div class="text-gray-400 ml-12 text-xs">STEP 02/03</div>
          <div class="text-white">Residency Info.</div>
        </div>
      </div>
      <div class="text-white text-3xl ml-24 font-bold">Complete Your Profile!</div>
      <div class="ml-24 mr-12 mt-6">
        <div class="w-full h-px bg-white"></div>
        <div class="text-white mt-12">Phone number</div>
        <input type="text" placeholder="" class="p-4 text-white border-white border mt-2 w-full rounded bg-transparent border-solid">
        <div class="text-white mt-6">Your address</div>
        <input type="text" placeholder="Please enter address" class="p-4 text-white border-white border mt-2 w-full rounded bg-transparent border-solid">
        <div class="text-white mt-6">Country of residence</div>
        <div class="flex">
          <select name="" class="p-4 text-white border-white border mt-2 w-5/6 rounded bg-transparent border-solid appearance-none rounded-r-none border-r-0" id="">
            <option value="0">Please select</option>
          </select>
          <button class="p-4 border-white border mt-2 w-1/6 rounded bg-transparent border-solid rounded-l-none border-l-0"><img src="../assets/carret-down.png" class="ml-4" alt=""></button>
        </div>
        
        <button class="bg-theme rounded w-full p-4 mt-10 mb-6">Save & Continue</button>
        <div class="flex justify-center">
          <div>
            <img src="../assets/lock_24px.png" class="mt-1.5 mr-2" alt="">
          </div>
          <div class="text-white">Your Info is safely secured</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Profile",
  components: {
    
  },
  methods: {
    
  },
};
</script>