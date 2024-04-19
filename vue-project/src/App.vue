<template>
  <div>
    <div class="wrapper flex flex-row justify-center m-auto w-full mt-20">
      <nav class="flex justify-center m-auto">
        <button class="mr-10 bg-slate-300 border-2 border-black hover:bg-slate-600 hover:text-gray-50">
          <RouterLink to="/" class=" ">Signup Page</RouterLink>
        </button>
        <button class="bg-slate-300 border-2 border-black hover:bg-slate-600 hover:text-gray-50">
          <RouterLink to="/about" class="]"> Graph 1</RouterLink>
        </button>
      </nav>
    </div>
  </div>
  <button class="absolute top-5 right-5">Sign Out!</button>
  <RouterView/>
</template>


<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>


<style lang="scss" scoped>


</style>
