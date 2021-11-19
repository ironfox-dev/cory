<template>
  <div class="w-screen h-screen bg-cover bg-img bg-no-repeat flex justify-end">
    <div class="w-logo h-screen bg-gray-900 bg-opacity-90">
      <img src="../assets/Artboard.png" alt="logo" class="m-12" />
      <div class="text-white text-3xl ml-16 font-bold">Sign In</div>
      <div class="ml-16 mr-20 mt-6">
        <div class="w-full h-px bg-white"></div>
        <div class="text-white mt-12">Email address*</div>
        <input type="text" placeholder="Enter email address" class="p-4 text-white border-white border mt-2 w-full rounded bg-transparent border-solid">
        <div class="text-white mt-6">Password*</div>
        <input type="text" placeholder="Enter your password" class="p-4 text-white border-white border mt-2 w-full rounded bg-transparent border-solid">
        <div class="flex justify-between mt-6">
          <div class="flex">
            <input type="checkbox" class="bg-custom mt-1.5" name="" id="">
            <div class="text-white ml-6">Remember Password</div>
          </div>
          <div class="text-white">Forget Password</div>
        </div>
        <button class="bg-custom rounded w-full p-4 mt-10">Login</button>
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
        <div class="flex justify-center mt-24">
          <div class="text-white">Don't have account: <span class="color-custom">Register Now</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Sign",
  components: {
  },
  methods: {
    
  },
};
</script>
<style>
.bg-img {
  background-image: url('../assets/bg.png');
}
.w-logo {
  width: 593px;
}
::placeholder {
  opacity: 1;
}
.bg-custom {
  background: #91B539;
}
.color-custom {
  color: #91B539;
}
</style>