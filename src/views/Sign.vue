<template>
  <div class="w-full h-full bg-cover bg-main bg-no-repeat flex justify-end">
    <div class="w-logo h-screen bg-gray-900 bg-opacity-90 overflow-y-auto">
      <img src="../assets/Artboard.png" alt="logo" class="m-12" />
      <div class="text-white text-3xl ml-16 font-bold">Sign In</div>
      <div class="ml-16 mr-16 mt-6">
        <div class="w-full h-px bg-white"></div>
        <div class="text-white mt-12">Email address*</div>
        <input type="text" placeholder="Enter email address" class="p-4 text-white border-white border mt-2 w-full rounded bg-transparent border-solid">
        <div class="text-white mt-6">Password*</div>
        <div class="flex">
          <input type="text" placeholder="Enter your password" class="p-4 text-white w-4/5 border-white border mt-2 rounded bg-transparent border-solid rounded-r-none border-r-0">
          <button class="p-4 text-white border-white border mt-2 w-1/5 rounded bg-transparent border-solid rounded-l-none border-l-0">Show</button>
        </div>
        <div class="flex justify-between mt-6">
          <div class="flex">
            <label class="main block cursor-pointer relative text-white pl-12 mb-4">Remember Password
                <input type="checkbox" class="invisible" checked="checked">
                <span class="geekmark  w-5 h-5 absolute top-0 left-0 bg-theme mt-0.5 rounded-md"></span>
            </label>
          </div>
          <div class="text-white">Forget Password</div>
        </div>
        <button class="bg-theme rounded w-full p-4 mt-10">Login</button>
        <div class="flex justify-between mt-10">
          <div class="w-2/5 h-px bg-white"></div>
          <div class="text-white -mt-3">Or</div>
          <div class="w-2/5 h-px bg-white"></div>
        </div>
        <button class="p-4 w-full bg-white rounded font-bold mt-6">
          <div class="flex justify-between mx-4">
            <img src="../assets/flat-color-icons_google.png" alt="">
            <div>Login with Google</div>
            <img src="" alt="">
          </div>
        </button>
        <div class="flex justify-center my-20">
          <div class="text-white">Don't have account: <span class="text-theme">Register Now</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Sign",
};
</script>