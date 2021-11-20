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
          <div class="text-white ml-9 text-xs">STEP 01/03</div>
          <div class="text-white">Personal Info.</div>
        </div>
      </div>
      <div class="text-white text-3xl ml-24 font-bold">Register</div>
      <div class="ml-24 mr-12 mt-6">
        <div class="w-full h-px bg-white"></div>
        <div class="text-white mt-12">Your fullname*</div>
        <input type="text" placeholder="Enter your name" class="p-4 text-white border-white border mt-2 w-full rounded bg-transparent border-solid">
        <div class="text-white mt-6">Email address*</div>
        <input type="text" placeholder="Enter email address" class="p-4 text-white border-white border mt-2 w-full rounded bg-transparent border-solid">
        <div class="text-white mt-6">Create Password*</div>
        <div class="flex">
          <input type="text" placeholder="Create password" class="p-4 text-white w-4/5 border-white border mt-2 rounded bg-transparent border-solid rounded-r-none border-r-0">
          <button class="p-4 border-white border mt-2 w-1/5 rounded bg-transparent border-solid rounded-l-none border-l-0">Show</button>
        </div>
        <div class="flex justify-between mt-6">
          <div class="flex">
            <label class="main block cursor-pointer relative text-white pl-12 mb-4">I agree to terms & conditions
                <input type="checkbox" class="invisible" checked="checked">
                <span class="geekmark w-5 h-5 absolute top-0 left-0 bg-theme mt-0.5 rounded-md"></span>
            </label>
          </div>
        </div>
        <button class="bg-theme rounded text-white w-full p-4 mt-10">Register Account</button>
        <div class="flex justify-between mt-10">
          <div class="w-2/5 h-px bg-white"></div>
          <div class="text-white -mt-3">Or</div>
          <div class="w-2/5 h-px bg-white"></div>
        </div>
        <button class="p-4 w-full bg-white rounded font-bold mt-6 mb-6">
          <div class="flex justify-between mx-4">
            <img src="../assets/flat-color-icons_google.png" alt="">
            <div>Register with Google</div>
            <img src="" alt="">
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Register",
  components: {
  },
  methods: {
    
  },
};
</script>